(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fbd7408"],{"159d":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"container mb-3"},[e("table",{staticClass:"table table-hover"},[t._m(0),e("tbody",t._l(t.orders,function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(t._f("time")(a.create_at)))]),e("td",[e("ul",[e("li",[t._v("訂單編號:"+t._s(a.id))]),e("li",[t._v("姓名:"+t._s(a.user.name))]),e("li",[t._v("住址:"+t._s(a.user.address))]),e("li",[t._v("Email:"+t._s(a.user.email))]),e("li",[t._v("電話:"+t._s(a.user.tel))])])]),e("td",t._l(a.products,function(a){return e("p",{key:a.id},[t._v(t._s(a.product.title)+" "+t._s(a.qty)+"/"+t._s(a.product.unit))])}),0),e("td",[t._v(t._s(a.message))]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(a.total)))]),a.is_paid?e("td",{staticClass:"text-success"},[e("div",{staticClass:"mb-2"},[t._v("已付款")]),e("div",[t._v(t._s(t._f("time")(a.paid_date)))])]):t._e(),a.is_paid?t._e():e("td",{staticClass:"text-danger"},[e("span",{staticClass:"mr-2"},[t._v("未付款")]),e("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(e){return t.gopay(a)}}},[t._v("付款去")])])])}),0)]),e("Pagination",{attrs:{pages:t.pagination},on:{returnPageData:t.getorders}})],1)],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{width:"120"}},[t._v("購買時間")]),e("th",{attrs:{width:"250"}},[t._v("購買人資訊")]),e("th",{attrs:{width:"200"}},[t._v("購買物品")]),e("th",{attrs:{width:"100"}},[t._v("備註")]),e("th",{attrs:{width:"80"}},[t._v("金額")]),e("th",{attrs:{width:"100"}},[t._v("是否付款")])])])}],n=(e("1157"),e("e20e")),r={data:function(){return{pagination:{},orders:{}}},components:{Pagination:n["a"]},methods:{getorders:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("york","/orders?page=").concat(t),e=this;e.$store.state.isLoading=!0,this.$http.get(a).then(function(t){e.orders=t.data.orders,e.pagination=t.data.pagination,e.$store.state.isLoading=!1})},gopay:function(t){var a=this;a.$router.push("/setordercheck/".concat(t.id))}},computed:{isLoading:function(){return this.$store.state.isLoading}},created:function(){this.getorders()}},c=r,o=e("2877"),l=Object(o["a"])(c,s,i,!1,null,null,null);a["default"]=l.exports},e20e:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.getPage(t.pages.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.pages.current_page===a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getPage(a)}}},[t._v(t._s(a))])])}),e("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.getPage(t.pages.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},i=[],n={name:"pagination",props:{pages:{type:Object}},methods:{getPage:function(t){this.$emit("returnPageData",t)}}},r=n,c=e("2877"),o=Object(c["a"])(r,s,i,!1,null,null,null);a["a"]=o.exports}}]);
//# sourceMappingURL=chunk-0fbd7408.5f3a7e37.js.map