(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c994af14"],{"5b19":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"py-4"}),a("table",{staticClass:"table table-hover"},[t._m(0),a("tbody",t._l(t.orders,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(t._f("time")(e.create_at)))]),a("td",[t._v(t._s(e.user.email))]),a("td",t._l(e.products,function(e){return a("p",{key:e.id},[t._v(t._s(e.product.title)+" 數量: "+t._s(e.qty)+" "+t._s(e.product.unit))])}),0),a("td",[t._v(t._s(e.message))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.total)))]),e.is_paid?a("td",{staticClass:"text-success"},[t._v("已付款")]):t._e(),e.is_paid?t._e():a("td",{staticClass:"text-danger"},[t._v("未付款")])])}),0)]),a("Pagination",{attrs:{pages:t.pagination},on:{returnPageData:t.getorders}}),a("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog",id:"editmodal"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"editEmail"}},[t._v("修改的Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editorder.user.email,expression:"editorder.user.email"}],staticClass:"form-control mt-2",attrs:{type:"text",id:"editEmail",placeholder:"修改的Email"},domProps:{value:t.editorder.user.email},on:{input:function(e){e.target.composing||t.$set(t.editorder.user,"email",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"editporduct"}},[t._v("購買的物品")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editorder.products.porduct,expression:"editorder.products.porduct"}],staticClass:"form-control mt-2",attrs:{type:"text",id:"editporduct",placeholder:"購買的物品"},domProps:{value:t.editorder.products.porduct},on:{input:function(e){e.target.composing||t.$set(t.editorder.products,"porduct",e.target.value)}}})])]),t._m(2)])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col",width:"200"}},[t._v("購買時間")]),a("th",{attrs:{scope:"col",width:"250"}},[t._v("Email")]),a("th",{attrs:{scope:"col",width:""}},[t._v("購買物品")]),a("th",{attrs:{scope:"col",width:"200"}},[t._v("訊息")]),a("th",{attrs:{scope:"col",width:"140"}},[t._v("應付金額")]),a("th",{attrs:{scope:"col",width:"80"}},[t._v("是否付款")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("Modal title")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("關閉")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("修改")])])}],r=(a("c5f6"),a("1157")),o=a.n(r),n=a("e20e"),d={data:function(){return{orders:[],pagination:{},editorder:{products:[{porduct:{}}],total:Number,user:{}},isNew:!1}},components:{Pagination:n["a"]},methods:{getorders:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("york","/admin/orders?page=").concat(t),a=this;a.$store.state.isLoading=!0,this.$http.get(e).then(function(t){a.pagination=t.data.pagination,a.orders=t.data.orders,a.$store.state.isLoading=!1})},openmodal:function(t,e){t||(o()("#editmodal").modal("show"),this.editorder=Object.assign({},e))}},computed:{isLoading:function(){return this.$store.state.isLoading}},created:function(){this.getorders()}},l=d,c=a("2877"),u=Object(c["a"])(l,s,i,!1,null,null,null);e["default"]=u.exports},e20e:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getPage(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getPage(e)}}},[t._v(t._s(e))])])}),a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getPage(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},i=[],r={name:"pagination",props:{pages:{type:Object}},methods:{getPage:function(t){this.$emit("returnPageData",t)}}},o=r,n=a("2877"),d=Object(n["a"])(o,s,i,!1,null,null,null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-c994af14.f6b26729.js.map