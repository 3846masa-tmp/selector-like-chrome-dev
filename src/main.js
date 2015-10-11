export function $(selector, element = document) {
  return element.querySelector(selector);
}
export function $$(selector, element = document) {
  return Array.prototype.slice.call(element.querySelectorAll(selector));
}
export function $x(selector, element = document) {
  let results = document.evaluate(selector, element, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
  let array = [];
  for (let i = 0, l = results.snapshotLength; i < l; i++) {
    array.push(results.snapshotItem(i));
  }
  return array;
}
