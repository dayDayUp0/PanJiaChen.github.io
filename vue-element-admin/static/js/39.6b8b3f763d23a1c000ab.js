webpackJsonp([39],{V9V6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),o=n.n(r),a=n("NYxO"),l={name:"permission",data:function(){return{role:""}},computed:o()({},Object(a.b)(["roles"])),watch:{role:function(e){var t=this;this.$store.dispatch("ChangeRole",e).then(function(){t.$router.push({path:"/permission/index?"+ +new Date})})}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticStyle:{"margin-bottom":"15px"}},[e._v("你的权限： "+e._s(e.roles))]),e._v("\n  切换权限：\n  "),n("el-radio-group",{model:{value:e.role,callback:function(t){e.role=t},expression:"role"}},[n("el-radio-button",{attrs:{label:"editor"}})],1)],1)},staticRenderFns:[]},s=n("VU/8")(l,i,!1,null,null,null);t.default=s.exports}});