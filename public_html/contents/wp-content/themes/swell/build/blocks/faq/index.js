!function(){var e={64:function(e,t,l){"use strict";var a=window.wp.i18n,n=window.wp.data,s=window.wp.blocks,o=window.wp.blockEditor,c="function"==typeof o.useInnerBlocksProps?o.useInnerBlocksProps:o.__experimentalUseInnerBlocksProps,r=React.createElement("svg",{viewBox:"0 0 56 56"},React.createElement("path",{d:"M36.3,35.5c1.6-2.1,2.4-4.9,2.4-8.1c0-7.4-4.4-12.2-11.1-12.2S16.5,20,16.5,27.4s4.4,12.2,11.1,12.2c3.1,0,5.1-1.1,6.1-1.6 l3.7,3l2.2-2.8L36.3,35.5z M28.5,33.7L30,35c-0.5,0.2-1.3,0.4-2.4,0.4c-4,0-6.6-3.2-6.6-8.1s2.6-8.1,6.6-8.1s6.6,3.2,6.6,8.1 c0,2.1-0.5,4-1.4,5.4l-2.2-1.8L28.5,33.7z"}),React.createElement("path",{d:"M28,5c12.7,0,23,10.3,23,23S40.7,51,28,51S5,40.7,5,28S15.3,5,28,5 M28,2C13.6,2,2,13.6,2,28s11.6,26,26,26s26-11.6,26-26 S42.4,2,28,2L28,2z"})),i=window.wp.element,u=window.wp.components;const p={"col-text":(0,a.__)("テキスト色","swell"),"col-main":(0,a.__)("メインカラー","swell"),"col-custom":(0,a.__)("カスタムカラー","swell"),"fill-text":(0,a.__)("テキスト色（塗り潰し）","swell"),"fill-main":(0,a.__)("メインカラー（塗り潰し）","swell"),"fill-custom":(0,a.__)("カスタムカラー（塗り潰し）","swell")};function _({attributes:e,setAttributes:t}){const{iconRadius:l,qIconStyle:n,aIconStyle:s,outputJsonLd:o}=e,c=(0,i.useMemo)((()=>{const e=[];return Object.keys(p).forEach((t=>{e.push({label:React.createElement("span",{className:"faq_prev_q","data-q":t,key:`qkey${t}`},React.createElement("span",{className:"faq_label_ faq_q"},React.createElement("i",null,p[t]))),value:t})})),e}),[]),r=(0,i.useMemo)((()=>{const e=[];return Object.keys(p).forEach((t=>{e.push({label:React.createElement("span",{className:"faq_prev_a","data-a":t,key:`akey${t}`},React.createElement("span",{className:"faq_label_ faq_a"},React.createElement("i",null,p[t]))),value:t})})),e}),[]);return React.createElement(u.PanelBody,{title:"FAQ設定",initialOpen:!0,className:"faq-controles"},React.createElement(u.ToggleControl,{label:(0,a.__)("構造化データを出力する","swell"),help:(0,a.__)("検索結果にリッチリザルトを表示したい時にオンにしてください。","swell"),checked:o,onChange:e=>{t({outputJsonLd:e})}}),React.createElement(u.RadioControl,{label:(0,a.__)("Q / Aのアイコンの形","swell"),selected:l,options:[{label:React.createElement("span",{className:"faq_label_square",title:(0,a.__)("四角","swell")}),value:""},{label:React.createElement("span",{className:"faq_label_rounded",title:(0,a.__)("角丸","swell")}),value:"rounded"},{label:React.createElement("span",{className:"faq_label_circle",title:(0,a.__)("円形","swell")}),value:"circle"}],onChange:e=>{t({iconRadius:e})}}),React.createElement(u.RadioControl,{label:(0,a.__)("Qアイコンの色","swell"),selected:n,options:c,onChange:e=>{t({qIconStyle:e})}}),React.createElement(u.RadioControl,{label:(0,a.__)("Aアイコンの色","swell"),selected:s,options:r,onChange:e=>{t({aIconStyle:e})}}))}var d=l(184),m=l.n(d);const f=["loos/faq-item"],w=[["loos/faq-item"],["loos/faq-item"]],b="swell-block-faq";(0,s.registerBlockType)("loos/faq",{title:(0,a.__)("FAQ","swell"),description:(0,a.__)("Q&A形式のコンテンツを簡単に設置できます。","swell"),icon:r,styles:[{label:(0,a.__)("シンプル","swell"),name:"default",isDefault:!0},{label:(0,a.__)("線あり","swell"),name:"faq-border"},{label:(0,a.__)("ボックス","swell"),name:"faq-box"},{label:(0,a.__)("ストライプ","swell"),name:"faq-stripe"}],edit:({attributes:e,setAttributes:t,clientId:l,isSelected:s})=>{const{iconRadius:r,qIconStyle:i,aIconStyle:u}=e,p=(0,n.useSelect)((e=>e("core/block-editor").hasSelectedInnerBlock(l,!1)),[l]),d=(0,o.useBlockProps)({className:m()(b,"swl-inner-blocks swl-has-guide swl-has-appender",{[`-icon-${r}`]:!!r}),"data-q":i,"data-a":u}),R=c(d,{allowedBlocks:f,template:w,templateLock:!1,renderAppender:!(!s&&!p)&&o.InnerBlocks.ButtonBlockAppender}),{children:q,...v}=R;return React.createElement(React.Fragment,null,React.createElement(o.InspectorControls,null,React.createElement(_,{attributes:e,setAttributes:t})),React.createElement("div",v,React.createElement("div",{className:"swl-parentSelector"},(0,a.__)("親ブロックを選択","swell")),q))},save:({attributes:e})=>{const{iconRadius:t,qIconStyle:l,aIconStyle:a}=e,n=o.useBlockProps.save({className:m()(b,{[`-icon-${t}`]:!!t}),"data-q":l,"data-a":a});return React.createElement("dl",n,React.createElement(o.InnerBlocks.Content,null))}})},184:function(e,t){var l;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var s=typeof l;if("string"===s||"number"===s)e.push(l);else if(Array.isArray(l)){if(l.length){var o=n.apply(null,l);o&&e.push(o)}}else if("object"===s)if(l.toString===Object.prototype.toString)for(var c in l)a.call(l,c)&&l[c]&&e.push(c);else e.push(l.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()}},t={};function l(a){var n=t[a];if(void 0!==n)return n.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,l),s.exports}l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l(64)}();