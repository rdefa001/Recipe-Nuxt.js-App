(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{154:function(e,t,n){var content=n(161);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("18354138",content,!0,{sourceMap:!1})},155:function(e,t,n){var content=n(163);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("f558ec22",content,!0,{sourceMap:!1})},160:function(e,t,n){"use strict";var r=n(154);n.n(r).a},161:function(e,t,n){(t=n(41)(!1)).push([e.i,"a[data-v-ea93dd24]{text-decoration:none;color:#000}.recipe[data-v-ea93dd24]{box-sizing:border-box;width:280px;padding:8px;border:1px solid #ccc;box-shadow:0 2px 2px #eee}.thumbnail[data-v-ea93dd24]{background-position:50%;background-size:cover;width:100%;height:200px}",""]),e.exports=t},162:function(e,t,n){"use strict";var r=n(155);n.n(r).a},163:function(e,t,n){(t=n(41)(!1)).push([e.i,".recipes[data-v-e0b914d8]{display:flex;flex-flow:row wrap;justify-content:center;align-items:center}",""]),e.exports=t},172:function(e,t,n){"use strict";n.r(t);n(13);var r={props:["thumbnail","title","previewText","id"]},o=(n(160),n(14)),c={components:{Recipe:Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nuxt-link",{attrs:{to:"/recipes/"+e.id}},[n("article",{staticClass:"recipe"},[n("div",{staticClass:"thumbnail",style:{backgroundImage:"url("+e.thumbnail+")"}}),e._v(" "),n("h1",[e._v(e._s(e.title))]),e._v(" "),n("p",[e._v(e._s(e.previewText))])])])}),[],!1,null,"ea93dd24",null).exports},asyncData:function(){return new Promise((function(e,t){setTimeout((function(){e({recipes:[{id:"1",title:"Delicious pizza",previewText:"Awesome Pizza",thumbnail:"https://www.kingarthurflour.com/sites/default/files/styles/featured_image_2x/public/recipe_legacy/1234-3-large.jpg?itok=nmuyHcyY"},{id:"2",title:"Another pizza",previewText:"Not as good Pizza",thumbnail:"https://eu.peugeot-saveurs.com/wp/wp-content/uploads/2019/06/Prosciutto-and-Burrata-Pizza_landscape2-1024x0.jpg"}]})}),1500)}))}},l=(n(162),Object(o.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"recipes"},this._l(this.recipes,(function(e){return t("Recipe",{key:e.id,attrs:{thumbnail:e.thumbnail,title:e.title,previewText:e.previewText,id:e.id}})})),1)}),[],!1,null,"e0b914d8",null));t.default=l.exports}}]);