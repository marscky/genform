import { pathToRegex } from './utils/path-to-regex';

/**
 * Match target to a path and call correspnoding handler
 * Executes in the context of a Router instance
 * @param {string} target - the current path being navigated to
 */
function matchPath(target) {
  // find the first match to target and call handler
  // Array#find returns undefined if no route can be matched
  const matchedRoute = Object.values(this.paths)
    .find(({ handler, matcher }) => {
      const found = target.match(matcher);
      if (found) {
        // found.groups contains the named capturing groups for parameters 
        handler(found.groups);
        return true;
      }
    });

  if (!matchedRoute) {
    this.notFound(target);
  }
}

/**
 * Simple router for single page application
 * Hashed url are used for paths
 */
export class Router {
  /*
   * Create a new instance of Router
   * @param {object} [options]
   * @param {array} [options.paths] array of objects with path and handler 
   *    as specified in #add()
   * @param {function(path: string)} [options.notFound] handler when a path 
   *    is not matched
   * @param {boolean} [options.ignoreTrailingSlash] specify whether paths
   *    with trailing slash will be treated as path without
   * @constructor
   */
  constructor({ paths, notFound, ignoreTrailingSlash=true }={}) {
    this.paths = {};

    this.ignoreTrailingSlash = ignoreTrailingSlash;

    if (paths && paths.forEach) {
      paths.forEach(p => this.add(p.path, p.handler));
    }

    Object.defineProperty(this, 'notFound', {
      value: typeof notFound === 'function' 
        ? notFound
        : (path) => { console.error('no matching route found', path) },
      enumerable: true
    });
  }

  /**
   * Add a path and the corresponding handler
   * Expect a path to be specified once only, otherwise will throw an error.
   * @param {string} path
   * @param {function([params: object])} handler - if params are specified in 
   *  path, they will be passed into the handler in the form of key-value pairs
   * @throws {Error} A path can only be specified once only.
   */
  add(path, handler) {
    if (this.paths[path]) {
      throw new Error('A path can only be specified once only', path);
    }

    this.paths[path] = {
      handler,
      matcher: pathToRegex(path)
    };
  }

  /**
   * Navigate to path, shorthand for setting window.location.hash
   * The hash will be prepended  
   * @param {string} path
   */
  navigateTo(path) {
    window.location.hash = path;
  }

  /**
   * Start listening to onhashchange event
   *
   * Once it is called, it will set a nonmodifiable property isListening
   * to indicate that this function is called
   */
  startUrlListener() {
    if (this.isListening) {
      return;
    } else {
      Object.defineProperty(this, 'isListening', { value: true });
    }

    const $ctx = this;

    window.addEventListener('hashchange', () => {
      if (window.location.hash.length === 0) {
        // empty hash: navigate to root
        this.navigateTo('/');
      } else {
        // the string will contain hash as the first character
        let path = window.location.hash.slice(1);
        if (this.ignoreTrailingSlash
            && path.length !== 1 
            && path[path.length-1] === '/') {
          path = path.slice(0, path.length-1);
        }
        matchPath.call($ctx, path);
      }
    });

    // allow correct route on initial page load by triggering the event
    window.dispatchEvent(new window.HashChangeEvent('hashchange'));
  }
}
