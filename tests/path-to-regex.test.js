import { pathToRegex } from '../src/utils/path-to-regex';

describe('pathToRegex', () => {
  it('should convert parameters into named capturing groups', () => {
    const tests = [
      ['/foo/:param1/bar', "/^\\/foo\\/(?<param1>\\w+)\\/bar$/"],
      ['/foo/:param1/:param2', "/^\\/foo\\/(?<param1>\\w+)\\/(?<param2>\\w+)$/"]
    ];
    tests.forEach(test => {
      expect(pathToRegex(test[0]).toString()).toBe(test[1]);
    });
  });

  it('should correctly match paths', () => {
    const tests = [
      ['/foo/bar', '/foo/bar'],
      ['/foo/:param1/bar', '/foo/id/bar'], 
    ];
    tests.forEach(test => {
      expect(pathToRegex(test[0]).test(test[1])).toBeTruthy();
    });
  });

  it('should not match wrong paths', () => {
    const tests = [
      ['/foo/bar', '/foo'],
      ['/foo/bar', '/foo/'],
      ['/foo/:param1/bar', '/foo/id'], 
      ['/foo/:param1/bar', '/foo/id/'], 
      ['/foo/:param1/bar', '/foo/id/bar/foobar'], 
    ];
    tests.forEach(test => {
      expect(pathToRegex(test[0]).test(test[1])).toBeFalsy();
    });
  });
});
