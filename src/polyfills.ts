import 'core-js/fn/array/for-each';
import 'core-js/fn/object/assign';
import 'core-js/fn/object/entries';
import 'core-js/fn/object/values';
import 'core-js/fn/promise';
import 'core-js/fn/string/pad-start';
import 'intersection-observer';
/* tslint:disable */

// ChildNode.before()
// from: https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/before()/before().md
(function (arr) {
	arr.forEach(function (item) {
		if (item.hasOwnProperty('before')) {
			return;
		}
		Object.defineProperty(item, 'before', {
			configurable: true,
			enumerable: true,
			writable: true,
			value: function before() {
				var argArr = Array.prototype.slice.call(arguments),
					docFrag = document.createDocumentFragment();

				argArr.forEach(function (argItem) {
					var isNode = argItem instanceof Node;
					docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
				});

				this.parentNode.insertBefore(docFrag, this);
			}
		});
	});
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
/* tslint:enable */
