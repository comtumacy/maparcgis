// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/Handles ../../../core/accessorSupport/decorators ../support/projectionUtils ./terrainUtils ./TilingScheme".split(" "),function(n,p,k,d,l,m,b,g,f,e){return function(h){function a(c){c=h.call(this,c)||this;c._changeHandles=new m;return c}k(a,h);a.prototype.initialize=function(){var c=this;this._changeHandles.add(this.layers.on("change",function(){return c._update()}));
this._changeHandles.add(this.extentHelper.watch("layerViewsExtent",function(){return c._setAdHocTilingScheme()}));this._update();this.tilingSchemeLocked||this._setAdHocTilingScheme()};a.prototype.destroy=function(){this._changeHandles.destroy();this._changeHandles=null};a.prototype._update=function(){var c=this;this._waitTask=null;if(!this.tilingSchemeLocked){this._set("tilingSchemeDone",!1);var a=this.layers.find(function(a){return f.isTiledLayer(a)?a.isFulfilled()?a.isRejected()?!1:!!f.getTiledLayerInfo(a,
c.viewSpatialReference,c.manifold).tileInfo:!0:!1});if(a)if(a.isResolved()){var b=f.getTiledLayerInfo(a,this.viewSpatialReference,this.manifold).tileInfo,b=new e(b),a=f.getKnownTiledServiceLevelCap(a.url);Infinity>a&&b.capMaxLod(a);this._set("tilingSchemeDone",!0);this._lockTilingScheme(b)}else this._updateWhen(a);else this._set("tilingSchemeDone",!0)}};a.prototype._updateWhen=function(a){var c=this,b=a.when().catch(function(a){return a}).then(function(){b===c._waitTask&&c._update()});this._waitTask=
b};a.prototype._lockTilingScheme=function(a){var c=this;if("spherical"===this.manifold){var b=a.levels.length-1;a.spatialReference.isWebMercator?a=e.makeWebMercatorAuxiliarySphere(b):g.canProjectToWGS84ComparableLonLat(a.spatialReference)&&(a=e.makeGCSWithTileSize(a.spatialReference,a.pixelSize[0],b))}this.tilingSchemeLocked=!0;this.tilingScheme=a;this.extentHelper.tilingScheme=this.tilingScheme;this._updateTiledLayerExtent();this._changeHandles.removeAll();this._changeHandles.add(this.extentHelper.watch("tiledLayersExtent",
function(){return c._updateTiledLayerExtent()}))};a.prototype._updateTiledLayerExtent=function(){this.extent=this.extentHelper.tiledLayersExtent};a.prototype._setAdHocTilingScheme=function(){if("spherical"===this.manifold){var a=this.extentHelper.spatialReference;a.isWebMercator?this.tilingScheme=e.WebMercatorAuxiliarySphere:g.canProjectToWGS84ComparableLonLat(a)&&(this.tilingScheme=e.makeGCSWithTileSize(a,256));this.extent=this.extentHelper.layerViewsExtent}else if(a=this.extentHelper.layerViewsExtent)this.tilingScheme=
e.fromExtent(a,this.extentHelper.spatialReference),this.extent=a};d([b.property()],a.prototype,"tilingScheme",void 0);d([b.property()],a.prototype,"extent",void 0);d([b.property({value:!1})],a.prototype,"tilingSchemeLocked",void 0);d([b.property({readOnly:!0,value:!1})],a.prototype,"tilingSchemeDone",void 0);d([b.property({constructOnly:!0})],a.prototype,"viewSpatialReference",void 0);d([b.property({constructOnly:!0})],a.prototype,"layers",void 0);d([b.property({constructOnly:!0})],a.prototype,"extentHelper",
void 0);d([b.property({constructOnly:!0})],a.prototype,"manifold",void 0);return a=d([b.subclass("esri.views.3d.terrain.SurfaceTilingSchemeLogic")],a)}(b.declared(l))});