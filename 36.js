(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{56:function(t,s,a){"use strict";a.r(s);var v=function(){var t=this.$createElement;this._self._c;return this._m(0)};v._withStripped=!0;var _=a(0),r=Object(_.a)({},v,[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"toast"},[a("h2",[t._v("Toast 消息提示")]),a("blockquote",[a("p",[t._v("推荐用"),a("code",[t._v("Vue.use")]),t._v("方式来使用本组件，以后便可以在每个Vue实例上直接通过"),a("code",[t._v("this.$toast")]),t._v("方式使用，第一个参数代表消息内容，第二个参数传入一个options配置对象，仅支持单例模式")])]),a("h4",[t._v("使用方法")]),a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{pre:!0,attrs:{class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("/* 普通提示 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$toast("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'hello~'")]),t._v(")\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("/* 加载提示 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$toast("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Loading...'")]),t._v(", { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'loading'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("duration")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3000")]),t._v(" })\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$toast.loading("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Loading...'")]),t._v(", { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("duration")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3000")]),t._v(" })\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("/* 成功提示 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$toast("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'成功'")]),t._v(", { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'success'")]),t._v(" })\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$toast.success("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'成功'")]),t._v(")\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("/* 失败提示 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$toast("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'失败'")]),t._v(", { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'fail'")]),t._v(" })\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$toast.fail("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'失败'")]),t._v(")\n")])]),a("h4",[t._v("Options（第二个参数）")]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",[t._v("说明")]),a("th",[t._v("类型")]),a("th",[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("type")]),a("td",[t._v("类型，可选值为"),a("code",[t._v("normal | loading | success | fail")])]),a("td",[a("code",[t._v("String")])]),a("td",[a("code",[t._v("'normal'")])])]),a("tr",[a("td",[t._v("duration")]),a("td",[t._v("多久自动消失，"),a("code",[t._v("0")]),t._v("代表不消失，单位毫秒")]),a("td",[a("code",[t._v("Number")])]),a("td",[t._v("当"),a("code",[t._v("type")]),t._v("为"),a("code",[t._v("loading")]),t._v("时默认是"),a("code",[t._v("0")]),t._v("，其它为"),a("code",[t._v("2500")])])]),a("tr",[a("td",[t._v("overlay")]),a("td",[t._v("是否显示一个透明度为"),a("code",[t._v("0")]),t._v("的蒙版，防止用户点击其它地方，只在"),a("code",[t._v("type")]),t._v("不为"),a("code",[t._v("normal")]),t._v("时生效")]),a("td",[a("code",[t._v("Boolean")])]),a("td",[a("code",[t._v("true")])])])])]),a("h4",[t._v("Props")]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",[t._v("说明")]),a("th",[t._v("类型")]),a("th",[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("show")]),a("td",[t._v("是否显示")]),a("td",[a("code",[t._v("Boolean")])]),a("td",[a("code",[t._v("false")])])]),a("tr",[a("td",[t._v("type")]),a("td",[t._v("同 Options 中一致")]),a("td",[a("code",[t._v("String")])]),a("td",[a("code",[t._v("normal")])])]),a("tr",[a("td",[t._v("text")]),a("td",[t._v("文字内容")]),a("td",[a("code",[t._v("String")])]),a("td",[a("code",[t._v("''")])])]),a("tr",[a("td",[t._v("overlay")]),a("td",[t._v("是否显示一个透明度为"),a("code",[t._v("0")]),t._v("的蒙版，不同于 Options 中，这里所有"),a("code",[t._v("type")]),t._v("下都会生效")]),a("td",[a("code",[t._v("Boolean")])]),a("td",[a("code",[t._v("true")])])])])]),a("h4",[t._v("Slots")]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",[t._v("说明")])])]),a("tbody",[a("tr",[a("td",[t._v("icon")]),a("td",[t._v("图标")])]),a("tr",[a("td",[t._v("text")]),a("td",[t._v("文字")])])])])])}],!1,null,null,null);r.options.__file="examples/docs/toast.md";s.default=r.exports}}]);