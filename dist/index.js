!function e(t,r,n){function o(s,c){if(!r[s]){if(!t[s]){var u="function"==typeof require&&require;if(!c&&u)return u(s,!0);if(i)return i(s,!0);var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}var f=r[s]={exports:{}};t[s][0].call(f.exports,function(e){var r=t[s][1][e];return o(r?r:e)},f,f.exports,e,t,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(e,t,r){t.exports={default:e("core-js/library/fn/get-iterator"),__esModule:!0}},{"core-js/library/fn/get-iterator":10}],2:[function(e,t,r){t.exports={default:e("core-js/library/fn/is-iterable"),__esModule:!0}},{"core-js/library/fn/is-iterable":11}],3:[function(e,t,r){t.exports={default:e("core-js/library/fn/object/define-properties"),__esModule:!0}},{"core-js/library/fn/object/define-properties":12}],4:[function(e,t,r){t.exports={default:e("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":13}],5:[function(e,t,r){t.exports={default:e("core-js/library/fn/object/freeze"),__esModule:!0}},{"core-js/library/fn/object/freeze":14}],6:[function(e,t,r){"use strict";r.__esModule=!0,r.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],7:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}r.__esModule=!0;var o=e("../core-js/object/define-property"),i=n(o);r.default=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i.default)(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()},{"../core-js/object/define-property":4}],8:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}r.__esModule=!0;var o=e("../core-js/is-iterable"),i=n(o),s=e("../core-js/get-iterator"),c=n(s);r.default=function(){function e(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var s,u=(0,c.default)(e);!(n=(s=u.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if((0,i.default)(Object(t)))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},{"../core-js/get-iterator":1,"../core-js/is-iterable":2}],9:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}r.__esModule=!0;var o=e("../core-js/object/define-properties"),i=n(o),s=e("../core-js/object/freeze"),c=n(s);r.default=function(e,t){return(0,c.default)((0,i.default)(e,{raw:{value:(0,c.default)(t)}}))}},{"../core-js/object/define-properties":3,"../core-js/object/freeze":5}],10:[function(e,t,r){e("../modules/web.dom.iterable"),e("../modules/es6.string.iterator"),t.exports=e("../modules/core.get-iterator")},{"../modules/core.get-iterator":64,"../modules/es6.string.iterator":70,"../modules/web.dom.iterable":71}],11:[function(e,t,r){e("../modules/web.dom.iterable"),e("../modules/es6.string.iterator"),t.exports=e("../modules/core.is-iterable")},{"../modules/core.is-iterable":65,"../modules/es6.string.iterator":70,"../modules/web.dom.iterable":71}],12:[function(e,t,r){e("../../modules/es6.object.define-properties");var n=e("../../modules/_core").Object;t.exports=function(e,t){return n.defineProperties(e,t)}},{"../../modules/_core":21,"../../modules/es6.object.define-properties":67}],13:[function(e,t,r){e("../../modules/es6.object.define-property");var n=e("../../modules/_core").Object;t.exports=function(e,t,r){return n.defineProperty(e,t,r)}},{"../../modules/_core":21,"../../modules/es6.object.define-property":68}],14:[function(e,t,r){e("../../modules/es6.object.freeze"),t.exports=e("../../modules/_core").Object.freeze},{"../../modules/_core":21,"../../modules/es6.object.freeze":69}],15:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],16:[function(e,t,r){t.exports=function(){}},{}],17:[function(e,t,r){var n=e("./_is-object");t.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},{"./_is-object":35}],18:[function(e,t,r){var n=e("./_to-iobject"),o=e("./_to-length"),i=e("./_to-index");t.exports=function(e){return function(t,r,s){var c,u=n(t),a=o(u.length),f=i(s,a);if(e&&r!=r){for(;a>f;)if(c=u[f++],c!=c)return!0}else for(;a>f;f++)if((e||f in u)&&u[f]===r)return e||f||0;return!e&&-1}}},{"./_to-index":55,"./_to-iobject":57,"./_to-length":58}],19:[function(e,t,r){var n=e("./_cof"),o=e("./_wks")("toStringTag"),i="Arguments"==n(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(e){}};t.exports=function(e){var t,r,c;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=s(t=Object(e),o))?r:i?n(t):"Object"==(c=n(t))&&"function"==typeof t.callee?"Arguments":c}},{"./_cof":20,"./_wks":62}],20:[function(e,t,r){var n={}.toString;t.exports=function(e){return n.call(e).slice(8,-1)}},{}],21:[function(e,t,r){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},{}],22:[function(e,t,r){var n=e("./_a-function");t.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},{"./_a-function":15}],23:[function(e,t,r){t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},{}],24:[function(e,t,r){t.exports=!e("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":28}],25:[function(e,t,r){var n=e("./_is-object"),o=e("./_global").document,i=n(o)&&n(o.createElement);t.exports=function(e){return i?o.createElement(e):{}}},{"./_global":29,"./_is-object":35}],26:[function(e,t,r){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],27:[function(e,t,r){var n=e("./_global"),o=e("./_core"),i=e("./_ctx"),s=e("./_hide"),c="prototype",u=function(e,t,r){var a,f,l,_=e&u.F,d=e&u.G,p=e&u.S,b=e&u.P,h=e&u.B,v=e&u.W,y=d?o:o[t]||(o[t]={}),j=y[c],g=d?n:p?n[t]:(n[t]||{})[c];d&&(r=t);for(a in r)f=!_&&g&&void 0!==g[a],f&&a in y||(l=f?g[a]:r[a],y[a]=d&&"function"!=typeof g[a]?r[a]:h&&f?i(l,n):v&&g[a]==l?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t[c]=e[c],t}(l):b&&"function"==typeof l?i(Function.call,l):l,b&&((y.virtual||(y.virtual={}))[a]=l,e&u.R&&j&&!j[a]&&s(j,a,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},{"./_core":21,"./_ctx":22,"./_global":29,"./_hide":31}],28:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(e){return!0}}},{}],29:[function(e,t,r){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},{}],30:[function(e,t,r){var n={}.hasOwnProperty;t.exports=function(e,t){return n.call(e,t)}},{}],31:[function(e,t,r){var n=e("./_object-dp"),o=e("./_property-desc");t.exports=e("./_descriptors")?function(e,t,r){return n.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},{"./_descriptors":24,"./_object-dp":43,"./_property-desc":49}],32:[function(e,t,r){t.exports=e("./_global").document&&document.documentElement},{"./_global":29}],33:[function(e,t,r){t.exports=!e("./_descriptors")&&!e("./_fails")(function(){return 7!=Object.defineProperty(e("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":24,"./_dom-create":25,"./_fails":28}],34:[function(e,t,r){var n=e("./_cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},{"./_cof":20}],35:[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],36:[function(e,t,r){"use strict";var n=e("./_object-create"),o=e("./_property-desc"),i=e("./_set-to-string-tag"),s={};e("./_hide")(s,e("./_wks")("iterator"),function(){return this}),t.exports=function(e,t,r){e.prototype=n(s,{next:o(1,r)}),i(e,t+" Iterator")}},{"./_hide":31,"./_object-create":42,"./_property-desc":49,"./_set-to-string-tag":51,"./_wks":62}],37:[function(e,t,r){"use strict";var n=e("./_library"),o=e("./_export"),i=e("./_redefine"),s=e("./_hide"),c=e("./_has"),u=e("./_iterators"),a=e("./_iter-create"),f=e("./_set-to-string-tag"),l=e("./_object-gpo"),_=e("./_wks")("iterator"),d=!([].keys&&"next"in[].keys()),p="@@iterator",b="keys",h="values",v=function(){return this};t.exports=function(e,t,r,y,j,g,m){a(r,t,y);var x,w,k,O=function(e){if(!d&&e in P)return P[e];switch(e){case b:return function(){return new r(this,e)};case h:return function(){return new r(this,e)}}return function(){return new r(this,e)}},E=t+" Iterator",S=j==h,M=!1,P=e.prototype,T=P[_]||P[p]||j&&P[j],C=T||O(j),A=j?S?O("entries"):C:void 0,L="Array"==t?P.entries||T:T;if(L&&(k=l(L.call(new e)),k!==Object.prototype&&(f(k,E,!0),n||c(k,_)||s(k,_,v))),S&&T&&T.name!==h&&(M=!0,C=function(){return T.call(this)}),n&&!m||!d&&!M&&P[_]||s(P,_,C),u[t]=C,u[E]=v,j)if(x={values:S?C:O(h),keys:g?C:O(b),entries:A},m)for(w in x)w in P||i(P,w,x[w]);else o(o.P+o.F*(d||M),t,x);return x}},{"./_export":27,"./_has":30,"./_hide":31,"./_iter-create":36,"./_iterators":39,"./_library":40,"./_object-gpo":45,"./_redefine":50,"./_set-to-string-tag":51,"./_wks":62}],38:[function(e,t,r){t.exports=function(e,t){return{value:t,done:!!e}}},{}],39:[function(e,t,r){t.exports={}},{}],40:[function(e,t,r){t.exports=!0},{}],41:[function(e,t,r){var n=e("./_uid")("meta"),o=e("./_is-object"),i=e("./_has"),s=e("./_object-dp").f,c=0,u=Object.isExtensible||function(){return!0},a=!e("./_fails")(function(){return u(Object.preventExtensions({}))}),f=function(e){s(e,n,{value:{i:"O"+ ++c,w:{}}})},l=function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,n)){if(!u(e))return"F";if(!t)return"E";f(e)}return e[n].i},_=function(e,t){if(!i(e,n)){if(!u(e))return!0;if(!t)return!1;f(e)}return e[n].w},d=function(e){return a&&p.NEED&&u(e)&&!i(e,n)&&f(e),e},p=t.exports={KEY:n,NEED:!1,fastKey:l,getWeak:_,onFreeze:d}},{"./_fails":28,"./_has":30,"./_is-object":35,"./_object-dp":43,"./_uid":61}],42:[function(e,t,r){var n=e("./_an-object"),o=e("./_object-dps"),i=e("./_enum-bug-keys"),s=e("./_shared-key")("IE_PROTO"),c=function(){},u="prototype",a=function(){var t,r=e("./_dom-create")("iframe"),n=i.length,o="<",s=">";for(r.style.display="none",e("./_html").appendChild(r),r.src="javascript:",t=r.contentWindow.document,t.open(),t.write(o+"script"+s+"document.F=Object"+o+"/script"+s),t.close(),a=t.F;n--;)delete a[u][i[n]];return a()};t.exports=Object.create||function(e,t){var r;return null!==e?(c[u]=n(e),r=new c,c[u]=null,r[s]=e):r=a(),void 0===t?r:o(r,t)}},{"./_an-object":17,"./_dom-create":25,"./_enum-bug-keys":26,"./_html":32,"./_object-dps":44,"./_shared-key":52}],43:[function(e,t,r){var n=e("./_an-object"),o=e("./_ie8-dom-define"),i=e("./_to-primitive"),s=Object.defineProperty;r.f=e("./_descriptors")?Object.defineProperty:function(e,t,r){if(n(e),t=i(t,!0),n(r),o)try{return s(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},{"./_an-object":17,"./_descriptors":24,"./_ie8-dom-define":33,"./_to-primitive":60}],44:[function(e,t,r){var n=e("./_object-dp"),o=e("./_an-object"),i=e("./_object-keys");t.exports=e("./_descriptors")?Object.defineProperties:function(e,t){o(e);for(var r,s=i(t),c=s.length,u=0;c>u;)n.f(e,r=s[u++],t[r]);return e}},{"./_an-object":17,"./_descriptors":24,"./_object-dp":43,"./_object-keys":47}],45:[function(e,t,r){var n=e("./_has"),o=e("./_to-object"),i=e("./_shared-key")("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(e){return e=o(e),n(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}},{"./_has":30,"./_shared-key":52,"./_to-object":59}],46:[function(e,t,r){var n=e("./_has"),o=e("./_to-iobject"),i=e("./_array-includes")(!1),s=e("./_shared-key")("IE_PROTO");t.exports=function(e,t){var r,c=o(e),u=0,a=[];for(r in c)r!=s&&n(c,r)&&a.push(r);for(;t.length>u;)n(c,r=t[u++])&&(~i(a,r)||a.push(r));return a}},{"./_array-includes":18,"./_has":30,"./_shared-key":52,"./_to-iobject":57}],47:[function(e,t,r){var n=e("./_object-keys-internal"),o=e("./_enum-bug-keys");t.exports=Object.keys||function(e){return n(e,o)}},{"./_enum-bug-keys":26,"./_object-keys-internal":46}],48:[function(e,t,r){var n=e("./_export"),o=e("./_core"),i=e("./_fails");t.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],s={};s[e]=t(r),n(n.S+n.F*i(function(){r(1)}),"Object",s)}},{"./_core":21,"./_export":27,"./_fails":28}],49:[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],50:[function(e,t,r){t.exports=e("./_hide")},{"./_hide":31}],51:[function(e,t,r){var n=e("./_object-dp").f,o=e("./_has"),i=e("./_wks")("toStringTag");t.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,i)&&n(e,i,{configurable:!0,value:t})}},{"./_has":30,"./_object-dp":43,"./_wks":62}],52:[function(e,t,r){var n=e("./_shared")("keys"),o=e("./_uid");t.exports=function(e){return n[e]||(n[e]=o(e))}},{"./_shared":53,"./_uid":61}],53:[function(e,t,r){var n=e("./_global"),o="__core-js_shared__",i=n[o]||(n[o]={});t.exports=function(e){return i[e]||(i[e]={})}},{"./_global":29}],54:[function(e,t,r){var n=e("./_to-integer"),o=e("./_defined");t.exports=function(e){return function(t,r){var i,s,c=String(o(t)),u=n(r),a=c.length;return u<0||u>=a?e?"":void 0:(i=c.charCodeAt(u),i<55296||i>56319||u+1===a||(s=c.charCodeAt(u+1))<56320||s>57343?e?c.charAt(u):i:e?c.slice(u,u+2):(i-55296<<10)+(s-56320)+65536)}}},{"./_defined":23,"./_to-integer":56}],55:[function(e,t,r){var n=e("./_to-integer"),o=Math.max,i=Math.min;t.exports=function(e,t){return e=n(e),e<0?o(e+t,0):i(e,t)}},{"./_to-integer":56}],56:[function(e,t,r){var n=Math.ceil,o=Math.floor;t.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},{}],57:[function(e,t,r){var n=e("./_iobject"),o=e("./_defined");t.exports=function(e){return n(o(e))}},{"./_defined":23,"./_iobject":34}],58:[function(e,t,r){var n=e("./_to-integer"),o=Math.min;t.exports=function(e){return e>0?o(n(e),9007199254740991):0}},{"./_to-integer":56}],59:[function(e,t,r){var n=e("./_defined");t.exports=function(e){return Object(n(e))}},{"./_defined":23}],60:[function(e,t,r){var n=e("./_is-object");t.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":35}],61:[function(e,t,r){var n=0,o=Math.random();t.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},{}],62:[function(e,t,r){var n=e("./_shared")("wks"),o=e("./_uid"),i=e("./_global").Symbol,s="function"==typeof i,c=t.exports=function(e){return n[e]||(n[e]=s&&i[e]||(s?i:o)("Symbol."+e))};c.store=n},{"./_global":29,"./_shared":53,"./_uid":61}],63:[function(e,t,r){var n=e("./_classof"),o=e("./_wks")("iterator"),i=e("./_iterators");t.exports=e("./_core").getIteratorMethod=function(e){if(void 0!=e)return e[o]||e["@@iterator"]||i[n(e)]}},{"./_classof":19,"./_core":21,"./_iterators":39,"./_wks":62}],64:[function(e,t,r){var n=e("./_an-object"),o=e("./core.get-iterator-method");t.exports=e("./_core").getIterator=function(e){var t=o(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return n(t.call(e))}},{"./_an-object":17,"./_core":21,"./core.get-iterator-method":63}],65:[function(e,t,r){var n=e("./_classof"),o=e("./_wks")("iterator"),i=e("./_iterators");t.exports=e("./_core").isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||i.hasOwnProperty(n(t))}},{"./_classof":19,"./_core":21,"./_iterators":39,"./_wks":62}],66:[function(e,t,r){"use strict";var n=e("./_add-to-unscopables"),o=e("./_iter-step"),i=e("./_iterators"),s=e("./_to-iobject");t.exports=e("./_iter-define")(Array,"Array",function(e,t){this._t=s(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,o(1)):"keys"==t?o(0,r):"values"==t?o(0,e[r]):o(0,[r,e[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},{"./_add-to-unscopables":16,"./_iter-define":37,"./_iter-step":38,"./_iterators":39,"./_to-iobject":57}],67:[function(e,t,r){var n=e("./_export");n(n.S+n.F*!e("./_descriptors"),"Object",{defineProperties:e("./_object-dps")})},{"./_descriptors":24,"./_export":27,"./_object-dps":44}],68:[function(e,t,r){var n=e("./_export");n(n.S+n.F*!e("./_descriptors"),"Object",{defineProperty:e("./_object-dp").f})},{"./_descriptors":24,"./_export":27,"./_object-dp":43}],69:[function(e,t,r){var n=e("./_is-object"),o=e("./_meta").onFreeze;e("./_object-sap")("freeze",function(e){return function(t){return e&&n(t)?e(o(t)):t}})},{"./_is-object":35,"./_meta":41,"./_object-sap":48}],70:[function(e,t,r){"use strict";var n=e("./_string-at")(!0);e("./_iter-define")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},{"./_iter-define":37,"./_string-at":54}],71:[function(e,t,r){e("./es6.array.iterator");for(var n=e("./_global"),o=e("./_hide"),i=e("./_iterators"),s=e("./_wks")("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],u=0;u<5;u++){var a=c[u],f=n[a],l=f&&f.prototype;l&&!l[s]&&o(l,s,a),i[a]=i.Array}},{"./_global":29,"./_hide":31,"./_iterators":39,"./_wks":62,"./es6.array.iterator":66}],72:[function(e,t,r){"use strict";function n(e){return String(e).replace(o,i)}var o=/[ \t]*\n+[ \t]*/g,i="\n";t.exports=n},{}],73:[function(e,t,r){"use strict";var n=e("./slw");window.addEventListener("load",function(e){var t=new Image;t.onload=function(){var e=new n;document.body.appendChild(e.canvas),e.tileset=t,e.canvas.focus(),!function t(){requestAnimationFrame(t),e.canvasClear(),e.drawLevelTiles(),e.keys[39]&&(e.playerX+=.1),e.keys[37]&&(e.playerX-=.1),e.keys[38]&&(e.playerY-=.1),e.keys[40]&&(e.playerY+=.1),console.log(e)}()},t.src="tileset.png"})},{"./slw":74}],74:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=e("babel-runtime/helpers/slicedToArray"),i=n(o),s=e("babel-runtime/helpers/taggedTemplateLiteral"),c=n(s),u=e("babel-runtime/helpers/classCallCheck"),a=n(u),f=e("babel-runtime/helpers/createClass"),l=n(f),_=(0,c.default)(["--------------------\n                       --------------------\n                       --------------------\n                       --------------------\n                       --------------------\n                       --------------------\n                       --------------------\n                       --------------------\n                       --------------------\n                       --------------------\n                       --------------------\n                       ----------=?=-------\n                       ------=-------------\n                       -----===------------\n                       ----=====-----------\n                       =================---"],["--------------------\n                       --------------------\n                       --------------------\n                       --------------------\n                       --------------------\n                       --------------------\n                       --------------------\n                       --------------------\n                       --------------------\n                       --------------------\n                       --------------------\n                       ----------=?=-------\n                       ------=-------------\n                       -----===------------\n                       ----=====-----------\n                       =================---"]),d=e("trim-lines"),p=function(){function e(){var t=this;(0,a.default)(this,e),this.keys={},this.canvas=document.createElement("canvas"),this.canvas.width=256,this.canvas.height=256,this.canvas.addEventListener("keydown",function(e){t.keys[e.keyCode]=!0}),this.canvas.addEventListener("keyup",function(e){t.keys[e.keyCode]=!1}),this.canvas.setAttribute("tabindex",1),this.playerX=0,this.playerY=0,this.cameraX=0,this.cameraY=0,this.tileSize=30,this.activeLevel={tiles:d(_)}}return(0,l.default)(e,[{key:"canvasClear",value:function(){var e=this.canvas.getContext("2d");e.clearRect(0,0,this.canvas.width,this.canvas.height)}},{key:"getDrawnPosition",value:function(e,t){return[Math.floor(16*e),Math.floor(16*t)]}},{key:"getTilePosition",value:function(e){switch(e){case"-":return[2,0];case"?":return[1,0];case"=":return[0,0];default:return[0,0]}}},{key:"drawLevelTiles",value:function(){for(var e=this.activeLevel.tiles.split("\n"),t=this.canvas.getContext("2d"),r=0,n=0,o=16,s=16,c=n;c<s;c++)for(var u=r;u<o;u++){var a=e[c]||[],f=a[u]||"",l=this.getDrawnPosition(u,c),_=(0,i.default)(l,2),d=_[0],p=_[1],b=this.getTilePosition(f),h=(0,i.default)(b,2),v=h[0],y=h[1];t.drawImage(this.tileset,16*v,16*y,16,16,d,p,16,16)}t.fillStyle="blue";var j=this.getDrawnPosition(this.playerX,this.playerY),g=(0,i.default)(j,2),m=g[0],x=g[1];t.fillRect(m,x,16,32),console.log()}}]),e}();t.exports=p},{"babel-runtime/helpers/classCallCheck":6,"babel-runtime/helpers/createClass":7,"babel-runtime/helpers/slicedToArray":8,"babel-runtime/helpers/taggedTemplateLiteral":9,"trim-lines":72}]},{},[73]);
//# sourceMappingURL=index.js.map