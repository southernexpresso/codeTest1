(function(e){function t(t){for(var s,r,o=t[0],l=t[1],u=t[2],p=0,h=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&h.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);c&&c(t);while(h.length)h.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],s=!0,o=1;o<i.length;o++){var l=i[o];0!==n[l]&&(s=!1)}s&&(a.splice(t--,1),e=r(r.s=i[0]))}return e}var s={},n={app:0},a=[];function r(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=s,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(i,s,function(t){return e[t]}.bind(null,s));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/codetest1/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"56d7":function(e,t,i){"use strict";i.r(t);var s=i("2b0e"),n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | ")],1),t("router-view")],1)},a=[],r=(i("c2fc"),i("2877")),o={},l=Object(r["a"])(o,n,a,!1,null,null,null),u=l.exports,c=i("8c4f"),p=function(){var e=this,t=e._self._c;return t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user_email,expression:"user_email"}],attrs:{placeholder:"Please type in your email..."},domProps:{value:e.user_email},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitEmail.apply(null,arguments)},input:function(t){t.target.composing||(e.user_email=t.target.value)}}}),t("p",[e._v(" "+e._s(e.emailStatusMsg)+" ")]),this.isEmailOK&&!this.isOTPFail?t("p",[e._v(" "+e._s(e.otpMsg)+" ")]):e._e(),this.isEmailOK&&!this.isOTPFail?t("input",{directives:[{name:"model",rawName:"v-model",value:e.inputOTP,expression:"inputOTP"}],attrs:{placeholder:"Please type in OTP..."},domProps:{value:e.inputOTP},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.check_OTP.apply(null,arguments)},input:function(t){t.target.composing||(e.inputOTP=t.target.value)}}}):e._e(),this.isEmailOK?t("p",[e._v(" "+e._s(e.otpStatusMsg)+" ")]):e._e()])},h=[],m={data(){return{user_email:"",isEmailOK:!1,isEmailInvalid:!1,isEmailFail:!1,isOTPOK:!1,isOTPFail:!1,isOTPTimeout:!1,emailStatusMsg:"",emailDatabase:["a.dso.org.sg","b.dso.org.sg"],inputOTP:"",otpMsg:"",otpStatusMsg:"",genOTP:"",retryCounter:10}},computed:{extraWord(){return 1==this.isOTPTimeout?"new":""}},methods:{submitEmail(){var e=new RegExp("^[a-zA-Z0-9_-]+\\.dso\\.org\\.sg$","gm");this.isEmailOK=e.test(this.user_email),this.isEmailOK?this.emailDatabase.includes(this.user_email)?(this.isEmailFail=!1,this.emailStatusMsg="STATUS_EMAIL_OK: email containing OTP has been sent successfully.",this.generate_OTP_email()):(this.isEmailFail=!0,this.isEmailOK=!1,this.emailStatusMsg="STATUS_EMAIL_FAIL: email address does not exist or sending to the email has failed."):(this.isEmailInvalid,this.isEmailOK=!1,this.emailStatusMsg="STATUS_EMAIL_INVALID: email address is invalid.")},generate_OTP_email(){this.genOTP="";for(let e=0;e<6;e++)this.genOTP+=Math.floor(10*Math.random());this.otpMsg="Your "+this.extraWord+" OTP Code is "+this.genOTP+". The code is valid for 1 minute",setInterval(this.checkOTPTimeout,6e4)},check_OTP(){this.inputOTP===this.genOTP?(this.isOTPOK=!0,this.otpStatusMsg="STATUS_OTP_OK: OTP is valid and checked"):0!=this.retryCounter?(this.retryCounter-=1,this.otpStatusMsg="STATUS_OTP_FAIL: OTP is wrong. You have "+this.retryCounter+" tries left"):(this.isOTPFail=!0,this.otpStatusMsg="STATUS_OTP_FAIL: OTP authentication failed. You have no more tries left. Please contact Admin.")},checkOTPTimeout(){0==this.isOTPOK?(this.isOTPTimeout=!0,this.generate_OTP_email()):(this.isOTPTimeout=!1,clearInterval(this.checkOTPTimeout))}}},d=m,O=Object(r["a"])(d,p,h,!1,null,null,null),T=O.exports;s["a"].use(c["a"]);const f=[{path:"/",name:"Home",component:T}],v=new c["a"]({mode:"history",base:"/codetest1/",routes:f});var P=v,_=i("2f62");s["a"].use(_["a"]);var g=new _["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["a"].config.productionTip=!1,new s["a"]({router:P,store:g,render:e=>e(u)}).$mount("#app")},"93b5":function(e,t,i){},c2fc:function(e,t,i){"use strict";i("93b5")}});
//# sourceMappingURL=app.827db576.js.map