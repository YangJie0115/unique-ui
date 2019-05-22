(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{56:function(t,s,v){"use strict";v.r(s);var _=function(){var t=this.$createElement;this._self._c;return this._m(0)};_._withStripped=!0;var a=v(0),r=Object(a.a)({},_,[function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("div",{staticClass:"toast"},[v("h2",[t._v("Toast 消息提示")]),t._v(" "),v("blockquote",[v("p",[t._v("推荐用"),v("code",[t._v("Vue.use")]),t._v("方式来使用本组件，以后便可以在每个Vue实例上直接通过"),v("code",[t._v("this.$toast")]),t._v("方式使用，第一个参数代表消息内容，第二个参数传入一个options配置对象，仅支持单例模式")])]),t._v(" "),v("h4",[t._v("使用方法")]),t._v(" "),v("pre",{pre:!0,attrs:{class:"hljs"}},[v("code",{pre:!0,attrs:{class:"language-javascript"}},[v("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("/* 普通提示 */")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$toast("),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'hello~'")]),t._v(")\n\n"),v("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("/* 加载提示 */")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$toast("),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Loading...'")]),t._v(", { "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'loading'")]),t._v(", "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("duration")]),t._v(": "),v("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3000")]),t._v(" })\n"),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$toast.loading("),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Loading...'")]),t._v(", { "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("duration")]),t._v(": "),v("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3000")]),t._v(" })\n\n"),v("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("/* 成功提示 */")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$toast("),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'成功'")]),t._v(", { "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'success'")]),t._v(" })\n"),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$toast.success("),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'成功'")]),t._v(")\n\n"),v("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("/* 失败提示 */")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$toast("),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'失败'")]),t._v(", { "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'fail'")]),t._v(" })\n"),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$toast.fail("),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'失败'")]),t._v(")\n")])]),t._v(" "),v("h4",[t._v("Options（第二个参数）")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("type")]),t._v(" "),v("td",[t._v("类型，可选值为"),v("code",[t._v("normal | loading | success | fail")])]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[v("code",[t._v("'normal'")])])]),t._v(" "),v("tr",[v("td",[t._v("duration")]),t._v(" "),v("td",[t._v("多久自动消失，"),v("code",[t._v("0")]),t._v("代表不消失，单位毫秒")]),t._v(" "),v("td",[v("code",[t._v("Number")])]),t._v(" "),v("td",[t._v("当"),v("code",[t._v("type")]),t._v("为"),v("code",[t._v("loading")]),t._v("时默认是"),v("code",[t._v("0")]),t._v("，其它为"),v("code",[t._v("2500")])])]),t._v(" "),v("tr",[v("td",[t._v("overlay")]),t._v(" "),v("td",[t._v("是否显示一个透明度为"),v("code",[t._v("0")]),t._v("的蒙版，防止用户点击其它地方，只在"),v("code",[t._v("type")]),t._v("不为"),v("code",[t._v("normal")]),t._v("时生效")]),t._v(" "),v("td",[v("code",[t._v("Boolean")])]),t._v(" "),v("td",[v("code",[t._v("true")])])])])]),t._v(" "),v("h4",[t._v("Props")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("show")]),t._v(" "),v("td",[t._v("是否显示")]),t._v(" "),v("td",[v("code",[t._v("Boolean")])]),t._v(" "),v("td",[v("code",[t._v("false")])])]),t._v(" "),v("tr",[v("td",[t._v("type")]),t._v(" "),v("td",[t._v("同 Options 中一致")]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[v("code",[t._v("normal")])])]),t._v(" "),v("tr",[v("td",[t._v("text")]),t._v(" "),v("td",[t._v("文字内容")]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[v("code",[t._v("''")])])]),t._v(" "),v("tr",[v("td",[t._v("overlay")]),t._v(" "),v("td",[t._v("是否显示一个透明度为"),v("code",[t._v("0")]),t._v("的蒙版，不同于 Options 中，这里所有"),v("code",[t._v("type")]),t._v("下都会生效")]),t._v(" "),v("td",[v("code",[t._v("Boolean")])]),t._v(" "),v("td",[v("code",[t._v("true")])])])])]),t._v(" "),v("h4",[t._v("Slots")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("icon")]),t._v(" "),v("td",[t._v("图标")])]),t._v(" "),v("tr",[v("td",[t._v("text")]),t._v(" "),v("td",[t._v("文字")])])])])])}],!1,null,null,null);r.options.__file="examples/docs/toast.md";s.default=r.exports}}]);