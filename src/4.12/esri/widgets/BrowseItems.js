// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/window dojo/_base/event dojo/_base/kernel dojo/dom-class dojo/dom-style dojo/dom-attr dojo/string dojo/on dojo/aspect dojo/dom dojo/dom-construct dojo/mouse dojo/topic dojo/query dojo/parser dijit/registry dijit/TooltipDialog dijit/popup dojo/promise/all dgrid/Grid dgrid/extensions/Pagination dgrid/extensions/DijitRegistry dgrid/OnDemandGrid dgrid/Selection dgrid/Selector dgrid/Keyboard dgrid/util/touch dstore/Memory dstore/QueryResults dstore/Trackable dstore/legacy/StoreAdapter dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ../portal/Portal ../portal/PortalItem ../portal/PortalQueryResult ../portal/PortalQueryParams ../core/Evented ./BrowseItems/PluginTarget ./BrowseItems/_AppTemplateFiltersMixin ../core/lang ../core/promiseUtils ../config ../request ../geometry/support/webMercatorUtils ../tasks/GeometryService ../geometry/SpatialReference dojo/i18n!./BrowseItems/nls/BrowseItems dojo/NodeList-dom".split(" "),
function(m,n,p,z,f,A,h,t,g,Q,q,l,u,B,c,R,v,S,T,U,C,D,E,V,F,W,X,Y,G,w,H,Z,I,J,K,x,L,aa,y,ba,M,ca,k,r,da,N,ea,fa,ga,O){var P=m([G,H],{idProperty:"id",constructor:function(a){m.safeMixin(this,a)},get:function(a,b){return this.portal.queryItems(new y({query:"id:"+a})).then(function(a){return new L(k.mixin(a,{portal:this.portal}))})},getIdentity:function(a){return a[this.idProperty]},fetchRange:function(a){var b=a.start,d=a.end;a=this.fetch();return new w(a.then(function(a){return a.slice(b,d)}),{totalLength:a.then(function(a){return a.length})})},
fetch:function(){var a,b,d=r.createDeferred();this.query&&this.queryOptions||d.reject("query parameters missing for ItemStore");a="object"===typeof this.query?this.query:{query:c};if(b=this.queryOptions){a=k.mixin(a,{num:b.count,start:(b.start||0)+1});if(b.sort&&b.sort.length){var e=b.sort[0];a=k.mixin(a,{sortField:"created"===e.attribute?"uploaded":e.attribute,sortOrder:e.descending?"desc":"asc"})}b.useExtent&&b.extent&&(a.extent=b.extent)}a=new y(a);this.portal.queryItems(a).then(function(a){d.resolve(a.results)});
return new w(d.promise)}});n={base:"esri-browseitems",button:"esri-button",close:"esri-button esri-close",loader:"esri-loaderthrob",templatePanel:"template-info-panel"};return m([I,J,K,M],{templateString:'\x3cdiv\x3e\x3cdiv class\x3d"top-bar"\x3e\x3cdiv  class\x3d"instructions"\x3e\x3cspan class\x3d"messageLeft hide" data-dojo-attach-point\x3d"messageNodeLeft"\x3e\x3c/span\x3e\x3cspan class\x3d"messageRight hide" data-dojo-attach-point\x3d"messageNodeRight"\x3e\x3c/span\x3e\x3ca tabIndex\x3d"-1" data-dojo-attach-point\x3d"helpLink" class\x3d"esriHelpIcon hide" title\x3d"${i18n.learnMoreConfigurableApps}" href\x3d"#" target\x3d"_blank"\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv data-dojo-attach-point\x3d"_searchBox" class\x3d"searchBar"\x3e\x3cinput tabIndex\x3d"1" placeholder\x3d"${i18n.searchTitle}" class\x3d"esriSearchBox dijitTextBox" type\x3d"search"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"gallery"\x3e\x3cdiv class\x3d"gallery-left  quiet-scroll"\x3e\x3cul class\x3d"filters"\x3e\x3c/ul\x3e\x3c/div\x3e\x3cdiv class\x3d"templates gallery-right"\x3e\x3cp id\x3d"${id}_filterTitle" class\x3d"filter-title hide" data-dojo-attach-point\x3d"filterDescription"\x3e\x3c/p\x3e\x3cdiv id\x3d"${id}_grid"class\x3d"dgrid-autoheight quiet-scroll"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv  class\x3d"${_css.loader}"\x3e\x3c/div\x3e\x3cdiv  data-dojo-attach-point\x3d"infoPanel" class\x3d"${_css.templatePanel}"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
galleryTemplate:"\x3cdiv style\x3d'opacity:1;' class\x3d'grid-item gallery-view'\x3e${item:_formatThumbnail}${item:_formatItemTitle}\x3cp class\x3d\"template-overlay\" style\x3d\"display:none;\"\x3e${i18n.selectDetails}\x3c/p\x3e\x3c/div\x3e",infoPanelTemplate:'\x3cdiv\x3e\x3cdiv class\x3d"template-info-showing"\x3e\x3cdiv class\x3d"thumbnail"\x3e\x3cimg src\x3d"${item:_formatInfoPanelImage}"\x3e\x3c/div\x3e\x3ch4\x3e${item.title}\x3c/h4\x3e\x3cdiv class\x3d"template-info"\x3e\x3cp class\x3d"quiet-scroll"\x3e${item.snippet}\x3c/p\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"panel-actions"\x3e\x3cbutton class\x3d"${_css.button}" id\x3d"on-next"\x3e${i18n.configure}\x3c/button\x3e\x3cbutton class\x3d"${_css.close}" id\x3d"close-panel"\x3e${i18n.close}\x3c/button\x3e\x3c/div\x3e\x3cdiv\x3e',
showInfoPanel:!0,i18n:O,baseClass:n.base,_css:n,postMixInProperties:function(){this.inherited(arguments)},postCreate:function(){this.inherited(arguments);this.self?(this._portal=new x({url:this.portalUrl,self:this.self}),this._init(),this._portal.on("load",this._fetchData.bind(this))):(this._portal=new x({url:this.portalUrl,authMode:"immediate"}),this._portal.load().then(function(a){return this._initializeHelpMap()}.bind(this)).then(function(){this._user=this._portal.user;this._init();this._fetchData()}.bind(this)))},
_init:function(){this._canSearchPublic=this.self?this.self.canSearchPublic:this._portal.canSearchPublic;this.query=k.mixin(this.query||{},{get:function(a){return this[a]&&this[a].length?"("+this[a].join(" OR ")+") ":""},toString:function(){return{query:this.get("groups")+this.get("tags")+this.get("persistentTypekeywords")+this.get("typekeywords")+this.get("types")+this.get("custom")+(this.query||"")+(this.search||"")+' -type:"Attachment"'}}});this.self?this.self.canSearchPublic=!0:this._portal.canSearchPublic=
!0;this.galleryTemplate=this.plugin&&this.plugin.galleryTemplate||this.galleryTemplate;this.infoPanelTemplate=this.plugin&&this.plugin.infoPanelTemplate||this.infoPanelTemplate;if(this.helpLinkUrl=this.plugin&&this.plugin.helpLinkUrl||"")h.set(this.helpLink,"href",this.helpLinkUrl),f.remove(this.helpLink,"hide");c(".templates",this.domNode).addClass("fade");c(".dgrid-footer",this.domNode).addClass("hide")},destroy:function(){this.inherited(arguments);this._grid&&this._grid.destroy();this._img_connect&&
(this._img_connect.remove(),this._img_connect_error.remove());this._queryTimer&&clearTimeout(this._queryTimer);this._grid=this._portal=null},_setItemQueryAttr:function(a){this.itemQuery=a},_setPluginIdAttr:function(a){this.addPlugin(a)},_setMessageAttr:function(a){this.set("messageRight",a)},_setMessageRightAttr:function(a){h.set(this.messageNodeRight,"innerHTML",a);f.remove(this.messageNodeRight,"hide")},_setMessageLeftAttr:function(a){h.set(this.messageNodeLeft,"innerHTML",a);f.remove(this.messageNodeLeft,
"hide")},_setDisabledAttr:function(a){v.findWidgets(this.domNode).concat(v.findWidgets(this._content)).forEach(function(b){b.set("disabled",a)});f[a?"add":"remove"](this._interval.domNode,"dijitTextBoxDisabled")},_setSortAttr:function(a){this.sortAttribute=a},_setSortDescendingAttr:function(a){this.sortDescending=a},_getSelectionAttr:function(){var a=this._grid.selection,b;for(b in a)if(a.hasOwnProperty(b))break;return b&&this._grid.row(b).data},_setGalleryTemplateAttr:function(a){null!=a&&(this.galleryTemplate=
a)},_setFormatThumbnailAttr:function(a){null!=a&&"function"===typeof a&&(this._formatThumbnail=a)},_setFormatItemTitleAttr:function(a){null!=a&&"function"===typeof a&&(this._formatItemTitle=a)},_setRowsPerPageAttr:function(a){this._set("rowsPerPage",a)},_setPagingLinksAttr:function(a){this._set("pagingLinks",a)},_getQueryAttr:function(){return this.query},_setQueryAttr:function(a){this._set("query",a);this._grid&&(this._grid.collection.query=a.toString(),this._grid.refresh())},_setExtentAttr:function(a){a&&
this._set("extent",a)},_setUseExtentAttr:function(a){this._set("useExtent",a)},_setFetchTimeoutAttr:function(a){this._set("fetchTimeout",a)},_setShowInfoPanelAttr:function(a){this._set("showInfoPanel",a)},_setFilterTypeAttr:function(a){this._set("filterType",a)},_validate:function(){return!!this.get("selection")},_getPortalAttr:function(){return this._portal},reset:function(){c(".esriSearchBox",this._searchBox).forEach(function(a){h.set(a,"value","")});this.query.search="";if(this.plugin.filters){var a=
[],b=[];c("li.active",this.domNode).forEach(function(d){f.remove(d,"active");var c=this.plugin.filters[d.childNodes[0].id];d=(c.tags||[]).map(function(a){return'tags:"'+a+'"'},this);c=(c.typekeywords||[]).map(function(a){return'typekeywords:"'+a+'"'},this);a.push(d);b.push(c)},this);this.query.tags=(this.query.tags||[]).filter(function(b){return-1!==a.indexOf(b)});this.query.typekeywords=(this.query.typekeywords||[]).filter(function(a){return-1!==b.indexOf(a)});q.byId("all").click()}},_clearQueryTimeout:function(){clearTimeout(this._queryTimer);
this._queryTimer=null},_clearClosePanelTimeout:function(){clearTimeout(this._panelClosing);this._panelClosing=null;(this._panelClickHandles||[]).forEach(function(a){a&&"function"===typeof a.remove&&a.remove()});l.empty(this.infoPanel)},_createGrid:function(){var a=m([C,D,F,E]),b=this.query,d=function(a){a.snippet=a.snippet||"";var b=l.create("div");a=t.substitute(this.galleryTemplate,{item:a,i18n:this.i18n},null,this);l.place(a,b);return b}.bind(this),e={sort:[{attribute:this.sortAttribute||"title",
descending:this.sortDescending||!1}]};this.get("useExtent")&&(e.extent=this.get("extent"),e.useExtent=this.get("useExtent"));b=new P({portal:this._portal,query:b.toString(),queryOptions:e});this._grid=new a({collection:b,selectionMode:"single",pagingLinks:this.get("pagingLinks")||2,rowsPerPage:this.get("itemsPerPage")||this.plugin&&this.plugin.rowsPerPage||6,loadingMessage:"Loading items...",showLoadingMessage:!1,renderRow:d,noDataMessage:this.i18n.noItemsToDisplay},this.id+"_grid");this._grid.startup();
this.own(g(this.domNode,"click",function(a){q.byId("close-panel")&&q.byId("close-panel").click()}),this._grid.on(g.selector(".dgrid-content .dgrid-row",u.enter),function(a){!1===f.contains(this.domNode,"showing")&&this.showInfoPanel&&this._showOverlay(!0,a)}.bind(this)),this._grid.on(g.selector(".dgrid-content .dgrid-row",u.leave),function(a){this._showOverlay(!1,a)}.bind(this)),this._grid.on(".dgrid-row:click",function(a){var b;!1===f.contains(this.domNode,"showing")&&this.showInfoPanel&&(a.preventDefault(),
p.stop(a),this._clearClosePanelTimeout(),b=this.get("selection"),this._showOverlay(!1,a),this.showInfoPanel&&this.infoPanelTemplate?l.place(t.substitute(this.infoPanelTemplate,{item:b,i18n:this.i18n,_css:this._css},function(a){return null!=a?a:""},this),this.infoPanel):A.set(this.infoPanel,"display","none"),f.add(this.domNode,"showing"),this._panelClickHandles=[c(".template-info-showing .thumbnail img",this.domNode).on("error",function(a){h.set(a.target,"src",b.thumbnailUrl)}),c(".panel-actions ."+
this._css.button+"").on("click",function(a){a.preventDefault();p.stop(a);"close-panel"===a.target.id?(f.remove(this.domNode,"showing"),this._panelClosing=setTimeout(function(){[].forEach(function(a){a&&"function"===typeof a.remove&&a.remove()})},250)):B.publish("/esri/browseitems/close",a.target.id,this.get("selection"))}.bind(this)),c("."+this._css.templatePanel+"").on("click",function(a){a.preventDefault();p.stop(a)})])}.bind(this)),this._grid.on("dgrid-refresh-complete",function(a){c(".templates",
this.domNode).removeClass("fade");c("."+this._css.loader+"",this.domNode).addClass("hide");c(".dgrid-footer",this.domNode)[this._grid._total<=this._grid.rowsPerPage?"addClass":"removeClass"]("hide")}.bind(this)),this._grid.on("refresh",function(){this._img_connect&&(this._img_connect.remove(),this._img_connect_error.remove(),this._img_connect_error=this._img_connect=null);this._img_connect=c(".grid-item-thumb",this._grid.domNode).on("load",function(a){(a=this._grid.row(a))&&a.element&&c(".grid-item",
a.element).addClass("fadeIn").style("opacity","1")}.bind(this));this._img_connect_error=c(".grid-item-thumb",this._grid.domNode).on("error",function(a){h.set(a.target,"src",this._portal.staticImagesUrl+"/desktopapp.png")}.bind(this))}.bind(this)),g(this._searchBox,"keyup",function(a){a.preventDefault();this._clearQueryTimeout();this._queryTimer=setTimeout(function(){this.query.search=h.get(a.target,"value");this._fetchItems(this.query).then(function(){this._clearQueryTimeout()}.bind(this))}.bind(this),
this.searchKeypressDelay||450)}.bind(this)),g(this._searchBox,"search",function(a){this._queryTimer||(a.preventDefault(),this.query.search=h.get(a.target,"value"),this._fetchItems(this.query))}.bind(this)));this.useExtent&&this.own(this.watch("extent",function(a,b,c){this._grid.queryOptions.extent=this.get("extent");this._grid.queryOptions.useExtent=this.get("useExtent");this._grid.query.bbox=this._grid.queryOptions.useExtent?this._grid.queryOptions.extent:"";this._grid.refresh()}),this.watch("useExtent",
function(a,b,c){this._grid.queryOptions.extent=this.get("extent");this._grid.queryOptions.useExtent=c;this._grid.query.bbox=this._grid.queryOptions.useExtent?this._grid.queryOptions.extent:"";this._grid.refresh()}));this.showInfoPanel||this.own(this._grid.on("dgrid-select,dgrid-deselect",function(a){a={selection:this.get("selection")};this.emit("select-change",a)}.bind(this)))},_createFilters:function(){if(this.plugin&&this.plugin.filters){var a=this.plugin.filters,b=this.plugin.filterStrings,d,e=
c(".filters",this.domNode)[0];for(d in a)l.create("li",{"class":"all"===d?"active":"",innerHTML:"\x3ca id\x3d'"+d+"'  href\x3d'#'\x3e"+b[d].title+"\x3c/a\x3e"},e);this.own(g(e,"li a:click",function(d){d.preventDefault();var g=d.target;c(".active",e).removeClass("active");f.add(g.parentNode,"active");c(".templates",this.domNode).addClass("fade");setTimeout(function(){f["all"===g.id?"add":"remove"](this.filterDescription,"hide");h.set(this.filterDescription,"innerHTML",b[g.id].description||"")}.bind(this),
225);d=k.mixin({},a[g.id]||{});this.query.tags=(d.tags||[]).map(function(a){return'tags:"'+a+'"'});this.query.typekeywords=[].concat((d.typekeywords||[]).map(function(a){return'typekeywords:"'+a+'"'}));this._fetchItems(this.query)}.bind(this)));f.add(this.domNode,"filters")}else f.add(this.domNode,"nofilters"+(this.plugin&&this.plugin.extraClasses?" "+this.plugin.extraClasses.join(" "):""))},_showOverlay:function(a,b){(b=this._grid.row(b))&&c(".template-overlay",b.element).style("display",a?"":"none")},
_fetchData:function(){return this.plugin&&this.plugin.fetchData?this.plugin.fetchData():this._fetchItems(this.itemQuery)},_fetchItems:function(a,b){var d={sort:[{attribute:this.sortAttribute||"title",descending:this.sortDescending||!1}]},e=r.createDeferred();this.get("useExtent")&&(d.extent=this.get("extent"),d.useExtent=this.get("useExtent"));c(".templates",this.domNode).addClass("fade");c(".dgrid-footer",this.domNode).addClass("hide");c("."+this._css.loader+"",this.domNode).removeClass("hide");
setTimeout(function(){this.query=k.mixin(this.query,a);this._grid?(this._grid.collection.query=this.query.toString(),this._grid.collection.queryOptions=d,this._grid.refresh()):(this._createFilters(),this._createGrid());e.resolve(this._grid)}.bind(this),60);return e.promise},_formatThumbnail:function(a){return"\x3cimg class\x3d'grid-item-thumb' width\x3d'187px' height\x3d'125px' alt\x3d'' src\x3d'"+(a.thumbnailUrl||this._portal.staticImagesUrl+"/desktopapp.png")+"'\x3e"},_formatInfoPanelImage:function(a){var b=
a.screenshots&&a.screenshots.length?a.screenshots[0]:null;return b?a.itemUrl+"/info/"+b:a.thumbnailUrl},_formatItemTitle:function(a){return"\x3ch5\x3e"+(a.title||a.name||"\x3cNo Title\x3e")+"\x3c/h5\x3e"},_initializeHelpMap:function(){return null==this._portal.helpMap?N(this._portal.restUrl+"/portals/helpmap",{query:{culture:z.locale,f:"json",format:"json"}}).then(function(a){a&&a.data&&(this._portal.helpMap=a.data.helpMap)}.bind(this)):r.resolve()},clear:function(){this._grid.clearSelection()}})});