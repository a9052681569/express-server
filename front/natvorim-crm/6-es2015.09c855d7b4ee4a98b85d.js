(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Mj1F:function(e,n,t){"use strict";t.d(n,"a",function(){return r}),t.d(n,"b",function(){return o});var i=t("R0Ic");const r=Object(i.m)("menuToggleAnimation",[Object(i.l)(":enter",[Object(i.k)({"min-width":0,width:0,padding:0,margin:0,border:"none",overflow:"hidden"}),Object(i.e)(".25s cubic-bezier(0.0, 0.0, 0.2, 1)",Object(i.k)({"min-width":"*",width:"*",padding:"*",margin:"*",border:"*"}))]),Object(i.l)(":leave",[Object(i.k)({overflow:"hidden"}),Object(i.e)(".2s cubic-bezier(0.0, 0.0, 0.2, 1)",Object(i.k)({"min-width":0,width:0,padding:0,margin:0,border:"none"}))])]),o=Object(i.m)("opacityChangeAnimation",[Object(i.l)(":enter",[Object(i.k)({opacity:0}),Object(i.e)(".25s cubic-bezier(0.0, 0.0, 0.2, 1)",Object(i.k)({opacity:1}))]),Object(i.l)(":leave",[Object(i.e)(".2s cubic-bezier(0.0, 0.0, 0.2, 1)",Object(i.k)({opacity:0}))])])},dIFZ:function(e,n,t){"use strict";t.r(n),t.d(n,"BackofficeModule",function(){return v});var i=t("tyNb"),r=t("fXoL"),o=t("Mj1F"),c=t("/t3+");let a=(()=>{class e{constructor(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r.Gb({type:e,selectors:[["ntv-header"]],decls:3,vars:0,consts:[[1,"header"],["routerLink","/",1,"header__title"]],template:function(e,n){1&e&&(r.Sb(0,"mat-toolbar",0),r.Sb(1,"h3",1),r.zc(2,"Unicorns Board"),r.Rb(),r.Rb())},directives:[c.a,i.f],styles:["[_nghost-%COMP%]{display:block;width:100%;height:64px}.header[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center}.header__title[_ngcontent-%COMP%]{color:orange;font-size:1.5rem;cursor:pointer}.header__title[_ngcontent-%COMP%]:focus{outline:none}"],data:{animation:[o.b]}}),e})();var d=t("ofXK"),s=t("NFeN");function m(e,n){if(1&e&&(r.Sb(0,"div",8),r.zc(1),r.Rb()),2&e){const e=r.dc().$implicit;r.ic("@menuToggleAnimation",void 0),r.Bb(1),r.Ac(e.itemName)}}function u(e,n){if(1&e&&(r.Sb(0,"div",7),r.Sb(1,"mat-icon",4),r.zc(2),r.Rb(),r.xc(3,m,2,2,"div",5),r.Rb()),2&e){const e=n.$implicit,t=r.dc();r.ic("routerLink",e.route),r.Bb(2),r.Ac(e.iconName),r.Bb(1),r.ic("ngIf",t.isOpened)}}function l(e,n){1&e&&(r.Sb(0,"div",8),r.zc(1,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),r.Rb()),2&e&&r.ic("@menuToggleAnimation",void 0)}function b(e,n){1&e&&(r.Sb(0,"div",8),r.zc(1,"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c"),r.Rb()),2&e&&r.ic("@menuToggleAnimation",void 0)}let p=(()=>{class e{constructor(e){this.router=e,this.navItems=[{route:"dashboard",iconName:"dashboard",itemName:"\u0417\u0430\u043a\u0430\u0437\u044b"},{route:"people",iconName:"people",itemName:"\u041b\u044e\u0434\u0438"},{route:"shipment-preparing",iconName:"accessible_forward",itemName:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438"}]}toggleMenu(){this.isOpened=!this.isOpened}}return e.\u0275fac=function(n){return new(n||e)(r.Mb(i.e))},e.\u0275cmp=r.Gb({type:e,selectors:[["ntv-menu"]],decls:12,vars:4,consts:[[1,"menu"],[1,"menu__section"],["class","menu__item","routerLinkActive","isActive",3,"routerLink",4,"ngFor","ngForOf"],["routerLink","/user","routerLinkActive","isActive",1,"menu__item"],[1,"menu__item-icon"],["class","menu__item-name",4,"ngIf"],[1,"menu__item",3,"click"],["routerLinkActive","isActive",1,"menu__item",3,"routerLink"],[1,"menu__item-name"]],template:function(e,n){1&e&&(r.Sb(0,"div",0),r.Sb(1,"div",1),r.xc(2,u,4,3,"div",2),r.Rb(),r.Sb(3,"div",1),r.Sb(4,"div",3),r.Sb(5,"mat-icon",4),r.zc(6,"settings"),r.Rb(),r.xc(7,l,2,1,"div",5),r.Rb(),r.Sb(8,"div",6),r.Zb("click",function(){return n.toggleMenu()}),r.Sb(9,"mat-icon",4),r.zc(10),r.Rb(),r.xc(11,b,2,1,"div",5),r.Rb(),r.Rb(),r.Rb()),2&e&&(r.Bb(2),r.ic("ngForOf",n.navItems),r.Bb(5),r.ic("ngIf",n.isOpened),r.Bb(3),r.Ac(n.isOpened?"chevron_left":"chevron_right"),r.Bb(1),r.ic("ngIf",n.isOpened))},directives:[d.j,i.f,i.g,s.a,d.k],styles:[".menu[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:space-between;font-size:1.5rem;color:rgba(0,0,0,.54)}.menu__item[_ngcontent-%COMP%]{min-width:40px;height:40px;border-radius:.25rem;display:grid;grid-template-columns:40px 1fr;align-items:center;cursor:pointer;outline:none}.menu__item-icon[_ngcontent-%COMP%]{justify-self:center;align-items:center}.menu__item-name[_ngcontent-%COMP%]{font-size:.875rem;min-width:200px;padding-left:1rem;white-space:nowrap}.menu__item--disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.34);cursor:default}.menu__section[_ngcontent-%COMP%]{display:grid;grid-gap:.5rem;padding:1rem}.isActive[_ngcontent-%COMP%]{background-color:rgba(84,110,122,.12)}"],data:{animation:[o.a]}}),e})();const h=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r.Gb({type:e,selectors:[["ntv-backoffice"]],decls:4,vars:0,consts:[[1,"header"],[1,"menu"],[1,"content"]],template:function(e,n){1&e&&(r.Nb(0,"ntv-header",0),r.Nb(1,"ntv-menu",1),r.Sb(2,"div",2),r.Nb(3,"router-outlet"),r.Rb())},directives:[a,p,i.i],styles:['[_nghost-%COMP%]{display:grid;grid-template-areas:"header header" "menu content";grid-template-rows:auto 1fr;grid-template-columns:auto 1fr;width:100%;height:100%}.header[_ngcontent-%COMP%]{grid-area:header}.menu[_ngcontent-%COMP%]{grid-area:menu}.content[_ngcontent-%COMP%]{grid-area:content}']}),e})(),children:[{path:"dashboard",loadChildren:()=>t.e(7).then(t.bind(null,"zYRc")).then(e=>e.DashboardModule)},{path:"people",loadChildren:()=>Promise.all([t.e(1),t.e(9)]).then(t.bind(null,"5tjk")).then(e=>e.PeopleModule)},{path:"events",loadChildren:()=>t.e(8).then(t.bind(null,"jxuy")).then(e=>e.EventsModule)},{path:"shipment-preparing",loadChildren:()=>Promise.all([t.e(1),t.e(10)]).then(t.bind(null,"PBY9")).then(e=>e.ShipmentPreparingModule)},{path:"**",redirectTo:"dashboard"}]}];let g=(()=>{class e{}return e.\u0275mod=r.Kb({type:e}),e.\u0275inj=r.Jb({factory:function(n){return new(n||e)},imports:[[i.h.forChild(h)],i.h]}),e})();var f=t("PCNd"),_=t("5dmV");let v=(()=>{class e{}return e.\u0275mod=r.Kb({type:e}),e.\u0275inj=r.Jb({factory:function(n){return new(n||e)},imports:[[g,f.a,_.a]]}),e})()}}]);