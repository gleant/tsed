(window.webpackJsonp=window.webpackJsonp||[]).push([[535],{1260:function(e,t,s){"use strict";s.r(t);var a=s(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"interface-os2schema"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interface-os2schema"}},[e._v("#")]),e._v(" Interface OS2Schema")]),e._v(" "),s("Badge",{attrs:{text:"Interface",type:"interface"}}),e._v(" "),s("section",{staticClass:"table-features"},[s("table",{staticClass:"is-full-width"},[s("tbody",[s("tr",[s("th",[e._v("Module")]),s("td",[s("div",{staticClass:"lang-typescript"},[s("span",{staticClass:"token keyword"},[e._v("import")]),e._v(" { OS2Schema } "),s("span",{staticClass:"token keyword"},[e._v("from")]),e._v(" "),s("span",{staticClass:"token string"},[e._v('"@tsed/openspec"')])])])]),s("tr",[s("th",[e._v("Source")]),s("td",[s("a",{attrs:{href:"https://github.com/tsedio/tsed/blob/v6.67.0/packages/openspec/src/openspec2/OS2Schema.ts#L0-L0"}},[e._v("/packages/openspec/src/openspec2/OS2Schema.ts")])])])])])]),e._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),s("div",{staticClass:"language-typescript"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" OS2Schema "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("extends")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecJsonSchema.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecJsonSchema")])]),e._v("<OS2Schema> "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n"),s("div",{pre:!0,attrs:{class:"language- extra-class"}},[s("pre",[s("code",[e._v('discriminator?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n\nreadOnly?<span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n\nxml?<span class="token punctuation">:</span> <a href="/api/openspec/common/OpenSpecXML.html"><span class="token">OpenSpecXML</span></a><span class="token punctuation">;</span>\n\nexternalDocs?<span class="token punctuation">:</span> <a href="/api/openspec/common/OpenSpecExternalDocs.html"><span class="token">OpenSpecExternalDocs</span></a><span class="token punctuation">;</span>\n')])])]),s("p",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])])])])]),s("p"),e._v(" "),s("h2",{attrs:{id:"members"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[e._v("#")]),e._v(" Members")]),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("discriminator?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("Adds support for polymorphism.\nThe discriminator is the schema property name that is used to differentiate between other schema that inherit this schema. The property name used MUST be defined at this schema and it MUST be in the required property list. When used, the value MUST be the name of this schema or any schema that inherits it.")])]),s("hr"),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("readOnly?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v('Relevant only for Schema "properties" definitions. Declares the property as "read only". This means that it MAY be sent as part of a response but MUST NOT be sent as part of the request. Properties marked as readOnly being true SHOULD NOT be in the required list of the defined schema. Default value is false.')])]),s("hr"),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("xml?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecXML.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecXML")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("This MAY be used only on properties schemas. It has no effect on root schemas. Adds Additional metadata to describe the XML representation format of this property.")])]),s("hr"),e._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("externalDocs?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecExternalDocs.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecExternalDocs")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),s("p",[e._v("Additional external documentation for this schema.")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);