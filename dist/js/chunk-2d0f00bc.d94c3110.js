(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f00bc"],{"9b63":function(t,s,r){"use strict";r.r(s);var e=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),r("div",{staticClass:"d-flex justify-content-center"},[r("div",{staticClass:"col-md-6"},[r("form",{attrs:{action:""},on:{submit:function(s){return s.preventDefault(),t.payorder(s)}}},[r("table",{staticClass:"table"},[t._m(0),r("tbody",[t._l(t.order.products,function(s){return r("tr",{key:s.id},[r("td",[t._v(t._s(s.product.title))]),r("td"),r("td",[t._v(t._s(s.qty)+"/"+t._s(s.product.unit))]),r("td",{staticClass:"text-right"},[t._v(t._s(s.final_total))])])}),r("tr",[r("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("總計")]),r("td",{staticClass:"text-right"},[t._v(t._s(t.order.total))])])],2)]),r("table",{staticClass:"table"},[r("tr",[r("th",{attrs:{width:"150"}},[t._v("Email")]),r("td",[t._v(t._s(t.order.user.email))])]),r("tr",[r("th",{attrs:{width:"150"}},[t._v("姓名")]),r("td",[t._v(t._s(t.order.user.name))])]),r("tr",[r("th",{attrs:{width:"150"}},[t._v("收件人電話")]),r("td",[t._v(t._s(t.order.user.tel))])]),r("tr",[r("th",{attrs:{width:"150"}},[t._v("收件人地址")]),r("td",[t._v(t._s(t.order.user.address))])]),r("tr",[r("th",{attrs:{width:"150"}},[t._v("付款狀態")]),t.order.is_paid?r("td",{staticClass:"text-success"},[t._v("付款完成")]):t._e(),t.order.is_paid?t._e():r("td",{staticClass:"text-success"},[t._v("尚未付款")])])]),t.order.is_paid?t._e():r("div",{staticClass:"d-flex justify-content-end"},[r("button",{staticClass:"btn btn-primary"},[t._v("確認付款去")])])])])])],1)},o=[function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("thead",[r("tr",[r("th",[t._v("品名")]),r("th"),r("th",{attrs:{width:"100",scope:"col"}},[t._v("數量")]),r("th",{attrs:{width:"150",scope:"col"}},[t._v("單價")])])])}],a=(r("1157"),{data:function(){return{orderId:"",order:{user:{}},isLoading:!1}},methods:{getorder:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("york","/order/").concat(t.orderId);t.isLoading=!0,this.$http.get(s).then(function(s){t.order=s.data.order,console.log(t.order),t.isLoading=!1})},payorder:function(){var t=this,s=this,r="".concat("https://vue-course-api.hexschool.io","/api/").concat("york","/pay/").concat(s.orderId);s.isLoading=!0,this.$http.post(r).then(function(r){r.data.success&&(console.log(r),t.getorder(),s.isLoading=!1)})}},created:function(){this.orderId=this.$route.params.orderId,console.log(this.orderId),this.getorder()}}),i=a,d=r("2877"),n=Object(d["a"])(i,e,o,!1,null,null,null);s["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0f00bc.d94c3110.js.map