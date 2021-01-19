!function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{dIFZ:function(t,i,r){"use strict";r.r(i),r.d(i,"BackofficeModule",function(){return N});var o,c=r("tyNb"),a=r("fXoL"),d=r("R0Ic"),u=Object(d.m)("menuToggleAnimation",[Object(d.l)(":enter",[Object(d.k)({"min-width":0,width:0,padding:0,margin:0,border:"none",overflow:"hidden"}),Object(d.e)(".25s cubic-bezier(0.0, 0.0, 0.2, 1)",Object(d.k)({"min-width":"*",width:"*",padding:"*",margin:"*",border:"*"}))]),Object(d.l)(":leave",[Object(d.k)({overflow:"hidden"}),Object(d.e)(".2s cubic-bezier(0.0, 0.0, 0.2, 1)",Object(d.k)({"min-width":0,width:0,padding:0,margin:0,border:"none"}))])]),l=Object(d.m)("opacityChangeAnimation",[Object(d.l)(":enter",[Object(d.k)({opacity:0}),Object(d.e)(".25s cubic-bezier(0.0, 0.0, 0.2, 1)",Object(d.k)({opacity:1}))]),Object(d.l)(":leave",[Object(d.e)(".2s cubic-bezier(0.0, 0.0, 0.2, 1)",Object(d.k)({opacity:0}))])]),m=r("/t3+"),s=((o=function e(){n(this,e)}).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=a.Gb({type:o,selectors:[["ntv-header"]],decls:3,vars:0,consts:[[1,"header"],["routerLink","/",1,"header__title"]],template:function(e,n){1&e&&(a.Sb(0,"mat-toolbar",0),a.Sb(1,"h3",1),a.zc(2,"natvorim.crm"),a.Rb(),a.Rb())},directives:[m.a,c.f],styles:["[_nghost-%COMP%]{display:block;width:100%;height:64px}.header[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center}.header__title[_ngcontent-%COMP%]{color:orange;font-size:1.5rem;cursor:pointer}.header__title[_ngcontent-%COMP%]:focus{outline:none}"],data:{animation:[l]}}),o),b=r("ofXK"),h=r("NFeN");function p(e,n){if(1&e&&(a.Sb(0,"div",8),a.zc(1),a.Rb()),2&e){var t=a.dc().$implicit;a.ic("@menuToggleAnimation",void 0),a.Bb(1),a.Ac(t.itemName)}}function f(e,n){if(1&e&&(a.Sb(0,"div",7),a.Sb(1,"mat-icon",4),a.zc(2),a.Rb(),a.xc(3,p,2,2,"div",5),a.Rb()),2&e){var t=n.$implicit,i=a.dc();a.ic("routerLink",t.route),a.Bb(2),a.Ac(t.iconName),a.Bb(1),a.ic("ngIf",i.isOpened)}}function g(e,n){1&e&&(a.Sb(0,"div",8),a.zc(1,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),a.Rb()),2&e&&a.ic("@menuToggleAnimation",void 0)}function v(e,n){1&e&&(a.Sb(0,"div",8),a.zc(1,"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c"),a.Rb()),2&e&&a.ic("@menuToggleAnimation",void 0)}var _,O,w,y,k=((_=function(){function t(e){n(this,t),this.router=e,this.navItems=[{route:"dashboard",iconName:"dashboard",itemName:"\u0417\u0430\u043a\u0430\u0437\u044b"},{route:"people",iconName:"people",itemName:"\u041b\u044e\u0434\u0438"},{route:"shipment-preparing",iconName:"accessible_forward",itemName:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438"},{route:"actual-shipment",iconName:"wheelchair_pickup",itemName:"\u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0430\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430"},{route:"add-order",iconName:"add",itemName:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043a\u0430\u0437\u0430"}]}var i,r,o;return i=t,(r=[{key:"toggleMenu",value:function(){this.isOpened=!this.isOpened}}])&&e(i.prototype,r),o&&e(i,o),t}()).\u0275fac=function(e){return new(e||_)(a.Mb(c.e))},_.\u0275cmp=a.Gb({type:_,selectors:[["ntv-menu"]],decls:12,vars:4,consts:[[1,"menu"],[1,"menu__section"],["class","menu__item","routerLinkActive","isActive",3,"routerLink",4,"ngFor","ngForOf"],["routerLink","/user","routerLinkActive","isActive",1,"menu__item"],[1,"menu__item-icon"],["class","menu__item-name",4,"ngIf"],[1,"menu__item",3,"click"],["routerLinkActive","isActive",1,"menu__item",3,"routerLink"],[1,"menu__item-name"]],template:function(e,n){1&e&&(a.Sb(0,"div",0),a.Sb(1,"div",1),a.xc(2,f,4,3,"div",2),a.Rb(),a.Sb(3,"div",1),a.Sb(4,"div",3),a.Sb(5,"mat-icon",4),a.zc(6,"settings"),a.Rb(),a.xc(7,g,2,1,"div",5),a.Rb(),a.Sb(8,"div",6),a.Zb("click",function(){return n.toggleMenu()}),a.Sb(9,"mat-icon",4),a.zc(10),a.Rb(),a.xc(11,v,2,1,"div",5),a.Rb(),a.Rb(),a.Rb()),2&e&&(a.Bb(2),a.ic("ngForOf",n.navItems),a.Bb(5),a.ic("ngIf",n.isOpened),a.Bb(3),a.Ac(n.isOpened?"chevron_left":"chevron_right"),a.Bb(1),a.ic("ngIf",n.isOpened))},directives:[b.j,c.f,c.g,h.a,b.k],styles:[".menu[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:space-between;font-size:1.5rem;color:rgba(0,0,0,.54)}.menu__item[_ngcontent-%COMP%]{min-width:40px;height:40px;border-radius:.25rem;display:grid;grid-template-columns:40px 1fr;align-items:center;cursor:pointer;outline:none}.menu__item-icon[_ngcontent-%COMP%]{justify-self:center;align-items:center}.menu__item-name[_ngcontent-%COMP%]{font-size:.875rem;min-width:200px;padding-left:1rem;white-space:nowrap}.menu__item--disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.34);cursor:default}.menu__section[_ngcontent-%COMP%]{display:grid;grid-gap:.5rem;padding:1rem}.isActive[_ngcontent-%COMP%]{background-color:rgba(84,110,122,.12)}"],data:{animation:[u]}}),_),j=[{path:"",component:(O=function e(){n(this,e)},O.\u0275fac=function(e){return new(e||O)},O.\u0275cmp=a.Gb({type:O,selectors:[["ntv-backoffice"]],decls:4,vars:0,consts:[[1,"header"],[1,"menu"],[1,"content"]],template:function(e,n){1&e&&(a.Nb(0,"ntv-header",0),a.Nb(1,"ntv-menu",1),a.Sb(2,"div",2),a.Nb(3,"router-outlet"),a.Rb())},directives:[s,k,c.i],styles:['[_nghost-%COMP%]{display:grid;grid-template-areas:"header header" "menu content";grid-template-rows:auto 1fr;grid-template-columns:auto 1fr;width:100%;height:100%}.header[_ngcontent-%COMP%]{grid-area:header}.menu[_ngcontent-%COMP%]{grid-area:menu}.content[_ngcontent-%COMP%]{grid-area:content}']}),O),children:[{path:"dashboard",loadChildren:function(){return r.e(9).then(r.bind(null,"zYRc")).then(function(e){return e.DashboardModule})}},{path:"people",loadChildren:function(){return Promise.all([r.e(0),r.e(11)]).then(r.bind(null,"5tjk")).then(function(e){return e.PeopleModule})}},{path:"events",loadChildren:function(){return r.e(10).then(r.bind(null,"jxuy")).then(function(e){return e.EventsModule})}},{path:"add-order",loadChildren:function(){return Promise.all([r.e(0),r.e(8)]).then(r.bind(null,"06u4")).then(function(e){return e.AddOrderModule})}},{path:"shipment-preparing",loadChildren:function(){return Promise.all([r.e(0),r.e(12)]).then(r.bind(null,"PBY9")).then(function(e){return e.ShipmentPreparingModule})}},{path:"actual-shipment",loadChildren:function(){return Promise.all([r.e(0),r.e(7)]).then(r.bind(null,"u77b")).then(function(e){return e.ActualShipmentModule})}},{path:"**",redirectTo:"dashboard"}]}],C=((w=function e(){n(this,e)}).\u0275mod=a.Kb({type:w}),w.\u0275inj=a.Jb({factory:function(e){return new(e||w)},imports:[[c.h.forChild(j)],c.h]}),w),M=r("PCNd"),P=r("5dmV"),N=((y=function e(){n(this,e)}).\u0275mod=a.Kb({type:y}),y.\u0275inj=a.Jb({factory:function(e){return new(e||y)},imports:[[C,M.a,P.a]]}),y)}}])}();