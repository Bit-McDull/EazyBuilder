(this.webpackJsonp=this.webpackJsonp||[]).push([[535],{exIq:function(t,e,l){"use strict";l.r(e);l("z4I3"),l("QifN");var n=l("1cpz"),s=l("iN9h"),r=l("/lV4"),o=l("d08M");l("pBsb");var i={functional:!0,props:{shortcuts:{type:Array,required:!0}},render(t,e){const l=function(){var t,e,l,n;const s={up:"↑",down:"↓",left:"←",right:"→",ctrl:Object(r.e)("KeyboardKey|Ctrl"),shift:Object(r.e)("KeyboardKey|Shift"),enter:Object(r.e)("KeyboardKey|Enter"),esc:Object(r.e)("KeyboardKey|Esc"),command:"⌘",option:(null===(t=window.gl)||void 0===t?void 0:null===(e=t.client)||void 0===e?void 0:e.isMac)?"⌥":Object(r.e)("KeyboardKey|Alt")};return s.meta=s.command,s.alt=s.option,s.mod=(null===(l=window.gl)||void 0===l?void 0:null===(n=l.client)||void 0===n?void 0:n.isMac)?s.command:s.ctrl,s}(),{staticClass:n}=e.data,s=e.props.shortcuts.reduce((function(e,n,s){var o,i;if(!(null===(o=window.gl)||void 0===o?void 0:null===(i=o.client)||void 0===i?void 0:i.isMac)&&(n.includes("command")||n.includes("meta")))return e;const a=n.split(/([ +])/);return 0!==s&&e.length&&(e.push(" ".concat(Object(r.a)("or")," ")),a.length>1&&e.push(t("br"))),a.forEach((function(n){if("+"===n)e.push(" + ");else if(" "===n)e.push(" ".concat(Object(r.a)("then")," "));else{var s;e.push(t("kbd",{},[null!==(s=l[n])&&void 0!==s?s:n]))}})),e}),[]);return t("div",{staticClass:n},s)}},a=l("tBpV"),c=Object(a.a)(i,void 0,void 0,!1,null,null,null).exports,u=l("j00k"),d=l("n7CP"),g=l("wQDE"),h={i18n:{toggleLabel:Object(r.a)("Toggle shortcuts")},components:{GlToggle:u.a},data:()=>({localStorageUsable:d.a.isLocalStorageAccessSafe(),shortcutsEnabled:!Object(g.c)()}),methods:{onChange(t){this.shortcutsEnabled=t,t?Object(g.b)():Object(g.a)()}}},b=Object(a.a)(h,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.localStorageUsable?l("div",{staticClass:"js-toggle-shortcuts"},[l("gl-toggle",{attrs:{label:t.$options.i18n.toggleLabel,"label-position":"left"},on:{change:t.onChange},model:{value:t.shortcutsEnabled,callback:function(e){t.shortcutsEnabled=e},expression:"shortcutsEnabled"}})],1):t._e()}),[],!1,null,null,null).exports;function p(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function f(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?p(Object(l),!0).forEach((function(e){y(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):p(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function y(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}var m={components:{GlModal:n.a,GlSearchBoxByType:s.a,ShortcutsToggle:b,Shortcut:c},data:()=>({searchTerm:""}),computed:{filteredKeybindings(){if(!this.searchTerm)return o.lb;const t=this.searchTerm.toLocaleLowerCase();return o.lb.map((function(e){return e.name.toLocaleLowerCase().includes(t)?e:f(f({},e),{},{keybindings:e.keybindings.filter((function(e){return e.description.toLocaleLowerCase().includes(t)}))})})).filter((function(t){return t.keybindings.length}))}},i18n:{title:Object(r.a)("Keyboard shortcuts"),search:Object(r.e)("KeyboardShortcuts|Search keyboard shortcuts"),noMatch:Object(r.e)("KeyboardShortcuts|No shortcuts matched your search")}},v=Object(a.a)(m,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("gl-modal",{attrs:{"modal-id":"keyboard-shortcut-modal",size:"lg",title:t.$options.i18n.title,"data-testid":"modal-shortcuts","body-class":"shortcut-help-body gl-p-0!",visible:!0,"hide-footer":!0},on:{hidden:function(e){return t.$emit("hidden")}}},[l("div",{staticClass:"gl-sticky gl-top-0 gl-py-5 gl-px-5 gl-display-flex gl-align-items-center gl-bg-white"},[l("gl-search-box-by-type",{staticClass:"gl-w-half gl-mr-3",attrs:{"aria-label":t.$options.i18n.search},model:{value:t.searchTerm,callback:function(e){t.searchTerm="string"==typeof e?e.trim():e},expression:"searchTerm"}}),t._v(" "),l("shortcuts-toggle",{staticClass:"gl-w-half gl-ml-3"})],1),t._v(" "),0===t.filteredKeybindings.length?l("div",{staticClass:"gl-px-5"},[t._v("\n    "+t._s(t.$options.i18n.noMatch)+"\n  ")]):l("div",{staticClass:"shortcut-help-container gl-mt-8 gl-px-5 gl-pb-5"},t._l(t.filteredKeybindings,(function(e){return l("section",{key:e.id,staticClass:"shortcut-help-mapping gl-mb-4"},[l("strong",{staticClass:"shortcut-help-mapping-title gl-w-half gl-display-inline-block"},[t._v("\n        "+t._s(e.name)+"\n      ")]),t._v(" "),t._l(e.keybindings,(function(e){return l("div",{key:e.id,staticClass:"gl-display-flex gl-align-items-center"},[l("shortcut",{staticClass:"gl-w-40p gl-flex-shrink-0 gl-text-right gl-pr-4",attrs:{shortcuts:e.defaultKeys}}),t._v(" "),l("div",{staticClass:"gl-w-half gl-flex-shrink-0 gl-flex-grow-1"},[t._v("\n          "+t._s(e.description)+"\n        ")])],1)}))],2)})),0)])}),[],!1,null,null,null);e.default=v.exports}}]);
//# sourceMappingURL=535.e0319bbe.chunk.js.map