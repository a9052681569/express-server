(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{u77b:function(e,t,r){"use strict";r.r(t),r.d(t,"ActualShipmentModule",function(){return ae});var n=r("tyNb"),a=r("hgo/"),s=r("ufcJ"),c=r("z6cu"),o=r("eIep"),i=r("vkgz"),d=r("JIr8"),p=r("fXoL"),l=r("AytR"),h=r("tk/3");let b=(()=>{class e{constructor(e){this.http=e}search(e){return this.http.post(l.a.apiEndpoints.actualShipment,e)}sendedStatusChange(e){return this.http.post(l.a.apiEndpoints.actualShipmentPatchSended,{data:e})}}return e.\u0275fac=function(t){return new(t||e)(p.Wb(h.a))},e.\u0275prov=p.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var u=r("dNgK");let f=(()=>{class e extends s.a{constructor(e,t){super(m),this.asService=e,this.snack=t,this.search=this.effect(e=>e.pipe(Object(o.a)(e=>(this.searchPending(),this.asService.search(e).pipe(Object(i.a)(e=>{this.searchSuccess(e)}),Object(d.a)(e=>(this.searchError(),Object(c.a)(e)))))))),this.sendedChange=this.effect(e=>e.pipe(Object(o.a)(e=>this.asService.sendedStatusChange(e).pipe(Object(i.a)(e=>{this.sendedChangeSuccess(e)}),Object(d.a)(e=>(this.snack.open("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u0438",void 0,{duration:3e3}),Object(c.a)(e))))))),this.sendedChangeSuccess=this.updater((e,t)=>{const r=e.data.slice();return r.forEach(e=>{e.ordersByType.forEach(e=>{e.orders.forEach(e=>{t.ids.includes(e.orderId)&&(e.sended=t.sended)})})}),Object.assign(Object.assign({},e),{data:r})}),this.searchPending=this.updater(e=>Object.assign(Object.assign({},e),{data:[],loadingState:a.a.loading})),this.searchSuccess=this.updater((e,t)=>Object.assign(Object.assign({},e),{data:t,loadingState:a.a.default})),this.searchError=this.updater(e=>Object.assign(Object.assign({},e),{loadingState:a.a.err}))}}return e.\u0275fac=function(t){return new(t||e)(p.Wb(b),p.Wb(u.a))},e.\u0275prov=p.Ib({token:e,factory:e.\u0275fac}),e})();const m={data:[],loadingState:a.a.default};var g=r("ofXK"),v=r("G1Gu"),S=r("XNiG"),y=r("IzEk"),O=r("1G5W"),j=r("Kj3r"),x=r("Qw0g"),w=r("Wcn/");const F={data:{shipmentDate:"",shipmentType:w.d.cdek,notSended:!0},loadingState:a.a.default};var k=r("3Pt+"),R=r("LRne");let I=(()=>{class e{constructor(){}updateFormData(e){return localStorage.setItem("ntv-as-filter-form-data",JSON.stringify(e)),Object(R.a)(e)}getFormData(){const e=localStorage.getItem("ntv-as-filter-form-data"),t=e?JSON.parse(e):F.data;return Object(R.a)(t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=p.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),C=(()=>{class e extends s.a{constructor(e){super(F),this.ffs=e,this.saveForm=this.effect(e=>e.pipe(Object(o.a)(e=>this.ffs.updateFormData(e).pipe(Object(i.a)(e=>{this.reqFormSuccess(e)}),Object(d.a)(e=>(this.reqFormError(),Object(c.a)(e))))))),this.setFormData=this.effect(e=>e.pipe(Object(o.a)(()=>this.ffs.getFormData().pipe(Object(i.a)(e=>{this.reqFormSuccess(e)}),Object(d.a)(e=>(this.reqFormError(),Object(c.a)(e))))))),this.reqFormSuccess=this.updater((e,t)=>Object.assign(Object.assign({},e),{data:t,loadingState:a.a.default})),this.reqFormError=this.updater(e=>Object.assign(Object.assign({},e),{loadingState:a.a.err}))}}return e.\u0275fac=function(t){return new(t||e)(p.Wb(I))},e.\u0275prov=p.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var T=r("kmnG"),M=r("d3UM"),z=r("bSwM"),B=r("bTqV"),P=r("FKr1");function _(e,t){if(1&e&&(p.Sb(0,"mat-option",7),p.zc(1),p.Rb()),2&e){const e=t.$implicit;p.ic("value",e.date),p.Bb(1),p.Bc(" ",e.name," ")}}function N(e,t){if(1&e&&(p.Sb(0,"mat-option",7),p.zc(1),p.Rb()),2&e){const e=t.$implicit;p.ic("value",e),p.Bb(1),p.Bc(" ",e," ")}}let $=(()=>{class e{constructor(e,t,r){this.fb=e,this.formStore=t,this.asStore=r,this.destroyer$$=new S.a,this.shipmentTypes=[...Object.values(w.d),"\u0432\u0441\u0435"],this.months=x.a}ngOnInit(){this.initForm(),this.formStore.setFormData(),this.setFormDataFromSaved(),this.initFormSaver(),this.search()}ngOnDestroy(){this.destroyer$$.next(),this.destroyer$$.complete()}search(){this.asStore.search(this.form.value)}initForm(){this.form=this.fb.group(F.data)}setFormDataFromSaved(){this.formStore.select(e=>e.data).pipe(Object(y.a)(1),Object(i.a)(e=>{this.form.setValue(e)})).subscribe()}initFormSaver(){this.form.valueChanges.pipe(Object(O.a)(this.destroyer$$),Object(j.a)(500)).subscribe(e=>{this.formStore.saveForm(e)})}}return e.\u0275fac=function(t){return new(t||e)(p.Mb(k.e),p.Mb(C),p.Mb(f))},e.\u0275cmp=p.Gb({type:e,selectors:[["ntv-as-filter-form"]],decls:15,vars:3,consts:[[1,"form",3,"formGroup","ngSubmit"],["appearance","standard",1,"low-control","form__control"],["formControlName","shipmentDate"],[3,"value",4,"ngFor","ngForOf"],["formControlName","shipmentType"],["formControlName","notSended"],["mat-raised-button","","color","accent","type","submit",1,"form__control"],[3,"value"]],template:function(e,t){1&e&&(p.Sb(0,"form",0),p.Zb("ngSubmit",function(){return t.search()}),p.Sb(1,"mat-form-field",1),p.Sb(2,"mat-label"),p.zc(3,"\u0414\u0430\u0442\u0430"),p.Rb(),p.Sb(4,"mat-select",2),p.xc(5,_,2,2,"mat-option",3),p.Rb(),p.Rb(),p.Sb(6,"mat-form-field",1),p.Sb(7,"mat-label"),p.zc(8,"\u0422\u0438\u043f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438"),p.Rb(),p.Sb(9,"mat-select",4),p.xc(10,N,2,2,"mat-option",3),p.Rb(),p.Rb(),p.Sb(11,"mat-checkbox",5),p.zc(12,"\u043d\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435"),p.Rb(),p.Sb(13,"button",6),p.zc(14," search "),p.Rb(),p.Rb()),2&e&&(p.ic("formGroup",t.form),p.Bb(5),p.ic("ngForOf",t.months),p.Bb(5),p.ic("ngForOf",t.shipmentTypes))},directives:[k.v,k.o,k.h,T.c,T.f,M.a,k.n,k.g,g.j,z.a,B.a,P.n],styles:["[_nghost-%COMP%]{align-items:center;width:100%}.form[_ngcontent-%COMP%], [_nghost-%COMP%]{display:grid}.form[_ngcontent-%COMP%]{grid-gap:16px;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));padding:16px;align-items:flex-end}"]}),e})();var A=r("4Kj8"),E=r("7EHt");let D=(()=>{class e{constructor(e){this.store=e}get isAllSended(){return this.orderType.orders.every(e=>e.sended)}changeAllSended(e){e.source.checked=!e.checked;const t={ids:this.orderType.orders.map(e=>e.orderId),sended:e.checked};this.store.sendedChange(t)}}return e.\u0275fac=function(t){return new(t||e)(p.Mb(f))},e.\u0275cmp=p.Gb({type:e,selectors:[["ntv-actual-order-type"]],inputs:{orderType:"orderType"},decls:5,vars:3,consts:[[3,"checked","click","change"]],template:function(e,t){1&e&&(p.Sb(0,"div"),p.zc(1),p.Rb(),p.Sb(2,"div"),p.zc(3),p.Rb(),p.Sb(4,"mat-checkbox",0),p.Zb("click",function(e){return e.stopPropagation()})("change",function(e){return t.changeAllSended(e)}),p.Rb()),2&e&&(p.Bb(1),p.Ac(t.orderType.ordersType),p.Bb(2),p.Ac(t.orderType.orders.length),p.Bb(1),p.ic("checked",t.isAllSended))},directives:[z.a],styles:["[_nghost-%COMP%]{width:100%;display:grid;grid-template-columns:repeat(3,1fr);color:rgba(0,0,0,.54);font-size:.75rem;font-weight:500}"]}),e})();var G=r("Wp6s"),J=r("3tz+"),q=r("e1Hi");function K(e,t){if(1&e&&p.Nb(0,"ntv-overlined",6),2&e){const e=p.dc(2);p.ic("value",e.order.comment)}}function W(e,t){if(1&e&&(p.Qb(0),p.xc(1,K,1,1,"ntv-overlined",4),p.Nb(2,"ntv-order-structure",5),p.Pb()),2&e){const e=p.dc();p.Bb(1),p.ic("ngIf",e.order.comment),p.Bb(1),p.ic("orderStructure",e.order.orderStructure)}}function X(e,t){if(1&e&&p.Nb(0,"ntv-overlined",7),2&e){const e=p.dc();p.ic("value",e.order.address.address)}}let Z=(()=>{class e{constructor(e){this.store=e,this.showStructure=!1,this.showAddress=!1}ngOnInit(){this.orderType===w.c.complicated&&(this.showStructure=!0),this.orderType===w.c.theatres&&(this.showStructure=!0,this.showAddress=!0)}changeSended(e){this.store.sendedChange({ids:[this.order.orderId],sended:e})}}return e.\u0275fac=function(t){return new(t||e)(p.Mb(f))},e.\u0275cmp=p.Gb({type:e,selectors:[["ntv-actual-shipment-order"]],inputs:{order:"order",orderType:"orderType"},decls:7,vars:4,consts:[[1,"card"],["color","accent",3,"checked","click"],[4,"ngIf"],["overline","\u0430\u0434\u0440\u0435\u0441",3,"value",4,"ngIf"],["overline","\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",3,"value",4,"ngIf"],[3,"orderStructure"],["overline","\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",3,"value"],["overline","\u0430\u0434\u0440\u0435\u0441",3,"value"]],template:function(e,t){1&e&&(p.Sb(0,"mat-card",0),p.Sb(1,"p"),p.zc(2),p.Rb(),p.Sb(3,"mat-checkbox",1),p.Zb("click",function(e){return e.preventDefault(),t.changeSended(!t.order.sended)}),p.zc(4," \u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e "),p.Rb(),p.xc(5,W,3,2,"ng-container",2),p.xc(6,X,1,1,"ntv-overlined",3),p.Rb()),2&e&&(p.Bb(2),p.Ac(t.order.name),p.Bb(1),p.ic("checked",t.order.sended),p.Bb(2),p.ic("ngIf",t.showStructure),p.Bb(1),p.ic("ngIf",t.showAddress))},directives:[G.a,z.a,g.k,J.a,q.a],styles:["[_nghost-%COMP%]{display:block}.card[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;display:grid;gap:16px}"]}),e})();function H(e,t){if(1&e&&p.Nb(0,"ntv-actual-shipment-order",9),2&e){const e=t.$implicit,r=p.dc(2).$implicit;p.ic("order",e)("orderType",r.ordersType)}}function L(e,t){if(1&e&&(p.Sb(0,"div",7),p.xc(1,H,1,2,"ntv-actual-shipment-order",8),p.Rb()),2&e){const e=p.dc().$implicit;p.Bb(1),p.ic("ngForOf",e.orders)}}function Q(e,t){if(1&e&&(p.Sb(0,"mat-expansion-panel",3),p.Sb(1,"mat-expansion-panel-header",4),p.Nb(2,"ntv-actual-order-type",5),p.Rb(),p.xc(3,L,2,1,"ng-template",6),p.Rb()),2&e){const e=t.$implicit;p.Bb(2),p.ic("orderType",e)}}let V=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.Gb({type:e,selectors:[["ntv-actual-shipment-type"]],inputs:{type:"type"},decls:5,vars:4,consts:[[1,"shipment-type"],["displayMode","flat"],["hideToggle","","class","mat-elevation-z0",4,"ngFor","ngForOf"],["hideToggle","",1,"mat-elevation-z0"],[1,"row"],[3,"orderType"],["matExpansionPanelContent",""],[1,"orders-container"],[3,"order","orderType",4,"ngFor","ngForOf"],[3,"order","orderType"]],template:function(e,t){1&e&&(p.Sb(0,"h3",0),p.zc(1),p.ec(2,"titlecase"),p.Rb(),p.Sb(3,"mat-accordion",1),p.xc(4,Q,4,1,"mat-expansion-panel",2),p.Rb()),2&e&&(p.Bb(1),p.Ac(p.fc(2,2,t.type.shipmentType)),p.Bb(3),p.ic("ngForOf",t.type.ordersByType))},directives:[E.a,g.j,E.c,E.f,D,E.d,Z],pipes:[g.r],styles:["[_nghost-%COMP%]{display:block;width:100%}.row[_ngcontent-%COMP%]{padding:0 100px}.orders-container[_ngcontent-%COMP%]{display:grid;grid-gap:16px;padding:16px;grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}"]}),e})();function U(e,t){1&e&&p.Nb(0,"ntv-spinner")}function Y(e,t){1&e&&p.Nb(0,"ntv-actual-shipment-type",6),2&e&&p.ic("type",t.$implicit)}function ee(e,t){if(1&e&&(p.Sb(0,"ng-scrollbar",1),p.Sb(1,"div",2),p.Nb(2,"ntv-as-filter-form"),p.Sb(3,"div",3),p.Sb(4,"div"),p.zc(5,"\u0422\u0438\u043f \u0437\u0430\u043a\u0430\u0437\u043e\u0432"),p.Rb(),p.Sb(6,"div"),p.zc(7,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),p.Rb(),p.Sb(8,"div"),p.zc(9,"\u0412\u0441\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b"),p.Rb(),p.Rb(),p.xc(10,U,1,0,"ntv-spinner",4),p.xc(11,Y,1,1,"ntv-actual-shipment-type",5),p.Rb(),p.Rb()),2&e){const e=t.ngIf,r=p.dc();p.Bb(10),p.ic("ngIf",e.loadingState===r.loadingStates.loading),p.Bb(1),p.ic("ngForOf",e.data)}}const te=[{path:"",component:(()=>{class e{constructor(e){this.store=e,this.loadingStates=a.a}ngOnInit(){this.actualShipmentState$=this.store.select(e=>e)}}return e.\u0275fac=function(t){return new(t||e)(p.Mb(f))},e.\u0275cmp=p.Gb({type:e,selectors:[["ntv-actual-shipment"]],features:[p.Ab([f])],decls:2,vars:3,consts:[["class","scrollbar",4,"ngIf"],[1,"scrollbar"],[1,"scrollbar__content"],[1,"table-header"],[4,"ngIf"],[3,"type",4,"ngFor","ngForOf"],[3,"type"]],template:function(e,t){1&e&&(p.xc(0,ee,12,2,"ng-scrollbar",0),p.ec(1,"async")),2&e&&p.ic("ngIf",p.fc(1,1,t.actualShipmentState$))},directives:[g.k,v.a,$,g.j,A.a,V],pipes:[g.b],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%}.table-header[_ngcontent-%COMP%]{width:100%;padding:0 116px 16px;display:grid;grid-template-columns:repeat(3,1fr);color:rgba(0,0,0,.54);font-size:.75rem;font-weight:500}.scrollbar[_ngcontent-%COMP%]{max-height:calc(100vh - 64px);min-height:calc(100vh - 64px)}.scrollbar__content[_ngcontent-%COMP%]{padding:0 16px}"]}),e})()}];let re=(()=>{class e{}return e.\u0275mod=p.Kb({type:e}),e.\u0275inj=p.Jb({factory:function(t){return new(t||e)},imports:[[n.h.forChild(te)],n.h]}),e})();var ne=r("PCNd");let ae=(()=>{class e{}return e.\u0275mod=p.Kb({type:e}),e.\u0275inj=p.Jb({factory:function(t){return new(t||e)},imports:[[re,ne.a]]}),e})()}}]);