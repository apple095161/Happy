(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91adb320"],{7079:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openModal(!0)}}},[t._v("建立新產品")])]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.products,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),a("td",[t._v(t._s(e.title))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.origin_price)))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.price)))]),a("td",[e.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):t._e(),e.is_enabled?t._e():a("span",[t._v("未啟用")])]),a("td",[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-outline-primary btn-sm mr-2",on:{click:function(a){return t.openModal(!1,e)}}},[t._v("編輯")]),a("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(a){return t.delProductModal(e)}}},[t._v("刪除")])])])])}),0)]),a("Pagination",{attrs:{pages:t.pagination},on:{returnPageData:t.getProducts}}),a("div",{staticClass:"modal fade",attrs:{id:"ProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.temProduct.imageUrl,expression:"temProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.temProduct.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.temProduct,"imageUrl",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v("\n                  或 上傳圖片\n                  "),t.status.fileLoadiing?a("i",{staticClass:"fas fa-cog fa-spin"}):t._e()]),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFild}})]),a("img",{staticClass:"img-fluid",attrs:{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80",src:t.temProduct.imageUrl,alt:""}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.temProduct.title,expression:"temProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.temProduct.title},on:{input:function(e){e.target.composing||t.$set(t.temProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.temProduct.category,expression:"temProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.temProduct.category},on:{input:function(e){e.target.composing||t.$set(t.temProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.temProduct.unit,expression:"temProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.temProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.temProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.temProduct.origin_price,expression:"temProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.temProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.temProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.temProduct.price,expression:"temProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.temProduct.price},on:{input:function(e){e.target.composing||t.$set(t.temProduct,"price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("數量")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.temProduct.count,expression:"temProduct.count"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入數量"},domProps:{value:t.temProduct.count},on:{input:function(e){e.target.composing||t.$set(t.temProduct,"count",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.temProduct.description,expression:"temProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.temProduct.description},on:{input:function(e){e.target.composing||t.$set(t.temProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.temProduct.content,expression:"temProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.temProduct.content},on:{input:function(e){e.target.composing||t.$set(t.temProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.temProduct.is_enabled,expression:"temProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.temProduct.is_enabled)?t._i(t.temProduct.is_enabled,null)>-1:t._q(t.temProduct.is_enabled,1)},on:{change:function(e){var a=t.temProduct.is_enabled,o=e.target,s=o.checked?1:0;if(Array.isArray(a)){var i=null,r=t._i(a,i);o.checked?r<0&&t.$set(t.temProduct,"is_enabled",a.concat([i])):r>-1&&t.$set(t.temProduct,"is_enabled",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.temProduct,"is_enabled",s)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v("確認")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v("\n          是否刪除\n          "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.temProduct.title))]),t._v(" 商品(刪除後將無法恢復)。\n        ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.deldata()}}},[t._v("確認刪除")])])])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",{attrs:{width:"120"}},[t._v("分類")]),a("th",[t._v("產品名稱")]),a("th",{attrs:{width:"100"}},[t._v("原價")]),a("th",{attrs:{width:"100"}},[t._v("價格")]),a("th",{attrs:{width:"120"}},[t._v("是否啟用")]),a("th",{attrs:{width:"130"}},[t._v("編輯")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("新增產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],i=a("1157"),r=a.n(i),c=a("e20e"),n={data:function(){return{products:[],temProduct:{},isNew:!1,isLoading:!1,status:{fileLoadiing:!1},pagination:{}}},components:{Pagination:c["a"]},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("york","/admin/products?page=").concat(t),a=this;a.isLoading=!0,console.log(e),this.$http.get(e).then(function(t){console.log(t.data),a.products=t.data.products,a.pagination=t.data.pagination,a.isLoading=!1})},openModal:function(t,e){t?(this.temProduct={},this.isNew=!0):(this.temProduct=Object.assign({},e),this.isNew=!1),r()("#ProductModal").modal("show")},delProductModal:function(t){this.temProduct=Object.assign({},t),r()("#delProductModal").modal("show")},deldata:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("york","/admin/product/").concat(t.temProduct.id);console.log(e),this.$http.delete(e).then(function(e){console.log(e.data),e.data.success?(r()("#delProductModal").modal("hide"),t.getProducts()):(r()("#ProductModal").modal("hide"),t.getProducts(),console.log("刪除失敗"))})},uploadFild:function(){var t=this;console.log(this);var e=this.$refs.files.files[0],a=this,o=new FormData;o.append("file-to-upload",e);var s="".concat("https://vue-course-api.hexschool.io","/api/").concat("york","/admin/upload");a.status.fileLoadiing=!0,this.$http.post(s,o,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){console.log(e.data),a.status.fileLoadiing=!1,e.data.success?a.$set(a.temProduct,"imageUrl",e.data.imageUrl):t.$bus.$emit("message:push",e.data.message,"danger")})},updateProduct:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("york","/admin/product"),e="post",a=this;a.isNew||(t="".concat("https://vue-course-api.hexschool.io","/api/").concat("york","/admin/product/").concat(a.temProduct.id),e="put"),console.log(t),this.$http[e](t,{data:a.temProduct}).then(function(t){console.log(t.data),t.data.success?(r()("#ProductModal").modal("hide"),a.getProducts()):(r()("#ProductModal").modal("hide"),a.getProducts(),console.log("新增失敗"))})}},created:function(){this.getProducts()}},l=n,d=a("2877"),u=Object(d["a"])(l,o,s,!1,null,null,null);e["default"]=u.exports},e20e:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getPage(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getPage(e)}}},[t._v(t._s(e))])])}),a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getPage(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},s=[],i={name:"pagination",props:{pages:{type:Object}},methods:{getPage:function(t){this.$emit("returnPageData",t)}}},r=i,c=a("2877"),n=Object(c["a"])(r,o,s,!1,null,null,null);e["a"]=n.exports}}]);
//# sourceMappingURL=chunk-91adb320.c87820ba.js.map