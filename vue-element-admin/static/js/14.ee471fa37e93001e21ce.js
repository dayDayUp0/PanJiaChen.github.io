webpackJsonp([14,32],{"2+zH":function(n,t,e){var o=e("t+OE");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e("rjj0")("140f8840",o,!0)},DSCv:function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n.social-signup-container[data-v-2de1732c] {\n  margin: 20px 0;\n}\n.social-signup-container .sign-btn[data-v-2de1732c] {\n    display: inline-block;\n    cursor: pointer;\n}\n.social-signup-container .icon[data-v-2de1732c] {\n    color: #fff;\n    font-size: 30px;\n    margin-top: 6px;\n}\n.social-signup-container .wx-svg-container[data-v-2de1732c],\n  .social-signup-container .qq-svg-container[data-v-2de1732c] {\n    display: inline-block;\n    width: 40px;\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n    padding-top: 1px;\n    border-radius: 4px;\n    margin-bottom: 20px;\n    margin-right: 5px;\n}\n.social-signup-container .wx-svg-container[data-v-2de1732c] {\n    background-color: #8dc349;\n}\n.social-signup-container .qq-svg-container[data-v-2de1732c] {\n    background-color: #6BA2D6;\n    margin-left: 50px;\n}\n",""])},"T+/8":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("E4LH"),i={components:{socialSign:e("dZXH").default},name:"login",data:function(){return{loginForm:{username:"admin",password:"1111111"},loginRules:{username:[{required:!0,trigger:"blur",validator:function(n,t,e){Object(o.a)(t)?e():e(new Error("请输入正确的用户名"))}}],password:[{required:!0,trigger:"blur",validator:function(n,t,e){t.length<6?e(new Error("密码不能小于6位")):e()}}]},pwdType:"password",loading:!1,showDialog:!1}},methods:{showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},handleLogin:function(){var n=this;this.$refs.loginForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;n.loading=!0,n.$store.dispatch("LoginByUsername",n.loginForm).then(function(){n.loading=!1,n.$router.push({path:"/"})}).catch(function(){n.loading=!1})})},afterQRScan:function(){}},created:function(){},destroyed:function(){}},r={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"login-container"},[e("el-form",{ref:"loginForm",staticClass:"card-box login-form",attrs:{autoComplete:"on",model:n.loginForm,rules:n.loginRules,"label-position":"left"}},[e("h3",{staticClass:"title"},[n._v("系统登录")]),n._v(" "),e("el-form-item",{attrs:{prop:"username"}},[e("span",{staticClass:"svg-container svg-container_login"},[e("svg-icon",{attrs:{"icon-class":"user"}})],1),n._v(" "),e("el-input",{attrs:{name:"username",type:"text",autoComplete:"on",placeholder:"邮箱"},model:{value:n.loginForm.username,callback:function(t){n.$set(n.loginForm,"username",t)},expression:"loginForm.username"}})],1),n._v(" "),e("el-form-item",{attrs:{prop:"password"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"password"}})],1),n._v(" "),e("el-input",{attrs:{name:"password",type:n.pwdType,autoComplete:"on",placeholder:"密码"},nativeOn:{keyup:function(t){if(!("button"in t)&&n._k(t.keyCode,"enter",13,t.key))return null;n.handleLogin(t)}},model:{value:n.loginForm.password,callback:function(t){n.$set(n.loginForm,"password",t)},expression:"loginForm.password"}}),n._v(" "),e("span",{staticClass:"show-pwd",on:{click:n.showPwd}},[e("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),n._v(" "),e("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{type:"primary",loading:n.loading},nativeOn:{click:function(t){t.preventDefault(),n.handleLogin(t)}}},[n._v("登录")]),n._v(" "),e("div",{staticClass:"tips"},[n._v("账号:admin 密码随便填")]),n._v(" "),e("div",{staticClass:"tips"},[n._v("账号:editor  密码随便填")]),n._v(" "),e("el-button",{staticClass:"thirdparty-button",attrs:{type:"primary"},on:{click:function(t){n.showDialog=!0}}},[n._v("打开第三方登录")])],1),n._v(" "),e("el-dialog",{attrs:{title:"第三方验证",visible:n.showDialog},on:{"update:visible":function(t){n.showDialog=t}}},[n._v("\n    本地不能模拟，请结合自己业务进行模拟！！！"),e("br"),e("br"),e("br"),n._v("\n    邮箱登录成功,请选择第三方验证"),e("br"),n._v(" "),e("social-sign")],1)],1)},staticRenderFns:[]},a=e("VU/8")(i,r,!1,function(n){e("2+zH")},null,null);t.default=a.exports},dZXH:function(n,t,e){"use strict";function o(n,t,e,o){var i=void 0!==window.screenLeft?window.screenLeft:screen.left,r=void 0!==window.screenTop?window.screenTop:screen.top,a=(window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width)/2-e/2+i,s=(window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height)/2-o/2+r,c=window.open(n,t,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width="+e+", height="+o+", top="+s+", left="+a);window.focus&&c.focus()}Object.defineProperty(t,"__esModule",{value:!0});var i={name:"social-signin",methods:{wechatHandleClick:function(n){this.$store.commit("SET_AUTH_TYPE",n);o("https://open.weixin.qq.com/connect/qrconnect?appid=xxxxx&redirect_uri="+encodeURIComponent("xxx/redirect?redirect="+window.location.origin+"/authredirect")+"&response_type=code&scope=snsapi_login#wechat_redirect",n,540,540)},tencentHandleClick:function(n){this.$store.commit("SET_AUTH_TYPE",n);o("https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=xxxxx&redirect_uri="+encodeURIComponent("xxx/redirect?redirect="+window.location.origin+"/authredirect"),n,540,540)}}},r={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"social-signup-container"},[e("div",{staticClass:"sign-btn",on:{click:function(t){n.wechatHandleClick("wechat")}}},[e("span",{staticClass:"wx-svg-container"},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),n._v(" 微信\n  ")]),n._v(" "),e("div",{staticClass:"sign-btn",on:{click:function(t){n.tencentHandleClick("tencent")}}},[e("span",{staticClass:"qq-svg-container"},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),n._v(" QQ\n  ")])])},staticRenderFns:[]},a=e("VU/8")(i,r,!1,function(n){e("isrs")},"data-v-2de1732c",null);t.default=a.exports},isrs:function(n,t,e){var o=e("DSCv");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e("rjj0")("45634581",o,!0)},"t+OE":function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n.login-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  height: 100vh;\n  background-color: #2d3a4b;\n}\n.login-container input:-webkit-autofill {\n    -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;\n    -webkit-text-fill-color: #fff !important;\n}\n.login-container input {\n    background: transparent;\n    border: 0px;\n    -webkit-appearance: none;\n    border-radius: 0px;\n    padding: 12px 5px 12px 15px;\n    color: #eee;\n    height: 47px;\n}\n.login-container .el-input {\n    display: inline-block;\n    height: 47px;\n    width: 85%;\n}\n.login-container .tips {\n    font-size: 14px;\n    color: #fff;\n    margin-bottom: 10px;\n}\n.login-container .svg-container {\n    padding: 6px 5px 6px 15px;\n    color: #889aa4;\n    vertical-align: middle;\n    width: 30px;\n    display: inline-block;\n}\n.login-container .svg-container_login {\n      font-size: 20px;\n}\n.login-container .title {\n    font-size: 26px;\n    font-weight: 400;\n    color: #eee;\n    margin: 0px auto 40px auto;\n    text-align: center;\n    font-weight: bold;\n}\n.login-container .login-form {\n    position: absolute;\n    left: 0;\n    right: 0;\n    width: 400px;\n    padding: 35px 35px 15px 35px;\n    margin: 120px auto;\n}\n.login-container .el-form-item {\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    background: rgba(0, 0, 0, 0.1);\n    border-radius: 5px;\n    color: #454545;\n}\n.login-container .show-pwd {\n    position: absolute;\n    right: 10px;\n    top: 7px;\n    font-size: 16px;\n    color: #889aa4;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.login-container .thirdparty-button {\n    position: absolute;\n    right: 35px;\n    bottom: 28px;\n}\n",""])}});