(this.webpackJsonp=this.webpackJsonp||[]).push([[421],{bBUS:function(e,n,t){"use strict";t.r(n);var o=t("jB52"),s=(t("QifN"),t("Tznw"),t("6yen"),t("OeRx"),t("l/dT"),t("RqS2"),t("Zy7a"),t("cjZU"),t("OAhk"),t("X42P"),t("mHhP"),t("fn0I"),t("UB/6"),t("imhG"),t("orcL"),t("d+lS")),c=t.n(s),i=t("iN9h");const r=["OPTION"],a=new Map,l=function(e,n){let{sectionSelector:t,expandSection:o}=e;const s=n.map((function(e){return e.parentElement})),i=c()(s.map((function(e){return function(e,n){return n.parentElement.closest(e)}(t,e)})));!function(e,n){Array.from(document.querySelectorAll(e)).filter((function(e){return!n.includes(e)})).forEach((function(e){e.classList.add("gl-display-none")}))}(t,i),i.forEach(o),function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e.forEach((function(e){return e.classList.add("gl-bg-orange-100")}))}(s)},u=function(e){!function(e){let{sectionSelector:n}=e;document.querySelectorAll(n).forEach((function(e){e.classList.remove("gl-display-none")}))}(e),document.querySelectorAll(".".concat("gl-bg-orange-100")).forEach((function(e){return e.classList.remove("gl-bg-orange-100")}))},d=function(e,n){const t=document.createNodeIterator(e,NodeFilter.SHOW_TEXT,{acceptNode:e=>(function(e,n){return e.textContent.toLowerCase().includes(n)&&r.every((function(n){return!e.parentElement.closest(n)}))})(e,n.toLowerCase())?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}),o=[];for(let e=t.nextNode();e;e=t.nextNode())o.push(e);return o};var f={components:{GlSearchBoxByType:i.a},props:{searchRoot:{type:Element,required:!0},sectionSelector:{type:String,required:!0},isExpandedFn:{type:Function,required:!1,default:function(){return function(){return!1}}}},data:()=>({searchTerm:""}),methods:{search(e){const n={sectionSelector:this.sectionSelector,expandSection:this.expandSection,collapseSection:this.collapseSection,isExpanded:this.isExpandedFn};this.searchTerm=e,u(n),e.length?(!function(e,n){let{isExpanded:t}=n;a.size>0||e.forEach((function(e){return a.set(e,t(e))}))}(document.querySelectorAll(this.sectionSelector),n),l(n,d(this.searchRoot,e))):function(e){let{expandSection:n,collapseSection:t}=e;a.forEach((function(e,o){e?n(o):t(o)})),a.clear()}(n)},expandSection(e){this.$emit("expand",e)},collapseSection(e){this.$emit("collapse",e)}},TYPING_DELAY:400},p=t("tBpV"),h=Object(p.a)(f,(function(){var e=this.$createElement;return(this._self._c||e)("gl-search-box-by-type",{attrs:{value:this.searchTerm,debounce:this.$options.TYPING_DELAY,placeholder:this.__("Search settings")},on:{input:this.search}})}),[],!1,null,null,null).exports,g=t("r5uf");n.default=function(e){let{el:n}=e;return new o.default({el:n,render:function(e){return e(h,{ref:"searchSettings",props:{searchRoot:document.querySelector("#content-body"),sectionSelector:".js-search-settings-section, section.settings",isExpandedFn:g.d},on:{collapse:g.a,expand:g.c}})}})}},r5uf:function(e,n,t){"use strict";t.d(n,"d",(function(){return i})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return l}));var o=t("EmJ/"),s=t.n(o),c=t("/lV4");function i(e){return(e instanceof s.a?e[0]:e).classList.contains("expanded")}function r(e){const n=s()(e);n.find(".js-settings-toggle:not(.js-settings-toggle-trigger-only)").text(Object(c.a)("Collapse")),n.find(".settings-content").off("scroll.expandSection").scrollTop(0),n.addClass("expanded"),n.hasClass("no-animate")||n.addClass("animating").one("animationend.animateSection",(function(){return n.removeClass("animating")}))}function a(e){const n=s()(e);n.find(".js-settings-toggle:not(.js-settings-toggle-trigger-only)").text(Object(c.a)("Expand")),n.find(".settings-content").on("scroll.expandSection",(function(){return r(n)})),n.removeClass("expanded"),n.hasClass("no-animate")||n.addClass("animating").one("animationend.animateSection",(function(){return n.removeClass("animating")}))}function l(){if(s()(".settings").each((function(e,n){const t=s()(n);t.on("click.toggleSection",".js-settings-toggle",(function(){return function(e){e.removeClass("no-animate"),i(e)?a(e):r(e)}(t)})),i(t)||t.find(".settings-content").on("scroll.expandSection",(function(){t.removeClass("no-animate"),r(t)}))})),window.location.hash){const e=s()(window.location.hash);e.length&&e.hasClass("settings")&&r(e)}}}}]);
//# sourceMappingURL=search_settings.af4669af.chunk.js.map