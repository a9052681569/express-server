(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"Wcn/":function(t,e,i){"use strict";i.d(e,"c",function(){return n}),i.d(e,"b",function(){return s}),i.d(e,"a",function(){return r});var n=function(t){return t.cdek="\u0441\u0434\u044d\u043a",t.post="\u043f\u043e\u0447\u0442\u0430",t.courier="\u043a\u0443\u0440\u044c\u0435\u0440",t}({}),s=function(t){return t.check="\u043f\u0440\u043e\u0431\u043d\u044b\u0439",t.subscription="\u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430",t}({}),r=function(t){return t.twoThree="2-3",t.fourSix="4-6",t.sevenNine="7-9",t}({})},ufcJ:function(t,e,i){"use strict";i.d(e,"a",function(){return I});var n=i("HDdC"),s=i("quSY"),r=i("7Hc7"),c=i("jtHE"),o=i("7+OI"),a=i("LRne"),u=i("7HRe"),b=i("qgXg"),p=i("z6cu"),d=i("itXk"),h=i("XNiG"),j=i("bOdf"),f=i("zp1y"),l=i("1G5W"),O=i("IzEk"),S=i("lJxs"),w=i("/uUt"),$=i("UXun"),g=i("fXoL");function y(){return t=>new n.a(e=>{let i,n;const c=new s.a;return c.add(t.subscribe({complete:()=>{i&&e.next(n),e.complete()},error:t=>{e.error(t)},next:t=>{n=t,i||(i=r.a.schedule(()=>{e.next(n),i=void 0}),c.add(i))}})),c})}const z=new g.s("ComponentStore InitState");let I=(()=>{class t{constructor(t){this.destroySubject$=new c.a(1),this.destroy$=this.destroySubject$.asObservable(),this.stateSubject$=new c.a(1),this.isInitialized=!1,this.notInitializedErrorMessage=this.constructor.name+" has not been initialized yet. Please make sure it is initialized before updating/getting.",this.state$=this.select(t=>t),t&&this.initState(t)}ngOnDestroy(){this.stateSubject$.complete(),this.destroySubject$.next()}updater(t){return e=>{let i;const n=(Object(o.a)(e)?e:Object(a.a)(e)).pipe(Object(j.a)(t=>this.isInitialized?Object(u.a)([t],b.b).pipe(Object(f.a)(this.stateSubject$)):Object(p.a)(new Error(this.notInitializedErrorMessage))),Object(l.a)(this.destroy$)).subscribe({next:([e,i])=>{this.stateSubject$.next(t(i,e))},error:t=>{i=t,this.stateSubject$.error(t)}});if(i)throw i;return n}}initState(t){Object(u.a)([t],b.b).subscribe(t=>{this.isInitialized=!0,this.stateSubject$.next(t)})}setState(t){"function"!=typeof t?this.initState(t):this.updater(t)()}get(t){if(!this.isInitialized)throw new Error(this.notInitializedErrorMessage);let e;return this.stateSubject$.pipe(Object(O.a)(1)).subscribe(i=>{e=t?t(i):i}),e}select(...t){const{observables:e,projector:i,config:n}=function(t){const e=Array.from(t);let i,n={debounce:!1};const s=e.pop();return"function"!=typeof s?(n=Object.assign(Object.assign({},n),s),i=e.pop()):i=s,{observables:e,projector:i,config:n}}(t);let s;return s=0===e.length?this.stateSubject$.pipe(n.debounce?y():t=>t,Object(S.a)(i)):Object(d.b)(e).pipe(n.debounce?y():t=>t,Object(S.a)(t=>i(...t))),s.pipe(Object(w.a)(),Object($.a)({refCount:!0,bufferSize:1}),Object(l.a)(this.destroy$))}effect(t){const e=new h.a;return t(e).pipe(Object(l.a)(this.destroy$)).subscribe(),t=>(Object(o.a)(t)?t:Object(a.a)(t)).pipe(Object(l.a)(this.destroy$)).subscribe(t=>{e.next(t)})}}return t.\u0275fac=function(e){return new(e||t)(g.Wb(z,8))},t.\u0275prov=g.Ib({token:t,factory:t.\u0275fac}),t})()}}]);