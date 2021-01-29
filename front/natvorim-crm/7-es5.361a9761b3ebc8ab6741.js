!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{u77b:function(e,r,c){"use strict";c.r(r),c.d(r,"ActualShipmentModule",function(){return St});var i,s,f,d,l=c("tyNb"),p=c("hgo/"),b=c("ufcJ"),h=c("z6cu"),m=c("eIep"),g=c("vkgz"),v=c("JIr8"),y=c("fXoL"),S=c("AytR"),O=c("tk/3"),j=((i=function(){function t(e){a(this,t),this.http=e}return u(t,[{key:"search",value:function(t){return this.http.post(S.a.apiEndpoints.actualShipment,t)}},{key:"sendedStatusChange",value:function(t){return this.http.post(S.a.apiEndpoints.actualShipmentPatchSended,{data:t})}}]),t}()).\u0275fac=function(t){return new(t||i)(y.Wb(O.a))},i.\u0275prov=y.Ib({token:i,factory:i.\u0275fac,providedIn:"root"}),i),w=c("dNgK"),k=((s=function(t){n(r,t);var e=o(r);function r(t,n){var o;return a(this,r),(o=e.call(this,x)).asService=t,o.snack=n,o.search=o.effect(function(t){return t.pipe(Object(m.a)(function(t){return o.searchPending(),o.asService.search(t).pipe(Object(g.a)(function(t){o.searchSuccess(t)}),Object(v.a)(function(t){return o.searchError(),Object(h.a)(t)}))}))}),o.sendedChange=o.effect(function(t){return t.pipe(Object(m.a)(function(t){return o.asService.sendedStatusChange(t).pipe(Object(g.a)(function(t){o.sendedChangeSuccess(t)}),Object(v.a)(function(t){return o.snack.open("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u0438",void 0,{duration:3e3}),Object(h.a)(t)}))}))}),o.sendedChangeSuccess=o.updater(function(t,e){var n=t.data.slice();return n.forEach(function(t){t.ordersByType.forEach(function(t){t.orders.forEach(function(t){e.ids.includes(t.orderId)&&(t.sended=e.sended)})})}),Object.assign(Object.assign({},t),{data:n})}),o.searchPending=o.updater(function(t){return Object.assign(Object.assign({},t),{data:[],loadingState:p.a.loading})}),o.searchSuccess=o.updater(function(t,e){return Object.assign(Object.assign({},t),{data:e,loadingState:p.a.default})}),o.searchError=o.updater(function(t){return Object.assign(Object.assign({},t),{loadingState:p.a.err})}),o}return r}(b.a)).\u0275fac=function(t){return new(t||s)(y.Wb(j),y.Wb(w.a))},s.\u0275prov=y.Ib({token:s,factory:s.\u0275fac}),s),x={data:[],loadingState:p.a.default},F=c("ofXK"),R=c("G1Gu"),I=c("XNiG"),C=c("IzEk"),T=c("1G5W"),_=c("Kj3r"),P=c("Qw0g"),M=c("Wcn/"),z={data:{shipmentDate:"",shipmentType:M.d.cdek,notSended:!0},loadingState:p.a.default},B=c("3Pt+"),A=c("LRne"),$=((d=function(){function t(){a(this,t)}return u(t,[{key:"updateFormData",value:function(t){return localStorage.setItem("ntv-as-filter-form-data",JSON.stringify(t)),Object(A.a)(t)}},{key:"getFormData",value:function(){var t=localStorage.getItem("ntv-as-filter-form-data"),e=t?JSON.parse(t):z.data;return Object(A.a)(e)}}]),t}()).\u0275fac=function(t){return new(t||d)},d.\u0275prov=y.Ib({token:d,factory:d.\u0275fac,providedIn:"root"}),d),E=((f=function(t){n(r,t);var e=o(r);function r(t){var n;return a(this,r),(n=e.call(this,z)).ffs=t,n.saveForm=n.effect(function(t){return t.pipe(Object(m.a)(function(t){return n.ffs.updateFormData(t).pipe(Object(g.a)(function(t){n.reqFormSuccess(t)}),Object(v.a)(function(t){return n.reqFormError(),Object(h.a)(t)}))}))}),n.setFormData=n.effect(function(t){return t.pipe(Object(m.a)(function(){return n.ffs.getFormData().pipe(Object(g.a)(function(t){n.reqFormSuccess(t)}),Object(v.a)(function(t){return n.reqFormError(),Object(h.a)(t)}))}))}),n.reqFormSuccess=n.updater(function(t,e){return Object.assign(Object.assign({},t),{data:e,loadingState:p.a.default})}),n.reqFormError=n.updater(function(t){return Object.assign(Object.assign({},t),{loadingState:p.a.err})}),n}return r}(b.a)).\u0275fac=function(t){return new(t||f)(y.Wb($))},f.\u0275prov=y.Ib({token:f,factory:f.\u0275fac,providedIn:"root"}),f),N=c("kmnG"),D=c("d3UM"),G=c("bSwM"),J=c("bTqV"),q=c("FKr1");function K(t,e){if(1&t&&(y.Sb(0,"mat-option",7),y.zc(1),y.Rb()),2&t){var n=e.$implicit;y.ic("value",n.date),y.Bb(1),y.Bc(" ",n.name," ")}}function W(t,e){if(1&t&&(y.Sb(0,"mat-option",7),y.zc(1),y.Rb()),2&t){var n=e.$implicit;y.ic("value",n),y.Bb(1),y.Bc(" ",n," ")}}var X,Z,H=((X=function(){function e(n,r,o){a(this,e),this.fb=n,this.formStore=r,this.asStore=o,this.destroyer$$=new I.a,this.shipmentTypes=[].concat(t(Object.values(M.d)),["\u0432\u0441\u0435"]),this.months=P.a}return u(e,[{key:"ngOnInit",value:function(){this.initForm(),this.formStore.setFormData(),this.setFormDataFromSaved(),this.initFormSaver(),this.search()}},{key:"ngOnDestroy",value:function(){this.destroyer$$.next(),this.destroyer$$.complete()}},{key:"search",value:function(){this.asStore.search(this.form.value)}},{key:"initForm",value:function(){this.form=this.fb.group(z.data)}},{key:"setFormDataFromSaved",value:function(){var t=this;this.formStore.select(function(t){return t.data}).pipe(Object(C.a)(1),Object(g.a)(function(e){t.form.setValue(e)})).subscribe()}},{key:"initFormSaver",value:function(){var t=this;this.form.valueChanges.pipe(Object(T.a)(this.destroyer$$),Object(_.a)(500)).subscribe(function(e){t.formStore.saveForm(e)})}}]),e}()).\u0275fac=function(t){return new(t||X)(y.Mb(B.e),y.Mb(E),y.Mb(k))},X.\u0275cmp=y.Gb({type:X,selectors:[["ntv-as-filter-form"]],decls:15,vars:3,consts:[[1,"form",3,"formGroup","ngSubmit"],["appearance","standard",1,"low-control","form__control"],["formControlName","shipmentDate"],[3,"value",4,"ngFor","ngForOf"],["formControlName","shipmentType"],["formControlName","notSended"],["mat-raised-button","","color","accent","type","submit",1,"form__control"],[3,"value"]],template:function(t,e){1&t&&(y.Sb(0,"form",0),y.Zb("ngSubmit",function(){return e.search()}),y.Sb(1,"mat-form-field",1),y.Sb(2,"mat-label"),y.zc(3,"\u0414\u0430\u0442\u0430"),y.Rb(),y.Sb(4,"mat-select",2),y.xc(5,K,2,2,"mat-option",3),y.Rb(),y.Rb(),y.Sb(6,"mat-form-field",1),y.Sb(7,"mat-label"),y.zc(8,"\u0422\u0438\u043f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438"),y.Rb(),y.Sb(9,"mat-select",4),y.xc(10,W,2,2,"mat-option",3),y.Rb(),y.Rb(),y.Sb(11,"mat-checkbox",5),y.zc(12,"\u043d\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435"),y.Rb(),y.Sb(13,"button",6),y.zc(14," search "),y.Rb(),y.Rb()),2&t&&(y.ic("formGroup",e.form),y.Bb(5),y.ic("ngForOf",e.months),y.Bb(5),y.ic("ngForOf",e.shipmentTypes))},directives:[B.v,B.o,B.h,N.c,N.f,D.a,B.n,B.g,F.j,G.a,J.a,q.n],styles:["[_nghost-%COMP%]{align-items:center;width:100%}.form[_ngcontent-%COMP%], [_nghost-%COMP%]{display:grid}.form[_ngcontent-%COMP%]{grid-gap:16px;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));padding:16px;align-items:flex-end}"]}),X),L=c("4Kj8"),Q=c("7EHt"),U=((Z=function(){function t(e){a(this,t),this.store=e}return u(t,[{key:"changeAllSended",value:function(t){t.source.checked=!t.checked;var e={ids:this.orderType.orders.map(function(t){return t.orderId}),sended:t.checked};this.store.sendedChange(e)}},{key:"isAllSended",get:function(){return this.orderType.orders.every(function(t){return t.sended})}}]),t}()).\u0275fac=function(t){return new(t||Z)(y.Mb(k))},Z.\u0275cmp=y.Gb({type:Z,selectors:[["ntv-actual-order-type"]],inputs:{orderType:"orderType"},decls:5,vars:3,consts:[[3,"checked","click","change"]],template:function(t,e){1&t&&(y.Sb(0,"div"),y.zc(1),y.Rb(),y.Sb(2,"div"),y.zc(3),y.Rb(),y.Sb(4,"mat-checkbox",0),y.Zb("click",function(t){return t.stopPropagation()})("change",function(t){return e.changeAllSended(t)}),y.Rb()),2&t&&(y.Bb(1),y.Ac(e.orderType.ordersType),y.Bb(2),y.Ac(e.orderType.orders.length),y.Bb(1),y.ic("checked",e.isAllSended))},directives:[G.a],styles:["[_nghost-%COMP%]{width:100%;display:grid;grid-template-columns:repeat(3,1fr);color:rgba(0,0,0,.54);font-size:.75rem;font-weight:500}"]}),Z),V=c("Wp6s"),Y=c("3tz+"),tt=c("e1Hi");function et(t,e){if(1&t&&y.Nb(0,"ntv-overlined",6),2&t){var n=y.dc(2);y.ic("value",n.order.comment)}}function nt(t,e){if(1&t&&(y.Qb(0),y.xc(1,et,1,1,"ntv-overlined",4),y.Nb(2,"ntv-order-structure",5),y.Pb()),2&t){var n=y.dc();y.Bb(1),y.ic("ngIf",n.order.comment),y.Bb(1),y.ic("orderStructure",n.order.orderStructure)}}function rt(t,e){if(1&t&&y.Nb(0,"ntv-overlined",7),2&t){var n=y.dc();y.ic("value",n.order.address.address)}}var ot,ct=((ot=function(){function t(e){a(this,t),this.store=e,this.showStructure=!1,this.showAddress=!1}return u(t,[{key:"ngOnInit",value:function(){this.orderType===M.c.complicated&&(this.showStructure=!0),this.orderType===M.c.theatres&&(this.showStructure=!0,this.showAddress=!0)}},{key:"changeSended",value:function(t){this.store.sendedChange({ids:[this.order.orderId],sended:t})}}]),t}()).\u0275fac=function(t){return new(t||ot)(y.Mb(k))},ot.\u0275cmp=y.Gb({type:ot,selectors:[["ntv-actual-shipment-order"]],inputs:{order:"order",orderType:"orderType"},decls:7,vars:4,consts:[[1,"card"],["color","accent",3,"checked","click"],[4,"ngIf"],["overline","\u0430\u0434\u0440\u0435\u0441",3,"value",4,"ngIf"],["overline","\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",3,"value",4,"ngIf"],[3,"orderStructure"],["overline","\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",3,"value"],["overline","\u0430\u0434\u0440\u0435\u0441",3,"value"]],template:function(t,e){1&t&&(y.Sb(0,"mat-card",0),y.Sb(1,"p"),y.zc(2),y.Rb(),y.Sb(3,"mat-checkbox",1),y.Zb("click",function(t){return t.preventDefault(),e.changeSended(!e.order.sended)}),y.zc(4," \u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e "),y.Rb(),y.xc(5,nt,3,2,"ng-container",2),y.xc(6,rt,1,1,"ntv-overlined",3),y.Rb()),2&t&&(y.Bb(2),y.Ac(e.order.name),y.Bb(1),y.ic("checked",e.order.sended),y.Bb(2),y.ic("ngIf",e.showStructure),y.Bb(1),y.ic("ngIf",e.showAddress))},directives:[V.a,G.a,F.k,Y.a,tt.a],styles:["[_nghost-%COMP%]{display:block}.card[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;display:grid;gap:16px}"]}),ot);function it(t,e){if(1&t&&y.Nb(0,"ntv-actual-shipment-order",9),2&t){var n=e.$implicit,r=y.dc(2).$implicit;y.ic("order",n)("orderType",r.ordersType)}}function at(t,e){if(1&t&&(y.Sb(0,"div",7),y.xc(1,it,1,2,"ntv-actual-shipment-order",8),y.Rb()),2&t){var n=y.dc().$implicit;y.Bb(1),y.ic("ngForOf",n.orders)}}function st(t,e){if(1&t&&(y.Sb(0,"mat-expansion-panel",3),y.Sb(1,"mat-expansion-panel-header",4),y.Nb(2,"ntv-actual-order-type",5),y.Rb(),y.xc(3,at,2,1,"ng-template",6),y.Rb()),2&t){var n=e.$implicit;y.Bb(2),y.ic("orderType",n)}}var ut,ft=((ut=function t(){a(this,t)}).\u0275fac=function(t){return new(t||ut)},ut.\u0275cmp=y.Gb({type:ut,selectors:[["ntv-actual-shipment-type"]],inputs:{type:"type"},decls:5,vars:4,consts:[[1,"shipment-type"],["displayMode","flat"],["hideToggle","","class","mat-elevation-z0",4,"ngFor","ngForOf"],["hideToggle","",1,"mat-elevation-z0"],[1,"row"],[3,"orderType"],["matExpansionPanelContent",""],[1,"orders-container"],[3,"order","orderType",4,"ngFor","ngForOf"],[3,"order","orderType"]],template:function(t,e){1&t&&(y.Sb(0,"h3",0),y.zc(1),y.ec(2,"titlecase"),y.Rb(),y.Sb(3,"mat-accordion",1),y.xc(4,st,4,1,"mat-expansion-panel",2),y.Rb()),2&t&&(y.Bb(1),y.Ac(y.fc(2,2,e.type.shipmentType)),y.Bb(3),y.ic("ngForOf",e.type.ordersByType))},directives:[Q.a,F.j,Q.c,Q.f,U,Q.d,ct],pipes:[F.r],styles:["[_nghost-%COMP%]{display:block;width:100%}.row[_ngcontent-%COMP%]{padding:0 100px}.orders-container[_ngcontent-%COMP%]{display:grid;grid-gap:16px;padding:16px;grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}"]}),ut);function dt(t,e){1&t&&y.Nb(0,"ntv-spinner")}function lt(t,e){1&t&&y.Nb(0,"ntv-actual-shipment-type",6),2&t&&y.ic("type",e.$implicit)}function pt(t,e){if(1&t&&(y.Sb(0,"ng-scrollbar",1),y.Sb(1,"div",2),y.Nb(2,"ntv-as-filter-form"),y.Sb(3,"div",3),y.Sb(4,"div"),y.zc(5,"\u0422\u0438\u043f \u0437\u0430\u043a\u0430\u0437\u043e\u0432"),y.Rb(),y.Sb(6,"div"),y.zc(7,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),y.Rb(),y.Sb(8,"div"),y.zc(9,"\u0412\u0441\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b"),y.Rb(),y.Rb(),y.xc(10,dt,1,0,"ntv-spinner",4),y.xc(11,lt,1,1,"ntv-actual-shipment-type",5),y.Rb(),y.Rb()),2&t){var n=e.ngIf,r=y.dc();y.Bb(10),y.ic("ngIf",n.loadingState===r.loadingStates.loading),y.Bb(1),y.ic("ngForOf",n.data)}}var bt,ht,mt,gt=[{path:"",component:(bt=function(){function t(e){a(this,t),this.store=e,this.loadingStates=p.a}return u(t,[{key:"ngOnInit",value:function(){this.actualShipmentState$=this.store.select(function(t){return t})}}]),t}(),bt.\u0275fac=function(t){return new(t||bt)(y.Mb(k))},bt.\u0275cmp=y.Gb({type:bt,selectors:[["ntv-actual-shipment"]],features:[y.Ab([k])],decls:2,vars:3,consts:[["class","scrollbar",4,"ngIf"],[1,"scrollbar"],[1,"scrollbar__content"],[1,"table-header"],[4,"ngIf"],[3,"type",4,"ngFor","ngForOf"],[3,"type"]],template:function(t,e){1&t&&(y.xc(0,pt,12,2,"ng-scrollbar",0),y.ec(1,"async")),2&t&&y.ic("ngIf",y.fc(1,1,e.actualShipmentState$))},directives:[F.k,R.a,H,F.j,L.a,ft],pipes:[F.b],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%}.table-header[_ngcontent-%COMP%]{width:100%;padding:0 100px 16px;display:grid;grid-template-columns:repeat(3,1fr);color:rgba(0,0,0,.54);font-size:.75rem;font-weight:500}.scrollbar[_ngcontent-%COMP%]{max-height:calc(100vh - 64px);min-height:calc(100vh - 64px)}.scrollbar__content[_ngcontent-%COMP%]{padding:0 16px}"]}),bt)}],vt=((ht=function t(){a(this,t)}).\u0275mod=y.Kb({type:ht}),ht.\u0275inj=y.Jb({factory:function(t){return new(t||ht)},imports:[[l.h.forChild(gt)],l.h]}),ht),yt=c("PCNd"),St=((mt=function t(){a(this,t)}).\u0275mod=y.Kb({type:mt}),mt.\u0275inj=y.Jb({factory:function(t){return new(t||mt)},imports:[[vt,yt.a]]}),mt)}}])}();