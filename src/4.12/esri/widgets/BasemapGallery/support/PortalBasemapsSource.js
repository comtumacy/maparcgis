// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper @dojo/framework/shim/AbortController ../../../Basemap ../../../core/Collection ../../../core/Error ../../../core/Handles ../../../core/Loadable ../../../core/Logger ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../portal/Portal ./LocalBasemapsSource".split(" "),function(x,y,h,d,k,l,m,n,p,q,r,t,u,c,e,v){var f=m.ofType(l),w=r.getLogger("esri.widgets.BasemapGallery.support.PortalBasemapsSource");
return function(g){function b(a){a=g.call(this)||this;a._handles=new p;a.basemaps=new f;a.filterFunction=null;a.portal=e.getDefault();a.query=null;a.updateBasemapsCallback=null;return a}h(b,g);b.prototype.initialize=function(){var a=this;this._handles.add([u.init(this,"filterFunction loadStatus portal.basemapGalleryGroupQuery portal.user query updateBasemapsCallback".split(" "),function(){return a.refresh()})])};b.prototype.destroy=function(){this._handles.destroy();this.portal=this.filterFunction=
this._handles=null};Object.defineProperty(b.prototype,"state",{get:function(){return"not-loaded"===this.loadStatus?"not-loaded":"loading"===this.loadStatus||this._lastPortalBasemapFetchController?"loading":"ready"},enumerable:!0,configurable:!0});b.prototype.load=function(a){this.addResolvingPromise(this.portal.load(a));this.notifyChange("state");return this.when()};b.prototype.refresh=function(){var a=this;if("ready"===this.state){this._lastPortalBasemapFetchController&&(this._lastPortalBasemapFetchController.abort(),
this._lastPortalBasemapFetchController=null);var b=this.portal,c=new k.default;this._lastPortalBasemapFetchController=c;b.fetchBasemaps(this._toQueryString(this.query),c).then(function(b){return a._updateBasemaps(b)}).catch(function(b){if(t.isAbortError(b))throw b;w.warn(new n("basemap-source:fetch-basemaps-error","Could not fetch basemaps from portal.",{error:b}));a._updateBasemaps()}).then(function(){a._lastPortalBasemapFetchController=null;a.notifyChange("state")});this.notifyChange("state")}};
b.prototype._toQueryString=function(a){return a&&"string"!==typeof a?Object.keys(a).map(function(b){return b+":"+a[b]}).join(" AND "):a};b.prototype._updateBasemaps=function(a){void 0===a&&(a=[]);a=this.filterFunction?a.filter(this.filterFunction):a;a=this.updateBasemapsCallback?this.updateBasemapsCallback(a):a;this.basemaps.removeAll();this.basemaps.addMany(a)};d([c.property({readOnly:!0,type:f})],b.prototype,"basemaps",void 0);d([c.property()],b.prototype,"filterFunction",void 0);d([c.property({type:e})],
b.prototype,"portal",void 0);d([c.property()],b.prototype,"query",void 0);d([c.property({dependsOn:["loadStatus"],readOnly:!0})],b.prototype,"state",null);d([c.property()],b.prototype,"updateBasemapsCallback",void 0);return b=d([c.subclass("esri.widgets.BasemapGallery.support.PortalBasemapsSource")],b)}(c.declared(v,q))});