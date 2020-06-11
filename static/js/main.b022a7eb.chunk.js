(this["webpackJsonpreact-datagrid"]=this["webpackJsonpreact-datagrid"]||[]).push([[0],{1307:function(e,t,a){},1308:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),c=a(23),l=a(1355),s=a(33),u=a(127),d=a(128),m=a.n(d),f=a(20),p=a(12),h={virtualizationState:!0,hiddenColumns:{name:!1,score:!1,registerDate:!1,lastVisit:!1}},S={filterKey:"",filterValue:"",filterGlobalValue:"",filterToggleState:0,filterEnums:[],isFiltering:!1,searchPopupName:""},b={sortKeys:[],directions:[],isSortPending:!1},y={data:[],selectedItems:[],isPending:!1,error:null},g=function(e){return e.data},E=function(e){return e.isPending},v=function(e){return e.error},k=Object(s.combineReducers)({appState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VIRTUALIZATION":return Object(p.a)({},e,{virtualizationState:t.payload});case"SET_HIDDEN_COLUMNS":return Object(p.a)({},e,{hiddenColumns:Object(p.a)({},e.hiddenColumns,Object(f.a)({},t.payload.fieldName,t.payload.hiddenState))});default:return e}},dataState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DATA_PENDING":return Object(p.a)({},e,{isPending:!0,error:null});case"FETCH_DATA_SUCCESS":return Object(p.a)({},e,{data:t.payload,isPending:!1,error:null});case"FETCH_DATA_ERROR":return Object(p.a)({},e,{isPending:!1,error:t.payload});case"SET_SELECT_ROW":return Object(p.a)({},e,{selectedItems:t.payload});case"DELETE_ROWS":return Object(p.a)({},e,{selectedItems:t.payload.selectedItems,data:t.payload.data});default:return e}},filterState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_DATA_REQUEST":return Object(p.a)({},e,{filterValue:t.payload,isFiltering:!0});case"SEARCH_DATA_SUCCESS":return Object(p.a)({},e,{filterKey:t.payload.filterKey,filterValue:t.payload.filterValue,isFiltering:!1});case"SEARCH_POPUP":return Object(p.a)({},e,{searchPopupName:t.payload});case"TOGGLE_STATE":return Object(p.a)({},e,{filterToggleState:t.payload});case"SET_ENUM_FILTER_PENDING":return Object(p.a)({},e,{isFiltering:!0});case"SET_ENUM_FILTER_SUCCESS":return Object(p.a)({},e,{filterEnums:t.payload,isFiltering:!1});case"GLOBAL_SEARCH_PENDING":return Object(p.a)({},e,{isFiltering:!0});case"GLOBAL_SEARCH_SUCCESS":return Object(p.a)({},e,{filterGlobalValue:t.payload,isFiltering:!1});default:return e}},sortState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SORT_PENDING":return Object(p.a)({},e,{isSortPending:!0});case"SET_SORT_SUCCESS":return Object(p.a)({},e,{},t.payload,{isSortPending:!1});default:return e}}}),O=a(129),C=a(18),T=a(132),A=a.n(T),j=1e3,N=3e3,x=1e4,w=40,P=["Admin","Student","Mentor","Worker"],I="hidden",_="avatar",D="text",R="object",V="number",L="boolean",H="date",W={0:{name:"id",title:"",columnWidth:"50px",isHidden:!0,dataType:I,leftPosition:0,sticky:!0},1:{name:"avatar",title:"",columnWidth:"45px",dataType:_,leftPosition:50,sticky:!0},2:{name:"name",title:"Name",columnWidth:150,dataType:D,leftPosition:95,sticky:!0,isSortable:!0,isSearchable:!0},3:{name:"score",title:"Score",columnWidth:120,dataType:V,isSortable:!0,isSearchable:!0},4:{name:"registerDate",title:"Reg Date",columnWidth:150,dataType:D,isSortable:!0,isSearchable:!0},5:{name:"lastVisit",title:"Last Visit",columnWidth:150,dataType:D,isSortable:!0},6:{name:"type",title:"Person Type",columnWidth:100,dataType:D},7:{name:"instant",title:"Instant",columnWidth:150,dataType:H},8:{name:"money",title:"Money",columnWidth:100,dataType:R},9:{name:"active",title:"Active",columnWidth:70,dataType:L},10:{name:"description",title:"Description",columnWidth:350,dataType:D,largeText:!0}},F=[u.a,m.a],G=function(){var e=window.location.search,t={};if(e&&e.startsWith("?"))return e.substr(1).split("&").forEach((function(e){var a=e.split("="),n=Object(C.a)(a,2),r=n[0],i=n[1];t[r]="filterEnums"===r?i.split(","):i})),{sortState:Object(p.a)({},b),filterState:Object(p.a)({},S,{},t)}}(),B=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),z=Object(s.createStore)(k,G||B,Object(O.composeWithDevTools)(s.applyMiddleware.apply(void 0,F)));z.subscribe(A()((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){}}({appState:z.getState().appState,filterState:z.getState().filterState,sortState:z.getState().sortState})}),1e3));var U=a(17),M=a(29),K=a.n(M),$=a(134),J=a.n($),Q=j,Z=N,q=x,X=function(){return{id:K.a.random.uuid(),avatar:K.a.image.avatar(),name:K.a.internet.userName(),score:K.a.random.number(Z),registerDate:K.a.date.recent().toLocaleDateString(),lastVisit:K.a.date.weekday(),type:P[Math.floor(10*Math.random()%P.length)],instant:(new Date).getTime(),money:{currencySymbol:K.a.finance.currencySymbol(),amount:K.a.random.number(q)},active:!(Math.floor(10*Math.random())%2),description:K.a.lorem.paragraph()}},Y=function(e,t){return e.filter((function(e){return a=e,n=t,!!Object.keys(a).filter((function(e){return"id"!==e&&a[e].toString().toLowerCase().includes(n.toLowerCase())})).length;var a,n}))},ee=a(145),te=a(135),ae=a.n(te),ne=a(93),re=a.n(ne),ie=Object(ee.a)({palette:{secondary:ae.a},text:{light:re.a[100]},color:{grayed:re.a[100]}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=a(1348),ce=a(1343),le=a(1352),se="asc",ue="desc",de=a(94),me=a(1361),fe=a(1346),pe=a(1360),he=a(1310),Se=a(1347),be=a(73),ye=a.n(be),ge=a(91),Ee=a.n(ge),ve=function(e){var t=e.filterGlobalValue,a=e.setFilterGlobalAction,i=Object(n.useState)(t),o=Object(C.a)(i,2),c=o[0],l=o[1];Object(n.useEffect)((function(){l(t)}),[t]);var s=Object(n.useCallback)(Ee()((function(e){a(e)}),500),[]);return r.a.createElement(ce.a,{container:!0,item:!0},r.a.createElement(fe.a,{fullWidth:!0,variant:"outlined"},r.a.createElement(pe.a,{htmlFor:"outlined-input-search"},"Search..."),r.a.createElement(me.a,{id:"outlined-input-search",value:c,onChange:function(e){var t=e.currentTarget.value;l(t),s(t)},endAdornment:r.a.createElement(Se.a,{position:"end"},r.a.createElement(he.a,{"aria-label":"global search",edge:"end"},r.a.createElement(ye.a,null))),labelWidth:70})))};ve.defaultProps={filterGlobalValue:""};var ke=a(147),Oe=a(136),Ce=Object(oe.a)((function(e){return{root:{color:e.palette.primary.contrastText}}})),Te=Object(Oe.a)(),Ae=P.map((function(e){return{value:e,label:e}})),je=function(e){var t=e.filterEnums,a=e.setEnumFilterAction,n=Ce(),i=t.map((function(e){return{value:e,label:e}}));return r.a.createElement(ce.a,{container:!0,item:!0},r.a.createElement(ce.a,{item:!0,xs:12},r.a.createElement(de.a,{variant:"overline",gutterBottom:!0},"Person type")),r.a.createElement(ce.a,{item:!0,xs:12,className:n.root},r.a.createElement(ke.a,{defaultValue:i,closeMenuOnSelect:!1,components:Te,isMulti:!0,options:Ae,onChange:function(e){var t=e?e.map((function(e){return e.value})):[];a(t)}})))};je.defaultProps={filterEnums:[]};var Ne=a(1349),xe=a(1350),we=Object(oe.a)((function(e){return{root:{},switchBase:{"&$checked":{color:e.palette.common.white,"& + $track":{backgroundColor:"#52d869",opacity:1}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},track:{},checked:{},thumb:{},focusVisible:{}}})),Pe=function(e){var t=e.filterToggleState,a=e.setToggleAction,n=we(),i=function(e){var t=e.currentTarget,n=t.value,r=t.checked;a(+n,!r)};return r.a.createElement(ce.a,{container:!0,item:!0},r.a.createElement(ce.a,{item:!0,sm:12},r.a.createElement(de.a,{variant:"overline",gutterBottom:!0},"Activity")),r.a.createElement(ce.a,{container:!0,item:!0,sm:12},r.a.createElement(ce.a,{item:!0,xs:6,sm:12,md:12,lg:6},r.a.createElement(Ne.a,{control:r.a.createElement(xe.a,{value:1,classes:{switchBase:n.switchBase,thumb:n.thumb,track:n.track,checked:n.checked},checked:1===t,onChange:i}),label:"Active"})),r.a.createElement(ce.a,{item:!0,xs:6,sm:12,md:12,lg:6},r.a.createElement(Ne.a,{control:r.a.createElement(xe.a,{value:2,checked:2===t,classes:{switchBase:n.switchBase,thumb:n.thumb,track:n.track,checked:n.checked},onChange:i}),label:"Inactive"}))))},Ie=Object(oe.a)({filterContainer:{}}),_e=Object(c.b)((function(e){return{filterState:e.filterState}}),(function(e){return{setToggleAction:function(t,a){return e(function(e,t){return function(a,n){var r=n().filterState.filterToggleState;r&&r===e?t&&a({type:"TOGGLE_STATE",payload:0}):a({type:"TOGGLE_STATE",payload:e})}}(t,a))},setEnumFilterAction:function(t){return e(function(e){return function(t){t({type:"SET_ENUM_FILTER_PENDING"}),setTimeout((function(){t({type:"SET_ENUM_FILTER_SUCCESS",payload:e})}),500)}}(t))},setFilterGlobalAction:function(t){return e(function(e){return function(t){t({type:"GLOBAL_SEARCH_PENDING"}),setTimeout((function(){t({type:"GLOBAL_SEARCH_SUCCESS",payload:e})}),500)}}(t))}}}))((function(e){var t=e.filterState,a=e.setToggleAction,n=e.setEnumFilterAction,i=e.setFilterGlobalAction,o=Ie();return r.a.createElement(ce.a,{container:!0,spacing:3,className:o.filterContainer},r.a.createElement(ce.a,{item:!0},r.a.createElement(de.a,{variant:"h6",gutterBottom:!0,style:{textTransform:"uppercase"}},"Filter Data")),r.a.createElement(ve,{filterGlobalValue:t.filterGlobalValue,setFilterGlobalAction:i}),r.a.createElement(je,{filterEnums:t.filterEnums,setEnumFilterAction:n}),r.a.createElement(Pe,{filterToggleState:t.filterToggleState,setToggleAction:a}))})),De=a(50),Re=Object(De.a)([function(e){return e.dataState&&e.dataState.data},function(e){return e.filterState}],(function(e,t){return t?function(e,t,a,n,r,i){var o=Object(U.a)(e);return t&&(o=function(e,t,a){return e.filter((function(e){return e[t].toString().toLowerCase().includes(a.toLowerCase())}))}(o,t,a)),n&&(o=Y(o,n)),i.length&&(o=function(e,t){return e.filter((function(e){return t.includes(e.type)}))}(o,i)),r&&(o=function(e,t){return e.filter((function(e){return e.active&&1===t||!e.active&&1!==t}))}(o,r)),o}(e,t.filterKey,t.filterValue,t.filterGlobalValue,t.filterToggleState,t.filterEnums):e})),Ve=Object(De.a)([Re,function(e){return e.sortState}],(function(e,t){var a,n,r;return t&&t.sortKeys.length?(a=e,n=t.sortKeys,r=t.directions,J()(a,n,r)):e})),Le=a(2),He=a(1365),We=a(1354),Fe=Object(De.a)([Ve,function(e){return e.appState&&e.appState.hiddenColumns}],(function(e,t){return e.map((function(e){var a={};return Object.keys(e).forEach((function(n,r){W[r].isHidden||t[n]||("object"===typeof e[n]?a[n]=Object.values(e[n]).join(" "):a[n]=e[n])})),a}))})),Ge=a(1351),Be=a(139),ze=a.n(Be),Ue=a(138),Me=function(e){var t=e.csvData;return r.a.createElement(ce.a,{item:!0},r.a.createElement(Ue.CSVLink,{className:"csv-link",data:t,filename:"data-grid.csv",target:"_blank",style:{textDecoration:"none"}},r.a.createElement(Ge.a,{variant:"outlined",startIcon:r.a.createElement(ze.a,null)},"Export to CSV")))};Me.defaultProps={csvData:[]};var Ke=Object(c.b)((function(e){return{csvData:Fe(e)}}))(Me),$e=function(e){var t=e.virtualizationState,a=e.setVirtualizationAction;return r.a.createElement(ce.a,{item:!0},r.a.createElement(Ne.a,{control:r.a.createElement(xe.a,{checked:t,onChange:function(e){var t=e.currentTarget.checked;a(t)}}),label:"Virtualization"}))};$e.defaultProps={virtualizationState:!1,setVirtualizationAction:void 0};var Je=a(140),Qe=a.n(Je),Ze=function(e){var t=e.selectionState,a=e.deleteRowsAction;return r.a.createElement(ce.a,{item:!0},r.a.createElement(Ge.a,{variant:"outlined",color:"secondary",disabled:!t,onClick:a,startIcon:r.a.createElement(Qe.a,null)},"Delete selected rows"))};Ze.defaultProps={selectionState:!1,deleteRowsAction:void 0};var qe=a(1358),Xe=a(146),Ye=a(141),et=a.n(Ye),tt=a(1364),at=function(e){var t=e.hiddenColumns,a=e.setVisibilityAction,i=Object(n.useState)(null),o=Object(C.a)(i,2),c=o[0],l=o[1],s=Boolean(c);return r.a.createElement(ce.a,{item:!0},r.a.createElement(he.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)}},r.a.createElement(et.a,null)),r.a.createElement(Xe.a,{anchorEl:c,keepMounted:!0,open:s,onClose:function(){l(null)}},Object.keys(t).map((function(e){return r.a.createElement(tt.a,{key:e},r.a.createElement(Ne.a,{control:r.a.createElement(qe.a,{checked:!t[e],onChange:function(t){return function(e,t){var n=e.currentTarget.checked;a(t,!n)}(t,e)}}),label:e}))}))))};at.defaultProps={hiddenColumns:{},setVisibilityAction:void 0};var nt=a(1353),rt=a(142),it=a.n(rt),ot=function(){return r.a.createElement(ce.a,{item:!0},r.a.createElement(nt.a,{href:"?filterEnums=Mentor&filterGlobalValue=Man"},r.a.createElement(Ge.a,{variant:"outlined",startIcon:r.a.createElement(it.a,null)},"QueryString")))},ct=Object(oe.a)((function(e){return{sticky:{position:"sticky",top:0,left:0,zIndex:11},settingsContainer:{padding:e.spacing(1),paddingLeft:e.spacing(2),backgroundColor:"#ffffff"}}})),lt=function(e){var t=e.appState,a=e.dataState,n=e.setVirtualizationAction,i=e.deleteRowsAction,o=e.setVisibilityAction,c=ct();return r.a.createElement(ce.a,{container:!0,item:!0,justify:"space-between",className:Object(Le.a)(c.sticky,c.settingsContainer)},r.a.createElement(ce.a,{container:!0,item:!0,alignItems:"center",xs:12,sm:12,md:6,spacing:2},r.a.createElement(Ze,{selectionState:!!a.selectedItems.length,deleteRowsAction:i}),r.a.createElement($e,{virtualizationState:t.virtualizationState,setVirtualizationAction:n})),r.a.createElement(ce.a,{container:!0,item:!0,alignItems:"center",justify:"flex-end",xs:12,sm:12,md:6,spacing:1},r.a.createElement(ot,null),r.a.createElement(Ke,null),r.a.createElement(at,{hiddenColumns:t.hiddenColumns,setVisibilityAction:o})))};lt.defaultProps={setVirtualizationAction:void 0,deleteRowsAction:void 0,setVisibilityAction:void 0};var st=Object(c.b)((function(e){return{appState:e.appState,dataState:e.dataState}}),(function(e){return{setVirtualizationAction:function(t){return e(function(e){return function(t){t({type:"SET_VIRTUALIZATION",payload:e})}}(t))},deleteRowsAction:function(){return e((function(e,t){var a=t().dataState,n=a.selectedItems;e({type:"DELETE_ROWS",payload:{selectedItems:[],data:a.data.filter((function(e){return!n.includes(e.id)}))}})}))},setVisibilityAction:function(t,a){return e(function(e,t){return function(a){a({type:"SET_HIDDEN_COLUMNS",payload:{fieldName:e,hiddenState:t}})}}(t,a))}}}))(lt),ut=function(e,t){return function(a,n){var r=n().sortState,i=r.sortKeys,o=r.directions;a({type:"SET_SORT_PENDING"}),setTimeout((function(){var n=function(e,t,a,n){var r=Object(U.a)(a),i=Object(U.a)(n),o=r.indexOf(e);return!t&&(0!==o&&r.length>0||0===o&&r.length>1)&&(r.length=0,i.length=0),o<0?(r.push(e),i.push(se)):i[o]===se?i[o]=ue:(r.splice(o,1),i.splice(o,1)),{sortKeys:r,directions:i}}(e,t,i,o);a({type:"SET_SORT_SUCCESS",payload:n})}),700)}},dt=a(1356),mt=a(143),ft=a.n(mt),pt=a(144),ht=a.n(pt),St=Object(oe.a)((function(e){return{sortBlock:{flexWrap:"nowrap"},iconSort:{marginLeft:"0.2rem",cursor:"pointer","&:hover":{opacity:"0.5"}},selected:{opacity:function(e){return""===e.sortState?"0.2":"1"},color:function(t){return""===t.sortState?"initial":e.palette.primary.main}},sortOrderText:{fontSize:"0.6rem",color:e.palette.secondary.light}}})),bt=function(e){var t=e.fieldName,a=e.sortState,n=e.sortOrder,i=e.setSortParamsAction,o=ue,c=St({sortState:a}),l=function(e){var a=e.shiftKey;i(t,a)};return r.a.createElement(ce.a,{container:!0,item:!0,alignItems:"center",className:c.sortBlock},a!==o&&r.a.createElement(ft.a,{"aria-label":"sort ascending",size:"small",className:"".concat(c.iconSort," ").concat(c.selected),onClick:l}),a===o&&r.a.createElement(ht.a,{"aria-label":"sort ascending",size:"small",className:"".concat(c.iconSort," ").concat(c.selected),onClick:l}),-1!==n&&r.a.createElement(dt.a,{component:"span",className:c.sortOrderText},n+1))};bt.defaultProps={sortState:"",sortOrder:-1,setSortParamsAction:void 0};var yt=a(1357),gt=Object(oe.a)((function(e){return{searchContainer:{position:"relative"},searchPopup:{position:"absolute",bottom:"-110px",right:"0",width:"200px",padding:"7px",borderRadius:"2px",backgroundColor:e.color.grayed,boxShadow:"0 0 5px 2px #a0a0b3",zIndex:"20"},activeSearch:{color:e.palette.secondary.light},inputRoot:{"& .MuiOutlinedInput-root":{"& input":{backgroundColor:e.palette.grey[50],padding:"10px"}}},buttonsBlock:{padding:"10px"}}})),Et=function(e){var t=e.fieldName,a=e.filterKey,i=e.filterValue,o=e.searchPopupName,c=e.setFilterDataAction,l=e.setSearchPopupAction,s=Object(n.useState)(!1),u=Object(C.a)(s,2),d=u[0],m=u[1],f=Object(n.useState)({value:"",isActive:!1}),h=Object(C.a)(f,2),S=h[0],b=h[1],y=gt();Object(n.useEffect)((function(){t===o?(m(!0),t===a&&b({value:i,isActive:!!i})):m(!1)}),[t,a,i,o]);return r.a.createElement(ce.a,{container:!0,item:!0,justify:"flex-end",className:y.searchContainer},d&&r.a.createElement(ce.a,{container:!0,className:y.searchPopup},r.a.createElement(yt.a,{variant:"outlined",placeholder:"Search value",value:S.value,onChange:function(e){b(Object(p.a)({},S,{value:e.currentTarget.value}))},className:y.inputRoot}),r.a.createElement(ce.a,{container:!0,item:!0,justify:"space-between",spacing:1,className:y.buttonsBlock},r.a.createElement(Ge.a,{variant:"contained",onClick:function(){c(t,S.value),l("")}},"Search"),r.a.createElement(Ge.a,{variant:"contained",onClick:function(){c(t,""),l("")}},"Reset"))),r.a.createElement(he.a,{"aria-label":"search icon",size:"small",onClick:function(){l(t===o?"":t)}},r.a.createElement(ye.a,{size:"inherit",className:Object(Le.a)(t===a&&i&&y.activeSearch)})))};Et.defaultProps={fieldName:"fieldName",filterKey:"",filterValue:"",searchPopupName:""};var vt=Object(oe.a)({headerDataCell:{padding:"0 5px",flexWrap:"nowrap"},titleContainer:{flexWrap:"nowrap"},cellTitle:{userSelect:"none",whiteSpace:"nowrap",textTransform:"uppercase"},sticky:{position:"sticky",top:0,left:0,backgroundColor:"#ffffff",zIndex:"11"},bordered:{borderRight:"1px solid #bfbfbf"}}),kt=function(e){var t=e.title,a=e.isSortable,n=e.isSearchable,i=e.fieldName,o=e.sortState,c=e.sortOrder,l=e.setSortParamsAction,s=e.filterKey,u=e.filterValue,d=e.searchPopupName,m=e.setFilterDataAction,f=e.setSearchPopupAction,p=e.isHidden,h=e.isSticky,S=e.style,b=vt();return p?null:r.a.createElement(ce.a,{container:!0,item:!0,alignItems:"center",className:Object(Le.a)(b.headerDataCell,h&&b.sticky,"Name"===t&&b.bordered),style:S},r.a.createElement(ce.a,{container:!0,item:!0,alignItems:"center",className:b.titleContainer},t&&r.a.createElement(de.a,{variant:"body2",className:b.cellTitle},t),a&&r.a.createElement(bt,{fieldName:i,sortState:o,sortOrder:c,setSortParamsAction:l})),n&&r.a.createElement(Et,{fieldName:i,filterKey:s,filterValue:u,searchPopupName:d,setFilterDataAction:m,setSearchPopupAction:f}))};kt.defaultProps={title:"CellTitle",fieldName:"",sortState:"",sortOrder:-1,isSortable:!1,isSearchable:!1,setSortParamsAction:void 0,filterKey:"",filterValue:"",searchPopupName:"",setFilterDataAction:void 0,setSearchPopupAction:void 0,isHidden:!1,isSticky:!1,style:""};var Ot=Object(oe.a)((function(e){return{sticky:{position:"sticky",top:0,left:0,zIndex:"11"},headerTable:{flexShrink:"0",flexWrap:"nowrap",height:e.spacing(5),width:"fit-content",backgroundColor:"#ffffff"}}})),Ct=Object(c.b)((function(e){return{appState:e.appState,sortState:e.sortState,filterState:e.filterState}}),(function(e){return{setSortParamsAction:function(t,a){return e(ut(t,a))},setSearchPopupAction:function(t){return e(function(e){return function(t){t({type:"SEARCH_POPUP",payload:e})}}(t))},setFilterDataAction:function(t,a){return e(function(e,t){return function(a){a({type:"SEARCH_DATA_REQUEST",payload:t}),setTimeout((function(){a({type:"SEARCH_DATA_SUCCESS",payload:{filterKey:e,filterValue:t}})}),500)}}(t,a))}}}))((function(e){var t=e.appState,a=e.sortState,n=e.filterState,i=e.setSortParamsAction,o=e.setSearchPopupAction,c=e.setFilterDataAction,l=Ot();return r.a.createElement(ce.a,{container:!0,item:!0,className:Object(Le.a)(l.headerTable,l.sticky)},Object.keys(W).map((function(e){return r.a.createElement(kt,{key:e,title:W[e].title,fieldName:W[e].name,sortState:a.directions[a.sortKeys.indexOf(W[e].name)],sortOrder:a.sortKeys.indexOf(W[e].name),isSortable:W[e].isSortable,isSearchable:W[e].isSearchable,setSortParamsAction:i,filterKey:n.filterKey,filterValue:n.filterValue,searchPopupName:n.searchPopupName,setSearchPopupAction:o,setFilterDataAction:c,isHidden:t.hiddenColumns[W[e].name],isSticky:W[e].sticky,style:{width:W[e].columnWidth,left:W[e].leftPosition}})})))})),Tt=a(1363),At=Object(oe.a)((function(e){return{avatarBlock:{padding:"5px"},smallImage:{width:e.spacing(4),height:e.spacing(4)},sticky:{backgroundColor:"#ffffff"}}})),jt=function(e){var t=e.imageUrl,a=e.className,n=e.style,i=At();return r.a.createElement(ce.a,{container:!0,alignItems:"center",className:Object(Le.a)(i.avatarBlock,a,"sticky"===a&&i.sticky),style:n},r.a.createElement(Tt.a,{className:i.smallImage,alt:"avatar image",src:t}))};jt.defaultProps={imageUrl:"",className:"",style:""};var Nt=Object(oe.a)({textBlock:{padding:"5px"},numberCell:{justifyContent:"flex-end",color:"#319781"},cellText:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},sticky:{backgroundColor:"#ffffff",borderRight:"1px solid #bfbfbf"}}),xt=function(e){var t=e.dataContent,a=e.isNumber,n=e.isHidden,i=e.className,o=e.style,c=Nt();return n?null:r.a.createElement(ce.a,{container:!0,alignItems:"center",className:Object(Le.a)(c.textBlock,i,"sticky"===i&&c.sticky,a&&c.numberCell),style:o},r.a.createElement(de.a,{variant:"body1",className:c.cellText},t))};xt.defaultProps={dataContent:"",isNumber:!1,isHidden:!1,className:"",style:""};var wt=Object(oe.a)({flagBlock:{padding:"5px"},flagState:{width:"15px",height:"15px",borderRadius:"50%",backgroundColor:"#d4a19f"},active:{backgroundColor:"#377ce4"}}),Pt=function(e){var t=e.flagState,a=e.style,n=wt();return r.a.createElement(ce.a,{container:!0,justify:"center",alignItems:"center",className:n.flagBlock,style:a},r.a.createElement(dt.a,{component:"div",className:"".concat(n.flagState," ").concat(t?n.active:"")}))};Pt.defaultProps={flagState:!1,style:""};var It=Object(oe.a)({objectBlock:{padding:"5px",color:"#5050e6"},spanItem:{margin:"0 2px"}}),_t=function(e){var t=e.data,a=e.style,n=It();return r.a.createElement(ce.a,{container:!0,justify:"flex-end",alignItems:"center",className:n.objectBlock,style:a},Object.keys(t).map((function(e){return r.a.createElement(dt.a,{component:"span",key:e,className:n.spanItem},t[e])})))};_t.defaultProps={data:{},style:""};var Dt=Object(oe.a)((function(e){return{selectBlock:{padding:"5px",position:"relative"},sticky:{backgroundColor:e.palette.common.white},indexText:{position:"absolute",left:0,top:0,fontSize:"0.65rem",color:e.palette.primary.light}}})),Rt=function(e){var t=e.index,a=e.selectState,n=e.id,i=e.className,o=e.style,c=e.setSelectionAction,l=Dt();return r.a.createElement(ce.a,{container:!0,justify:"center",className:Object(Le.a)(l.selectBlock,i,"sticky"===i&&l.sticky),style:o},void 0!==t&&r.a.createElement(dt.a,{component:"span",className:l.indexText},"index: ",t),r.a.createElement(qe.a,{checked:a,onChange:function(){c(n)},inputProps:{"aria-label":"selected checkbox"}}))};Rt.defaultProps={index:void 0,selectState:!1,className:"",setSelectionAction:void 0,style:""};var Vt=Object(oe.a)((function(e){return{rowItem:{flexShrink:"0",flexWrap:"nowrap",position:"relative",height:e.spacing(6),width:"fit-content",backgroundColor:e.palette.common.white,borderTop:"1px solid #efefef","&:hover":{backgroundColor:e.color.grayed}},selectedItem:{backgroundColor:e.color.grayed},renderText:{position:"absolute",bottom:"0",left:0,fontSize:"0.65rem",color:e.palette.secondary.light,zIndex:10}}})),Lt=r.a.memo((function(e){var t=e.index,a=e.item,i=e.style,o=e.isSelected,c=e.hiddenColumns,l=e.setSelectionAction,s=Vt(),u=Object(n.useRef)(0);return r.a.createElement(ce.a,{container:!0,item:!0,className:Object(Le.a)(s.rowItem,"row-item",o&&["selected-item",s.selectedItem]),style:i},r.a.createElement("div",{className:s.renderText},"renders: ",u.current++),Object.keys(W).map((function(e){return function(e){var n=W[e].name,i=W[e].columnWidth;switch(W[e].dataType){case I:return r.a.createElement(Rt,{key:"".concat(e,"-").concat(n),index:t,className:"sticky",selectState:o,id:a.id,style:{width:i,left:W[e].leftPosition},setSelectionAction:l});case _:return r.a.createElement(jt,{key:"".concat(e,"-").concat(n),className:"sticky",imageUrl:a[n],style:{width:i,left:W[e].leftPosition}});case D:return r.a.createElement(xt,{key:"".concat(e,"-").concat(n),className:"name"===n?"sticky":"",dataContent:a[n],style:{width:i,left:"name"===n?W[e].leftPosition:"auto"},isHidden:c[n]});case V:return r.a.createElement(xt,{key:"".concat(e,"-").concat(n),dataContent:a[n],isNumber:!0,style:{width:i},isHidden:c[n]});case H:return r.a.createElement(xt,{key:"".concat(e,"-").concat(n),dataContent:new Date(a[n]).toLocaleDateString(),style:{width:i},isHidden:c[n]});case L:return r.a.createElement(Pt,{key:"".concat(e,"-").concat(n),flagState:a[n],style:{width:i}});case R:return r.a.createElement(_t,{key:"".concat(e,"-").concat(n),data:a[n],style:{width:i}});default:return r.a.createElement(xt,{key:"".concat(e,"-").concat(n),dataContent:"some item"})}}(e)})))}),(function(e,t){return e.isSelected===t.isSelected&&e.hiddenColumns===t.hiddenColumns&&e.style.top===t.style.top}));Lt.defaultProps={index:void 0,item:{},isSelected:!1,hiddenColumns:{},setSelectionAction:void 0,style:{}};var Ht=function(e){var t=e.dataLength,a=e.rowHeight,i=e.headerHeight,o=e.stickyHeader,c=e.className,l=e.renderItem,s=e.boundaryItems,u=t*a+i,d=Object(n.useState)(0),m=Object(C.a)(d,2),f=m[0],p=m[1],h=Object(n.useState)(Math.floor(window.innerHeight/a)),S=Object(C.a)(h,2),b=S[0],y=S[1],g=Object(n.useRef)(null),E=Object(n.useCallback)((function(){var e=g.current.scrollTop;(f<e?e-f:f-e)>3*a&&p(e)}),[a,f]);Object(n.useEffect)((function(){var e=function(){var e=g.current.clientHeight,t=Math.floor(e/a);b!==t&&y(t)};return window.addEventListener("scroll",E),window.addEventListener("resize",e),function(){window.removeEventListener("scroll",E),window.removeEventListener("resize",e)}}),[b,a,E,o]);var v=Math.floor(f/a-s),k=v+b+2*s;return r.a.createElement("div",{ref:g,style:{width:"100%",overflow:"auto",height:"100%"},className:c,onScroll:E},r.a.createElement("div",{style:{height:u,position:"relative",width:"100%"}},o,Array(t).fill(0).map((function(e,t){return t>=v&&t<=k?l(t,{position:"absolute",top:t*a+i}):null}))))};Ht.defaultProps={dataLength:0,rowHeight:0,headerHeight:0,stickyHeader:void 0,className:"",boundaryItems:3};var Wt=Object(oe.a)((function(e){return{contentDataGrid:{flexWrap:"noWrap",flexDirection:"column",height:"100%",width:"100%",boxSizing:"border-box",position:"relative"},tableWrapper:{width:"100%",overflow:"auto",height:"100%"},styledScrollBar:{scrollbarWidth:"thin",scrollbarColor:"".concat(e.palette.primary.light," ").concat(e.color.grayed),"&::-webkit-scrollbar":{width:"10px",height:"10px"},"&::-webkit-scrollbar-track":{backgroundColor:e.color.grayed},"&::-webkit-scrollbar-thumb":{borderRadius:"10px",backgroundColor:e.palette.primary.light,border:"3px solid ".concat(e.color.grayed)}},backDropRoot:{zIndex:"100"}}})),Ft=function(e){var t=e.data,a=e.appState,n=e.dataState,i=e.sortState,o=e.filterState,c=e.isPending,l=e.error,s=e.setSelectionAction,u=Wt();return l?r.a.createElement(ce.a,{container:!0},r.a.createElement(de.a,{variant:"body1"},"Error: ",l.message," (Please, update page)")):c?r.a.createElement(He.a,{open:c,className:u.backDropRoot},r.a.createElement(We.a,null)):r.a.createElement(ce.a,{container:!0,item:!0,className:u.contentDataGrid},r.a.createElement(st,null),a.virtualizationState?r.a.createElement(Ht,{dataLength:t.length,rowHeight:ie.spacing(6),headerHeight:w,stickyHeader:r.a.createElement(Ct,null),className:u.styledScrollBar,renderItem:function(e,i){return r.a.createElement(Lt,{key:t[e].id,index:e,item:t[e],style:i,isSelected:n.selectedItems.includes(t[e].id),hiddenColumns:a.hiddenColumns,setSelectionAction:s})}}):r.a.createElement("div",{className:Object(Le.a)(u.tableWrapper,u.styledScrollBar)},r.a.createElement(Ct,null),t.map((function(e,t){return r.a.createElement(Lt,{key:e.id,index:t,item:e,isSelected:n.selectedItems.includes(e.id),hiddenColumns:a.hiddenColumns,setSelectionAction:s})}))),r.a.createElement(He.a,{open:i.isSortPending||o.isFiltering,className:u.backDropRoot},r.a.createElement(We.a,null)))};Ft.defaultProps={data:[],isPending:!1,error:void 0,setSelectionAction:void 0};var Gt,Bt=Object(c.b)((function(e){return{data:Ve(e),appState:e.appState,dataState:e.dataState,sortState:e.sortState,filterState:e.filterState,isPending:E(e.dataState),fetchedData:g(e.dataState),error:v(e.dataState)}}),(function(e){return{setSelectionAction:function(t){return e(function(e){return function(t,a){var n=Object(U.a)(a().dataState.selectedItems),r=n.indexOf(e);-1!==r?n.splice(r,1):n.push(e),t({type:"SET_SELECT_ROW",payload:n})}}(t))}}}))(Ft),zt=Object(oe.a)({reactDataGrid:{backgroundColor:"#ffffff",height:"100%"}}),Ut=function(){var e=zt();return r.a.createElement(ce.a,{container:!0,item:!0,direction:"column",className:e.reactDataGrid},r.a.createElement(Bt,null))},Mt=a(79),Kt=Object(ee.a)({palette:{primary:{main:Mt.a[100]},secondary:{main:Mt.a[800]},extra:"red",type:"dark"}}),$t=Object(oe.a)((function(e){return{appRoot:{height:"100vh",padding:"20px",boxSizing:"border-box",backgroundColor:"#3f51b508",boxShadow:e.shadows[20],minWidth:"320px"},appWrapper:{height:"100%",width:"100%",overflow:"hidden"},filtersContainer:{padding:"20px 15px",backgroundColor:Kt.palette.secondary.main,color:Kt.palette.primary.main},tableContainer:{backgroundColor:e.color.grayed,padding:"25px 35px",height:"100%"},height100Percent:{height:"100%"}}}));a(1307);z.dispatch((function(e){e({type:"FETCH_DATA_PENDING"}),setTimeout((function(){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q;return Array.from({length:e},(function(){return X()}))}(Gt);e({type:"FETCH_DATA_SUCCESS",payload:t}),t||e({type:"FETCH_DATA_ERROR",payload:"Something went wrong on fetching data..."})}),1e3)})),o.a.render(r.a.createElement(c.a,{store:z},r.a.createElement(l.a,{theme:ie},r.a.createElement((function(){var e=$t();return r.a.createElement(ce.a,{container:!0,className:e.appRoot},r.a.createElement(le.a,{elevation:5,className:e.appWrapper},r.a.createElement(ce.a,{container:!0,className:e.height100Percent},r.a.createElement(l.a,{theme:Kt},r.a.createElement(ce.a,{container:!0,item:!0,direction:"column",xs:12,sm:3,md:2,className:e.filtersContainer},r.a.createElement(_e,null))),r.a.createElement(ce.a,{container:!0,item:!0,xs:12,sm:9,md:10,className:e.tableContainer},r.a.createElement(Ut,null)))))}),null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},159:function(e,t,a){e.exports=a(1308)}},[[159,1,2]]]);
//# sourceMappingURL=main.b022a7eb.chunk.js.map