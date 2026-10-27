(()=>{var Bs="186";var gu=0,_o=1,_u=2;var Fa=1,vu=2,Or=3,Vi=0,Dt=1,Wt=2,gi=0,Gi=1,Hr=2,vo=3,xo=4,xu=5;var ur=100,yu=101,Su=102,Mu=103,bu=104,Tu=200,Eu=201,wu=202,Au=203,Pl=204,Il=205,Cu=206,Ru=207,Pu=208,Iu=209,Lu=210,Du=211,Uu=212,Nu=213,Ou=214,Wn=0,Xn=1,jn=2,kr=3,qn=4,Yn=5,Zn=6,Jn=7,Ll=0,Fu=1,Bu=2,ri=0,Dl=1,Ul=2,Nl=3,$a=4,Ol=5,Fl=6,Bl=7;var zl=300,Hi=301,xr=302,on=303,ln=304,Qa=306,Kn=1e3,fi=1001,$n=1002,Tt=1003,zu=1004;var la=1005;var At=1006,hn=1007;var Fi=1008;var Ot=1009,Gl=1010,Vl=1011,Wr=1012,zs=1013,ai=1014,ii=1015,ni=1016,Gs=1017,Vs=1018,Xr=1020,Hl=35902,kl=35899,Wl=1021,Xl=1022,Xt=1023,vi=1026,Bi=1027,jl=1028,Hs=1029,ki=1030,ks=1031;var Ws=1033,Ba=33776,za=33777,Ga=33778,Va=33779,Qn=35840,es=35841,ts=35842,is=35843,rs=36196,as=37492,ns=37496,ss=37488,os=37489,Xa=37490,ls=37491,hs=37808,us=37809,cs=37810,ds=37811,ps=37812,fs=37813,ms=37814,gs=37815,_s=37816,vs=37817,xs=37818,ys=37819,Ss=37820,Ms=37821,bs=36492,Ts=36494,Es=36495,ws=36283,As=36284,ja=36285,Cs=36286;var qa=2300,Rs=2301,un=2302,yo=2303,So=2400,Mo=2401,bo=2402;var Gu=3200;var Ps=0,Vu=1,Ai="",It="srgb",Ya="srgb-linear",Za="linear",nt="srgb";var cn=7680;var Hu=519,ku=512,Wu=513,Xu=514,Xs=515,ju=516,qu=517,js=518,Yu=519,Zu=35044;var To="300 es",jt=2e3,jr=2001;function Ju(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ku(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ja(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function $u(){let e=Ja("canvas");return e.style.display="block",e}var Eo={},yr=null;function wo(...e){let t="THREE."+e.shift();yr?yr("log",t,...e):console.log(t,...e)}function ql(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Be(...e){e=ql(e);let t="THREE."+e.shift();if(yr)yr("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Ve(...e){e=ql(e);let t="THREE."+e.shift();if(yr)yr("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function gr(...e){let t=e.join(" ");t in Eo||(Eo[t]=!0,Be(...e))}function Qu(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var ec={[Wn]:Xn,[jn]:Zn,[qn]:Jn,[kr]:Yn,[Xn]:Wn,[Zn]:jn,[Jn]:qn,[Yn]:kr},Xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ao=1234567,_r=Math.PI/180,qr=180/Math.PI;function ji(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Et[e&255]+Et[e>>8&255]+Et[e>>16&255]+Et[e>>24&255]+"-"+Et[t&255]+Et[t>>8&255]+"-"+Et[t>>16&15|64]+Et[t>>24&255]+"-"+Et[i&63|128]+Et[i>>8&255]+"-"+Et[i>>16&255]+Et[i>>24&255]+Et[r&255]+Et[r>>8&255]+Et[r>>16&255]+Et[r>>24&255]).toLowerCase()}function Je(e,t,i){return Math.max(t,Math.min(i,e))}function qs(e,t){return(e%t+t)%t}function tc(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)}function ic(e,t,i){return e!==t?(i-e)/(t-e):0}function zr(e,t,i){return(1-i)*e+i*t}function rc(e,t,i,r){return zr(e,t,1-Math.exp(-i*r))}function ac(e,t=1){return t-Math.abs(qs(e,t*2)-t)}function nc(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function sc(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function oc(e,t){return e+Math.floor(Math.random()*(t-e+1))}function lc(e,t){return e+Math.random()*(t-e)}function hc(e){return e*(.5-Math.random())}function uc(e){e!==void 0&&(Ao=e);let t=Ao+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cc(e){return e*_r}function dc(e){return e*qr}function pc(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function fc(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function mc(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function gc(e,t,i,r,a){let n=Math.cos,s=Math.sin,o=n(i/2),l=s(i/2),h=n((t+r)/2),u=s((t+r)/2),d=n((t-r)/2),c=s((t-r)/2),f=n((r-t)/2),x=s((r-t)/2);switch(a){case"XYX":e.set(o*u,l*d,l*c,o*h);break;case"YZY":e.set(l*c,o*u,l*d,o*h);break;case"ZXZ":e.set(l*d,l*c,o*u,o*h);break;case"XZX":e.set(o*u,l*x,l*f,o*h);break;case"YXY":e.set(l*f,o*u,l*x,o*h);break;case"ZYZ":e.set(l*x,l*f,o*u,o*h);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function cr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Rt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Yl={DEG2RAD:_r,RAD2DEG:qr,generateUUID:ji,clamp:Je,euclideanModulo:qs,mapLinear:tc,inverseLerp:ic,lerp:zr,damp:rc,pingpong:ac,smoothstep:nc,smootherstep:sc,randInt:oc,randFloat:lc,randFloatSpread:hc,seededRandom:uc,degToRad:cc,radToDeg:dc,isPowerOfTwo:pc,ceilPowerOfTwo:fc,floorPowerOfTwo:mc,setQuaternionFromProperEuler:gc,normalize:Rt,denormalize:cr},le=class Zl{static{Zl.prototype.isVector2=!0}constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Je(this.x,t.x,i.x),this.y=Je(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Je(this.x,t,i),this.y=Je(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Je(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Je(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],d=a[n+0],c=a[n+1],f=a[n+2],x=a[n+3];if(u!==x||o!==d||l!==c||h!==f){let y=o*d+l*c+h*f+u*x;y<0&&(d=-d,c=-c,f=-f,x=-x,y=-y);let g=1-s;if(y<.9995){let p=Math.acos(y),b=Math.sin(p);g=Math.sin(g*p)/b,s=Math.sin(s*p)/b,o=o*g+d*s,l=l*g+c*s,h=h*g+f*s,u=u*g+x*s}else{o=o*g+d*s,l=l*g+c*s,h=h*g+f*s,u=u*g+x*s;let p=1/Math.sqrt(o*o+l*l+h*h+u*u);o*=p,l*=p,h*=p,u*=p}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],h=i[r+3],u=a[n],d=a[n+1],c=a[n+2],f=a[n+3];return e[t]=s*f+h*u+o*c-l*d,e[t+1]=o*f+h*d+l*u-s*c,e[t+2]=l*f+h*c+s*d-o*u,e[t+3]=h*f-s*u-o*d-l*c,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),h=s(r/2),u=s(a/2),d=o(i/2),c=o(r/2),f=o(a/2);switch(n){case"XYZ":this._x=d*h*u+l*c*f,this._y=l*c*u-d*h*f,this._z=l*h*f+d*c*u,this._w=l*h*u-d*c*f;break;case"YXZ":this._x=d*h*u+l*c*f,this._y=l*c*u-d*h*f,this._z=l*h*f-d*c*u,this._w=l*h*u+d*c*f;break;case"ZXY":this._x=d*h*u-l*c*f,this._y=l*c*u+d*h*f,this._z=l*h*f+d*c*u,this._w=l*h*u-d*c*f;break;case"ZYX":this._x=d*h*u-l*c*f,this._y=l*c*u+d*h*f,this._z=l*h*f-d*c*u,this._w=l*h*u+d*c*f;break;case"YZX":this._x=d*h*u+l*c*f,this._y=l*c*u+d*h*f,this._z=l*h*f-d*c*u,this._w=l*h*u-d*c*f;break;case"XZY":this._x=d*h*u-l*c*f,this._y=l*c*u-d*h*f,this._z=l*h*f+d*c*u,this._w=l*h*u+d*c*f;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],u=t[10],d=i+s+u;if(d>0){let c=.5/Math.sqrt(d+1);this._w=.25/c,this._x=(h-o)*c,this._y=(a-l)*c,this._z=(n-r)*c}else if(i>s&&i>u){let c=2*Math.sqrt(1+i-s-u);this._w=(h-o)/c,this._x=.25*c,this._y=(r+n)/c,this._z=(a+l)/c}else if(s>u){let c=2*Math.sqrt(1+s-i-u);this._w=(a-l)/c,this._x=(r+n)/c,this._y=.25*c,this._z=(o+h)/c}else{let c=2*Math.sqrt(1+u-i-s);this._w=(n-r)/c,this._x=(a+l)/c,this._y=(o+h)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+n*s+r*l-a*o,this._y=r*h+n*o+a*s-i*l,this._z=a*h+n*l+i*o-r*s,this._w=n*h-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),h=Math.sin(l);o=Math.sin(o*l)/h,t=Math.sin(t*l)/h,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class Jl{static{Jl.prototype.isVector3=!0}constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Co.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Co.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,h=2*(s*a-o*r),u=2*(o*i-n*a),d=2*(n*r-s*i);return this.x=i+l*h+s*d-o*u,this.y=r+l*u+o*h-n*d,this.z=a+l*d+n*u-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Je(this.x,t.x,i.x),this.y=Je(this.y,t.y,i.y),this.z=Je(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Je(this.x,t,i),this.y=Je(this.y,t,i),this.z=Je(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Je(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return dn.copy(this).projectOnVector(t),this.sub(dn)}reflect(t){return this.sub(dn.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Je(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dn=new P,Co=new xi,We=class Kl{static{Kl.prototype.isMatrix3=!0}constructor(t,i,r,a,n,s,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h)}set(t,i,r,a,n,s,o,l,h){let u=this.elements;return u[0]=t,u[1]=a,u[2]=o,u[3]=i,u[4]=n,u[5]=l,u[6]=r,u[7]=s,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],h=r[1],u=r[4],d=r[7],c=r[2],f=r[5],x=r[8],y=a[0],g=a[3],p=a[6],b=a[1],w=a[4],v=a[7],T=a[2],A=a[5],R=a[8];return n[0]=s*y+o*b+l*T,n[3]=s*g+o*w+l*A,n[6]=s*p+o*v+l*R,n[1]=h*y+u*b+d*T,n[4]=h*g+u*w+d*A,n[7]=h*p+u*v+d*R,n[2]=c*y+f*b+x*T,n[5]=c*g+f*w+x*A,n[8]=c*p+f*v+x*R,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8];return i*s*u-i*o*h-r*n*u+r*o*l+a*n*h-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8],d=u*s-o*h,c=o*l-u*n,f=h*n-s*l,x=i*d+r*c+a*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return t[0]=d*y,t[1]=(a*h-u*r)*y,t[2]=(o*r-a*s)*y,t[3]=c*y,t[4]=(u*i-a*l)*y,t[5]=(a*n-o*i)*y,t[6]=f*y,t[7]=(r*l-h*i)*y,t[8]=(s*i-r*n)*y,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),h=Math.sin(n);return this.set(r*l,r*h,-r*(l*s+h*o)+s+t,-a*h,a*l,-a*(-h*s+l*o)+o+i,0,0,1),this}scale(t,i){return gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pn.makeScale(t,i)),this}rotate(t){return gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pn.makeRotation(-t)),this}translate(t,i){return gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pn.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},pn=new We,Ro=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Po=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _c(){let e={enabled:!0,workingColorSpace:Ya,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===nt&&(a.r=_i(a.r),a.g=_i(a.g),a.b=_i(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===nt&&(a.r=vr(a.r),a.g=vr(a.g),a.b=vr(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ai?Za:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return gr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return gr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ya]:{primaries:t,whitePoint:r,transfer:Za,toXYZ:Ro,fromXYZ:Po,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:t,whitePoint:r,transfer:nt,toXYZ:Ro,fromXYZ:Po,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),e}var et=_c();function _i(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function vr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Ji,vc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ji===void 0&&(Ji=Ja("canvas")),Ji.width=e.width,Ji.height=e.height;let r=Ji.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ji}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ja("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=_i(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_i(t[i]/255)*255):t[i]=_i(t[i]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},xc=0,Ys=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:xc++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(fn(r[n].image)):a.push(fn(r[n]))}else a=fn(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function fn(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?vc.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}var yc=0,mn=new P,Zt=class Ha extends Xi{constructor(t=Ha.DEFAULT_IMAGE,i=Ha.DEFAULT_MAPPING,r=fi,a=fi,n=At,s=Fi,o=Xt,l=Ot,h=Ha.DEFAULT_ANISOTROPY,u=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=ji(),this.name="",this.source=new Ys(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mn).x}get height(){return this.source.getSize(mn).y}get depth(){return this.source.getSize(mn).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Be(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Be(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kn:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case $n:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kn:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case $n:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=zl;Zt.DEFAULT_ANISOTROPY=1;var ct=class $l{static{$l.prototype.isVector4=!0}constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],h=s[8],u=s[1],d=s[5],c=s[9],f=s[2],x=s[6],y=s[10];if(Math.abs(l-u)<.01&&Math.abs(h-f)<.01&&Math.abs(c-x)<.01){if(Math.abs(l+u)<.1&&Math.abs(h+f)<.1&&Math.abs(c+x)<.1&&Math.abs(o+d+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let p=(o+1)/2,b=(d+1)/2,w=(y+1)/2,v=(l+u)/4,T=(h+f)/4,A=(c+x)/4;return p>b&&p>w?p<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(p),a=v/r,n=T/r):b>w?b<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(b),r=v/a,n=A/a):w<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(w),r=T/n,a=A/n),this.set(r,a,n,i),this}let g=Math.sqrt((x-c)*(x-c)+(h-f)*(h-f)+(u-l)*(u-l));return Math.abs(g)<.001&&(g=1),this.x=(x-c)/g,this.y=(h-f)/g,this.z=(u-l)/g,this.w=Math.acos((o+d+y-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Je(this.x,t.x,i.x),this.y=Je(this.y,t.y,i.y),this.z=Je(this.z,t.z,i.z),this.w=Je(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Je(this.x,t,i),this.y=Je(this.y,t,i),this.z=Je(this.z,t,i),this.w=Je(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Je(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sc=class extends Xi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new Zt(r),n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ys(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends Sc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ql=class extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Mc=class extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ke=class Is{static{Is.prototype.isMatrix4=!0}constructor(t,i,r,a,n,s,o,l,h,u,d,c,f,x,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,h,u,d,c,f,x,y,g)}set(t,i,r,a,n,s,o,l,h,u,d,c,f,x,y,g){let p=this.elements;return p[0]=t,p[4]=i,p[8]=r,p[12]=a,p[1]=n,p[5]=s,p[9]=o,p[13]=l,p[2]=h,p[6]=u,p[10]=d,p[14]=c,p[3]=f,p[7]=x,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Is().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/Ki.setFromMatrixColumn(t,0).length(),n=1/Ki.setFromMatrixColumn(t,1).length(),s=1/Ki.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),h=Math.sin(a),u=Math.cos(n),d=Math.sin(n);if(t.order==="XYZ"){let c=s*u,f=s*d,x=o*u,y=o*d;i[0]=l*u,i[4]=-l*d,i[8]=h,i[1]=f+x*h,i[5]=c-y*h,i[9]=-o*l,i[2]=y-c*h,i[6]=x+f*h,i[10]=s*l}else if(t.order==="YXZ"){let c=l*u,f=l*d,x=h*u,y=h*d;i[0]=c+y*o,i[4]=x*o-f,i[8]=s*h,i[1]=s*d,i[5]=s*u,i[9]=-o,i[2]=f*o-x,i[6]=y+c*o,i[10]=s*l}else if(t.order==="ZXY"){let c=l*u,f=l*d,x=h*u,y=h*d;i[0]=c-y*o,i[4]=-s*d,i[8]=x+f*o,i[1]=f+x*o,i[5]=s*u,i[9]=y-c*o,i[2]=-s*h,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let c=s*u,f=s*d,x=o*u,y=o*d;i[0]=l*u,i[4]=x*h-f,i[8]=c*h+y,i[1]=l*d,i[5]=y*h+c,i[9]=f*h-x,i[2]=-h,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let c=s*l,f=s*h,x=o*l,y=o*h;i[0]=l*u,i[4]=y-c*d,i[8]=x*d+f,i[1]=d,i[5]=s*u,i[9]=-o*u,i[2]=-h*u,i[6]=f*d+x,i[10]=c-y*d}else if(t.order==="XZY"){let c=s*l,f=s*h,x=o*l,y=o*h;i[0]=l*u,i[4]=-d,i[8]=h*u,i[1]=c*d+y,i[5]=s*u,i[9]=f*d-x,i[2]=x*d-f,i[6]=o*u,i[10]=y*d+c}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bc,t,Tc)}lookAt(t,i,r){let a=this.elements;return Ut.subVectors(t,i),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Mi.crossVectors(r,Ut),Mi.lengthSq()===0&&(Math.abs(r.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Mi.crossVectors(r,Ut)),Mi.normalize(),ha.crossVectors(Ut,Mi),a[0]=Mi.x,a[4]=ha.x,a[8]=Ut.x,a[1]=Mi.y,a[5]=ha.y,a[9]=Ut.y,a[2]=Mi.z,a[6]=ha.z,a[10]=Ut.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],h=r[12],u=r[1],d=r[5],c=r[9],f=r[13],x=r[2],y=r[6],g=r[10],p=r[14],b=r[3],w=r[7],v=r[11],T=r[15],A=a[0],R=a[4],_=a[8],M=a[12],F=a[1],I=a[5],O=a[9],q=a[13],D=a[2],G=a[6],J=a[10],k=a[14],ue=a[3],X=a[7],Z=a[11],K=a[15];return n[0]=s*A+o*F+l*D+h*ue,n[4]=s*R+o*I+l*G+h*X,n[8]=s*_+o*O+l*J+h*Z,n[12]=s*M+o*q+l*k+h*K,n[1]=u*A+d*F+c*D+f*ue,n[5]=u*R+d*I+c*G+f*X,n[9]=u*_+d*O+c*J+f*Z,n[13]=u*M+d*q+c*k+f*K,n[2]=x*A+y*F+g*D+p*ue,n[6]=x*R+y*I+g*G+p*X,n[10]=x*_+y*O+g*J+p*Z,n[14]=x*M+y*q+g*k+p*K,n[3]=b*A+w*F+v*D+T*ue,n[7]=b*R+w*I+v*G+T*X,n[11]=b*_+w*O+v*J+T*Z,n[15]=b*M+w*q+v*k+T*K,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],h=t[13],u=t[2],d=t[6],c=t[10],f=t[14],x=t[3],y=t[7],g=t[11],p=t[15],b=l*f-h*c,w=o*f-h*d,v=o*c-l*d,T=s*f-h*u,A=s*c-l*u,R=s*d-o*u;return i*(y*b-g*w+p*v)-r*(x*b-g*T+p*A)+a*(x*w-y*T+p*R)-n*(x*v-y*A+g*R)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],h=t[6],u=t[10];return i*(s*u-o*h)-r*(n*u-o*l)+a*(n*h-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],h=t[7],u=t[8],d=t[9],c=t[10],f=t[11],x=t[12],y=t[13],g=t[14],p=t[15],b=i*o-r*s,w=i*l-a*s,v=i*h-n*s,T=r*l-a*o,A=r*h-n*o,R=a*h-n*l,_=u*y-d*x,M=u*g-c*x,F=u*p-f*x,I=d*g-c*y,O=d*p-f*y,q=c*p-f*g,D=b*q-w*O+v*I+T*F-A*M+R*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/D;return t[0]=(o*q-l*O+h*I)*G,t[1]=(a*O-r*q-n*I)*G,t[2]=(y*R-g*A+p*T)*G,t[3]=(c*A-d*R-f*T)*G,t[4]=(l*F-s*q-h*M)*G,t[5]=(i*q-a*F+n*M)*G,t[6]=(g*v-x*R-p*w)*G,t[7]=(u*R-c*v+f*w)*G,t[8]=(s*O-o*F+h*_)*G,t[9]=(r*F-i*O-n*_)*G,t[10]=(x*A-y*v+p*b)*G,t[11]=(d*v-u*A-f*b)*G,t[12]=(o*M-s*I-l*_)*G,t[13]=(i*I-r*M+a*_)*G,t[14]=(y*w-x*T-g*b)*G,t[15]=(u*T-d*w+c*b)*G,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,h=n*s,u=n*o;return this.set(h*s+r,h*o-a*l,h*l+a*o,0,h*o+a*l,u*o+r,u*l-a*s,0,h*l-a*o,u*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,h=n+n,u=s+s,d=o+o,c=n*h,f=n*u,x=n*d,y=s*u,g=s*d,p=o*d,b=l*h,w=l*u,v=l*d,T=r.x,A=r.y,R=r.z;return a[0]=(1-(y+p))*T,a[1]=(f+v)*T,a[2]=(x-w)*T,a[3]=0,a[4]=(f-v)*A,a[5]=(1-(c+p))*A,a[6]=(g+b)*A,a[7]=0,a[8]=(x+w)*R,a[9]=(g-b)*R,a[10]=(1-(c+y))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=Ki.set(a[0],a[1],a[2]).length(),o=Ki.set(a[4],a[5],a[6]).length(),l=Ki.set(a[8],a[9],a[10]).length();n<0&&(s=-s),Vt.copy(this);let h=1/s,u=1/o,d=1/l;return Vt.elements[0]*=h,Vt.elements[1]*=h,Vt.elements[2]*=h,Vt.elements[4]*=u,Vt.elements[5]*=u,Vt.elements[6]*=u,Vt.elements[8]*=d,Vt.elements[9]*=d,Vt.elements[10]*=d,i.setFromRotationMatrix(Vt),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=jt,l=!1){let h=this.elements,u=2*n/(i-t),d=2*n/(r-a),c=(i+t)/(i-t),f=(r+a)/(r-a),x,y;if(l)x=n/(s-n),y=s*n/(s-n);else if(o===jt)x=-(s+n)/(s-n),y=-2*s*n/(s-n);else if(o===jr)x=-s/(s-n),y=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=c,h[12]=0,h[1]=0,h[5]=d,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=y,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=jt,l=!1){let h=this.elements,u=2/(i-t),d=2/(r-a),c=-(i+t)/(i-t),f=-(r+a)/(r-a),x,y;if(l)x=1/(s-n),y=s/(s-n);else if(o===jt)x=-2/(s-n),y=-(s+n)/(s-n);else if(o===jr)x=-1/(s-n),y=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=0,h[12]=c,h[1]=0,h[5]=d,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=x,h[14]=y,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},Ki=new P,Vt=new Ke,bc=new P(0,0,0),Tc=new P(1,1,1),Mi=new P,ha=new P,Ut=new P,Io=new Ke,Lo=new xi,Sr=class eh{constructor(t=0,i=0,r=0,a=eh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],h=a[5],u=a[9],d=a[2],c=a[6],f=a[10];switch(i){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,f),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Je(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Io.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Io,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Lo.setFromEuler(this),this.setFromQuaternion(Lo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sr.DEFAULT_ORDER="XYZ";var Zs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ec=0,Do=new P,$i=new xi,hi=new Ke,ua=new P,Pr=new P,wc=new P,Ac=new xi,Uo=new P(1,0,0),No=new P(0,1,0),Oo=new P(0,0,1),Fo={type:"added"},Cc={type:"removed"},Qi={type:"childadded",child:null},gn={type:"childremoved",child:null},Gt=class ka extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ka.DEFAULT_UP.clone();let t=new P,i=new Sr,r=new xi,a=new P(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ke},normalMatrix:{value:new We}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=ka.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ka.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return $i.setFromAxisAngle(t,i),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,i){return $i.setFromAxisAngle(t,i),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(Uo,t)}rotateY(t){return this.rotateOnAxis(No,t)}rotateZ(t){return this.rotateOnAxis(Oo,t)}translateOnAxis(t,i){return Do.copy(t).applyQuaternion(this.quaternion),this.position.add(Do.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Uo,t)}translateY(t){return this.translateOnAxis(No,t)}translateZ(t){return this.translateOnAxis(Oo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?ua.copy(t):ua.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Pr,ua,this.up):hi.lookAt(ua,Pr,this.up),this.quaternion.setFromRotationMatrix(hi),a&&(hi.extractRotation(a.matrixWorld),$i.setFromRotationMatrix(hi),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ve("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fo),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Cc),gn.child=t,this.dispatchEvent(gn),gn.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fo),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,t,wc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,Ac,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let d=l[h];n(t.shapes,d)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),h=s(t.textures),u=s(t.images),d=s(t.shapes),c=s(t.skeletons),f=s(t.animations),x=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),c.length>0&&(r.skeletons=c),f.length>0&&(r.animations=f),x.length>0&&(r.nodes=x)}return r.object=a,r;function s(o){let l=[];for(let h in o){let u=o[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Gt.DEFAULT_UP=new P(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mi=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rc={type:"move"},_n=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let x of e.hand.values()){let y=t.getJointPose(x,i),g=this._getHandJoint(l,x);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),c=.02,f=.005;l.inputState.pinching&&d>c+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=c-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Rc)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new mi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},ca={h:0,s:0,l:0};function vn(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var $e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=qs(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=vn(n,a,e+1/3),this.g=vn(n,a,e),this.b=vn(n,a,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,t=It){function i(a){a!==void 0&&parseFloat(a)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let i=th[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return et.workingToColorSpace(wt.copy(this),e),Math.round(Je(wt.r*255,0,255))*65536+Math.round(Je(wt.g*255,0,255))*256+Math.round(Je(wt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(wt.copy(this),t);let i=wt.r,r=wt.g,a=wt.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,h=(s+n)/2;if(s===n)o=0,l=0;else{let u=n-s;switch(l=h<=.5?u/(n+s):u/(2-n-s),n){case i:o=(r-a)/u+(r<a?6:0);break;case r:o=(a-i)/u+2;break;case a:o=(i-r)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=It){et.workingToColorSpace(wt.copy(this),e);let t=wt.r,i=wt.g,r=wt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(ca);let i=zr(bi.h,ca.h,t),r=zr(bi.s,ca.s,t),a=zr(bi.l,ca.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wt=new $e;$e.NAMES=th;var ih=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sr,this.environmentIntensity=1,this.environmentRotation=new Sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ht=new P,ui=new P,xn=new P,ci=new P,er=new P,tr=new P,Bo=new P,yn=new P,Sn=new P,Mn=new P,bn=new ct,Tn=new ct,En=new ct,dr=class pr{constructor(t=new P,i=new P,r=new P){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),Ht.subVectors(t,i),a.cross(Ht);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){Ht.subVectors(a,i),ui.subVectors(r,i),xn.subVectors(t,i);let s=Ht.dot(Ht),o=Ht.dot(ui),l=Ht.dot(xn),h=ui.dot(ui),u=ui.dot(xn),d=s*h-o*o;if(d===0)return n.set(0,0,0),null;let c=1/d,f=(h*l-o*u)*c,x=(s*u-o*l)*c;return n.set(1-f-x,x,f)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,ci.x),l.addScaledVector(s,ci.y),l.addScaledVector(o,ci.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return bn.setScalar(0),Tn.setScalar(0),En.setScalar(0),bn.fromBufferAttribute(t,i),Tn.fromBufferAttribute(t,r),En.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(bn,n.x),s.addScaledVector(Tn,n.y),s.addScaledVector(En,n.z),s}static isFrontFacing(t,i,r,a){return Ht.subVectors(r,i),ui.subVectors(t,i),Ht.cross(ui).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ht.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Ht.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return pr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return pr.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return pr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;er.subVectors(a,r),tr.subVectors(n,r),yn.subVectors(t,r);let l=er.dot(yn),h=tr.dot(yn);if(l<=0&&h<=0)return i.copy(r);Sn.subVectors(t,a);let u=er.dot(Sn),d=tr.dot(Sn);if(u>=0&&d<=u)return i.copy(a);let c=l*d-u*h;if(c<=0&&l>=0&&u<=0)return s=l/(l-u),i.copy(r).addScaledVector(er,s);Mn.subVectors(t,n);let f=er.dot(Mn),x=tr.dot(Mn);if(x>=0&&f<=x)return i.copy(n);let y=f*h-l*x;if(y<=0&&h>=0&&x<=0)return o=h/(h-x),i.copy(r).addScaledVector(tr,o);let g=u*x-f*d;if(g<=0&&d-u>=0&&f-x>=0)return Bo.subVectors(n,a),o=(d-u)/(d-u+(f-x)),i.copy(a).addScaledVector(Bo,o);let p=1/(g+y+c);return s=y*p,o=c*p,i.copy(r).addScaledVector(er,s).addScaledVector(tr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ci=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,kt):kt.fromBufferAttribute(a,n),kt.applyMatrix4(e.matrixWorld),this.expandByPoint(kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),da.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),da.copy(i.boundingBox)),da.applyMatrix4(e.matrixWorld),this.union(da)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kt),kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),pa.subVectors(this.max,Ir),ir.subVectors(e.a,Ir),rr.subVectors(e.b,Ir),ar.subVectors(e.c,Ir),Ti.subVectors(rr,ir),Ei.subVectors(ar,rr),Li.subVectors(ir,ar);let t=[0,-Ti.z,Ti.y,0,-Ei.z,Ei.y,0,-Li.z,Li.y,Ti.z,0,-Ti.x,Ei.z,0,-Ei.x,Li.z,0,-Li.x,-Ti.y,Ti.x,0,-Ei.y,Ei.x,0,-Li.y,Li.x,0];return!wn(t,ir,rr,ar,pa)||(t=[1,0,0,0,1,0,0,0,1],!wn(t,ir,rr,ar,pa))?!1:(fa.crossVectors(Ti,Ei),t=[fa.x,fa.y,fa.z],wn(t,ir,rr,ar,pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},di=[new P,new P,new P,new P,new P,new P,new P,new P],kt=new P,da=new Ci,ir=new P,rr=new P,ar=new P,Ti=new P,Ei=new P,Li=new P,Ir=new P,pa=new P,fa=new P,Di=new P;function wn(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){Di.fromArray(e,n);let o=a.x*Math.abs(Di.x)+a.y*Math.abs(Di.y)+a.z*Math.abs(Di.z),l=t.dot(Di),h=i.dot(Di),u=r.dot(Di);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}var y_=Pc();function Pc(){let e=new ArrayBuffer(4),t=new Float32Array(e),i=new Uint32Array(e),r=new Uint32Array(512),a=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(r[l]=0,r[l|256]=32768,a[l]=24,a[l|256]=24):h<-14?(r[l]=1024>>-h-14,r[l|256]=1024>>-h-14|32768,a[l]=-h-1,a[l|256]=-h-1):h<=15?(r[l]=h+15<<10,r[l|256]=h+15<<10|32768,a[l]=13,a[l|256]=13):h<128?(r[l]=31744,r[l|256]=64512,a[l]=24,a[l|256]=24):(r[l]=31744,r[l|256]=64512,a[l]=13,a[l|256]=13)}let n=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,u=0;for(;!(h&8388608);)h<<=1,u-=8388608;h&=-8388609,u+=947912704,n[l]=h|u}for(let l=1024;l<2048;++l)n[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:i,baseTable:r,shiftTable:a,mantissaTable:n,exponentTable:s,offsetTable:o}}var xt=new P,ma=new le,Ic=0,Yt=class extends Xi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ic++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zu,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=cr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),r=Rt(r,this.array),a=Rt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var rh=class extends Yt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ah=class extends Yt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ke=class extends Yt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Lc=new Ci,Lr=new P,An=new P,Ri=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Lc.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);let t=Lr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Lr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(An.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(An)),this.expandByPoint(Lr.copy(e.center).sub(An))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Dc=0,Bt=new Ke,Cn=new Gt,nr=new P,Nt=new Ci,Dr=new Ci,bt=new P,dt=class nh extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ju(t)?ah:rh)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new We().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Bt.makeRotationFromQuaternion(t),this.applyMatrix4(Bt),this}rotateX(t){return Bt.makeRotationX(t),this.applyMatrix4(Bt),this}rotateY(t){return Bt.makeRotationY(t),this.applyMatrix4(Bt),this}rotateZ(t){return Bt.makeRotationZ(t),this.applyMatrix4(Bt),this}translate(t,i,r){return Bt.makeTranslation(t,i,r),this.applyMatrix4(Bt),this}scale(t,i,r){return Bt.makeScale(t,i,r),this.applyMatrix4(Bt),this}lookAt(t){return Cn.lookAt(t),Cn.updateMatrix(),this.applyMatrix4(Cn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ke(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];Nt.setFromBufferAttribute(n),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let r=this.boundingSphere.center;if(Nt.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Nt.min,Dr.min),Nt.expandByPoint(bt),bt.addVectors(Nt.max,Dr.max),Nt.expandByPoint(bt)):(Nt.expandByPoint(Dr.min),Nt.expandByPoint(Dr.max))}Nt.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)bt.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(bt));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)bt.fromBufferAttribute(o,h),l&&(nr.fromBufferAttribute(t,h),bt.add(nr)),a=Math.max(a,r.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new Yt(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let _=0;_<r.count;_++)o[_]=new P,l[_]=new P;let h=new P,u=new P,d=new P,c=new le,f=new le,x=new le,y=new P,g=new P;function p(_,M,F){h.fromBufferAttribute(r,_),u.fromBufferAttribute(r,M),d.fromBufferAttribute(r,F),c.fromBufferAttribute(n,_),f.fromBufferAttribute(n,M),x.fromBufferAttribute(n,F),u.sub(h),d.sub(h),f.sub(c),x.sub(c);let I=1/(f.x*x.y-x.x*f.y);isFinite(I)&&(y.copy(u).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(I),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-x.x).multiplyScalar(I),o[_].add(y),o[M].add(y),o[F].add(y),l[_].add(g),l[M].add(g),l[F].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let _=0,M=b.length;_<M;++_){let F=b[_],I=F.start,O=F.count;for(let q=I,D=I+O;q<D;q+=3)p(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let w=new P,v=new P,T=new P,A=new P;function R(_){T.fromBufferAttribute(a,_),A.copy(T);let M=o[_];w.copy(M),w.sub(T.multiplyScalar(T.dot(M))).normalize(),v.crossVectors(A,M);let F=v.dot(l[_])<0?-1:1;s.setXYZW(_,w.x,w.y,w.z,F)}for(let _=0,M=b.length;_<M;++_){let F=b[_],I=F.start,O=F.count;for(let q=I,D=I+O;q<D;q+=3)R(t.getX(q+0)),R(t.getX(q+1)),R(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Yt(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let c=0,f=r.count;c<f;c++)r.setXYZ(c,0,0,0);let a=new P,n=new P,s=new P,o=new P,l=new P,h=new P,u=new P,d=new P;if(t)for(let c=0,f=t.count;c<f;c+=3){let x=t.getX(c+0),y=t.getX(c+1),g=t.getX(c+2);a.fromBufferAttribute(i,x),n.fromBufferAttribute(i,y),s.fromBufferAttribute(i,g),u.subVectors(s,n),d.subVectors(a,n),u.cross(d),o.fromBufferAttribute(r,x),l.fromBufferAttribute(r,y),h.fromBufferAttribute(r,g),o.add(u),l.add(u),h.add(u),r.setXYZ(x,o.x,o.y,o.z),r.setXYZ(y,l.x,l.y,l.z),r.setXYZ(g,h.x,h.y,h.z)}else for(let c=0,f=i.count;c<f;c+=3)a.fromBufferAttribute(i,c+0),n.fromBufferAttribute(i,c+1),s.fromBufferAttribute(i,c+2),u.subVectors(s,n),d.subVectors(a,n),u.cross(d),r.setXYZ(c+0,u.x,u.y,u.z),r.setXYZ(c+1,u.x,u.y,u.z),r.setXYZ(c+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)bt.fromBufferAttribute(t,i),bt.normalize(),t.setXYZ(i,bt.x,bt.y,bt.z)}toNonIndexed(){function t(o,l){let h=o.array,u=o.itemSize,d=o.normalized,c=new h.constructor(l.length*u),f=0,x=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let p=0;p<u;p++)c[x++]=h[f++]}return new Yt(c,u,d)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new nh,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],h=t(l,r);i.setAttribute(o,h)}let n=this.morphAttributes;for(let o in n){let l=[],h=n[o];for(let u=0,d=h.length;u<d;u++){let c=h[u],f=t(c,r);l.push(f)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];t.data.attributes[l]=h.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let d=0,c=h.length;d<c;d++){let f=h[d];u.push(f.toJSON(t.data))}u.length>0&&(a[l]=u,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let h in a){let u=a[h];this.setAttribute(h,u.clone(i))}let n=t.morphAttributes;for(let h in n){let u=[],d=n[h];for(let c=0,f=d.length;c<f;c++)u.push(d[c].clone(i));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let h=0,u=s.length;h<u;h++){let d=s[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var S_=new P;var Rn=new P,Uc=new P,Nc=new We,ei=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Rn.subVectors(i,t).cross(Uc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Rn),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Nc.getNormalMatrix(e),r=this.coplanarPoint(Rn).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Oc=0,Er=class extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=Gi,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Il,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cn,this.stencilZFail=cn,this.stencilZPass=cn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ei().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new le().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var M_=new P,b_=new P,T_=new P,E_=new le,w_=new le,A_=new Ke,C_=new P,R_=new P,P_=new P,I_=new le,L_=new le,D_=new le;var U_=new P,N_=new P;var pi=new P,Pn=new P,ga=new P,_a=new P,$r=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Pn.copy(e).add(t).multiplyScalar(.5),ga.copy(t).sub(e).normalize(),_a.copy(this.origin).sub(Pn);let a=e.distanceTo(t)*.5,n=-this.direction.dot(ga),s=_a.dot(this.direction),o=-_a.dot(ga),l=_a.lengthSq(),h=Math.abs(1-n*n),u,d,c,f;if(h>0)if(u=n*o-s,d=n*s-o,f=a*h,u>=0)if(d>=-f)if(d<=f){let x=1/h;u*=x,d*=x,c=u*(u+n*d+2*s)+d*(n*u+d+2*o)+l}else d=a,u=Math.max(0,-(n*d+s)),c=-u*u+d*(d+2*o)+l;else d=-a,u=Math.max(0,-(n*d+s)),c=-u*u+d*(d+2*o)+l;else d<=-f?(u=Math.max(0,-(-n*a+s)),d=u>0?-a:Math.min(Math.max(-a,-o),a),c=-u*u+d*(d+2*o)+l):d<=f?(u=0,d=Math.min(Math.max(-a,-o),a),c=d*(d+2*o)+l):(u=Math.max(0,-(n*a+s)),d=u>0?a:Math.min(Math.max(-a,-o),a),c=-u*u+d*(d+2*o)+l);else d=n>0?-a:a,u=Math.max(0,-(n*d+s)),c=-u*u+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Pn).addScaledVector(ga,d),c}intersectSphere(e,t){if(e.radius<0)return null;pi.subVectors(e.center,this.origin);let i=pi.dot(this.direction),r=pi.dot(pi)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(a=(e.min.y-d.y)*h,n=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,n=(e.min.y-d.y)*h),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),u>=0?(s=(e.min.z-d.z)*u,o=(e.max.z-d.z)*u):(s=(e.max.z-d.z)*u,o=(e.min.z-d.z)*u),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,l=s.y,h=s.z,u=e.x-n.x,d=e.y-n.y,c=e.z-n.z,f=t.x-n.x,x=t.y-n.y,y=t.z-n.z,g=i.x-n.x,p=i.y-n.y,b=i.z-n.z,w=Math.abs(o),v=Math.abs(l),T=Math.abs(h),A,R,_,M,F,I,O,q,D,G,J,k;if(w>=v&&w>=T?(_=o,I=u,D=f,k=g,o>=0?(A=l,R=h,M=d,F=c,O=x,q=y,G=p,J=b):(A=h,R=l,M=c,F=d,O=y,q=x,G=b,J=p)):v>=T?(_=l,I=d,D=x,k=p,l>=0?(A=h,R=o,M=c,F=u,O=y,q=f,G=b,J=g):(A=o,R=h,M=u,F=c,O=f,q=y,G=g,J=b)):(_=h,I=c,D=y,k=b,h>=0?(A=o,R=l,M=u,F=d,O=f,q=x,G=g,J=p):(A=l,R=o,M=d,F=u,O=x,q=f,G=p,J=g)),_===0)return null;let ue=A/_,X=R/_,Z=1/_,K=M-ue*I,Fe=F-X*I,Me=O-ue*D,it=q-X*D,Ue=G-ue*k,Y=J-X*k,ne=Ue*it-Y*Me,oe=K*Y-Fe*Ue,Re=Me*Fe-it*K;if(r){if(ne<0||oe<0||Re<0)return null}else if((ne<0||oe<0||Re<0)&&(ne>0||oe>0||Re>0))return null;let Ne=ne+oe+Re;if(Ne===0)return null;let fe=Z*(ne*I+oe*D+Re*k);return(Ne>0?fe<0:fe>0)?null:this.at(fe/Ne,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wr=class extends Er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},zo=new Ke,Ui=new $r,va=new Ri,Go=new P,xa=new P,ya=new P,Sa=new P,In=new P,Ma=new P,Vo=new P,ba=new P,gt=class extends Gt{constructor(e=new dt,t=new wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){Ma.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let h=s[o],u=a[o];h!==0&&(In.fromBufferAttribute(u,e),n?Ma.addScaledVector(In,h):Ma.addScaledVector(In.sub(t),h))}t.add(Ma)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(a),Ui.copy(e.ray).recast(e.near),!(va.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(va,Go)===null||Ui.origin.distanceToSquared(Go)>(e.far-e.near)**2))&&(zo.copy(a).invert(),Ui.copy(e.ray).applyMatrix4(zo),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,c=a.drawRange;if(s!==null)if(Array.isArray(n))for(let f=0,x=d.length;f<x;f++){let y=d[f],g=n[y.materialIndex],p=Math.max(y.start,c.start),b=Math.min(s.count,Math.min(y.start+y.count,c.start+c.count));for(let w=p,v=b;w<v;w+=3){let T=s.getX(w),A=s.getX(w+1),R=s.getX(w+2);r=Ta(this,g,e,i,l,h,u,T,A,R),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let f=Math.max(0,c.start),x=Math.min(s.count,c.start+c.count);for(let y=f,g=x;y<g;y+=3){let p=s.getX(y),b=s.getX(y+1),w=s.getX(y+2);r=Ta(this,n,e,i,l,h,u,p,b,w),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let f=0,x=d.length;f<x;f++){let y=d[f],g=n[y.materialIndex],p=Math.max(y.start,c.start),b=Math.min(o.count,Math.min(y.start+y.count,c.start+c.count));for(let w=p,v=b;w<v;w+=3){let T=w,A=w+1,R=w+2;r=Ta(this,g,e,i,l,h,u,T,A,R),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{let f=Math.max(0,c.start),x=Math.min(o.count,c.start+c.count);for(let y=f,g=x;y<g;y+=3){let p=y,b=y+1,w=y+2;r=Ta(this,n,e,i,l,h,u,p,b,w),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}};function Fc(e,t,i,r,a,n,s,o){let l;if(t.side===Dt?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===Vi,o),l===null)return null;ba.copy(o),ba.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(ba);return h<i.near||h>i.far?null:{distance:h,point:ba.clone(),object:e}}function Ta(e,t,i,r,a,n,s,o,l,h){e.getVertexPosition(o,xa),e.getVertexPosition(l,ya),e.getVertexPosition(h,Sa);let u=Fc(e,t,i,r,xa,ya,Sa,Vo);if(u){let d=new P;dr.getBarycoord(Vo,xa,ya,Sa,d),a&&(u.uv=dr.getInterpolatedAttribute(a,o,l,h,d,new le)),n&&(u.uv1=dr.getInterpolatedAttribute(n,o,l,h,d,new le)),s&&(u.normal=dr.getInterpolatedAttribute(s,o,l,h,d,new P),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let c={a:o,b:l,c:h,normal:new P,materialIndex:0};dr.getNormal(xa,ya,Sa,c.normal),u.face=c,u.barycoord=d}return u}var O_=new ct,F_=new ct,B_=new ct,z_=new ct,G_=new Ke,V_=new P,H_=new Ri,k_=new Ke,W_=new $r;var Bc=class extends Zt{constructor(e=null,t=1,i=1,r,a,n,s,o,l=Tt,h=Tt,u,d){super(null,n,s,o,l,h,r,a,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},X_=new Ke,j_=new Ke;var q_=new Ke,Y_=new Ke;var Z_=new Ci,J_=new Ke,K_=new gt,$_=new Ri;var Ni=new Ri,zc=new le(.5,.5),Ea=new P,Mr=class{constructor(e=new ei,t=new ei,i=new ei,r=new ei,a=new ei,n=new ei){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=jt,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],h=a[4],u=a[5],d=a[6],c=a[7],f=a[8],x=a[9],y=a[10],g=a[11],p=a[12],b=a[13],w=a[14],v=a[15];if(r[0].setComponents(l-n,c-h,g-f,v-p).normalize(),r[1].setComponents(l+n,c+h,g+f,v+p).normalize(),r[2].setComponents(l+s,c+u,g+x,v+b).normalize(),r[3].setComponents(l-s,c-u,g-x,v-b).normalize(),i)r[4].setComponents(o,d,y,w).normalize(),r[5].setComponents(l-o,c-d,g-y,v-w).normalize();else if(r[4].setComponents(l-o,c-d,g-y,v-w).normalize(),t===jt)r[5].setComponents(l+o,c+d,g+y,v+w).normalize();else if(t===jr)r[5].setComponents(o,d,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){Ni.center.set(0,0,0);let t=zc.distanceTo(e.center);return Ni.radius=.7071067811865476+t,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Ea.x=r.normal.x>0?e.max.x:e.min.x,Ea.y=r.normal.y>0?e.max.y:e.min.y,Ea.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ho=new Ke,Gc=class sh{constructor(){this.coordinateSystem=jt,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,r=this._frustums;for(let a=0;a<i.length;a++){let n=i[a];Ho.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),r[a]===void 0&&(r[a]=new Mr),r[a].setFromProjectionMatrix(Ho,n.coordinateSystem,n.reversedDepth)}return this._count=i.length,this}intersectsObject(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,r=t._frustums;for(let a=0;a<t._count;a++)i[a]===void 0&&(i[a]=new Mr),i[a].copy(r[a]);return this._count=t._count,this}clone(){return new sh().copy(this)}};var Vc=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let a=this.pool,n=this.list;this.index>=a.length&&a.push({start:-1,count:-1,z:-1,index:-1});let s=a[this.index];n.push(s),this.index++,s.start=e,s.count=t,s.z=i,s.index=r}reset(){this.list.length=0,this.index=0}},Q_=new Ke,ev=new $e(1,1,1),tv=new Mr,iv=new Gc,rv=new Ci,av=new Ri,nv=new P,sv=new P,ov=new P,lv=new Vc,hv=new gt;var uv=new P,cv=new P,dv=new Ke,pv=new $r,fv=new Ri,mv=new P,gv=new P;var _v=new P,vv=new P;var Js=class extends Er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ko=new Ke,Ls=new $r,wa=new Ri,Aa=new P,oh=class extends Gt{constructor(e=new dt,t=new Js){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(r),wa.radius+=a,e.ray.intersectsSphere(wa)===!1)return;ko.copy(r).invert(),Ls.copy(e.ray).applyMatrix4(ko);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=i.index,h=i.attributes.position;if(l!==null){let u=Math.max(0,n.start),d=Math.min(l.count,n.start+n.count);for(let c=u,f=d;c<f;c++){let x=l.getX(c);Aa.fromBufferAttribute(h,x),Wo(Aa,x,o,r,e,t,this)}}else{let u=Math.max(0,n.start),d=Math.min(h.count,n.start+n.count);for(let c=u,f=d;c<f;c++)Aa.fromBufferAttribute(h,c),Wo(Aa,c,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function Wo(e,t,i,r,a,n,s){let o=Ls.distanceSqToPoint(e);if(o<i){let l=new P;Ls.closestPointToPoint(e,l),l.applyMatrix4(r);let h=a.ray.origin.distanceTo(l);if(h<a.near||h>a.far)return;n.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var lh=class extends Zt{constructor(e=[],t=Hi,i,r,a,n,s,o,l,h){super(e,t,i,r,a,n,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Yr=class extends Zt{constructor(e,t,i=ai,r,a,n,s=Tt,o=Tt,l,h=vi,u=1){if(h!==vi&&h!==Bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,r,a,n,s,o,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ys(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Hc=class extends Yr{constructor(e,t=ai,i=Hi,r,a,n=Tt,s=Tt,o,l=vi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,r,a,n,s,o,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},hh=class extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},qi=class uh extends dt{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],h=[],u=[],d=[],c=0,f=0;x("z","y","x",-1,-1,r,i,t,s,n,0),x("z","y","x",1,-1,r,i,-t,s,n,1),x("x","z","y",1,1,t,r,i,a,s,2),x("x","z","y",1,-1,t,r,-i,a,s,3),x("x","y","z",1,-1,t,i,r,a,n,4),x("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(d,2));function x(y,g,p,b,w,v,T,A,R,_,M){let F=v/R,I=T/_,O=v/2,q=T/2,D=A/2,G=R+1,J=_+1,k=0,ue=0,X=new P;for(let Z=0;Z<J;Z++){let K=Z*I-q;for(let Fe=0;Fe<G;Fe++){let Me=Fe*F-O;X[y]=Me*b,X[g]=K*w,X[p]=D,h.push(X.x,X.y,X.z),X[y]=0,X[g]=0,X[p]=A>0?1:-1,u.push(X.x,X.y,X.z),d.push(Fe/R),d.push(1-Z/_),k+=1}}for(let Z=0;Z<_;Z++)for(let K=0;K<R;K++){let Fe=c+K+G*Z,Me=c+K+G*(Z+1),it=c+(K+1)+G*(Z+1),Ue=c+(K+1)+G*Z;l.push(Fe,Me,Ue),l.push(Me,it,Ue),ue+=6}o.addGroup(f,ue,M),f+=ue,c+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uh(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},kc=class ch extends dt{constructor(t=1,i=1,r=4,a=8,n=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:r,radialSegments:a,heightSegments:n},i=Math.max(0,i),r=Math.max(1,Math.floor(r)),a=Math.max(3,Math.floor(a)),n=Math.max(1,Math.floor(n));let s=[],o=[],l=[],h=[],u=i/2,d=Math.PI/2*t,c=i,f=2*d+c,x=r*2+n,y=a+1,g=new P,p=new P;for(let b=0;b<=x;b++){let w=0,v=0,T=0,A=0;if(b<=r){let M=b/r,F=M*Math.PI/2;v=-u-t*Math.cos(F),T=t*Math.sin(F),A=-t*Math.cos(F),w=M*d}else if(b<=r+n){let M=(b-r)/n;v=-u+M*i,T=t,A=0,w=d+M*c}else{let M=(b-r-n)/r,F=M*Math.PI/2;v=u+t*Math.sin(F),T=t*Math.cos(F),A=t*Math.sin(F),w=d+c+M*d}let R=Math.max(0,Math.min(1,w/f)),_=0;b===0?_=.5/a:b===x&&(_=-.5/a);for(let M=0;M<=a;M++){let F=M/a,I=F*Math.PI*2,O=Math.sin(I),q=Math.cos(I);p.x=-T*q,p.y=v,p.z=T*O,o.push(p.x,p.y,p.z),g.set(-T*q,A,T*O),g.normalize(),l.push(g.x,g.y,g.z),h.push(F+_,R)}if(b>0){let M=(b-1)*y;for(let F=0;F<a;F++){let I=M+F,O=M+F+1,q=b*y+F,D=b*y+F+1;s.push(I,O,q),s.push(O,D,q)}}}this.setIndex(s),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ch(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Qr=class dh extends dt{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let n=[],s=[],o=[],l=[],h=new P,u=new le;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,c=3;d<=i;d++,c+=3){let f=r+d/i*a;h.x=t*Math.cos(f),h.y=t*Math.sin(f),s.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(s[c]/t+1)/2,u.y=(s[c+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=i;d++)n.push(d,d+1,0);this.setIndex(n),this.setAttribute("position",new ke(s,3)),this.setAttribute("normal",new ke(o,3)),this.setAttribute("uv",new ke(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dh(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ar=class ph extends dt{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let h=this;a=Math.floor(a),n=Math.floor(n);let u=[],d=[],c=[],f=[],x=0,y=[],g=r/2,p=0;b(),s===!1&&(t>0&&w(!0),i>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ke(d,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(f,2));function b(){let v=new P,T=new P,A=0,R=(i-t)/r;for(let _=0;_<=n;_++){let M=[],F=_/n,I=F*(i-t)+t;for(let O=0;O<=a;O++){let q=O/a,D=q*l+o,G=Math.sin(D),J=Math.cos(D);T.x=I*G,T.y=-F*r+g,T.z=I*J,d.push(T.x,T.y,T.z),v.set(G,R,J).normalize(),c.push(v.x,v.y,v.z),f.push(q,1-F),M.push(x++)}y.push(M)}for(let _=0;_<a;_++)for(let M=0;M<n;M++){let F=y[M][_],I=y[M+1][_],O=y[M+1][_+1],q=y[M][_+1];(t>0||M!==0)&&(u.push(F,I,q),A+=3),(i>0||M!==n-1)&&(u.push(I,O,q),A+=3)}h.addGroup(p,A,0),p+=A}function w(v){let T=x,A=new le,R=new P,_=0,M=v===!0?t:i,F=v===!0?1:-1;for(let O=1;O<=a;O++)d.push(0,g*F,0),c.push(0,F,0),f.push(.5,.5),x++;let I=x;for(let O=0;O<=a;O++){let q=O/a*l+o,D=Math.cos(q),G=Math.sin(q);R.x=M*G,R.y=g*F,R.z=M*D,d.push(R.x,R.y,R.z),c.push(0,F,0),A.x=D*.5+.5,A.y=G*.5*F+.5,f.push(A.x,A.y),x++}for(let O=0;O<a;O++){let q=T+O,D=I+O;v===!0?u.push(D,D+1,q):u.push(D+1,D,q),_+=3}h.addGroup(p,_,v===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ph(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wc=class fh extends Ar{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new fh(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ea=class mh extends dt{constructor(t=[],i=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:a};let n=[],s=[];o(a),h(r),u(),this.setAttribute("position",new ke(n,3)),this.setAttribute("normal",new ke(n.slice(),3)),this.setAttribute("uv",new ke(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let w=new P,v=new P,T=new P;for(let A=0;A<i.length;A+=3)f(i[A+0],w),f(i[A+1],v),f(i[A+2],T),l(w,v,T,b)}function l(b,w,v,T){let A=T+1,R=[];for(let _=0;_<=A;_++){R[_]=[];let M=b.clone().lerp(v,_/A),F=w.clone().lerp(v,_/A),I=A-_;for(let O=0;O<=I;O++)O===0&&_===A?R[_][O]=M:R[_][O]=M.clone().lerp(F,O/I)}for(let _=0;_<A;_++)for(let M=0;M<2*(A-_)-1;M++){let F=Math.floor(M/2);M%2===0?(c(R[_][F+1]),c(R[_+1][F]),c(R[_][F])):(c(R[_][F+1]),c(R[_+1][F+1]),c(R[_+1][F]))}}function h(b){let w=new P;for(let v=0;v<n.length;v+=3)w.x=n[v+0],w.y=n[v+1],w.z=n[v+2],w.normalize().multiplyScalar(b),n[v+0]=w.x,n[v+1]=w.y,n[v+2]=w.z}function u(){let b=new P;for(let w=0;w<n.length;w+=3){b.x=n[w+0],b.y=n[w+1],b.z=n[w+2];let v=g(b)/2/Math.PI+.5,T=p(b)/Math.PI+.5;s.push(v,1-T)}x(),d()}function d(){for(let b=0;b<s.length;b+=6){let w=s[b+0],v=s[b+2],T=s[b+4],A=Math.max(w,v,T),R=Math.min(w,v,T);A>.9&&R<.1&&(w<.2&&(s[b+0]+=1),v<.2&&(s[b+2]+=1),T<.2&&(s[b+4]+=1))}}function c(b){n.push(b.x,b.y,b.z)}function f(b,w){let v=b*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function x(){let b=new P,w=new P,v=new P,T=new P,A=new le,R=new le,_=new le;for(let M=0,F=0;M<n.length;M+=9,F+=6){b.set(n[M+0],n[M+1],n[M+2]),w.set(n[M+3],n[M+4],n[M+5]),v.set(n[M+6],n[M+7],n[M+8]),A.set(s[F+0],s[F+1]),R.set(s[F+2],s[F+3]),_.set(s[F+4],s[F+5]),T.copy(b).add(w).add(v).divideScalar(3);let I=g(T);y(A,F+0,b,I),y(R,F+2,w,I),y(_,F+4,v,I)}}function y(b,w,v,T){T<0&&b.x===1&&(s[w]=b.x-1),v.x===0&&v.z===0&&(s[w]=T/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mh(t.vertices,t.indices,t.radius,t.detail)}},Xc=class gh extends ea{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=1/r,n=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(n,s,t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new gh(t.radius,t.detail)}},Ca=new P,Ra=new P,Ln=new P,Pa=new dr,jc=class extends dt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(_r*t),a=e.getIndex(),n=e.getAttribute("position"),s=a?a.count:n.count,o=[0,0,0],l=["a","b","c"],h=new Array(3),u={},d=[];for(let c=0;c<s;c+=3){a?(o[0]=a.getX(c),o[1]=a.getX(c+1),o[2]=a.getX(c+2)):(o[0]=c,o[1]=c+1,o[2]=c+2);let{a:f,b:x,c:y}=Pa;if(f.fromBufferAttribute(n,o[0]),x.fromBufferAttribute(n,o[1]),y.fromBufferAttribute(n,o[2]),Pa.getNormal(Ln),h[0]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,h[1]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,h[2]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let g=0;g<3;g++){let p=(g+1)%3,b=h[g],w=h[p],v=Pa[l[g]],T=Pa[l[p]],A=`${b}_${w}`,R=`${w}_${b}`;R in u&&u[R]?(Ln.dot(u[R].normal)<=r&&(d.push(v.x,v.y,v.z),d.push(T.x,T.y,T.z)),u[R]=null):A in u||(u[A]={index0:o[g],index1:o[p],normal:Ln.clone()})}}for(let c in u)if(u[c]){let{index0:f,index1:x}=u[c];Ca.fromBufferAttribute(n,f),Ra.fromBufferAttribute(n,x),d.push(Ca.x,Ca.y,Ca.z),d.push(Ra.x,Ra.y,Ra.z)}this.setAttribute("position",new ke(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,a=i.length,n;t?n=t:n=e*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let h=i[r],u=i[r+1]-h,d=(n-h)/u;return(r+d)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new le:new P);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,r=[],a=[],n=[],s=new P,o=new Ke;for(let c=0;c<=e;c++){let f=c/e;r[c]=this.getTangentAt(f,new P)}a[0]=new P,n[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let c=1;c<=e;c++){if(a[c]=a[c-1].clone(),n[c]=n[c-1].clone(),s.crossVectors(r[c-1],r[c]),s.length()>Number.EPSILON){s.normalize();let f=Math.acos(Je(r[c-1].dot(r[c]),-1,1));a[c].applyMatrix4(o.makeRotationAxis(s,f))}n[c].crossVectors(r[c],a[c])}if(t===!0){let c=Math.acos(Je(a[0].dot(a[e]),-1,1));c/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(c=-c);for(let f=1;f<=e;f++)a[f].applyMatrix4(o.makeRotationAxis(r[f],c*f)),n[f].crossVectors(r[f],a[f])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ks=class extends si{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new le){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=o-this.aX,c=l-this.aY;o=d*h-c*u+this.aX,l=d*u+c*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},qc=class extends Ks{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function $s(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,h){a(s,o,h*(o-n),h*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,h,u,d){let c=(s-n)/h-(o-n)/(h+u)+(o-s)/u,f=(o-s)/u-(l-s)/(u+d)+(l-o)/d;c*=u,f*=u,a(s,o,c,f)},calc:function(n){let s=n*n,o=s*n;return e+t*n+i*s+r*o}}}var Xo=new P,jo=new P,Dn=new $s,Un=new $s,Nn=new $s,Yc=class extends si{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new P){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,h;this.closed||s>0?l=r[(s-1)%a]:(jo.subVectors(r[0],r[1]).add(r[0]),l=jo);let u=r[s%a],d=r[(s+1)%a];if(this.closed||s+2<a?h=r[(s+2)%a]:(Xo.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=Xo),this.curveType==="centripetal"||this.curveType==="chordal"){let c=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(u),c),x=Math.pow(u.distanceToSquared(d),c),y=Math.pow(d.distanceToSquared(h),c);x<1e-4&&(x=1),f<1e-4&&(f=x),y<1e-4&&(y=x),Dn.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,f,x,y),Un.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,f,x,y),Nn.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,f,x,y)}else this.curveType==="catmullrom"&&(Dn.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Un.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Nn.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Dn.calc(o),Un.calc(o),Nn.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function qo(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*e+i}function Zc(e,t){let i=1-e;return i*i*t}function Jc(e,t){return 2*(1-e)*e*t}function Kc(e,t){return e*e*t}function Gr(e,t,i,r){return Zc(e,t)+Jc(e,i)+Kc(e,r)}function $c(e,t){let i=1-e;return i*i*i*t}function Qc(e,t){let i=1-e;return 3*i*i*e*t}function ed(e,t){return 3*(1-e)*e*e*t}function td(e,t){return e*e*e*t}function Vr(e,t,i,r,a){return $c(e,t)+Qc(e,i)+ed(e,r)+td(e,a)}var _h=class extends si{constructor(e=new le,t=new le,i=new le,r=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new le){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Vr(e,r.x,a.x,n.x,s.x),Vr(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},id=class extends si{constructor(e=new P,t=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new P){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(Vr(e,r.x,a.x,n.x,s.x),Vr(e,r.y,a.y,n.y,s.y),Vr(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vh=class extends si{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rd=class extends si{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xh=class extends si{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Gr(e,r.x,a.x,n.x),Gr(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yh=class extends si{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Gr(e,r.x,a.x,n.x),Gr(e,r.y,a.y,n.y),Gr(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sh=class extends si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],h=r[n>r.length-2?r.length-1:n+1],u=r[n>r.length-3?r.length-1:n+2];return i.set(qo(s,o.x,l.x,h.x,u.x),qo(s,o.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new le().fromArray(r))}return this}},Ka=Object.freeze({__proto__:null,ArcCurve:qc,CatmullRomCurve3:Yc,CubicBezierCurve:_h,CubicBezierCurve3:id,EllipseCurve:Ks,LineCurve:vh,LineCurve3:rd,QuadraticBezierCurve:xh,QuadraticBezierCurve3:yh,SplineCurve:Sh}),ad=class extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ka[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let n=r[a]-i,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let n=a[r],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Ka[r.type]().fromJSON(r))}return this}},Yo=class extends ad{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new vh(this.currentPoint.clone(),new le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new xh(this.currentPoint.clone(),new le(e,t),new le(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,n){let s=new _h(this.currentPoint.clone(),new le(e,t),new le(i,r),new le(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Sh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,i,r,a,n),this}absarc(e,t,i,r,a,n){return this.absellipse(e,t,i,i,r,a,n),this}ellipse(e,t,i,r,a,n,s,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,n,s,o),this}absellipse(e,t,i,r,a,n,s,o){let l=new Ks(e,t,i,r,a,n,s,o);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mh=class extends Yo{constructor(e){super(e),this.uuid=ji(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Yo().fromJSON(r))}return this}};function nd(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,n=bh(e,0,a,i,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,h;if(r&&(n=ud(e,t,n,i)),e.length>80*i){o=e[0],l=e[1];let u=o,d=l;for(let c=i;c<a;c+=i){let f=e[c],x=e[c+1];f<o&&(o=f),x<l&&(l=x),f>u&&(u=f),x>d&&(d=x)}h=Math.max(u-o,d-l),h=h!==0?32767/h:0}return Zr(n,s,i,o,l,h,0),s}function bh(e,t,i,r,a){let n;if(a===Sd(e,t,i,r)>0)for(let s=t;s<i;s+=r)n=Zo(s/r|0,e[s],e[s+1],n);else for(let s=i-r;s>=t;s-=r)n=Zo(s/r|0,e[s],e[s+1],n);return n&&br(n,n.next)&&(Kr(n),n=n.next),n}function Wi(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(br(i,i.next)||pt(i.prev,i,i.next)===0)){if(Kr(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Zr(e,t,i,r,a,n,s){if(!e)return;!s&&n&&md(e,r,a,n);let o=e;for(;e.prev!==e.next;){let l=e.prev,h=e.next;if(n?od(e,r,a,n):sd(e)){t.push(l.i,e.i,h.i),Kr(e),e=h.next,o=h.next;continue}if(e=h,e===o){s?s===1?(e=ld(Wi(e),t),Zr(e,t,i,r,a,n,2)):s===2&&hd(e,t,i,r,a,n):Zr(Wi(e),t,i,r,a,n,1);break}}}function sd(e){let t=e.prev,i=e,r=e.next;if(pt(t,i,r)>=0)return!1;let a=t.x,n=i.x,s=r.x,o=t.y,l=i.y,h=r.y,u=Math.min(a,n,s),d=Math.min(o,l,h),c=Math.max(a,n,s),f=Math.max(o,l,h),x=r.next;for(;x!==t;){if(x.x>=u&&x.x<=c&&x.y>=d&&x.y<=f&&Fr(a,o,n,l,s,h,x.x,x.y)&&pt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function od(e,t,i,r){let a=e.prev,n=e,s=e.next;if(pt(a,n,s)>=0)return!1;let o=a.x,l=n.x,h=s.x,u=a.y,d=n.y,c=s.y,f=Math.min(o,l,h),x=Math.min(u,d,c),y=Math.max(o,l,h),g=Math.max(u,d,c),p=Ds(f,x,t,i,r),b=Ds(y,g,t,i,r),w=e.prevZ,v=e.nextZ;for(;w&&w.z>=p&&v&&v.z<=b;){if(w.x>=f&&w.x<=y&&w.y>=x&&w.y<=g&&w!==a&&w!==s&&Fr(o,u,l,d,h,c,w.x,w.y)&&pt(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=f&&v.x<=y&&v.y>=x&&v.y<=g&&v!==a&&v!==s&&Fr(o,u,l,d,h,c,v.x,v.y)&&pt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=y&&w.y>=x&&w.y<=g&&w!==a&&w!==s&&Fr(o,u,l,d,h,c,w.x,w.y)&&pt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=b;){if(v.x>=f&&v.x<=y&&v.y>=x&&v.y<=g&&v!==a&&v!==s&&Fr(o,u,l,d,h,c,v.x,v.y)&&pt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function ld(e,t){let i=e;do{let r=i.prev,a=i.next.next;!br(r,a)&&Eh(r,i,i.next,a)&&Jr(r,a)&&Jr(a,r)&&(t.push(r.i,i.i,a.i),Kr(i),Kr(i.next),i=e=a),i=i.next}while(i!==e);return Wi(i)}function hd(e,t,i,r,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&vd(s,o)){let l=wh(s,o);s=Wi(s,s.next),l=Wi(l,l.next),Zr(s,t,i,r,a,n,0),Zr(l,t,i,r,a,n,0);return}o=o.next}s=s.next}while(s!==e)}function ud(e,t,i,r){let a=[];for(let n=0,s=t.length;n<s;n++){let o=t[n]*r,l=n<s-1?t[n+1]*r:e.length,h=bh(e,o,l,r,!1);h===h.next&&(h.steiner=!0),a.push(_d(h))}a.sort(cd);for(let n=0;n<a.length;n++)i=dd(a[n],i);return i}function cd(e,t){let i=e.x-t.x;if(i===0&&(i=e.y-t.y,i===0)){let r=(e.next.y-e.y)/(e.next.x-e.x),a=(t.next.y-t.y)/(t.next.x-t.x);i=r-a}return i}function dd(e,t){let i=pd(e,t);if(!i)return t;let r=wh(i,e);return Wi(r,r.next),Wi(i,i.next)}function pd(e,t){let i=t,r=e.x,a=e.y,n=-1/0,s;if(br(e,i))return i;do{if(br(e,i.next))return i.next;if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){let d=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=r&&d>n&&(n=d,s=i.x<i.next.x?i:i.next,d===r))return s}i=i.next}while(i!==t);if(!s)return null;let o=s,l=s.x,h=s.y,u=1/0;i=s;do{if(r>=i.x&&i.x>=l&&r!==i.x&&Th(a<h?r:n,a,l,h,a<h?n:r,a,i.x,i.y)){let d=Math.abs(a-i.y)/(r-i.x);Jr(i,e)&&(d<u||d===u&&(i.x>s.x||i.x===s.x&&fd(s,i)))&&(s=i,u=d)}i=i.next}while(i!==o);return s}function fd(e,t){return pt(e.prev,e,t.prev)<0&&pt(t.next,e,e.next)<0}function md(e,t,i,r){let a=e;do a.z===0&&(a.z=Ds(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,gd(a)}function gd(e){let t,i=1;do{let r=e,a;e=null;let n=null;for(t=0;r;){t++;let s=r,o=0;for(let h=0;h<i&&(o++,s=s.nextZ,!!s);h++);let l=i;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||r.z<=s.z)?(a=r,r=r.nextZ,o--):(a=s,s=s.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;r=s}n.nextZ=null,i*=2}while(t>1);return e}function Ds(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function _d(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function Th(e,t,i,r,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(r-o)>=(i-s)*(t-o)&&(i-s)*(n-o)>=(a-s)*(r-o)}function Fr(e,t,i,r,a,n,s,o){return!(e===s&&t===o)&&Th(e,t,i,r,a,n,s,o)}function vd(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!xd(e,t)&&(Jr(e,t)&&Jr(t,e)&&yd(e,t)&&(pt(e.prev,e,t.prev)||pt(e,t.prev,t))||br(e,t)&&pt(e.prev,e,e.next)>0&&pt(t.prev,t,t.next)>0)}function pt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function br(e,t){return e.x===t.x&&e.y===t.y}function Eh(e,t,i,r){let a=La(pt(e,t,i)),n=La(pt(e,t,r)),s=La(pt(i,r,e)),o=La(pt(i,r,t));return!!(a!==n&&s!==o||a===0&&Ia(e,i,t)||n===0&&Ia(e,r,t)||s===0&&Ia(i,e,r)||o===0&&Ia(i,t,r))}function Ia(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function La(e){return e>0?1:e<0?-1:0}function xd(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Eh(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Jr(e,t){return pt(e.prev,e,e.next)<0?pt(e,t,e.next)>=0&&pt(e,e.prev,t)>=0:pt(e,t,e.prev)<0||pt(e,e.next,t)<0}function yd(e,t){let i=e,r=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do i.y>n!=i.next.y>n&&i.next.y!==i.y&&a<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function wh(e,t){let i=Us(e.i,e.x,e.y),r=Us(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}function Zo(e,t,i,r){let a=Us(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function Kr(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Us(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Sd(e,t,i,r){let a=0;for(let n=t,s=i-r;n<i;n+=r)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}var Md=class{static triangulate(e,t,i=2){return nd(e,t,i)}},zi=class Ah{static area(t){let i=t.length,r=0;for(let a=i-1,n=0;n<i;a=n++)r+=t[a].x*t[n].y-t[n].x*t[a].y;return r*.5}static isClockWise(t){return Ah.area(t)<0}static triangulateShape(t,i){let r=[],a=[],n=[];Jo(t),Ko(r,t);let s=t.length;i.forEach(Jo);for(let l=0;l<i.length;l++)a.push(s),s+=i[l].length,Ko(r,i[l]);let o=Md.triangulate(r,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};function Jo(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ko(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var bd=class Ch extends dt{constructor(t=new Mh([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];s(h)}this.setAttribute("position",new ke(a,3)),this.setAttribute("uv",new ke(n,2)),this.computeVertexNormals();function s(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,u=i.steps!==void 0?i.steps:1,d=i.depth!==void 0?i.depth:1,c=i.bevelEnabled!==void 0?i.bevelEnabled:!0,f=i.bevelThickness!==void 0?i.bevelThickness:.2,x=i.bevelSize!==void 0?i.bevelSize:f-.1,y=i.bevelOffset!==void 0?i.bevelOffset:0,g=i.bevelSegments!==void 0?i.bevelSegments:3,p=i.extrudePath,b=i.UVGenerator!==void 0?i.UVGenerator:Td,w,v=!1,T,A,R,_;if(p){w=p.getSpacedPoints(u),v=!0,c=!1;let ee=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(u,ee),A=new P,R=new P,_=new P}c||(g=0,f=0,x=0,y=0);let M=o.extractPoints(h),F=M.shape,I=M.holes;if(!zi.isClockWise(F)){F=F.reverse();for(let ee=0,Q=I.length;ee<Q;ee++){let he=I[ee];zi.isClockWise(he)&&(I[ee]=he.reverse())}}function O(ee){let Q=10000000000000001e-36,he=ee[0];for(let ye=1;ye<=ee.length;ye++){let Se=ye%ee.length,be=ee[Se],Le=be.x-he.x,Oe=be.y-he.y,ze=Le*Le+Oe*Oe,L=Math.max(Math.abs(be.x),Math.abs(be.y),Math.abs(he.x),Math.abs(he.y)),rt=Q*L*L;if(ze<=rt){ee.splice(Se,1),ye--;continue}he=be}}O(F),I.forEach(O);let q=I.length,D=F;for(let ee=0;ee<q;ee++){let Q=I[ee];F=F.concat(Q)}function G(ee,Q,he){return Q||Ve("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(Q,he)}let J=F.length;function k(ee,Q,he){let ye,Se,be,Le=ee.x-Q.x,Oe=ee.y-Q.y,ze=he.x-ee.x,L=he.y-ee.y,rt=Le*Le+Oe*Oe,Ze=Le*L-Oe*ze;if(Math.abs(Ze)>Number.EPSILON){let qe=Math.sqrt(rt),E=Math.sqrt(ze*ze+L*L),m=Q.x-Oe/qe,C=Q.y+Le/qe,U=he.x-L/E,j=he.y+ze/E,te=((U-m)*L-(j-C)*ze)/(Le*L-Oe*ze);ye=m+Le*te-ee.x,Se=C+Oe*te-ee.y;let ce=ye*ye+Se*Se;if(ce<=2)return new le(ye,Se);be=Math.sqrt(ce/2)}else{let qe=!1;Le>Number.EPSILON?ze>Number.EPSILON&&(qe=!0):Le<-Number.EPSILON?ze<-Number.EPSILON&&(qe=!0):Math.sign(Oe)===Math.sign(L)&&(qe=!0),qe?(ye=-Oe,Se=Le,be=Math.sqrt(rt)):(ye=Le,Se=Oe,be=Math.sqrt(rt/2))}return new le(ye/be,Se/be)}let ue=[];for(let ee=0,Q=D.length,he=Q-1,ye=ee+1;ee<Q;ee++,he++,ye++)he===Q&&(he=0),ye===Q&&(ye=0),ue[ee]=k(D[ee],D[he],D[ye]);let X=[],Z,K=ue.concat();for(let ee=0,Q=q;ee<Q;ee++){let he=I[ee];Z=[];for(let ye=0,Se=he.length,be=Se-1,Le=ye+1;ye<Se;ye++,be++,Le++)be===Se&&(be=0),Le===Se&&(Le=0),Z[ye]=k(he[ye],he[be],he[Le]);X.push(Z),K=K.concat(Z)}let Fe;if(g===0)Fe=zi.triangulateShape(D,I);else{let ee=[],Q=[];for(let he=0;he<g;he++){let ye=he/g,Se=f*Math.cos(ye*Math.PI/2),be=x*Math.sin(ye*Math.PI/2)+y;for(let Le=0,Oe=D.length;Le<Oe;Le++){let ze=G(D[Le],ue[Le],be);oe(ze.x,ze.y,-Se),ye===0&&ee.push(ze)}for(let Le=0,Oe=q;Le<Oe;Le++){let ze=I[Le];Z=X[Le];let L=[];for(let rt=0,Ze=ze.length;rt<Ze;rt++){let qe=G(ze[rt],Z[rt],be);oe(qe.x,qe.y,-Se),ye===0&&L.push(qe)}ye===0&&Q.push(L)}}Fe=zi.triangulateShape(ee,Q)}let Me=Fe.length,it=x+y;for(let ee=0;ee<J;ee++){let Q=c?G(F[ee],K[ee],it):F[ee];v?(R.copy(T.normals[0]).multiplyScalar(Q.x),A.copy(T.binormals[0]).multiplyScalar(Q.y),_.copy(w[0]).add(R).add(A),oe(_.x,_.y,_.z)):oe(Q.x,Q.y,0)}for(let ee=1;ee<=u;ee++)for(let Q=0;Q<J;Q++){let he=c?G(F[Q],K[Q],it):F[Q];v?(R.copy(T.normals[ee]).multiplyScalar(he.x),A.copy(T.binormals[ee]).multiplyScalar(he.y),_.copy(w[ee]).add(R).add(A),oe(_.x,_.y,_.z)):oe(he.x,he.y,d/u*ee)}for(let ee=g-1;ee>=0;ee--){let Q=ee/g,he=f*Math.cos(Q*Math.PI/2),ye=x*Math.sin(Q*Math.PI/2)+y;for(let Se=0,be=D.length;Se<be;Se++){let Le=G(D[Se],ue[Se],ye);oe(Le.x,Le.y,d+he)}for(let Se=0,be=I.length;Se<be;Se++){let Le=I[Se];Z=X[Se];for(let Oe=0,ze=Le.length;Oe<ze;Oe++){let L=G(Le[Oe],Z[Oe],ye);v?oe(L.x,L.y+w[u-1].y,w[u-1].x+he):oe(L.x,L.y,d+he)}}}Ue(),Y();function Ue(){let ee=a.length/3;if(c){let Q=0,he=J*Q;for(let ye=0;ye<Me;ye++){let Se=Fe[ye];Re(Se[2]+he,Se[1]+he,Se[0]+he)}Q=u+g*2,he=J*Q;for(let ye=0;ye<Me;ye++){let Se=Fe[ye];Re(Se[0]+he,Se[1]+he,Se[2]+he)}}else{for(let Q=0;Q<Me;Q++){let he=Fe[Q];Re(he[2],he[1],he[0])}for(let Q=0;Q<Me;Q++){let he=Fe[Q];Re(he[0]+J*u,he[1]+J*u,he[2]+J*u)}}r.addGroup(ee,a.length/3-ee,0)}function Y(){let ee=a.length/3,Q=0;ne(D,Q),Q+=D.length;for(let he=0,ye=I.length;he<ye;he++){let Se=I[he];ne(Se,Q),Q+=Se.length}r.addGroup(ee,a.length/3-ee,1)}function ne(ee,Q){let he=ee.length;for(;--he>=0;){let ye=he,Se=he-1;Se<0&&(Se=ee.length-1);for(let be=0,Le=u+g*2;be<Le;be++){let Oe=J*be,ze=J*(be+1),L=Q+ye+Oe,rt=Q+Se+Oe,Ze=Q+Se+ze,qe=Q+ye+ze;Ne(L,rt,Ze,qe)}}}function oe(ee,Q,he){l.push(ee),l.push(Q),l.push(he)}function Re(ee,Q,he){fe(ee),fe(Q),fe(he);let ye=a.length/3,Se=b.generateTopUV(r,a,ye-3,ye-2,ye-1);je(Se[0]),je(Se[1]),je(Se[2])}function Ne(ee,Q,he,ye){fe(ee),fe(Q),fe(ye),fe(Q),fe(he),fe(ye);let Se=a.length/3,be=b.generateSideWallUV(r,a,Se-6,Se-3,Se-2,Se-1);je(be[0]),je(be[1]),je(be[3]),je(be[1]),je(be[2]),je(be[3])}function fe(ee){a.push(l[ee*3+0]),a.push(l[ee*3+1]),a.push(l[ee*3+2])}function je(ee){n.push(ee.x),n.push(ee.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return Ed(i,r,t)}static fromJSON(t,i){let r=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=i[t.shapes[n]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new Ka[a.type]().fromJSON(a)),new Ch(r,t.options)}},Td={generateTopUV:function(e,t,i,r,a){let n=t[i*3],s=t[i*3+1],o=t[r*3],l=t[r*3+1],h=t[a*3],u=t[a*3+1];return[new le(n,s),new le(o,l),new le(h,u)]},generateSideWallUV:function(e,t,i,r,a,n){let s=t[i*3],o=t[i*3+1],l=t[i*3+2],h=t[r*3],u=t[r*3+1],d=t[r*3+2],c=t[a*3],f=t[a*3+1],x=t[a*3+2],y=t[n*3],g=t[n*3+1],p=t[n*3+2];return Math.abs(o-u)<Math.abs(s-h)?[new le(s,1-l),new le(h,1-d),new le(c,1-x),new le(y,1-p)]:[new le(o,1-l),new le(u,1-d),new le(f,1-x),new le(g,1-p)]}};function Ed(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let n=e[r];i.shapes.push(n.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var wd=class Rh extends ea{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,n,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Rh(t.radius,t.detail)}},Ad=class Ph extends dt{constructor(t=[new le(0,-.5),new le(.5,0),new le(0,.5)],i=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:r,phiLength:a},i=Math.floor(i),a=Je(a,0,Math.PI*2);let n=[],s=[],o=[],l=[],h=[],u=1/i,d=new P,c=new le,f=new P,x=new P,y=new P,g=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:g=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-g,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:g=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(x)}for(let b=0;b<=i;b++){let w=r+b*u*a,v=Math.sin(w),T=Math.cos(w);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*v,d.y=t[A].y,d.z=t[A].x*T,s.push(d.x,d.y,d.z),c.x=b/i,c.y=A/(t.length-1),o.push(c.x,c.y);let R=l[3*A+0]*v,_=l[3*A+1],M=l[3*A+0]*T;h.push(R,_,M)}}for(let b=0;b<i;b++)for(let w=0;w<t.length-1;w++){let v=w+b*t.length,T=v,A=v+t.length,R=v+t.length+1,_=v+1;n.push(T,A,_),n.push(R,_,A)}this.setIndex(n),this.setAttribute("position",new ke(s,3)),this.setAttribute("uv",new ke(o,2)),this.setAttribute("normal",new ke(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ph(t.points,t.segments,t.phiStart,t.phiLength)}},Cd=class Ih extends ea{constructor(t=1,i=0){let r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Ih(t.radius,t.detail)}},ta=class Lh extends dt{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),h=o+1,u=l+1,d=t/o,c=i/l,f=[],x=[],y=[],g=[];for(let p=0;p<u;p++){let b=p*c-s;for(let w=0;w<h;w++){let v=w*d-n;x.push(v,-b,0),y.push(0,0,1),g.push(w/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let w=b+h*p,v=b+h*(p+1),T=b+1+h*(p+1),A=b+1+h*p;f.push(w,v,A),f.push(v,T,A)}this.setIndex(f),this.setAttribute("position",new ke(x,3)),this.setAttribute("normal",new ke(y,3)),this.setAttribute("uv",new ke(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lh(t.width,t.height,t.widthSegments,t.heightSegments)}},Rd=class Dh extends dt{constructor(t=.5,i=1,r=32,a=1,n=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:a,thetaStart:n,thetaLength:s},r=Math.max(3,r),a=Math.max(1,a);let o=[],l=[],h=[],u=[],d=t,c=(i-t)/a,f=new P,x=new le;for(let y=0;y<=a;y++){for(let g=0;g<=r;g++){let p=n+g/r*s;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),h.push(0,0,1),x.x=(f.x/i+1)/2,x.y=(f.y/i+1)/2,u.push(x.x,x.y)}d+=c}for(let y=0;y<a;y++){let g=y*(r+1);for(let p=0;p<r;p++){let b=p+g,w=b,v=b+r+1,T=b+r+2,A=b+1;o.push(w,v,A),o.push(v,T,A)}}this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Pd=class Uh extends dt{constructor(t=new Mh([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],n=[],s=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let u=0;u<t.length;u++)h(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(n,3)),this.setAttribute("uv",new ke(s,2));function h(u){let d=a.length/3,c=u.extractPoints(i),f=c.shape,x=c.holes;zi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=x.length;g<p;g++){let b=x[g];zi.isClockWise(b)===!0&&(x[g]=b.reverse())}let y=zi.triangulateShape(f,x);for(let g=0,p=x.length;g<p;g++){let b=x[g];f=f.concat(b)}for(let g=0,p=f.length;g<p;g++){let b=f[g];a.push(b.x,b.y,0),n.push(0,0,1),s.push(b.x,b.y)}for(let g=0,p=y.length;g<p;g++){let b=y[g],w=b[0]+d,v=b[1]+d,T=b[2]+d;r.push(w,v,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return Id(i,t)}static fromJSON(t,i){let r=[];for(let a=0,n=t.shapes.length;a<n;a++){let s=i[t.shapes[a]];r.push(s)}return new Uh(r,t.curveSegments)}};function Id(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let a=e[i];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var Qs=class Nh extends dt{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),h=0,u=[],d=new P,c=new P,f=[],x=[],y=[],g=[];for(let p=0;p<=r;p++){let b=[],w=p/r,v=s+w*o,T=t*Math.cos(v),A=Math.sqrt(t*t-T*T),R=0;p===0&&s===0?R=.5/i:p===r&&l===Math.PI&&(R=-.5/i);for(let _=0;_<=i;_++){let M=_/i,F=a+M*n;d.x=-A*Math.cos(F),d.y=T,d.z=A*Math.sin(F),x.push(d.x,d.y,d.z),c.copy(d).normalize(),y.push(c.x,c.y,c.z),g.push(M+R,1-w),b.push(h++)}u.push(b)}for(let p=0;p<r;p++)for(let b=0;b<i;b++){let w=u[p][b+1],v=u[p][b],T=u[p+1][b],A=u[p+1][b+1];(p!==0||s>0)&&f.push(w,v,A),(p!==r-1||l<Math.PI)&&f.push(v,T,A)}this.setIndex(f),this.setAttribute("position",new ke(x,3)),this.setAttribute("normal",new ke(y,3)),this.setAttribute("uv",new ke(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ld=class Oh extends ea{constructor(t=1,i=0){let r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],a=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,a,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Oh(t.radius,t.detail)}},Dd=class Fh extends dt{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n,thetaStart:s,thetaLength:o},r=Math.floor(r),a=Math.floor(a);let l=[],h=[],u=[],d=[],c=new P,f=new P,x=new P;for(let y=0;y<=r;y++){let g=s+y/r*o;for(let p=0;p<=a;p++){let b=p/a*n;f.x=(t+i*Math.cos(g))*Math.cos(b),f.y=(t+i*Math.cos(g))*Math.sin(b),f.z=i*Math.sin(g),h.push(f.x,f.y,f.z),c.x=t*Math.cos(b),c.y=t*Math.sin(b),x.subVectors(f,c).normalize(),u.push(x.x,x.y,x.z),d.push(p/a),d.push(y/r)}}for(let y=1;y<=r;y++)for(let g=1;g<=a;g++){let p=(a+1)*y+g-1,b=(a+1)*(y-1)+g-1,w=(a+1)*(y-1)+g,v=(a+1)*y+g;l.push(p,b,v),l.push(b,w,v)}this.setIndex(l),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Ud=class Bh extends dt{constructor(t=1,i=.4,r=64,a=8,n=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:r,radialSegments:a,p:n,q:s},r=Math.floor(r),a=Math.floor(a);let o=[],l=[],h=[],u=[],d=new P,c=new P,f=new P,x=new P,y=new P,g=new P,p=new P;for(let w=0;w<=r;++w){let v=w/r*n*Math.PI*2;b(v,n,s,t,f),b(v+.01,n,s,t,x),g.subVectors(x,f),p.addVectors(x,f),y.crossVectors(g,p),p.crossVectors(y,g),y.normalize(),p.normalize();for(let T=0;T<=a;++T){let A=T/a*Math.PI*2,R=-i*Math.cos(A),_=i*Math.sin(A);d.x=f.x+(R*p.x+_*y.x),d.y=f.y+(R*p.y+_*y.y),d.z=f.z+(R*p.z+_*y.z),l.push(d.x,d.y,d.z),c.subVectors(d,f).normalize(),h.push(c.x,c.y,c.z),u.push(w/r),u.push(T/a)}}for(let w=1;w<=r;w++)for(let v=1;v<=a;v++){let T=(a+1)*(w-1)+(v-1),A=(a+1)*w+(v-1),R=(a+1)*w+v,_=(a+1)*(w-1)+v;o.push(T,A,_),o.push(A,R,_)}this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(u,2));function b(w,v,T,A,R){let _=Math.cos(w),M=Math.sin(w),F=T/v*w,I=Math.cos(F);R.x=A*(2+I)*.5*_,R.y=A*(2+I)*M*.5,R.z=A*Math.sin(F)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bh(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Nd=class zh extends dt{constructor(t=new yh(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),i=64,r=1,a=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:a,closed:n};let s=t.computeFrenetFrames(i,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new P,l=new P,h=new le,u=new P,d=[],c=[],f=[],x=[];y(),this.setIndex(x),this.setAttribute("position",new ke(d,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(f,2));function y(){for(let w=0;w<i;w++)g(w);g(n===!1?i:0),b(),p()}function g(w){u=t.getPointAt(w/i,u);let v=s.normals[w],T=s.binormals[w];for(let A=0;A<=a;A++){let R=A/a*Math.PI*2,_=Math.sin(R),M=-Math.cos(R);l.x=M*v.x+_*T.x,l.y=M*v.y+_*T.y,l.z=M*v.z+_*T.z,l.normalize(),c.push(l.x,l.y,l.z),o.x=u.x+r*l.x,o.y=u.y+r*l.y,o.z=u.z+r*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=i;w++)for(let v=1;v<=a;v++){let T=(a+1)*(w-1)+(v-1),A=(a+1)*w+(v-1),R=(a+1)*w+v,_=(a+1)*(w-1)+v;x.push(T,A,_),x.push(A,R,_)}}function b(){for(let w=0;w<=i;w++)for(let v=0;v<=a;v++)h.x=w/i,h.y=v/a,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new zh(new Ka[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Od=class extends dt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new P,a=new P;if(e.index!==null){let n=e.attributes.position,s=e.index,o=e.groups;o.length===0&&(o=[{start:0,count:s.count,materialIndex:0}]);for(let l=0,h=o.length;l<h;++l){let u=o[l],d=u.start,c=u.count;for(let f=d,x=d+c;f<x;f+=3)for(let y=0;y<3;y++){let g=s.getX(f+y),p=s.getX(f+(y+1)%3);r.fromBufferAttribute(n,g),a.fromBufferAttribute(n,p),$o(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{let n=e.attributes.position;for(let s=0,o=n.count/3;s<o;s++)for(let l=0;l<3;l++){let h=3*s+l,u=3*s+(l+1)%3;r.fromBufferAttribute(n,h),a.fromBufferAttribute(n,u),$o(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new ke(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function $o(e,t,i){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,a=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return i.has(r)===!0||i.has(a)===!0?!1:(i.add(r),i.add(a),!0)}var xv=Object.freeze({__proto__:null,BoxGeometry:qi,CapsuleGeometry:kc,CircleGeometry:Qr,ConeGeometry:Wc,CylinderGeometry:Ar,DodecahedronGeometry:Xc,EdgesGeometry:jc,ExtrudeGeometry:bd,IcosahedronGeometry:wd,LatheGeometry:Ad,OctahedronGeometry:Cd,PlaneGeometry:ta,PolyhedronGeometry:ea,RingGeometry:Rd,ShapeGeometry:Pd,SphereGeometry:Qs,TetrahedronGeometry:Ld,TorusGeometry:Dd,TorusKnotGeometry:Ud,TubeGeometry:Nd,WireframeGeometry:Od});function Tr(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(Qo(a))a.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(Qo(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function Pt(e){let t={};for(let i=0;i<e.length;i++){let r=Tr(e[i]);for(let a in r)t[a]=r[a]}return t}function Qo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Fd(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Gh(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:et.workingColorSpace}var Bd={clone:Tr,merge:Pt},zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zt=class extends Er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zd,this.fragmentShader=Gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=Fd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(r.value);break;case"v2":this.uniforms[i].value=new le().fromArray(r.value);break;case"v3":this.uniforms[i].value=new P().fromArray(r.value);break;case"v4":this.uniforms[i].value=new ct().fromArray(r.value);break;case"m3":this.uniforms[i].value=new We().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ke().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Vd=class extends zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},en=class extends Er{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ps,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Hd=class extends Er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kd=class extends Er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function sr(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function On(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var ia=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Wd=class extends ia{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:So,endingEnd:So}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case Mo:a=e,s=2*t-i;break;case bo:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Mo:n=e,o=2*i-t;break;case bo:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=n*h}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,c=this._weightNext,f=(i-t)/(r-t),x=f*f,y=x*f,g=-d*y+2*d*x-d*f,p=(1+d)*y+(-1.5-2*d)*x+(-.5+d)*f+1,b=(-1-c)*y+(1.5+c)*x+.5*f,w=c*y-c*x;for(let v=0;v!==s;++v)a[v]=g*n[h+v]+p*n[l+v]+b*n[o+v]+w*n[u+v];return a}},Xd=class extends ia{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==s;++d)a[d]=n[l+d]*u+n[o+d]*h;return a}},jd=class extends ia{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},qd=class extends ia{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,h=this.inTangents,u=this.outTangents;if(!h||!u){let f=(i-t)/(r-t),x=1-f;for(let y=0;y!==s;++y)a[y]=n[l+y]*x+n[o+y]*f;return a}let d=s*2,c=e-1;for(let f=0;f!==s;++f){let x=n[l+f],y=n[o+f],g=c*d+f*2,p=u[g],b=u[g+1],w=e*d+f*2,v=h[w],T=h[w+1],A=Zd(i,t,p,v,r);a[f]=Vh(A,x,b,T,y)}return a}};function Vh(e,t,i,r,a){let n=1-e;return n*n*n*t+3*n*n*e*i+3*n*e*e*r+e*e*e*a}function Yd(e,t,i,r,a){let n=1-e;return 3*n*n*(i-t)+6*n*e*(r-i)+3*e*e*(a-r)}function Zd(e,t,i,r,a){let n=(e-t)/(a-t);for(let s=0;s<8;s++){let o=Vh(n,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let l=Yd(n,t,i,r,a);if(Math.abs(l)<1e-10)break;n=Math.max(0,Math.min(1,n-o/l))}return n}var oi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sr(t,this.TimeBufferType),this.values=sr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:sr(e.times,Array),values:sr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),On(e.settings)&&(i.settings={inTangents:sr(e.settings.inTangents,Array),outTangents:sr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new jd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new qd(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qa:t=this.InterpolantFactoryMethodDiscrete;break;case Rs:t=this.InterpolantFactoryMethodLinear;break;case un:t=this.InterpolantFactoryMethodSmooth;break;case yo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Be("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qa;case this.InterpolantFactoryMethodLinear:return Rs;case this.InterpolantFactoryMethodSmooth:return un;case this.InterpolantFactoryMethodBezier:return yo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;On(this.settings)&&(el(this.settings.inTangents,e),el(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){Ve("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){Ve("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&Ku(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){Ve("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===un,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],h=e[s+1];if(l!==h&&(s!==1||l!==e[0]))if(r)o=!0;else{let u=s*i,d=u-i,c=u+i;for(let f=0;f!==i;++f){let x=t[u+f];if(x!==t[d+f]||x!==t[c+f]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let u=s*i,d=n*i;for(let c=0;c!==i;++c)t[d+c]=t[u+c]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,On(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function el(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}oi.prototype.ValueTypeName="";oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=Rs;var ra=class extends oi{constructor(e,t,i){super(e,t,i)}};ra.prototype.ValueTypeName="bool";ra.prototype.ValueBufferType=Array;ra.prototype.DefaultInterpolation=qa;ra.prototype.InterpolantFactoryMethodLinear=void 0;ra.prototype.InterpolantFactoryMethodSmooth=void 0;var Jd=class extends oi{constructor(e,t,i,r){super(e,t,i,r)}};Jd.prototype.ValueTypeName="color";var Kd=class extends oi{constructor(e,t,i,r){super(e,t,i,r)}};Kd.prototype.ValueTypeName="number";var $d=class extends ia{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let h=l+s;l!==h;l+=4)xi.slerpFlat(a,0,n,l-s,n,l,o);return a}},Hh=class extends oi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new $d(this.times,this.values,this.getValueSize(),e)}};Hh.prototype.ValueTypeName="quaternion";Hh.prototype.InterpolantFactoryMethodSmooth=void 0;var aa=class extends oi{constructor(e,t,i){super(e,t,i)}};aa.prototype.ValueTypeName="string";aa.prototype.ValueBufferType=Array;aa.prototype.DefaultInterpolation=qa;aa.prototype.InterpolantFactoryMethodLinear=void 0;aa.prototype.InterpolantFactoryMethodSmooth=void 0;var Qd=class extends oi{constructor(e,t,i,r){super(e,t,i,r)}};Qd.prototype.ValueTypeName="vector";var ep=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){s++,a===!1&&r.onStart!==void 0&&r.onStart(h,n,s),a=!0},this.itemEnd=function(h){n++,r.onProgress!==void 0&&r.onProgress(h,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let c=l[u],f=l[u+1];if(c.global&&(c.lastIndex=0),c.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tp=new ep,ip=class{constructor(e){this.manager=e!==void 0?e:tp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ip.DEFAULT_MATERIAL_NAME="__DEFAULT";var eo=class extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},kh=class extends eo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Fn=new Ke,tl=new P,il=new P,rp=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Ot,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;tl.setFromMatrixPosition(e.matrixWorld),t.position.copy(tl),il.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(il),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Fn.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Fn,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,s=r?r.w/a.y:1,o=r?r.x/a.x:0,l=r?r.y/a.y:0;e.coordinateSystem===jr||e.reversedDepth?t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,.5,.5,0,0,0,1),t.multiply(Fn)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Da=new P,Ua=new xi,$t=new P,to=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=jt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Da,Ua,$t),$t.x===1&&$t.y===1&&$t.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Da,Ua,$t.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Da,Ua,$t),$t.x===1&&$t.y===1&&$t.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Da,Ua,$t.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},wi=new P,rl=new le,al=new le,Lt=class extends to{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,rl,al),t.subVectors(al,rl)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_r*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ap=class extends rp{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0}},io=class extends eo{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ap}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Wh=class extends to{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Xh=class extends eo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var yv=new Ke,Sv=new Ke,Mv=new Ke;var or=-90,lr=1,np=class extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Lt(or,lr,e,t);r.layers=this.layers,this.add(r);let a=new Lt(or,lr,e,t);a.layers=this.layers,this.add(a);let n=new Lt(or,lr,e,t);n.layers=this.layers,this.add(n);let s=new Lt(or,lr,e,t);s.layers=this.layers,this.add(s);let o=new Lt(or,lr,e,t);o.layers=this.layers,this.add(o);let l=new Lt(or,lr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===jt)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===jr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),c=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,c),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},sp=class extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var bv=new P,Tv=new xi,Ev=new P,wv=new P,Av=new P;var Cv=new P,Rv=new xi,Pv=new P,Iv=new P;var ro="\\[\\]\\.:\\/",op=new RegExp("["+ro+"]","g"),ao="[^"+ro+"]",lp="[^"+ro.replace("\\.","")+"]",hp=/((?:WC+[\/:])*)/.source.replace("WC",ao),up=/(WCOD+)?/.source.replace("WCOD",lp),cp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ao),dp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ao),pp=new RegExp("^"+hp+up+cp+dp+"$"),fp=["material","materials","bones","map"],mp=class{constructor(e,t,i){let r=i||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},mt=class fr{constructor(t,i,r){this.path=i,this.parsedPath=r||fr.parseTrackName(i),this.node=fr.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new fr.Composite(t,i,r):new fr(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(op,"")}static parseTrackName(t){let i=pp.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);fp.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=fr.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let s=t[a];if(s===void 0){let h=i.nodeName;Ve("PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=mp;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Lv=new Float32Array(1);var nl=new Ke,jh=class{constructor(e,t,i=0,r=1/0){this.ray=new $r(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nl),this}intersectObject(e,t=!0,i=[]){return Ns(e,this,i,t),i.sort(sl),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)Ns(e[r],this,i,t);return i.sort(sl),i}};function sl(e,t){return e.distance-t.distance}function Ns(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let n=e.children;for(let s=0,o=n.length;s<o;s++)Ns(n[s],t,i,!0)}}var qh=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Be("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Dv=class Yh{static{Yh.prototype.isMatrix2=!0}constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},Uv=new le;var Nv=new P,Ov=new P,Fv=new P,Bv=new P,zv=new P,Gv=new P,Vv=new P;var Hv=new P;var kv=new P,Wv=new Ke,Xv=new Ke;var jv=new P,qv=new $e,Yv=new $e;var Zv=new P,Jv=new P,Kv=new P;var $v=new P,Qv=new to;var ex=new Ci;var tx=new P;function ol(e,t,i,r){let a=gp(r);switch(i){case Wl:return e*t;case jl:return e*t/a.components*a.byteLength;case Hs:return e*t/a.components*a.byteLength;case ki:return e*t*2/a.components*a.byteLength;case ks:return e*t*2/a.components*a.byteLength;case Xl:return e*t*3/a.components*a.byteLength;case Xt:return e*t*4/a.components*a.byteLength;case Ws:return e*t*4/a.components*a.byteLength;case Ba:case za:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ga:case Va:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case es:case is:return Math.max(e,16)*Math.max(t,8)/4;case Qn:case ts:return Math.max(e,8)*Math.max(t,8)/2;case rs:case as:case ss:case os:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ns:case Xa:case ls:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case hs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case us:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case cs:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ds:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ps:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case fs:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ms:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case gs:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case _s:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case vs:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case xs:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ys:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ss:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ms:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case bs:case Ts:case Es:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ws:case As:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ja:case Cs:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function gp(e){switch(e){case Ot:case Gl:return{byteLength:1,components:1};case Wr:case Vl:case ni:return{byteLength:2,components:1};case Gs:case Vs:return{byteLength:2,components:4};case ai:case zs:case ii:return{byteLength:4,components:1};case Hl:case kl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bs}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bs);function Zh(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function _p(e){let t=new WeakMap;function i(o,l){let h=o.array,u=o.usage,d=h.byteLength,c=e.createBuffer();e.bindBuffer(l,c),e.bufferData(l,h,u),o.onUploadCallback();let f;if(h instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=e.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=e.SHORT;else if(h instanceof Uint32Array)f=e.UNSIGNED_INT;else if(h instanceof Int32Array)f=e.INT;else if(h instanceof Int8Array)f=e.BYTE;else if(h instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,h){let u=l.array,d=l.updateRanges;if(e.bindBuffer(h,o),d.length===0)e.bufferSubData(h,0,u);else{d.sort((f,x)=>f.start-x.start);let c=0;for(let f=1;f<d.length;f++){let x=d[c],y=d[f];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++c,d[c]=y)}d.length=c+1;for(let f=0,x=d.length;f<x;f++){let y=d[f];e.bufferSubData(h,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:a,remove:n,update:s}}var vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ip=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ef=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,cf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,df=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_f=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Mf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ef=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,If=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Df=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Of=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ff=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Zf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$f=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,am=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ym=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Am=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Om=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Km=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:vp,alphahash_pars_fragment:xp,alphamap_fragment:yp,alphamap_pars_fragment:Sp,alphatest_fragment:Mp,alphatest_pars_fragment:bp,aomap_fragment:Tp,aomap_pars_fragment:Ep,batching_pars_vertex:wp,batching_vertex:Ap,begin_vertex:Cp,beginnormal_vertex:Rp,bsdfs:Pp,iridescence_fragment:Ip,bumpmap_pars_fragment:Lp,clipping_planes_fragment:Dp,clipping_planes_pars_fragment:Up,clipping_planes_pars_vertex:Np,clipping_planes_vertex:Op,color_fragment:Fp,color_pars_fragment:Bp,color_pars_vertex:zp,color_vertex:Gp,common:Vp,cube_uv_reflection_fragment:Hp,defaultnormal_vertex:kp,displacementmap_pars_vertex:Wp,displacementmap_vertex:Xp,emissivemap_fragment:jp,emissivemap_pars_fragment:qp,colorspace_fragment:Yp,colorspace_pars_fragment:Zp,envmap_fragment:Jp,envmap_common_pars_fragment:Kp,envmap_pars_fragment:$p,envmap_pars_vertex:Qp,envmap_physical_pars_fragment:cf,envmap_vertex:ef,fog_vertex:tf,fog_pars_vertex:rf,fog_fragment:af,fog_pars_fragment:nf,gradientmap_pars_fragment:sf,lightmap_pars_fragment:of,lights_lambert_fragment:lf,lights_lambert_pars_fragment:hf,lights_pars_begin:uf,lights_toon_fragment:df,lights_toon_pars_fragment:pf,lights_phong_fragment:ff,lights_phong_pars_fragment:mf,lights_physical_fragment:gf,lights_physical_pars_fragment:_f,lights_fragment_begin:vf,lights_fragment_maps:xf,lights_fragment_end:yf,lightprobes_pars_fragment:Sf,logdepthbuf_fragment:Mf,logdepthbuf_pars_fragment:bf,logdepthbuf_pars_vertex:Tf,logdepthbuf_vertex:Ef,map_fragment:wf,map_pars_fragment:Af,map_particle_fragment:Cf,map_particle_pars_fragment:Rf,metalnessmap_fragment:Pf,metalnessmap_pars_fragment:If,morphinstance_vertex:Lf,morphcolor_vertex:Df,morphnormal_vertex:Uf,morphtarget_pars_vertex:Nf,morphtarget_vertex:Of,normal_fragment_begin:Ff,normal_fragment_maps:Bf,normal_pars_fragment:zf,normal_pars_vertex:Gf,normal_vertex:Vf,normalmap_pars_fragment:Hf,clearcoat_normal_fragment_begin:kf,clearcoat_normal_fragment_maps:Wf,clearcoat_pars_fragment:Xf,iridescence_pars_fragment:jf,opaque_fragment:qf,packing:Yf,premultiplied_alpha_fragment:Zf,project_vertex:Jf,dithering_fragment:Kf,dithering_pars_fragment:$f,roughnessmap_fragment:Qf,roughnessmap_pars_fragment:em,shadowmap_pars_fragment:tm,shadowmap_pars_vertex:im,shadowmap_vertex:rm,shadowmask_pars_fragment:am,skinbase_vertex:nm,skinning_pars_vertex:sm,skinning_vertex:om,skinnormal_vertex:lm,specularmap_fragment:hm,specularmap_pars_fragment:um,tonemapping_fragment:cm,tonemapping_pars_fragment:dm,transmission_fragment:pm,transmission_pars_fragment:fm,uv_pars_fragment:mm,uv_pars_vertex:gm,uv_vertex:_m,worldpos_vertex:vm,background_vert:xm,background_frag:ym,backgroundCube_vert:Sm,backgroundCube_frag:Mm,cube_vert:bm,cube_frag:Tm,depth_vert:Em,depth_frag:wm,distance_vert:Am,distance_frag:Cm,equirect_vert:Rm,equirect_frag:Pm,linedashed_vert:Im,linedashed_frag:Lm,meshbasic_vert:Dm,meshbasic_frag:Um,meshlambert_vert:Nm,meshlambert_frag:Om,meshmatcap_vert:Fm,meshmatcap_frag:Bm,meshnormal_vert:zm,meshnormal_frag:Gm,meshphong_vert:Vm,meshphong_frag:Hm,meshphysical_vert:km,meshphysical_frag:Wm,meshtoon_vert:Xm,meshtoon_frag:jm,points_vert:qm,points_frag:Ym,shadow_vert:Zm,shadow_frag:Jm,sprite_vert:Km,sprite_frag:$m},ge={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ti={basic:{uniforms:Pt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Pt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Pt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Pt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Pt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Pt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Pt([ge.points,ge.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Pt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Pt([ge.common,ge.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Pt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Pt([ge.sprite,ge.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Pt([ge.common,ge.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Pt([ge.lights,ge.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ti.physical={uniforms:Pt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var Na={r:0,b:0,g:0},Qm=new Ke,Jh=new We;Jh.set(-1,0,0,0,1,0,0,0,1);function eg(e,t,i,r,a,n){let s=new $e(0),o=a===!0?0:1,l,h,u=null,d=0,c=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let v=b.backgroundBlurriness>0;w=t.get(w,v)}return w}function x(b){let w=!1,v=f(b);v===null?g(s,o):v&&v.isColor&&(g(v,1),w=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,n):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function y(b,w){let v=f(w);v&&(v.isCubeTexture||v.mapping===Qa)?(h===void 0&&(h=new gt(new qi(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:Tr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Qm.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Jh),h.material.toneMapped=et.getTransfer(v.colorSpace)!==nt,(u!==v||d!==v.version||c!==e.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,c=e.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new gt(new ta(2,2),new zt({name:"BackgroundMaterial",uniforms:Tr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=et.getTransfer(v.colorSpace)!==nt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||c!==e.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,c=e.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,w){b.getRGB(Na,Gh(e)),i.buffers.color.setClear(Na.r,Na.g,Na.b,w,n)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(b,w=1){s.set(b),o=w,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(s,o)},render:x,addToRenderList:y,dispose:p}}function tg(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=c(null),n=a,s=!1;function o(I,O,q,D,G){let J=!1,k=d(I,D,q,O);n!==k&&(n=k,h(n.object)),J=f(I,D,q,G),J&&x(I,D,q,G),G!==null&&t.update(G,e.ELEMENT_ARRAY_BUFFER),(J||s)&&(s=!1,v(I,O,q,D),G!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return e.createVertexArray()}function h(I){return e.bindVertexArray(I)}function u(I){return e.deleteVertexArray(I)}function d(I,O,q,D){let G=D.wireframe===!0,J=r[O.id];J===void 0&&(J={},r[O.id]=J);let k=I.isInstancedMesh===!0?I.id:0,ue=J[k];ue===void 0&&(ue={},J[k]=ue);let X=ue[q.id];X===void 0&&(X={},ue[q.id]=X);let Z=X[G];return Z===void 0&&(Z=c(l()),X[G]=Z),Z}function c(I){let O=[],q=[],D=[];for(let G=0;G<i;G++)O[G]=0,q[G]=0,D[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:q,attributeDivisors:D,object:I,attributes:{},index:null}}function f(I,O,q,D){let G=n.attributes,J=O.attributes,k=0,ue=q.getAttributes();for(let X in ue)if(ue[X].location>=0){let Z=G[X],K=J[X];if(K===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),Z===void 0||Z.attribute!==K||K&&Z.data!==K.data)return!0;k++}return n.attributesNum!==k||n.index!==D}function x(I,O,q,D){let G={},J=O.attributes,k=0,ue=q.getAttributes();for(let X in ue)if(ue[X].location>=0){let Z=J[X];Z===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor));let K={};K.attribute=Z,Z&&Z.data&&(K.data=Z.data),G[X]=K,k++}n.attributes=G,n.attributesNum=k,n.index=D}function y(){let I=n.newAttributes;for(let O=0,q=I.length;O<q;O++)I[O]=0}function g(I){p(I,0)}function p(I,O){let q=n.newAttributes,D=n.enabledAttributes,G=n.attributeDivisors;q[I]=1,D[I]===0&&(e.enableVertexAttribArray(I),D[I]=1),G[I]!==O&&(e.vertexAttribDivisor(I,O),G[I]=O)}function b(){let I=n.newAttributes,O=n.enabledAttributes;for(let q=0,D=O.length;q<D;q++)O[q]!==I[q]&&(e.disableVertexAttribArray(q),O[q]=0)}function w(I,O,q,D,G,J,k){k===!0?e.vertexAttribIPointer(I,O,q,G,J):e.vertexAttribPointer(I,O,q,D,G,J)}function v(I,O,q,D){y();let G=D.attributes,J=q.getAttributes(),k=O.defaultAttributeValues;for(let ue in J){let X=J[ue];if(X.location>=0){let Z=G[ue];if(Z===void 0&&(ue==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),ue==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){let K=Z.normalized,Fe=Z.itemSize,Me=t.get(Z);if(Me===void 0)continue;let it=Me.buffer,Ue=Me.type,Y=Me.bytesPerElement,ne=Ue===e.INT||Ue===e.UNSIGNED_INT||Z.gpuType===zs;if(Z.isInterleavedBufferAttribute){let oe=Z.data,Re=oe.stride,Ne=Z.offset;if(oe.isInstancedInterleavedBuffer){for(let fe=0;fe<X.locationSize;fe++)p(X.location+fe,oe.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let fe=0;fe<X.locationSize;fe++)g(X.location+fe);e.bindBuffer(e.ARRAY_BUFFER,it);for(let fe=0;fe<X.locationSize;fe++)w(X.location+fe,Fe/X.locationSize,Ue,K,Re*Y,(Ne+Fe/X.locationSize*fe)*Y,ne)}else{if(Z.isInstancedBufferAttribute){for(let oe=0;oe<X.locationSize;oe++)p(X.location+oe,Z.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let oe=0;oe<X.locationSize;oe++)g(X.location+oe);e.bindBuffer(e.ARRAY_BUFFER,it);for(let oe=0;oe<X.locationSize;oe++)w(X.location+oe,Fe/X.locationSize,Ue,K,Fe*Y,Fe/X.locationSize*oe*Y,ne)}}else if(k!==void 0){let K=k[ue];if(K!==void 0)switch(K.length){case 2:e.vertexAttrib2fv(X.location,K);break;case 3:e.vertexAttrib3fv(X.location,K);break;case 4:e.vertexAttrib4fv(X.location,K);break;default:e.vertexAttrib1fv(X.location,K)}}}}b()}function T(){M();for(let I in r){let O=r[I];for(let q in O){let D=O[q];for(let G in D){let J=D[G];for(let k in J)u(J[k].object),delete J[k];delete D[G]}}delete r[I]}}function A(I){if(r[I.id]===void 0)return;let O=r[I.id];for(let q in O){let D=O[q];for(let G in D){let J=D[G];for(let k in J)u(J[k].object),delete J[k];delete D[G]}}delete r[I.id]}function R(I){for(let O in r){let q=r[O];for(let D in q){let G=q[D];if(G[I.id]===void 0)continue;let J=G[I.id];for(let k in J)u(J[k].object),delete J[k];delete G[I.id]}}}function _(I){for(let O in r){let q=r[O],D=I.isInstancedMesh===!0?I.id:0,G=q[D];if(G!==void 0){for(let J in G){let k=G[J];for(let ue in k)u(k[ue].object),delete k[ue];delete G[J]}delete q[D],Object.keys(q).length===0&&delete r[O]}}}function M(){F(),s=!0,n!==a&&(n=a,h(n.object))}function F(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:M,resetDefaultState:F,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:g,disableUnusedAttributes:b}}function ig(e,t,i){let r;function a(l){r=l}function n(l,h){e.drawArrays(r,l,h),i.update(h,r,1)}function s(l,h,u){u!==0&&(e.drawArraysInstanced(r,l,h,u),i.update(h,r,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,h,0,u);let d=0;for(let c=0;c<u;c++)d+=h[c];i.update(d,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function rg(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(R){return!(R!==Xt&&r.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let _=R===ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ot&&R!==ii&&!_&&r.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",u=l(h);u!==h&&(Be("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let d=i.logarithmicDepthBuffer===!0,c=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&c===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),b=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),w=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:c,maxTextures:f,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:v,maxSamples:T,samples:A}}function ag(e){let t=this,i=null,r=0,a=!1,n=!1,s=new ei,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c){let f=d.length!==0||c||r!==0||a;return a=c,r=d.length,f},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,c){i=u(d,c,0)},this.setState=function(d,c,f){let x=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,p=e.get(d);if(!a||x===null||x.length===0||n&&!g)n?u(null):h();else{let b=n?0:r,w=b*4,v=p.clippingState||null;l.value=v,v=u(x,c,w,f);for(let T=0;T!==w;++T)v[T]=i[T];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(d,c,f,x){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=l.value,x!==!0||g===null){let p=f+y*4,b=c.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let w=0,v=f;w!==y;++w,v+=4)s.copy(d[w]).applyMatrix4(b,o),s.normal.toArray(g,v),g[v+3]=s.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}var mr=4,ng=6,sg=20,og=256,Ur=new Wh,ll=new $e,Bn=null,zn=0,Gn=0,Vn=!1,lg=new P,Oi=new P,hl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=lg}=a;Bn=this._renderer.getRenderTarget(),zn=this._renderer.getActiveCubeFace(),Gn=this._renderer.getActiveMipmapLevel(),Vn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bn,zn,Gn),this._renderer.xr.enabled=Vn,e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bn=this._renderer.getRenderTarget(),zn=this._renderer.getActiveCubeFace(),Gn=this._renderer.getActiveMipmapLevel(),Vn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:At,minFilter:At,generateMipmaps:!1,type:ni,format:Xt,colorSpace:Ya,depthBuffer:!1},r=ul(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ul(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hg(a)),this._blurMaterial=cg(a,e,t),this._ggxMaterial=ug(a,e,t)}return r}_compileMaterial(e){let t=new gt(new dt,e);this._renderer.compile(t,Ur)}_sceneToCubeUV(e,t,i,r,a){let n=new Lt(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(ll),l.toneMapping=ri,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gt(new qi,new wr({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,c=d.material,f=!1,x=e.background;x?x.isColor&&(c.color.copy(x),e.background=null,f=!0):(c.color.copy(ll),f=!0);for(let y=0;y<6;y++){let g=y%3;g===0?(n.up.set(0,s[y],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[y],a.y,a.z)):g===1?(n.up.set(0,0,s[y]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[y],a.z)):(n.up.set(0,s[y],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[y]));let p=this._cubeSize;hr(r,g*p,y>2?p:0,p,p),l.setRenderTarget(r),f&&l.render(d,n),l.render(e,n)}l.toneMapping=u,l.autoClear=h,e.background=x}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Hi||e.mapping===xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cl());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;hr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,Ur)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let o=n.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,c=u*d,{_lodMax:f}=this,x=this._sizeLods[i],y=3*x*(i>f-mr?i-f+mr:0),g=4*(this._cubeSize-x);o.envMap.value=e.texture,o.roughness.value=c,o.mipInt.value=f-t,hr(a,y,g,3*x,2*x),r.setRenderTarget(a),r.render(s,Ur),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=f-i,hr(e,y,g,3*x,2*x),r.setRenderTarget(e),r.render(s,Ur)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,s=this._blurMaterial,o=this._lodMeshes[r];o.material=s;let l=s.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[r],u=3*h*(r>this._lodMax-mr?r-this._lodMax+mr:0),d=4*(this._cubeSize-h);hr(t,u,d,3*h,2*h),n.setRenderTarget(t),n.render(o,Ur)}};function hg(e){let t=[],i=[],r=e,a=e-mr+1+ng;for(let n=0;n<a;n++){let s=Math.pow(2,r);t.push(s);let o=1/(s-2),l=-o,h=1+o,u=[l,l,h,l,h,h,l,l,h,h,l,h],d=6,c=6,f=3,x=new Float32Array(f*c*d),y=new Float32Array(f*c*d);for(let p=0;p<d;p++){let b=p%3*2/3-1,w=p>2?0:-1,v=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];x.set(v,f*c*p);for(let T=0;T<c;T++){let A=u[T*2]*2-1,R=u[T*2+1]*2-1;p===0?Oi.set(1,R,A):p===1?Oi.set(-A,1,-R):p===2?Oi.set(-A,R,1):p===3?Oi.set(-1,R,-A):p===4?Oi.set(-A,-1,R):Oi.set(A,R,-1),Oi.toArray(y,(p*c+T)*f)}}let g=new dt;g.setAttribute("position",new Yt(x,f)),g.setAttribute("outputDirection",new Yt(y,f)),i.push(new gt(g,null)),r>mr&&r--}return{lodMeshes:i,sizeLods:t}}function ul(e,t,i){let r=new qt(e,t,i);return r.texture.mapping=Qa,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function hr(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function ug(e,t,i){return new zt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:og,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tn(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function cg(e,t,i){return new zt({name:"SphericalGaussianBlur",defines:{SAMPLES:sg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tn(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function cl(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function dl(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function tn(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Kh=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qi(5,5,5),a=new zt({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:gi});a.uniforms.tEquirect.value=t;let n=new gt(r,a),s=t.minFilter;return t.minFilter===Fi&&(t.minFilter=At),new np(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};function dg(e){let t=new WeakMap,i=new WeakMap,r=null;function a(c,f=!1){return c==null?null:f?s(c):n(c)}function n(c){if(c&&c.isTexture){let f=c.mapping;if(f===on||f===ln)if(t.has(c)){let x=t.get(c).texture;return o(x,c.mapping)}else{let x=c.image;if(x&&x.height>0){let y=new Kh(x.height);return y.fromEquirectangularTexture(e,c),t.set(c,y),c.addEventListener("dispose",h),o(y.texture,c.mapping)}else return null}}return c}function s(c){if(c&&c.isTexture){let f=c.mapping,x=f===on||f===ln,y=f===Hi||f===xr;if(x||y){let g=i.get(c),p=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==p)return r===null&&(r=new hl(e)),g=x?r.fromEquirectangular(c,g):r.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,i.set(c,g),g.texture;if(g!==void 0)return g.texture;{let b=c.image;return x&&b&&b.height>0||y&&b&&l(b)?(r===null&&(r=new hl(e)),g=x?r.fromEquirectangular(c):r.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,i.set(c,g),c.addEventListener("dispose",u),g.texture):null}}}return c}function o(c,f){return f===on?c.mapping=Hi:f===ln&&(c.mapping=xr),c}function l(c){let f=0,x=6;for(let y=0;y<x;y++)c[y]!==void 0&&f++;return f===x}function h(c){let f=c.target;f.removeEventListener("dispose",h);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function u(c){let f=c.target;f.removeEventListener("dispose",u);let x=i.get(f);x!==void 0&&(i.delete(f),x.dispose())}function d(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:d}}function pg(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&gr("WebGLRenderer: "+r+" extension not supported."),a}}}function fg(e,t,i,r){let a={},n=new WeakMap;function s(d){let c=d.target;c.index!==null&&t.remove(c.index);for(let x in c.attributes)t.remove(c.attributes[x]);c.removeEventListener("dispose",s),delete a[c.id];let f=n.get(c);f&&(t.remove(f),n.delete(c)),r.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,i.memory.geometries--}function o(d,c){return a[c.id]===!0||(c.addEventListener("dispose",s),a[c.id]=!0,i.memory.geometries++),c}function l(d){let c=d.attributes;for(let f in c)t.update(c[f],e.ARRAY_BUFFER)}function h(d){let c=[],f=d.index,x=d.attributes.position,y=0;if(x===void 0)return;if(f!==null){let b=f.array;y=f.version;for(let w=0,v=b.length;w<v;w+=3){let T=b[w+0],A=b[w+1],R=b[w+2];c.push(T,A,A,R,R,T)}}else{let b=x.array;y=x.version;for(let w=0,v=b.length/3-1;w<v;w+=3){let T=w+0,A=w+1,R=w+2;c.push(T,A,A,R,R,T)}}let g=new(x.count>=65535?ah:rh)(c,1);g.version=y;let p=n.get(d);p&&t.remove(p),n.set(d,g)}function u(d){let c=n.get(d);if(c){let f=d.index;f!==null&&c.version<f.version&&h(d)}else h(d);return n.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function mg(e,t,i){let r;function a(d){r=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,c){e.drawElements(r,c,n,d*s),i.update(c,r,1)}function h(d,c,f){f!==0&&(e.drawElementsInstanced(r,c,n,d*s,f),i.update(c,r,f))}function u(d,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,c,0,n,d,0,f);let x=0;for(let y=0;y<f;y++)x+=c[y];i.update(x,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=u}function gg(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:Ve("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function _g(e,t,i){let r=new WeakMap,a=new ct;function n(s,o,l){let h=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,c=r.get(o);if(c===void 0||c.count!==d){let f=function(){_.dispose(),r.delete(o),o.removeEventListener("dispose",f)};c!==void 0&&c.texture.dispose();let x=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],v=0;x===!0&&(v=1),y===!0&&(v=2),g===!0&&(v=3);let T=o.attributes.position.count*v,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let R=new Float32Array(T*A*4*d),_=new Ql(R,T,A,d);_.type=ii,_.needsUpdate=!0;let M=v*4;for(let F=0;F<d;F++){let I=p[F],O=b[F],q=w[F],D=T*A*4*F;for(let G=0;G<I.count;G++){let J=G*M;x===!0&&(a.fromBufferAttribute(I,G),R[D+J+0]=a.x,R[D+J+1]=a.y,R[D+J+2]=a.z,R[D+J+3]=0),y===!0&&(a.fromBufferAttribute(O,G),R[D+J+4]=a.x,R[D+J+5]=a.y,R[D+J+6]=a.z,R[D+J+7]=0),g===!0&&(a.fromBufferAttribute(q,G),R[D+J+8]=a.x,R[D+J+9]=a.y,R[D+J+10]=a.z,R[D+J+11]=q.itemSize===4?a.w:1)}}c={count:d,texture:_,size:new le(T,A)},r.set(o,c),o.addEventListener("dispose",f)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let f=0;for(let y=0;y<h.length;y++)f+=h[y];let x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",x),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",c.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",c.size)}return{update:n}}function vg(e,t,i,r,a){let n=new WeakMap;function s(h){let u=a.render.frame,d=h.geometry,c=t.get(h,d);if(n.get(c)!==u&&(t.update(c),n.set(c,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),n.get(h)!==u&&(i.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,e.ARRAY_BUFFER),n.set(h,u))),h.isSkinnedMesh){let f=h.skeleton;n.get(f)!==u&&(f.update(),n.set(f,u))}return c}function o(){n=new WeakMap}function l(h){let u=h.target;u.removeEventListener("dispose",l),r.releaseStatesOfObject(u),i.remove(u.instanceMatrix),u.instanceColor!==null&&i.remove(u.instanceColor)}return{update:s,dispose:o}}var xg={[Dl]:"LINEAR_TONE_MAPPING",[Ul]:"REINHARD_TONE_MAPPING",[Nl]:"CINEON_TONE_MAPPING",[$a]:"ACES_FILMIC_TONE_MAPPING",[Fl]:"AGX_TONE_MAPPING",[Bl]:"NEUTRAL_TONE_MAPPING",[Ol]:"CUSTOM_TONE_MAPPING"};function yg(e,t,i,r,a,n){let s=new qt(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=new dt;h.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ke([0,2,0,0,2,0],2));let u=new Vd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new gt(h,u),c=new Wh(-1,1,1,-1,0,1),f=null,x=null,y=!1,g,p=null,b=[],w=!1;this.setSize=function(v,T){s.setSize(v,T),o!==null&&o.setSize(v,T),l!==null&&l.setSize(v,T);for(let A=0;A<b.length;A++){let R=b[A];R.setSize&&R.setSize(v,T)}},this.setEffects=function(v){b=v,w=b.length>0&&b[0].isRenderPass===!0;let T=s.width,A=s.height;b.length>0&&o===null&&(o=new qt(T,A,{type:ni,depthBuffer:!1,stencilBuffer:!1}),l=new qt(T,A,{type:ni,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<b.length;R++){let _=b[R];_.setSize&&_.setSize(T,A)}},this.begin=function(v,T){if(y||v.toneMapping===ri&&b.length===0)return!1;if(p=T,T!==null){let A=T.width,R=T.height;(s.width!==A||s.height!==R)&&this.setSize(A,R)}return w===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=ri,!0},this.hasRenderPass=function(){return w},this.end=function(v,T){v.toneMapping=g,y=!0;let A=s,R=o;for(let _=0;_<b.length;_++){let M=b[_];M.enabled!==!1&&(M.render(v,R,A,T),M.needsSwap!==!1&&(A=R,R=R===o?l:o))}if(f!==v.outputColorSpace||x!==v.toneMapping){f=v.outputColorSpace,x=v.toneMapping,u.defines={},et.getTransfer(f)===nt&&(u.defines.SRGB_TRANSFER="");let _=xg[x];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,v.setRenderTarget(p),v.render(d,c),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var $h=new Zt,Os=new Yr(1,1),Qh=new Ql,eu=new Mc,tu=new lh,pl=[],fl=[],ml=new Float32Array(16),gl=new Float32Array(9),_l=new Float32Array(4);function Cr(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=pl[a];if(n===void 0&&(n=new Float32Array(a),pl[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function St(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Mt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function rn(e,t){let i=fl[t];i===void 0&&(i=new Int32Array(t),fl[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function Sg(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Mg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(St(i,t))return;e.uniform2fv(this.addr,t),Mt(i,t)}}function bg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(St(i,t))return;e.uniform3fv(this.addr,t),Mt(i,t)}}function Tg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(St(i,t))return;e.uniform4fv(this.addr,t),Mt(i,t)}}function Eg(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(St(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Mt(i,t)}else{if(St(i,r))return;_l.set(r),e.uniformMatrix2fv(this.addr,!1,_l),Mt(i,r)}}function wg(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(St(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Mt(i,t)}else{if(St(i,r))return;gl.set(r),e.uniformMatrix3fv(this.addr,!1,gl),Mt(i,r)}}function Ag(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(St(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Mt(i,t)}else{if(St(i,r))return;ml.set(r),e.uniformMatrix4fv(this.addr,!1,ml),Mt(i,r)}}function Cg(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Rg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(St(i,t))return;e.uniform2iv(this.addr,t),Mt(i,t)}}function Pg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(St(i,t))return;e.uniform3iv(this.addr,t),Mt(i,t)}}function Ig(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(St(i,t))return;e.uniform4iv(this.addr,t),Mt(i,t)}}function Lg(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Dg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(St(i,t))return;e.uniform2uiv(this.addr,t),Mt(i,t)}}function Ug(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(St(i,t))return;e.uniform3uiv(this.addr,t),Mt(i,t)}}function Ng(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(St(i,t))return;e.uniform4uiv(this.addr,t),Mt(i,t)}}function Og(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(Os.compareFunction=i.isReversedDepthBuffer()?js:Xs,n=Os):n=$h,i.setTexture2D(t||n,a)}function Fg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||eu,a)}function Bg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||tu,a)}function zg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Qh,a)}function Gg(e){switch(e){case 5126:return Sg;case 35664:return Mg;case 35665:return bg;case 35666:return Tg;case 35674:return Eg;case 35675:return wg;case 35676:return Ag;case 5124:case 35670:return Cg;case 35667:case 35671:return Rg;case 35668:case 35672:return Pg;case 35669:case 35673:return Ig;case 5125:return Lg;case 36294:return Dg;case 36295:return Ug;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return zg}}function Vg(e,t){e.uniform1fv(this.addr,t)}function Hg(e,t){let i=Cr(t,this.size,2);e.uniform2fv(this.addr,i)}function kg(e,t){let i=Cr(t,this.size,3);e.uniform3fv(this.addr,i)}function Wg(e,t){let i=Cr(t,this.size,4);e.uniform4fv(this.addr,i)}function Xg(e,t){let i=Cr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function jg(e,t){let i=Cr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function qg(e,t){let i=Cr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Yg(e,t){e.uniform1iv(this.addr,t)}function Zg(e,t){e.uniform2iv(this.addr,t)}function Jg(e,t){e.uniform3iv(this.addr,t)}function Kg(e,t){e.uniform4iv(this.addr,t)}function $g(e,t){e.uniform1uiv(this.addr,t)}function Qg(e,t){e.uniform2uiv(this.addr,t)}function e0(e,t){e.uniform3uiv(this.addr,t)}function t0(e,t){e.uniform4uiv(this.addr,t)}function i0(e,t,i){let r=this.cache,a=t.length,n=rn(i,a);St(r,n)||(e.uniform1iv(this.addr,n),Mt(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=Os:s=$h;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function r0(e,t,i){let r=this.cache,a=t.length,n=rn(i,a);St(r,n)||(e.uniform1iv(this.addr,n),Mt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||eu,n[s])}function a0(e,t,i){let r=this.cache,a=t.length,n=rn(i,a);St(r,n)||(e.uniform1iv(this.addr,n),Mt(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||tu,n[s])}function n0(e,t,i){let r=this.cache,a=t.length,n=rn(i,a);St(r,n)||(e.uniform1iv(this.addr,n),Mt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||Qh,n[s])}function s0(e){switch(e){case 5126:return Vg;case 35664:return Hg;case 35665:return kg;case 35666:return Wg;case 35674:return Xg;case 35675:return jg;case 35676:return qg;case 5124:case 35670:return Yg;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return Kg;case 5125:return $g;case 36294:return Qg;case 36295:return e0;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return n0}}var o0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Gg(t.type)}},l0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s0(t.type)}},h0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},Hn=/(\w+)(\])?(\[|\.)?/g;function vl(e,t){e.seq.push(t),e.map[t.id]=t}function u0(e,t,i){let r=e.name,a=r.length;for(Hn.lastIndex=0;;){let n=Hn.exec(r),s=Hn.lastIndex,o=n[1],l=n[2]==="]",h=n[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===a){vl(i,h===void 0?new o0(o,e,t):new l0(o,e,t));break}else{let u=i.map[o];u===void 0&&(u=new h0(o),vl(i,u)),i=u}}}var Wa=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);u0(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function xl(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var c0=37297,d0=0;function p0(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var yl=new We;function f0(e){et._getMatrix(yl,et.workingColorSpace,e);let t=`mat3( ${yl.elements.map(i=>i.toFixed(4))} )`;switch(et.getTransfer(e)){case Za:return[t,"LinearTransferOETF"];case nt:return[t,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Sl(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+p0(e.getShaderSource(t),s)}else return a}function m0(e,t){let i=f0(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var g0={[Dl]:"Linear",[Ul]:"Reinhard",[Nl]:"Cineon",[$a]:"ACESFilmic",[Fl]:"AgX",[Bl]:"Neutral",[Ol]:"Custom"};function _0(e,t){let i=g0[t];return i===void 0?(Be("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Oa=new P;function v0(){et.getLuminanceCoefficients(Oa);let e=Oa.x.toFixed(4),t=Oa.y.toFixed(4),i=Oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x0(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function y0(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function S0(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function Br(e){return e!==""}function Ml(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var M0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fs(e){return e.replace(M0,T0)}var b0=new Map;function T0(e,t){let i=Ye[t];if(i===void 0){let r=b0.get(t);if(r!==void 0)i=Ye[r],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Fs(i)}var E0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tl(e){return e.replace(E0,w0)}function w0(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function El(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var A0={[Fa]:"SHADOWMAP_TYPE_PCF",[Or]:"SHADOWMAP_TYPE_VSM"};function C0(e){return A0[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var R0={[Hi]:"ENVMAP_TYPE_CUBE",[xr]:"ENVMAP_TYPE_CUBE",[Qa]:"ENVMAP_TYPE_CUBE_UV"};function P0(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":R0[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var I0={[xr]:"ENVMAP_MODE_REFRACTION"};function L0(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":I0[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var D0={[Ll]:"ENVMAP_BLENDING_MULTIPLY",[Fu]:"ENVMAP_BLENDING_MIX",[Bu]:"ENVMAP_BLENDING_ADD"};function U0(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":D0[e.combine]||"ENVMAP_BLENDING_NONE"}function N0(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function O0(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=C0(i),h=P0(i),u=L0(i),d=U0(i),c=N0(i),f=x0(i),x=y0(n),y=a.createProgram(),g,p,b=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x].filter(Br).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x].filter(Br).join(`
`),p.length>0&&(p+=`
`)):(g=[El(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),p=[El(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+u:"",i.envMap?"#define "+d:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ri?"#define TONE_MAPPING":"",i.toneMapping!==ri?Ye.tonemapping_pars_fragment:"",i.toneMapping!==ri?_0("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,m0("linearToOutputTexel",i.outputColorSpace),v0(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Br).join(`
`)),s=Fs(s),s=Ml(s,i),s=bl(s,i),o=Fs(o),o=Ml(o,i),o=bl(o,i),s=Tl(s),o=Tl(o),i.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",i.glslVersion===To?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===To?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=b+g+s,v=b+p+o,T=xl(a,a.VERTEX_SHADER,w),A=xl(a,a.FRAGMENT_SHADER,v);a.attachShader(y,T),a.attachShader(y,A),i.index0AttributeName!==void 0?a.bindAttribLocation(y,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function R(I){if(e.debug.checkShaderErrors){let O=a.getProgramInfoLog(y)||"",q=a.getShaderInfoLog(T)||"",D=a.getShaderInfoLog(A)||"",G=O.trim(),J=q.trim(),k=D.trim(),ue=!0,X=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(ue=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,y,T,A);else{let Z=Sl(a,T,"vertex"),K=Sl(a,A,"fragment");Ve("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+Z+`
`+K)}else G!==""?Be("WebGLProgram: Program Info Log:",G):(J===""||k==="")&&(X=!1);X&&(I.diagnostics={runnable:ue,programLog:G,vertexShader:{log:J,prefix:g},fragmentShader:{log:k,prefix:p}})}a.deleteShader(T),a.deleteShader(A),_=new Wa(a,y),M=S0(a,y)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let F=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=a.getProgramParameter(y,c0)),F},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=d0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=A,this}var F0=0,B0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new z0(e),t.set(e,i)),i}},z0=class{constructor(e){this.id=F0++,this.code=e,this.usedTimes=0}};function G0(e){return e===ki||e===Xa||e===ja}function V0(e,t,i,r,a,n){let s=new Zs,o=new B0,l=new Set,h=[],u=new Map,d=r.logarithmicDepthBuffer,c=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,M,F,I,O,q){let D=I.fog,G=O.geometry,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ue=t.get(_.envMap||J,k),X=ue&&ue.mapping===Qa?ue.image.height:null,Z=f[_.type];_.precision!==null&&(c=r.getMaxPrecision(_.precision),c!==_.precision&&Be("WebGLProgram.getParameters:",_.precision,"not supported, using",c,"instead."));let K=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Fe=K!==void 0?K.length:0,Me=0;G.morphAttributes.position!==void 0&&(Me=1),G.morphAttributes.normal!==void 0&&(Me=2),G.morphAttributes.color!==void 0&&(Me=3);let it,Ue,Y,ne;if(Z){let yt=ti[Z];it=yt.vertexShader,Ue=yt.fragmentShader}else{it=_.vertexShader,Ue=_.fragmentShader;let yt=o.getVertexShaderStage(_),at=o.getFragmentShaderStage(_);o.update(_,yt,at),Y=yt.id,ne=at.id}let oe=e.getRenderTarget(),Re=e.state.buffers.depth.getReversed(),Ne=O.isInstancedMesh===!0,fe=O.isBatchedMesh===!0,je=!!_.map,ee=!!_.matcap,Q=!!ue,he=!!_.aoMap,ye=!!_.lightMap,Se=!!_.bumpMap&&_.wireframe===!1,be=!!_.normalMap,Le=!!_.displacementMap,Oe=!!_.emissiveMap,ze=!!_.metalnessMap,L=!!_.roughnessMap,rt=_.anisotropy>0,Ze=_.clearcoat>0,qe=_.dispersion>0,E=_.retroreflectivity>0,m=_.iridescence>0,C=_.sheen>0,U=_.transmission>0,j=rt&&!!_.anisotropyMap,te=Ze&&!!_.clearcoatMap,ce=Ze&&!!_.clearcoatNormalMap,N=Ze&&!!_.clearcoatRoughnessMap,ie=m&&!!_.iridescenceMap,pe=m&&!!_.iridescenceThicknessMap,me=C&&!!_.sheenColorMap,re=C&&!!_.sheenRoughnessMap,Ae=!!_.specularMap,Ie=!!_.specularColorMap,He=!!_.specularIntensityMap,Xe=U&&!!_.transmissionMap,z=U&&!!_.thicknessMap,$=!!_.gradientMap,ae=!!_.alphaMap,ve=_.alphaTest>0,Ee=!!_.alphaHash,se=!!_.extensions,_e=ri;_.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(_e=e.toneMapping);let De={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:it,fragmentShader:Ue,defines:_.defines,customVertexShaderID:Y,customFragmentShaderID:ne,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:c,batching:fe,batchingColor:fe&&O._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&O.instanceColor!==null,instancingMorph:Ne&&O.morphTexture!==null,outputColorSpace:oe===null?e.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:je,matcap:ee,envMap:Q,envMapMode:Q&&ue.mapping,envMapCubeUVHeight:X,aoMap:he,lightMap:ye,bumpMap:Se,normalMap:be,displacementMap:Le,emissiveMap:Oe,normalMapObjectSpace:be&&_.normalMapType===Vu,normalMapTangentSpace:be&&_.normalMapType===Ps,packedNormalMap:be&&_.normalMapType===Ps&&G0(_.normalMap.format),metalnessMap:ze,roughnessMap:L,anisotropy:rt,anisotropyMap:j,clearcoat:Ze,clearcoatMap:te,clearcoatNormalMap:ce,clearcoatRoughnessMap:N,dispersion:qe,retroreflection:E,iridescence:m,iridescenceMap:ie,iridescenceThicknessMap:pe,sheen:C,sheenColorMap:me,sheenRoughnessMap:re,specularMap:Ae,specularColorMap:Ie,specularIntensityMap:He,transmission:U,transmissionMap:Xe,thicknessMap:z,gradientMap:$,opaque:_.transparent===!1&&_.blending===Gi&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:ve,alphaHash:Ee,combine:_.combine,mapUv:je&&x(_.map.channel),aoMapUv:he&&x(_.aoMap.channel),lightMapUv:ye&&x(_.lightMap.channel),bumpMapUv:Se&&x(_.bumpMap.channel),normalMapUv:be&&x(_.normalMap.channel),displacementMapUv:Le&&x(_.displacementMap.channel),emissiveMapUv:Oe&&x(_.emissiveMap.channel),metalnessMapUv:ze&&x(_.metalnessMap.channel),roughnessMapUv:L&&x(_.roughnessMap.channel),anisotropyMapUv:j&&x(_.anisotropyMap.channel),clearcoatMapUv:te&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ce&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:me&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:re&&x(_.sheenRoughnessMap.channel),specularMapUv:Ae&&x(_.specularMap.channel),specularColorMapUv:Ie&&x(_.specularColorMap.channel),specularIntensityMapUv:He&&x(_.specularIntensityMap.channel),transmissionMapUv:Xe&&x(_.transmissionMap.channel),thicknessMapUv:z&&x(_.thicknessMap.channel),alphaMapUv:ae&&x(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(be||rt),vertexNormals:!!G.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(je||ae),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||G.attributes.normal===void 0&&be===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Re,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:Me,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&F.length>0,shadowMapType:e.shadowMap.type,toneMapping:_e,decodeVideoTexture:je&&_.map.isVideoTexture===!0&&et.getTransfer(_.map.colorSpace)===nt,decodeVideoTextureEmissive:Oe&&_.emissiveMap.isVideoTexture===!0&&et.getTransfer(_.emissiveMap.colorSpace)===nt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Wt,flipSided:_.side===Dt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:se&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&_.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function g(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let F in _.defines)M.push(F),M.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(p(M,_),b(M,_),M.push(e.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function p(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function b(_,M){s.disableAll(),M.instancing&&s.enable(0),M.instancingColor&&s.enable(1),M.instancingMorph&&s.enable(2),M.matcap&&s.enable(3),M.envMap&&s.enable(4),M.normalMapObjectSpace&&s.enable(5),M.normalMapTangentSpace&&s.enable(6),M.clearcoat&&s.enable(7),M.iridescence&&s.enable(8),M.alphaTest&&s.enable(9),M.vertexColors&&s.enable(10),M.vertexAlphas&&s.enable(11),M.vertexUv1s&&s.enable(12),M.vertexUv2s&&s.enable(13),M.vertexUv3s&&s.enable(14),M.vertexTangents&&s.enable(15),M.anisotropy&&s.enable(16),M.alphaHash&&s.enable(17),M.batching&&s.enable(18),M.dispersion&&s.enable(19),M.retroreflection&&s.enable(24),M.batchingColor&&s.enable(20),M.gradientMap&&s.enable(21),M.packedNormalMap&&s.enable(22),M.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.reversedDepthBuffer&&s.enable(4),M.skinning&&s.enable(5),M.morphTargets&&s.enable(6),M.morphNormals&&s.enable(7),M.morphColors&&s.enable(8),M.premultipliedAlpha&&s.enable(9),M.shadowMapEnabled&&s.enable(10),M.doubleSided&&s.enable(11),M.flipSided&&s.enable(12),M.useDepthPacking&&s.enable(13),M.dithering&&s.enable(14),M.transmission&&s.enable(15),M.sheen&&s.enable(16),M.opaque&&s.enable(17),M.pointsUvs&&s.enable(18),M.decodeVideoTexture&&s.enable(19),M.decodeVideoTextureEmissive&&s.enable(20),M.alphaToCoverage&&s.enable(21),M.numLightProbeGrids>0&&s.enable(22),M.hasPositionAttribute&&s.enable(23),_.push(s.mask)}function w(_){let M=f[_.type],F;if(M){let I=ti[M];F=Bd.clone(I.uniforms)}else F=_.uniforms;return F}function v(_,M){let F=u.get(M);return F!==void 0?++F.usedTimes:(F=new O0(e,M,_,a),h.push(F),u.set(M,F)),F}function T(_){if(--_.usedTimes===0){let M=h.indexOf(_);h[M]=h[h.length-1],h.pop(),u.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:w,acquireProgram:v,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:R}}function H0(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function k0(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function wl(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Al(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(c){let f=0;return c.isInstancedMesh&&(f+=2),c.isSkinnedMesh&&(f+=1),f}function o(c,f,x,y,g,p){let b=e[t];return b===void 0?(b={id:c.id,object:c,geometry:f,material:x,materialVariant:s(c),groupOrder:y,renderOrder:c.renderOrder,z:g,group:p},e[t]=b):(b.id=c.id,b.object=c,b.geometry=f,b.material=x,b.materialVariant=s(c),b.groupOrder=y,b.renderOrder=c.renderOrder,b.z=g,b.group=p),t++,b}function l(c,f,x,y,g,p,b){b.reversedDepth===!0&&(g=-g);let w=o(c,f,x,y,g,p);x.transmission>0?r.push(w):x.transparent===!0?a.push(w):i.push(w)}function h(c,f,x,y,g,p){let b=o(c,f,x,y,g,p);x.transmission>0?r.unshift(b):x.transparent===!0?a.unshift(b):i.unshift(b)}function u(c,f){i.length>1&&i.sort(c||k0),r.length>1&&r.sort(f||wl),a.length>1&&a.sort(f||wl)}function d(){for(let c=t,f=e.length;c<f;c++){let x=e[c];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:h,finish:d,sort:u}}function W0(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new Al,e.set(r,[s])):a>=n.length?(s=new Al,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function X0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new P,color:new $e};break;case"SpotLight":i={position:new P,direction:new P,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new P,color:new $e,distance:0,decay:0};break;case"HemisphereLight":i={direction:new P,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":i={color:new $e,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=i,i}}}function j0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var q0=0;function Y0(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Z0(e){let t=new X0,i=j0(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new P);let a=new P,n=new Ke,s=new Ke;function o(h){let u=0,d=0,c=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let f=0,x=0,y=0,g=0,p=0,b=0,w=0,v=0,T=0,A=0,R=0,_=0,M=0,F=0;h.sort(Y0);for(let O=0,q=h.length;O<q;O++){let D=h[O],G=D.color,J=D.intensity,k=D.distance,ue=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ki?ue=D.shadow.map.texture:ue=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=G.r*J,d+=G.g*J,c+=G.b*J;else if(D.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(D.sh.coefficients[X],J);F++}else if(D.isSunLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Z=D.shadow,K=i.get(D);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),r.sunShadow[x]=K,r.sunShadowMap[x]=ue;let Fe=Z.getViewportCount();for(let Me=0;Me<Fe;Me++)r.sunShadowMatrix[y+Me]=Z.getMatrix(Me),r.sunShadowCascade[y+Me]=Z._cascadeData[Me];y+=Fe,x++}r.sun[f]=X,f++}else if(D.isDirectionalLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Z=D.shadow,K=i.get(D);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,r.directionalShadow[g]=K,r.directionalShadowMap[g]=ue,r.directionalShadowMatrix[g]=D.shadow.matrix,T++}r.directional[g]=X,g++}else if(D.isSpotLight){let X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(G).multiplyScalar(J),X.distance=k,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,r.spot[b]=X;let Z=D.shadow;if(D.map&&(r.spotLightMap[_]=D.map,_++,Z.updateMatrices(D),D.castShadow&&M++),r.spotLightMatrix[b]=Z.matrix,D.castShadow){let K=i.get(D);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,r.spotShadow[b]=K,r.spotShadowMap[b]=ue,R++}b++}else if(D.isRectAreaLight){let X=t.get(D);X.color.copy(G).multiplyScalar(J),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),r.rectArea[w]=X,w++}else if(D.isPointLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let Z=D.shadow,K=i.get(D);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,r.pointShadow[p]=K,r.pointShadowMap[p]=ue,r.pointShadowMatrix[p]=D.shadow.matrix,A++}r.point[p]=X,p++}else if(D.isHemisphereLight){let X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(J),X.groundColor.copy(D.groundColor).multiplyScalar(J),r.hemi[v]=X,v++}}w>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=d,r.ambient[2]=c;let I=r.hash;(I.sunLength!==f||I.directionalLength!==g||I.pointLength!==p||I.spotLength!==b||I.rectAreaLength!==w||I.hemiLength!==v||I.numSunShadows!==x||I.numDirectionalShadows!==T||I.numPointShadows!==A||I.numSpotShadows!==R||I.numSpotMaps!==_||I.numLightProbes!==F)&&(r.sun.length=f,r.directional.length=g,r.spot.length=b,r.rectArea.length=w,r.point.length=p,r.hemi.length=v,r.sunShadow.length=x,r.sunShadowMap.length=x,r.sunShadowMatrix.length=y,r.sunShadowCascade.length=y,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.directionalShadowMatrix.length=T,r.pointShadow.length=A,r.pointShadowMap.length=A,r.pointShadowMatrix.length=A,r.spotShadow.length=R,r.spotShadowMap.length=R,r.spotLightMatrix.length=R+_-M,r.spotLightMap.length=_,r.numSpotLightShadowsWithMaps=M,r.numLightProbes=F,I.sunLength=f,I.directionalLength=g,I.pointLength=p,I.spotLength=b,I.rectAreaLength=w,I.hemiLength=v,I.numSunShadows=x,I.numDirectionalShadows=T,I.numPointShadows=A,I.numSpotShadows=R,I.numSpotMaps=_,I.numLightProbes=F,r.version=q0++)}function l(h,u){let d=0,c=0,f=0,x=0,y=0,g=0,p=u.matrixWorldInverse;for(let b=0,w=h.length;b<w;b++){let v=h[b];if(v.isSunLight){let T=r.sun[d];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let T=r.directional[c];T.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(p),c++}else if(v.isSpotLight){let T=r.spot[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(p),x++}else if(v.isRectAreaLight){let T=r.rectArea[y];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),s.identity(),n.copy(v.matrixWorld),n.premultiply(p),s.extractRotation(n),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),y++}else if(v.isPointLight){let T=r.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let T=r.hemi[g];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:r}}function Cl(e){let t=new Z0(e),i=[],r=[],a=[];function n(c){d.camera=c,i.length=0,r.length=0,a.length=0}function s(c){i.push(c)}function o(c){r.push(c)}function l(c){a.push(c)}function h(){t.setup(i)}function u(c){t.setupView(i,c)}let d={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:d,setupLights:h,setupLightsView:u,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function J0(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new Cl(e),t.set(a,[o])):n>=s.length?(o=new Cl(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var K0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Q0=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],e_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Rl=new Ke,Nr=new P,kn=new P;function t_(e,t,i){let r=new Mr,a=new le,n=new le,s=new ct,o=new Hd,l=new kd,h={},u=i.maxTextureSize,d={[Vi]:Dt,[Dt]:Vi,[Wt]:Wt},c=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:K0,fragmentShader:$0}),f=c.clone();f.defines.HORIZONTAL_PASS=1;let x=new dt;x.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new gt(x,c),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fa;let p=this.type;this.render=function(A,R,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===vu&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fa);let M=e.getRenderTarget(),F=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),O=e.state;O.setBlending(gi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let q=p!==this.type;q&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(G=>G.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,G=A.length;D<G;D++){let J=A[D],k=J.shadow;if(k===void 0){Be("WebGLShadowMap:",J,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);let ue=k.getFrameExtents();a.multiply(ue),n.copy(k.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(n.x=Math.floor(u/ue.x),a.x=n.x*ue.x,k.mapSize.x=n.x),a.y>u&&(n.y=Math.floor(u/ue.y),a.y=n.y*ue.y,k.mapSize.y=n.y));let X=e.state.buffers.depth.getReversed();if(k.camera._reversedDepth=X,k.map===null||q===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Or){if(J.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new qt(a.x,a.y,{format:ki,type:ni,minFilter:At,magFilter:At,generateMipmaps:!1}),k.map.texture.name=J.name+".shadowMap",k.map.depthTexture=new Yr(a.x,a.y,ii),k.map.depthTexture.name=J.name+".shadowMapDepth",k.map.depthTexture.format=vi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Tt,k.map.depthTexture.magFilter=Tt}else J.isPointLight?(k.map=new Kh(a.x),k.map.depthTexture=new Hc(a.x,ai)):(k.map=new qt(a.x,a.y),k.map.depthTexture=new Yr(a.x,a.y,ai)),k.map.depthTexture.name=J.name+".shadowMap",k.map.depthTexture.format=vi,this.type===Fa?(k.map.depthTexture.compareFunction=X?js:Xs,k.map.depthTexture.minFilter=At,k.map.depthTexture.magFilter=At):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Tt,k.map.depthTexture.magFilter=Tt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==a.x||k.map.height!==a.y)&&k.map.setSize(a.x,a.y);let Z=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();J.isPointLight!==!0&&k.updateMatrices(J,_);for(let K=0;K<Z;K++){let Fe=k.getCamera(K);if(J.isPointLight){let Me=k.camera,it=k.matrix,Ue=J.distance||Me.far;Ue!==Me.far&&(Me.far=Ue,Me.updateProjectionMatrix()),Nr.setFromMatrixPosition(J.matrixWorld),Me.position.copy(Nr),kn.copy(Me.position),kn.add(Q0[K]),Me.up.copy(e_[K]),Me.lookAt(kn),Me.updateMatrixWorld(),it.makeTranslation(-Nr.x,-Nr.y,-Nr.z),Rl.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Rl,Me.coordinateSystem,Me.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)e.setRenderTarget(k.map,K),e.clear();else{K===0&&(e.setRenderTarget(k.map),e.clear());let Me=k.getViewport(K);s.set(n.x*Me.x,n.y*Me.y,n.x*Me.z,n.y*Me.w),O.viewport(s)}r=k.getFrustum(K),v(R,_,Fe,J,this.type)}k.isPointLightShadow!==!0&&this.type===Or&&b(k,_),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,e.setRenderTarget(M,F,I)};function b(A,R){let _=t.update(y);c.defines.VSM_SAMPLES!==A.blurSamples&&(c.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,c.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new qt(a.x,a.y,{format:ki,type:ni}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),c.uniforms.shadow_pass.value=A.map.depthTexture,c.uniforms.resolution.value.set(A.map.width,A.map.height),c.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(R,null,_,c,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(R,null,_,f,y,null)}function w(A,R,_,M){let F=null,I=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)F=I;else if(F=_.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let O=F.uuid,q=R.uuid,D=h[O];D===void 0&&(D={},h[O]=D);let G=D[q];G===void 0&&(G=F.clone(),D[q]=G,R.addEventListener("dispose",T)),F=G}if(F.visible=R.visible,F.wireframe=R.wireframe,M===Or?F.side=R.shadowSide!==null?R.shadowSide:R.side:F.side=R.shadowSide!==null?R.shadowSide:d[R.side],F.alphaMap=R.alphaMap,F.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,F.map=R.map,F.clipShadows=R.clipShadows,F.clippingPlanes=R.clippingPlanes,F.clipIntersection=R.clipIntersection,F.displacementMap=R.displacementMap,F.displacementScale=R.displacementScale,F.displacementBias=R.displacementBias,F.wireframeLinewidth=R.wireframeLinewidth,F.linewidth=R.linewidth,_.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let O=e.properties.get(F);O.light=_}return F}function v(A,R,_,M,F){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&F===Or)&&(!A.frustumCulled||A.intersectsFrustum(r))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);let O=t.update(A),q=A.material;if(Array.isArray(q)){let D=O.groups;for(let G=0,J=D.length;G<J;G++){let k=D[G],ue=q[k.materialIndex];if(ue&&ue.visible){let X=w(A,ue,M,F);A.onBeforeShadow(e,A,R,_,O,X,k),e.renderBufferDirect(_,null,O,X,A,k),A.onAfterShadow(e,A,R,_,O,X,k)}}}else if(q.visible){let D=w(A,q,M,F);A.onBeforeShadow(e,A,R,_,O,D,null),e.renderBufferDirect(_,null,O,D,A,null),A.onAfterShadow(e,A,R,_,O,D,null)}}let I=A.children;for(let O=0,q=I.length;O<q;O++)v(I[O],R,_,M,F)}function T(A){A.target.removeEventListener("dispose",T);for(let R in h){let _=h[R],M=A.target.uuid;M in _&&(_[M].dispose(),delete _[M])}}}function i_(e,t){function i(){let z=!1,$=new ct,ae=null,ve=new ct(0,0,0,0);return{setMask:function(Ee){ae!==Ee&&!z&&(e.colorMask(Ee,Ee,Ee,Ee),ae=Ee)},setLocked:function(Ee){z=Ee},setClear:function(Ee,se,_e,De,yt){yt===!0&&(Ee*=De,se*=De,_e*=De),$.set(Ee,se,_e,De),ve.equals($)===!1&&(e.clearColor(Ee,se,_e,De),ve.copy($))},reset:function(){z=!1,ae=null,ve.set(-1,0,0,0)}}}function r(){let z=!1,$=!1,ae=null,ve=null,Ee=null;return{setReversed:function(se){if($!==se){let _e=t.get("EXT_clip_control");se?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),$=se;let De=Ee;Ee=null,this.setClear(De)}},getReversed:function(){return $},setTest:function(se){se?oe(e.DEPTH_TEST):Re(e.DEPTH_TEST)},setMask:function(se){ae!==se&&!z&&(e.depthMask(se),ae=se)},setFunc:function(se){if($&&(se=ec[se]),ve!==se){switch(se){case Wn:e.depthFunc(e.NEVER);break;case Xn:e.depthFunc(e.ALWAYS);break;case jn:e.depthFunc(e.LESS);break;case kr:e.depthFunc(e.LEQUAL);break;case qn:e.depthFunc(e.EQUAL);break;case Yn:e.depthFunc(e.GEQUAL);break;case Zn:e.depthFunc(e.GREATER);break;case Jn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ve=se}},setLocked:function(se){z=se},setClear:function(se){Ee!==se&&(Ee=se,$&&(se=1-se),e.clearDepth(se))},reset:function(){z=!1,ae=null,ve=null,Ee=null,$=!1}}}function a(){let z=!1,$=null,ae=null,ve=null,Ee=null,se=null,_e=null,De=null,yt=null;return{setTest:function(at){z||(at?oe(e.STENCIL_TEST):Re(e.STENCIL_TEST))},setMask:function(at){$!==at&&!z&&(e.stencilMask(at),$=at)},setFunc:function(at,Jt,li){(ae!==at||ve!==Jt||Ee!==li)&&(e.stencilFunc(at,Jt,li),ae=at,ve=Jt,Ee=li)},setOp:function(at,Jt,li){(se!==at||_e!==Jt||De!==li)&&(e.stencilOp(at,Jt,li),se=at,_e=Jt,De=li)},setLocked:function(at){z=at},setClear:function(at){yt!==at&&(e.clearStencil(at),yt=at)},reset:function(){z=!1,$=null,ae=null,ve=null,Ee=null,se=null,_e=null,De=null,yt=null}}}let n=new i,s=new r,o=new a,l=new WeakMap,h=new WeakMap,u={},d={},c={},f=new WeakMap,x=[],y=null,g=!1,p=null,b=null,w=null,v=null,T=null,A=null,R=null,_=new $e(0,0,0),M=0,F=!1,I=null,O=null,q=null,D=null,G=null,J=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,ue=0,X=e.getParameter(e.VERSION);X.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=ue>=1):X.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=ue>=2);let Z=null,K={},Fe=e.getParameter(e.SCISSOR_BOX),Me=e.getParameter(e.VIEWPORT),it=new ct().fromArray(Fe),Ue=new ct().fromArray(Me);function Y(z,$,ae,ve){let Ee=new Uint8Array(4),se=e.createTexture();e.bindTexture(z,se),e.texParameteri(z,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(z,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let _e=0;_e<ae;_e++)z===e.TEXTURE_3D||z===e.TEXTURE_2D_ARRAY?e.texImage3D($,0,e.RGBA,1,1,ve,0,e.RGBA,e.UNSIGNED_BYTE,Ee):e.texImage2D($+_e,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Ee);return se}let ne={};ne[e.TEXTURE_2D]=Y(e.TEXTURE_2D,e.TEXTURE_2D,1),ne[e.TEXTURE_CUBE_MAP]=Y(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[e.TEXTURE_2D_ARRAY]=Y(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ne[e.TEXTURE_3D]=Y(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),oe(e.DEPTH_TEST),s.setFunc(kr),Se(!1),be(_o),oe(e.CULL_FACE),he(gi);function oe(z){u[z]!==!0&&(e.enable(z),u[z]=!0)}function Re(z){u[z]!==!1&&(e.disable(z),u[z]=!1)}function Ne(z,$){return c[z]!==$?(e.bindFramebuffer(z,$),c[z]=$,z===e.DRAW_FRAMEBUFFER&&(c[e.FRAMEBUFFER]=$),z===e.FRAMEBUFFER&&(c[e.DRAW_FRAMEBUFFER]=$),!0):!1}function fe(z,$){let ae=x,ve=!1;if(z){ae=f.get($),ae===void 0&&(ae=[],f.set($,ae));let Ee=z.textures;if(ae.length!==Ee.length||ae[0]!==e.COLOR_ATTACHMENT0){for(let se=0,_e=Ee.length;se<_e;se++)ae[se]=e.COLOR_ATTACHMENT0+se;ae.length=Ee.length,ve=!0}}else ae[0]!==e.BACK&&(ae[0]=e.BACK,ve=!0);ve&&e.drawBuffers(ae)}function je(z){return y!==z?(e.useProgram(z),y=z,!0):!1}let ee={[ur]:e.FUNC_ADD,[yu]:e.FUNC_SUBTRACT,[Su]:e.FUNC_REVERSE_SUBTRACT};ee[Mu]=e.MIN,ee[bu]=e.MAX;let Q={[Tu]:e.ZERO,[Eu]:e.ONE,[wu]:e.SRC_COLOR,[Pl]:e.SRC_ALPHA,[Lu]:e.SRC_ALPHA_SATURATE,[Pu]:e.DST_COLOR,[Cu]:e.DST_ALPHA,[Au]:e.ONE_MINUS_SRC_COLOR,[Il]:e.ONE_MINUS_SRC_ALPHA,[Iu]:e.ONE_MINUS_DST_COLOR,[Ru]:e.ONE_MINUS_DST_ALPHA,[Du]:e.CONSTANT_COLOR,[Uu]:e.ONE_MINUS_CONSTANT_COLOR,[Nu]:e.CONSTANT_ALPHA,[Ou]:e.ONE_MINUS_CONSTANT_ALPHA};function he(z,$,ae,ve,Ee,se,_e,De,yt,at){if(z===gi){g===!0&&(Re(e.BLEND),g=!1);return}if(g===!1&&(oe(e.BLEND),g=!0),z!==xu){if(z!==p||at!==F){if((b!==ur||T!==ur)&&(e.blendEquation(e.FUNC_ADD),b=ur,T=ur),at)switch(z){case Gi:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Hr:e.blendFunc(e.ONE,e.ONE);break;case vo:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case xo:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ve("WebGLState: Invalid blending: ",z);break}else switch(z){case Gi:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Hr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case vo:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xo:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",z);break}w=null,v=null,A=null,R=null,_.set(0,0,0),M=0,p=z,F=at}return}Ee=Ee||$,se=se||ae,_e=_e||ve,($!==b||Ee!==T)&&(e.blendEquationSeparate(ee[$],ee[Ee]),b=$,T=Ee),(ae!==w||ve!==v||se!==A||_e!==R)&&(e.blendFuncSeparate(Q[ae],Q[ve],Q[se],Q[_e]),w=ae,v=ve,A=se,R=_e),(De.equals(_)===!1||yt!==M)&&(e.blendColor(De.r,De.g,De.b,yt),_.copy(De),M=yt),p=z,F=!1}function ye(z,$){z.side===Wt?Re(e.CULL_FACE):oe(e.CULL_FACE);let ae=z.side===Dt;$&&(ae=!ae),Se(ae),z.blending===Gi&&z.transparent===!1?he(gi):he(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),n.setMask(z.colorWrite);let ve=z.stencilWrite;o.setTest(ve),ve&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Oe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?oe(e.SAMPLE_ALPHA_TO_COVERAGE):Re(e.SAMPLE_ALPHA_TO_COVERAGE)}function Se(z){I!==z&&(z?e.frontFace(e.CW):e.frontFace(e.CCW),I=z)}function be(z){z!==gu?(oe(e.CULL_FACE),z!==O&&(z===_o?e.cullFace(e.BACK):z===_u?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Re(e.CULL_FACE),O=z}function Le(z){z!==q&&(k&&e.lineWidth(z),q=z)}function Oe(z,$,ae){z?(oe(e.POLYGON_OFFSET_FILL),(D!==$||G!==ae)&&(D=$,G=ae,s.getReversed()&&($=-$),e.polygonOffset($,ae))):Re(e.POLYGON_OFFSET_FILL)}function ze(z){z?oe(e.SCISSOR_TEST):Re(e.SCISSOR_TEST)}function L(z){z===void 0&&(z=e.TEXTURE0+J-1),Z!==z&&(e.activeTexture(z),Z=z)}function rt(z,$,ae){ae===void 0&&(Z===null?ae=e.TEXTURE0+J-1:ae=Z);let ve=K[ae];ve===void 0&&(ve={type:void 0,texture:void 0},K[ae]=ve),(ve.type!==z||ve.texture!==$)&&(Z!==ae&&(e.activeTexture(ae),Z=ae),e.bindTexture(z,$||ne[z]),ve.type=z,ve.texture=$)}function Ze(){let z=K[Z];z!==void 0&&z.type!==void 0&&(e.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function qe(){try{e.compressedTexImage2D(...arguments)}catch(z){Ve("WebGLState:",z)}}function E(){try{e.compressedTexImage3D(...arguments)}catch(z){Ve("WebGLState:",z)}}function m(){try{e.texSubImage2D(...arguments)}catch(z){Ve("WebGLState:",z)}}function C(){try{e.texSubImage3D(...arguments)}catch(z){Ve("WebGLState:",z)}}function U(){try{e.compressedTexSubImage2D(...arguments)}catch(z){Ve("WebGLState:",z)}}function j(){try{e.compressedTexSubImage3D(...arguments)}catch(z){Ve("WebGLState:",z)}}function te(){try{e.texStorage2D(...arguments)}catch(z){Ve("WebGLState:",z)}}function ce(){try{e.texStorage3D(...arguments)}catch(z){Ve("WebGLState:",z)}}function N(){try{e.texImage2D(...arguments)}catch(z){Ve("WebGLState:",z)}}function ie(){try{e.texImage3D(...arguments)}catch(z){Ve("WebGLState:",z)}}function pe(z){return d[z]!==void 0?d[z]:e.getParameter(z)}function me(z,$){d[z]!==$&&(e.pixelStorei(z,$),d[z]=$)}function re(z){it.equals(z)===!1&&(e.scissor(z.x,z.y,z.z,z.w),it.copy(z))}function Ae(z){Ue.equals(z)===!1&&(e.viewport(z.x,z.y,z.z,z.w),Ue.copy(z))}function Ie(z,$){let ae=h.get($);ae===void 0&&(ae=new WeakMap,h.set($,ae));let ve=ae.get(z);ve===void 0&&(ve=e.getUniformBlockIndex($,z.name),ae.set(z,ve))}function He(z,$){let ae=h.get($).get(z);l.get($)!==ae&&(e.uniformBlockBinding($,ae,z.__bindingPointIndex),l.set($,ae))}function Xe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},Z=null,K={},c={},f=new WeakMap,x=[],y=null,g=!1,p=null,b=null,w=null,v=null,T=null,A=null,R=null,_=new $e(0,0,0),M=0,F=!1,I=null,O=null,q=null,D=null,G=null,it.set(0,0,e.canvas.width,e.canvas.height),Ue.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:oe,disable:Re,bindFramebuffer:Ne,drawBuffers:fe,useProgram:je,setBlending:he,setMaterial:ye,setFlipSided:Se,setCullFace:be,setLineWidth:Le,setPolygonOffset:Oe,setScissorTest:ze,activeTexture:L,bindTexture:rt,unbindTexture:Ze,compressedTexImage2D:qe,compressedTexImage3D:E,texImage2D:N,texImage3D:ie,pixelStorei:me,getParameter:pe,updateUBOMapping:Ie,uniformBlockBinding:He,texStorage2D:te,texStorage3D:ce,texSubImage2D:m,texSubImage3D:C,compressedTexSubImage2D:U,compressedTexSubImage3D:j,scissor:re,viewport:Ae,reset:Xe}}function r_(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new le,u=new WeakMap,d=new Set,c,f=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,m){return x?new OffscreenCanvas(E,m):Ja("canvas")}function g(E,m,C){let U=1,j=qe(E);if((j.width>C||j.height>C)&&(U=C/Math.max(j.width,j.height)),U<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let te=Math.floor(U*j.width),ce=Math.floor(U*j.height);c===void 0&&(c=y(te,ce));let N=m?y(te,ce):c;return N.width=te,N.height=ce,N.getContext("2d").drawImage(E,0,0,te,ce),Be("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+te+"x"+ce+")."),N}else return"data"in E&&Be("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function p(E){return E.generateMipmaps}function b(E){e.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?e.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(E,m,C,U,j,te=!1){if(E!==null){if(e[E]!==void 0)return e[E];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ce;U&&(ce=t.get("EXT_texture_norm16"),ce||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let N=m;if(m===e.RED&&(C===e.FLOAT&&(N=e.R32F),C===e.HALF_FLOAT&&(N=e.R16F),C===e.UNSIGNED_BYTE&&(N=e.R8),C===e.UNSIGNED_SHORT&&ce&&(N=ce.R16_EXT),C===e.SHORT&&ce&&(N=ce.R16_SNORM_EXT)),m===e.RED_INTEGER&&(C===e.UNSIGNED_BYTE&&(N=e.R8UI),C===e.UNSIGNED_SHORT&&(N=e.R16UI),C===e.UNSIGNED_INT&&(N=e.R32UI),C===e.BYTE&&(N=e.R8I),C===e.SHORT&&(N=e.R16I),C===e.INT&&(N=e.R32I)),m===e.RG&&(C===e.FLOAT&&(N=e.RG32F),C===e.HALF_FLOAT&&(N=e.RG16F),C===e.UNSIGNED_BYTE&&(N=e.RG8),C===e.UNSIGNED_SHORT&&ce&&(N=ce.RG16_EXT),C===e.SHORT&&ce&&(N=ce.RG16_SNORM_EXT)),m===e.RG_INTEGER&&(C===e.UNSIGNED_BYTE&&(N=e.RG8UI),C===e.UNSIGNED_SHORT&&(N=e.RG16UI),C===e.UNSIGNED_INT&&(N=e.RG32UI),C===e.BYTE&&(N=e.RG8I),C===e.SHORT&&(N=e.RG16I),C===e.INT&&(N=e.RG32I)),m===e.RGB_INTEGER&&(C===e.UNSIGNED_BYTE&&(N=e.RGB8UI),C===e.UNSIGNED_SHORT&&(N=e.RGB16UI),C===e.UNSIGNED_INT&&(N=e.RGB32UI),C===e.BYTE&&(N=e.RGB8I),C===e.SHORT&&(N=e.RGB16I),C===e.INT&&(N=e.RGB32I)),m===e.RGBA_INTEGER&&(C===e.UNSIGNED_BYTE&&(N=e.RGBA8UI),C===e.UNSIGNED_SHORT&&(N=e.RGBA16UI),C===e.UNSIGNED_INT&&(N=e.RGBA32UI),C===e.BYTE&&(N=e.RGBA8I),C===e.SHORT&&(N=e.RGBA16I),C===e.INT&&(N=e.RGBA32I)),m===e.RGB&&(C===e.UNSIGNED_SHORT&&ce&&(N=ce.RGB16_EXT),C===e.SHORT&&ce&&(N=ce.RGB16_SNORM_EXT),C===e.UNSIGNED_INT_5_9_9_9_REV&&(N=e.RGB9_E5),C===e.UNSIGNED_INT_10F_11F_11F_REV&&(N=e.R11F_G11F_B10F)),m===e.RGBA){let ie=te?Za:et.getTransfer(j);C===e.FLOAT&&(N=e.RGBA32F),C===e.HALF_FLOAT&&(N=e.RGBA16F),C===e.UNSIGNED_BYTE&&(N=ie===nt?e.SRGB8_ALPHA8:e.RGBA8),C===e.UNSIGNED_SHORT&&ce&&(N=ce.RGBA16_EXT),C===e.SHORT&&ce&&(N=ce.RGBA16_SNORM_EXT),C===e.UNSIGNED_SHORT_4_4_4_4&&(N=e.RGBA4),C===e.UNSIGNED_SHORT_5_5_5_1&&(N=e.RGB5_A1)}return(N===e.R16F||N===e.R32F||N===e.RG16F||N===e.RG32F||N===e.RGBA16F||N===e.RGBA32F)&&t.get("EXT_color_buffer_float"),N}function T(E,m){let C;return E?m===null||m===ai||m===Xr?C=e.DEPTH24_STENCIL8:m===ii?C=e.DEPTH32F_STENCIL8:m===Wr&&(C=e.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===ai||m===Xr?C=e.DEPTH_COMPONENT24:m===ii?C=e.DEPTH_COMPONENT32F:m===Wr&&(C=e.DEPTH_COMPONENT16),C}function A(E,m){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Tt&&E.minFilter!==At?Math.log2(Math.max(m.width,m.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?m.mipmaps.length:1}function R(E){let m=E.target;m.removeEventListener("dispose",R),M(m),m.isVideoTexture&&u.delete(m),m.isHTMLTexture&&d.delete(m)}function _(E){let m=E.target;m.removeEventListener("dispose",_),I(m)}function M(E){let m=r.get(E);if(m.__webglInit===void 0)return;let C=E.source,U=f.get(C);if(U){let j=U[m.__cacheKey];j.usedTimes--,j.usedTimes===0&&F(E),Object.keys(U).length===0&&f.delete(C)}r.remove(E)}function F(E){let m=r.get(E);e.deleteTexture(m.__webglTexture);let C=E.source,U=f.get(C);delete U[m.__cacheKey],s.memory.textures--}function I(E){let m=r.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),r.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(m.__webglFramebuffer[U]))for(let j=0;j<m.__webglFramebuffer[U].length;j++)e.deleteFramebuffer(m.__webglFramebuffer[U][j]);else e.deleteFramebuffer(m.__webglFramebuffer[U]);m.__webglDepthbuffer&&e.deleteRenderbuffer(m.__webglDepthbuffer[U])}else{if(Array.isArray(m.__webglFramebuffer))for(let U=0;U<m.__webglFramebuffer.length;U++)e.deleteFramebuffer(m.__webglFramebuffer[U]);else e.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&e.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&e.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let U=0;U<m.__webglColorRenderbuffer.length;U++)m.__webglColorRenderbuffer[U]&&e.deleteRenderbuffer(m.__webglColorRenderbuffer[U]);m.__webglDepthRenderbuffer&&e.deleteRenderbuffer(m.__webglDepthRenderbuffer)}let C=E.textures;for(let U=0,j=C.length;U<j;U++){let te=r.get(C[U]);te.__webglTexture&&(e.deleteTexture(te.__webglTexture),s.memory.textures--),r.remove(C[U])}r.remove(E)}let O=0;function q(){O=0}function D(){return O}function G(E){O=E}function J(){let E=O;return E>=a.maxTextures&&Be("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+a.maxTextures),O+=1,E}function k(E){let m=[];return m.push(E.wrapS),m.push(E.wrapT),m.push(E.wrapR||0),m.push(E.magFilter),m.push(E.minFilter),m.push(E.anisotropy),m.push(E.internalFormat),m.push(E.format),m.push(E.type),m.push(E.generateMipmaps),m.push(E.premultiplyAlpha),m.push(E.flipY),m.push(E.unpackAlignment),m.push(E.colorSpace),m.join()}function ue(E,m){let C=r.get(E);if(E.isVideoTexture&&rt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&C.__version!==E.version){let U=E.image;if(U===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(C,E,m);return}}else E.isExternalTexture&&(C.__webglTexture=E.sourceTexture?E.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,C.__webglTexture,e.TEXTURE0+m)}function X(E,m){let C=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&C.__version!==E.version){Re(C,E,m);return}else E.isExternalTexture&&(C.__webglTexture=E.sourceTexture?E.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,C.__webglTexture,e.TEXTURE0+m)}function Z(E,m){let C=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&C.__version!==E.version){Re(C,E,m);return}i.bindTexture(e.TEXTURE_3D,C.__webglTexture,e.TEXTURE0+m)}function K(E,m){let C=r.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&C.__version!==E.version){Ne(C,E,m);return}i.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+m)}let Fe={[Kn]:e.REPEAT,[fi]:e.CLAMP_TO_EDGE,[$n]:e.MIRRORED_REPEAT},Me={[Tt]:e.NEAREST,[zu]:e.NEAREST_MIPMAP_NEAREST,[la]:e.NEAREST_MIPMAP_LINEAR,[At]:e.LINEAR,[hn]:e.LINEAR_MIPMAP_NEAREST,[Fi]:e.LINEAR_MIPMAP_LINEAR},it={[ku]:e.NEVER,[Yu]:e.ALWAYS,[Wu]:e.LESS,[Xs]:e.LEQUAL,[Xu]:e.EQUAL,[js]:e.GEQUAL,[ju]:e.GREATER,[qu]:e.NOTEQUAL};function Ue(E,m){if(m.type===ii&&t.has("OES_texture_float_linear")===!1&&(m.magFilter===At||m.magFilter===hn||m.magFilter===la||m.magFilter===Fi||m.minFilter===At||m.minFilter===hn||m.minFilter===la||m.minFilter===Fi)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(E,e.TEXTURE_WRAP_S,Fe[m.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,Fe[m.wrapT]),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,Fe[m.wrapR]),e.texParameteri(E,e.TEXTURE_MAG_FILTER,Me[m.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,Me[m.minFilter]),m.compareFunction&&(e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,it[m.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Tt||m.minFilter!==la&&m.minFilter!==Fi||m.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||r.get(m).__currentAnisotropy){let C=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,a.getMaxAnisotropy())),r.get(m).__currentAnisotropy=m.anisotropy}}}function Y(E,m){let C=!1;E.__webglInit===void 0&&(E.__webglInit=!0,m.addEventListener("dispose",R));let U=m.source,j=f.get(U);j===void 0&&(j={},f.set(U,j));let te=k(m);if(te!==E.__cacheKey){j[te]===void 0&&(j[te]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,C=!0),j[te].usedTimes++;let ce=j[E.__cacheKey];ce!==void 0&&(j[E.__cacheKey].usedTimes--,ce.usedTimes===0&&F(m)),E.__cacheKey=te,E.__webglTexture=j[te].texture}return C}function ne(E,m,C){return Math.floor(Math.floor(E/C)/m)}function oe(E,m,C,U){let j=E.updateRanges;if(j.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,m.width,m.height,C,U,m.data);else{j.sort((pe,me)=>pe.start-me.start);let te=0;for(let pe=1;pe<j.length;pe++){let me=j[te],re=j[pe],Ae=me.start+me.count,Ie=ne(re.start,m.width,4),He=ne(me.start,m.width,4);re.start<=Ae+1&&Ie===He&&ne(re.start+re.count-1,m.width,4)===Ie?me.count=Math.max(me.count,re.start+re.count-me.start):(++te,j[te]=re)}j.length=te+1;let ce=i.getParameter(e.UNPACK_ROW_LENGTH),N=i.getParameter(e.UNPACK_SKIP_PIXELS),ie=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,m.width);for(let pe=0,me=j.length;pe<me;pe++){let re=j[pe],Ae=Math.floor(re.start/4),Ie=Math.ceil(re.count/4),He=Ae%m.width,Xe=Math.floor(Ae/m.width),z=Ie;i.pixelStorei(e.UNPACK_SKIP_PIXELS,He),i.pixelStorei(e.UNPACK_SKIP_ROWS,Xe),i.texSubImage2D(e.TEXTURE_2D,0,He,Xe,z,1,C,U,m.data)}E.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,ce),i.pixelStorei(e.UNPACK_SKIP_PIXELS,N),i.pixelStorei(e.UNPACK_SKIP_ROWS,ie)}}function Re(E,m,C){let U=e.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(U=e.TEXTURE_2D_ARRAY),m.isData3DTexture&&(U=e.TEXTURE_3D);let j=Y(E,m),te=m.source;i.bindTexture(U,E.__webglTexture,e.TEXTURE0+C);let ce=r.get(te);if(te.version!==ce.__version||j===!0){if(i.activeTexture(e.TEXTURE0+C),!(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)){let $=et.getPrimaries(et.workingColorSpace),ae=m.colorSpace===Ai?null:et.getPrimaries(m.colorSpace),ve=m.colorSpace===Ai||$===ae?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}i.pixelStorei(e.UNPACK_ALIGNMENT,m.unpackAlignment);let N=g(m.image,!1,a.maxTextureSize);N=Ze(m,N);let ie=n.convert(m.format,m.colorSpace),pe=n.convert(m.type),me=v(m.internalFormat,ie,pe,m.normalized,m.colorSpace,m.isVideoTexture);Ue(U,m);let re,Ae=m.mipmaps,Ie=m.isVideoTexture!==!0,He=ce.__version===void 0||j===!0,Xe=te.dataReady,z=A(m,N);if(m.isDepthTexture)me=T(m.format===Bi,m.type),He&&(Ie?i.texStorage2D(e.TEXTURE_2D,1,me,N.width,N.height):i.texImage2D(e.TEXTURE_2D,0,me,N.width,N.height,0,ie,pe,null));else if(m.isDataTexture)if(Ae.length>0){Ie&&He&&i.texStorage2D(e.TEXTURE_2D,z,me,Ae[0].width,Ae[0].height);for(let $=0,ae=Ae.length;$<ae;$++)re=Ae[$],Ie?Xe&&i.texSubImage2D(e.TEXTURE_2D,$,0,0,re.width,re.height,ie,pe,re.data):i.texImage2D(e.TEXTURE_2D,$,me,re.width,re.height,0,ie,pe,re.data);m.generateMipmaps=!1}else Ie?(He&&i.texStorage2D(e.TEXTURE_2D,z,me,N.width,N.height),Xe&&oe(m,N,ie,pe)):i.texImage2D(e.TEXTURE_2D,0,me,N.width,N.height,0,ie,pe,N.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Ie&&He&&i.texStorage3D(e.TEXTURE_2D_ARRAY,z,me,Ae[0].width,Ae[0].height,N.depth);for(let $=0,ae=Ae.length;$<ae;$++)if(re=Ae[$],m.format!==Xt)if(ie!==null)if(Ie){if(Xe)if(m.layerUpdates.size>0){let ve=ol(re.width,re.height,m.format,m.type);for(let Ee of m.layerUpdates){let se=re.data.subarray(Ee*ve/re.data.BYTES_PER_ELEMENT,(Ee+1)*ve/re.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,Ee,re.width,re.height,1,ie,se)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,re.width,re.height,N.depth,ie,re.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,$,me,re.width,re.height,N.depth,0,re.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?Xe&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,re.width,re.height,N.depth,ie,pe,re.data):i.texImage3D(e.TEXTURE_2D_ARRAY,$,me,re.width,re.height,N.depth,0,ie,pe,re.data);m.layerUpdates.size>0&&m.clearLayerUpdates()}else{Ie&&He&&i.texStorage2D(e.TEXTURE_2D,z,me,Ae[0].width,Ae[0].height);for(let $=0,ae=Ae.length;$<ae;$++)re=Ae[$],m.format!==Xt?ie!==null?Ie?Xe&&i.compressedTexSubImage2D(e.TEXTURE_2D,$,0,0,re.width,re.height,ie,re.data):i.compressedTexImage2D(e.TEXTURE_2D,$,me,re.width,re.height,0,re.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?Xe&&i.texSubImage2D(e.TEXTURE_2D,$,0,0,re.width,re.height,ie,pe,re.data):i.texImage2D(e.TEXTURE_2D,$,me,re.width,re.height,0,ie,pe,re.data)}else if(m.isDataArrayTexture)if(Ie){if(He&&i.texStorage3D(e.TEXTURE_2D_ARRAY,z,me,N.width,N.height,N.depth),Xe)if(m.layerUpdates.size>0){let $=ol(N.width,N.height,m.format,m.type);for(let ae of m.layerUpdates){let ve=N.data.subarray(ae*$/N.data.BYTES_PER_ELEMENT,(ae+1)*$/N.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ae,N.width,N.height,1,ie,pe,ve)}m.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,N.width,N.height,N.depth,ie,pe,N.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,me,N.width,N.height,N.depth,0,ie,pe,N.data);else if(m.isData3DTexture)Ie?(He&&i.texStorage3D(e.TEXTURE_3D,z,me,N.width,N.height,N.depth),Xe&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,N.width,N.height,N.depth,ie,pe,N.data)):i.texImage3D(e.TEXTURE_3D,0,me,N.width,N.height,N.depth,0,ie,pe,N.data);else if(m.isFramebufferTexture){if(He)if(Ie)i.texStorage2D(e.TEXTURE_2D,z,me,N.width,N.height);else{let $=N.width,ae=N.height;for(let ve=0;ve<z;ve++)i.texImage2D(e.TEXTURE_2D,ve,me,$,ae,0,ie,pe,null),$>>=1,ae>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in e){let $=e.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),N.parentNode!==$){$.appendChild(N),d.add(m),$.onpaint=ae=>{let ve=ae.changedElements;for(let Ee of d)ve.includes(Ee.image)&&(Ee.needsUpdate=!0)},$.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,N);else{let ae=e.RGBA,ve=e.RGBA,Ee=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,ae,ve,Ee,N)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Ie&&He){let $=qe(Ae[0]);i.texStorage2D(e.TEXTURE_2D,z,me,$.width,$.height)}for(let $=0,ae=Ae.length;$<ae;$++)re=Ae[$],Ie?Xe&&i.texSubImage2D(e.TEXTURE_2D,$,0,0,ie,pe,re):i.texImage2D(e.TEXTURE_2D,$,me,ie,pe,re);m.generateMipmaps=!1}else if(Ie){if(He){let $=qe(N);i.texStorage2D(e.TEXTURE_2D,z,me,$.width,$.height)}Xe&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ie,pe,N)}else i.texImage2D(e.TEXTURE_2D,0,me,ie,pe,N);p(m)&&b(U),ce.__version=te.version,m.onUpdate&&m.onUpdate(m)}E.__version=m.version}function Ne(E,m,C){if(m.image.length!==6)return;let U=Y(E,m),j=m.source;i.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+C);let te=r.get(j);if(j.version!==te.__version||U===!0){i.activeTexture(e.TEXTURE0+C);let ce=et.getPrimaries(et.workingColorSpace),N=m.colorSpace===Ai?null:et.getPrimaries(m.colorSpace),ie=m.colorSpace===Ai||ce===N?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let pe=m.isCompressedTexture||m.image[0].isCompressedTexture,me=m.image[0]&&m.image[0].isDataTexture,re=[];for(let se=0;se<6;se++)!pe&&!me?re[se]=g(m.image[se],!0,a.maxCubemapSize):re[se]=me?m.image[se].image:m.image[se],re[se]=Ze(m,re[se]);let Ae=re[0],Ie=n.convert(m.format,m.colorSpace),He=n.convert(m.type),Xe=v(m.internalFormat,Ie,He,m.normalized,m.colorSpace),z=m.isVideoTexture!==!0,$=te.__version===void 0||U===!0,ae=j.dataReady,ve=A(m,Ae);Ue(e.TEXTURE_CUBE_MAP,m);let Ee;if(pe){z&&$&&i.texStorage2D(e.TEXTURE_CUBE_MAP,ve,Xe,Ae.width,Ae.height);for(let se=0;se<6;se++){Ee=re[se].mipmaps;for(let _e=0;_e<Ee.length;_e++){let De=Ee[_e];m.format!==Xt?Ie!==null?z?ae&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,0,0,De.width,De.height,Ie,De.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,Xe,De.width,De.height,0,De.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ae&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,0,0,De.width,De.height,Ie,He,De.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,Xe,De.width,De.height,0,Ie,He,De.data)}}}else{if(Ee=m.mipmaps,z&&$){Ee.length>0&&ve++;let se=qe(re[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,ve,Xe,se.width,se.height)}for(let se=0;se<6;se++)if(me){z?ae&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,re[se].width,re[se].height,Ie,He,re[se].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Xe,re[se].width,re[se].height,0,Ie,He,re[se].data);for(let _e=0;_e<Ee.length;_e++){let De=Ee[_e].image[se].image;z?ae&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,0,0,De.width,De.height,Ie,He,De.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,Xe,De.width,De.height,0,Ie,He,De.data)}}else{z?ae&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ie,He,re[se]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Xe,Ie,He,re[se]);for(let _e=0;_e<Ee.length;_e++){let De=Ee[_e];z?ae&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,0,0,Ie,He,De.image[se]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,Xe,Ie,He,De.image[se])}}}p(m)&&b(e.TEXTURE_CUBE_MAP),te.__version=j.version,m.onUpdate&&m.onUpdate(m)}E.__version=m.version}function fe(E,m,C,U,j,te){let ce=n.convert(C.format,C.colorSpace),N=n.convert(C.type),ie=v(C.internalFormat,ce,N,C.normalized,C.colorSpace),pe=r.get(m),me=r.get(C);if(me.__renderTarget=m,!pe.__hasExternalTextures){let re=Math.max(1,m.width>>te),Ae=Math.max(1,m.height>>te);j===e.TEXTURE_3D||j===e.TEXTURE_2D_ARRAY?i.texImage3D(j,te,ie,re,Ae,m.depth,0,ce,N,null):i.texImage2D(j,te,ie,re,Ae,0,ce,N,null)}i.bindFramebuffer(e.FRAMEBUFFER,E),L(m)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,U,j,me.__webglTexture,0,ze(m)):(j===e.TEXTURE_2D||j>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,U,j,me.__webglTexture,te),i.bindFramebuffer(e.FRAMEBUFFER,null)}function je(E,m,C){if(e.bindRenderbuffer(e.RENDERBUFFER,E),m.depthBuffer){let U=m.depthTexture,j=U&&U.isDepthTexture?U.type:null,te=T(m.stencilBuffer,j),ce=m.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;L(m)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ze(m),te,m.width,m.height):C?e.renderbufferStorageMultisample(e.RENDERBUFFER,ze(m),te,m.width,m.height):e.renderbufferStorage(e.RENDERBUFFER,te,m.width,m.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ce,e.RENDERBUFFER,E)}else{let U=m.textures;for(let j=0;j<U.length;j++){let te=U[j],ce=n.convert(te.format,te.colorSpace),N=n.convert(te.type),ie=v(te.internalFormat,ce,N,te.normalized,te.colorSpace);L(m)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ze(m),ie,m.width,m.height):C?e.renderbufferStorageMultisample(e.RENDERBUFFER,ze(m),ie,m.width,m.height):e.renderbufferStorage(e.RENDERBUFFER,ie,m.width,m.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ee(E,m,C){let U=m.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,E),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=r.get(m.depthTexture);if(j.__renderTarget=m,(!j.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),U){if(j.__webglInit===void 0&&(j.__webglInit=!0,m.depthTexture.addEventListener("dispose",R)),j.__webglTexture===void 0){j.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,j.__webglTexture),Ue(e.TEXTURE_CUBE_MAP,m.depthTexture);let pe=n.convert(m.depthTexture.format),me=n.convert(m.depthTexture.type),re;m.depthTexture.format===vi?re=e.DEPTH_COMPONENT24:m.depthTexture.format===Bi&&(re=e.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,re,m.width,m.height,0,pe,me,null)}}else ue(m.depthTexture,0);let te=j.__webglTexture,ce=ze(m),N=U?e.TEXTURE_CUBE_MAP_POSITIVE_X+C:e.TEXTURE_2D,ie=m.depthTexture.format===Bi?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(m.depthTexture.format===vi)L(m)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ie,N,te,0,ce):e.framebufferTexture2D(e.FRAMEBUFFER,ie,N,te,0);else if(m.depthTexture.format===Bi)L(m)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ie,N,te,0,ce):e.framebufferTexture2D(e.FRAMEBUFFER,ie,N,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Q(E){let m=r.get(E),C=E.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==E.depthTexture){let U=E.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),U){let j=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,U.removeEventListener("dispose",j)};U.addEventListener("dispose",j),m.__depthDisposeCallback=j}m.__boundDepthTexture=U}if(E.depthTexture&&!m.__autoAllocateDepthBuffer)if(C)for(let U=0;U<6;U++)ee(m.__webglFramebuffer[U],E,U);else{let U=E.texture.mipmaps;U&&U.length>0?ee(m.__webglFramebuffer[0],E,0):ee(m.__webglFramebuffer,E,0)}else if(C){m.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(i.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer[U]),m.__webglDepthbuffer[U]===void 0)m.__webglDepthbuffer[U]=e.createRenderbuffer(),je(m.__webglDepthbuffer[U],E,!1);else{let j=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=m.__webglDepthbuffer[U];e.bindRenderbuffer(e.RENDERBUFFER,te),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,te)}}else{let U=E.texture.mipmaps;if(U&&U.length>0?i.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=e.createRenderbuffer(),je(m.__webglDepthbuffer,E,!1);else{let j=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=m.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,te),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,te)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function he(E,m,C){let U=r.get(E);m!==void 0&&fe(U.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),C!==void 0&&Q(E)}function ye(E){let m=E.texture,C=r.get(E),U=r.get(m);E.addEventListener("dispose",_);let j=E.textures,te=E.isWebGLCubeRenderTarget===!0,ce=j.length>1;if(ce||(U.__webglTexture===void 0&&(U.__webglTexture=e.createTexture()),U.__version=m.version,s.memory.textures++),te){C.__webglFramebuffer=[];for(let N=0;N<6;N++)if(m.mipmaps&&m.mipmaps.length>0){C.__webglFramebuffer[N]=[];for(let ie=0;ie<m.mipmaps.length;ie++)C.__webglFramebuffer[N][ie]=e.createFramebuffer()}else C.__webglFramebuffer[N]=e.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){C.__webglFramebuffer=[];for(let N=0;N<m.mipmaps.length;N++)C.__webglFramebuffer[N]=e.createFramebuffer()}else C.__webglFramebuffer=e.createFramebuffer();if(ce)for(let N=0,ie=j.length;N<ie;N++){let pe=r.get(j[N]);pe.__webglTexture===void 0&&(pe.__webglTexture=e.createTexture(),s.memory.textures++)}if(E.samples>0&&L(E)===!1){C.__webglMultisampledFramebuffer=e.createFramebuffer(),C.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let N=0;N<j.length;N++){let ie=j[N];C.__webglColorRenderbuffer[N]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,C.__webglColorRenderbuffer[N]);let pe=n.convert(ie.format,ie.colorSpace),me=n.convert(ie.type),re=v(ie.internalFormat,pe,me,ie.normalized,ie.colorSpace,E.isXRRenderTarget===!0),Ae=ze(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae,re,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+N,e.RENDERBUFFER,C.__webglColorRenderbuffer[N])}e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(C.__webglDepthRenderbuffer=e.createRenderbuffer(),je(C.__webglDepthRenderbuffer,E,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(te){i.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture),Ue(e.TEXTURE_CUBE_MAP,m);for(let N=0;N<6;N++)if(m.mipmaps&&m.mipmaps.length>0)for(let ie=0;ie<m.mipmaps.length;ie++)fe(C.__webglFramebuffer[N][ie],E,m,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+N,ie);else fe(C.__webglFramebuffer[N],E,m,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);p(m)&&b(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ce){for(let N=0,ie=j.length;N<ie;N++){let pe=j[N],me=r.get(pe),re=e.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(re,me.__webglTexture),Ue(re,pe),fe(C.__webglFramebuffer,E,pe,e.COLOR_ATTACHMENT0+N,re,0),p(pe)&&b(re)}i.unbindTexture()}else{let N=e.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(N=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(N,U.__webglTexture),Ue(N,m),m.mipmaps&&m.mipmaps.length>0)for(let ie=0;ie<m.mipmaps.length;ie++)fe(C.__webglFramebuffer[ie],E,m,e.COLOR_ATTACHMENT0,N,ie);else fe(C.__webglFramebuffer,E,m,e.COLOR_ATTACHMENT0,N,0);p(m)&&b(N),i.unbindTexture()}E.depthBuffer&&Q(E)}function Se(E){let m=E.textures;for(let C=0,U=m.length;C<U;C++){let j=m[C];if(p(j)){let te=w(E),ce=r.get(j).__webglTexture;i.bindTexture(te,ce),b(te),i.unbindTexture()}}}let be=[],Le=[];function Oe(E){if(E.samples>0){if(L(E)===!1){let m=E.textures,C=E.width,U=E.height,j=e.COLOR_BUFFER_BIT,te=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ce=r.get(E),N=m.length>1;if(N)for(let pe=0;pe<m.length;pe++)i.bindFramebuffer(e.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+pe,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,ce.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+pe,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let ie=E.texture.mipmaps;ie&&ie.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let pe=0;pe<m.length;pe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=e.STENCIL_BUFFER_BIT)),N){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ce.__webglColorRenderbuffer[pe]);let me=r.get(m[pe]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,me,0)}e.blitFramebuffer(0,0,C,U,0,0,C,U,j,e.NEAREST),l===!0&&(be.length=0,Le.length=0,be.push(e.COLOR_ATTACHMENT0+pe),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(be.push(te),Le.push(te),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Le)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,be))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),N)for(let pe=0;pe<m.length;pe++){i.bindFramebuffer(e.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+pe,e.RENDERBUFFER,ce.__webglColorRenderbuffer[pe]);let me=r.get(m[pe]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,ce.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+pe,e.TEXTURE_2D,me,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let m=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[m])}}}function ze(E){return Math.min(a.maxSamples,E.samples)}function L(E){let m=r.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function rt(E){let m=s.render.frame;u.get(E)!==m&&(u.set(E,m),E.update())}function Ze(E,m){let C=E.colorSpace,U=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||C!==Ya&&C!==Ai&&(et.getTransfer(C)===nt?(U!==Xt||j!==Ot)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",C)),m}function qe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(h.width=E.naturalWidth||E.width,h.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(h.width=E.displayWidth,h.height=E.displayHeight):(h.width=E.width,h.height=E.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=q,this.getTextureUnits=D,this.setTextureUnits=G,this.setTexture2D=ue,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=K,this.rebindTextures=he,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=L,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function a_(e,t){function i(r,a=Ai){let n,s=et.getTransfer(a);if(r===Ot)return e.UNSIGNED_BYTE;if(r===Gs)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Vs)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Hl)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===kl)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===Gl)return e.BYTE;if(r===Vl)return e.SHORT;if(r===Wr)return e.UNSIGNED_SHORT;if(r===zs)return e.INT;if(r===ai)return e.UNSIGNED_INT;if(r===ii)return e.FLOAT;if(r===ni)return e.HALF_FLOAT;if(r===Wl)return e.ALPHA;if(r===Xl)return e.RGB;if(r===Xt)return e.RGBA;if(r===vi)return e.DEPTH_COMPONENT;if(r===Bi)return e.DEPTH_STENCIL;if(r===jl)return e.RED;if(r===Hs)return e.RED_INTEGER;if(r===ki)return e.RG;if(r===ks)return e.RG_INTEGER;if(r===Ws)return e.RGBA_INTEGER;if(r===Ba||r===za||r===Ga||r===Va)if(s===nt)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===Ba)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===za)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ga)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Va)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===Ba)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===za)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ga)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Va)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Qn||r===es||r===ts||r===is)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===Qn)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===es)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ts)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===is)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rs||r===as||r===ns||r===ss||r===os||r===Xa||r===ls)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===rs||r===as)return s===nt?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===ns)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===ss)return n.COMPRESSED_R11_EAC;if(r===os)return n.COMPRESSED_SIGNED_R11_EAC;if(r===Xa)return n.COMPRESSED_RG11_EAC;if(r===ls)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===hs||r===us||r===cs||r===ds||r===ps||r===fs||r===ms||r===gs||r===_s||r===vs||r===xs||r===ys||r===Ss||r===Ms)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===hs)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===us)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===cs)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ds)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ps)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fs)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ms)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gs)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_s)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vs)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xs)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ys)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ss)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ms)return s===nt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bs||r===Ts||r===Es)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===bs)return s===nt?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ts)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Es)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ws||r===As||r===ja||r===Cs)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===ws)return n.COMPRESSED_RED_RGTC1_EXT;if(r===As)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ja)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Cs)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xr?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var n_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,o_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new hh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new zt({vertexShader:n_,fragmentShader:s_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new ta(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},l_=class extends Xi{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,h=null,u=null,d=null,c=null,f=null,x=typeof XRWebGLBinding<"u",y=new o_,g={},p=t.getContextAttributes(),b=null,w=null,v=[],T=[],A=new le,R=null,_=null,M=new Lt;M.viewport=new ct;let F=new Lt;F.viewport=new ct;let I=[M,F],O=new sp,q=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=v[Y];return ne===void 0&&(ne=new _n,v[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=v[Y];return ne===void 0&&(ne=new _n,v[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=v[Y];return ne===void 0&&(ne=new _n,v[Y]=ne),ne.getHandSpace()};function G(Y){let ne=T.indexOf(Y.inputSource);if(ne===-1)return;let oe=v[ne];oe!==void 0&&(oe.update(Y.inputSource,Y.frame,l||n),oe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function J(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",k);for(let Y=0;Y<v.length;Y++){let ne=T[Y];ne!==null&&(T[Y]=null,v[Y].disconnect(ne))}q=null,D=null,y.reset();for(let Y in g)delete g[Y];if(e.setRenderTarget(b),c=null,d=null,u=null,r=null,w=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),_!==null){let Y=_.camera;Y.fov=_.fov,Y.zoom=_.zoom,Y.updateProjectionMatrix(),_=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){s=Y,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:c},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",J),r.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,oe=null,Re=null;p.depth&&(Re=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=p.stencil?Bi:vi,oe=p.stencil?Xr:ai);let Ne={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:a};u=this.getBinding(),d=u.createProjectionLayer(Ne),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new qt(d.textureWidth,d.textureHeight,{format:Xt,type:Ot,depthTexture:new Yr(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ne={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};c=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:c}),e.setPixelRatio(1),e.setSize(c.framebufferWidth,c.framebufferHeight,!1),w=new qt(c.framebufferWidth,c.framebufferHeight,{format:Xt,type:Ot,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function k(Y){for(let ne=0;ne<Y.removed.length;ne++){let oe=Y.removed[ne],Re=T.indexOf(oe);Re>=0&&(T[Re]=null,v[Re].disconnect(oe))}for(let ne=0;ne<Y.added.length;ne++){let oe=Y.added[ne],Re=T.indexOf(oe);if(Re===-1){for(let fe=0;fe<v.length;fe++)if(fe>=T.length){T.push(oe),Re=fe;break}else if(T[fe]===null){T[fe]=oe,Re=fe;break}if(Re===-1)break}let Ne=v[Re];Ne&&Ne.connect(oe)}}let ue=new P,X=new P;function Z(Y,ne,oe){ue.setFromMatrixPosition(ne.matrixWorld),X.setFromMatrixPosition(oe.matrixWorld);let Re=ue.distanceTo(X),Ne=ne.projectionMatrix.elements,fe=oe.projectionMatrix.elements,je=Ne[14]/(Ne[10]-1),ee=Ne[14]/(Ne[10]+1),Q=(Ne[9]+1)/Ne[5],he=(Ne[9]-1)/Ne[5],ye=(Ne[8]-1)/Ne[0],Se=(fe[8]+1)/fe[0],be=je*ye,Le=je*Se,Oe=Re/(-ye+Se),ze=Oe*-ye;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ze),Y.translateZ(Oe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ne[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let L=je+Oe,rt=ee+Oe,Ze=be-ze,qe=Le+(Re-ze),E=Q*ee/rt*L,m=he*ee/rt*L;Y.projectionMatrix.makePerspective(Ze,qe,E,m,L,rt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function K(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ne=Y.near,oe=Y.far;y.texture!==null&&(y.depthNear>0&&(ne=y.depthNear),y.depthFar>0&&(oe=y.depthFar)),O.near=F.near=M.near=ne,O.far=F.far=M.far=oe,(q!==O.near||D!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),q=O.near,D=O.far),O.layers.mask=Y.layers.mask|6,M.layers.mask=O.layers.mask&-5,F.layers.mask=O.layers.mask&-3;let Re=Y.parent,Ne=O.cameras;K(O,Re);for(let fe=0;fe<Ne.length;fe++)K(Ne[fe],Re);Ne.length===2?Z(O,M,F):O.projectionMatrix.copy(M.projectionMatrix),_===null&&Y.isPerspectiveCamera&&(_={camera:Y,fov:Y.fov,zoom:Y.zoom}),Fe(Y,O,Re)};function Fe(Y,ne,oe){oe===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(oe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=qr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&c===null))return o},this.setFoveation=function(Y){o=Y,d!==null&&(d.fixedFoveation=Y),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(O)},this.getCameraTexture=function(Y){return g[Y]};let Me=null;function it(Y,ne){if(h=ne.getViewerPose(l||n),f=ne,h!==null){let oe=h.views;c!==null&&(e.setRenderTargetFramebuffer(w,c.framebuffer),e.setRenderTarget(w));let Re=!1;oe.length!==O.cameras.length&&(O.cameras.length=0,Re=!0);for(let fe=0;fe<oe.length;fe++){let je=oe[fe],ee=null;if(c!==null)ee=c.getViewport(je);else{let he=u.getViewSubImage(d,je);ee=he.viewport,fe===0&&(e.setRenderTargetTextures(w,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(w))}let Q=I[fe];Q===void 0&&(Q=new Lt,Q.layers.enable(fe),Q.viewport=new ct,I[fe]=Q),Q.matrix.fromArray(je.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(je.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ee.x,ee.y,ee.width,ee.height),fe===0&&(O.matrix.copy(Q.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Re===!0&&O.cameras.push(Q)}let Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let fe=u.getDepthInformation(oe[0]);fe&&fe.isValid&&fe.texture&&y.init(fe,r.renderState)}if(Ne&&Ne.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let fe=0;fe<oe.length;fe++){let je=oe[fe].camera;if(je){let ee=g[je];ee||(ee=new hh,g[je]=ee);let Q=u.getCameraImage(je);ee.sourceTexture=Q}}}}for(let oe=0;oe<v.length;oe++){let Re=T[oe],Ne=v[oe];Re!==null&&Ne!==void 0&&Ne.update(Re,ne,l||n)}Me&&Me(Y,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),f=null}let Ue=new Zh;Ue.setAnimationLoop(it),this.setAnimationLoop=function(Y){Me=Y},this.dispose=function(){}}},h_=new Ke,iu=new We;iu.set(-1,0,0,0,1,0,0,0,1);function u_(e,t){function i(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function r(g,p){p.color.getRGB(g.fogColor.value,Gh(e)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function a(g,p,b,w,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?n(g,p):p.isMeshLambertMaterial?(n(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(n(g,p),d(g,p)):p.isMeshPhongMaterial?(n(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(n(g,p),c(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(n(g,p),x(g,p)):p.isMeshDepthMaterial?n(g,p):p.isMeshDistanceMaterial?(n(g,p),y(g,p)):p.isMeshNormalMaterial?n(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,b,w):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,i(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,i(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,i(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Dt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,i(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Dt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,i(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,i(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=t.get(p),w=b.envMap,v=b.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(h_.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(iu),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,g.aoMapTransform))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,i(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,w){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=w*.5,p.map&&(g.map.value=p.map,i(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,i(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,i(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,i(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function c(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function c_(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){let A=T.program;r.uniformBlockBinding(v,A)}function h(v,T){let A=a[v.id];A===void 0&&(g(v),A=u(v),a[v.id]=A,v.addEventListener("dispose",b));let R=T.program;r.updateUBOMapping(v,R);let _=t.render.frame;n[v.id]!==_&&(c(v),n[v.id]=_)}function u(v){let T=d();v.__bindingPointIndex=T;let A=e.createBuffer(),R=v.__size,_=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,R,_),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,A),A}function d(){for(let v=0;v<o;v++)if(s.indexOf(v)===-1)return s.push(v),v;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(v){let T=a[v.id],A=v.uniforms,R=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let _=0,M=A.length;_<M;_++){let F=A[_];if(Array.isArray(F))for(let I=0,O=F.length;I<O;I++)f(F[I],_,I,R);else f(F,_,0,R)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(v,T,A,R){if(y(v,T,A,R)===!0){let _=v.__offset,M=v.value;if(Array.isArray(M)){let F=0;for(let I=0;I<M.length;I++){let O=M[I],q=p(O);x(O,v.__data,F),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(F+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(M,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,_,v.__data)}}function x(v,T,A){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,A)}function y(v,T,A,R){let _=v.value,M=T+"_"+A;if(R[M]===void 0)return typeof _=="number"||typeof _=="boolean"?R[M]=_:ArrayBuffer.isView(_)?R[M]=_.slice():R[M]=_.clone(),!0;{let F=R[M];if(typeof _=="number"||typeof _=="boolean"){if(F!==_)return R[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(F.equals(_)===!1)return F.copy(_),!0}}return!1}function g(v){let T=v.uniforms,A=0,R=16;for(let M=0,F=T.length;M<F;M++){let I=Array.isArray(T[M])?T[M]:[T[M]];for(let O=0,q=I.length;O<q;O++){let D=I[O],G=Array.isArray(D.value)?D.value:[D.value];for(let J=0,k=G.length;J<k;J++){let ue=G[J],X=p(ue),Z=A%R,K=Z%X.boundary,Fe=Z+K;A+=K,Fe!==0&&R-Fe<X.storage&&(A+=R-Fe),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=A,A+=X.storage}}}let _=A%R;return _>0&&(A+=R-_),v.__size=A,v.__cache={},this}function p(v){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",v),T}function b(v){let T=v.target;T.removeEventListener("dispose",b);let A=s.indexOf(T.__bindingPointIndex);s.splice(A,1),e.deleteBuffer(a[T.id]),delete a[T.id],delete n[T.id]}function w(){for(let v in a)e.deleteBuffer(a[v]);s=[],a={},n={}}return{bind:l,update:h,dispose:w}}var d_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qt=null;function p_(){return Qt===null&&(Qt=new Bc(d_,16,16,ki,ni),Qt.name="DFG_LUT",Qt.minFilter=At,Qt.magFilter=At,Qt.wrapS=fi,Qt.wrapT=fi,Qt.generateMipmaps=!1,Qt.needsUpdate=!0),Qt}var ru=class{constructor(e={}){let{canvas:t=$u(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:c=Ot}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=n;let x=c,y=new Set([Ws,ks,Hs]),g=new Set([Ot,ai,Wr,Xr,Gs,Vs]),p=new Uint32Array(4),b=new Int32Array(4),w=new P,v=null,T=null,A=[],R=[],_=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,F=!1,I=null,O=null,q=null,D=null;this._outputColorSpace=It;let G=0,J=0,k=null,ue=-1,X=null,Z=new ct,K=new ct,Fe=null,Me=new $e(0),it=0,Ue=t.width,Y=t.height,ne=1,oe=null,Re=null,Ne=new ct(0,0,Ue,Y),fe=new ct(0,0,Ue,Y),je=!1,ee=new Mr,Q=!1,he=!1,ye=new Ke,Se=new P,be=new ct,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function ze(){return k===null?ne:1}let L=i;function rt(S,B){return t.getContext(S,B)}let Ze,qe,E,m,C,U,j,te,ce,N,ie,pe,me,re,Ae,Ie,He,Xe,z,$,ae,ve,Ee;try{let S={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bs}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",at,!1),L===null){let B="webgl2";if(L=rt(B,S),L===null)throw rt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}se()}catch(S){throw t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",at,!1),Ve("WebGLRenderer: "+S.message),S}function se(){Ze=new pg(L),Ze.init(),ae=new a_(L,Ze),qe=new rg(L,Ze,e,ae),E=new i_(L,Ze),qe.reversedDepthBuffer&&d&&E.buffers.depth.setReversed(!0),O=L.createFramebuffer(),q=L.createFramebuffer(),D=L.createFramebuffer(),m=new gg(L),C=new H0,U=new r_(L,Ze,E,C,qe,ae,m),j=new dg(M),te=new _p(L),ve=new tg(L,te),ce=new fg(L,te,m,ve),N=new vg(L,ce,te,ve,m),Xe=new _g(L,qe,U),Ae=new ag(C),ie=new V0(M,j,Ze,qe,ve,Ae),pe=new u_(M,C),me=new W0,re=new J0(Ze),He=new eg(M,j,E,N,f,o),Ie=new t_(M,N,qe),Ee=new c_(L,m,qe,E),z=new ig(L,Ze,m),$=new mg(L,Ze,m),m.programs=ie.programs,M.capabilities=qe,M.extensions=Ze,M.properties=C,M.renderLists=me,M.shadowMap=Ie,M.state=E,M.info=m}x!==Ot&&(_=new yg(x,t.width,t.height,s,r,a));let _e=new l_(M,L);this.xr=_e,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let S=Ze.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Ze.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(S){S!==void 0&&(ne=S,this.setSize(Ue,Y,!1))},this.getSize=function(S){return S.set(Ue,Y)},this.setSize=function(S,B,W=!0){if(_e.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=S,Y=B,t.width=Math.floor(S*ne),t.height=Math.floor(B*ne),W===!0&&(t.style.width=S+"px",t.style.height=B+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(Ue*ne,Y*ne).floor()},this.setDrawingBufferSize=function(S,B,W){Ue=S,Y=B,ne=W,t.width=Math.floor(S*W),t.height=Math.floor(B*W),this.setViewport(0,0,S,B)},this.setEffects=function(S){if(x===Ot){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let B=0;B<S.length;B++)if(S[B].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(Z)},this.getViewport=function(S){return S.copy(Ne)},this.setViewport=function(S,B,W,H){S.isVector4?Ne.set(S.x,S.y,S.z,S.w):Ne.set(S,B,W,H),E.viewport(Z.copy(Ne).multiplyScalar(ne).round())},this.getScissor=function(S){return S.copy(fe)},this.setScissor=function(S,B,W,H){S.isVector4?fe.set(S.x,S.y,S.z,S.w):fe.set(S,B,W,H),E.scissor(K.copy(fe).multiplyScalar(ne).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(S){E.setScissorTest(je=S)},this.setOpaqueSort=function(S){oe=S},this.setTransparentSort=function(S){Re=S},this.getClearColor=function(S){return S.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(S=!0,B=!0,W=!0){let H=0;if(S){let V=!1;if(k!==null){let de=k.texture.format;V=y.has(de)}if(V){let de=k.texture.type,xe=g.has(de),Te=He.getClearColor(),we=He.getClearAlpha(),Ge=Te.r,Qe=Te.g,tt=Te.b;xe?(p[0]=Ge,p[1]=Qe,p[2]=tt,p[3]=we,L.clearBufferuiv(L.COLOR,0,p)):(b[0]=Ge,b[1]=Qe,b[2]=tt,b[3]=we,L.clearBufferiv(L.COLOR,0,b))}else H|=L.COLOR_BUFFER_BIT}B&&(H|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),I=S},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",at,!1),He.dispose(),me.dispose(),re.dispose(),C.dispose(),j.dispose(),N.dispose(),ve.dispose(),Ee.dispose(),ie.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",oo),_e.removeEventListener("sessionend",lo),Pi.stop()};function De(S){S.preventDefault(),wo("WebGLRenderer: Context Lost."),F=!0}function yt(){wo("WebGLRenderer: Context Restored."),F=!1;let S=m.autoReset,B=Ie.enabled,W=Ie.autoUpdate,H=Ie.needsUpdate,V=Ie.type;se(),m.autoReset=S,Ie.enabled=B,Ie.autoUpdate=W,Ie.needsUpdate=H,Ie.type=V}function at(S){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Jt(S){let B=S.target;B.removeEventListener("dispose",Jt),li(B)}function li(S){uu(S),C.remove(S)}function uu(S){let B=C.get(S).programs;B!==void 0&&(B.forEach(function(W){ie.releaseProgram(W)}),S.isShaderMaterial&&ie.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,W,H,V,de){B===null&&(B=Le);let xe=V.isMesh&&V.matrixWorld.determinantAffine()<0,Te=pu(S,B,W,H,V);E.setMaterial(H,xe);let we=W.index,Ge=1;if(H.wireframe===!0){if(we=ce.getWireframeAttribute(W),we===void 0)return;Ge=2}let Qe=W.drawRange,tt=W.attributes.position,Pe=Qe.start*Ge,st=(Qe.start+Qe.count)*Ge;de!==null&&(Pe=Math.max(Pe,de.start*Ge),st=Math.min(st,(de.start+de.count)*Ge)),we!==null?(Pe=Math.max(Pe,0),st=Math.min(st,we.count)):tt!=null&&(Pe=Math.max(Pe,0),st=Math.min(st,tt.count));let vt=st-Pe;if(vt<0||vt===1/0)return;ve.setup(V,H,Te,W,we);let ht,ut=z;if(we!==null&&(ht=te.get(we),ut=$,ut.setIndex(ht)),V.isMesh)H.wireframe===!0?(E.setLineWidth(H.wireframeLinewidth*ze()),ut.setMode(L.LINES)):ut.setMode(L.TRIANGLES);else if(V.isLine){let ft=H.linewidth;ft===void 0&&(ft=1),E.setLineWidth(ft*ze()),V.isLineSegments?ut.setMode(L.LINES):V.isLineLoop?ut.setMode(L.LINE_LOOP):ut.setMode(L.LINE_STRIP)}else V.isPoints?ut.setMode(L.POINTS):V.isSprite&&ut.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))ut.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let ft=V._multiDrawStarts,Ce=V._multiDrawCounts,Ct=V._multiDrawCount,Ii=we?te.get(we).bytesPerElement:1,Ft=C.get(H).currentProgram.getUniforms();for(let Kt=0;Kt<Ct;Kt++)Ft.setValue(L,"_gl_DrawID",Kt),ut.render(ft[Kt]/Ii,Ce[Kt])}else if(V.isInstancedMesh)ut.renderInstances(Pe,vt,V.count);else if(W.isInstancedBufferGeometry){let ft=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ce=Math.min(W.instanceCount,ft);ut.renderInstances(Pe,vt,Ce)}else ut.render(Pe,vt)};function so(S,B,W,H){I!==null&&S.isNodeMaterial&&I.setObject(H,S),Q===!0&&Ae.setState(S,W,!1),S.transparent===!0&&S.side===Wt&&S.forceSinglePass===!1?(S.side=Dt,S.needsUpdate=!0,oa(S,B,H),S.side=Vi,S.needsUpdate=!0,oa(S,B,H),S.side=Wt):oa(S,B,H)}this.compile=function(S,B,W=null){W===null&&(W=S),I!==null&&I.renderStart(S,B,W),T=re.get(W),T.init(B),R.push(T),W.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),S!==W&&S.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights(),I!==null&&I.updateLights(T.state.lightsArray),he=this.localClippingEnabled,Q=Ae.init(this.clippingPlanes,he),Q===!0&&Ae.setGlobalState(this.clippingPlanes,B),I!==null&&Ie.render(T.state.shadowsArray,W,B);let H=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let de=V.material;if(de)if(Array.isArray(de))for(let xe=0;xe<de.length;xe++){let Te=de[xe];so(Te,W,B,V),H.add(Te)}else so(de,W,B,V),H.add(de)}),T=R.pop(),I!==null&&I.renderEnd(),H},this.compileAsync=function(S,B,W=null){let H=this.compile(S,B,W);return new Promise(V=>{function de(){if(H.forEach(function(xe){let Te=C.get(xe).currentProgram;(Te===void 0||Te.isReady())&&H.delete(xe)}),H.size===0){V(S);return}setTimeout(de,10)}Ze.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let nn=null;function cu(S){nn&&nn(S)}function oo(){Pi.stop()}function lo(){Pi.start()}let Pi=new Zh;Pi.setAnimationLoop(cu),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(S){nn=S,_e.setAnimationLoop(S),S===null?Pi.stop():Pi.start()},_e.addEventListener("sessionstart",oo),_e.addEventListener("sessionend",lo),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;I!==null&&I.renderStart(S,B);let W=_e.enabled===!0&&_e.isPresenting===!0,H=_!==null&&(k===null||W)&&_.begin(M,k);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(B),B=_e.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,B,k),T=re.get(S,R.length),T.init(B),T.state.textureUnits=U.getTextureUnits(),R.push(T),ye.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ee.setFromProjectionMatrix(ye,jt,B.reversedDepth),he=this.localClippingEnabled,Q=Ae.init(this.clippingPlanes,he),v=me.get(S,A.length),v.init(),A.push(v),_e.enabled===!0&&_e.isPresenting===!0){let de=M.xr.getDepthSensingMesh();de!==null&&sn(de,B,-1/0,M.sortObjects)}sn(S,B,0,M.sortObjects),v.finish(),I!==null&&I.updateLights(T.state.lightsArray),M.sortObjects===!0&&v.sort(oe,Re),Oe=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Oe&&He.addToRenderList(v,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Q===!0&&Ae.beginShadows();let V=T.state.shadowsArray;if(Ie.render(V,S,B),Q===!0&&Ae.endShadows(),(H&&_.hasRenderPass())===!1){let de=v.opaque,xe=v.transmissive;if(T.setupLights(),B.isArrayCamera){let Te=B.cameras;if(xe.length>0)for(let we=0,Ge=Te.length;we<Ge;we++){let Qe=Te[we];uo(de,xe,S,Qe)}Oe&&He.render(S);for(let we=0,Ge=Te.length;we<Ge;we++){let Qe=Te[we];ho(v,S,Qe,Qe.viewport)}}else xe.length>0&&uo(de,xe,S,B),Oe&&He.render(S),ho(v,S,B)}k!==null&&J===0&&(U.updateMultisampleRenderTarget(k),U.updateRenderTargetMipmap(k)),H&&_.end(M),S.isScene===!0&&S.onAfterRender(M,S,B),ve.resetDefaultState(),ue=-1,X=null,R.pop(),R.length>0?(T=R[R.length-1],U.setTextureUnits(T.state.textureUnits),Q===!0&&Ae.setGlobalState(M.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?v=A[A.length-1]:v=null,I!==null&&I.renderEnd()};function sn(S,B,W,H){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(ee)){H&&be.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ye);let de=N.update(S),xe=S.material;xe.visible&&v.push(S,de,xe,W,be.z,null,B)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(ee))){let de=N.update(S),xe=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),be.copy(S.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),be.copy(de.boundingSphere.center)),be.applyMatrix4(S.matrixWorld).applyMatrix4(ye)),Array.isArray(xe)){let Te=de.groups;for(let we=0,Ge=Te.length;we<Ge;we++){let Qe=Te[we],tt=xe[Qe.materialIndex];tt&&tt.visible&&v.push(S,de,tt,W,be.z,Qe,B)}}else xe.visible&&v.push(S,de,xe,W,be.z,null,B)}}let V=S.children;for(let de=0,xe=V.length;de<xe;de++)sn(V[de],B,W,H)}function ho(S,B,W,H){let{opaque:V,transmissive:de,transparent:xe}=S;T.setupLightsView(W),Q===!0&&Ae.setGlobalState(M.clippingPlanes,W),H&&E.viewport(Z.copy(H)),V.length>0&&sa(V,B,W),de.length>0&&sa(de,B,W),xe.length>0&&sa(xe,B,W),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function uo(S,B,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){let tt=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new qt(1,1,{generateMipmaps:!0,type:tt?ni:Ot,minFilter:Fi,samples:Math.max(4,qe.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}let V=T.state.transmissionRenderTarget[H.id],de=H.viewport||Z;V.setSize(de.z*M.transmissionResolutionScale,de.w*M.transmissionResolutionScale);let xe=M.getRenderTarget(),Te=M.getActiveCubeFace(),we=M.getActiveMipmapLevel();M.setRenderTarget(V),M.getClearColor(Me),it=M.getClearAlpha(),it<1&&M.setClearColor(16777215,.5),M.clear(),Oe&&He.render(W);let Ge=M.toneMapping;M.toneMapping=ri;let Qe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),Q===!0&&Ae.setGlobalState(M.clippingPlanes,H),sa(S,W,H),U.updateMultisampleRenderTarget(V),U.updateRenderTargetMipmap(V),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Pe=0,st=B.length;Pe<st;Pe++){let vt=B[Pe],{object:ht,geometry:ut,material:ft,group:Ce}=vt;if(ft.side===Wt&&ht.layers.test(H.layers)){let Ct=ft.side;ft.side=Dt,ft.needsUpdate=!0,co(ht,W,H,ut,ft,Ce),ft.side=Ct,ft.needsUpdate=!0,tt=!0}}tt===!0&&(U.updateMultisampleRenderTarget(V),U.updateRenderTargetMipmap(V))}M.setRenderTarget(xe,Te,we),M.setClearColor(Me,it),Qe!==void 0&&(H.viewport=Qe),M.toneMapping=Ge}function sa(S,B,W){let H=B.isScene===!0?B.overrideMaterial:null;for(let V=0,de=S.length;V<de;V++){let xe=S[V],{object:Te,geometry:we,group:Ge}=xe,Qe=xe.material;Qe.allowOverride===!0&&H!==null&&(Qe=H),Te.layers.test(W.layers)&&co(Te,B,W,we,Qe,Ge)}}function co(S,B,W,H,V,de){I!==null&&V.isNodeMaterial&&I.setObject(S,V),S.onBeforeRender(M,B,W,H,V,de),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(M,B,W,H,S,de),V.transparent===!0&&V.side===Wt&&V.forceSinglePass===!1?(V.side=Dt,V.needsUpdate=!0,M.renderBufferDirect(W,B,H,V,S,de),V.side=Vi,V.needsUpdate=!0,M.renderBufferDirect(W,B,H,V,S,de),V.side=Wt):M.renderBufferDirect(W,B,H,V,S,de),S.onAfterRender(M,B,W,H,V,de)}function oa(S,B,W){B.isScene!==!0&&(B=Le);let H=C.get(S),V=T.state.lights,de=T.state.shadowsArray,xe=V.state.version,Te=ie.getParameters(S,V.state,de,B,W,T.state.lightProbeGridArray),we=ie.getProgramCacheKey(Te),Ge=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?B.environment:null,H.fog=B.fog;let Qe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=j.get(S.envMap||H.environment,Qe),H.envMapRotation=H.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,Ge===void 0&&(S.addEventListener("dispose",Jt),Ge=new Map,H.programs=Ge);let tt=Ge.get(we);if(tt!==void 0){if(H.currentProgram===tt&&H.lightsStateVersion===xe)return fo(S,Te),tt}else Te.uniforms=ie.getUniforms(S),I!==null&&S.isNodeMaterial&&I.build(S,W,Te),S.onBeforeCompile(Te,M),tt=ie.acquireProgram(Te,we),Ge.set(we,tt),H.uniforms=Te.uniforms;let Pe=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pe.clippingPlanes=Ae.uniform),fo(S,Te),H.needsLights=mu(S),H.lightsStateVersion=xe,H.needsLights&&(Pe.ambientLightColor.value=V.state.ambient,Pe.lightProbe.value=V.state.probe,Pe.sunLights.value=V.state.sun,Pe.sunLightShadows.value=V.state.sunShadow,Pe.directionalLights.value=V.state.directional,Pe.directionalLightShadows.value=V.state.directionalShadow,Pe.spotLights.value=V.state.spot,Pe.spotLightShadows.value=V.state.spotShadow,Pe.rectAreaLights.value=V.state.rectArea,Pe.ltc_1.value=V.state.rectAreaLTC1,Pe.ltc_2.value=V.state.rectAreaLTC2,Pe.pointLights.value=V.state.point,Pe.pointLightShadows.value=V.state.pointShadow,Pe.hemisphereLights.value=V.state.hemi,Pe.sunShadowMatrix.value=V.state.sunShadowMatrix,Pe.sunShadowCascade.value=V.state.sunShadowCascade,Pe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pe.spotLightMatrix.value=V.state.spotLightMatrix,Pe.spotLightMap.value=V.state.spotLightMap,Pe.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=T.state.lightProbeGridArray.length>0,H.currentProgram=tt,H.uniformsList=null,tt}function po(S){if(S.uniformsList===null){let B=S.currentProgram.getUniforms();S.uniformsList=Wa.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function fo(S,B){let W=C.get(S);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function du(S,B){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;w.setFromMatrixPosition(B.matrixWorld);for(let W=0,H=S.length;W<H;W++){let V=S[W];if(V.texture!==null&&V.boundingBox.containsPoint(w))return V}return null}function pu(S,B,W,H,V){B.isScene!==!0&&(B=Le),U.resetTextureUnits();let de=B.fog,xe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?B.environment:null,Te=k===null?M.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:et.workingColorSpace,we=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ge=j.get(H.envMap||xe,we),Qe=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,tt=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Pe=!!W.morphAttributes.position,st=!!W.morphAttributes.normal,vt=!!W.morphAttributes.color,ht=ri;H.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ht=M.toneMapping);let ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ft=ut!==void 0?ut.length:0,Ce=C.get(H),Ct=T.state.lights;if(Q===!0&&(he===!0||S!==X)){let lt=S===X&&H.id===ue;Ae.setState(H,S,lt)}let Ii=!1;H.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Ct.state.version||Ce.outputColorSpace!==Te||V.isBatchedMesh&&Ce.batching===!1||!V.isBatchedMesh&&Ce.batching===!0||V.isBatchedMesh&&Ce.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ce.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ce.instancing===!1||!V.isInstancedMesh&&Ce.instancing===!0||V.isSkinnedMesh&&Ce.skinning===!1||!V.isSkinnedMesh&&Ce.skinning===!0||V.isInstancedMesh&&Ce.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ce.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ce.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ce.instancingMorph===!1&&V.morphTexture!==null||Ce.envMap!==Ge||H.fog===!0&&Ce.fog!==de||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Ae.numPlanes||Ce.numIntersection!==Ae.numIntersection)||Ce.vertexAlphas!==Qe||Ce.vertexTangents!==tt||Ce.morphTargets!==Pe||Ce.morphNormals!==st||Ce.morphColors!==vt||Ce.toneMapping!==ht||Ce.morphTargetsCount!==ft||!!Ce.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ii=!0):(Ii=!0,Ce.__version=H.version);let Ft=Ce.currentProgram;Ii===!0&&(Ft=oa(H,B,V),I&&H.isNodeMaterial&&I.onUpdateProgram(H,Ft,Ce));let Kt=!1,yi=!1,Yi=!1,ot=Ft.getUniforms(),_t=Ce.uniforms;if(E.useProgram(Ft.program)&&(Kt=!0,yi=!0,Yi=!0),H.id!==ue&&(ue=H.id,yi=!0),Ce.needsLights){let lt=du(T.state.lightProbeGridArray,V);Ce.lightProbeGrid!==lt&&(Ce.lightProbeGrid=lt,yi=!0)}if(Kt||X!==S){E.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ot.setValue(L,"projectionMatrix",S.projectionMatrix),ot.setValue(L,"viewMatrix",S.matrixWorldInverse);let lt=ot.map.cameraPosition;lt!==void 0&&lt.setValue(L,Se.setFromMatrixPosition(S.matrixWorld)),qe.logarithmicDepthBuffer&&ot.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ot.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),X!==S&&(X=S,yi=!0,Yi=!0)}if(Ce.needsLights&&(Ct.state.sunShadowMap.length>0&&ot.setValue(L,"sunShadowMap",Ct.state.sunShadowMap,U),Ct.state.directionalShadowMap.length>0&&ot.setValue(L,"directionalShadowMap",Ct.state.directionalShadowMap,U),Ct.state.spotShadowMap.length>0&&ot.setValue(L,"spotShadowMap",Ct.state.spotShadowMap,U),Ct.state.pointShadowMap.length>0&&ot.setValue(L,"pointShadowMap",Ct.state.pointShadowMap,U)),V.isSkinnedMesh){ot.setOptional(L,V,"bindMatrix"),ot.setOptional(L,V,"bindMatrixInverse");let lt=V.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),ot.setValue(L,"boneTexture",lt.boneTexture,U))}V.isBatchedMesh&&(ot.setOptional(L,V,"batchingTexture"),ot.setValue(L,"batchingTexture",V._matricesTexture,U),ot.setOptional(L,V,"batchingIdTexture"),ot.setValue(L,"batchingIdTexture",V._indirectTexture,U),ot.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&ot.setValue(L,"batchingColorTexture",V._colorsTexture,U));let Si=W.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&Xe.update(V,W,Ft),(yi||Ce.receiveShadow!==V.receiveShadow)&&(Ce.receiveShadow=V.receiveShadow,ot.setValue(L,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&B.environment!==null&&(_t.envMapIntensity.value=B.environmentIntensity),_t.dfgLUT!==void 0&&(_t.dfgLUT.value=p_()),yi){if(ot.setValue(L,"toneMappingExposure",M.toneMappingExposure),Ce.needsLights&&fu(_t,Yi),de&&H.fog===!0&&pe.refreshFogUniforms(_t,de),pe.refreshMaterialUniforms(_t,H,ne,Y,T.state.transmissionRenderTarget[S.id]),Ce.needsLights&&Ce.lightProbeGrid){let lt=Ce.lightProbeGrid;_t.probesSH.value=lt.texture,_t.probesMin.value.copy(lt.boundingBox.min),_t.probesMax.value.copy(lt.boundingBox.max),_t.probesResolution.value.copy(lt.resolution)}Wa.upload(L,po(Ce),_t,U)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Wa.upload(L,po(Ce),_t,U),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ot.setValue(L,"center",V.center),ot.setValue(L,"modelViewMatrix",V.modelViewMatrix),ot.setValue(L,"normalMatrix",V.normalMatrix),ot.setValue(L,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){let lt=H.uniformsGroups;for(let Rr=0,Zi=lt.length;Rr<Zi;Rr++){let go=lt[Rr];Ee.update(go,Ft),Ee.bind(go,Ft)}}return Ft}function fu(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.sunLights.needsUpdate=B,S.sunLightShadows.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function mu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(S,B,W){let H=C.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),C.get(S.texture).__webglTexture=B,C.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,B){let W=C.get(S);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,W=0){k=S,G=B,J=W;let H=null,V=!1,de=!1;if(S){let xe=C.get(S);if(xe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(L.FRAMEBUFFER,xe.__webglFramebuffer),Z.copy(S.viewport),K.copy(S.scissor),Fe=S.scissorTest,E.viewport(Z),E.scissor(K),E.setScissorTest(Fe),ue=-1;return}else if(xe.__webglFramebuffer===void 0)U.setupRenderTarget(S);else if(xe.__hasExternalTextures)U.rebindTextures(S,C.get(S.texture).__webglTexture,C.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ge=S.depthTexture;if(xe.__boundDepthTexture!==Ge){if(Ge!==null&&C.has(Ge)&&(S.width!==Ge.image.width||S.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(S)}}let Te=S.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(de=!0);let we=C.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(we[B])?H=we[B][W]:H=we[B],V=!0):S.samples>0&&U.useMultisampledRTT(S)===!1?H=C.get(S).__webglMultisampledFramebuffer:Array.isArray(we)?H=we[W]:H=we,Z.copy(S.viewport),K.copy(S.scissor),Fe=S.scissorTest}else Z.copy(Ne).multiplyScalar(ne).floor(),K.copy(fe).multiplyScalar(ne).floor(),Fe=je;if(W!==0&&(H=O),E.bindFramebuffer(L.FRAMEBUFFER,H)&&E.drawBuffers(S,H),E.viewport(Z),E.scissor(K),E.setScissorTest(Fe),V){let xe=C.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,xe.__webglTexture,W)}else if(de){let xe=B;for(let Te=0;Te<S.textures.length;Te++){let we=C.get(S.textures[Te]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Te,we.__webglTexture,W,xe)}}else if(S!==null&&W!==0){let xe=C.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xe.__webglTexture,W)}ue=-1};function mo(S){let B=C.get(S);return(B.__readFormat!==S.format||B.__readType!==S.type)&&(B.__readFormat=S.format,B.__readType=S.type,B.__formatReadable=qe.textureFormatReadable(S.format),B.__typeReadable=qe.textureTypeReadable(S.type)),B}this.readRenderTargetPixels=function(S,B,W,H,V,de,xe,Te=0){if(!(S&&S.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=C.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we){E.bindFramebuffer(L.FRAMEBUFFER,we);try{let Ge=S.textures[Te],Qe=Ge.format,tt=Ge.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Te);let Pe=mo(Ge);if(Pe.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-H&&W>=0&&W<=S.height-V&&L.readPixels(B,W,H,V,ae.convert(Qe),ae.convert(tt),de)}finally{let Ge=k!==null?C.get(k).__webglFramebuffer:null;E.bindFramebuffer(L.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(S,B,W,H,V,de,xe,Te=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=C.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we)if(B>=0&&B<=S.width-H&&W>=0&&W<=S.height-V){E.bindFramebuffer(L.FRAMEBUFFER,we);let Ge=S.textures[Te],Qe=Ge.format,tt=Ge.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Te);let Pe=mo(Ge);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let st=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,st),L.bufferData(L.PIXEL_PACK_BUFFER,de.byteLength,L.STREAM_READ),L.readPixels(B,W,H,V,ae.convert(Qe),ae.convert(tt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let vt=k!==null?C.get(k).__webglFramebuffer:null;E.bindFramebuffer(L.FRAMEBUFFER,vt);let ht=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Qu(L,ht,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,st),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,de),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(st),L.deleteSync(ht),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,B=null,W=0){let H=Math.pow(2,-W),V=Math.floor(S.image.width*H),de=Math.floor(S.image.height*H),xe=B!==null?B.x:0,Te=B!==null?B.y:0;U.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,xe,Te,V,de),E.unbindTexture()},this.copyTextureToTexture=function(S,B,W=null,H=null,V=0,de=0){let xe,Te,we,Ge,Qe,tt,Pe,st,vt,ht=S.isCompressedTexture?S.mipmaps[de]:S.image;if(W!==null)xe=W.max.x-W.min.x,Te=W.max.y-W.min.y,we=W.isBox3?W.max.z-W.min.z:1,Ge=W.min.x,Qe=W.min.y,tt=W.isBox3?W.min.z:0;else{let _t=Math.pow(2,-V);xe=Math.floor(ht.width*_t),Te=Math.floor(ht.height*_t),S.isDataArrayTexture?we=ht.depth:S.isData3DTexture?we=Math.floor(ht.depth*_t):we=1,Ge=0,Qe=0,tt=0}H!==null?(Pe=H.x,st=H.y,vt=H.z):(Pe=0,st=0,vt=0);let ut=ae.convert(B.format),ft=ae.convert(B.type),Ce;B.isData3DTexture?(U.setTexture3D(B,0),Ce=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(U.setTexture2DArray(B,0),Ce=L.TEXTURE_2D_ARRAY):(U.setTexture2D(B,0),Ce=L.TEXTURE_2D),E.activeTexture(L.TEXTURE0),E.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),E.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),E.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);let Ct=E.getParameter(L.UNPACK_ROW_LENGTH),Ii=E.getParameter(L.UNPACK_IMAGE_HEIGHT),Ft=E.getParameter(L.UNPACK_SKIP_PIXELS),Kt=E.getParameter(L.UNPACK_SKIP_ROWS),yi=E.getParameter(L.UNPACK_SKIP_IMAGES);E.pixelStorei(L.UNPACK_ROW_LENGTH,ht.width),E.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht.height),E.pixelStorei(L.UNPACK_SKIP_PIXELS,Ge),E.pixelStorei(L.UNPACK_SKIP_ROWS,Qe),E.pixelStorei(L.UNPACK_SKIP_IMAGES,tt);let Yi=S.isDataArrayTexture||S.isData3DTexture,ot=B.isDataArrayTexture||B.isData3DTexture;if(S.isDepthTexture){let _t=C.get(S),Si=C.get(B),lt=C.get(_t.__renderTarget),Rr=C.get(Si.__renderTarget);E.bindFramebuffer(L.READ_FRAMEBUFFER,lt.__webglFramebuffer),E.bindFramebuffer(L.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let Zi=0;Zi<we;Zi++)Yi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,C.get(S).__webglTexture,V,tt+Zi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,C.get(B).__webglTexture,de,vt+Zi)),L.blitFramebuffer(Ge,Qe,xe,Te,Pe,st,xe,Te,L.DEPTH_BUFFER_BIT,L.NEAREST);E.bindFramebuffer(L.READ_FRAMEBUFFER,null),E.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||C.has(S)){let _t=C.get(S),Si=C.get(B);E.bindFramebuffer(L.READ_FRAMEBUFFER,q),E.bindFramebuffer(L.DRAW_FRAMEBUFFER,D);for(let lt=0;lt<we;lt++)Yi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_t.__webglTexture,V,tt+lt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_t.__webglTexture,V),ot?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Si.__webglTexture,de,vt+lt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Si.__webglTexture,de),V!==0?L.blitFramebuffer(Ge,Qe,xe,Te,Pe,st,xe,Te,L.COLOR_BUFFER_BIT,L.NEAREST):ot?L.copyTexSubImage3D(Ce,de,Pe,st,vt+lt,Ge,Qe,xe,Te):L.copyTexSubImage2D(Ce,de,Pe,st,Ge,Qe,xe,Te);E.bindFramebuffer(L.READ_FRAMEBUFFER,null),E.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ot?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Ce,de,Pe,st,vt,xe,Te,we,ut,ft,ht.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Ce,de,Pe,st,vt,xe,Te,we,ut,ht.data):L.texSubImage3D(Ce,de,Pe,st,vt,xe,Te,we,ut,ft,ht):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,de,Pe,st,xe,Te,ut,ft,ht.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,de,Pe,st,ht.width,ht.height,ut,ht.data):L.texSubImage2D(L.TEXTURE_2D,de,Pe,st,xe,Te,ut,ft,ht);E.pixelStorei(L.UNPACK_ROW_LENGTH,Ct),E.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ii),E.pixelStorei(L.UNPACK_SKIP_PIXELS,Ft),E.pixelStorei(L.UNPACK_SKIP_ROWS,Kt),E.pixelStorei(L.UNPACK_SKIP_IMAGES,yi),de===0&&B.generateMipmaps&&L.generateMipmap(Ce),E.unbindTexture()},this.initRenderTarget=function(S){C.get(S).__webglFramebuffer===void 0&&U.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?U.setTextureCube(S,0):S.isData3DTexture?U.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?U.setTexture2DArray(S,0):U.setTexture2D(S,0),E.unbindTexture()},this.resetState=function(){G=0,J=0,k=null,E.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var na=document.documentElement,lu=matchMedia("(prefers-reduced-motion: reduce)").matches,au=3e3,nu=2e3,su=.623,ou=.801,m_=.036;function g_(){try{let e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl2")||e.getContext("webgl")))}catch{return!1}}lu&&na.classList.add("rm");if(!g_()||lu)na.classList.add("no-webgl"),no(),addEventListener("resize",no,{passive:!0});else try{__()}catch(e){console.warn("[qiye] webgl disabled:",e&&e.message),na.classList.add("no-webgl"),no()}function no(){let e=document.getElementById("hero"),t=e&&e.querySelector(".hero-fallback");if(!e||!t)return;let i=e.getBoundingClientRect();hu(t,i.width,i.height)}function hu(e,t,i){let r=t<720,n=Math.max(t/au,i/nu)*1,s=au*n,o=nu*n,l=r?t*.86:t*.66,h=r?i*.58:i*.64,u=l-su*s,d=h-ou*o;u=Math.min(0,Math.max(t-s,u)),d=Math.min(0,Math.max(i-o,d)),e.style.backgroundSize=s.toFixed(2)+"px "+o.toFixed(2)+"px",e.style.backgroundPosition=u.toFixed(2)+"px "+d.toFixed(2)+"px";let c=u+su*s,f=d+ou*o,x=m_*s,y=document.getElementById("hero-fireglow");return y&&(y.style.left=c+"px",y.style.top=f+x*.15+"px",y.style.width=x*3.1+"px",y.style.height=x*1.8+"px"),{pitX:c,pitY:f,radiusPx:x,vw:t,vh:i}}function an(e,t){return new en(Object.assign({color:e,roughness:.9,metalness:.02,transparent:!1,opacity:1},t||{}))}function __(){let e=document.getElementById("gl"),t=document.getElementById("hero"),i=t&&t.querySelector(".hero-fallback"),r=document.getElementById("hero-hint");if(!e||!t||!i)return;let a=innerWidth<720||matchMedia("(pointer: coarse)").matches,n=new ru({canvas:e,antialias:!a,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(devicePixelRatio||1,a?1.25:1.75)),n.toneMapping=$a,n.toneMappingExposure=1.18,n.outputColorSpace=It,n.setClearColor(0,0);let s=new ih;s.background=null,s.fog=null;let o=new Lt(32,1,.05,40);o.position.set(.05,2.05,4.35),s.add(new Xh(12890266,.42)),s.add(new kh(15786704,3811874,.38));let l=new mi;s.add(l);let h=new gt(new Qr(.42,a?20:32),an(1314315,{roughness:1,metalness:0}));h.rotation.x=-Math.PI/2,h.position.y=.012,l.add(h);let u=new gt(new Qr(.26,a?16:24),new en({color:3807756,emissive:14833698,emissiveIntensity:.85,roughness:.78,metalness:0,transparent:!1,opacity:1}));u.rotation.x=-Math.PI/2,u.position.y=.02,l.add(u);let d=an(2759700,{roughness:.94}),c=new en({color:4858902,emissive:12868136,emissiveIntensity:.45,roughness:.7,metalness:.02});function f(m,C){let U=new mi,j=new gt(new Ar(.055,.07,.62,a?6:10),d);j.rotation.z=Math.PI/2,j.castShadow=!1,U.add(j);let te=new gt(new Ar(.02,.028,.42,6),c);return te.rotation.z=Math.PI/2,te.position.y=.02,U.add(te),U.rotation.y=m,U.scale.setScalar(C),U.position.y=.07,U}l.add(f(.35,1),f(-.85,.92),f(1.35,.84));let x=new io(16742972,3.4,1.15,2);x.position.set(0,.28,0),l.add(x);let y=new io(15245408,.7,.7,2);y.position.set(.1,.22,.15),l.add(y);let g=a?4:5,p=[];for(let m=0;m<g;m++){let C=x_(.4+m*.17,m<3),U=.2-m*.012,j=.015+U*.5,te=new gt(new ta(.26-m*.018,U),C);te.position.set((m-(g-1)/2)*.015,j,m%2*.008),te.userData.baseY=j,te.rotation.y=m*.9,te.renderOrder=2,l.add(te),p.push(te)}let b=a?28:48,w=new dt,v=new Float32Array(b*3),T=[];for(let m=0;m<b;m++)v[m*3]=(Math.random()-.5)*.12,v[m*3+1]=Math.random()*.45,v[m*3+2]=(Math.random()-.5)*.12,T.push({vx:(Math.random()-.5)*.08,vy:.22+Math.random()*.35,vz:(Math.random()-.5)*.08,life:Math.random()});w.setAttribute("position",new Yt(v,3));let A=new Js({color:16756832,size:a?.035:.045,transparent:!0,opacity:.9,depthWrite:!1,sizeAttenuation:!0,blending:Hr}),R=new oh(w,A);R.renderOrder=3,l.add(R);let _=new gt(new Qs(.72,10,10),new wr({visible:!1}));_.position.y=.35,_.userData.kind="fire",l.add(_);let M=0,F=4.2,I=[],O=new mi;s.add(O),[{x:-.16,y:.1,z:.05,ry:.4},{x:.16,y:.1,z:-.04,ry:-.55},{x:-.02,y:.22,z:.02,ry:1},{x:.06,y:.33,z:.08,ry:-.2}].forEach((m,C)=>{let U=v_(a);U.position.set(m.x,m.y,m.z),U.rotation.y=m.ry,U.rotation.z=(C-1.5)*.04,U.userData={kind:"wood",available:!0,homePos:U.position.clone(),homeRot:U.rotation.clone(),idx:C},O.add(U),I.push(U)});let D=new gt(new qi(.85,.7,.7),new wr({visible:!1}));D.position.set(0,.28,0),D.userData={kind:"wood",available:!0,isStackProxy:!0},O.add(D),na.classList.add("webgl-on"),na.classList.remove("no-webgl"),r&&(r.hidden=!1);let G=new jh,J=new le,k=new ei(new P(0,1,0),0),ue=new P,X=null,Z=null,K=null,Fe=null,Me=null,it=[...I,D,_],Ue=.4;function Y(m){let C=e.getBoundingClientRect();J.x=(m.clientX-C.left)/C.width*2-1,J.y=-((m.clientY-C.top)/C.height)*2+1}function ne(m){return!!(m&&m.closest&&m.closest("a,button,input,textarea,select,label,.nav-toggle,.scroll-cue"))}function oe(m){for(let C=0;C<m.length;C++){let U=m[C].object;for(;U&&!U.userData.kind;)U=U.parent;if(!(!U||U.userData.kind!=="wood")){if(U.userData.isStackProxy){let j=I.find(te=>te.userData.available);if(j)return j;continue}if(U.userData.available)return U}}return null}function Re(m){for(let C=0;C<m.length;C++){let U=m[C].object;for(;U&&!U.userData.kind;)U=U.parent;if(U&&U.userData.kind==="fire")return U}return null}function Ne(m,C){t.classList.toggle("gl-grab",!!(m||Me&&C)),t.classList.toggle("gl-pending",!!Me&&!X)}function fe(){return l.localToWorld(new P(0,.25,0))}function je(){M=Math.min(1,M+.85),F=Math.min(6.4,F+.28);let m=R.geometry.attributes.position.array;for(let C=0;C<b;C++)Math.random()>.4&&(m[C*3+1]=.08+Math.random()*.16,T[C].vy=.55+Math.random()*.7,T[C].life=0);if(R.geometry.attributes.position.needsUpdate=!0,u.material.emissiveIntensity=1.15,r){let C=I.filter(U=>U.userData.available).length;r.textContent=C?C===I.length-1?"\u706B\u66F4\u65FA\u4E86\u3002\u8FD8\u53EF\u518D\u6DFB\u67F4 \u2192":"\u4F59\u4E0B "+C+" \u675F\u67F4\u706B":"\u7BDD\u706B\u6B63\u65FA \xB7 \u67F4\u5DF2\u7528\u5C3D",C||r.classList.add("done")}}function ee(m){if(!m||m.done)return;m.done=!0;let C=m.wood;if(m.returning)try{O.attach(C),C.position.copy(C.userData.homePos),C.rotation.copy(C.userData.homeRot),C.userData.available=!0,C.visible=!0}catch(U){console.warn("[qiye] return wood",U)}else{je();try{C.visible=!1,C.parent&&C.parent.remove(C)}catch(U){console.warn("[qiye] consume wood",U)}}K===m&&(K=null)}function Q(m,C){if(!m||!m.userData.available)return;m.userData.available=!1,Me=null;try{s.attach(m)}catch(ce){console.warn("[qiye] attach",ce)}let U=m.position.clone(),j=fe();if(!C&&U.distanceTo(j)>Ue*4.2){let ce=O.localToWorld(m.userData.homePos.clone());K={wood:m,t:0,dur:.48,done:!1,from:U.clone(),to:ce,midY:U.y+Ue*.6,returning:!0};return}K={wood:m,t:0,dur:.52,done:!1,from:U.clone(),to:j.clone(),midY:Math.max(U.y,j.y)+Ue*1.6,returning:!1};let te=K;setTimeout(()=>ee(te),900)}function he(m){if(!be)return;if(ne(m.target)&&!X){Ne(null,null);return}if(Y(m),G.setFromCamera(J,o),X){G.ray.intersectPlane(k,ue)&&(ue.y=Math.max(ue.y,l.position.y+Ue*.35),X.position.copy(ue)),t.classList.add("gl-grabbing");return}let C=G.intersectObjects(it,!0);Fe=oe(C),Ne(Fe,Re(C))}function ye(m){if(!be||ne(m.target)||m.pointerType==="mouse"&&m.button!==0)return;Y(m),G.setFromCamera(J,o);let C=G.intersectObjects(it,!0),U=oe(C),j=Re(C);if(Me&&j&&Me!==X){Q(Me,!0),m.preventDefault();return}U&&(X=U,Z={x:m.clientX,y:m.clientY},s.attach(U),U.position.y+=Ue*.18,Me=U,t.classList.add("gl-grabbing"),t.classList.add("is-dragging"),m.preventDefault())}function Se(m){if(!X)return;let C=X;X=null,t.classList.remove("gl-grabbing"),t.classList.remove("is-dragging"),Y(m),G.setFromCamera(J,o);let j=G.intersectObjects([_,D,...I],!0).length>0||C.getWorldPosition(new P).distanceTo(fe())<Ue*4.5,te=!Z||Math.hypot(m.clientX-Z.x,m.clientY-Z.y)<28;Q(C,j||te),m.preventDefault()}t.addEventListener("pointermove",he,{passive:!0}),t.addEventListener("pointerdown",ye,{passive:!1}),t.addEventListener("pointerup",Se,{passive:!1}),t.addEventListener("pointercancel",Se,{passive:!1}),t.addEventListener("touchmove",m=>{X&&m.preventDefault()},{passive:!1});let be=!0;function Le(m,C,U){let j=new P(m/Math.max(1,Oe)*2-1,-(C/Math.max(1,ze)*2-1),.5);j.unproject(o);let te=j.sub(o.position).normalize();return o.position.clone().add(te.multiplyScalar(U))}let Oe=1,ze=1;function L(){let m=t.getBoundingClientRect();Oe=Math.max(1,m.width),ze=Math.max(1,m.height),a=innerWidth<720||matchMedia("(pointer: coarse)").matches,o.aspect=Oe/ze,o.position.set(.05,2.05,4.35),o.lookAt(0,.12,0),o.updateProjectionMatrix(),o.updateMatrixWorld(),n.setSize(Oe,ze,!1);let C=hu(i,Oe,ze),U=3.55,j=C.radiusPx*(Oe<720?.16:.02);l.position.copy(Le(C.pitX,C.pitY+j,U)),l.scale.setScalar(1);let ce=2*Math.tan(Yl.degToRad(o.fov)/2)*U/ze;Ue=Math.max(.12,C.radiusPx*ce),l.scale.setScalar(Ue/.42),k.constant=-l.position.y;let ie=t.getBoundingClientRect(),pe=(Xe,z)=>{let $=ie.left+Xe,ae=ie.top+z,ve=16,Ee=se=>{let _e=document.querySelector(se);if(!_e)return!1;let De=_e.getBoundingClientRect();return $>De.left-ve&&$<De.right+ve&&ae>De.top-ve&&ae<De.bottom+ve};return Ee(".hero-inner")||Ee(".hero-foot")||Ee("#hero-hint")||Xe<28||Xe>Oe-28||z<72||z>ze-20},me=[[-C.radiusPx*1.35,C.radiusPx*.05],[C.radiusPx*1.35,C.radiusPx*.05],[-C.radiusPx*1.15,-C.radiusPx*.85],[C.radiusPx*1.15,-C.radiusPx*.85]],re=me[0][0],Ae=me[0][1];for(let Xe=0;Xe<me.length;Xe++)if(!pe(C.pitX+me[Xe][0],C.pitY+me[Xe][1])){re=me[Xe][0],Ae=me[Xe][1];break}let Ie=U,He=Le(C.pitX+re,C.pitY+Ae,Ie);O.position.copy(He),O.rotation.set(0,0,0),O.scale.setScalar(Ue/.42)}L(),addEventListener("resize",L,{passive:!0});function rt(){let m=t.getBoundingClientRect();be=m.bottom>40&&m.top<innerHeight,e.style.opacity=be?"1":"0"}addEventListener("scroll",rt,{passive:!0}),rt();let Ze=new qh,qe=!0;function E(){if(!qe)return;requestAnimationFrame(E);let m=Math.min(.05,Ze.getDelta()),C=Ze.elapsedTime,U=!!(K&&!K.done);if((!be||document.hidden)&&!U)return;M=Math.max(0,M-m*.42);let j=1+Math.sin(C*11)*.07+Math.sin(C*17.3)*.04,te=1+M*1.35;x.intensity=F*j*te,y.intensity=.85*j*te,x.position.y=.38+Math.sin(C*9)*.03,u.material.emissiveIntensity=.7+M*.7+Math.sin(C*13)*.08,p.forEach((N,ie)=>{N.material.uniforms.uTime.value=C,N.material.uniforms.uBoost.value=M;let pe=1+M*.38+Math.sin(C*8+ie)*.035;N.scale.set(pe,pe*(1+M*.15),1),N.position.y=(N.userData.baseY||.08)+Math.sin(C*6+ie)*.008,N.quaternion.copy(o.quaternion)});let ce=R.geometry.attributes.position.array;for(let N=0;N<b;N++){let ie=T[N];ie.life+=m*(.4+M*.35),ce[N*3]+=ie.vx*m,ce[N*3+1]+=ie.vy*m*(1+M),ce[N*3+2]+=ie.vz*m,(ie.life>1||ce[N*3+1]>1.35)&&(ce[N*3]=(Math.random()-.5)*.1,ce[N*3+1]=.05,ce[N*3+2]=(Math.random()-.5)*.1,ie.vx=(Math.random()-.5)*.12,ie.vy=.25+Math.random()*.4,ie.vz=(Math.random()-.5)*.12,ie.life=0)}if(R.geometry.attributes.position.needsUpdate=!0,A.opacity=.65+M*.3,K&&!K.done){K.t+=m;let N=Math.min(1,K.t/Math.max(.01,K.dur)),ie=1-Math.pow(1-N,3),pe=K.wood.position,me=K.from,re=K.to;pe.x=me.x+(re.x-me.x)*ie,pe.z=me.z+(re.z-me.z)*ie;let Ae=Math.sin(N*Math.PI)*Math.max(.08,K.midY-Math.max(me.y,re.y));pe.y=me.y+(re.y-me.y)*ie+Ae,K.wood.rotation.x+=m*3.2,K.wood.rotation.z+=m*2.2,N>=1&&ee(K)}n.render(s,o)}E(),addEventListener("beforeunload",()=>{qe=!1})}function v_(e){let t=new mi,i=an(6964784,{roughness:.88}),r=an(14996412,{roughness:.62}),a=new gt(new Ar(.075,.09,.58,e?7:12),i);a.rotation.z=Math.PI/2,t.add(a);let n=new gt(new Qr(.075,e?7:12),r);n.position.x=.29,n.rotation.y=Math.PI/2;let s=n.clone();s.position.x=-.29,s.rotation.y=-Math.PI/2,t.add(n,s);let o=new gt(new qi(.78,.36,.36),new wr({visible:!1}));return t.add(o),t}function x_(e,t){return new zt({transparent:!0,depthWrite:!1,side:Wt,blending:t?Gi:Hr,toneMapped:!1,uniforms:{uTime:{value:0},uBoost:{value:0},uSeed:{value:e},uSolid:{value:t?1:0}},vertexShader:`
      varying vec2 vUv;
      void main(){
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform float uTime, uBoost, uSeed, uSolid;
      varying vec2 vUv;
      void main(){
        vec2 uv = vUv;
        float wobble = sin(uv.y * 9.0 + uTime * 7.0 + uSeed * 6.0) * 0.045 * (1.0 - uv.y);
        float x = abs((uv.x + wobble) - 0.5) * 2.0;
        float body = smoothstep(0.62, 0.02, x);
        body *= smoothstep(0.0, 0.08, uv.y) * smoothstep(1.05, 0.22, uv.y);
        body *= 0.82 + 0.18 * sin(uTime * 10.0 + uv.y * 7.0 + uSeed);
        vec3 hot = vec3(1.0, 0.93, 0.62);
        vec3 mid = vec3(1.0, 0.55, 0.12);
        vec3 base = vec3(0.72, 0.16, 0.03);
        vec3 col = mix(base, mid, smoothstep(0.0, 0.45, uv.y));
        col = mix(col, hot, smoothstep(0.45, 1.0, uv.y));
        float a = body * (uSolid > 0.5 ? (0.96 + uBoost * 0.04) : (0.55 + uBoost * 0.35));
        if (a < 0.02) discard;
        gl_FragColor = vec4(col, a);
      }`})}})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
