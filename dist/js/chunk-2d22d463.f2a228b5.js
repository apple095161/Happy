(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d463"],{f795:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"container"},[e("main",{staticClass:"carts"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row d-flex justify-content-center"},[e("div",{staticClass:"col-md-9"},[t._m(0),e("div",{staticClass:"h2 text-center py-3"},[t._v("選購的產品")]),e("table",{staticClass:"table"},[t._m(1),e("tbody",[t._l(t.order.products,function(s){return e("tr",{key:s.title},[e("td",[e("img",{attrs:{src:s.product.imageUrl,alt:"",width:"100",height:"80"}})]),e("td",[t._v(t._s(s.product.title))]),e("td",{staticClass:"text-left"},[t._v(t._s(s.qty))]),e("td",{staticClass:"text-left"},[t._v(t._s(s.size))]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(s.product.price)))])])}),e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"4"}},[t._v("總計")]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.order.total)))])])],2)]),e("div",{staticClass:"h2 text-center py-3"},[t._v("購買者資料")]),e("table",{staticClass:"table"},[e("tr",[e("th",{attrs:{width:"150"}},[t._v("Email")]),e("td",[t._v(t._s(t.order.user.email))])]),e("tr",[e("th",{attrs:{width:"150"}},[t._v("姓名")]),e("td",[t._v(t._s(t.order.user.name))])]),e("tr",[e("th",{attrs:{width:"150"}},[t._v("收件人電話")]),e("td",[t._v(t._s(t.order.user.tel))])]),e("tr",[e("th",{attrs:{width:"150"}},[t._v("收件人地址")]),e("td",[t._v(t._s(t.order.user.address))])]),e("tr",[e("th",{attrs:{width:"150"}},[t._v("付款狀態")]),t.order.is_paid?e("td",{staticClass:"text-success"},[t._v("付款完成")]):t._e(),t.order.is_paid?t._e():e("td",{staticClass:"text-success"},[t._v("尚未付款")])])]),e("div",{staticClass:"text-right py-5"},[e("button",{staticClass:"btn btn-primary",staticStyle:{width:"200px"},on:{click:t.payorder}},[t._v("資料確認無誤，付款去")])])])])])])])])},r=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"step d-flex align-items-center"},[e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"box box1 text-center active"},[t._v("填寫訂單資料")])]),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"box box2 text-center active"},[t._v("金流付款")])]),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"box box3 text-center"},[t._v("完成")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",{attrs:{width:"100"}}),e("th",{staticClass:"text-left",attrs:{width:""}},[t._v("品名")]),e("th",{staticClass:"text-left",attrs:{width:"70"}},[t._v("數量")]),e("th",{staticClass:"text-left",attrs:{width:"70"}},[t._v("尺寸")]),e("th",{attrs:{width:"140"}},[t._v("價格")])])])}],i=(e("1157"),{data:function(){return{getcartproduct:{},order:{user:{}},orderId:""}},methods:{getorder:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("york","/order/").concat(t.orderId);t.$store.dispatch("updateLoadgin",!0),this.$http.get(s).then(function(s){t.order=s.data.order,t.$store.dispatch("updateLoadgin",!1)})},payorder:function(){var t=this,s=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("york","/pay/").concat(s.orderId);s.$store.dispatch("updateLoadgin",!0),this.$http.post(e).then(function(e){e.data.success&&(s.$router.push("/pay/".concat(s.orderId)),t.getorder(),s.$store.dispatch("updateLoadgin",!1))})}},computed:{isLoading:function(){return this.$store.state.isLoading}},created:function(){this.orderId=this.$route.params.orderId,this.getorder()}}),c=i,d=e("2877"),o=Object(d["a"])(c,a,r,!1,null,null,null);s["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d22d463.f2a228b5.js.map