!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{u77b:function(t,r,c){"use strict";c.r(r),c.d(r,"ActualShipmentModule",function(){return Oe});var i,s,d,f,l=c("tyNb"),p=c("hgo/"),b=c("ufcJ"),h=c("z6cu"),m=c("eIep"),g=c("vkgz"),v=c("JIr8"),y=c("fXoL"),S=c("AytR"),O=c("tk/3"),j=((i=function(){function e(t){a(this,e),this.http=t}return u(e,[{key:"search",value:function(e){return this.http.post(S.a.apiEndpoints.actualShipment,e)}},{key:"sendedStatusChange",value:function(e){return this.http.post(S.a.apiEndpoints.actualShipmentPatchSended,{data:e})}}]),e}()).\u0275fac=function(e){return new(e||i)(y.Wb(O.a))},i.\u0275prov=y.Ib({token:i,factory:i.\u0275fac,providedIn:"root"}),i),k=c("dNgK"),w=((s=function(e){n(r,e);var t=o(r);function r(e,n){var o;return a(this,r),(o=t.call(this,F)).asService=e,o.snack=n,o.search=o.effect(function(e){return e.pipe(Object(m.a)(function(e){return o.searchPending(),o.asService.search(e).pipe(Object(g.a)(function(e){console.log(e),o.searchSuccess(e)}),Object(v.a)(function(e){return o.searchError(),Object(h.a)(e)}))}))}),o.sendedChange=o.effect(function(e){return e.pipe(Object(m.a)(function(e){return o.asService.sendedStatusChange(e).pipe(Object(g.a)(function(e){o.sendedChangeSuccess(e)}),Object(v.a)(function(e){return o.snack.open("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u0438",void 0,{duration:3e3}),Object(h.a)(e)}))}))}),o.sendedChangeSuccess=o.updater(function(e,t){var n=e.data.slice();return n.forEach(function(e){e.ordersByType.forEach(function(e){e.orders.forEach(function(e){t.ids.includes(e.orderId)&&(e.sended=t.sended)})})}),Object.assign(Object.assign({},e),{data:n})}),o.searchPending=o.updater(function(e){return Object.assign(Object.assign({},e),{data:[],loadingState:p.a.loading})}),o.searchSuccess=o.updater(function(e,t){return Object.assign(Object.assign({},e),{data:t,loadingState:p.a.default})}),o.searchError=o.updater(function(e){return Object.assign(Object.assign({},e),{loadingState:p.a.err})}),o}return r}(b.a)).\u0275fac=function(e){return new(e||s)(y.Wb(j),y.Wb(k.a))},s.\u0275prov=y.Ib({token:s,factory:s.\u0275fac}),s),F={data:[],loadingState:p.a.default},R=c("ofXK"),I=c("G1Gu"),C=c("XNiG"),A=c("IzEk"),T=c("1G5W"),_=c("Kj3r"),x=c("Qw0g"),P=c("Wcn/"),B={data:{shipmentDate:"",shipmentType:P.d.cdek,notSended:!0},loadingState:p.a.default},M=c("3Pt+"),N=c("LRne"),$=((f=function(){function e(){a(this,e)}return u(e,[{key:"updateFormData",value:function(e){return localStorage.setItem("ntv-as-filter-form-data",JSON.stringify(e)),Object(N.a)(e)}},{key:"getFormData",value:function(){var e=localStorage.getItem("ntv-as-filter-form-data"),t=e?JSON.parse(e):B.data;return Object(N.a)(t)}}]),e}()).\u0275fac=function(e){return new(e||f)},f.\u0275prov=y.Ib({token:f,factory:f.\u0275fac,providedIn:"root"}),f),E=((d=function(e){n(r,e);var t=o(r);function r(e){var n;return a(this,r),(n=t.call(this,B)).ffs=e,n.saveForm=n.effect(function(e){return e.pipe(Object(m.a)(function(e){return n.ffs.updateFormData(e).pipe(Object(g.a)(function(e){n.reqFormSuccess(e)}),Object(v.a)(function(e){return n.reqFormError(),Object(h.a)(e)}))}))}),n.setFormData=n.effect(function(e){return e.pipe(Object(m.a)(function(){return n.ffs.getFormData().pipe(Object(g.a)(function(e){n.reqFormSuccess(e)}),Object(v.a)(function(e){return n.reqFormError(),Object(h.a)(e)}))}))}),n.reqFormSuccess=n.updater(function(e,t){return Object.assign(Object.assign({},e),{data:t,loadingState:p.a.default})}),n.reqFormError=n.updater(function(e){return Object.assign(Object.assign({},e),{loadingState:p.a.err})}),n}return r}(b.a)).\u0275fac=function(e){return new(e||d)(y.Wb($))},d.\u0275prov=y.Ib({token:d,factory:d.\u0275fac,providedIn:"root"}),d),D=c("kmnG"),G=c("d3UM"),z=c("bSwM"),J=c("bTqV"),q=c("FKr1");function K(e,t){if(1&e&&(y.Sb(0,"mat-option",7),y.Ac(1),y.Rb()),2&e){var n=t.$implicit;y.ic("value",n.date),y.Bb(1),y.Cc(" ",n.name," ")}}function W(e,t){if(1&e&&(y.Sb(0,"mat-option",7),y.Ac(1),y.Rb()),2&e){var n=t.$implicit;y.ic("value",n),y.Bb(1),y.Cc(" ",n," ")}}var X,Z,H=((X=function(){function t(n,r,o){a(this,t),this.fb=n,this.formStore=r,this.asStore=o,this.destroyer$$=new C.a,this.shipmentTypes=[].concat(e(Object.values(P.d)),["\u0432\u0441\u0435"]),this.months=x.b}return u(t,[{key:"ngOnInit",value:function(){this.initForm(),this.formStore.setFormData(),this.setFormDataFromSaved(),this.initFormSaver(),this.search()}},{key:"ngOnDestroy",value:function(){this.destroyer$$.next(),this.destroyer$$.complete()}},{key:"search",value:function(){this.asStore.search(this.form.value)}},{key:"initForm",value:function(){this.form=this.fb.group(B.data)}},{key:"setFormDataFromSaved",value:function(){var e=this;this.formStore.select(function(e){return e.data}).pipe(Object(A.a)(1),Object(g.a)(function(t){e.form.setValue(t)})).subscribe()}},{key:"initFormSaver",value:function(){var e=this;this.form.valueChanges.pipe(Object(T.a)(this.destroyer$$),Object(_.a)(500)).subscribe(function(t){e.formStore.saveForm(t)})}}]),t}()).\u0275fac=function(e){return new(e||X)(y.Mb(M.e),y.Mb(E),y.Mb(w))},X.\u0275cmp=y.Gb({type:X,selectors:[["ntv-as-filter-form"]],decls:15,vars:3,consts:[[1,"form",3,"formGroup","ngSubmit"],["appearance","standard",1,"low-control","form__control"],["formControlName","shipmentDate"],[3,"value",4,"ngFor","ngForOf"],["formControlName","shipmentType"],["formControlName","notSended"],["mat-raised-button","","color","accent","type","submit",1,"form__control"],[3,"value"]],template:function(e,t){1&e&&(y.Sb(0,"form",0),y.Zb("ngSubmit",function(){return t.search()}),y.Sb(1,"mat-form-field",1),y.Sb(2,"mat-label"),y.Ac(3,"\u0414\u0430\u0442\u0430"),y.Rb(),y.Sb(4,"mat-select",2),y.yc(5,K,2,2,"mat-option",3),y.Rb(),y.Rb(),y.Sb(6,"mat-form-field",1),y.Sb(7,"mat-label"),y.Ac(8,"\u0422\u0438\u043f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438"),y.Rb(),y.Sb(9,"mat-select",4),y.yc(10,W,2,2,"mat-option",3),y.Rb(),y.Rb(),y.Sb(11,"mat-checkbox",5),y.Ac(12,"\u043d\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435"),y.Rb(),y.Sb(13,"button",6),y.Ac(14," search "),y.Rb(),y.Rb()),2&e&&(y.ic("formGroup",t.form),y.Bb(5),y.ic("ngForOf",t.months),y.Bb(5),y.ic("ngForOf",t.shipmentTypes))},directives:[M.v,M.o,M.h,D.c,D.f,G.a,M.n,M.g,R.j,z.a,J.a,q.n],styles:["[_nghost-%COMP%]{align-items:center;width:100%}.form[_ngcontent-%COMP%], [_nghost-%COMP%]{display:grid}.form[_ngcontent-%COMP%]{grid-gap:16px;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));padding:16px;align-items:flex-end}"]}),X),L=c("4Kj8"),Q=c("7EHt"),U=((Z=function(){function e(t){a(this,e),this.store=t}return u(e,[{key:"changeAllSended",value:function(e){e.source.checked=!e.checked;var t={ids:this.orderType.orders.map(function(e){return e.orderId}),sended:e.checked};this.store.sendedChange(t)}},{key:"isAllSended",get:function(){return this.orderType.orders.every(function(e){return e.sended})}}]),e}()).\u0275fac=function(e){return new(e||Z)(y.Mb(w))},Z.\u0275cmp=y.Gb({type:Z,selectors:[["ntv-actual-order-type"]],inputs:{orderType:"orderType"},decls:5,vars:3,consts:[[3,"checked","click","change"]],template:function(e,t){1&e&&(y.Sb(0,"div"),y.Ac(1),y.Rb(),y.Sb(2,"div"),y.Ac(3),y.Rb(),y.Sb(4,"mat-checkbox",0),y.Zb("click",function(e){return e.stopPropagation()})("change",function(e){return t.changeAllSended(e)}),y.Rb()),2&e&&(y.Bb(1),y.Bc(t.orderType.ordersType),y.Bb(2),y.Bc(t.orderType.orders.length),y.Bb(1),y.ic("checked",t.isAllSended))},directives:[z.a],styles:["[_nghost-%COMP%]{width:100%;display:grid;grid-template-columns:repeat(3,1fr);color:rgba(0,0,0,.54);font-size:.75rem;font-weight:500}"]}),Z),V=c("Wp6s"),Y=c("e1Hi"),ee=c("3tz+");function te(e,t){if(1&e&&y.Nb(0,"ntv-overlined",5),2&e){var n=y.dc();y.ic("value",n.order.track)}}function ne(e,t){if(1&e&&y.Nb(0,"ntv-overlined",8),2&e){var n=y.dc(2);y.ic("value",n.order.comment)}}function re(e,t){if(1&e&&(y.Qb(0),y.yc(1,ne,1,1,"ntv-overlined",6),y.Nb(2,"ntv-order-structure",7),y.Pb()),2&e){var n=y.dc();y.Bb(1),y.ic("ngIf",n.order.comment),y.Bb(1),y.ic("orderStructure",n.order.orderStructure)}}function oe(e,t){if(1&e&&y.Nb(0,"ntv-overlined",9),2&e){var n=y.dc();y.ic("value",n.order.address.city+" "+n.order.address.address)}}var ce,ie=((ce=function(){function e(t){a(this,e),this.store=t,this.showStructure=!1,this.showAddress=!1}return u(e,[{key:"ngOnInit",value:function(){this.orderType===P.c.complicated&&(this.showStructure=!0),this.orderType===P.c.theatres&&(this.showStructure=!0,this.showAddress=!0)}},{key:"changeSended",value:function(e){this.store.sendedChange({ids:[this.order.orderId],sended:e})}}]),e}()).\u0275fac=function(e){return new(e||ce)(y.Mb(w))},ce.\u0275cmp=y.Gb({type:ce,selectors:[["ntv-actual-shipment-order"]],inputs:{order:"order",orderType:"orderType"},decls:8,vars:5,consts:[[1,"card"],["color","accent",3,"checked","click"],["overline","\u043d\u043e\u043c\u0435\u0440",3,"value",4,"ngIf"],[4,"ngIf"],["overline","\u0430\u0434\u0440\u0435\u0441",3,"value",4,"ngIf"],["overline","\u043d\u043e\u043c\u0435\u0440",3,"value"],["overline","\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",3,"value",4,"ngIf"],[3,"orderStructure"],["overline","\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",3,"value"],["overline","\u0430\u0434\u0440\u0435\u0441",3,"value"]],template:function(e,t){1&e&&(y.Sb(0,"mat-card",0),y.Sb(1,"p"),y.Ac(2),y.Rb(),y.Sb(3,"mat-checkbox",1),y.Zb("click",function(e){return e.preventDefault(),t.changeSended(!t.order.sended)}),y.Ac(4," \u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e "),y.Rb(),y.yc(5,te,1,1,"ntv-overlined",2),y.yc(6,re,3,2,"ng-container",3),y.yc(7,oe,1,1,"ntv-overlined",4),y.Rb()),2&e&&(y.Bb(2),y.Bc(t.order.name),y.Bb(1),y.ic("checked",t.order.sended),y.Bb(2),y.ic("ngIf",t.order.track),y.Bb(1),y.ic("ngIf",t.showStructure),y.Bb(1),y.ic("ngIf",t.showAddress))},directives:[V.a,z.a,R.k,Y.a,ee.a],styles:["[_nghost-%COMP%]{display:block}.card[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;display:grid;gap:16px}"]}),ce);function ae(e,t){if(1&e&&y.Nb(0,"ntv-actual-shipment-order",9),2&e){var n=t.$implicit,r=y.dc(2).$implicit;y.ic("order",n)("orderType",r.ordersType)}}function se(e,t){if(1&e&&(y.Sb(0,"div",7),y.yc(1,ae,1,2,"ntv-actual-shipment-order",8),y.Rb()),2&e){var n=y.dc().$implicit;y.Bb(1),y.ic("ngForOf",n.orders)}}function ue(e,t){if(1&e&&(y.Sb(0,"mat-expansion-panel",3),y.Sb(1,"mat-expansion-panel-header",4),y.Nb(2,"ntv-actual-order-type",5),y.Rb(),y.yc(3,se,2,1,"ng-template",6),y.Rb()),2&e){var n=t.$implicit;y.Bb(2),y.ic("orderType",n)}}var de,fe=((de=function e(){a(this,e)}).\u0275fac=function(e){return new(e||de)},de.\u0275cmp=y.Gb({type:de,selectors:[["ntv-actual-shipment-type"]],inputs:{type:"type"},decls:5,vars:4,consts:[[1,"shipment-type"],["displayMode","flat"],["hideToggle","","class","mat-elevation-z0",4,"ngFor","ngForOf"],["hideToggle","",1,"mat-elevation-z0"],[1,"row"],[3,"orderType"],["matExpansionPanelContent",""],[1,"orders-container"],[3,"order","orderType",4,"ngFor","ngForOf"],[3,"order","orderType"]],template:function(e,t){1&e&&(y.Sb(0,"h3",0),y.Ac(1),y.ec(2,"titlecase"),y.Rb(),y.Sb(3,"mat-accordion",1),y.yc(4,ue,4,1,"mat-expansion-panel",2),y.Rb()),2&e&&(y.Bb(1),y.Bc(y.fc(2,2,t.type.shipmentType)),y.Bb(3),y.ic("ngForOf",t.type.ordersByType))},directives:[Q.a,R.j,Q.c,Q.f,U,Q.d,ie],pipes:[R.r],styles:["[_nghost-%COMP%]{display:block;width:100%}.row[_ngcontent-%COMP%]{padding:0 100px}.orders-container[_ngcontent-%COMP%]{display:grid;grid-gap:16px;padding:16px;grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}"]}),de);function le(e,t){1&e&&y.Nb(0,"ntv-spinner")}function pe(e,t){1&e&&y.Nb(0,"ntv-actual-shipment-type",6),2&e&&y.ic("type",t.$implicit)}function be(e,t){if(1&e&&(y.Sb(0,"ng-scrollbar",1),y.Sb(1,"div",2),y.Nb(2,"ntv-as-filter-form"),y.Sb(3,"div",3),y.Sb(4,"div"),y.Ac(5,"\u0422\u0438\u043f \u0437\u0430\u043a\u0430\u0437\u043e\u0432"),y.Rb(),y.Sb(6,"div"),y.Ac(7,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),y.Rb(),y.Sb(8,"div"),y.Ac(9,"\u0412\u0441\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b"),y.Rb(),y.Rb(),y.yc(10,le,1,0,"ntv-spinner",4),y.yc(11,pe,1,1,"ntv-actual-shipment-type",5),y.Rb(),y.Rb()),2&e){var n=t.ngIf,r=y.dc();y.Bb(10),y.ic("ngIf",n.loadingState===r.loadingStates.loading),y.Bb(1),y.ic("ngForOf",n.data)}}var he,me,ge,ve=[{path:"",component:(he=function(){function e(t){a(this,e),this.store=t,this.loadingStates=p.a}return u(e,[{key:"ngOnInit",value:function(){this.actualShipmentState$=this.store.select(function(e){return e})}}]),e}(),he.\u0275fac=function(e){return new(e||he)(y.Mb(w))},he.\u0275cmp=y.Gb({type:he,selectors:[["ntv-actual-shipment"]],features:[y.Ab([w])],decls:2,vars:3,consts:[["class","scrollbar",4,"ngIf"],[1,"scrollbar"],[1,"scrollbar__content"],[1,"table-header"],[4,"ngIf"],[3,"type",4,"ngFor","ngForOf"],[3,"type"]],template:function(e,t){1&e&&(y.yc(0,be,12,2,"ng-scrollbar",0),y.ec(1,"async")),2&e&&y.ic("ngIf",y.fc(1,1,t.actualShipmentState$))},directives:[R.k,I.a,H,R.j,L.a,fe],pipes:[R.b],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%}.table-header[_ngcontent-%COMP%]{width:100%;padding:0 100px 16px;display:grid;grid-template-columns:repeat(3,1fr);color:rgba(0,0,0,.54);font-size:.75rem;font-weight:500}.scrollbar[_ngcontent-%COMP%]{max-height:calc(100vh - 64px);min-height:calc(100vh - 64px)}.scrollbar__content[_ngcontent-%COMP%]{padding:0 16px}"]}),he)}],ye=((me=function e(){a(this,e)}).\u0275mod=y.Kb({type:me}),me.\u0275inj=y.Jb({factory:function(e){return new(e||me)},imports:[[l.h.forChild(ve)],l.h]}),me),Se=c("PCNd"),Oe=((ge=function e(){a(this,e)}).\u0275mod=y.Kb({type:ge}),ge.\u0275inj=y.Jb({factory:function(e){return new(e||ge)},imports:[[ye,Se.a]]}),ge)}}])}();