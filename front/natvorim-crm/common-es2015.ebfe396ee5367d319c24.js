(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{ufcJ:function(t,e,i){"use strict";i.d(e,"a",function(){return I});var s=i("HDdC"),n=i("quSY"),r=i("7Hc7"),c=i("jtHE"),o=i("7+OI"),a=i("LRne"),b=i("7HRe"),u=i("qgXg"),p=i("z6cu"),h=i("itXk"),j=i("XNiG"),d=i("bOdf"),l=i("zp1y"),f=i("1G5W"),O=i("IzEk"),S=i("lJxs"),w=i("/uUt"),$=i("UXun"),g=i("fXoL");function y(){return t=>new s.a(e=>{let i,s;const c=new n.a;return c.add(t.subscribe({complete:()=>{i&&e.next(s),e.complete()},error:t=>{e.error(t)},next:t=>{s=t,i||(i=r.a.schedule(()=>{e.next(s),i=void 0}),c.add(i))}})),c})}const z=new g.s("ComponentStore InitState");let I=(()=>{class t{constructor(t){this.destroySubject$=new c.a(1),this.destroy$=this.destroySubject$.asObservable(),this.stateSubject$=new c.a(1),this.isInitialized=!1,this.notInitializedErrorMessage=this.constructor.name+" has not been initialized yet. Please make sure it is initialized before updating/getting.",this.state$=this.select(t=>t),t&&this.initState(t)}ngOnDestroy(){this.stateSubject$.complete(),this.destroySubject$.next()}updater(t){return e=>{let i;const s=(Object(o.a)(e)?e:Object(a.a)(e)).pipe(Object(d.a)(t=>this.isInitialized?Object(b.a)([t],u.b).pipe(Object(l.a)(this.stateSubject$)):Object(p.a)(new Error(this.notInitializedErrorMessage))),Object(f.a)(this.destroy$)).subscribe({next:([e,i])=>{this.stateSubject$.next(t(i,e))},error:t=>{i=t,this.stateSubject$.error(t)}});if(i)throw i;return s}}initState(t){Object(b.a)([t],u.b).subscribe(t=>{this.isInitialized=!0,this.stateSubject$.next(t)})}setState(t){"function"!=typeof t?this.initState(t):this.updater(t)()}get(t){if(!this.isInitialized)throw new Error(this.notInitializedErrorMessage);let e;return this.stateSubject$.pipe(Object(O.a)(1)).subscribe(i=>{e=t?t(i):i}),e}select(...t){const{observables:e,projector:i,config:s}=function(t){const e=Array.from(t);let i,s={debounce:!1};const n=e.pop();return"function"!=typeof n?(s=Object.assign(Object.assign({},s),n),i=e.pop()):i=n,{observables:e,projector:i,config:s}}(t);let n;return n=0===e.length?this.stateSubject$.pipe(s.debounce?y():t=>t,Object(S.a)(i)):Object(h.b)(e).pipe(s.debounce?y():t=>t,Object(S.a)(t=>i(...t))),n.pipe(Object(w.a)(),Object($.a)({refCount:!0,bufferSize:1}),Object(f.a)(this.destroy$))}effect(t){const e=new j.a;return t(e).pipe(Object(f.a)(this.destroy$)).subscribe(),t=>(Object(o.a)(t)?t:Object(a.a)(t)).pipe(Object(f.a)(this.destroy$)).subscribe(t=>{e.next(t)})}}return t.\u0275fac=function(e){return new(e||t)(g.Wb(z,8))},t.\u0275prov=g.Ib({token:t,factory:t.\u0275fac}),t})()}}]);