(function(t){function e(e){for(var r,n,i=e[0],l=e[1],c=e[2],d=0,m=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&m.push(a[n][0]),a[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],r=!0,i=1;i<s.length;i++){var l=s[i];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var r={},a={app:0},o=[];function n(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=r,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(s,r,function(e){return t[e]}.bind(null,r));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},1418:function(t,e,s){},"4fff":function(t,e,s){t.exports=s.p+"img/christmas.7c26309a.jpg"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col min-h-screen",attrs:{id:"app"}},[s("Header"),s("router-view",{staticClass:"flex-1 overflow-y-auto"}),s("Footer")],1)},o=[],n=(s("96cf"),s("1da1")),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"flex items-center justify-between flex-wrap p-6 bg-gradient-to-r from-blue-900 to-pink-500"},[t._m(0),s("div",{staticClass:"block sm:hidden"},[s("button",{staticClass:"flex items-center px-3 py-2 border rounded text-blue-100 hover:border-transparent hover:text-pink-500 hover:bg-white",on:{click:t.toggle}},[s("svg",{staticClass:"fill-current h-3 w-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("title",[t._v("Menu")]),s("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})])])]),s("div",{staticClass:"w-full flex-grow sm:flex sm:items-center sm:w-auto",class:t.open?"block":"hidden"},[s("div",{staticClass:"text-sm sm:flex-grow"},[s("router-link",{staticClass:"no-underline block mt-4 sm:inline-block sm:mt-0 text-pink-100 hover:text-blue-300 mr-4",attrs:{to:"/"}},[s("span",{on:{click:function(e){t.open=!1}}},[t._v("Home")])]),s("a",{staticClass:"no-underline block mt-4 sm:inline-block sm:mt-0 text-pink-100 hover:text-blue-300 hover:font-bold mr-4",attrs:{href:"#responsive-header"}},[t._v(" PokeLog ")]),s("a",{staticClass:"no-underline block mt-4 sm:inline-block sm:mt-0 text-pink-100 hover:text-blue-300",class:t.classTodo,attrs:{href:"javascript:void(0)"},on:{click:t.handleTodo}},[t._v(" ToDo ")])],1),t.user?t._e():s("div",[s("router-link",{staticClass:"no-underline inline-block text-sm px-4 py-2 mr-4 leading-none border rounded text-white border-white hover:text-white hover:bg-indigo-600 mt-4 sm:mt-0",attrs:{to:"/register"}},[s("span",{on:{click:function(e){t.open=!1}}},[t._v("Sign Up")])]),s("router-link",{staticClass:"no-underline inline-block text-sm px-6 py-2 leading-none border border-white rounded text-pink-500 bg-white hover:text-white hover:bg-indigo-600 mt-4 sm:mt-0",attrs:{to:"/login"}},[s("span",{on:{click:function(e){t.open=!1}}},[t._v("Login")])])],1),t.user?s("div",[s("a",{staticClass:"no-underline inline-block text-sm px-6 py-2 leading-none border border-white rounded text-pink-500 bg-white hover:text-white hover:bg-indigo-600 mt-4 sm:mt-0",attrs:{href:"javascript:void(0)"},on:{click:t.handleLogout}},[t._v("Logout ")])]):t._e()])])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex items-center flex-no-shrink text-gray-200 mr-8"},[s("span",{staticClass:"font-semibold text-xl tracking-tight"},[s("a",{staticClass:"no-underline inline-block leading-none text-pink-100 hover:text-white",attrs:{href:"/"}},[t._v("Chinook Media")])])])}],c=s("5530"),u=s("2f62"),d=s("bc3a"),m=s.n(d),p={name:"Header",data:function(){return{open:!1}},methods:{toggle:function(){this.open=!this.open},handleLogout:function(){this.open=!1,localStorage.removeItem("token"),this.$store.dispatch("user",null),this.$store.dispatch("todos",null)},handleTodo:function(){var t=this;this.open=!1,m.a.defaults.headers.common["Authorization"]="Bearer "+localStorage.getItem("token"),m.a.get("/todos").then((function(e){t.$store.dispatch("todos",e.data.todos)})).catch((function(t){return console.log(t)})),"/todo"!==this.$route.path&&this.$router.push("/todo")}},computed:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(u["b"])(["user"])),Object(u["b"])(["todos"])),{},{classTodo:function(){return this.user?"opacity-100":"opacity-50"}})},f=p,x=s("2877"),v=Object(x["a"])(f,i,l,!1,null,null,null),h=v.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer bg-gradient-to-r from-pink-900 to-gray-600 pt-1 mt-10 w-full flex-none"},[s("div",{staticClass:"container mx-auto px-6"},[s("div",{staticClass:"sm:flex sm:mt-4"},[s("div",{staticClass:"mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between"},[s("div",{staticClass:"flex flex-col mt-4"},[s("span",{staticClass:"font-bold text-white uppercase mb-1"},[t._v("QUICK LINKS")]),s("span",{staticClass:"my-2"},[s("a",{staticClass:"text-pink-50 text-md hover:text-pink-200",attrs:{href:"#"}},[t._v("link 1")])]),s("span",{staticClass:"my-2"},[s("a",{staticClass:"text-pink-50 text-md hover:text-pink-200",attrs:{href:"#"}},[t._v("link 2")])])]),s("div",{staticClass:"flex flex-col mt-4"},[s("span",{staticClass:"font-bold text-white uppercase m1-2"},[t._v("SOCIAL")]),s("span",{staticClass:"my-2"},[s("a",{staticClass:"text-pink-50 text-md hover:text-pink-200",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-instagram"})])]),s("span",{staticClass:"my-2"},[s("a",{staticClass:"text-pink-50 text-md hover:text-pink-200",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-facebook"})])])])])])]),s("div",{staticClass:"container mx-auto px-6"},[s("div",{staticClass:"mt-8 border-t-2 border-gray-300 flex flex-col items-center"},[s("div",{staticClass:"sm:w-2/3 text-center py-6"},[s("p",{staticClass:"text-sm text-white font-bold mb-2"},[t._v(" Chinook Test App | © by ttl.be 2020 ")])])])])])}],w={},C=w,y=Object(x["a"])(C,b,g,!1,null,null,null),_=y.exports,k={name:"App",components:{Header:h,Footer:_},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("/users/user");case 3:s=e.sent,t.$store.dispatch("user",s.data.user),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.$store.dispatch("user",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},j=k,$=(s("034f"),Object(x["a"])(j,a,o,!1,null,null,null)),E=$.exports,O=s("8c4f"),S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[t.user?s("h3",{staticClass:"mt-10"},[t._v(" Hi, "+t._s(t.user.firstName)+" "+t._s(t.user.lastName)+" ")]):s("h3",{staticClass:"mt-10"},[t._v("Hello, you are not logged in.")]),t._m(0),t._m(1)])},N=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex inner my-10 mx-4 shadow-md border justify-center"},[s("p",{staticClass:"text-lg"},[t._v("Welcome to Chin00k Media Enterprise")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"inner my-2 mx-4 flex justify-center shadow-md border"},[r("img",{staticClass:"w-5/6 h-2/5 lg:w-3/5 lg:h-3/5",attrs:{src:s("4fff")}})])}],T={name:"Home",computed:Object(c["a"])({},Object(u["b"])(["user"]))},P=T,z=(s("8b71"),Object(x["a"])(P,S,N,!1,null,null,null)),R=z.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{staticClass:"flex justify-center content-center",attrs:{id:"form-sign-in"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[s("div",{staticClass:"relative w-full md:w-3/5 xl:w-2/4 2xl:w-1/3 bg-white rounded-lg mt-6 lg:border md:shadow-md"},[s("div",{staticClass:"flex flex-col justify-center"},[s("div",{staticClass:"h-8 my-2"},[s("Error",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],attrs:{error:t.error},on:{"close-error":function(e){t.error=""}}})],1),t._m(0),t._m(1)]),s("div",{staticClass:"px-10 py-10"},[s("div",{staticClass:"w-full mb-2 flex items-center"},[s("i",{staticClass:"absolute ml-3 fill-current text-gray-400 text-xs z-10 fa fa-envelope"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"px-8 w-full border rounded px-3 py-1 text-gray-700",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),s("div",{staticClass:"w-full mb-2 mt-4 flex items-center"},[s("i",{staticClass:"absolute ml-3 fill-current text-gray-400 text-xs z-10 fa fa-lock"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"px-8 w-full border rounded px-3 py-1 text-gray-700",attrs:{type:"password",placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("div",{staticClass:"mt-8 flex justify-between"},[s("div",{staticClass:"flex items-center"},[s("span",{staticClass:"text-xs text-gray-700 hover:text-pink-500"},[s("router-link",{attrs:{to:"/forgot"}},[t._v("Forgot Password?")])],1)]),t._m(2)])])])])])},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex justify-center mt-4"},[s("h3",[t._v("Login")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center"},[r("img",{staticClass:"w-20 h-20 mt-6",attrs:{src:s("ee4b")}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("button",{staticClass:"bg-blue-500 border border-blue-500 text-xs text-gray-100 rounded px-4 py-2 hover:text-pink-500 hover:bg-white",attrs:{id:"btn-sign-in",type:"text"}},[t._v(" SIGN IN ")])])}],A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-white text-s px-4 py-3 border-0 rounded relative mx-4 my-2 bg-pink-600"},[t._m(0),s("span",{staticClass:"inline-block align-middle mr-8"},[s("b",{staticClass:"capitalize"},[t._v("Ooops!")]),t._v(" "+t._s(t.error)+"! ")]),s("button",{staticClass:"absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-3 mr-6 outline-none focus:outline-none",on:{click:function(e){return e.preventDefault(),t.$emit("close-error")}}},[s("span",[t._v("×")])])])},H=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"text-l inline-block mr-5 align-middle"},[s("i",{staticClass:"fa fa-bell"})])}],L={name:"Error",props:["error"]},M=L,F=Object(x["a"])(M,A,H,!1,null,null,null),q=F.exports,U={name:"Login",components:{Error:q},data:function(){return{email:"",password:"",error:""}},methods:{handleSubmit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,""!=t.email&&""!=t.password){e.next=3;break}return e.abrupt("return",t.error="email and password are required!");case 3:return e.next=5,m.a.post("/users/login",{email:t.email,password:t.password});case 5:s=e.sent,localStorage.setItem("token",s.data.token),t.$store.dispatch("user",s.data.user),t.$router.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),t.error="Invalid username or password!";case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}}},B=U,G=Object(x["a"])(B,I,D,!1,null,null,null),J=G.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{staticClass:"flex justify-center content-center",attrs:{id:"form-sign-up"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[s("div",{staticClass:"w-full md:w-3/5 xl:w-2/4 2xl:w-1/3 bg-white rounded-lg mt-10 lg:border md:shadow-md"},[s("div",{staticClass:"flex flex-col justify-center"},[s("div",{staticClass:"h-10 my-2"},[s("Error",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],attrs:{error:t.error},on:{"close-error":function(e){t.error=""}}})],1),t._m(0)]),s("div",{staticClass:"px-10 py-10 flex flex-col"},[s("div",{staticClass:"w-full mb-2 flex items-center"},[s("i",{staticClass:"absolute ml-3 fill-current text-purple-500 text-xs z-10 fa fa-user-o"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],staticClass:"px-8 w-full border rounded px-3 py-1 text-gray-700",attrs:{type:"text",placeholder:"First Name"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}})]),s("div",{staticClass:"w-full mb-2 flex items-center"},[s("i",{staticClass:"absolute ml-3 fill-current text-purple-500 text-xs z-10 fa fa-user"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],staticClass:"px-8 w-full border rounded px-3 py-1 text-gray-700",attrs:{type:"text",placeholder:"Last Name"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}})]),s("div",{staticClass:"w-full mb-2 flex items-center"},[s("i",{staticClass:"absolute ml-3 fill-current text-purple-500 text-xs z-10 fa fa-envelope"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"px-8 w-full border rounded px-3 py-1 text-gray-700",attrs:{type:"email",autocomplete:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),s("div",{staticClass:"w-full mb-2 mt-6 flex items-center"},[s("i",{staticClass:"absolute ml-3 fill-current text-purple-500 text-xs z-10 fa fa-lock"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"px-8 w-full border rounded px-3 py-1 text-gray-700",attrs:{type:"password",autocomplete:"new-password",placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("div",{staticClass:"w-full mb-2 flex items-center"},[s("i",{staticClass:"absolute ml-3 fill-current text-purple-500 text-xs z-10 fa fa-repeat"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordConfirm,expression:"passwordConfirm"}],staticClass:"px-8 w-full border rounded px-3 py-1 text-gray-700",attrs:{type:"password",placeholder:"password again"},domProps:{value:t.passwordConfirm},on:{input:function(e){e.target.composing||(t.passwordConfirm=e.target.value)}}})]),t._m(1)])])])])},V=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex justify-center mt-4"},[s("h3",[t._v("Sign Up")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-8 flex justify-between"},[s("div",[s("button",{staticClass:"bg-blue-500 border border-blue-500 text-xs text-gray-100 rounded px-4 py-2 hover:text-pink-500 hover:bg-white",attrs:{id:"btn-sign-up",type:"text"}},[t._v(" REGISTER ")])])])}],Z=(s("ac1f"),s("466d"),{name:"Signup",components:{Error:q},methods:{handleSubmit:function(){var t=this;if(""==this.email||""==this.password||""==this.lastName)return this.error="email, last name and password are required!";var e=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;if(!this.password.match(e))return this.error="Min 8 char, at least; one low case, one up case, one num, and one special";if(this.password!==this.passwordConfirm)return this.error="passwords should match!";var s={first_name:this.firstName,last_name:this.lastName,email:this.email,password:this.password};m.a.post("/users/register",s).then((function(e){console.log(e),t.$router.push("/login")})).catch((function(e){console.log(e),t.error="Please fill all the fields!"}))}},data:function(){return{firstName:"",lastName:"",email:"",password:"",passwordConfirm:"",error:""}}}),Q=Z,W=Object(x["a"])(Q,K,V,!1,null,null,null),X=W.exports,Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{staticClass:"flex justify-center content-center",attrs:{id:"form-forgot"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[s("div",{staticClass:"relative w-full md:w-3/5 xl:w-2/4 2xl:w-1/3 bg-white rounded-lg mt-10 lg:border md:shadow-md"},[s("div",{staticClass:"flex flex-col justify-center"},[s("div",{staticClass:"h-10 my-2"},[s("Success",{directives:[{name:"show",rawName:"v-show",value:t.message,expression:"message"}],attrs:{message:t.message},on:{"close-success":function(e){t.message=""}}}),s("Error",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],attrs:{error:t.error},on:{"close-error":function(e){t.error=""}}})],1),t._m(0),s("div",{staticClass:"px-12 py-10"},[s("div",{staticClass:"w-full mb-2 flex items-center"},[s("i",{staticClass:"absolute ml-3 fill-current text-gray-400 text-xs z-10 fa fa-envelope"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"px-8 w-full border rounded px-3 py-1 text-gray-700",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._m(1)])])])])])},tt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex justify-center mt-4"},[s("h3",[t._v("Forgot Password")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-8 flex justify-between"},[s("div",[s("button",{staticClass:"bg-blue-500 border border-blue-500 text-xs text-gray-100 rounded px-4 py-2 hover:text-pink-500 hover:bg-white",attrs:{id:"btn-forgot",type:"text"}},[t._v(" Submit ")])])])}],et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-white text-s px-4 py-3 border-0 rounded relative mx-4 my-2 bg-green-600"},[t._m(0),s("span",{staticClass:"inline-block align-middle mr-8"},[s("b",{staticClass:"capitalize"},[t._v("Oook!")]),t._v(" "+t._s(t.message)+"! ")]),s("button",{staticClass:"absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-3 mr-6 outline-none focus:outline-none",on:{click:function(e){return e.preventDefault(),t.$emit("close-success")}}},[s("span",[t._v("×")])])])},st=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"text-l inline-block mr-5 align-middle"},[s("i",{staticClass:"fa fa-check-square"})])}],rt={name:"Success",props:["message"]},at=rt,ot=Object(x["a"])(at,et,st,!1,null,null,null),nt=ot.exports,it={name:"Forgot",components:{Error:q,Success:nt},data:function(){return{email:"",error:"",message:""}},methods:{handleSubmit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,""!=t.email){e.next=3;break}return e.abrupt("return",t.error="email is required!");case 3:return e.next=5,m.a.post("/users/forgot",{email:t.email});case 5:s=e.sent,t.error="",t.message=s.data.message,console.log(s),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](0),t.message="",t.error="Error occured!";case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))()}}},lt=it,ct=Object(x["a"])(lt,Y,tt,!1,null,null,null),ut=ct.exports,dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{staticClass:"flex justify-center content-center",attrs:{id:"form-rest-password"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[s("div",{staticClass:"relative w-full md:w-3/5 xl:w-2/4 2xl:w-1/3 bg-white rounded-lg mt-10 lg:border md:shadow-md"},[s("div",{staticClass:"h-10 my-2"},[t.message?s("Success",{attrs:{message:t.message},on:{"close-success":t.handleSuccess}}):t._e(),t.error?s("Error",{attrs:{error:t.error},on:{"close-error":function(e){t.error=""}}}):t._e()],1),t._m(0),s("div",{staticClass:"px-12 py-4 flex flex-col"},[s("div",{staticClass:"w-full mb-2 mt-4 flex items-center"},[s("i",{staticClass:"absolute ml-3 fill-current text-purple-500 text-xs z-10 fa fa-lock"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"px-8 w-full border rounded px-3 py-1 text-gray-700",attrs:{type:"password",autocomplete:"new-password",placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("div",{staticClass:"w-full mb-2 flex items-center"},[s("i",{staticClass:"absolute ml-3 fill-current text-purple-500 text-xs z-10 fa fa-repeat"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordConfirm,expression:"passwordConfirm"}],staticClass:"px-8 w-full border rounded px-3 py-1 text-gray-700",attrs:{type:"password",placeholder:"password again"},domProps:{value:t.passwordConfirm},on:{input:function(e){e.target.composing||(t.passwordConfirm=e.target.value)}}})]),t._m(1)])])])])},mt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex justify-center mt-6"},[s("h3",[t._v("Reset Password")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-4 flex justify-between"},[s("button",{staticClass:"bg-blue-500 border border-blue-500 text-xs text-gray-100 rounded px-4 py-2 hover:text-pink-500 hover:bg-white",attrs:{id:"btn-reset",type:"text"}},[t._v(" SUBMIT ")])])}],pt={name:"Reset",components:{Error:q,Success:nt},data:function(){return{password:"",passwordConfirm:"",error:"",message:""}},methods:{handleSubmit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,""!=t.password){e.next=3;break}return e.abrupt("return",t.error="password is required!");case 3:if(t.passwordConfirm===t.password){e.next=5;break}return e.abrupt("return",t.error="passwords should match!");case 5:return e.next=7,m.a.post("/users/reset",{password:t.password,password_confirm:t.passwordConfirm,token:t.$route.params.token});case 7:s=e.sent,t.error="",t.message=s.data.message,t.password="",t.passwordConfirm="",console.log(s),e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](0),t.message="",t.error=e.t0.response.data.message;case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))()},handleSuccess:function(){this.message="",this.$router.push("/login")}}},ft=pt,xt=Object(x["a"])(ft,dt,mt,!1,null,null,null),vt=xt.exports,ht=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.user?s("div",{staticClass:"flex flex-col"},[s("div",{staticClass:"flex center-center justify-center"},[s("div",{staticClass:"w-full md:w-4/5 xl:w-3/5 2xl:w-1/2 flex text-white text-lg py-1 border-0 rounded-md mt-4 mx-2 bg-gray-500 justify-center content-center"},[s("h3",[t._v(t._s(t.user.firstName)+" "+t._s(t.user.lastName))])])]),s("AddTodo",{on:{"add-todo":t.addTodo}}),s("Todos",{attrs:{todos:t.todos},on:{"del-todo":t.deleteTodo,"update-status":t.updateStatus}})],1):s("div",{staticClass:"flex justify-center content-center"},[t._m(0)])])},bt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full md:w-4/5 xl:w-3/5 2xl:w-1/2 flex text-white text-lg px-4 py-20 border-0 rounded-md shadow-md relative mx-4 my-20 bg-blue-600 justify-center content-center"},[s("span",{staticClass:"text-lg inline-block mr-5 align-middle"},[s("i",{staticClass:"fa fa-bullhorn"})]),s("span",{staticClass:"inline-block align-middle mr-8"},[s("b",{staticClass:"capitalize"},[t._v("Information!")]),t._v(" To display your todos please sign in! ")])])}],gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex justify-center content-center"},[s("div",{staticClass:"p-2 my-4 flex flex-col w-full md:w-4/5 xl:w-3/5 2xl:w-1/2 bg-white rounded-lg lg:border md:shadow-md",attrs:{id:"todos-list"}},t._l(t.todos,(function(e){return s("div",{key:e.id},[s("TodoItem",{attrs:{todo:e},on:{"del-todo":function(s){return t.$emit("del-todo",e.id)},"update-status":function(s){return t.$emit("update-status",{status:e.status,Id:e.id})}}})],1)})),0)])},wt=[],Ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-gray-50 rounded-lg mx-1 my-0.5 px-2 py-4 border border-pink-100 shadow-sm flex justify-between text-gray-600",class:{"is-complete":t.todo.status}},[s("p",[s("input",{attrs:{type:"checkbox",id:"check-"+t.todo.id},domProps:{checked:t.todo.status},on:{change:function(e){return e.preventDefault(),t.markComplete(e)}}}),t._v(" "+t._s(t.todo.todo)+" ")]),s("button",{staticClass:"del text-pink-600",on:{click:function(e){return t.$emit("del-todo",t.todo.id)}}},[s("i",{staticClass:"fa fa-window-close"})])])},yt=[],_t={name:"TodoItem",props:["todo"],methods:{markComplete:function(t){t.preventDefault(),this.todo.status=!this.todo.status,this.$emit("update-status")}}},kt=_t,jt=(s("a2cc"),Object(x["a"])(kt,Ct,yt,!1,null,"525ee544",null)),$t=jt.exports,Et={name:"Todos",components:{TodoItem:$t},props:["todos"],methods:{updateStatus:function(t){t.preventDefault()}}},Ot=Et,St=Object(x["a"])(Ot,gt,wt,!1,null,"14ef9e5f",null),Nt=St.exports,Tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{staticClass:"flex justify-center content-center",attrs:{id:"form-add-todo"},on:{submit:function(e){return e.preventDefault(),t.addTodo(e)}}},[s("div",{staticClass:"p-2 my-4 flex justify-between relative w-full md:w-4/5 xl:w-3/5 2xl:w-1/2 bg-white rounded-lg lg:border md:shadow-md"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"px-8 w-full border rounded px-3 py-1 text-gray-700",attrs:{type:"text",name:"title",placeholder:"Add Todo..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),s("input",{staticClass:"bg-blue-500 border border-blue-500 text-xs text-gray-100 rounded px-4 py-2 ml-1 hover:text-pink-500 hover:bg-white",attrs:{type:"submit",value:"Submit",id:"btn-add-todo"}})])])])},Pt=[],zt={name:"AddTodo",data:function(){return{title:""}},methods:{addTodo:function(t){t.preventDefault(),this.$emit("add-todo",this.title),this.title=""}}},Rt=zt,It=Object(x["a"])(Rt,Tt,Pt,!1,null,"e909c6b8",null),Dt=It.exports,At={name:"Home",components:{Todos:Nt,AddTodo:Dt},computed:Object(c["a"])(Object(c["a"])({},Object(u["b"])(["user"])),Object(u["b"])(["todos"])),methods:{deleteTodo:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,m.a.delete("/todos/".concat(t)).catch((function(t){return console.log(t)}));case 2:e.getTodos();case 3:case"end":return s.stop()}}),s)})))()},addTodo:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,m.a.post("/todos/create",{todo:t}).catch((function(t){return console.log(t)}));case 2:e.getTodos();case 3:case"end":return s.stop()}}),s)})))()},updateStatus:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var r,a,o;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return r=t.status,a=t.Id,o=r?"1":"0",s.next=4,m.a.patch("/todos/".concat(a),{todoStatus:o}).catch((function(t){return console.log(t)}));case 4:e.getTodos();case 5:case"end":return s.stop()}}),s)})))()},getTodos:function(){var t=this;m.a.get("/todos").then((function(e){t.$store.dispatch("todos",e.data.todos)})).catch((function(t){return console.log(t)}))}}},Ht=At,Lt=Object(x["a"])(Ht,ht,bt,!1,null,null,null),Mt=Lt.exports;r["a"].use(O["a"]);var Ft=new O["a"]({mode:"history",routes:[{path:"/",component:R},{path:"/login",component:J},{path:"/register",component:X},{path:"/forgot",component:ut},{path:"/reset/:token",component:vt},{path:"/todo",component:Mt}]});m.a.defaults.baseURL="/api",m.a.defaults.headers.common["Authorization"]="Bearer "+localStorage.getItem("token"),r["a"].use(u["a"]);var qt={user:null,todos:null},Ut=new u["a"].Store({state:qt,getters:{user:function(t){return t.user},todos:function(t){return t.todos}},actions:{user:function(t,e){t.commit("user",e)},todos:function(t,e){t.commit("todos",e)}},mutations:{user:function(t,e){t.user=e},todos:function(t,e){t.todos=e}}}),Bt=Ut;r["a"].config.productionTip=!1,new r["a"]({router:Ft,store:Bt,render:function(t){return t(E)}}).$mount("#app")},"85ec":function(t,e,s){},"88d7":function(t,e,s){},"8b71":function(t,e,s){"use strict";s("88d7")},a2cc:function(t,e,s){"use strict";s("1418")},ee4b:function(t,e,s){t.exports=s.p+"img/chinook.32e272a6.png"}});
//# sourceMappingURL=app.f07a69fc.js.map