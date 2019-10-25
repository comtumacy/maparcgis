// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper @dojo/framework/shim/array @dojo/framework/shim/Set ../../../geometry ../../../Graphic ../../../core/arrayUtils ../../../core/asyncUtils ../../../core/Logger ../../../core/maybe ../../../core/unitUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../core/sql/WhereClause ../../../geometry/projection ../../../geometry/support/aaBoundingBox ../../../geometry/support/webMercatorUtils ../../../layers/support/fieldUtils ../../../tasks/support/Query ./I3SMeshView3D ./LayerView3D ./i3s/I3SGeometryUtil ./i3s/I3SQueryEngine ./i3s/I3SQueryFeatureAdapter ./i3s/I3SQueryFeatureStore ./i3s/I3SUtil ./support/DefinitionExpressionSceneLayerView ./support/fieldProperties ./support/layerViewUpdatingProperties ./support/PopupSceneLayerView ../support/projectionUtils ../../layers/support/FeatureFilter".split(" "),
function(X,Y,Z,D,c,E,F,G,H,t,I,J,n,K,h,L,u,e,M,p,q,v,y,w,N,O,l,P,Q,R,z,S,T,U,V,A,W){var k=K.getLogger("esri.views.3d.layers.SceneLayerView3D"),B=T.defineFieldProperties(),C=[0,0,0,0];return function(x){function a(){var b=null!==x&&x.apply(this,arguments)||this;b._queryEngine=null;b.lodFactor=1;b.progressiveLoadFactor=1;b._elevationContext="scene";b._isIntegratedMesh=!1;b._asyncModuleLoading=0;b._projectionEngineLoaded=!1;return b}D(a,x);Object.defineProperty(a.prototype,"filter",{set:function(b){if(h.isNone(b))this._set("filter",
null);else{var d=["contains","intersects","disjoint"];b.timeExtent?(k.warn("Filters with a timeExtent are not supported for mesh scene layers"),this._set("filter",null)):b.spatialRelationship&&-1===d.indexOf(b.spatialRelationship)?(k.warn("Filters with spatialRelationship other than "+d.join(", ")+" are not supported for mesh scene layers"),this._set("filter",null)):this._set("filter",b)}},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"parsedFilterWhereClause",{get:function(){var b=
h.isSome(this.filter)?this.filter.where:null;if(!b)return null;try{return M.WhereClause.create(b,this.layer.fieldsIndex)}catch(d){k.error("Failed to parse filter where clause: "+d)}return null},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"parsedFilterGeometry",{get:function(){var b=this;if(h.isNone(this.filter))return null;var d=this.filter,a=d.geometry,f=d.distance;if(!f)return a;if(!this._geometryEngine)return null;d=d.units||L.getUnitString(a.spatialReference);if(a.spatialReference.isWGS84)return this._geometryEngine.geodesicBuffer(a,
f,d);if(v.canProject(a,t.SpatialReference.WGS84))return v.project(this._geometryEngine.geodesicBuffer(v.project(a,t.SpatialReference.WGS84),f,d),a.spatialReference);if(!p.isSupported())return k.error("Filter by geodesic buffer (distance) unsupported due to lack of projection support."),null;if(!this._projectionEngineLoaded&&(this._loadAsyncModule(p.load()).then(function(){b._set("_projectionEngineLoaded",!0)}),!this._projectionEngineLoaded))return null;var g=null;try{g=p.project(a,t.SpatialReference.WGS84)}catch(r){}if(g)try{g=
p.project(this._geometryEngine.geodesicBuffer(g,f,d),a.spatialReference)}catch(r){g=null}g||k.error("Filter by geodesic buffer (distance) unsupported, failed to project input geometry ("+a.spatialReference.wkid+") to WGS84.");return g},enumerable:!0,configurable:!0});a.prototype.initialize=function(){var b=this;this.handles.add([u.init(this,["layer.renderer","definitionExpressionFields","filter"],function(){return b._updateRequiredFields()}),u.init(this.layer,"rangeInfos",function(a){return b._rangeInfosChanged(a)}),
u.init(this.layer,"renderer",function(a){return b._rendererChange(a)}),this.watch(["parsedDefinitionExpression","layer.objectIdFilter","filter","parsedFilterWhereClause","parsedFilterGeometry"],function(){return b._filterChange()})])};a.prototype.destroy=function(){};a.prototype._updateRequiredFields=function(){return F(this,void 0,void 0,function(){var b,a,m,f,g,r,e,c;return E(this,function(d){switch(d.label){case 0:return b=this,m=a=b.layer,f=m.fields,g=m.renderer,r=b.definitionExpressionFields,
e=b.filter,c=new H.default,g?[4,g.collectRequiredFields(c,f)]:[3,2];case 1:d.sent(),d.label=2;case 2:return h.isSome(e)?[4,y.collectFilterFields(c,a,e)]:[3,4];case 3:d.sent(),d.label=4;case 4:return y.collectFields(c,f,r),this._set("requiredFields",G.from(c).sort()),[2]}})})};a.prototype._rangeInfosChanged=function(b){null!=b&&0<b.length&&k.warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")};a.prototype.createQuery=function(){var b=
{outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return h.isSome(this.filter)?this.filter.createQuery(b):new w(b)};a.prototype.queryExtent=function(b){return n.safeCast(this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(b)))};a.prototype.queryFeatureCount=function(b){return n.safeCast(this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(b)))};a.prototype.queryFeatures=function(b){return n.safeCast(this._ensureQueryEngine().executeQuery(this._ensureQuery(b)))};
a.prototype.queryObjectIds=function(b){return n.safeCast(this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(b)))};a.prototype._ensureQueryEngine=function(){this._queryEngine||(this._queryEngine=this._createQueryEngine());return this._queryEngine};a.prototype._createQueryEngine=function(){var b=this,a=this._createGetFeatureExtent();return new P.default({layerView:this,priority:4,spatialIndex:new R.default({featureAdapter:new Q.I3SQueryFeatureAdapter({objectIdField:this.layer.objectIdField,
attributeStorageInfo:this.layer.attributeStorageInfo,getFeatureExtent:a}),forAllFeatures:function(a,d){return b._forAllFeatures(function(b,d,f){return a({id:b,index:d,meta:f})},d,2)},getFeatureExtent:a,sourceSpatialReference:z.getIndexCrs(this.layer),viewSpatialReference:this.view.spatialReference})})};a.prototype._createGetFeatureExtent=function(){var b=this,a=new Float64Array(24),m=this.view.renderSpatialReference,f=this.view.spatialReference;return function(d){if(!d.meta.featureExtents){var c=
new Float64Array(6*d.meta.featureIds.length);d.meta.featureExtents=c;for(var g=0;g<c.length;g+=6)c[g]=Number.POSITIVE_INFINITY}c=new Float64Array(d.meta.featureExtents.buffer,6*d.index*Float64Array.BYTES_PER_ELEMENT,6);return c[0]===Number.POSITIVE_INFINITY?(b._boundingBoxCornerPoints(d.index,d.meta.engineObject,a),A.bufferToBuffer(a,m,0,a,f,0,8)?q.expandWithBuffer(q.NEGATIVE_INFINITY,a,0,8,c):q.set(c,q.ZERO)):c}};a.prototype.highlight=function(b,a){void 0===a&&(a={});var d=this._highlights;if(b instanceof
w){var f=d.acquireSet(a),c=f.set,f=f.handle;this.queryObjectIds(b).then(function(b){return d.setFeatureIds(c,b)});return f}return this.inherited(arguments)};a.prototype._createLayerGraphic=function(b){b=new I(null,null,b);b.layer=this.layer;b.sourceLayer=this.layer;return b};a.prototype.canResume=function(){return this.inherited(arguments)&&(!this._controller||this._controller.rootNodeVisible)};a.prototype.isUpdating=function(){return!(!this._controller||!this._controller.updating)||0<this._asyncModuleLoading};
a.prototype.getFilters=function(){var b=this,a=this.inherited(arguments);if(this.layer.objectIdFilter){var c=new Float64Array(this.layer.objectIdFilter.ids),f="include"===this.layer.objectIdFilter.method;c.sort();a.push(function(a){return b._objectIdFilter(c,f,a)})}this.addSqlFilter(a,this.parsedDefinitionExpression,this.definitionExpressionFields,this.logError);if(h.isSome(this.filter)){if(h.isSome(this.parsedFilterGeometry)){var g=this.parsedFilterGeometry;a.push(function(a,d){return b._maskFilter(a,
d,g)})}if(this.filter.objectIds){var e=new Float64Array(this.filter.objectIds);e.sort();a.push(function(a){return b._objectIdFilter(e,!0,a)})}}h.isSome(this.parsedFilterWhereClause)&&this.addSqlFilter(a,this.parsedFilterWhereClause,this.parsedFilterWhereClause.fieldNames,this.logError);return a};a.prototype._maskFilter=function(a,d,c){if(!h.isNone(this.filter)){A.mbsToMbs(d.node.mbs,this._controller.crsIndex,C,c.spatialReference||this.view.spatialReference);var b=l.acquireMaskFilterContext(this.filter.spatialRelationship,
this.view,c,d.engineObject);c=l.intersectMaskWithMbs(b,C);switch(l.getIntersectRelation(b,c)){case 1:a.length=0;return;case 0:return}d.engineObject.getGeometryRecords()[0].geometry.componentCount===d.featureIds.length&&z.filterInPlace(a,d.featureIds,function(a){return l.filterMask(a,b)})}};a.prototype._filterChange=function(){var a=this;h.isSome(this.filter)&&this.filter.geometry&&!this._geometryEngine?this._loadAsyncModule(l.loadGeometryEngine()).then(function(b){a.destroyed||(a._set("_geometryEngine",
b),a._applyFilters(!0))}):this.inherited(arguments)};a.prototype._loadAsyncModule=function(a){var b=this;this._set("_asyncModuleLoading",this._asyncModuleLoading+1);var c=function(){return b._set("_asyncModuleLoading",b._asyncModuleLoading-1)};return a.then(function(a){c();return a},function(a){c();throw a;})};a.prototype._objectIdFilter=function(a,c,e){for(var b=0,d=0;b<e.length;)0<=J.binaryIndexOf(a,e[b])===c&&(e[d]=e[b],d++),b++;e.length=d};a.prototype._ensureQuery=function(a){return this._addDefinitionExpressionToQuery(h.isNone(a)?
this.createQuery():w.from(a))};c([e.property()],a.prototype,"layer",void 0);c([e.property({dependsOn:["_controller.updating","_asyncModuleLoading"]})],a.prototype,"updating",void 0);c([e.property({dependsOn:["_controller.rootNodeVisible"]})],a.prototype,"suspended",void 0);c([e.property(U.updatingPercentage)],a.prototype,"updatingPercentage",void 0);c([e.property({type:W})],a.prototype,"filter",null);c([e.property({readOnly:!0,dependsOn:["filter.where"]})],a.prototype,"parsedFilterWhereClause",null);
c([e.property({readOnly:!0,dependsOn:["filter.geometry","filter.distance","filter.units","_geometryEngine","_projectionEngineLoaded"]})],a.prototype,"parsedFilterGeometry",null);c([e.property(B.requiredFields)],a.prototype,"requiredFields",void 0);c([e.property(B.availableFields)],a.prototype,"availableFields",void 0);c([e.property({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.3dObject.lodFactor"})],a.prototype,"lodFactor",void 0);c([e.property({readOnly:!0,aliasOf:"_controller.updatingPercentage"})],
a.prototype,"updatingPercentageValue",void 0);c([e.property({readOnly:!0})],a.prototype,"_asyncModuleLoading",void 0);c([e.property({readOnly:!0})],a.prototype,"_geometryEngine",void 0);c([e.property({readOnly:!0})],a.prototype,"_projectionEngineLoaded",void 0);return a=c([e.subclass("esri.views.3d.layers.SceneLayerView3D")],a)}(e.declared(O,N.I3SMeshView3D,V.PopupSceneLayerView,S.DefinitionExpressionSceneLayerView))});