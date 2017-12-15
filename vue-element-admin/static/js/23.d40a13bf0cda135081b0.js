webpackJsonp([23],{"8ImI":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("BO1k"),l=a.n(i),s=a("woOf"),n=a.n(s),r=a("viA7"),o=a("cAgV"),c=a("0xDb"),u=[{key:"CN",display_name:"中国"},{key:"US",display_name:"美国"},{key:"JP",display_name:"日本"},{key:"EU",display_name:"欧元区"}],p=u.reduce(function(t,e){return t[e.key]=e.display_name,t},{}),d={name:"complexTable",directives:{waves:o.a},data:function(){return{tableKey:0,list:null,total:null,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"},importanceOptions:[1,2,3],calendarTypeOptions:u,sortOptions:[{label:"按ID升序列",key:"+id"},{label:"按ID降序",key:"-id"}],statusOptions:["published","draft","deleted"],showAuditor:!1,temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]}}},filters:{statusFilter:function(t){return{published:"success",draft:"info",deleted:"danger"}[t]},typeFilter:function(t){return p[t]}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(r.c)(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total,t.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleModifyStatus:function(t,e){this.$message({message:"操作成功",type:"success"}),t.status=e},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},createData:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&(t.temp.id=parseInt(100*Math.random())+1024,t.temp.author="原创作者",Object(r.a)(t.temp).then(function(){t.list.unshift(t.temp),t.dialogFormVisible=!1,t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}))})},handleUpdate:function(t){var e=this;this.temp=n()({},t),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},updateData:function(){var t=this;this.$refs.dataForm.validate(function(e){if(e){var a=n()({},t.temp);a.timestamp=+new Date(a.timestamp),Object(r.e)(a).then(function(){var e=!0,a=!1,i=void 0;try{for(var s,n=l()(t.list);!(e=(s=n.next()).done);e=!0){var r=s.value;if(r.id===t.temp.id){var o=t.list.indexOf(r);t.list.splice(o,1,t.temp);break}}}catch(t){a=!0,i=t}finally{try{!e&&n.return&&n.return()}finally{if(a)throw i}}t.dialogFormVisible=!1,t.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})}})},handleDelete:function(t){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var e=this.list.indexOf(t);this.list.splice(e,1)},handleFetchPv:function(t){var e=this;Object(r.d)(t).then(function(t){e.pvData=t.data.pvData,e.dialogPvVisible=!0})},handleDownload:function(){var t=this;Promise.all([a.e(2),a.e(53)]).then(function(){(0,a("zWO4").export_json_to_excel)(["时间","地区","类型","标题","重要性"],t.formatJson(["timestamp","province","type","title","importance"],t.list),"table数据")}.bind(null,a)).catch(a.oe)},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return"timestamp"===t?Object(c.c)(e[t]):e[t]})})}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"标题"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleFilter(e)}},model:{value:t.listQuery.title,callback:function(e){t.$set(t.listQuery,"title",e)},expression:"listQuery.title"}}),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"90px"},attrs:{clearable:"",placeholder:"重要性"},model:{value:t.listQuery.importance,callback:function(e){t.$set(t.listQuery,"importance",e)},expression:"listQuery.importance"}},t._l(t.importanceOptions,function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{clearable:"",placeholder:"类型"},model:{value:t.listQuery.type,callback:function(e){t.$set(t.listQuery,"type",e)},expression:"listQuery.type"}},t._l(t.calendarTypeOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.display_name+"("+t.key+")",value:t.key}})})),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"排序"},on:{change:t.handleFilter},model:{value:t.listQuery.sort,callback:function(e){t.$set(t.listQuery,"sort",e)},expression:"listQuery.sort"}},t._l(t.sortOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})})),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("搜索")]),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("添加")]),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-download"},on:{click:t.handleDownload}},[t._v("导出")]),t._v(" "),a("el-checkbox",{staticClass:"filter-item",staticStyle:{"margin-left":"15px"},on:{change:function(e){t.tableKey=t.tableKey+1}},model:{value:t.showAuditor,callback:function(e){t.showAuditor=e},expression:"showAuditor"}},[t._v("显示审核人")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"180px",align:"center",label:"时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("parseTime")(e.row.timestamp,"{y}-{m}-{d} {h}:{i}")))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"150px",label:"标题"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"link-type",on:{click:function(a){t.handleUpdate(e.row)}}},[t._v(t._s(e.row.title))]),t._v(" "),a("el-tag",[t._v(t._s(t._f("typeFilter")(e.row.type)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"110px",align:"center",label:"作者"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.author))])]}}])}),t._v(" "),t.showAuditor?a("el-table-column",{attrs:{width:"110px",align:"center",label:"审核人"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{color:"red"}},[t._v(t._s(e.row.auditor))])]}}])}):t._e(),t._v(" "),a("el-table-column",{attrs:{width:"80px",label:"重要性"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(+e.row.importance,function(t){return a("svg-icon",{key:t,staticClass:"meta-item__icon",attrs:{"icon-class":"star"}})})}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"阅读数",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.pageviews?a("span",{staticClass:"link-type",on:{click:function(a){t.handleFetchPv(e.row.pageviews)}}},[t._v(t._s(e.row.pageviews))]):a("span",[t._v("无")])]}}])}),t._v(" "),a("el-table-column",{attrs:{"class-name":"status-col",label:"状态",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:t._f("statusFilter")(e.row.status)}},[t._v(t._s(e.row.status))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"220","class-name":"small-padding"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleUpdate(e.row)}}},[t._v("编辑")]),t._v(" "),"published"!=e.row.status?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){t.handleModifyStatus(e.row,"published")}}},[t._v("发布\n        ")]):t._e(),t._v(" "),"draft"!=e.row.status?a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.handleModifyStatus(e.row,"draft")}}},[t._v("草稿\n        ")]):t._e(),t._v(" "),"deleted"!=e.row.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleModifyStatus(e.row,"deleted")}}},[t._v("删除\n        ")]):t._e()]}}])})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"","current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"page",e)}}})],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},model:{value:t.temp.type,callback:function(e){t.$set(t.temp,"type",e)},expression:"temp.type"}},t._l(t.calendarTypeOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.display_name,value:t.key}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"时间",prop:"timestamp"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.temp.timestamp,callback:function(e){t.$set(t.temp,"timestamp",e)},expression:"temp.timestamp"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{model:{value:t.temp.title,callback:function(e){t.$set(t.temp,"title",e)},expression:"temp.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},model:{value:t.temp.status,callback:function(e){t.$set(t.temp,"status",e)},expression:"temp.status"}},t._l(t.statusOptions,function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"重要性"}},[a("el-rate",{staticStyle:{"margin-top":"8px"},attrs:{colors:["#99A9BF","#F7BA2A","#FF9900"],max:3},model:{value:t.temp.importance,callback:function(e){t.$set(t.temp,"importance",e)},expression:"temp.importance"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"点评"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入内容"},model:{value:t.temp.remark,callback:function(e){t.$set(t.temp,"remark",e)},expression:"temp.remark"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v("确 定")]):a("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"阅读数统计",visible:t.dialogPvVisible},on:{"update:visible":function(e){t.dialogPvVisible=e}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pvData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"渠道"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"pv"}})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogPvVisible=!1}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]},f=a("VU/8")(d,m,!1,null,null,null);e.default=f.exports},cAgV:function(t,e,a){"use strict";var i=a("woOf"),l=a.n(i),s=(a("ctMr"),{bind:function(t,e){t.addEventListener("click",function(a){var i=l()({},e.value),s=l()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),n=s.ele;if(n){n.style.position="relative",n.style.overflow="hidden";var r=n.getBoundingClientRect(),o=n.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":((o=document.createElement("span")).className="waves-ripple",o.style.height=o.style.width=Math.max(r.width,r.height)+"px",n.appendChild(o)),s.type){case"center":o.style.top=r.height/2-o.offsetHeight/2+"px",o.style.left=r.width/2-o.offsetWidth/2+"px";break;default:o.style.top=a.pageY-r.top-o.offsetHeight/2-document.body.scrollTop+"px",o.style.left=a.pageX-r.left-o.offsetWidth/2-document.body.scrollLeft+"px"}return o.style.backgroundColor=s.color,o.className="waves-ripple z-active",!1}},!1)}}),n=function(t){t.directive("waves",s)};window.Vue&&(window.waves=s,Vue.use(n)),s.install=n;e.a=s},ctMr:function(t,e,a){var i=a("z4F4");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("6077c87a",i,!0)},z4F4:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".waves-ripple {\n    position: absolute;\n    border-radius: 100%;\n    background-color: rgba(0, 0, 0, 0.15);\n    background-clip: padding-box;\n    pointer-events: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    opacity: 1;\n}\n\n.waves-ripple.z-active {\n    opacity: 0;\n    -webkit-transform: scale(2);\n    transform: scale(2);\n    -webkit-transition: opacity 1.2s ease-out, -webkit-transform 0.6s ease-out;\n    transition: opacity 1.2s ease-out, -webkit-transform 0.6s ease-out;\n    transition: opacity 1.2s ease-out, transform 0.6s ease-out;\n    transition: opacity 1.2s ease-out, transform 0.6s ease-out, -webkit-transform 0.6s ease-out;\n}",""])}});