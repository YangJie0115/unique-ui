(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{50:function(s,t,a){"use strict";a.r(t);var r=function(){var s=this.$createElement;this._self._c;return this._m(0)};r._withStripped=!0;var e=a(0),n=Object(e.a)({},r,[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"use"},[a("h2",[s._v("快速上手")]),s._v(" "),a("p",[s._v("字体图标文件未集成到"),a("code",[s._v("unique-ui")]),s._v("中，请在"),a("code",[s._v("index.html")]),s._v("中引入以下样式")]),s._v(" "),a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{pre:!0,attrs:{class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rel")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"stylesheet"')]),s._v(" />")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"//at.alicdn.com/t/font_895870_fugdyroqsrt.css"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rel")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"stylesheet"')]),s._v(" />")]),s._v("\n")])]),s._v(" "),a("h4",[s._v("完整引入")]),s._v(" "),a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{pre:!0,attrs:{class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'unique-ui/lib/theme/index.css'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 引入所有样式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" uniqueUI "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'unique-ui'")]),s._v("\nVue.use(uniqueUI)\n")])]),s._v(" "),a("h4",[s._v("手动引入")]),s._v(" "),a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{pre:!0,attrs:{class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'unique-ui/lib/theme/base.css'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 引入基本样式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'unique-ui/lib/theme/button.css'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 引入组件样式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { Button } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'unique-ui'")]),s._v("\nVue.use(Button)\n")])]),s._v(" "),a("h4",[s._v("按需引入（推荐）")]),s._v(" "),a("p",[a("em",[s._v("可以帮你自动引入这个组件的样式")])]),s._v(" "),a("p",[s._v("首先安装 "),a("a",{attrs:{href:"https://github.com/ElementUI/babel-plugin-component"}},[s._v("babel-plugin-component")]),s._v(" 库")]),s._v(" "),a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{pre:!0,attrs:{class:"language-bash"}},[s._v("npm install babel-plugin-component -D\n")])]),s._v(" "),a("p",[s._v("然后修改"),a("code",[s._v(".babelrc")]),s._v("文件")]),s._v(" "),a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{pre:!0,attrs:{class:"language-javascript"}},[s._v("{\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"plugins"')]),s._v(": [\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n    [\n      "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"component"')]),s._v(",\n      {\n        "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"libraryName"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"unique-ui"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"styleLibraryName"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"theme"')]),s._v("\n      }\n    ]\n  ]\n}\n")])]),s._v(" "),a("p",[s._v("接下来，如果你只希望引入部分组件，比如"),a("code",[s._v("Button")]),s._v("和"),a("code",[s._v("Modal")]),s._v("，那么需要在"),a("code",[s._v("main.js")]),s._v("中写入以下内容：")]),s._v(" "),a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{pre:!0,attrs:{class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { Button, Modal } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'unique-ui'")]),s._v("\nVue.use(Button)\n   .use(Modal)\n")])])])}],!1,null,null,null);n.options.__file="docs/use.md";t.default=n.exports}}]);