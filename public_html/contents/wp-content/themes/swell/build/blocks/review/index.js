!function(){var e={37:function(e,t,l){"use strict";var a=window.wp.i18n,n=window.wp.blocks,c=window.wp.element,r=window.wp.blockEditor;function s(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}var o=function(e){var t=e.icon,l=e.size,a=void 0===l?24:l,n=function(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)l=c[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)l=c[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}(e,["icon","size"]);return(0,c.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){s(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({width:a,height:a},n))},m=window.wp.components,u=React.createElement("svg",{viewBox:"0 0 56 56"},React.createElement("path",{d:"M40.6,26l-8.7-1.3L28,16.9l-3.9,7.9L15.4,26l6.3,6.1l-1.5,8.7l7.8-4.1l7.8,4.1l-1.5-8.7C34.3,32.2,40.6,26,40.6,26z"}),React.createElement("path",{d:"M55,16.9l-3.9,7.9L42.4,26l6.3,6.1l-1.5,8.7l7.8-4.1V16.9z"}),React.createElement("path",{d:"M1,36.8l7.8,4.1l-1.5-8.7l6.3-6.1l-8.7-1.3L1,16.9V36.8z"})),_=window.wp.primitives,d=(0,c.createElement)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,c.createElement)(_.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})),w=(0,c.createElement)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,c.createElement)(_.Path,{d:"M2 12C2 6.44444 6.44444 2 12 2C17.5556 2 22 6.44444 22 12C22 17.5556 17.5556 22 12 22C6.44444 22 2 17.5556 2 12ZM13 11V7H11V11H7V13H11V17H13V13H17V11H13Z"})),v=l(184),R=l.n(v);const E=({title:e,itemName:t,itemData:l=[],setAttributes:n})=>React.createElement(m.BaseControl,null,React.createElement(m.BaseControl.VisualLabel,null,e),React.createElement("div",{className:"__inner"},l.map(((c,r)=>React.createElement(m.Flex,{className:"__list",key:t+"_"+r,align:"center"},React.createElement(m.FlexBlock,null,React.createElement("span",{className:"__number"},r+1),React.createElement(m.TextControl,{value:c||"",placeholder:(0,a.sprintf)((0,a.__)("%sを入力してください","swell"),e),onChange:e=>{const a=[...l];a[r]=e,n({[t]:a})}})),React.createElement(m.FlexItem,null,React.createElement(m.Button,{icon:d,className:"__deleteBtn",isDestructive:!0,onClick:()=>{const e=l.filter(((e,t)=>t!==r));n({[t]:e})}}))))),React.createElement(m.Button,{text:(0,a.sprintf)((0,a.__)("%sを追加","swell"),e),icon:w,isPrimary:!0,className:"__addBtn",onClick:()=>{const e=[...l];e.push(""),n({[t]:e})}})));function p({attributes:e,setAttributes:t}){const{useType:l,name:n,image:c={},author:s,usePostAuthor:i=!1,rating:o,merits:u=[],demerits:_=[],data:d={}}=e,w="box"!==l;return React.createElement(React.Fragment,null,React.createElement("div",{className:"__settings"},React.createElement("div",{className:"__row"},React.createElement(m.RadioControl,{label:(0,a.__)("用途","swell"),selected:l,options:[{label:(0,a.__)("レビューボックスと構造化データを両方出力","swell"),value:"both"},{label:(0,a.__)("レビューボックスのみ出力","swell"),value:"box"},{label:(0,a.__)("構造化データのみ出力","swell"),value:"json"}],onChange:e=>{t({useType:e})}})),!w&&React.createElement("div",{className:"__row"},React.createElement(m.TextControl,{label:(0,a.__)("商品名","swell"),placeholder:(0,a.sprintf)((0,a.__)("%sを入力してください","swell"),(0,a.__)("商品名","swell")),value:n||"",onChange:e=>{t({name:e})}})),w&&React.createElement(React.Fragment,null,React.createElement("div",{className:"__row"},React.createElement(m.TextControl,{className:R()("-required",{"-error":!n}),label:(0,a.__)("商品名","swell"),placeholder:(0,a.sprintf)((0,a.__)("%sを入力してください","swell"),(0,a.__)("商品名","swell")),value:n||"",onChange:e=>{t({name:e})}})),React.createElement("div",{className:"__row"},React.createElement(m.TextControl,{className:R()("-required",{"-error":!s}),label:(0,a.__)("レビューをする人","swell"),placeholder:(0,a.sprintf)((0,a.__)("%sを入力してください","swell"),(0,a.__)("レビューをする人の名前","swell")),value:s||"",onChange:e=>{t({author:e})}}),React.createElement(m.CheckboxControl,{label:(0,a.__)("記事ページでは著者データを使用する","swell"),checked:i||!1,onChange:e=>t({usePostAuthor:e})}))),React.createElement("div",{className:"__row"},React.createElement(m.RangeControl,{label:(0,a.__)("評価","swell"),value:o||0,onChange:e=>{t({rating:e})},min:0,max:5,step:.5,help:(0,a.__)("0にすると出力されません。","swell")})),React.createElement("div",{className:"__row"},React.createElement("div",{className:"components-base-control__label"},(0,a.__)("画像URL","swell")),React.createElement(m.Flex,null,React.createElement(m.FlexItem,{className:"__imgPreview"},(null==c?void 0:c.url)&&React.createElement("img",{src:c.url,alt:"",width:null==c?void 0:c.width,height:null==c?void 0:c.height})),React.createElement(m.FlexBlock,{className:"__imgSetting"},React.createElement(m.TextControl,{value:(null==c?void 0:c.url)||"",onChange:e=>{t({image:{url:e}})}}),React.createElement("div",{className:"swl-btns--media"},React.createElement(r.MediaUploadCheck,null,React.createElement(r.MediaUpload,{onSelect:e=>{e&&e.url?t({image:{id:e.id,url:e.url,width:(null==e?void 0:e.width)||void 0,height:(null==e?void 0:e.height)||void 0}}):t({image:void 0})},allowedTypes:"image",value:(null==c?void 0:c.id)||"",render:({open:e})=>React.createElement(m.Button,{text:(0,a.__)("メディアから選択","swell"),isPrimary:!0,onClick:e})})),React.createElement(m.Button,{text:(0,a.__)("削除","swell"),isSecondary:!0,className:"swl-btn--delete",onClick:()=>{t({image:void 0})}})))),(null==c?void 0:c.id)&&React.createElement("p",{className:"description"},(0,a.__)("URLを直接編集すると、画像の付加情報は削除されます。","swell"),React.createElement("small",null,`( id: ${c.id}, width: ${null==c?void 0:c.width}, height: ${null==c?void 0:c.height} )`))),React.createElement("div",{className:"__row"},React.createElement(E,{title:(0,a.__)("メリット","swell"),itemName:"merits",itemData:u,setAttributes:t})),React.createElement("div",{className:"__row"},React.createElement(E,{title:(0,a.__)("デメリット","swell"),itemName:"demerits",itemData:_,setAttributes:t}))),w&&React.createElement("p",{className:"description"},(0,a.__)("その他の付加情報については、ブロックサイドバーから設定できます。","swell")),w&&React.createElement(r.InspectorControls,null,React.createElement(m.PanelBody,{title:(0,a.__)("製品情報","swell")},React.createElement(m.TextareaControl,{label:(0,a.__)("商品の説明","swell"),value:(null==e?void 0:e.description)||"",onChange:e=>{t({description:e})}}),React.createElement(m.TextControl,{label:(0,a.__)("ブランド名","swell"),value:(null==d?void 0:d.brandName)||"",onChange:e=>{var l;l={brandName:e},t({data:{...d,...l}})}}),React.createElement(m.TextControl,{type:"number",label:(0,a.__)("価格","swell"),value:(null==e?void 0:e.price)||0,onChange:e=>{t({price:parseFloat(e)})}}),React.createElement(m.TextControl,{label:(0,a.__)("通貨の種類","swell"),value:(null==e?void 0:e.priceCurrency)||"JPY",onChange:e=>{t({priceCurrency:e})},help:(0,a.__)("例) JPY, USD, EUR…","swell")}))))}const b=({data:e,isList:t=!1})=>t?React.createElement(React.Fragment,null,e.map(((e,t)=>React.createElement("li",{key:t},e)))):React.createElement(React.Fragment,null,e.map(((e,t)=>React.createElement("div",{key:t},e))));function g({attributes:e,blockIcon:t}){const{name:l,rating:n,merits:c=[],demerits:r=[]}=e;return React.createElement("div",{className:"__jsonPreview"},React.createElement("div",{className:"__title"},t,(0,a.__)("商品レビュー","swell")," ( ",(0,a.__)("構造化データ","swell")," )"),React.createElement("dl",{className:"__settings -preview"},React.createElement("div",{className:"__div"},React.createElement("dt",null,(0,a.__)("商品名","swell")),React.createElement("dd",null,l||"")),React.createElement("div",{className:"__div"},React.createElement("dt",null,(0,a.__)("評価","swell")),React.createElement("dd",null,n||1)),React.createElement("div",{className:"__div"},React.createElement("dt",null,(0,a.__)("メリット","swell")),React.createElement("dd",null,React.createElement(b,{data:c}))),React.createElement("div",{className:"__div"},React.createElement("dt",null,(0,a.__)("デメリット","swell")),React.createElement("dd",null,React.createElement(b,{data:r}))),React.createElement("div",{className:"__div"},React.createElement("dt",null,"etc..."),React.createElement("dd",null))))}const h=({data:e})=>React.createElement(React.Fragment,null,e.map(((e,t)=>React.createElement("li",{key:t},e))));function f({attributes:e}){const{name:t,image:l={},rating:n,merits:r=[],demerits:s=[]}=e;return React.createElement("div",{className:"swell-block-review__inner"},t&&React.createElement("div",{className:"swell-block-review__title"},React.createElement("span",null,t)),(null==l?void 0:l.url)&&React.createElement("figure",{className:"swell-block-review__image"},React.createElement("img",{src:l.url,alt:"",width:null==l?void 0:l.width,height:null==l?void 0:l.height,className:R()("__img",{[`wp-image-${null==l?void 0:l.id}`]:!(null==l||!l.id)})})),!!n&&React.createElement("div",{className:"swell-block-review__rating"},React.createElement("span",{className:"__label"},(0,a.__)("総合評価","swell")),React.createElement("div",{className:"__value"},React.createElement(c.RawHTML,{className:"__stars c-reviewStars"},(e=>{let t="";for(let l=0;l<5;l++)t+=-.5==(e-=1)?'<i class="icon-star-half"></i>':e<0?'<i class="icon-star-empty"></i>':'<i class="icon-star-full"></i>';return t})(parseFloat(n))),React.createElement("small",{className:"__str"},`( ${n} )`))),r.length>0&&React.createElement("div",{className:"swell-block-review__merits"},React.createElement("div",{className:"__label"},(0,a.__)("メリット","swell")),React.createElement("ul",{className:"__list is-style-good_list"},React.createElement(h,{data:r}))),s.length>0&&React.createElement("div",{className:"swell-block-review__demerits"},React.createElement("div",{className:"__label"},(0,a.__)("デメリット","swell")),React.createElement("ul",{className:"__list is-style-bad_list"},React.createElement(h,{data:s}))))}(0,n.registerBlockType)("loos/review",{title:(0,a.__)("商品レビュー","swell")+"(β)",icon:u,edit:({attributes:e,setAttributes:t,isSelected:l})=>{const[n,s]=(0,c.useState)(!1),{useType:i}=e,_="json"!==i;return React.createElement("div",(0,r.useBlockProps)({className:"swell-block-review"}),!l&&_&&React.createElement(f,{attributes:e}),!l&&!_&&React.createElement(g,{attributes:e,blockIcon:React.createElement(o,{icon:u})}),l&&React.createElement(React.Fragment,null,React.createElement("div",{className:"__title"},React.createElement(o,{icon:u}),(0,a.__)("商品レビュー","swell")+"(β)",_&&React.createElement(m.ToggleControl,{label:(0,a.__)("プレビュー","swell"),checked:n,onChange:e=>s(e)})),n&&React.createElement("div",{className:"__htmlPreview"},React.createElement(f,{attributes:e})),!n&&React.createElement(p,{attributes:e,setAttributes:t})))},save:()=>null})},184:function(e,t){var l;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var c=typeof l;if("string"===c||"number"===c)e.push(l);else if(Array.isArray(l)){if(l.length){var r=n.apply(null,l);r&&e.push(r)}}else if("object"===c)if(l.toString===Object.prototype.toString)for(var s in l)a.call(l,s)&&l[s]&&e.push(s);else e.push(l.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()}},t={};function l(a){var n=t[a];if(void 0!==n)return n.exports;var c=t[a]={exports:{}};return e[a](c,c.exports,l),c.exports}l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l(37)}();