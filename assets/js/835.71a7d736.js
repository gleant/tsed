(window.webpackJsonp=window.webpackJsonp||[]).push([[835],{1560:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"class-typegraphqlservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-typegraphqlservice"}},[s._v("#")]),s._v(" Class TypeGraphQLService")]),s._v(" "),a("Badge",{attrs:{text:"Class",type:"class"}}),s._v(" "),a("section",{staticClass:"table-features"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[s._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { TypeGraphQLService } "),a("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"token string"},[s._v('"@tsed/typegraphql"')])])])]),a("tr",[a("th",[s._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/tsedio/tsed/blob/v6.67.0/packages/typegraphql/src/services/TypeGraphQLService.ts#L0-L0"}},[s._v("/packages/typegraphql/src/services/TypeGraphQLService.ts")])])])])])]),s._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" TypeGraphQLService "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" injector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/di/services/InjectorService.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("InjectorService")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" apolloService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/apollo/services/ApolloService.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("ApolloService")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("div",{pre:!0,attrs:{class:"language- extra-class"}},[a("pre",[a("code",[s._v('<span class="token function">get</span><span class="token punctuation">(</span>id?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/apollo/interfaces/ApolloServer.html"><span class="token">ApolloServer</span></a> | undefined<span class="token punctuation">;</span>\n\n<span class="token function">has</span><span class="token punctuation">(</span>id?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n\n<span class="token function">createServer</span><span class="token punctuation">(</span>id<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> settings<span class="token punctuation">:</span> <a href="/api/typegraphql/interfaces/TypeGraphQLSettings.html"><span class="token">TypeGraphQLSettings</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">;</span>\n\n<span class="token function">createSchema</span><span class="token punctuation">(</span>buildSchemaOptions<span class="token punctuation">:</span> BuildSchemaOptions<span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;<span class="token keyword">import</span><span class="token punctuation">(</span>"graphql"<span class="token punctuation">)</span>.GraphQLSchema&gt;<span class="token punctuation">;</span>\n\n<span class="token function">getSchema</span><span class="token punctuation">(</span>id?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> GraphQLSchema | undefined<span class="token punctuation">;</span>\n\n<span class="token keyword">protected</span> <span class="token function">getResolvers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/core/domain/Type.html"><span class="token">Type</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">protected</span> <span class="token function">getDataSources</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span>serviceName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">]</span><span class="token punctuation">:</span> DataSource<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">protected</span> <span class="token function">createDataSources</span><span class="token punctuation">(</span>dataSources<span class="token punctuation">:</span> Function | undefined<span class="token punctuation">,</span> serverConfigSources<span class="token punctuation">:</span> Function | undefined<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> =&gt; <span class="token keyword">any</span><span class="token punctuation">;</span>\n<span class="token keyword">protected</span> <span class="token function">configureTypeGraphQLDI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n')])])]),a("p",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[s._v("#")]),s._v(" Members")]),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" injector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/di/services/InjectorService.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("InjectorService")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" apolloService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/apollo/services/ApolloService.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("ApolloService")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/apollo/interfaces/ApolloServer.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("ApolloServer")])]),s._v(" | undefined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Get an instance of ApolloServer from his id")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("has")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/typegraphql/interfaces/TypeGraphQLSettings.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("TypeGraphQLSettings")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Promise<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createSchema")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("buildSchemaOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" BuildSchemaOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Promise<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v('"graphql"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".GraphQLSchema>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Create a new type-graphql Schema and bind it with Ts.ED injector.")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSchema")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" GraphQLSchema | undefined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Get an instance of GraphQL schema from his id")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getResolvers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/domain/Type.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Type")])]),s._v("<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getDataSources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("serviceName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" DataSource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createDataSources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dataSources"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Function | undefined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" serverConfigSources"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Function | undefined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("create a new dataSources function to use with apollo server config")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("configureTypeGraphQLDI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);