"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ = $;
exports.$$ = $$;
exports.$x = $x;

function $(selector) {
  var element = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];

  return element.querySelector(selector);
}

function $$(selector) {
  var element = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];

  return Array.prototype.slice.call(element.querySelectorAll(selector));
}

function $x(selector) {
  var element = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];

  var results = document.evaluate(selector, element, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
  var array = [];
  for (var i = 0, l = results.snapshotLength; i < l; i++) {
    array.push(results.snapshotItem(i));
  }
  return array;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFPLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBc0I7TUFBcEIsT0FBTyx5REFBRyxRQUFROztBQUM1QyxTQUFPLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Q0FDeEM7O0FBQ00sU0FBUyxFQUFFLENBQUMsUUFBUSxFQUFzQjtNQUFwQixPQUFPLHlEQUFHLFFBQVE7O0FBQzdDLFNBQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0NBQ3ZFOztBQUNNLFNBQVMsRUFBRSxDQUFDLFFBQVEsRUFBc0I7TUFBcEIsT0FBTyx5REFBRyxRQUFROztBQUM3QyxNQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN2RyxNQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDZixPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3RELFNBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0dBQ3JDO0FBQ0QsU0FBTyxLQUFLLENBQUM7Q0FDZCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uICQoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudCkge1xuICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiAkJChzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50KSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiAkeChzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50KSB7XG4gIGxldCByZXN1bHRzID0gZG9jdW1lbnQuZXZhbHVhdGUoc2VsZWN0b3IsIGVsZW1lbnQsIG51bGwsIFhQYXRoUmVzdWx0Lk9SREVSRURfTk9ERV9TTkFQU0hPVF9UWVBFLCBudWxsKTtcbiAgbGV0IGFycmF5ID0gW107XG4gIGZvciAobGV0IGkgPSAwLCBsID0gcmVzdWx0cy5zbmFwc2hvdExlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGFycmF5LnB1c2gocmVzdWx0cy5zbmFwc2hvdEl0ZW0oaSkpO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cbiJdfQ==