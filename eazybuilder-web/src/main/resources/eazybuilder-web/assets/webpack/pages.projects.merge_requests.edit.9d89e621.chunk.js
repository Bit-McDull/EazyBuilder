(this.webpackJsonp=this.webpackJsonp||[]).push([[344],{174:function(t,e,n){n("HVBj"),n("gjpc"),t.exports=n("tfe3")},"2i+H":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("EmJ/"),i=n.n(r),o=(n("orcL"),n("/lV4")),s=n("qPgm"),a=(n("+xeR"),n("m/7A"));class c{constructor(){let{dropdown:t,data:e,pattern:n,wrapper:r,editor:o,$input:s}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.pattern=n,this.editor=o,this.dropdown=t,this.$dropdownContainer=r,this.$filenameInput=s||i()("#file_name"),this.$dropdownIcon=i()(".dropdown-menu-toggle-icon",t),this.$loadingIcon=i()('<div class="gl-spinner gl-spinner-orange gl-spinner-sm gl-absolute gl-top-3 gl-right-3 gl-display-none"></div>').insertAfter(this.$dropdownIcon),this.initDropdown(t,e),this.listenForFilenameInput(),this.renderMatchedDropdown(),this.initAutosizeUpdateEvent()}initDropdown(t,e){var n=this;return Object(a.a)(i()(t),{data:e,filterable:!0,selectable:!0,toggleLabel:function(t){return t.name},search:{fields:["name"]},clicked:function(t){return n.onDropdownClicked(t)},text:function(t){return t.name}})}onDropdownClicked(t){this.fetchFileTemplate(t)}initAutosizeUpdateEvent(){this.autosizeUpdateEvent=document.createEvent("Event"),this.autosizeUpdateEvent.initEvent("autosize:update",!0,!1)}listenForFilenameInput(){var t=this;return this.$filenameInput.on("keyup blur",(function(e){return t.renderMatchedDropdown(e)}))}renderMatchedDropdown(){if(!this.$filenameInput.length)return null;return this.pattern.test(this.$filenameInput.val().trim())?this.$dropdownContainer.removeClass("hidden"):this.$dropdownContainer.addClass("hidden")}fetchFileTemplate(t){const{e:e}=t,n=t.selectedObj;return e.preventDefault(),this.requestFile(n)}requestFile(){}setEditorContent(t){let{skipFocus:e}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t)return;const n=t.content;this.editor.setValue(n,1),e||this.editor.focus(),this.editor instanceof i.a&&(this.editor.get(0).dispatchEvent(this.autosizeUpdateEvent),this.editor.trigger("input"))}getEditorContent(){return this.editor.getValue()}startLoadingSpinner(){this.$loadingIcon.removeClass("gl-display-none"),this.$dropdownIcon.addClass("gl-display-none")}stopLoadingSpinner(){this.$loadingIcon.addClass("gl-display-none"),this.$dropdownIcon.removeClass("gl-display-none")}}class l extends c{constructor(){for(var t,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];super(...n),t=this,this.projectId=this.dropdown.data("projectId"),this.issuableType=this.$dropdownContainer.data("issuableType"),this.titleInput=i()("#".concat(this.issuableType,"_title")),this.templateWarningEl=i()(".js-issuable-template-warning"),this.warnTemplateOverride=n[0].warnTemplateOverride;const o={name:this.dropdown.data("selected")};o.name&&this.requestFile(o),i()(".reset-template",this.dropdown.parent()).on("click",(function(){t.setInputValueToTemplateContent()})),i()(".no-template",this.dropdown.parent()).on("click",(function(){t.reset()})),this.templateWarningEl.find(".js-close-btn").on("click",(function(){void 0!==t.previousSelectedIndex?t.dropdown.data("deprecatedJQueryDropdown").selectRowAtIndex(t.previousSelectedIndex):t.reset(),t.templateWarningEl.addClass("hidden")})),this.templateWarningEl.find(".js-override-template").on("click",(function(){t.requestFile(t.overridingTemplate),t.setSelectedIndex(),t.templateWarningEl.addClass("hidden"),t.overridingTemplate=null}))}reset(){this.currentTemplate&&(this.currentTemplate.content=""),this.setInputValueToTemplateContent(),i()(".dropdown-toggle-text",this.dropdown).text(Object(o.a)("Choose a template")),this.previousSelectedIndex=null}setSelectedIndex(){this.previousSelectedIndex=this.dropdown.data("deprecatedJQueryDropdown").selectedIndex}onDropdownClicked(t){const e=this.getEditorContent(),n=""===e||this.currentTemplate&&e===this.currentTemplate.content;if(!this.warnTemplateOverride||n)return super.onDropdownClicked(t),void this.setSelectedIndex();this.overridingTemplate=t.selectedObj,this.templateWarningEl.removeClass("hidden")}requestFile(t){var e=this;this.startLoadingSpinner(),s.a.projectTemplate(this.projectId,this.issuableType,t.name,{source_template_project_id:t.project_id},(function(t){e.currentTemplate=t,e.stopLoadingSpinner(),e.setInputValueToTemplateContent()}))}setInputValueToTemplateContent(){""===this.titleInput.val()?(this.setEditorContent(this.currentTemplate,{skipFocus:!0}),this.titleInput.focus()):this.setEditorContent(this.currentTemplate,{skipFocus:!1})}}class u{constructor(){var t=this;let{$dropdowns:e,editor:n,warnTemplateOverride:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.$dropdowns=e||i()(".js-issuable-selector"),this.editor=n||this.initEditor(),this.$dropdowns.each((function(e,n){const o=i()(n);new l({pattern:/(\.md)/,data:o.data("data"),wrapper:o.closest(".js-issuable-selector-wrap"),dropdown:o,editor:t.editor,warnTemplateOverride:r})}))}initEditor(){const t=i()(".markdown-area");return t.setValue=t.val,t.getValue=t.val,t}}},"9RX+":function(t,e){t.exports=function(t){return t!=t}},At3M:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("2ibD"),i=n("NmEs");const o=function(t){var e;Object(r.a)({method:(null===(e=t.type)||void 0===e?void 0:e.toLowerCase())||"get",url:t.url,params:t.data}).then((function(e){const n=e.data||[],r=Object(i.I)(e.headers),o=Object(i.L)(r),s=o.nextPage>o.page;t.success({results:n,pagination:{more:s}})})).catch(t.error)}},GVjJ:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return c}));n("EWC9"),n("gNBD"),n("orcL");var r=n("0AwG");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const a=function(t){const e=new FormData(t);return function(t){return t.reduce((function(t,e){let{name:n,value:r}=e;return Object.assign(t,{[n]:r})}),{})}(Array.from(e.keys()).map((function(t){let n=e.getAll(t);return{name:t,value:1===(n=n.filter((function(t){return t}))).length?n[0]:n}})))},c=function(t){if(!t)throw new TypeError("`mountEl` argument is required");return[...t.querySelectorAll("[name]")].reduce((function(t,e){const n=e.dataset.jsName;if(!n)return t;const i=Object(r.c)(n),{id:s,placeholder:a,name:c,value:l,type:u,checked:d}=e,h=o({name:c,id:s,value:l},a&&{placeholder:a});return["radio","checkbox"].includes(u)?o(o({},t),{},{[i]:[...t[i]||[],o(o({},h),{},{checked:d})]}):o(o({},t),{},{[i]:h})}),{})}},GY8p:function(t,e){t.exports=function(t,e,n){for(var r=-1,i=null==t?0:t.length;++r<i;)if(n(e,t[r]))return!0;return!1}},KZGt:function(t,e){t.exports=function(){}},P9pc:function(t,e){t.exports=function(t,e,n){for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}},QPL1:function(t,e,n){var r=n("pFYY"),i=n("KZGt"),o=n("1XSk"),s=r&&1/o(new r([,-0]))[1]==1/0?function(t){return new r(t)}:i;t.exports=s},QPeP:function(t,e,n){var r=n("q+Dt");t.exports=function(t,e){return!!(null==t?0:t.length)&&r(t,e,0)>-1}},TvtC:function(t,e,n){"use strict";var r=n("EmJ/"),i=n.n(r),o=n("aoUs"),s=n("CX32"),a=n("DN5t"),c=n("FVJN"),l=n("MDlm"),u=n("hoFG"),d=n("2i+H");e.a=function(){new a.a,new s.a,new c.a(i()(".merge-request-form")),new o.a(i()(".merge-request-form")),new l.a,new u.a,new d.a({warnTemplateOverride:!0})}},"Z/0p":function(t,e,n){n("x5C5")("flat")},ZeWX:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));n("QifN"),n("pBsb"),n("Ch9p"),n("+xeR"),n("orcL"),n("pETN");var r=n("EmJ/"),i=n.n(r),o=n("06tH"),s=n.n(o);var a=n("m/7A"),c=n("XRO8"),l=n("2ibD"),u=n("GVjJ"),d=n("3twG"),h=n("/lV4"),p=n("k/Fq");class f{constructor(){!function(){const t=i()("ul.clone-options-dropdown");if(t.length){const e=i()("#clone_url"),n=i()(".js-git-clone-holder .js-clone-dropdown-label"),r=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),o=n.text().trim();o.length>0&&i()("a:contains('".concat(o,"')"),t).addClass("is-active"),i()("a",t).on("click",(function(n){const o=i()(n.currentTarget),s=o.attr("href");if(s&&(s.startsWith("vscode://")||s.startsWith("xcode://")))return;n.preventDefault();const a=o.data("cloneType");i()(".is-active",t).removeClass("is-active"),i()('a[data-clone-type="'.concat(a,'"]')).each((function(){const t=i()(this),e=t.find(".dropdown-menu-inner-title").text(),n=t.closest(".js-git-clone-holder, .js-mobile-git-clone").find(".js-clone-dropdown-label");t.toggleClass("is-active"),n.text(e)})),r?r.dataset.clipboardText=s:e.val(s),i()(".js-git-empty .js-clone").text(s)}))}}(),document.querySelector(".js-project-refs-dropdown")&&(f.initRefSwitcher(),i()(".project-refs-select").on("change",(function(){return i()(this).parents("form").trigger("submit")}))),i()(".hide-no-ssh-message").on("click",(function(t){return s.a.set("hide_no_ssh_message","false"),i()(this).parents(".no-ssh-key-message").remove(),t.preventDefault()})),i()(".hide-no-password-message").on("click",(function(t){return s.a.set("hide_no_password_message","false"),i()(this).parents(".no-password-message").remove(),t.preventDefault()})),i()(".hide-auto-devops-implicitly-enabled-banner").on("click",(function(t){const e=i()(this).data("project-id"),n="hide_auto_devops_implicitly_enabled_banner_".concat(e);return s.a.set(n,"false"),i()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),t.preventDefault()})),f.projectSelectDropdown()}static projectSelectDropdown(){Object(p.a)(),i()(".project-item-select").on("click",(function(t){return f.changeProject(i()(t.currentTarget).val())}))}static changeProject(t){return window.location=t}static initRefSwitcher(){const t=document.createElement("li"),e=document.createElement("a");return e.href="#",i()(".js-project-refs-dropdown").each((function(){const n=i()(this),r=n.data("selected"),o=n.data("fieldName"),s=Boolean(n.data("visit")),p=n.closest("form"),f=p.attr("action"),g=Object(d.q)(Object(u.b)(p[0]),f);return Object(a.a)(n,{data(t,e){l.a.get(n.data("refsUrl"),{params:{ref:n.data("ref"),search:t}}).then((function(t){let{data:n}=t;return e(n)})).catch((function(){return Object(c.c)(Object(h.a)("An error occurred while getting projects"))}))},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:n.data("inputFieldName"),fieldName:o,renderRow(n){const i=t.cloneNode(!1),a=e.cloneNode(!1);return n===r&&(a.className="is-active"),a.textContent=n,a.dataset.ref=n,n.length>0&&s&&(a.href=Object(d.q)({[o]:n},g)),i.appendChild(a),i},id:(t,e)=>e.attr("data-ref"),toggleLabel:(t,e)=>e.text().trim(),clicked(t){const{e:e}=t;if(e.preventDefault(),s){const t=new URL(e.target.href),r=window.location.href;if(r.includes("/-/")){const e=n.data("ref"),i=r.split(e)[1];if(null==i?void 0:i.startsWith("/")){const e=null==i?void 0:i.slice(1).split("#")[0];t.searchParams.set("path",e),t.hash=window.location.hash}}e.metaKey?window.open(t.href,"_blank"):window.location.href=t.href}}})}))}}},aoUs:function(t,e,n){"use strict";n.d(e,"a",(function(){return E}));n("jaBk"),n("Ag57"),n("GzNv"),n("S26F"),n("TZoF");var r=n("EmJ/"),i=n.n(r),o=n("+XPY"),s=n.n(o),a=n("Jn9D"),c=n("tRCE"),l=n("qnJZ");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}let h=0;class p{constructor(t){this.$selectElement=i()(t),this.dropdownClass="js-auto-width-select-dropdown-".concat(h),h+=1}init(){var t=this;const{dropdownClass:e}=this;return n.e(443).then(n.t.bind(null,"p9g0",7)).then((function(){Object(l.a)(gon.select2_css_path).then((function(){t.$selectElement.select2(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({dropdownCssClass:e},p.selectOptions(t.dropdownClass)))})).catch((function(){}))})).catch((function(){})),this}static selectOptions(t){return{dropdownCss(){let e="auto";const n=i()(".".concat(t)),r=i()(this).parent().offsetParent().width();return n.css("width","auto"),n.outerWidth(!1)>r&&(e=r),{width:e,maxWidth:r}}}}}var f=p,g=n("bOix"),m=n("At3M"),w=n("3twG"),b=n("yYhH"),v=n("Ylta");function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){S(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const O="merge_request[source_branch]",I="merge_request[target_branch]";function x(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t[O]||t[I]?e?{[O]:t[O]}:{[O]:t[O],[I]:t[I]}:t}(Object(w.s)(t),e);return Object(w.r)(n)}class E{constructor(t){if(this.form=t,this.toggleWip=this.toggleWip.bind(this),this.renderWipExplanation=this.renderWipExplanation.bind(this),this.resetAutosave=this.resetAutosave.bind(this),this.handleSubmit=this.handleSubmit.bind(this),this.wipRegex=new RegExp("^\\s*(draft\\s-\\s|\\[draft\\]\\s*|draft:\\s*|draft\\s+|\\(draft\\)\\s*)+\\s*","i"),this.gfmAutoComplete=new a.a(gl.GfmAutoComplete&&gl.GfmAutoComplete.dataSources).setup(),this.usersSelect=new b.default,this.reviewersSelect=new b.default(void 0,".js-reviewer-search"),this.zenMode=new v.a,this.titleField=this.form.find('input[name*="[title]"]'),this.descriptionField=this.form.find('textarea[name*="[description]"]'),!this.titleField.length||!this.descriptionField.length)return;this.initAutosave(),this.form.on("submit",this.handleSubmit),this.form.on("click",".btn-cancel",this.resetAutosave),this.initWip();const e=i()("#issuable-due-date");if(e.length){const t=new s.a({field:e.get(0),theme:"gitlab-theme animate-picker",format:"yyyy-mm-dd",container:e.parent().get(0),parse:function(t){return Object(g.z)(t)},toString:function(t){return Object(g.B)(t)},onSelect:function(n){return e.val(t.toString(n))},firstDay:gon.first_day_of_week});t.setDate(Object(g.z)(e.val()))}this.$targetBranchSelect=i()(".js-target-branch-select",this.form),this.$targetBranchSelect.length&&this.initTargetBranchDropdown()}initAutosave(){const{search:t}=document.location,e=x(t),n=function(){const t=x(document.location.search,!0);return["autosave",document.location.pathname,t].join("/")}();return this.autosave=new c.a(this.titleField,[document.location.pathname,e,"title"],"".concat(n,"=title")),new c.a(this.descriptionField,[document.location.pathname,e,"description"],"".concat(n,"=description"))}handleSubmit(){return this.resetAutosave()}resetAutosave(){return this.titleField.data("autosave").reset(),this.descriptionField.data("autosave").reset()}initWip(){if(this.$wipExplanation=this.form.find(".js-wip-explanation"),this.$noWipExplanation=this.form.find(".js-no-wip-explanation"),this.$wipExplanation.length&&this.$noWipExplanation.length)return this.form.on("click",".js-toggle-wip",this.toggleWip),this.titleField.on("keyup blur",this.renderWipExplanation),this.renderWipExplanation()}workInProgress(){return this.wipRegex.test(this.titleField.val())}renderWipExplanation(){return this.workInProgress()?(this.$wipExplanation.find("code")[0].textContent="Draft",this.$wipExplanation.show(),this.$noWipExplanation.hide()):(this.$wipExplanation.hide(),this.$noWipExplanation.show())}toggleWip(t){return t.preventDefault(),this.workInProgress()?this.removeWip():this.addWip(),this.renderWipExplanation()}removeWip(){return this.titleField.val(this.titleField.val().replace(this.wipRegex,""))}addWip(){this.titleField.val("Draft: ".concat(this.titleField.val()))}initTargetBranchDropdown(){var t=this;n.e(443).then(n.t.bind(null,"p9g0",7)).then((function(){Object(l.a)(gon.select2_css_path).then((function(){t.$targetBranchSelect.select2(y(y({},f.selectOptions("js-target-branch-select")),{},{ajax:{url:t.$targetBranchSelect.data("endpoint"),dataType:"JSON",quietMillis:250,data:t=>({search:t}),results(t){let{results:e}=t;return{results:e[Object.keys(e)[0]].map((function(t){return{id:t,text:t}}))}},transport:m.a},initSelection(t,e){const n=t.val();e({id:n,text:n})}}))})).catch((function(){}))})).catch((function(){}))}}},"dA+0":function(t,e,n){var r=n("4O6w"),i=n("QPeP"),o=n("GY8p"),s=n("5PFN"),a=n("QPL1"),c=n("1XSk"),l=200;t.exports=function(t,e,n){var u=-1,d=i,h=t.length,p=!0,f=[],g=f;if(n)p=!1,d=o;else if(h>=l){var m=e?null:a(t);if(m)return c(m);p=!1,d=s,g=new r}else g=e?[]:f;t:for(;++u<h;){var w=t[u],b=e?e(w):w;if(w=n||0!==w?w:0,p&&b==b){for(var v=g.length;v--;)if(g[v]===b)continue t;e&&g.push(b),f.push(w)}else d(g,b,n)||(g!==f&&g.push(b),f.push(w))}return f}},eTVF:function(t,e,n){"use strict";var r=n("ZfjD"),i=n("5M4W"),o=n("/EoU"),s=n("KG2+"),a=n("u67S"),c=n("yqOl");r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=o(this),n=s(e.length),r=c(e,0);return r.length=i(r,e,e,n,0,void 0===t?1:a(t)),r}})},gNBD:function(t,e,n){var r=n("ZfjD"),i=n("H81m"),o=n("b05b");r({target:"Object",stat:!0},{fromEntries:function(t){var e={};return i(t,(function(t,n){o(e,t,n)}),{AS_ENTRIES:!0}),e}})},gjpc:function(t,e,n){"use strict";n.r(e);var r=n("CX32");new(n("ZeWX").a),new r.a},"k/Fq":function(t,e,n){"use strict";n("jaBk");var r=n("EmJ/"),i=n.n(r),o=n("qPgm"),s=n("qnJZ"),a=n("/lV4"),c=(n("pBsb"),n("n7CP"));class l{constructor(t){this.projectSelectInput=i()(t),this.newItemBtn=i()(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}bindEvents(){var t=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",(function(e){return t.openDropdown(e)})),this.newItemBtn.on("click",(function(e){t.getProjectFromLocalStorage()||(e.preventDefault(),t.openDropdown(e))})),this.projectSelectInput.on("change",(function(){return t.selectProject()}))}initLocalStorage(){c.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}openDropdown(t){n.e(443).then(n.t.bind(null,"p9g0",7)).then((function(){Object(s.a)(gon.select2_css_path).then((function(){i()(t.currentTarget).siblings(".project-item-select").select2("open")})).catch((function(){}))})).catch((function(){}))}selectProject(){const t=JSON.parse(this.projectSelectInput.val()),e={url:"".concat(t.url,"/").concat(this.projectSelectInput.data("relativePath")),name:t.name};this.setNewItemBtnAttributes(e),this.setProjectInLocalStorage(e)}setBtnTextFromLocalStorage(){const t=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(t)}setNewItemBtnAttributes(t){t?(this.newItemBtn.attr("href",t.url),this.newItemBtn.text("".concat(this.formattedText.defaultTextPrefix," in ").concat(t.name))):this.newItemBtn.text("Select project to create ".concat(this.formattedText.presetTextSuffix))}getProjectFromLocalStorage(){const t=localStorage.getItem(this.localStorageKey);return JSON.parse(t)}setProjectInLocalStorage(t){const e=JSON.stringify(t);localStorage.setItem(this.localStorageKey,e)}deriveTextVariants(){const t=this.resourceLabel;return{localStorageItemType:"new-".concat(this.resourceType.split("_").join("-").slice(0,-1)),defaultTextPrefix:t,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}const u=function(){Object(s.a)(gon.select2_css_path).then((function(){i()(".ajax-project-select").each((function(t,e){var n=this;let r;const s=i()(e).data("simpleFilter")||!1,c=i()(e).data("select2");return this.groupId=i()(e).data("groupId"),this.userId=i()(e).data("userId"),this.includeGroups=i()(e).data("includeGroups"),this.allProjects=i()(e).data("allProjects")||!1,this.orderBy=i()(e).data("orderBy")||"id",this.withIssuesEnabled=i()(e).data("withIssuesEnabled"),this.withMergeRequestsEnabled=i()(e).data("withMergeRequestsEnabled"),this.withShared=void 0===i()(e).data("withShared")||i()(e).data("withShared"),this.includeProjectsInSubgroups=i()(e).data("includeProjectsInSubgroups")||!1,this.allowClear=i()(e).data("allowClear")||!1,r=Object(a.e)("ProjectSelect|Search for project"),this.includeGroups&&(r+=Object(a.e)("ProjectSelect| or group")),i()(e).select2({placeholder:r,minimumInputLength:0,query:function(t){let e;const r=function(e){const n={results:e};return t.callback(n)};return e=n.includeGroups?function(e){return o.a.groups(t.term,{},(function(t){const n=t.concat(e);return r(n)}))}:r,n.groupId?o.a.groupProjects(n.groupId,t.term,{with_issues_enabled:n.withIssuesEnabled,with_merge_requests_enabled:n.withMergeRequestsEnabled,with_shared:n.withShared,include_subgroups:n.includeProjectsInSubgroups,order_by:"similarity",simple:!0},e):n.userId?o.a.userProjects(n.userId,t.term,{with_issues_enabled:n.withIssuesEnabled,with_merge_requests_enabled:n.withMergeRequestsEnabled,with_shared:n.withShared,include_subgroups:n.includeProjectsInSubgroups},e):o.a.projects(t.term,{order_by:n.orderBy,with_issues_enabled:n.withIssuesEnabled,with_merge_requests_enabled:n.withMergeRequestsEnabled,membership:!n.allProjects},e)},id:t=>s?t.id:JSON.stringify({name:t.name,url:t.web_url}),text:t=>t.name_with_namespace||t.name,initSelection:(t,e)=>o.a.project(t.val()).then((function(t){let{data:n}=t;return e(n)})),allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),c||s?e:new l(e)}))})).catch((function(){}))};e.a=function(){i()(".ajax-project-select").length&&n.e(443).then(n.t.bind(null,"p9g0",7)).then(u).catch((function(){}))}},"q+Dt":function(t,e,n){var r=n("sjqF"),i=n("9RX+"),o=n("P9pc");t.exports=function(t,e,n){return e==e?o(t,e,n):r(t,i,n)}},sjqF:function(t,e){t.exports=function(t,e,n,r){for(var i=t.length,o=n+(r?1:-1);r?o--:++o<i;)if(e(t[o],o,t))return o;return-1}},tRCE:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("n7CP");class i{constructor(t,e,n,i){var o=this;this.field=t,this.isLocalStorageAvailable=r.a.isLocalStorageAccessSafe(),null!=e.join&&(e=e.join("/")),this.key="autosave/".concat(e),this.fallbackKey=n,this.lockVersionKey="".concat(this.key,"/lockVersion"),this.lockVersion=i,this.field.data("autosave",this),this.restore(),this.field.on("input",(function(){return o.save()}))}restore(){if(!this.isLocalStorageAvailable)return;if(!this.field.length)return;const t=window.localStorage.getItem(this.key),e=window.localStorage.getItem(this.fallbackKey);t?this.field.val(t):e&&this.field.val(e),this.field.trigger("input");const n=new Event("change",{bubbles:!0,cancelable:!1}),r=this.field.get(0);r&&r.dispatchEvent(n)}getSavedLockVersion(){if(this.isLocalStorageAvailable)return window.localStorage.getItem(this.lockVersionKey)}save(){if(!this.field.length)return;const t=this.field.val();return this.isLocalStorageAvailable&&t?(this.fallbackKey&&window.localStorage.setItem(this.fallbackKey,t),void 0!==this.lockVersion&&window.localStorage.setItem(this.lockVersionKey,this.lockVersion),window.localStorage.setItem(this.key,t)):this.reset()}reset(){if(this.isLocalStorageAvailable)return window.localStorage.removeItem(this.lockVersionKey),window.localStorage.removeItem(this.fallbackKey),window.localStorage.removeItem(this.key)}dispose(){this.field.off("input")}}},tfe3:function(t,e,n){"use strict";n.r(e);var r=n("TvtC"),i=n("GVjJ");const o=function(){return document.querySelector(".merge-request-form")},s=function(){return JSON.stringify(Object(i.b)(o()))};Object(r.a)(),function(){const t=s(),e=function(e){const n=s();t!==n&&(e.preventDefault(),e.returnValue="")};window.addEventListener("beforeunload",e),o().addEventListener("submit",(function(){return window.removeEventListener("beforeunload",e)}))}()}},[[174,1,0,6,2,3,4,5,10,11,13,14,16,15,18,21,60]]]);
//# sourceMappingURL=pages.projects.merge_requests.edit.9d89e621.chunk.js.map