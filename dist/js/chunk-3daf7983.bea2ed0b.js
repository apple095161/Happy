(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3daf7983"],{"37b2":function(t,e,s){"use strict";var a=s("5f11"),i=s.n(a);i.a},"578a":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container"},[s("div",{staticClass:"row mt-3 py-3 login-register mt-5 d-flex justify-content-center"},[s("div",{staticClass:"col-md-9"},[s("ul",{staticClass:"login-register-tab"},[s("li",{staticClass:"title",class:{active:"login"===t.currentpage},on:{click:function(e){t.currentpage="login"}}},[t._v("會員登入")]),s("li",{staticClass:"title",class:{active:"register"===t.currentpage},on:{click:function(e){t.currentpage="register"}}},[t._v("會員註冊")])]),s("div",{staticClass:"login-register-body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row box-border"},[s("div",{staticClass:"col-md-7 left"},["login"===t.currentpage?s("div",{staticClass:"form form-line py-5"},[s("form",[s("div",{staticClass:"form-group"},[s("div",{staticClass:"login-data"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"mb-3 input-data",attrs:{type:"email",name:"email",id:"",placeholder:"請輸入Email地址",required:""},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}})]),t.errors.has("email")?s("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("email")))]):t._e()]),s("div",{staticClass:"form-group"},[s("div",{staticClass:"login-data"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"mb-3 input-data is-valid",attrs:{type:"password",name:"password",placeholder:"請輸入密碼",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t.errors.has("password")?s("span",{staticClass:"text-danger"},[t._v("請輸入密碼")]):t._e()]),s("button",{staticClass:"btn btn-primary login-btn",staticStyle:{width:"260px"},attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.signin(e)}}},[t._v("登入")])])]):t._e(),"register"===t.currentpage?s("div",{staticClass:"form form-line py-5"},["register"===t.currentpage?s("div",{staticClass:"register-data"},[s("div",{staticClass:"h3 mb-2"},[t._v("加入專屬會員")]),s("div",{staticClass:"mb-3"},[t._v("我們會將寄送簡訊至你的手機")]),s("span",{staticClass:"input-data d-flex align-items-center mb-3"},[s("label",{attrs:{for:"register-tel"}},[t._v("TW+886")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.tel,expression:"user.tel"}],staticClass:"ml-1",attrs:{type:"tel",placeholder:"請輸入手機",id:"register-tel",value:"",maxlength:"10"},domProps:{value:t.user.tel},on:{input:function(e){e.target.composing||t.$set(t.user,"tel",e.target.value)}}})])]):t._e(),"register"===t.currentpage?s("button",{staticClass:"btn btn-primary login-btn",staticStyle:{width:"260px"},attrs:{type:"button"}},[t._v("下一步")]):t._e()]):t._e()]),s("div",{staticClass:"col-md-5 right d-flex justify-content-center align-items-center"},["register"===t.currentpage?s("div",{staticClass:"right-data"},[s("i",{staticClass:"fas fa-user fa-3x"}),s("div",{staticClass:"mt-3"},[t._v("\n                    已有帳號按此\n                    "),s("a",{attrs:{href:"#login"},on:{click:function(e){t.currentpage="login"}}},[t._v("登入")])])]):t._e()])])])])])])]),s("div",{staticClass:"alert alert-primary alert-dismissible login-alert fade",attrs:{role:"alert"}},[s("div",{staticClass:"text-center",staticStyle:{}},[t._v("提示訊息!")]),s("br"),s("div",{staticClass:"text-center",staticStyle:{"background-color":"while"}},[s("span",[t._v("帳號或密碼錯誤，請重新輸入")]),s("a",{staticClass:"close-alert",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[s("i",{staticClass:"fas fa-window-close"})])])])])},i=[],r=s("1157"),n=s.n(r);n()(document).ready(function(){n()(".close-alert").click(function(){n()(".alert").removeClass("show")})});var l={name:"App",data:function(){return{user:{username:"",password:""},currentpage:"login",tel:""}},methods:{signin:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/admin/signin"),s=this;this.$validator.validate().then(function(a){a&&t.$http.post(e,s.user).then(function(t){t.data.success?s.$router.push("/admin/products"):n()(".login-alert").addClass("show")})})}}},o=l,c=(s("37b2"),s("2877")),u=Object(c["a"])(o,a,i,!1,null,"2a4c34b2",null);e["default"]=u.exports},"5f11":function(t,e,s){}}]);
//# sourceMappingURL=chunk-3daf7983.bea2ed0b.js.map