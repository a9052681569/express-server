(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"06u4":function(t,e,r){"use strict";r.r(e),r.d(e,"AddOrderModule",function(){return mt});var s=r("PCNd"),o=r("tyNb"),i=r("Kj3r"),n=r("hgo/"),a=r("Wcn/"),c=r("ufcJ"),d=r("z6cu"),b=r("eIep"),u=r("vkgz"),m=r("JIr8");const l={customer:{customer:{id:"NaN",name:"",contacts:{email:"",inst:"",phone:""},address:{city:"",address:""}},isValid:!1},subscriptionsOrders:{orders:[],isValid:!1,subscriptionOrderStructure:{theatres:[],kits:[]}},onceOrder:{order:{id:"NaN",personId:"NaN",sended:!1,shipmentDate:"",shipmentType:null,trackNumber:"",type:a.b.check,orderDate:"",orderStructure:{kits:[],theatres:[]},comment:""},isValid:!1},orderType:a.b.subscription,loadingState:null,resetForm:!1};var p=r("fXoL"),h=r("LRne"),f=r("AytR"),g=r("tk/3");let S=(()=>{class t{constructor(t){this.http=t,this.formDataInitState={onceOrder:l.onceOrder,orderType:l.orderType,subscriptionsOrders:l.subscriptionsOrders,customer:l.customer}}updateFormData(t){const e=localStorage.getItem("ntv-add-order-form-data");let r;return r=Object.assign(Object.assign({},e?JSON.parse(e):this.formDataInitState),t),localStorage.setItem("ntv-add-order-form-data",JSON.stringify(r)),Object(h.a)(r)}getFormData(){const t=localStorage.getItem("ntv-add-order-form-data"),e=t?JSON.parse(t):this.formDataInitState;return Object(h.a)(e)}resetFormData(){localStorage.removeItem("ntv-add-order-form-data")}getPersonsByName(t){return this.http.post(f.a.apiEndpoints.customersForAutocomplete,{name:t})}postOrders(t){return this.http.post(f.a.apiEndpoints.postOrders,t)}postCustomer(t){return this.http.post(f.a.apiEndpoints.postCustomer,t)}}return t.\u0275fac=function(e){return new(e||t)(p.Wb(g.a))},t.\u0275prov=p.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var O=r("dNgK");let v=(()=>{class t extends c.a{constructor(t,e){super(l),this.addOrderService=t,this.snack=e,this.saveForm=this.effect(t=>t.pipe(Object(b.a)(t=>(this.reqFormPending(),this.addOrderService.updateFormData(t).pipe(Object(u.a)(t=>{this.reqFormSuccess(t)}),Object(m.a)(t=>(this.reqFormError(),Object(d.a)(t)))))))),this.setFormData=this.effect(t=>t.pipe(Object(b.a)(()=>(this.reqFormPending(),this.addOrderService.getFormData().pipe(Object(u.a)(t=>{this.reqFormSuccess(t)}),Object(m.a)(t=>(this.reqFormError(),Object(d.a)(t)))))))),this.registerNewOrder=this.effect(t=>t.pipe(Object(b.a)(t=>{let e;return this.reqFormPending(),console.log("\u043d\u0430\u0447\u0438\u043d\u0430\u0435\u043c \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c"),t.orderType===a.b.subscription?e=t.subscriptionsOrders.orders:t.orderType===a.b.check&&(e=[t.onceOrder.order]),this.addOrderService.getPersonsByName(t.customer.customer.name).pipe(Object(b.a)(r=>r.length?(e.forEach(t=>{t.personId=r[0].id}),this.addOrderService.postOrders(e).pipe(Object(u.a)(()=>{this.resetState(),this.addOrderService.resetFormData(),this.snack.open("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 \u0437\u0430\u043a\u0430\u0437",void 0,{duration:3e3}),this.toInitialState()}))):this.addOrderService.postCustomer(t.customer.customer).pipe(Object(b.a)(([t])=>(e.forEach(e=>{e.personId=t.id}),this.addOrderService.postOrders(e).pipe(Object(u.a)(()=>{this.resetState(),this.addOrderService.resetFormData(),this.snack.open("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 \u0437\u0430\u043a\u0430\u0437 \u0438 \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",void 0,{duration:3e3}),this.toInitialState()})))))),Object(m.a)(t=>(this.reqFormError(),Object(d.a)(t))))}))),this.resetState=this.updater(t=>Object.assign(Object.assign({},l),{resetForm:!0})),this.toInitialState=this.updater(t=>Object.assign({},l)),this.reqFormPending=this.updater(t=>Object.assign(Object.assign({},t),{loadingState:n.a.loading})),this.reqFormSuccess=this.updater((t,e)=>Object.assign(Object.assign(Object.assign({},t),e),{loadingState:null})),this.reqFormError=this.updater(t=>Object.assign(Object.assign({},t),{loadingState:n.a.err}))}}return t.\u0275fac=function(e){return new(e||t)(p.Wb(S),p.Wb(O.a))},t.\u0275prov=p.Ib({token:t,factory:t.\u0275fac}),t})();var y=r("G1Gu"),F=r("Wp6s"),R=r("3Pt+"),C=r("XNiG"),j=r("IzEk"),_=r("1G5W"),x=r("TaCb"),N=r("kmnG"),$=r("qFsG"),k=r("/1cH"),I=r("ofXK"),M=r("bTqV"),B=r("NFeN"),w=r("FKr1");function z(t,e){if(1&t&&(p.Sb(0,"mat-option",15),p.zc(1),p.Rb()),2&t){const t=e.$implicit;p.ic("value",t),p.Bb(1),p.Bc(" ",t.name," ")}}function P(t,e){if(1&t&&(p.Sb(0,"mat-error"),p.zc(1),p.Rb()),2&t){const t=p.dc().ngIf;p.Bb(1),p.Ac(null==t.errors?null:t.errors.oneRequired)}}function T(t,e){if(1&t&&(p.Qb(0),p.xc(1,P,2,1,"mat-error",10),p.Pb()),2&t){const t=e.ngIf;p.Bb(1),p.ic("ngIf",null==t.errors?null:t.errors.oneRequired)}}let D=(()=>{class t{constructor(t,e,r,s){this.fb=t,this.store=e,this.addOrderService=r,this.hs=s,this.destroyer$$=new C.a,this.loadingStates=n.a,this.autocompleteOptions=[]}ngOnInit(){this.initForm(),this.loadingState$=this.store.select(t=>t.loadingState),this.setFormFromStore(),this.initFormSaver(),this.initAutocomplete(),this.initResetListener()}ngOnDestroy(){this.destroyer$$.next(),this.destroyer$$.complete()}setCustomerFromAutocomplete(t){this.addCustomerForm.setValue(t.option.value)}resetForm(){this.addCustomerForm.reset()}initForm(){this.addCustomerForm=this.fb.group({id:NaN,name:["",R.u.required],contacts:this.fb.group({email:["",R.u.email],inst:"",phone:[""]},{validators:[this.oneRequiredValidator]}),address:this.fb.group({city:["",R.u.required],address:["",R.u.required]})})}setFormFromStore(){this.store.select(t=>t.customer).pipe(Object(j.a)(1),Object(u.a)(t=>{this.addCustomerForm.setValue(t.customer)})).subscribe()}initFormSaver(){this.addCustomerForm.valueChanges.pipe(Object(_.a)(this.destroyer$$),Object(i.a)(500)).subscribe(t=>{this.store.saveForm({customer:{customer:t,isValid:this.addCustomerForm.valid}})})}initAutocomplete(){var t;null===(t=this.addCustomerForm.get("name"))||void 0===t||t.valueChanges.pipe(Object(_.a)(this.destroyer$$),Object(i.a)(300),Object(b.a)(t=>this.addOrderService.getPersonsByName(t))).subscribe(t=>{this.autocompleteOptions=t})}initResetListener(){this.store.select(t=>t.resetForm).pipe(Object(_.a)(this.destroyer$$),Object(u.a)(t=>{t&&this.resetForm()})).subscribe()}oneRequiredValidator(t){return Object.values(t.value).every(t=>0==!!t)?{oneRequired:"\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u043a\u043e\u043d\u0442\u0430\u043a\u0442"}:null}}return t.\u0275fac=function(e){return new(e||t)(p.Mb(R.e),p.Mb(v),p.Mb(S),p.Mb(x.a))},t.\u0275cmp=p.Gb({type:t,selectors:[["ntv-customer-form"]],decls:34,vars:4,consts:[[1,"form",3,"formGroup"],["appearance","standard"],["matInput","","formControlName","name",3,"matAutocomplete"],[3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["formGroupName","contacts",1,"form__group"],["matInput","","formControlName","email"],["matInput","","formControlName","inst"],["matInput","","formControlName","phone"],[4,"ngIf"],["formGroupName","address",1,"form__group"],["matInput","","formControlName","city"],["matInput","","formControlName","address"],["mat-icon-button","",3,"click"],[3,"value"]],template:function(t,e){if(1&t&&(p.Sb(0,"form",0),p.Sb(1,"mat-form-field",1),p.Sb(2,"mat-label"),p.zc(3,"\u0424\u0418\u041e*"),p.Rb(),p.Nb(4,"input",2),p.Sb(5,"mat-autocomplete",3,4),p.Zb("optionSelected",function(t){return e.setCustomerFromAutocomplete(t)}),p.xc(7,z,2,2,"mat-option",5),p.Rb(),p.Rb(),p.Sb(8,"div",6),p.Sb(9,"mat-form-field",1),p.Sb(10,"mat-label"),p.zc(11,"E-mail"),p.Rb(),p.Nb(12,"input",7),p.Rb(),p.Sb(13,"mat-form-field",1),p.Sb(14,"mat-label"),p.zc(15,"\u0418\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c"),p.Rb(),p.Nb(16,"input",8),p.Rb(),p.Sb(17,"mat-form-field",1),p.Sb(18,"mat-label"),p.zc(19,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),p.Rb(),p.Nb(20,"input",9),p.Rb(),p.Rb(),p.xc(21,T,2,1,"ng-container",10),p.Sb(22,"div",11),p.Sb(23,"mat-form-field",1),p.Sb(24,"mat-label"),p.zc(25,"\u0413\u043e\u0440\u043e\u0434*"),p.Rb(),p.Nb(26,"input",12),p.Rb(),p.Sb(27,"mat-form-field",1),p.Sb(28,"mat-label"),p.zc(29,"\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u0430\u0434\u0440\u0435\u0441*"),p.Rb(),p.Nb(30,"input",13),p.Rb(),p.Sb(31,"button",14),p.Zb("click",function(){return e.resetForm()}),p.Sb(32,"mat-icon"),p.zc(33,"refresh"),p.Rb(),p.Rb(),p.Rb(),p.Rb()),2&t){const t=p.nc(6);p.ic("formGroup",e.addCustomerForm),p.Bb(4),p.ic("matAutocomplete",t),p.Bb(3),p.ic("ngForOf",e.autocompleteOptions),p.Bb(14),p.ic("ngIf",e.hs.getControl(e.addCustomerForm.get("contacts")))}},directives:[R.v,R.o,R.h,N.c,N.f,$.b,R.c,k.c,R.n,R.g,k.a,I.j,R.i,I.k,M.a,B.a,w.n,N.b],styles:[".form[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:16px 0}.form__group[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:16px}.form__loading-state[_ngcontent-%COMP%]{justify-self:flex-end;align-self:flex-end}.form__refresh-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 40px;grid-gap:16px}"]}),t})();var q=r("wZkO"),G=r("0IaG"),V=r("3tz+");let E=(()=>{class t{constructor(t,e,r){this.dialogRef=t,this.orderStructure=e,this.fb=r}ngOnInit(){this.orderStructureForm=this.fb.group({kits:this.fb.array([]),theatres:this.fb.array([])})}setStructure(){this.dialogRef.close(this.orderStructureForm.value)}}return t.\u0275fac=function(e){return new(e||t)(p.Mb(G.f),p.Mb(G.a),p.Mb(R.e))},t.\u0275cmp=p.Gb({type:t,selectors:[["ntv-add-order-structure-dialog"]],decls:5,vars:3,consts:[[1,"scrollbar"],[1,"content"],[3,"orderStructureGroup","orderStructure"],["mat-raised-button","",3,"disabled","click"]],template:function(t,e){1&t&&(p.Sb(0,"ng-scrollbar",0),p.Sb(1,"div",1),p.Nb(2,"ntv-order-structure",2),p.Sb(3,"button",3),p.Zb("click",function(){return e.setStructure()}),p.zc(4," \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c "),p.Rb(),p.Rb(),p.Rb()),2&t&&(p.Bb(2),p.ic("orderStructureGroup",e.orderStructureForm)("orderStructure",e.orderStructure),p.Bb(1),p.ic("disabled",e.orderStructureForm.invalid))},directives:[y.a,V.a,M.a],styles:["[_nghost-%COMP%]{display:block;min-width:500px;margin:-24px}.scrollbar[_ngcontent-%COMP%]{max-height:70vh}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:16px;padding:24px}"]}),t})();var A=r("Qw0g"),L=r("d3UM"),J=r("e1Hi");function Z(t,e){1&t&&(p.Sb(0,"h4"),p.zc(1,"\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c \u0437\u0430\u043a\u0430\u0437\u044b"),p.Rb())}function K(t,e){if(1&t&&(p.Sb(0,"mat-option",8),p.zc(1),p.Rb()),2&t){const t=e.$implicit;p.ic("value",t.date),p.Bb(1),p.Bc(" ",t.name," ")}}function W(t,e){if(1&t&&(p.Sb(0,"mat-option",8),p.zc(1),p.Rb()),2&t){const t=e.$implicit;p.ic("value",t),p.Bb(1),p.Bc(" ",t," ")}}function Q(t,e){if(1&t){const t=p.Tb();p.Sb(0,"mat-card",2),p.Sb(1,"mat-form-field",3),p.Sb(2,"mat-label"),p.zc(3,"\u041c\u0435\u0441\u044f\u0446"),p.Rb(),p.Sb(4,"mat-select",4),p.xc(5,K,2,2,"mat-option",5),p.Rb(),p.Rb(),p.Sb(6,"mat-form-field",3),p.Sb(7,"mat-label"),p.zc(8,"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430"),p.Rb(),p.Sb(9,"mat-select",4),p.xc(10,W,2,2,"mat-option",5),p.Rb(),p.Rb(),p.Sb(11,"ntv-overlined",6),p.Zb("click",function(){p.pc(t);const r=e.$implicit,s=e.index;return p.dc().showOrderStructureDialog(r.value,s)}),p.Rb(),p.Sb(12,"mat-form-field",3),p.Sb(13,"mat-label"),p.zc(14,"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"),p.Rb(),p.Nb(15,"input",7),p.Rb(),p.Rb()}if(2&t){const t=e.$implicit,r=p.dc();p.Bb(4),p.ic("formControl",r.hs.getControl(t.get("shipmentDate"))),p.Bb(1),p.ic("ngForOf",r.months),p.Bb(4),p.ic("formControl",r.hs.getControl(t.get("shipmentType"))),p.Bb(1),p.ic("ngForOf",r.shipmentTypes),p.Bb(1),p.ic("overline",t.value.standart?"\u043d\u0430\u0431\u043e\u0440\u044b":"\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e"),p.Bb(4),p.ic("formControl",r.hs.getControl(t.get("comment")))}}let H=(()=>{class t{constructor(t,e,r,s){this.fb=t,this.store=e,this.dialog=r,this.hs=s,this.orders=[],this.months=A.a,this.shipmentTypes=Object.values(a.c),this.destroyer$$=new C.a}ngOnInit(){this.ordersControls=this.fb.array([]),this.initFormSetter(),this.initFormSaver(),this.initResetListener()}ngOnDestroy(){this.destroyer$$.next(),this.destroyer$$.complete()}showOrderStructureDialog(t,e){this.dialog.open(E,{data:t.orderStructure}).afterClosed().subscribe(r=>{if(r){const s=this.isOrderStructuresEqual(r,this.subscriptionsOrdersSavedState.subscriptionOrderStructure),o=this.fb.group(Object.assign(Object.assign({},t),{orderStructure:r,standart:s}));this.ordersControls.setControl(e,o)}})}initFormSaver(){this.ordersControls.valueChanges.pipe(Object(_.a)(this.destroyer$$),Object(i.a)(500)).subscribe(t=>{let e=!1;t.length&&(e=t.every(t=>t.shipmentDate&&t.shipmentType&&(t.orderStructure.kits.length||t.orderStructure.theatres.length))),this.store.saveForm({subscriptionsOrders:{orders:t,isValid:e,subscriptionOrderStructure:this.subscriptionsOrdersSavedState.subscriptionOrderStructure}})})}initFormSetter(){this.store.select(t=>t.subscriptionsOrders).pipe(Object(_.a)(this.destroyer$$),Object(u.a)(t=>{this.subscriptionsOrdersSavedState=t,t.orders.length&&!this.isOrdersEqual(t.orders,this.ordersControls.value)&&(this.ordersControls.clear(),t.orders.forEach(t=>{this.addOrder(t)}))})).subscribe()}initResetListener(){this.store.select(t=>t.resetForm).pipe(Object(_.a)(this.destroyer$$),Object(u.a)(t=>{t&&this.ordersControls.clear()})).subscribe()}isOrdersEqual(t,e){if(t.length!==e.length)return!1;const r=this.getDeepValues(t),s=this.getDeepValues(e);return r.length===s.length&&r.every(t=>s.includes(t))}getDeepValues(t){return t.reduce((t,e)=>("object"!=typeof e||null===e?t.push(e):Array.isArray(e)?t.push(...this.getDeepValues(e)):t.push(...this.getDeepValues(Object.values(e))),t),[])}addOrder(t){const e=this.isOrderStructuresEqual(t.orderStructure,this.subscriptionsOrdersSavedState.subscriptionOrderStructure);this.ordersControls.push(this.fb.group(Object.assign(Object.assign({},t),{standart:e})))}isOrderStructuresEqual(t,e){return t.kits.length===e.kits.length&&t.theatres.length===e.theatres.length&&!!t.kits.every((r,s)=>r.age===e.kits[s].age&&r.count===t.kits[s].count)&&!!t.theatres.every((r,s)=>r.age===e.theatres[s].age&&r.count===t.theatres[s].count)}}return t.\u0275fac=function(e){return new(e||t)(p.Mb(R.e),p.Mb(v),p.Mb(G.b),p.Mb(x.a))},t.\u0275cmp=p.Gb({type:t,selectors:[["ntv-subscription-orders-form"]],inputs:{orders:"orders"},decls:2,vars:2,consts:[[4,"ngIf"],["class","array-item",4,"ngFor","ngForOf"],[1,"array-item"],["appearance","standard"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["value","\u041d\u0430\u0436\u043c\u0438",1,"clickable",3,"overline","click"],["matInput","",3,"formControl"],[3,"value"]],template:function(t,e){1&t&&(p.xc(0,Z,2,0,"h4",0),p.xc(1,Q,16,6,"mat-card",1)),2&t&&(p.ic("ngIf",e.ordersControls.length),p.Bb(1),p.ic("ngForOf",e.ordersControls.controls))},directives:[I.k,I.j,F.a,N.c,N.f,L.a,R.n,R.f,J.a,$.b,R.c,w.n],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:16px}.array-item[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);grid-gap:16px}"]}),t})();function X(t,e){if(1&t&&(p.Sb(0,"mat-option",6),p.zc(1),p.Rb()),2&t){const t=e.$implicit;p.ic("value",t.date),p.Bb(1),p.Bc(" ",t.name," ")}}function U(t,e){if(1&t&&(p.Sb(0,"mat-option",6),p.zc(1),p.Rb()),2&t){const t=e.$implicit;p.ic("value",t),p.Bb(1),p.Bc(" ",t," ")}}let Y=(()=>{class t{constructor(t,e,r){this.fb=t,this.store=e,this.dialog=r,this.shipmentTypes=Object.values(a.c),this.months=A.a,this.destroyer$$=new C.a}ngOnInit(){this.addSubscriptionForm=this.fb.group({months:["",R.u.required],shipmentType:["",R.u.required],orderStructure:l.onceOrder.order.orderStructure}),this.initFormSetter(),this.initFormSaver(),this.initResetListener()}ngOnDestroy(){this.destroyer$$.next(),this.destroyer$$.complete()}initFormSetter(){this.store.select(t=>t.subscriptionsOrders).pipe(Object(j.a)(1),Object(u.a)(t=>{const e=t.orders;if(e.length){const t={months:e.map(t=>t.shipmentDate),shipmentType:e[0].shipmentType,orderStructure:e[0].orderStructure||l.onceOrder.order.orderStructure};this.addSubscriptionForm.setValue(t)}})).subscribe()}initFormSaver(){this.addSubscriptionForm.valueChanges.pipe(Object(_.a)(this.destroyer$$),Object(i.a)(500)).subscribe(t=>{if(Array.isArray(t.months)){let e=!0;e=!(!t.orderStructure.kits.length&&!t.orderStructure.theatres.length)&&this.addSubscriptionForm.valid;const r=t.months.map(e=>({id:l.onceOrder.order.id,personId:l.onceOrder.order.personId,comment:l.onceOrder.order.comment,sended:l.onceOrder.order.sended,shipmentDate:e,shipmentType:t.shipmentType,trackNumber:l.onceOrder.order.trackNumber,type:a.b.subscription,orderStructure:t.orderStructure,orderDate:(new Date).toISOString()}));this.store.saveForm({subscriptionsOrders:{orders:r,isValid:e,subscriptionOrderStructure:t.orderStructure}})}})}initResetListener(){this.store.select(t=>t.resetForm).pipe(Object(_.a)(this.destroyer$$),Object(u.a)(t=>{t&&this.addSubscriptionForm.setValue({months:"",shipmentType:"",orderStructure:l.onceOrder.order.orderStructure})})).subscribe()}showOrderStructureSelectionDialog(){this.store.select(t=>t.subscriptionsOrders).pipe(Object(j.a)(1)).subscribe(t=>{this.dialog.open(E,{data:t.subscriptionOrderStructure}).afterClosed().subscribe(t=>{t&&this.addSubscriptionForm.patchValue({orderStructure:t})})})}}return t.\u0275fac=function(e){return new(e||t)(p.Mb(R.e),p.Mb(v),p.Mb(G.b))},t.\u0275cmp=p.Gb({type:t,selectors:[["ntv-subscription-form"]],decls:16,vars:3,consts:[[1,"form",3,"formGroup"],["appearance","standard"],["formControlName","months","multiple",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","shipmentType"],["mat-flat-button","",1,"form__submit",3,"click"],[3,"value"]],template:function(t,e){1&t&&(p.Sb(0,"h4"),p.zc(1,"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u0443\u0435\u043c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443"),p.Rb(),p.Sb(2,"form",0),p.Sb(3,"mat-form-field",1),p.Sb(4,"mat-label"),p.zc(5,"\u041c\u0435\u0441\u044f\u0446\u044b"),p.Rb(),p.Sb(6,"mat-select",2),p.xc(7,X,2,2,"mat-option",3),p.Rb(),p.Rb(),p.Sb(8,"mat-form-field",1),p.Sb(9,"mat-label"),p.zc(10,"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430"),p.Rb(),p.Sb(11,"mat-select",4),p.xc(12,U,2,2,"mat-option",3),p.Rb(),p.Rb(),p.Sb(13,"button",5),p.Zb("click",function(){return e.showOrderStructureSelectionDialog()}),p.zc(14,"\u0421\u043e\u0441\u0442\u0430\u0432 \u0437\u0430\u043a\u0430\u0437\u0430"),p.Rb(),p.Rb(),p.Nb(15,"ntv-subscription-orders-form")),2&t&&(p.Bb(2),p.ic("formGroup",e.addSubscriptionForm),p.Bb(5),p.ic("ngForOf",e.months),p.Bb(5),p.ic("ngForOf",e.shipmentTypes))},directives:[R.v,R.o,R.h,N.c,N.f,L.a,R.n,R.g,I.j,M.a,H,w.n],styles:[".form[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:16px;box-sizing:border-box;margin:8px 0}"]}),t})();var tt=r("f0Cb");function et(t,e){if(1&t&&(p.Sb(0,"mat-option",11),p.zc(1),p.Rb()),2&t){const t=e.$implicit;p.ic("value",t.date),p.Bb(1),p.Bc(" ",t.name," ")}}function rt(t,e){if(1&t&&(p.Sb(0,"mat-option",11),p.zc(1),p.Rb()),2&t){const t=e.$implicit;p.ic("value",t),p.Bb(1),p.Bc(" ",t," ")}}let st=(()=>{class t{constructor(t,e){this.fb=t,this.store=e,this.months=A.a,this.shipmentTypes=Object.values(a.c),this.destroyer$$=new C.a}get orderStructure(){return this.addOrderForm.get("orderStructure")}ngOnInit(){this.addOrderForm=this.fb.group({id:l.onceOrder.order.id,personId:l.onceOrder.order.personId,comment:l.onceOrder.order.comment,sended:l.onceOrder.order.sended,shipmentDate:["",R.u.required],shipmentType:["",R.u.required],trackNumber:l.onceOrder.order.trackNumber,type:l.onceOrder.order.type,orderStructure:this.fb.group({kits:this.fb.array([]),theatres:this.fb.array([])})}),this.initFormSetter(),this.initFormSaver(),this.initResetListener()}ngOnDestroy(){this.destroyer$$.next(),this.destroyer$$.complete()}initFormSaver(){this.addOrderForm.valueChanges.pipe(Object(_.a)(this.destroyer$$),Object(i.a)(500)).subscribe(t=>{this.store.saveForm({onceOrder:{order:t,isValid:this.addOrderForm.valid}})})}initFormSetter(){this.store.select(t=>t.onceOrder).pipe(Object(j.a)(1),Object(u.a)(t=>{this.order=t.order;const e=Object.assign({},t.order);delete e.orderStructure,e.type=a.b.check,this.addOrderForm.patchValue(e)})).subscribe()}initResetListener(){this.store.select(t=>t.resetForm).pipe(Object(_.a)(this.destroyer$$),Object(u.a)(t=>{t&&this.addOrderForm.reset()})).subscribe()}}return t.\u0275fac=function(e){return new(e||t)(p.Mb(R.e),p.Mb(v))},t.\u0275cmp=p.Gb({type:t,selectors:[["ntv-once-form"]],decls:27,vars:6,consts:[[1,"form",3,"formGroup"],[1,"form__comment"],["appearance","standard"],["matInput","","formControlName","comment"],[1,"form__block"],[1,"select-card"],["formControlName","shipmentDate"],[3,"value",4,"ngFor","ngForOf"],[3,"vertical"],["formControlName","shipmentType"],[3,"orderStructure","orderStructureGroup"],[3,"value"]],template:function(t,e){1&t&&(p.Sb(0,"form",0),p.Sb(1,"h4"),p.zc(2,"\u041e \u0437\u0430\u043a\u0430\u0437\u0435"),p.Rb(),p.Sb(3,"mat-card",1),p.Sb(4,"mat-form-field",2),p.Sb(5,"mat-label"),p.zc(6,"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"),p.Rb(),p.Nb(7,"textarea",3),p.Rb(),p.Rb(),p.Sb(8,"h4"),p.zc(9,"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430"),p.Rb(),p.Sb(10,"div",4),p.Sb(11,"mat-card",5),p.Sb(12,"mat-form-field",2),p.Sb(13,"mat-label"),p.zc(14,"\u0414\u0430\u0442\u0430*"),p.Rb(),p.Sb(15,"mat-select",6),p.xc(16,et,2,2,"mat-option",7),p.Rb(),p.Rb(),p.Rb(),p.Nb(17,"mat-divider",8),p.Sb(18,"mat-card",5),p.Sb(19,"mat-form-field",2),p.Sb(20,"mat-label"),p.zc(21,"\u0422\u0438\u043f*"),p.Rb(),p.Sb(22,"mat-select",9),p.xc(23,rt,2,2,"mat-option",7),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Sb(24,"h4"),p.zc(25,"\u0427\u0442\u043e \u0432\u0435\u0437\u0435\u043c"),p.Rb(),p.Nb(26,"ntv-order-structure",10),p.Rb()),2&t&&(p.ic("formGroup",e.addOrderForm),p.Bb(16),p.ic("ngForOf",e.months),p.Bb(1),p.ic("vertical",!0),p.Bb(6),p.ic("ngForOf",e.shipmentTypes),p.Bb(3),p.ic("orderStructure",e.order.orderStructure)("orderStructureGroup",e.orderStructure))},directives:[R.v,R.o,R.h,F.a,N.c,N.f,$.b,R.c,R.n,R.g,L.a,I.j,tt.a,V.a,w.n],styles:["[_nghost-%COMP%]{display:block;min-width:500px}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:16px;height:100%;box-sizing:border-box}.form__block[_ngcontent-%COMP%]{grid-template-columns:1fr 1px 1fr;grid-gap:16px}.form__block[_ngcontent-%COMP%], .form__comment[_ngcontent-%COMP%]{display:grid;width:100%}.scrollbar[_ngcontent-%COMP%]{max-height:50vh}.select-card[_ngcontent-%COMP%]{display:grid}"]}),t})(),ot=(()=>{class t{constructor(t){this.store=t,this.orderTypes=a.b}setCurrentOrderType(t){const e=Object.values(a.b).reduce((e,r)=>(r===t.tab.textLabel.toLowerCase()&&(e=r),e),a.b.subscription);this.store.saveForm({orderType:e})}}return t.\u0275fac=function(e){return new(e||t)(p.Mb(v))},t.\u0275cmp=p.Gb({type:t,selectors:[["ntv-order-form"]],decls:7,vars:6,consts:[["mat-stretch-tabs","","dynamicHeight","",3,"selectedTabChange"],[3,"label"]],template:function(t,e){1&t&&(p.Sb(0,"mat-tab-group",0),p.Zb("selectedTabChange",function(t){return e.setCurrentOrderType(t)}),p.Sb(1,"mat-tab",1),p.ec(2,"titlecase"),p.Nb(3,"ntv-subscription-form"),p.Rb(),p.Sb(4,"mat-tab",1),p.ec(5,"titlecase"),p.Nb(6,"ntv-once-form"),p.Rb(),p.Rb()),2&t&&(p.Bb(1),p.ic("label",p.fc(2,2,e.orderTypes.subscription)),p.Bb(3),p.ic("label",p.fc(5,4,e.orderTypes.check)))},directives:[q.b,q.a,Y,st],pipes:[I.r],styles:["[_nghost-%COMP%]{display:block}"]}),t})();var it=r("4Kj8");function nt(t,e){1&t&&(p.Sb(0,"span",8),p.zc(1," \u0421\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c... "),p.Nb(2,"ntv-spinner",9),p.Rb()),2&t&&(p.Bb(2),p.ic("diameter",16))}function at(t,e){1&t&&(p.Sb(0,"span",8),p.zc(1," \u041e\u0448\u0438\u0431\u043a\u0430, \u043d\u0430\u0436\u043c\u0438 \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0441\u043d\u043e\u0432\u0430 "),p.Sb(2,"mat-icon",10),p.zc(3,"error"),p.Rb(),p.Rb())}function ct(t,e){1&t&&(p.Qb(0),p.zc(1," \u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437 "),p.Pb())}function dt(t,e){if(1&t){const t=p.Tb();p.Qb(0),p.Sb(1,"button",5),p.Zb("click",function(){p.pc(t);const r=e.ngIf;return p.dc().registerNewOrder(r)}),p.ec(2,"async"),p.xc(3,nt,3,1,"span",6),p.xc(4,at,4,0,"span",6),p.xc(5,ct,2,0,"ng-container",7),p.Rb(),p.Pb()}if(2&t){const t=p.dc();p.Bb(1),p.ic("ngSwitch",p.fc(2,4,t.loadingState$))("disabled",!t.readyToSend),p.Bb(2),p.ic("ngSwitchCase",t.loadingStates.loading),p.Bb(1),p.ic("ngSwitchCase",t.loadingStates.err)}}const bt=[{path:"",component:(()=>{class t{constructor(t){this.store=t,this.loadingStates=n.a}ngOnInit(){this.store.setFormData(),this.loadingState$=this.store.select(t=>t.loadingState).pipe(Object(i.a)(200)),this.state$=this.store.select(t=>(this.readyToSend=t.orderType===a.b.subscription?t.customer.isValid&&t.subscriptionsOrders.isValid:t.customer.isValid&&t.onceOrder.isValid,t))}registerNewOrder(t){this.store.registerNewOrder(t)}}return t.\u0275fac=function(e){return new(e||t)(p.Mb(v))},t.\u0275cmp=p.Gb({type:t,selectors:[["ntv-add-order"]],features:[p.Ab([v])],decls:13,vars:3,consts:[[1,"scrollbar"],[1,"add-order"],[1,"add-order__forms-container"],[1,"add-order__form"],[4,"ngIf"],["mat-raised-button","",1,"add-order__submit-button",3,"ngSwitch","disabled","click"],["class","submit-button__content",4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"submit-button__content"],[1,"submit-button__spinner",3,"diameter"],[1,"submit-button__error-icon"]],template:function(t,e){1&t&&(p.Sb(0,"ng-scrollbar",0),p.Sb(1,"div",1),p.Sb(2,"div",2),p.Sb(3,"mat-card",3),p.Sb(4,"mat-card-title"),p.zc(5,"\u041a\u043b\u0438\u0435\u043d\u0442"),p.Rb(),p.Nb(6,"ntv-customer-form"),p.Rb(),p.Sb(7,"mat-card",3),p.Sb(8,"mat-card-title"),p.zc(9,"\u0417\u0430\u043a\u0430\u0437"),p.Rb(),p.Nb(10,"ntv-order-form"),p.Rb(),p.Rb(),p.xc(11,dt,6,6,"ng-container",4),p.ec(12,"async"),p.Rb(),p.Rb()),2&t&&(p.Bb(11),p.ic("ngIf",p.fc(12,1,e.state$)))},directives:[y.a,F.a,F.c,D,ot,I.k,M.a,I.m,I.n,I.o,it.a,B.a],pipes:[I.b],styles:["[_nghost-%COMP%]{display:block;width:100%}.add-order[_ngcontent-%COMP%]{padding:24px}.add-order__forms-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(500px,1fr));gap:16px}.add-order__submit-button[_ngcontent-%COMP%]{margin-top:16px}.add-order__submit-button__content[_ngcontent-%COMP%]{display:flex;align-items:center}.add-order__submit-button__spinner[_ngcontent-%COMP%]{margin-top:0;margin-left:8px}.add-order__submit-button__error-icon[_ngcontent-%COMP%]{margin-left:8px}.scrollbar[_ngcontent-%COMP%]{max-height:calc(100vh - 64px);min-height:calc(100vh - 64px)}"]}),t})()}];let ut=(()=>{class t{}return t.\u0275mod=p.Kb({type:t}),t.\u0275inj=p.Jb({factory:function(e){return new(e||t)},imports:[[o.h.forChild(bt)],o.h]}),t})(),mt=(()=>{class t{}return t.\u0275mod=p.Kb({type:t}),t.\u0275inj=p.Jb({factory:function(e){return new(e||t)},imports:[[ut,s.a]]}),t})()}}]);