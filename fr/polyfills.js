(function(t){t.ng??={},t.ng.common??={},t.ng.common.locales??={};let e=void 0;function a(n){let c=n,l=Math.floor(Math.abs(n)),E=n.toString().replace(/^[^.]*\.?/,"").length,_=parseInt(n.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;return l===0||l===1?1:_===0&&l!==0&&l%1e6===0&&E===0||!(_>=0&&_<=5)?4:5;}t.ng.common.locales.fr=["fr",[["AM","PM"],e,e],e,[["D","L","M","M","J","V","S"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["di","lu","ma","me","je","ve","sa"]],e,[["J","F","M","A","M","J","J","A","S","O","N","D"],["janv.","f\xE9vr.","mars","avr.","mai","juin","juil.","ao\xFBt","sept.","oct.","nov.","d\xE9c."],["janvier","f\xE9vrier","mars","avril","mai","juin","juillet","ao\xFBt","septembre","octobre","novembre","d\xE9cembre"]],e,[["av. J.-C.","ap. J.-C."],e,["avant J\xE9sus-Christ","apr\xE8s J\xE9sus-Christ"]],1,[6,0],["dd/MM/y","d MMM y","d MMMM y","EEEE d MMMM y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1} {0}","{1}, {0}","{1} '\xE0' {0}",e],[",","\u202F",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"EUR","\u20AC","euro",{ARS:["$AR","$"],AUD:["$AU","$"],BEF:["FB"],BMD:["$BM","$"],BND:["$BN","$"],BYN:[e,"\u0440."],BZD:["$BZ","$"],CAD:["$CA","$"],CLP:["$CL","$"],CNY:[e,"\xA5"],COP:["$CO","$"],CYP:["\xA3CY"],EGP:[e,"\xA3E"],FJD:["$FJ","$"],FKP:["\xA3FK","\xA3"],FRF:["F"],GBP:["\xA3GB","\xA3"],GIP:["\xA3GI","\xA3"],HKD:[e,"$"],IEP:["\xA3IE"],ILP:["\xA3IL"],ITL:["\u20A4IT"],JPY:[e,"\xA5"],KMF:[e,"FC"],LBP:["\xA3LB","\xA3L"],MTP:["\xA3MT"],MXN:["$MX","$"],NAD:["$NA","$"],NIO:[e,"$C"],NZD:["$NZ","$"],PHP:[e,"\u20B1"],RHD:["$RH"],RON:[e,"L"],RWF:[e,"FR"],SBD:["$SB","$"],SGD:["$SG","$"],SRD:["$SR","$"],TOP:[e,"$T"],TTD:["$TT","$"],TWD:[e,"NT$"],USD:["$US","$"],UYU:["$UY","$"],WST:["$WS"],XCD:[e,"$"],XPF:["FCFP"],ZMW:[e,"Kw"]},"ltr",a,[[["minuit","midi","mat.","ap.m.","soir","nuit"],e,["minuit","midi","du matin","de l\u2019apr\xE8s-midi","du soir","du matin"]],[["minuit","midi","mat.","ap.m.","soir","nuit"],e,["minuit","midi","matin","apr\xE8s-midi","soir","nuit"]],["00:00","12:00",["04:00","12:00"],["12:00","18:00"],["18:00","24:00"],["00:00","04:00"]]]];})(globalThis);var ae=globalThis;function ee(t){return(ae.__Zone_symbol_prefix||"__zone_symbol__")+t;}function dt(){let t=ae.performance;function e(j){t&&t.mark&&t.mark(j);}function a(j,i){t&&t.measure&&t.measure(j,i);}e("Zone");let q=class q{static assertZonePatched(){if(ae.Promise!==S.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)");}static get root(){let i=q.current;for(;i.parent;)i=i.parent;return i;}static get current(){return b.zone;}static get currentTask(){return D;}static __load_patch(i,s,o=!1){if(S.hasOwnProperty(i)){let p=ae[ee("forceDuplicateZoneCheck")]===!0;if(!o&&p)throw Error("Already loaded patch: "+i);}else if(!ae["__Zone_disable_"+i]){let p="Zone:"+i;e(p),S[i]=s(ae,q,R),a(p,p);}}get parent(){return this._parent;}get name(){return this._name;}constructor(i,s){this._parent=i,this._name=s?s.name||"unnamed":"<root>",this._properties=s&&s.properties||{},this._zoneDelegate=new l(this,this._parent&&this._parent._zoneDelegate,s);}get(i){let s=this.getZoneWith(i);if(s)return s._properties[i];}getZoneWith(i){let s=this;for(;s;){if(s._properties.hasOwnProperty(i))return s;s=s._parent;}return null;}fork(i){if(!i)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,i);}wrap(i,s){if(typeof i!="function")throw new Error("Expecting function got: "+i);let o=this._zoneDelegate.intercept(this,i,s),p=this;return function(){return p.runGuarded(o,this,arguments,s);};}run(i,s,o,p){b={parent:b,zone:this};try{return this._zoneDelegate.invoke(this,i,s,o,p);}finally{b=b.parent;}}runGuarded(i,s=null,o,p){b={parent:b,zone:this};try{try{return this._zoneDelegate.invoke(this,i,s,o,p);}catch(H){if(this._zoneDelegate.handleError(this,H))throw H;}}finally{b=b.parent;}}runTask(i,s,o){if(i.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(i.zone||K).name+"; Execution: "+this.name+")");let p=i,{type:H,data:{isPeriodic:I=!1,isRefreshable:se=!1}={}}=i;if(i.state===W&&(H===V||H===m))return;let le=i.state!=A;le&&p._transitionTo(A,d);let ue=D;D=p,b={parent:b,zone:this};try{H==m&&i.data&&!I&&!se&&(i.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,p,s,o);}catch(ne){if(this._zoneDelegate.handleError(this,ne))throw ne;}}finally{let ne=i.state;if(ne!==W&&ne!==X)if(H==V||I||se&&ne===k)le&&p._transitionTo(d,A,k);else{let h=p._zoneDelegates;this._updateTaskCount(p,-1),le&&p._transitionTo(W,A,W),se&&(p._zoneDelegates=h);}b=b.parent,D=ue;}}scheduleTask(i){if(i.zone&&i.zone!==this){let o=this;for(;o;){if(o===i.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${i.zone.name}`);o=o.parent;}}i._transitionTo(k,W);let s=[];i._zoneDelegates=s,i._zone=this;try{i=this._zoneDelegate.scheduleTask(this,i);}catch(o){throw i._transitionTo(X,k,W),this._zoneDelegate.handleError(this,o),o;}return i._zoneDelegates===s&&this._updateTaskCount(i,1),i.state==k&&i._transitionTo(d,k),i;}scheduleMicroTask(i,s,o,p){return this.scheduleTask(new E(B,i,s,o,p,void 0));}scheduleMacroTask(i,s,o,p,H){return this.scheduleTask(new E(m,i,s,o,p,H));}scheduleEventTask(i,s,o,p,H){return this.scheduleTask(new E(V,i,s,o,p,H));}cancelTask(i){if(i.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(i.zone||K).name+"; Execution: "+this.name+")");if(!(i.state!==d&&i.state!==A)){i._transitionTo(F,d,A);try{this._zoneDelegate.cancelTask(this,i);}catch(s){throw i._transitionTo(X,F),this._zoneDelegate.handleError(this,s),s;}return this._updateTaskCount(i,-1),i._transitionTo(W,F),i.runCount=-1,i;}}_updateTaskCount(i,s){let o=i._zoneDelegates;s==-1&&(i._zoneDelegates=null);for(let p=0;p<o.length;p++)o[p]._updateTaskCount(i.type,s);}};q.__symbol__=ee;let n=q,c={name:"",onHasTask:(j,i,s,o)=>j.hasTask(s,o),onScheduleTask:(j,i,s,o)=>j.scheduleTask(s,o),onInvokeTask:(j,i,s,o,p,H)=>j.invokeTask(s,o,p,H),onCancelTask:(j,i,s,o)=>j.cancelTask(s,o)};class l{get zone(){return this._zone;}constructor(i,s,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=i,this._parentDelegate=s,this._forkZS=o&&(o&&o.onFork?o:s._forkZS),this._forkDlgt=o&&(o.onFork?s:s._forkDlgt),this._forkCurrZone=o&&(o.onFork?this._zone:s._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:s._interceptZS),this._interceptDlgt=o&&(o.onIntercept?s:s._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this._zone:s._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:s._invokeZS),this._invokeDlgt=o&&(o.onInvoke?s:s._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this._zone:s._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:s._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?s:s._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this._zone:s._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:s._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?s:s._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this._zone:s._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:s._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?s:s._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this._zone:s._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:s._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?s:s._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this._zone:s._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let p=o&&o.onHasTask,H=s&&s._hasTaskZS;(p||H)&&(this._hasTaskZS=p?o:c,this._hasTaskDlgt=s,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,o.onScheduleTask||(this._scheduleTaskZS=c,this._scheduleTaskDlgt=s,this._scheduleTaskCurrZone=this._zone),o.onInvokeTask||(this._invokeTaskZS=c,this._invokeTaskDlgt=s,this._invokeTaskCurrZone=this._zone),o.onCancelTask||(this._cancelTaskZS=c,this._cancelTaskDlgt=s,this._cancelTaskCurrZone=this._zone));}fork(i,s){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,i,s):new n(i,s);}intercept(i,s,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,i,s,o):s;}invoke(i,s,o,p,H){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,i,s,o,p,H):s.apply(o,p);}handleError(i,s){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,i,s):!0;}scheduleTask(i,s){let o=s;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,i,s),o||(o=s);else if(s.scheduleFn)s.scheduleFn(s);else if(s.type==B)U(s);else throw new Error("Task is missing scheduleFn.");return o;}invokeTask(i,s,o,p){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,i,s,o,p):s.callback.apply(o,p);}cancelTask(i,s){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,i,s);else{if(!s.cancelFn)throw Error("Task is not cancelable");o=s.cancelFn(s);}return o;}hasTask(i,s){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,i,s);}catch(o){this.handleError(i,o);}}_updateTaskCount(i,s){let o=this._taskCounts,p=o[i],H=o[i]=p+s;if(H<0)throw new Error("More tasks executed then were scheduled.");if(p==0||H==0){let I={microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:i};this.hasTask(this._zone,I);}}}class E{constructor(i,s,o,p,H,I){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=i,this.source=s,this.data=p,this.scheduleFn=H,this.cancelFn=I,!o)throw new Error("callback is not defined");this.callback=o;let se=this;i===V&&p&&p.useG?this.invoke=E.invokeTask:this.invoke=function(){return E.invokeTask.call(ae,se,this,arguments);};}static invokeTask(i,s,o){i||(i=this),Q++;try{return i.runCount++,i.zone.runTask(i,s,o);}finally{Q==1&&J(),Q--;}}get zone(){return this._zone;}get state(){return this._state;}cancelScheduleRequest(){this._transitionTo(W,k);}_transitionTo(i,s,o){if(this._state===s||this._state===o)this._state=i,i==W&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${i}', expecting state '${s}'${o?" or '"+o+"'":""}, was '${this._state}'.`);}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this);}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount};}}let _=ee("setTimeout"),y=ee("Promise"),w=ee("then"),T=[],P=!1,L;function $(j){if(L||ae[y]&&(L=ae[y].resolve(0)),L){let i=L[w];i||(i=L.then),i.call(L,j);}else ae[_](j,0);}function U(j){Q===0&&T.length===0&&$(J),j&&T.push(j);}function J(){if(!P){for(P=!0;T.length;){let j=T;T=[];for(let i=0;i<j.length;i++){let s=j[i];try{s.zone.runTask(s,null,null);}catch(o){R.onUnhandledError(o);}}}R.microtaskDrainDone(),P=!1;}}let K={name:"NO ZONE"},W="notScheduled",k="scheduling",d="scheduled",A="running",F="canceling",X="unknown",B="microTask",m="macroTask",V="eventTask",S={},R={symbol:ee,currentZoneFrame:()=>b,onUnhandledError:z,microtaskDrainDone:z,scheduleMicroTask:U,showUncaughtError:()=>!n[ee("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:z,patchMethod:()=>z,bindArguments:()=>[],patchThen:()=>z,patchMacroTask:()=>z,patchEventPrototype:()=>z,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>z,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>z,wrapWithCurrentZone:()=>z,filterProperties:()=>[],attachOriginToPatched:()=>z,_redefineProperty:()=>z,patchCallbacks:()=>z,nativeScheduleMicroTask:$},b={parent:null,zone:new n(null,null)},D=null,Q=0;function z(){}return a("Zone","Zone"),n;}function _t(){let t=globalThis,e=t[ee("forceDuplicateZoneCheck")]===!0;if(t.Zone&&(e||typeof t.Zone.__symbol__!="function"))throw new Error("Zone already loaded.");return t.Zone??=dt(),t.Zone;}var be=Object.getOwnPropertyDescriptor,Ze=Object.defineProperty,je=Object.getPrototypeOf,Et=Object.create,Tt=Array.prototype.slice,He="addEventListener",$e="removeEventListener",Me=ee(He),Le=ee($e),fe="true",he="false",Pe=ee("");function Fe(t,e){return Zone.current.wrap(t,e);}function Be(t,e,a,n,c){return Zone.current.scheduleMacroTask(t,e,a,n,c);}var Z=ee,De=typeof window<"u",pe=De?window:void 0,Y=De&&pe||globalThis,mt="removeAttribute";function Ge(t,e){for(let a=t.length-1;a>=0;a--)typeof t[a]=="function"&&(t[a]=Fe(t[a],e+"_"+a));return t;}function gt(t,e){let a=t.constructor.name;for(let n=0;n<e.length;n++){let c=e[n],l=t[c];if(l){let E=be(t,c);if(!tt(E))continue;t[c]=(_=>{let y=function(){return _.apply(this,Ge(arguments,a+"."+c));};return _e(y,_),y;})(l);}}}function tt(t){return t?t.writable===!1?!1:!(typeof t.get=="function"&&typeof t.set>"u"):!0;}var nt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Se=!("nw"in Y)&&typeof Y.process<"u"&&Y.process.toString()==="[object process]",xe=!Se&&!nt&&!!(De&&pe.HTMLElement),rt=typeof Y.process<"u"&&Y.process.toString()==="[object process]"&&!nt&&!!(De&&pe.HTMLElement),we={},yt=Z("enable_beforeunload"),qe=function(t){if(t=t||Y.event,!t)return;let e=we[t.type];e||(e=we[t.type]=Z("ON_PROPERTY"+t.type));let a=this||t.target||Y,n=a[e],c;if(xe&&a===pe&&t.type==="error"){let l=t;c=n&&n.call(this,l.message,l.filename,l.lineno,l.colno,l.error),c===!0&&t.preventDefault();}else c=n&&n.apply(this,arguments),t.type==="beforeunload"&&Y[yt]&&typeof c=="string"?t.returnValue=c:c!=null&&!c&&t.preventDefault();return c;};function Ye(t,e,a){let n=be(t,e);if(!n&&a&&be(a,e)&&(n={enumerable:!0,configurable:!0}),!n||!n.configurable)return;let c=Z("on"+e+"patched");if(t.hasOwnProperty(c)&&t[c])return;delete n.writable,delete n.value;let l=n.get,E=n.set,_=e.slice(2),y=we[_];y||(y=we[_]=Z("ON_PROPERTY"+_)),n.set=function(w){let T=this;if(!T&&t===Y&&(T=Y),!T)return;typeof T[y]=="function"&&T.removeEventListener(_,qe),E&&E.call(T,null),T[y]=w,typeof w=="function"&&T.addEventListener(_,qe,!1);},n.get=function(){let w=this;if(!w&&t===Y&&(w=Y),!w)return null;let T=w[y];if(T)return T;if(l){let P=l.call(this);if(P)return n.set.call(this,P),typeof w[mt]=="function"&&w.removeAttribute(e),P;}return null;},Ze(t,e,n),t[c]=!0;}function ot(t,e,a){if(e)for(let n=0;n<e.length;n++)Ye(t,"on"+e[n],a);else{let n=[];for(let c in t)c.slice(0,2)=="on"&&n.push(c);for(let c=0;c<n.length;c++)Ye(t,n[c],a);}}var oe=Z("originalInstance");function ve(t){let e=Y[t];if(!e)return;Y[Z(t)]=e,Y[t]=function(){let c=Ge(arguments,t);switch(c.length){case 0:this[oe]=new e();break;case 1:this[oe]=new e(c[0]);break;case 2:this[oe]=new e(c[0],c[1]);break;case 3:this[oe]=new e(c[0],c[1],c[2]);break;case 4:this[oe]=new e(c[0],c[1],c[2],c[3]);break;default:throw new Error("Arg list too long.");}},_e(Y[t],e);let a=new e(function(){}),n;for(n in a)t==="XMLHttpRequest"&&n==="responseBlob"||function(c){typeof a[c]=="function"?Y[t].prototype[c]=function(){return this[oe][c].apply(this[oe],arguments);}:Ze(Y[t].prototype,c,{set:function(l){typeof l=="function"?(this[oe][c]=Fe(l,t+"."+c),_e(this[oe][c],l)):this[oe][c]=l;},get:function(){return this[oe][c];}});}(n);for(n in e)n!=="prototype"&&e.hasOwnProperty(n)&&(Y[t][n]=e[n]);}function de(t,e,a){let n=t;for(;n&&!n.hasOwnProperty(e);)n=je(n);!n&&t[e]&&(n=t);let c=Z(e),l=null;if(n&&(!(l=n[c])||!n.hasOwnProperty(c))){l=n[c]=n[e];let E=n&&be(n,e);if(tt(E)){let _=a(l,c,e);n[e]=function(){return _(this,arguments);},_e(n[e],l);}}return l;}function pt(t,e,a){let n=null;function c(l){let E=l.data;return E.args[E.cbIdx]=function(){l.invoke.apply(this,arguments);},n.apply(E.target,E.args),l;}n=de(t,e,l=>function(E,_){let y=a(E,_);return y.cbIdx>=0&&typeof _[y.cbIdx]=="function"?Be(y.name,_[y.cbIdx],y,c):l.apply(E,_);});}function _e(t,e){t[Z("OriginalDelegate")]=e;}var Je=!1,Ie=!1;function kt(){try{let t=pe.navigator.userAgent;if(t.indexOf("MSIE ")!==-1||t.indexOf("Trident/")!==-1)return!0;}catch{}return!1;}function vt(){if(Je)return Ie;Je=!0;try{let t=pe.navigator.userAgent;(t.indexOf("MSIE ")!==-1||t.indexOf("Trident/")!==-1||t.indexOf("Edge/")!==-1)&&(Ie=!0);}catch{}return Ie;}function Ke(t){return typeof t=="function";}function Qe(t){return typeof t=="number";}var ye=!1;if(typeof window<"u")try{let t=Object.defineProperty({},"passive",{get:function(){ye=!0;}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t);}catch{ye=!1;}var bt={useG:!0},te={},st={},it=new RegExp("^"+Pe+"(\\w+)(true|false)$"),ct=Z("propagationStopped");function at(t,e){let a=(e?e(t):t)+he,n=(e?e(t):t)+fe,c=Pe+a,l=Pe+n;te[t]={},te[t][he]=c,te[t][fe]=l;}function Pt(t,e,a,n){let c=n&&n.add||He,l=n&&n.rm||$e,E=n&&n.listeners||"eventListeners",_=n&&n.rmAll||"removeAllListeners",y=Z(c),w="."+c+":",T="prependListener",P="."+T+":",L=function(k,d,A){if(k.isRemoved)return;let F=k.callback;typeof F=="object"&&F.handleEvent&&(k.callback=m=>F.handleEvent(m),k.originalDelegate=F);let X;try{k.invoke(k,d,[A]);}catch(m){X=m;}let B=k.options;if(B&&typeof B=="object"&&B.once){let m=k.originalDelegate?k.originalDelegate:k.callback;d[l].call(d,A.type,m,B);}return X;};function $(k,d,A){if(d=d||t.event,!d)return;let F=k||d.target||t,X=F[te[d.type][A?fe:he]];if(X){let B=[];if(X.length===1){let m=L(X[0],F,d);m&&B.push(m);}else{let m=X.slice();for(let V=0;V<m.length&&!(d&&d[ct]===!0);V++){let S=L(m[V],F,d);S&&B.push(S);}}if(B.length===1)throw B[0];for(let m=0;m<B.length;m++){let V=B[m];e.nativeScheduleMicroTask(()=>{throw V;});}}}let U=function(k){return $(this,k,!1);},J=function(k){return $(this,k,!0);};function K(k,d){if(!k)return!1;let A=!0;d&&d.useG!==void 0&&(A=d.useG);let F=d&&d.vh,X=!0;d&&d.chkDup!==void 0&&(X=d.chkDup);let B=!1;d&&d.rt!==void 0&&(B=d.rt);let m=k;for(;m&&!m.hasOwnProperty(c);)m=je(m);if(!m&&k[c]&&(m=k),!m||m[y])return!1;let V=d&&d.eventNameToString,S={},R=m[y]=m[c],b=m[Z(l)]=m[l],D=m[Z(E)]=m[E],Q=m[Z(_)]=m[_],z;d&&d.prepend&&(z=m[Z(d.prepend)]=m[d.prepend]);function q(r,f){return!ye&&typeof r=="object"&&r?!!r.capture:!ye||!f?r:typeof r=="boolean"?{capture:r,passive:!0}:r?typeof r=="object"&&r.passive!==!1?{...r,passive:!0}:r:{passive:!0};}let j=function(r){if(!S.isExisting)return R.call(S.target,S.eventName,S.capture?J:U,S.options);},i=function(r){if(!r.isRemoved){let f=te[r.eventName],v;f&&(v=f[r.capture?fe:he]);let C=v&&r.target[v];if(C){for(let g=0;g<C.length;g++)if(C[g]===r){C.splice(g,1),r.isRemoved=!0,r.removeAbortListener&&(r.removeAbortListener(),r.removeAbortListener=null),C.length===0&&(r.allRemoved=!0,r.target[v]=null);break;}}}if(r.allRemoved)return b.call(r.target,r.eventName,r.capture?J:U,r.options);},s=function(r){return R.call(S.target,S.eventName,r.invoke,S.options);},o=function(r){return z.call(S.target,S.eventName,r.invoke,S.options);},p=function(r){return b.call(r.target,r.eventName,r.invoke,r.options);},H=A?j:s,I=A?i:p,se=function(r,f){let v=typeof f;return v==="function"&&r.callback===f||v==="object"&&r.originalDelegate===f;},le=d&&d.diff?d.diff:se,ue=Zone[Z("UNPATCHED_EVENTS")],ne=t[Z("PASSIVE_EVENTS")];function h(r){if(typeof r=="object"&&r!==null){let f={...r};return r.signal&&(f.signal=r.signal),f;}return r;}let u=function(r,f,v,C,g=!1,N=!1){return function(){let O=this||t,M=arguments[0];d&&d.transferEventName&&(M=d.transferEventName(M));let G=arguments[1];if(!G)return r.apply(this,arguments);if(Se&&M==="uncaughtException")return r.apply(this,arguments);let x=!1;if(typeof G!="function"){if(!G.handleEvent)return r.apply(this,arguments);x=!0;}if(F&&!F(r,G,O,arguments))return;let Ee=ye&&!!ne&&ne.indexOf(M)!==-1,ie=h(q(arguments[2],Ee)),Te=ie?.signal;if(Te?.aborted)return;if(ue){for(let ce=0;ce<ue.length;ce++)if(M===ue[ce])return Ee?r.call(O,M,G,ie):r.apply(this,arguments);}let Ne=ie?typeof ie=="boolean"?!0:ie.capture:!1,Ue=ie&&typeof ie=="object"?ie.once:!1,ht=Zone.current,Oe=te[M];Oe||(at(M,V),Oe=te[M]);let Ve=Oe[Ne?fe:he],me=O[Ve],ze=!1;if(me){if(ze=!0,X){for(let ce=0;ce<me.length;ce++)if(le(me[ce],G))return;}}else me=O[Ve]=[];let Re,We=O.constructor.name,Xe=st[We];Xe&&(Re=Xe[M]),Re||(Re=We+f+(V?V(M):M)),S.options=ie,Ue&&(S.options.once=!1),S.target=O,S.capture=Ne,S.eventName=M,S.isExisting=ze;let ke=A?bt:void 0;ke&&(ke.taskData=S),Te&&(S.options.signal=void 0);let re=ht.scheduleEventTask(Re,G,ke,v,C);if(Te){S.options.signal=Te;let ce=()=>re.zone.cancelTask(re);r.call(Te,"abort",ce,{once:!0}),re.removeAbortListener=()=>Te.removeEventListener("abort",ce);}if(S.target=null,ke&&(ke.taskData=null),Ue&&(S.options.once=!0),!ye&&typeof re.options=="boolean"||(re.options=ie),re.target=O,re.capture=Ne,re.eventName=M,x&&(re.originalDelegate=G),N?me.unshift(re):me.push(re),g)return O;};};return m[c]=u(R,w,H,I,B),z&&(m[T]=u(z,P,o,I,B,!0)),m[l]=function(){let r=this||t,f=arguments[0];d&&d.transferEventName&&(f=d.transferEventName(f));let v=arguments[2],C=v?typeof v=="boolean"?!0:v.capture:!1,g=arguments[1];if(!g)return b.apply(this,arguments);if(F&&!F(b,g,r,arguments))return;let N=te[f],O;N&&(O=N[C?fe:he]);let M=O&&r[O];if(M)for(let G=0;G<M.length;G++){let x=M[G];if(le(x,g)){if(M.splice(G,1),x.isRemoved=!0,M.length===0&&(x.allRemoved=!0,r[O]=null,!C&&typeof f=="string")){let Ee=Pe+"ON_PROPERTY"+f;r[Ee]=null;}return x.zone.cancelTask(x),B?r:void 0;}}return b.apply(this,arguments);},m[E]=function(){let r=this||t,f=arguments[0];d&&d.transferEventName&&(f=d.transferEventName(f));let v=[],C=lt(r,V?V(f):f);for(let g=0;g<C.length;g++){let N=C[g],O=N.originalDelegate?N.originalDelegate:N.callback;v.push(O);}return v;},m[_]=function(){let r=this||t,f=arguments[0];if(f){d&&d.transferEventName&&(f=d.transferEventName(f));let v=te[f];if(v){let C=v[he],g=v[fe],N=r[C],O=r[g];if(N){let M=N.slice();for(let G=0;G<M.length;G++){let x=M[G],Ee=x.originalDelegate?x.originalDelegate:x.callback;this[l].call(this,f,Ee,x.options);}}if(O){let M=O.slice();for(let G=0;G<M.length;G++){let x=M[G],Ee=x.originalDelegate?x.originalDelegate:x.callback;this[l].call(this,f,Ee,x.options);}}}}else{let v=Object.keys(r);for(let C=0;C<v.length;C++){let g=v[C],N=it.exec(g),O=N&&N[1];O&&O!=="removeListener"&&this[_].call(this,O);}this[_].call(this,"removeListener");}if(B)return this;},_e(m[c],R),_e(m[l],b),Q&&_e(m[_],Q),D&&_e(m[E],D),!0;}let W=[];for(let k=0;k<a.length;k++)W[k]=K(a[k],n);return W;}function lt(t,e){if(!e){let l=[];for(let E in t){let _=it.exec(E),y=_&&_[1];if(y&&(!e||y===e)){let w=t[E];if(w)for(let T=0;T<w.length;T++)l.push(w[T]);}}return l;}let a=te[e];a||(at(e),a=te[e]);let n=t[a[he]],c=t[a[fe]];return n?c?n.concat(c):n.slice():c?c.slice():[];}function Rt(t,e){let a=t.Event;a&&a.prototype&&e.patchMethod(a.prototype,"stopImmediatePropagation",n=>function(c,l){c[ct]=!0,n&&n.apply(c,l);});}function Ct(t,e){e.patchMethod(t,"queueMicrotask",a=>function(n,c){Zone.current.scheduleMicroTask("queueMicrotask",c[0]);});}var Ce=Z("zoneTask");function ge(t,e,a,n){let c=null,l=null;e+=n,a+=n;let E={};function _(w){let T=w.data;T.args[0]=function(){return w.invoke.apply(this,arguments);};let P=c.apply(t,T.args);return Qe(P)?T.handleId=P:(T.handle=P,T.isRefreshable=Ke(P.refresh)),w;}function y(w){let{handle:T,handleId:P}=w.data;return l.call(t,T??P);}c=de(t,e,w=>function(T,P){if(Ke(P[0])){let L={isRefreshable:!1,isPeriodic:n==="Interval",delay:n==="Timeout"||n==="Interval"?P[1]||0:void 0,args:P},$=P[0];P[0]=function(){try{return $.apply(this,arguments);}finally{let{handle:A,handleId:F,isPeriodic:X,isRefreshable:B}=L;!X&&!B&&(F?delete E[F]:A&&(A[Ce]=null));}};let U=Be(e,P[0],L,_,y);if(!U)return U;let{handleId:J,handle:K,isRefreshable:W,isPeriodic:k}=U.data;if(J)E[J]=U;else if(K&&(K[Ce]=U,W&&!k)){let d=K.refresh;K.refresh=function(){let{zone:A,state:F}=U;return F==="notScheduled"?(U._state="scheduled",A._updateTaskCount(U,1)):F==="running"&&(U._state="scheduling"),d.call(this);};}return K??J??U;}else return w.apply(t,P);}),l=de(t,a,w=>function(T,P){let L=P[0],$;Qe(L)?($=E[L],delete E[L]):($=L?.[Ce],$?L[Ce]=null:$=L),$?.type?$.cancelFn&&$.zone.cancelTask($):w.apply(t,P);});}function wt(t,e){let{isBrowser:a,isMix:n}=e.getGlobalObjects();if(!a&&!n||!t.customElements||!("customElements"in t))return;let c=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"];e.patchCallbacks(e,t.customElements,"customElements","define",c);}function Dt(t,e){if(Zone[e.symbol("patchEventTarget")])return;let{eventNames:a,zoneSymbolEventNames:n,TRUE_STR:c,FALSE_STR:l,ZONE_SYMBOL_PREFIX:E}=e.getGlobalObjects();for(let y=0;y<a.length;y++){let w=a[y],T=w+l,P=w+c,L=E+T,$=E+P;n[w]={},n[w][l]=L,n[w][c]=$;}let _=t.EventTarget;if(!(!_||!_.prototype))return e.patchEventTarget(t,e,[_&&_.prototype]),!0;}function St(t,e){e.patchEventPrototype(t,e);}function ut(t,e,a){if(!a||a.length===0)return e;let n=a.filter(l=>l.target===t);if(!n||n.length===0)return e;let c=n[0].ignoreProperties;return e.filter(l=>c.indexOf(l)===-1);}function et(t,e,a,n){if(!t)return;let c=ut(t,e,a);ot(t,c,n);}function Ae(t){return Object.getOwnPropertyNames(t).filter(e=>e.startsWith("on")&&e.length>2).map(e=>e.substring(2));}function Nt(t,e){if(Se&&!rt||Zone[t.symbol("patchEvents")])return;let a=e.__Zone_ignore_on_properties,n=[];if(xe){let c=window;n=n.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);let l=kt()?[{target:c,ignoreProperties:["error"]}]:[];et(c,Ae(c),a&&a.concat(l),je(c));}n=n.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let c=0;c<n.length;c++){let l=e[n[c]];l&&l.prototype&&et(l.prototype,Ae(l.prototype),a);}}function Ot(t){t.__load_patch("legacy",e=>{let a=e[t.__symbol__("legacyPatch")];a&&a();}),t.__load_patch("timers",e=>{let a="set",n="clear";ge(e,a,n,"Timeout"),ge(e,a,n,"Interval"),ge(e,a,n,"Immediate");}),t.__load_patch("requestAnimationFrame",e=>{ge(e,"request","cancel","AnimationFrame"),ge(e,"mozRequest","mozCancel","AnimationFrame"),ge(e,"webkitRequest","webkitCancel","AnimationFrame");}),t.__load_patch("blocking",(e,a)=>{let n=["alert","prompt","confirm"];for(let c=0;c<n.length;c++){let l=n[c];de(e,l,(E,_,y)=>function(w,T){return a.current.run(E,e,T,y);});}}),t.__load_patch("EventTarget",(e,a,n)=>{St(e,n),Dt(e,n);let c=e.XMLHttpRequestEventTarget;c&&c.prototype&&n.patchEventTarget(e,n,[c.prototype]);}),t.__load_patch("MutationObserver",(e,a,n)=>{ve("MutationObserver"),ve("WebKitMutationObserver");}),t.__load_patch("IntersectionObserver",(e,a,n)=>{ve("IntersectionObserver");}),t.__load_patch("FileReader",(e,a,n)=>{ve("FileReader");}),t.__load_patch("on_property",(e,a,n)=>{Nt(n,e);}),t.__load_patch("customElements",(e,a,n)=>{wt(e,n);}),t.__load_patch("XHR",(e,a)=>{w(e);let n=Z("xhrTask"),c=Z("xhrSync"),l=Z("xhrListener"),E=Z("xhrScheduled"),_=Z("xhrURL"),y=Z("xhrErrorBeforeScheduled");function w(T){let P=T.XMLHttpRequest;if(!P)return;let L=P.prototype;function $(R){return R[n];}let U=L[Me],J=L[Le];if(!U){let R=T.XMLHttpRequestEventTarget;if(R){let b=R.prototype;U=b[Me],J=b[Le];}}let K="readystatechange",W="scheduled";function k(R){let b=R.data,D=b.target;D[E]=!1,D[y]=!1;let Q=D[l];U||(U=D[Me],J=D[Le]),Q&&J.call(D,K,Q);let z=D[l]=()=>{if(D.readyState===D.DONE)if(!b.aborted&&D[E]&&R.state===W){let j=D[a.__symbol__("loadfalse")];if(D.status!==0&&j&&j.length>0){let i=R.invoke;R.invoke=function(){let s=D[a.__symbol__("loadfalse")];for(let o=0;o<s.length;o++)s[o]===R&&s.splice(o,1);!b.aborted&&R.state===W&&i.call(R);},j.push(R);}else R.invoke();}else!b.aborted&&D[E]===!1&&(D[y]=!0);};return U.call(D,K,z),D[n]||(D[n]=R),V.apply(D,b.args),D[E]=!0,R;}function d(){}function A(R){let b=R.data;return b.aborted=!0,S.apply(b.target,b.args);}let F=de(L,"open",()=>function(R,b){return R[c]=b[2]==!1,R[_]=b[1],F.apply(R,b);}),X="XMLHttpRequest.send",B=Z("fetchTaskAborting"),m=Z("fetchTaskScheduling"),V=de(L,"send",()=>function(R,b){if(a.current[m]===!0||R[c])return V.apply(R,b);{let D={target:R,url:R[_],isPeriodic:!1,args:b,aborted:!1},Q=Be(X,d,D,k,A);R&&R[y]===!0&&!D.aborted&&Q.state===W&&Q.invoke();}}),S=de(L,"abort",()=>function(R,b){let D=$(R);if(D&&typeof D.type=="string"){if(D.cancelFn==null||D.data&&D.data.aborted)return;D.zone.cancelTask(D);}else if(a.current[B]===!0)return S.apply(R,b);});}}),t.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&gt(e.navigator.geolocation,["getCurrentPosition","watchPosition"]);}),t.__load_patch("PromiseRejectionEvent",(e,a)=>{function n(c){return function(l){lt(e,c).forEach(_=>{let y=e.PromiseRejectionEvent;if(y){let w=new y(c,{promise:l.promise,reason:l.rejection});_.invoke(w);}});};}e.PromiseRejectionEvent&&(a[Z("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),a[Z("rejectionHandledHandler")]=n("rejectionhandled"));}),t.__load_patch("queueMicrotask",(e,a,n)=>{Ct(e,n);});}function Mt(t){t.__load_patch("ZoneAwarePromise",(e,a,n)=>{let c=Object.getOwnPropertyDescriptor,l=Object.defineProperty;function E(h){if(h&&h.toString===Object.prototype.toString){let u=h.constructor&&h.constructor.name;return(u||"")+": "+JSON.stringify(h);}return h?h.toString():Object.prototype.toString.call(h);}let _=n.symbol,y=[],w=e[_("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,T=_("Promise"),P=_("then"),L="__creationTrace__";n.onUnhandledError=h=>{if(n.showUncaughtError()){let u=h&&h.rejection;u?console.error("Unhandled Promise rejection:",u instanceof Error?u.message:u,"; Zone:",h.zone.name,"; Task:",h.task&&h.task.source,"; Value:",u,u instanceof Error?u.stack:void 0):console.error(h);}},n.microtaskDrainDone=()=>{for(;y.length;){let h=y.shift();try{h.zone.runGuarded(()=>{throw h.throwOriginal?h.rejection:h;});}catch(u){U(u);}}};let $=_("unhandledPromiseRejectionHandler");function U(h){n.onUnhandledError(h);try{let u=a[$];typeof u=="function"&&u.call(this,h);}catch{}}function J(h){return h&&h.then;}function K(h){return h;}function W(h){return I.reject(h);}let k=_("state"),d=_("value"),A=_("finally"),F=_("parentPromiseValue"),X=_("parentPromiseState"),B="Promise.then",m=null,V=!0,S=!1,R=0;function b(h,u){return r=>{try{q(h,u,r);}catch(f){q(h,!1,f);}};}let D=function(){let h=!1;return function(r){return function(){h||(h=!0,r.apply(null,arguments));};};},Q="Promise resolved with itself",z=_("currentTaskTrace");function q(h,u,r){let f=D();if(h===r)throw new TypeError(Q);if(h[k]===m){let v=null;try{(typeof r=="object"||typeof r=="function")&&(v=r&&r.then);}catch(C){return f(()=>{q(h,!1,C);})(),h;}if(u!==S&&r instanceof I&&r.hasOwnProperty(k)&&r.hasOwnProperty(d)&&r[k]!==m)i(r),q(h,r[k],r[d]);else if(u!==S&&typeof v=="function")try{v.call(r,f(b(h,u)),f(b(h,!1)));}catch(C){f(()=>{q(h,!1,C);})();}else{h[k]=u;let C=h[d];if(h[d]=r,h[A]===A&&u===V&&(h[k]=h[X],h[d]=h[F]),u===S&&r instanceof Error){let g=a.currentTask&&a.currentTask.data&&a.currentTask.data[L];g&&l(r,z,{configurable:!0,enumerable:!1,writable:!0,value:g});}for(let g=0;g<C.length;)s(h,C[g++],C[g++],C[g++],C[g++]);if(C.length==0&&u==S){h[k]=R;let g=r;try{throw new Error("Uncaught (in promise): "+E(r)+(r&&r.stack?`
`+r.stack:""));}catch(N){g=N;}w&&(g.throwOriginal=!0),g.rejection=r,g.promise=h,g.zone=a.current,g.task=a.currentTask,y.push(g),n.scheduleMicroTask();}}}return h;}let j=_("rejectionHandledHandler");function i(h){if(h[k]===R){try{let u=a[j];u&&typeof u=="function"&&u.call(this,{rejection:h[d],promise:h});}catch{}h[k]=S;for(let u=0;u<y.length;u++)h===y[u].promise&&y.splice(u,1);}}function s(h,u,r,f,v){i(h);let C=h[k],g=C?typeof f=="function"?f:K:typeof v=="function"?v:W;u.scheduleMicroTask(B,()=>{try{let N=h[d],O=!!r&&A===r[A];O&&(r[F]=N,r[X]=C);let M=u.run(g,void 0,O&&g!==W&&g!==K?[]:[N]);q(r,!0,M);}catch(N){q(r,!1,N);}},r);}let o="function ZoneAwarePromise() { [native code] }",p=function(){},H=e.AggregateError;class I{static toString(){return o;}static resolve(u){return u instanceof I?u:q(new this(null),V,u);}static reject(u){return q(new this(null),S,u);}static withResolvers(){let u={};return u.promise=new I((r,f)=>{u.resolve=r,u.reject=f;}),u;}static any(u){if(!u||typeof u[Symbol.iterator]!="function")return Promise.reject(new H([],"All promises were rejected"));let r=[],f=0;try{for(let g of u)f++,r.push(I.resolve(g));}catch{return Promise.reject(new H([],"All promises were rejected"));}if(f===0)return Promise.reject(new H([],"All promises were rejected"));let v=!1,C=[];return new I((g,N)=>{for(let O=0;O<r.length;O++)r[O].then(M=>{v||(v=!0,g(M));},M=>{C.push(M),f--,f===0&&(v=!0,N(new H(C,"All promises were rejected")));});});}static race(u){let r,f,v=new this((N,O)=>{r=N,f=O;});function C(N){r(N);}function g(N){f(N);}for(let N of u)J(N)||(N=this.resolve(N)),N.then(C,g);return v;}static all(u){return I.allWithCallback(u);}static allSettled(u){return(this&&this.prototype instanceof I?this:I).allWithCallback(u,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})});}static allWithCallback(u,r){let f,v,C=new this((M,G)=>{f=M,v=G;}),g=2,N=0,O=[];for(let M of u){J(M)||(M=this.resolve(M));let G=N;try{M.then(x=>{O[G]=r?r.thenCallback(x):x,g--,g===0&&f(O);},x=>{r?(O[G]=r.errorCallback(x),g--,g===0&&f(O)):v(x);});}catch(x){v(x);}g++,N++;}return g-=2,g===0&&f(O),C;}constructor(u){let r=this;if(!(r instanceof I))throw new Error("Must be an instanceof Promise.");r[k]=m,r[d]=[];try{let f=D();u&&u(f(b(r,V)),f(b(r,S)));}catch(f){q(r,!1,f);}}get[Symbol.toStringTag](){return"Promise";}get[Symbol.species](){return I;}then(u,r){let f=this.constructor?.[Symbol.species];(!f||typeof f!="function")&&(f=this.constructor||I);let v=new f(p),C=a.current;return this[k]==m?this[d].push(C,v,u,r):s(this,C,v,u,r),v;}catch(u){return this.then(null,u);}finally(u){let r=this.constructor?.[Symbol.species];(!r||typeof r!="function")&&(r=I);let f=new r(p);f[A]=A;let v=a.current;return this[k]==m?this[d].push(v,f,u,u):s(this,v,f,u,u),f;}}I.resolve=I.resolve,I.reject=I.reject,I.race=I.race,I.all=I.all;let se=e[T]=e.Promise;e.Promise=I;let le=_("thenPatched");function ue(h){let u=h.prototype,r=c(u,"then");if(r&&(r.writable===!1||!r.configurable))return;let f=u.then;u[P]=f,h.prototype.then=function(v,C){return new I((N,O)=>{f.call(this,N,O);}).then(v,C);},h[le]=!0;}n.patchThen=ue;function ne(h){return function(u,r){let f=h.apply(u,r);if(f instanceof I)return f;let v=f.constructor;return v[le]||ue(v),f;};}return se&&(ue(se),de(e,"fetch",h=>ne(h))),Promise[a.__symbol__("uncaughtPromiseErrors")]=y,I;});}function Lt(t){t.__load_patch("toString",e=>{let a=Function.prototype.toString,n=Z("OriginalDelegate"),c=Z("Promise"),l=Z("Error"),E=function(){if(typeof this=="function"){let T=this[n];if(T)return typeof T=="function"?a.call(T):Object.prototype.toString.call(T);if(this===Promise){let P=e[c];if(P)return a.call(P);}if(this===Error){let P=e[l];if(P)return a.call(P);}}return a.call(this);};E[n]=a,Function.prototype.toString=E;let _=Object.prototype.toString,y="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?y:_.call(this);};});}function It(t,e,a,n,c){let l=Zone.__symbol__(n);if(e[l])return;let E=e[l]=e[n];e[n]=function(_,y,w){return y&&y.prototype&&c.forEach(function(T){let P=`${a}.${n}::`+T,L=y.prototype;try{if(L.hasOwnProperty(T)){let $=t.ObjectGetOwnPropertyDescriptor(L,T);$&&$.value?($.value=t.wrapWithCurrentZone($.value,P),t._redefineProperty(y.prototype,T,$)):L[T]&&(L[T]=t.wrapWithCurrentZone(L[T],P));}else L[T]&&(L[T]=t.wrapWithCurrentZone(L[T],P));}catch{}}),E.call(e,_,y,w);},t.attachOriginToPatched(e[n],E);}function At(t){t.__load_patch("util",(e,a,n)=>{let c=Ae(e);n.patchOnProperties=ot,n.patchMethod=de,n.bindArguments=Ge,n.patchMacroTask=pt;let l=a.__symbol__("BLACK_LISTED_EVENTS"),E=a.__symbol__("UNPATCHED_EVENTS");e[E]&&(e[l]=e[E]),e[l]&&(a[l]=a[E]=e[l]),n.patchEventPrototype=Rt,n.patchEventTarget=Pt,n.isIEOrEdge=vt,n.ObjectDefineProperty=Ze,n.ObjectGetOwnPropertyDescriptor=be,n.ObjectCreate=Et,n.ArraySlice=Tt,n.patchClass=ve,n.wrapWithCurrentZone=Fe,n.filterProperties=ut,n.attachOriginToPatched=_e,n._redefineProperty=Object.defineProperty,n.patchCallbacks=It,n.getGlobalObjects=()=>({globalSources:st,zoneSymbolEventNames:te,eventNames:c,isBrowser:xe,isMix:rt,isNode:Se,TRUE_STR:fe,FALSE_STR:he,ZONE_SYMBOL_PREFIX:Pe,ADD_EVENT_LISTENER_STR:He,REMOVE_EVENT_LISTENER_STR:$e});});}function Zt(t){Mt(t),Lt(t),At(t);}var ft=_t();Zt(ft);Ot(ft);(globalThis.$localize??={}).locale="fr";/**i18n:9d8412bfe7627b0f89ef7d2e67fa28025f16e3a2b7462360493feeb0a23db051*/