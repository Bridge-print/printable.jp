!function(){"use strict";!function(){var e=window.wp.i18n,t=window.wp.blocks,c=window.wp.blockEditor,n="function"==typeof c.useInnerBlocksProps?c.useInnerBlocksProps:c.__experimentalUseInnerBlocksProps,o=JSON.parse('{"u2":"loos/ab-test-a"}'),l=React.createElement("svg",{viewBox:"0 0 56 56"},React.createElement("path",{d:"M31.2,33h-6.4l-1.2,3.6h-3.8L26,19.4h4.1l6.1,17.3h-3.9L31.2,33z M30.1,30.1L28,23.2L25.8,30C25.8,30,30.1,30,30.1,30.1z"}),React.createElement("path",{d:"M49,7v42H7V7H49 M5,4C4.4,4,4,4.4,4,5v46c0,0.6,0.4,1,1,1h46c0.6,0,1-0.4,1-1V5c0-0.6-0.4-1-1-1H5z"}));const s="swell-block-abTest",a=[["core/paragraph"]];(0,t.registerBlockType)(o.u2,{title:(0,e.__)("Aブロック","swell"),icon:l,edit:()=>{const e=(0,c.useBlockProps)({className:`${s}__a ${s}__body swl-inner-blocks u-block-guide`}),t=n(e,{template:a,templateLock:!1});return React.createElement("div",t)},save:()=>React.createElement(c.InnerBlocks.Content,null)})}()}();