// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/Handles ../../../../core/Logger ../../../../core/maybe ../../../../core/watchUtils ../../../../core/accessorSupport/decorators ./QueryEngine ../../../layers/support/FeatureFilter".split(" "),function(c,f,h,g,k,l,m,n,p,e,q,r){Object.defineProperty(f,"__esModule",{value:!0});var t=m.getLogger("esri.views.3d.layers.graphics.Graphics3DFilterVisibility");
c=function(c){function b(){var a=c.call(this)||this;a.filter=null;a._dirty=!1;a._querying=!1;a._handles=new l;return a}h(b,c);Object.defineProperty(b.prototype,"updating",{get:function(){return this._dirty||this._querying||null!=this._queryResult},enumerable:!0,configurable:!0});b.prototype.setup=function(a,b){var d=this;this._layerView=a;this._core=b;this._objectIdField=a.layer.objectIdField;this._queryEngine=new q.default({layerView:this._layerView,priority:4});this._handles.add(this._layerView.view.resourceController.scheduler.registerTask(4,
function(a){return d._update(a)},function(){return d._needsUpdate()}));this._handles.add(p.on(b.owner,"loadedGraphics","change",function(a){return d._graphicsChanged(a)},function(){return d.dirty=!0}))};b.prototype.destroy=function(){this._handles.destroy();this._handles=null;this.clear();this._core=this._layerView=null};b.prototype.clear=function(){this._queryEngine.clear()&&(this._core.modifyGraphics3DGraphicVisibilities(function(a){return a.clearVisibilityFlag(2)}),this._queryResult=null,this._querying=
!1);this.dirty=!1;this.notifyChange("updating")};b.prototype._graphicsChanged=function(a){if(!this._queryEngine||a.added&&0<a.added.length)this.dirty=!0};b.prototype.updateVisibility=function(a){this.active&&(a.hasVisibilityFlag(2,0)||a.setVisibilityFlag(2,!1,0),this.dirty=!0)};b.prototype.filterChanged=function(){this.filter=this.recomputeFilter();this.dirty=!0};Object.defineProperty(b.prototype,"active",{get:function(){return this.filter&&0<this._core.graphics3DGraphics.size},enumerable:!0,configurable:!0});
b.prototype.recomputeFilter=function(){var a="filter"in this._layerView?this._layerView.filter:null,b="timeExtent"in this._layerView?this._layerView.timeExtent:null;if(!b)return a;a=n.isSome(a)?a.clone():new r;a.timeExtent=a.timeExtent?a.timeExtent.intersection(b):b;return a};b.prototype._needsUpdate=function(){return this._dirty&&!this._querying||null!=this._queryResult};b.prototype._update=function(a){var b=this;this.active?(!this._dirty||this._querying||a.done||(this._querying=!0,this.dirty=!1,
this._queryEngine.executeQueryForIdSet(this.filter).then(function(a){b._queryResult=a;b._querying=!1}).catch(function(a){t.warn("FeatureFilter query failed: "+a);b._queryResult=new Set;b._core.graphics3DGraphics.forEach(function(a){return b._queryResult.add(b._getFeatureId(a.graphic))});b._querying=!1}),a.madeProgress()),this._queryResult&&!a.done&&(this._core.modifyGraphics3DGraphicVisibilities(function(c){if(a.done)return!1;var d=b._queryResult.has(b._getFeatureId(c.graphic));return c.setVisibilityFlag(2,
d,0)?(a.madeProgress(),!0):!1}),a.done||(this._queryResult=null)),this.notifyChange("updating")):this.clear()};b.prototype._getFeatureId=function(a){return null==a.objectId?a.attributes[this._objectIdField]:a.objectId};Object.defineProperty(b.prototype,"dirty",{set:function(a){this._dirty!==a&&(this._dirty=a,this.notifyChange("updating"))},enumerable:!0,configurable:!0});g([e.property({readOnly:!0})],b.prototype,"updating",null);return b=g([e.subclass("esri.views.3d.layers.graphics.Graphics3DFilterVisibility")],
b)}(e.declared(k));f.Graphics3DFilterVisibility=c});