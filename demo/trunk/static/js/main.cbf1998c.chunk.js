(this["webpackJsonpdwv-react"]=this["webpackJsonpdwv-react"]||[]).push([[0],{105:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var s=a(7),o=a(0),n=a.n(o),r=a(11),i=a.n(r),d=(a(97),a(182)),l=a(76),c=a(181),h=a(74),p=a.n(h),v=a(75),g=a.n(v),u=(a(98),a(64)),m=a(5),j=a(80),b=a(178),w=a(177),x=a(77),f=a(188),O=a(180),D=a(72),C=a.n(D),E=a(174),L=a(73),N=a.n(L),y=a(187),k=a(179),P=a(176),S=a(175),T=a(168),A=a(183),B=a(71),M=a.n(B),I=a(169),H=a(173),R=a(172),W=a(170),z=a(171),F=a(186);class V extends n.a.Component{constructor(e){super(e),this.handleChangePage=(e,t)=>{this.setState({page:t})},this.handleChangeRowsPerPage=e=>{this.setState({page:0,rowsPerPage:e.target.value})},this.state={data:this.props.data,displayData:this.props.data,searchfor:"",page:0,rowsPerPage:10},this.filterList=this.filterList.bind(this)}filterList(e){var t=e.target.value,a=t.toLowerCase(),s=this.state.data.filter((function(e){for(var t in e)if(e.hasOwnProperty(t)){var s=e[t];if("string"!==typeof s&&(s=s.toString()),-1!==s.toLowerCase().indexOf(a))return!0}return!1}));this.setState({searchfor:t,displayData:s})}render(){const e=this.props.classes,t=this.state,a=t.displayData,o=t.searchfor,n=t.rowsPerPage,r=t.page;return Object(s.jsxs)("div",{className:e.container,children:[Object(s.jsx)(A.a,{id:"search",type:"search",value:o,className:e.searchField,onChange:this.filterList,margin:"normal",InputProps:{startAdornment:Object(s.jsx)(T.a,{position:"start",children:Object(s.jsx)(M.a,{})})}}),Object(s.jsxs)(I.a,{className:e.table,children:[Object(s.jsx)(W.a,{children:Object(s.jsxs)(z.a,{children:[Object(s.jsx)(R.a,{children:"Tag"}),Object(s.jsx)(R.a,{children:"Value"})]})}),Object(s.jsx)(H.a,{children:a.slice(r*n,r*n+n).map((t=>Object(s.jsxs)(z.a,{className:e.row,children:[Object(s.jsx)(R.a,{children:t.name}),Object(s.jsx)(R.a,{children:t.value.toString()})]},t.group+t.element)))})]}),Object(s.jsx)(F.a,{component:"div",count:a.length,rowsPerPage:n,page:r,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage})]})}}var G=Object(m.a)((e=>({flex:{flex:1},spacer:{flex:"1 1 100%"},row:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}},searchField:{backgroundColor:"white",marginLeft:20}})))(V),J=(a(105),a(43)),U=a.n(J);U.a.image.decoderScripts={jpeg2000:"".concat("/dwv-react/demo/trunk","/assets/dwv/decoders/pdfjs/decode-jpeg2000.js"),"jpeg-lossless":"".concat("/dwv-react/demo/trunk","/assets/dwv/decoders/rii-mango/decode-jpegloss.js"),"jpeg-baseline":"".concat("/dwv-react/demo/trunk","/assets/dwv/decoders/pdfjs/decode-jpegbaseline.js"),rle:"".concat("/dwv-react/demo/trunk","/assets/dwv/decoders/dwv/decode-rle.js")};const K=n.a.forwardRef(((e,t)=>Object(s.jsx)(P.a,Object(u.a)(Object(u.a)({direction:"up"},e),{},{ref:t}))));class Q extends n.a.Component{constructor(e){super(e),this.onChangeTool=e=>{this.state.dwvApp&&(this.setState({selectedTool:e}),this.state.dwvApp.setTool(e),"Draw"===e&&this.onChangeShape(this.state.tools.Draw.options[0]))},this.onChangeShape=e=>{this.state.dwvApp&&this.state.dwvApp.setDrawShape(e)},this.onReset=e=>{this.state.dwvApp&&this.state.dwvApp.resetDisplay()},this.handleTagsDialogOpen=()=>{this.setState({showDicomTags:!0})},this.handleTagsDialogClose=()=>{this.setState({showDicomTags:!1})},this.handleMenuButtonClick=e=>{this.setState({toolMenuAnchorEl:e.currentTarget})},this.handleMenuClose=e=>{this.setState({toolMenuAnchorEl:null})},this.handleMenuItemClick=e=>{this.setState({toolMenuAnchorEl:null}),this.onChangeTool(e)},this.setupDropbox=e=>{this.showDropbox(e,!0)},this.defaultHandleDragEvent=e=>{e.stopPropagation(),e.preventDefault()},this.onBoxDragOver=e=>{this.defaultHandleDragEvent(e);const t=document.getElementById(this.state.dropboxDivId);t&&-1===t.className.indexOf(this.state.hoverClassName)&&(t.className+=" "+this.state.hoverClassName)},this.onBoxDragLeave=e=>{this.defaultHandleDragEvent(e);const t=document.getElementById(this.state.dropboxDivId);t&&-1!==t.className.indexOf(this.state.hoverClassName)&&(t.className=t.className.replace(" "+this.state.hoverClassName,""))},this.onDrop=e=>{this.defaultHandleDragEvent(e),this.state.dwvApp.loadFiles(e.dataTransfer.files)},this.showDropbox=(e,t)=>{var a;const s=document.getElementById(this.state.dropboxDivId),o=s&&0!==s.offsetHeight,n=null===(a=this.state.dwvApp)||void 0===a?void 0:a.getElement("layerContainer");if(s)if(t&&!o){if(s.className=this.state.dropboxClassName+" "+this.state.borderClassName,""===s.innerHTML){const e=document.createElement("p");e.appendChild(document.createTextNode("Drag and drop data here")),s.appendChild(e)}s.setAttribute("style","visible:true;width:50%;height:75%"),n&&(n.removeEventListener("dragover",this.defaultHandleDragEvent),n.removeEventListener("dragleave",this.defaultHandleDragEvent),n.removeEventListener("drop",this.onDrop)),s.addEventListener("dragover",this.onBoxDragOver),s.addEventListener("dragleave",this.onBoxDragLeave),s.addEventListener("drop",this.onDrop)}else s.className=this.state.dropboxClassName,s.innerHTML="",s.setAttribute("style","visible:false;width:0;height:0"),s.removeEventListener("dragover",this.onBoxDragOver),s.removeEventListener("dragleave",this.onBoxDragLeave),s.removeEventListener("drop",this.onDrop),n&&(n.addEventListener("dragover",this.defaultHandleDragEvent),n.addEventListener("dragleave",this.defaultHandleDragEvent),n.addEventListener("drop",this.onDrop))},this.state={versions:{dwv:U.a.getVersion(),react:n.a.version},tools:{Scroll:{},ZoomAndPan:{},WindowLevel:{},Draw:{options:["Ruler"],type:"factory",events:["drawcreate","drawchange","drawmove","drawdelete"]}},toolNames:[],selectedTool:"Select Tool",loadProgress:0,dataLoaded:!1,dwvApp:null,metaData:[],showDicomTags:!1,toolMenuAnchorEl:null,dropboxDivId:"dropBox",dropboxClassName:"dropBox",borderClassName:"dropBoxBorder",hoverClassName:"hover"}}render(){const e=this.props.classes,t=this.state,a=t.versions,o=(t.tools,t.toolNames),n=t.loadProgress,r=t.dataLoaded,i=t.metaData,d=t.toolMenuAnchorEl,l=o.map((e=>Object(s.jsx)(f.a,{onClick:this.handleMenuItemClick.bind(this,e),value:e,children:e},e)));return Object(s.jsxs)("div",{id:"dwv",children:[Object(s.jsx)(w.a,{variant:"determinate",value:n}),Object(s.jsxs)("div",{className:"button-row",children:[Object(s.jsxs)(b.a,{variant:"contained",color:"primary","aria-owns":d?"simple-menu":null,"aria-haspopup":"true",onClick:this.handleMenuButtonClick,disabled:!r,className:e.button,size:"medium",children:[this.state.selectedTool,Object(s.jsx)(C.a,{className:e.iconSmall})]}),Object(s.jsx)(x.a,{id:"simple-menu",anchorEl:d,open:Boolean(d),onClose:this.handleMenuClose,children:l}),Object(s.jsx)(b.a,{variant:"contained",color:"primary",disabled:!r,onClick:this.onReset,children:"Reset"}),Object(s.jsx)(b.a,{variant:"contained",color:"primary",onClick:this.handleTagsDialogOpen,disabled:!r,className:e.button,size:"medium",children:"Tags"}),Object(s.jsxs)(y.a,{open:this.state.showDicomTags,onClose:this.handleTagsDialogClose,TransitionComponent:K,classes:{paper:e.tagsDialog},children:[Object(s.jsx)(k.a,{className:e.appBar,children:Object(s.jsxs)(S.a,{children:[Object(s.jsx)(E.a,{color:"inherit",onClick:this.handleTagsDialogClose,"aria-label":"Close",children:Object(s.jsx)(N.a,{})}),Object(s.jsx)(j.a,{variant:"h6",color:"inherit",className:e.flex,children:"DICOM Tags"})]})}),Object(s.jsx)(G,{data:i})]})]}),Object(s.jsx)("div",{id:"dropBox"}),Object(s.jsx)("div",{id:"layerGroup0",className:"layerGroup"}),Object(s.jsx)("div",{children:Object(s.jsx)("p",{className:"legend",children:Object(s.jsxs)(j.a,{variant:"caption",children:["Powered by ",Object(s.jsx)(O.a,{href:"https://github.com/ivmartel/dwv",title:"dwv on github",children:"dwv"})," ",a.dwv," and ",Object(s.jsx)(O.a,{href:"https://github.com/facebook/react",title:"react on github",children:"React"})," ",a.react]})})})]})}componentDidMount(){var e=new U.a.App;e.init({dataViewConfigs:{"*":[{divId:"layerGroup0"}]},tools:this.state.tools});let t=null,a=null,s=null,o=null;e.addEventListener("loadstart",(()=>{t=0,a=0,s=0,o=!0,this.showDropbox(e,!1)})),e.addEventListener("loadprogress",(e=>{this.setState({loadProgress:e.loaded})})),e.addEventListener("renderend",(()=>{if(o){o=!1;let t=[];for(const a in this.state.tools)("Scroll"===a&&e.canScroll()||"WindowLevel"===a&&e.canWindowLevel()||"Scroll"!==a&&"WindowLevel"!==a)&&t.push(a);this.setState({toolNames:t}),this.onChangeTool(t[0])}})),e.addEventListener("load",(()=>{this.setState({metaData:U.a.utils.objectToArray(e.getMetaData(0))}),this.setState({dataLoaded:!0})})),e.addEventListener("loadend",(()=>{a&&(this.setState({loadProgress:0}),alert("Received errors during load. Check log for details."),t||this.showDropbox(e,!0)),s&&(this.setState({loadProgress:0}),alert("Load was aborted."),this.showDropbox(e,!0))})),e.addEventListener("loaditem",(()=>{++t})),e.addEventListener("error",(e=>{console.error(e.error),++a})),e.addEventListener("abort",(()=>{++s})),e.addEventListener("keydown",(t=>{e.defaultOnKeydown(t)})),window.addEventListener("resize",e.onResize),this.setState({dwvApp:e}),this.setupDropbox(e),U.a.utils.loadFromUri(window.location.href,e)}}var Z=Object(m.a)((e=>({button:{margin:e.spacing(1)},appBar:{position:"relative"},title:{flex:"0 0 auto"},tagsDialog:{minHeight:"90vh",maxHeight:"90vh",minWidth:"90vw",maxWidth:"90vw"},iconSmall:{fontSize:20}})))(Q);const $=Object(l.a)({typography:{useNextVariants:!0},palette:{primary:p.a,secondary:g.a,type:"light"}});class q extends o.Component{render(){return Object(s.jsxs)(c.a,{theme:$,children:[Object(s.jsx)(d.a,{}),Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(Z,{})})]})}}var X=q;const Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e){navigator.serviceWorker.register(e).then((e=>{e.onupdatefound=()=>{const t=e.installing;t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((e=>{console.error("Error during service worker registration:",e)}))}i.a.render(Object(s.jsx)(X,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/dwv-react/demo/trunk",window.location).origin!==window.location.origin)return;window.addEventListener("load",(()=>{const e="".concat("/dwv-react/demo/trunk","/service-worker.js");Y?(!function(e){fetch(e).then((t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((e=>{e.unregister().then((()=>{window.location.reload()}))})):_(e)})).catch((()=>{console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):_(e)}))}}()},97:function(e,t,a){},98:function(e,t,a){}},[[118,1,2]]]);
//# sourceMappingURL=main.cbf1998c.chunk.js.map