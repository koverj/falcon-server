import { RouteNode } from 'route-node';

export const isXpath = (locator: string) => {
  const selector = processLocator(locator);

  const XPATH_SELECTORS_START = ['/', '(', '../', './', '*/'];

  const XPATH_SELECTOR_REGEXP = [
    // HTML tag
    /^([a-z0-9|-]*)/,
    // optional . or # + class or id
    /(?:(\.|#)(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))?/,
    // optional [attribute-name="attribute-selector"]
    /(?:\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:=(?:"|')([a-zA-z0-9\-_. ]+)(?:"|'))?\])?/,
    // *=query or =query
    /(\*)?=(.+)$/,
  ];

  if (XPATH_SELECTORS_START.some(option => selector.startsWith(option))) {
    return true;
  }

  if (
    selector.match(
      new RegExp(XPATH_SELECTOR_REGEXP.map(rx => rx.source).join(''))
    )
  ) {
    return true;
  }

  return false;
};

export const processLocator = (locator: string) => {
  let result = locator;
  if (result.includes('By.xpath:')) {
    result = replaceAll(result, 'By.xpath:');
  }

  if (result.includes('By.cssSelector:')) {
    result = replaceAll(result, 'By.cssSelector:');
  }

  return result.trim();
};

const replaceAll = (locator: string, phrase: string) => {
  return locator
    .split(phrase)
    .map(s => s.trim())
    .join('')
    .trim();
};

export const addUniqueToArray = (arr: string[], value: string) => {
  return [...new Set([...arr, value])];
};

export const pairwise = (arr: any, func: any) => {
  for (let i = 0; i < arr.length - 1; i++) {
    func(arr[i], arr[i + 1]);
  }
};

export const matchUrl = (url: string, patterns: any[]) => {
  const urlToParse = new URL(url);
  const rootNode = new RouteNode('', '', patterns);
  const path = rootNode.matchPath(urlToParse.pathname, {
    queryParamsMode: 'strict',
  });

  if (!path) {
    return url;
  }

  return `${urlToParse.protocol}//${urlToParse.host}${path.name}`;
};