import { pathToRegex } from './utils/path-to-regex';

/**
 * Simple router for single page application
 *
 * Hashed urls are used for paths
 * Paths format
 * - pattern matching in path is not supported
 * - paths are matched in a case-sensitive manner
 * - paths are matched literally except for parts with specified parameters
 * - no pattern matching is available for parameters, the only requirement
 *   for matching a parameter in a path is that it must not be empty
 * - paramaters are specified by prefixing the parameter name with a colon
 *   e.g. /user/:id, /post/:postId
 */
export class Router {
  /*
   * Create a new instance of Router
   * @param {object} [options]
   * @param {array} [options.paths] - array of objects with path and handler 
   *     as specified in #add()
   * @param {function(path: string)} [options.notFound] - handler when a path 
   *     is not matched
   */
  constructor({ paths, notFound }={}) {
    this.paths = {};
    if (paths instanceof Array) {
      paths.forEach(p => this.add(p.path, p.handler));
    }

    this.notFound = notFound || (path => { console.error('no matching route found', path) });
  }

  /**
   * Add a path and the corresponding handler
   *
   * If an identical path is added again, the existing handler will be overwritten
   * @param {string} path
   * @param {function([params: object])} handler - if parameterss are specified in 
   *     path, a params object is passed into the handler
   */
  add(path, handler) {
    this.paths[path] = {
      handler,
      rgx: pathToRegex(path)
    };
  }

  /**
   * Match current path and invoke corresponding handler if found
   * If no matching path is found, the notFound handler will be invoked
   * @param {string} path
   */
  matchPath(path) {
    // find the first match to target and call handler
    // Array#find returns undefined if no route can be matched
    const matchedPath = Object.values(this.paths)
      .find(({ handler, rgx }) => {
        const found = path.match(rgx);
        if (found) {
          // found.groups contains the named capturing groups for parameters
          // undefined if no parameter is specified in the path
          handler(found.groups);

          // end Array#find
          return true;
        }
      });

    if (!matchedPath) {
      this.notFound(path);
    }
  }

  /**
   * Navigate to path
   *
   * When setting location.hash, the hash will be prepended automatically
   * with a '#' if it does not start with one, e.g. '/abc' => '#/abc'
   * @param {string} path
   */
  navigateTo(path) {
    window.location.hash = path;
  }

  /**
   * Start the router by listening to hashchange event
   *
   * @throws {Error} If it is called when the router has started already
   */
  start() {
    function _listener () {
      if (window.location.hash.length === 0) {
        // empty hash: navigate to root
        this.navigateTo('/');
      } else {
        // the string will contain the # character as the first character
        const path = window.location.hash.slice(1);
        this.matchPath(path);
      }
    }

    if (this.listener) {
      throw new Error('Already listening to hashchange!');
    }

    const listener = _listener.bind(this);
    window.addEventListener('hashchange', listener);

    // save attached listener so that we can remove it later
    this.listener = listener;

    // allow correct route on initial page load by triggering the event
    window.dispatchEvent(new window.HashChangeEvent('hashchange'));
  }

  /**
   * Stop the router
   */
  stop() {
    if (this.listener) {
      window.removeEventListener(this.listener);
      delete this.listener;
    }
  }
}
