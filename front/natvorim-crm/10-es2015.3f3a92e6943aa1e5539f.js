(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"5tjk":function(t,e,r){"use strict";r.r(e),r.d(e,"PeopleModule",function(){return Pt});var n=r("tyNb"),o=r("XNiG"),i=r("LRne"),s=r("1G5W"),c=r("Kj3r"),a=r("eIep"),d=r("HnnZ"),l=r("fXoL"),b=r("l7P3"),p=r("3Pt+"),m=r("SuJO"),u=r("ofXK"),g=r("G1Gu"),f=r("kmnG"),h=r("qFsG"),v=r("/1cH"),S=r("FKr1"),_=r("4Kj8"),O=r("7EHt"),y=r("0IaG"),x=r("bTqV");let R=(()=>{class t{constructor(t,e,r){this.data=t,this.fb=e,this.store=r}ngOnInit(){this.editPersonForm=this.fb.group({name:this.data.person.name,email:this.data.person.contacts.email||"",inst:this.data.person.contacts.inst||"",phone:this.data.person.contacts.phone||"",city:this.data.person.address.city,address:this.data.person.address.address})}patchPerson(){var t,e,r,n,o,i;const s={id:this.data.person.id,name:null===(t=this.editPersonForm.get("name"))||void 0===t?void 0:t.value,contacts:{email:null===(e=this.editPersonForm.get("email"))||void 0===e?void 0:e.value,inst:null===(r=this.editPersonForm.get("inst"))||void 0===r?void 0:r.value,phone:null===(n=this.editPersonForm.get("phone"))||void 0===n?void 0:n.value},address:{city:null===(o=this.editPersonForm.get("city"))||void 0===o?void 0:o.value,address:null===(i=this.editPersonForm.get("address"))||void 0===i?void 0:i.value}};this.store.dispatch(d.a.patchPending({customer:s}))}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(y.a),l.Mb(p.e),l.Mb(b.h))},t.\u0275cmp=l.Gb({type:t,selectors:[["ntv-edit-person-dialog"]],decls:27,vars:1,consts:[[1,"form",3,"formGroup","ngSubmit"],["appearance","standard"],["matInput","","formControlName","name"],["matInput","","formControlName","email"],["matInput","","formControlName","inst"],["matInput","","formControlName","phone"],["matInput","","formControlName","city"],["matInput","","formControlName","address"],["mat-flat-button","","type","submit"]],template:function(t,e){1&t&&(l.Sb(0,"form",0),l.Zb("ngSubmit",function(){return e.patchPerson()}),l.Sb(1,"mat-form-field",1),l.Sb(2,"mat-label"),l.zc(3,"\u0424\u0418\u041e"),l.Rb(),l.Nb(4,"input",2),l.Rb(),l.Sb(5,"mat-form-field",1),l.Sb(6,"mat-label"),l.zc(7,"E-mail"),l.Rb(),l.Nb(8,"input",3),l.Rb(),l.Sb(9,"mat-form-field",1),l.Sb(10,"mat-label"),l.zc(11,"\u0418\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c"),l.Rb(),l.Nb(12,"input",4),l.Rb(),l.Sb(13,"mat-form-field",1),l.Sb(14,"mat-label"),l.zc(15,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),l.Rb(),l.Nb(16,"input",5),l.Rb(),l.Sb(17,"mat-form-field",1),l.Sb(18,"mat-label"),l.zc(19,"\u0413\u043e\u0440\u043e\u0434"),l.Rb(),l.Nb(20,"input",6),l.Rb(),l.Sb(21,"mat-form-field",1),l.Sb(22,"mat-label"),l.zc(23,"\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u0430\u0434\u0440\u0435\u0441"),l.Rb(),l.Nb(24,"input",7),l.Rb(),l.Sb(25,"button",8),l.zc(26,"\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c"),l.Rb(),l.Rb()),2&t&&l.ic("formGroup",e.editPersonForm)},directives:[p.v,p.o,p.h,f.c,f.f,h.b,p.c,p.n,p.g,x.a],styles:["[_nghost-%COMP%]{display:block;min-width:500px}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]}),t})();var C=r("+PC+"),k=r("UXJo"),P=r("NFeN"),N=r("e1Hi"),M=r("ufcJ"),I=r("z6cu"),B=r("vkgz"),w=r("JIr8"),z=r("hS0P");let F=(()=>{class t extends M.a{constructor(t){super(j),this.ordersService=t,this.getOrders=this.effect(t=>t.pipe(Object(a.a)(t=>(this.addOrdersPending(),this.ordersService.getOrders(t).pipe(Object(B.a)(t=>{console.log(t),this.addOrdersSuccess(t)}),Object(w.a)(t=>(this.addOrdersError(),Object(I.a)(t)))))))),this.patchOrder=this.updater((t,e)=>{const r=t.orders.slice();return r[r.findIndex(t=>t.id===e.id)]=Object.assign({},e),Object.assign(Object.assign({},t),{orders:r})}),this.addOrdersPending=this.updater(t=>Object.assign(Object.assign({},t),{loading:!0})),this.addOrdersSuccess=this.updater((t,e)=>({orders:[...t.orders,...e],loading:!1,err:!1})),this.addOrdersError=this.updater(t=>Object.assign(Object.assign({},t),{err:!0,loading:!1}))}}return t.\u0275fac=function(e){return new(e||t)(l.Wb(z.a))},t.\u0275prov=l.Ib({token:t,factory:t.\u0275fac}),t})();const j={orders:[],loading:!1,err:!1};var G=r("f0Cb"),T=r("wJZa");let $=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Gb({type:t,selectors:[["ntv-kit"]],inputs:{kit:"kit"},decls:3,vars:6,consts:[[3,"overline","value"]],template:function(t,e){1&t&&(l.Nb(0,"ntv-overlined",0),l.Nb(1,"ntv-overlined",0),l.ec(2,"numberToString")),2&t&&(l.ic("overline","\u0432\u043e\u0437\u0440\u0430\u0441\u0442")("value",e.kit.age||""),l.Bb(1),l.ic("overline","\u0441\u043a\u043e\u043b\u044c\u043a\u043e")("value",l.fc(2,4,e.kit.count)))},directives:[N.a],pipes:[T.a],styles:["[_nghost-%COMP%]{display:flex;gap:16px}"]}),t})();function E(t,e){1&t&&l.Nb(0,"ntv-kit",4),2&t&&l.ic("kit",e.$implicit)}function Z(t,e){1&t&&l.Nb(0,"ntv-kit",4),2&t&&l.ic("kit",e.$implicit)}let J=(()=>{class t{constructor(t){this.data=t}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(y.a))},t.\u0275cmp=l.Gb({type:t,selectors:[["ntv-order-structure-dialog"]],decls:9,vars:3,consts:[[1,"kits"],[3,"kit",4,"ngFor","ngForOf"],[3,"vertical"],[1,"theatres"],[3,"kit"]],template:function(t,e){1&t&&(l.Sb(0,"div",0),l.Sb(1,"h6"),l.zc(2,"\u041d\u0430\u0431\u043e\u0440\u044b"),l.Rb(),l.xc(3,E,1,1,"ntv-kit",1),l.Rb(),l.Nb(4,"mat-divider",2),l.Sb(5,"div",3),l.Sb(6,"h6"),l.zc(7,"\u0422\u0435\u0430\u0442\u0440\u044b"),l.Rb(),l.xc(8,Z,1,1,"ntv-kit",1),l.Rb()),2&t&&(l.Bb(3),l.ic("ngForOf",e.data.orderStructure.kits),l.Bb(1),l.ic("vertical",!0),l.Bb(4),l.ic("ngForOf",e.data.orderStructure.theatres))},directives:[u.j,G.a,$],styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1px 1fr;grid-template-rows:repeat(auto-fill,100px);grid-gap:16px}"]}),t})();var K=r("hgo/"),D=r("Qw0g"),A=r("Wcn/"),Q=r("Wp6s"),H=r("bSwM"),W=r("d3UM"),X=r("3tz+");function q(t,e){if(1&t&&(l.Sb(0,"mat-option",17),l.zc(1),l.Rb()),2&t){const t=e.$implicit;l.ic("value",t),l.Bb(1),l.Bc(" ",t," ")}}function L(t,e){if(1&t&&(l.Sb(0,"mat-option",17),l.zc(1),l.Rb()),2&t){const t=e.$implicit;l.ic("value",t.date),l.Bb(1),l.Bc(" ",t.name," ")}}function U(t,e){if(1&t&&(l.Sb(0,"mat-option",17),l.zc(1),l.Rb()),2&t){const t=e.$implicit;l.ic("value",t),l.Bb(1),l.Bc(" ",t," ")}}function V(t,e){1&t&&(l.Sb(0,"span",18),l.zc(1," \u0421\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c... "),l.Nb(2,"ntv-spinner",19),l.Rb()),2&t&&(l.Bb(2),l.ic("diameter",16))}function Y(t,e){1&t&&(l.Sb(0,"span",18),l.zc(1," \u041e\u0448\u0438\u0431\u043a\u0430, \u043d\u0430\u0436\u043c\u0438 \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0441\u043d\u043e\u0432\u0430 "),l.Sb(2,"mat-icon",20),l.zc(3,"error"),l.Rb(),l.Rb())}function tt(t,e){1&t&&(l.Qb(0),l.zc(1," \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c "),l.Pb())}let et=(()=>{class t{constructor(t,e,r,n){this.dialogRef=t,this.order=e,this.fb=r,this.ordersService=n,this.loadingStates=K.a,this.months=D.a,this.orderTypes=Object.values(A.b),this.shipmentTypes=Object.values(A.c)}get orderStructure(){return this.editOrderForm.get("orderStructure")}ngOnInit(){this.editOrderForm=this.fb.group({comment:this.order.comment,sended:this.order.sended,shipmentDate:this.order.shipmentDate,shipmentType:this.order.shipmentType,trackNumber:this.order.trackNumber,type:this.order.type,orderStructure:this.fb.group({kits:this.fb.array([]),theatres:this.fb.array([])})})}patchOrder(){const t=Object.assign({id:this.order.id,personId:this.order.personId},this.editOrderForm.value);this.loadingState=this.loadingStates.loading,this.ordersService.patchOrder(t).pipe(Object(B.a)(t=>{this.loadingState=null,this.dialogRef.close(t)}),Object(w.a)(t=>(this.loadingState=this.loadingStates.err,Object(I.a)(t)))).subscribe()}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(y.d),l.Mb(y.a),l.Mb(p.e),l.Mb(z.a))},t.\u0275cmp=l.Gb({type:t,selectors:[["ntv-edit-order-dialog"]],decls:44,vars:11,consts:[[1,"scrollbar"],[1,"form",3,"formGroup","ngSubmit"],[1,"form__block"],[1,"select-card"],["appearance","standard"],["matInput","","formControlName","comment"],[3,"vertical"],[1,"form__block-colomn"],["formControlName","sended"],["formControlName","type"],[3,"value",4,"ngFor","ngForOf"],["formControlName","shipmentDate"],["formControlName","shipmentType"],[3,"order","orderStructureGroup"],["mat-raised-button","","type","submit",1,"submit-button",3,"ngSwitch"],["class","submit-button__content",4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"value"],[1,"submit-button__content"],[1,"submit-button__spinner",3,"diameter"],[1,"submit-button__error-icon"]],template:function(t,e){1&t&&(l.Sb(0,"ng-scrollbar",0),l.Sb(1,"form",1),l.Zb("ngSubmit",function(){return e.patchOrder()}),l.Sb(2,"h4"),l.zc(3,"\u041e \u0437\u0430\u043a\u0430\u0437\u0435"),l.Rb(),l.Sb(4,"div",2),l.Sb(5,"mat-card",3),l.Sb(6,"mat-form-field",4),l.Sb(7,"mat-label"),l.zc(8,"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"),l.Rb(),l.Nb(9,"textarea",5),l.Rb(),l.Rb(),l.Nb(10,"mat-divider",6),l.Sb(11,"div",7),l.Sb(12,"mat-card",3),l.Sb(13,"mat-checkbox",8),l.zc(14,"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e"),l.Rb(),l.Rb(),l.Sb(15,"mat-card",3),l.Sb(16,"mat-form-field",4),l.Sb(17,"mat-label"),l.zc(18,"\u0422\u0438\u043f"),l.Rb(),l.Sb(19,"mat-select",9),l.xc(20,q,2,2,"mat-option",10),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(21,"h4"),l.zc(22,"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430"),l.Rb(),l.Sb(23,"div",2),l.Sb(24,"mat-card",3),l.Sb(25,"mat-form-field",4),l.Sb(26,"mat-label"),l.zc(27,"\u0414\u0430\u0442\u0430"),l.Rb(),l.Sb(28,"mat-select",11),l.xc(29,L,2,2,"mat-option",10),l.Rb(),l.Rb(),l.Rb(),l.Nb(30,"mat-divider",6),l.Sb(31,"mat-card",3),l.Sb(32,"mat-form-field",4),l.Sb(33,"mat-label"),l.zc(34,"\u0422\u0438\u043f"),l.Rb(),l.Sb(35,"mat-select",12),l.xc(36,U,2,2,"mat-option",10),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(37,"h4"),l.zc(38,"\u0427\u0442\u043e \u0432\u0435\u0437\u0435\u043c"),l.Rb(),l.Nb(39,"ntv-order-structure",13),l.Sb(40,"button",14),l.xc(41,V,3,1,"span",15),l.xc(42,Y,4,0,"span",15),l.xc(43,tt,2,0,"ng-container",16),l.Rb(),l.Rb(),l.Rb()),2&t&&(l.Bb(1),l.ic("formGroup",e.editOrderForm),l.Bb(9),l.ic("vertical",!0),l.Bb(10),l.ic("ngForOf",e.orderTypes),l.Bb(9),l.ic("ngForOf",e.months),l.Bb(1),l.ic("vertical",!0),l.Bb(6),l.ic("ngForOf",e.shipmentTypes),l.Bb(3),l.ic("order",e.order)("orderStructureGroup",e.orderStructure),l.Bb(1),l.ic("ngSwitch",e.loadingState),l.Bb(1),l.ic("ngSwitchCase",e.loadingStates.loading),l.Bb(1),l.ic("ngSwitchCase",e.loadingStates.err))},directives:[g.a,p.v,p.o,p.h,Q.a,f.c,f.f,h.b,p.c,p.n,p.g,G.a,H.a,W.a,u.j,X.a,x.a,u.m,u.n,u.o,S.n,_.a,P.a],styles:["[_nghost-%COMP%]{display:block;min-width:500px;margin:-24px}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:16px;width:100%;height:100%;padding:16px}.form__block[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1px 1fr;grid-gap:16px;width:100%}.form__block-colomn[_ngcontent-%COMP%]{width:100%}.form__array[_ngcontent-%COMP%], .form__block-colomn[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.form__array-item[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 40px;grid-template-rows:repeat(auto-fill,41px);grid-gap:16px}.form__array-title[_ngcontent-%COMP%]{gap:16px}.form__array-title[_ngcontent-%COMP%], .submit-button__content[_ngcontent-%COMP%]{display:flex;align-items:center}.submit-button__spinner[_ngcontent-%COMP%]{margin-top:0;margin-left:8px}.submit-button__error-icon[_ngcontent-%COMP%]{margin-left:8px}.scrollbar[_ngcontent-%COMP%]{max-height:90vh}.select-card[_ngcontent-%COMP%]{display:grid}"]}),t})();var rt=r("hA4r"),nt=r("8prF");function ot(t,e){if(1&t){const t=l.Tb();l.Sb(0,"ntv-overlined",9),l.Zb("click",function(){return l.pc(t),l.dc().showOrderStructureDialog()}),l.Rb()}2&t&&l.ic("overline","\u043d\u0430\u0431\u043e\u0440\u044b")("value","\u043d\u0430\u0436\u043c\u0438 \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430")}function it(t,e){if(1&t&&(l.Qb(0),l.Nb(1,"ntv-overlined",11),l.Nb(2,"ntv-kit",12),l.Pb()),2&t){const t=l.dc(2);l.Bb(2),l.ic("kit",t.order.orderStructure.kits[0])}}function st(t,e){if(1&t&&(l.Qb(0),l.Nb(1,"ntv-overlined",13),l.Nb(2,"ntv-kit",12),l.Pb()),2&t){const t=l.dc(2);l.Bb(2),l.ic("kit",t.order.orderStructure.theatres[0])}}function ct(t,e){if(1&t&&(l.xc(0,it,3,1,"ng-container",10),l.xc(1,st,3,1,"ng-container",10)),2&t){const t=l.dc();l.ic("ngIf",t.order.orderStructure.kits.length),l.Bb(1),l.ic("ngIf",t.order.orderStructure.theatres.length)}}let at=(()=>{class t{constructor(t,e,r){this.dialog=t,this.ordersStore=e,this.clipService=r}get moreThanOneKit(){const t=this.order.orderStructure.kits.length,e=this.order.orderStructure.theatres.length;return t>1||e>1||t>0&&e>0}showOrderStructureDialog(){this.dialog.open(J,{data:{orderStructure:this.order.orderStructure}})}showEditor(){this.dialog.open(et,{data:this.order}).afterClosed().subscribe(t=>{t&&this.ordersStore.patchOrder(t)})}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(y.b),l.Mb(F),l.Mb(C.a))},t.\u0275cmp=l.Gb({type:t,selectors:[["ntv-person-order"]],inputs:{order:"order"},decls:14,vars:14,consts:[[1,"order"],[1,"order__data"],[3,"overline","value"],["class","order__kits",3,"overline","value","click",4,"ngIf","ngIfElse"],["oneKit",""],[3,"orderId","sendedStatus"],[3,"orderId","trackNumber"],[1,"order__comment",3,"overline","value"],["mat-icon-button","",1,"order__edit",3,"click"],[1,"order__kits",3,"overline","value","click"],[4,"ngIf"],["overline","\u0447\u0442\u043e \u043f\u0440\u0438\u0432\u0435\u0437\u0442\u0438","value","\u043d\u0430\u0431\u043e\u0440"],[3,"kit"],["overline","\u0447\u0442\u043e \u043f\u0440\u0438\u0432\u0435\u0437\u0442\u0438","value","\u0442\u0435\u0430\u0442\u0440"]],template:function(t,e){if(1&t&&(l.Sb(0,"mat-card",0),l.Sb(1,"div",1),l.Nb(2,"ntv-overlined",2),l.Nb(3,"ntv-overlined",2),l.Nb(4,"ntv-overlined",2),l.xc(5,ot,1,2,"ntv-overlined",3),l.xc(6,ct,2,2,"ng-template",null,4,l.yc),l.Nb(8,"ntv-sended-checkbox",5),l.Nb(9,"ntv-track-field",6),l.Rb(),l.Nb(10,"ntv-overlined",7),l.Sb(11,"button",8),l.Zb("click",function(){return e.showEditor()}),l.Sb(12,"mat-icon"),l.zc(13,"edit"),l.Rb(),l.Rb(),l.Rb()),2&t){const t=l.nc(7);l.Bb(2),l.ic("overline","\u0442\u0438\u043f \u0437\u0430\u043a\u0430\u0437\u0430")("value",e.order.type),l.Bb(1),l.ic("overline","\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")("value",e.order.shipmentDate),l.Bb(1),l.ic("overline","\u043f\u043e\u0432\u0435\u0437\u0435\u0442")("value",e.order.shipmentType||"\u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"),l.Bb(1),l.ic("ngIf",e.moreThanOneKit)("ngIfElse",t),l.Bb(3),l.ic("orderId",e.order.id)("sendedStatus",e.order.sended),l.Bb(1),l.ic("orderId",e.order.id)("trackNumber",e.order.trackNumber),l.Bb(1),l.ic("overline","\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439")("value",e.order.comment||"\u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d")}},directives:[Q.a,N.a,u.k,rt.a,nt.a,x.a,P.a,$],styles:['[_nghost-%COMP%]{display:block}.order[_ngcontent-%COMP%]{display:grid;grid-template-areas:"data edit" "comment comment";grid-template-columns:1fr 40px;grid-template-rows:auto auto;grid-gap:8px}.order__data[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;grid-area:data}.order__comment[_ngcontent-%COMP%]{grid-area:comment}.order__edit[_ngcontent-%COMP%]{grid-area:edit}.order__kits[_ngcontent-%COMP%]{cursor:pointer}.order__track-control-spinner[_ngcontent-%COMP%]{margin-top:16px}.order__track-copy-icon[_ngcontent-%COMP%]{cursor:pointer}']}),t})();function dt(t,e){1&t&&l.Nb(0,"ntv-person-order",4),2&t&&l.ic("order",e.$implicit)}function lt(t,e){1&t&&(l.Sb(0,"p"),l.zc(1,"\u0423 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043d\u0435\u0442 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"),l.Rb())}function bt(t,e){if(1&t){const t=l.Tb();l.Sb(0,"p"),l.zc(1,"\u041e\u0448\u0438\u0431\u043a\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 "),l.Sb(2,"span",5),l.Zb("click",function(){return l.pc(t),l.dc(2).getOrders()}),l.zc(3,"\u0435\u0449\u0435 \u0440\u0430\u0437"),l.Rb(),l.Rb()}}function pt(t,e){1&t&&l.Nb(0,"ntv-spinner",6),2&t&&l.ic("diameter",24)}function mt(t,e){if(1&t&&(l.Qb(0),l.Sb(1,"mat-accordion"),l.xc(2,dt,1,1,"ntv-person-order",1),l.xc(3,lt,2,0,"p",0),l.Rb(),l.xc(4,bt,4,0,"p",0),l.Nb(5,"div",2),l.xc(6,pt,1,1,"ntv-spinner",3),l.Pb()),2&t){const t=e.ngIf;l.Bb(2),l.ic("ngForOf",t.orders),l.Bb(1),l.ic("ngIf",!t.orders.length&&!t.err&&!t.loading),l.Bb(1),l.ic("ngIf",t.err),l.Bb(2),l.ic("ngIf",t.loading)}}let ut=(()=>{class t{constructor(t){this.ordersStore=t}ngOnInit(){this.state$=this.ordersStore.select(t=>t),this.getOrders()}getOrders(){this.ordersStore.getOrders(this.personId)}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(F))},t.\u0275cmp=l.Gb({type:t,selectors:[["ntv-person-orders"]],inputs:{personId:"personId"},features:[l.Ab([F])],decls:2,vars:3,consts:[[4,"ngIf"],["class","order",3,"order",4,"ngFor","ngForOf"],["if",""],[3,"diameter",4,"ngIf"],[1,"order",3,"order"],[1,"text-button",3,"click"],[3,"diameter"]],template:function(t,e){1&t&&(l.xc(0,mt,7,4,"ng-container",0),l.ec(1,"async")),2&t&&l.ic("ngIf",l.fc(1,1,e.state$))},directives:[u.k,O.a,u.j,at,_.a],pipes:[u.b],styles:[".text-button[_ngcontent-%COMP%]{color:red;cursor:pointer}.order[_ngcontent-%COMP%]{margin-bottom:8px}"]}),t})();function gt(t,e){if(1&t&&l.Nb(0,"ntv-overlined",6),2&t){const t=e.$implicit;l.ic("clip",t.value)("overline",t.name)("value",t.value||"\u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d")}}function ft(t,e){if(1&t&&(l.Sb(0,"div",7),l.Sb(1,"h6",8),l.zc(2,"\u0410\u0434\u0440\u0435\u0441"),l.Rb(),l.Nb(3,"ntv-overlined",9),l.Nb(4,"ntv-overlined",10),l.Rb(),l.Sb(5,"h6"),l.zc(6,"\u0417\u0430\u043a\u0430\u0437\u044b"),l.Rb(),l.Nb(7,"ntv-person-orders",11)),2&t){const t=l.dc();l.Bb(3),l.ic("clip",t.person.address.city)("value",t.person.address.city||"\u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"),l.Bb(1),l.ic("clip",t.person.address.address)("value",t.person.address.address||"\u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"),l.Bb(3),l.ic("personId",t.person.id)}}let ht=(()=>{class t{constructor(t,e){this.clipService=t,this.dialog=e}ngOnInit(){this.contactItems=[{name:"\u041f\u043e\u0447\u0442\u0430",value:this.person.contacts.email||"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"},{name:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",value:this.person.contacts.phone||"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"},{name:"\u0418\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c",value:this.person.contacts.inst||"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"}]}showEditor(){this.dialog.open(R,{data:{person:this.person}})}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(C.a),l.Mb(y.b))},t.\u0275cmp=l.Gb({type:t,selectors:[["ntv-person"]],inputs:{person:"person"},decls:10,vars:3,consts:[[1,"person"],[1,"person__title",3,"cdkCopyToClipboard","cdkCopyToClipboardCopied","click"],[1,"person__description",3,"click"],["class","person__address-item",3,"clip","overline","value",4,"ngFor","ngForOf"],["mat-icon-button","",3,"click"],["matExpansionPanelContent",""],[1,"person__address-item",3,"clip","overline","value"],[1,"person__address"],[1,"person__address-title"],["overline","\u0433\u043e\u0440\u043e\u0434",1,"person__address-item",3,"clip","value"],["overline","\u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0435",1,"person__address-item",3,"clip","value"],[3,"personId"]],template:function(t,e){1&t&&(l.Sb(0,"mat-expansion-panel",0),l.Sb(1,"mat-expansion-panel-header"),l.Sb(2,"mat-panel-title",1),l.Zb("cdkCopyToClipboardCopied",function(){return e.clipService.clip(e.person.name)})("click",function(t){return t.stopPropagation()}),l.zc(3),l.Rb(),l.Sb(4,"mat-panel-description",2),l.Zb("click",function(t){return t.stopPropagation()}),l.xc(5,gt,1,3,"ntv-overlined",3),l.Sb(6,"button",4),l.Zb("click",function(){return e.showEditor()}),l.Sb(7,"mat-icon"),l.zc(8,"edit"),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.xc(9,ft,8,5,"ng-template",5),l.Rb()),2&t&&(l.Bb(2),l.ic("cdkCopyToClipboard",e.person.name),l.Bb(1),l.Bc(" ",e.person.name," "),l.Bb(2),l.ic("ngForOf",e.contactItems))},directives:[O.c,O.f,O.g,k.a,O.e,u.j,x.a,P.a,O.d,N.a,ut],styles:['[_nghost-%COMP%]{display:block;overflow:hidden}.person__title[_ngcontent-%COMP%]{min-width:200px;max-width:200px}.person__description[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr) auto;grid-gap:16px}.person__address[_ngcontent-%COMP%]{display:grid;grid-template-areas:"title title" "item item";grid-template-columns:auto auto;grid-template-rows:auto auto}.person__address-title[_ngcontent-%COMP%]{grid-area:title}.person__address-item[_ngcontent-%COMP%]{cursor:pointer}.person.mat-expansion-panel[_ngcontent-%COMP%]{border-radius:0!important}']}),t})();function vt(t,e){if(1&t&&(l.Sb(0,"mat-option",9),l.zc(1),l.Rb()),2&t){const t=e.$implicit;l.ic("value",t),l.Bb(1),l.Bc(" ",t.name," ")}}function St(t,e){1&t&&l.Nb(0,"ntv-spinner")}function _t(t,e){1&t&&l.Nb(0,"ntv-person",11),2&t&&l.ic("person",e.$implicit)}function Ot(t,e){if(1&t&&(l.Sb(0,"mat-accordion"),l.xc(1,_t,1,1,"ntv-person",10),l.Rb()),2&t){const t=l.dc().ngIf;l.Bb(1),l.ic("ngForOf",t.customers)}}function yt(t,e){1&t&&(l.Sb(0,"p"),l.zc(1,"\u041e\u0448\u0438\u0431\u043a\u0430"),l.Rb())}function xt(t,e){if(1&t){const t=l.Tb();l.Sb(0,"ng-scrollbar",1),l.Sb(1,"div",2),l.Sb(2,"mat-form-field",3),l.Sb(3,"mat-label"),l.zc(4,"\u043f\u043e\u0438\u0441\u043a \u043f\u043e \u0438\u043c\u0435\u043d\u0438"),l.Rb(),l.Nb(5,"input",4),l.Sb(6,"mat-autocomplete",5,6),l.Zb("optionSelected",function(e){return l.pc(t),l.dc().setCustomer(e)}),l.xc(8,vt,2,2,"mat-option",7),l.Rb(),l.Rb(),l.xc(9,St,1,0,"ntv-spinner",8),l.xc(10,Ot,2,1,"mat-accordion",8),l.xc(11,yt,2,0,"p",8),l.Rb(),l.Rb()}if(2&t){const t=e.ngIf,r=l.nc(7),n=l.dc();l.Bb(5),l.ic("formControl",n.name)("matAutocomplete",r),l.Bb(3),l.ic("ngForOf",n.autocompleteOptions),l.Bb(1),l.ic("ngIf",t.loading),l.Bb(1),l.ic("ngIf",t.customers.length),l.Bb(1),l.ic("ngIf",t.err)}}const Rt=[{path:"",component:(()=>{class t{constructor(t,e,r){this.store=t,this.fb=e,this.addOrderService=r,this.autocompleteOptions=[],this.destroyer$$=new o.a}ngOnInit(){this.state=this.store.select("customers"),this.store.dispatch(d.a.searchPending({name:""})),this.initSearch()}ngOnDestroy(){this.destroyer$$.next(),this.destroyer$$.complete()}setCustomer(t){this.store.dispatch(d.a.searchSuccess({customers:[t.option.value]})),this.name.setValue(t.option.value.name)}initSearch(){this.name=this.fb.control(""),this.initAutocomplete()}initAutocomplete(){this.name.valueChanges.pipe(Object(s.a)(this.destroyer$$),Object(c.a)(300),Object(a.a)(t=>this.prevName&&this.prevName===t?Object(i.a)(this.autocompleteOptions):(this.prevName=t,this.addOrderService.getPersonsByName(t)))).subscribe(t=>{this.autocompleteOptions=t})}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(b.h),l.Mb(p.e),l.Mb(m.a))},t.\u0275cmp=l.Gb({type:t,selectors:[["ntv-people"]],decls:2,vars:3,consts:[["class","scrollbar",4,"ngIf"],[1,"scrollbar"],[1,"people"],["appearance","standard",1,"search"],["matInput","",3,"formControl","matAutocomplete"],[3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"value"],[3,"person",4,"ngFor","ngForOf"],[3,"person"]],template:function(t,e){1&t&&(l.xc(0,xt,12,6,"ng-scrollbar",0),l.ec(1,"async")),2&t&&l.ic("ngIf",l.fc(1,1,e.state))},directives:[u.k,g.a,f.c,f.f,h.b,p.c,v.c,p.n,p.f,v.a,u.j,S.n,_.a,O.a,ht],pipes:[u.b],styles:["[_nghost-%COMP%]{display:block}.search[_ngcontent-%COMP%]{width:100%}.people[_ngcontent-%COMP%]{display:grid;grid-gap:16px;padding:16px}.scrollbar[_ngcontent-%COMP%]{max-height:calc(100vh - 64px);min-height:calc(100vh - 64px)}"]}),t})()}];let Ct=(()=>{class t{}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(e){return new(e||t)},imports:[[n.h.forChild(Rt)],n.h]}),t})();var kt=r("PCNd");let Pt=(()=>{class t{}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(e){return new(e||t)},imports:[[Ct,kt.a]]}),t})()}}]);