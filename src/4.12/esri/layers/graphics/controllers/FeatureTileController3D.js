// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/assignHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/Accessor ../../../core/asyncUtils ../../../core/Collection ../../../core/compilerUtils ../../../core/Error ../../../core/Handles ../../../core/lang ../../../core/Logger ../../../core/maybe ../../../core/Promise ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../support/arcgisLayerUrl ../../../portal/support/geometryServiceUtils ../../../tasks/support/StatisticDefinition ../../../views/3d/layers/graphics/Graphics3DVerticalScale ../../../views/3d/layers/support/FeatureTileFetcher3D ../../../views/3d/layers/support/FeatureTileFetcher3DDebugger ../../../views/3d/support/debugFlags".split(" "),
function(f,Q,C,e,R,v,k,D,z,r,A,E,F,B,G,H,I,l,n,c,J,K,L,M,N,O,P){var t=G.getLogger("esri.layers.graphics.controllers.FeatureTileController3D");f=function(f){function b(a){a=f.call(this)||this;a.type="feature-tile-3d";a.serviceDataExtent=null;a.serviceDataCount=m.constants.NO_SERVICE_DATA_COUNT;a.vertexLimitExceeded=!1;a.displayFeatureLimit=null;a.suspended=!1;a.asyncTasks=new r;a.tileFetcher=null;a.handles=new F;a.fetchDataInfoPromise=null;a.fetchDataInfoAbortController=null;a.lifeCycleAbortController=
l.createAbortController();return a}C(b,f);m=b;Object.defineProperty(b.prototype,"extent",{set:function(a){if(a&&!a.spatialReference.equals(this.layerView.view.spatialReference))t.error("#extent\x3d","extent needs to be in the same spatial reference as the view");else{var b=this._get("extent");b===a||b&&a&&b.equals(a)||(a=a?a.clone():null,this._set("extent",a))}},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"updating",{get:function(){return!!(this.tileFetcher&&this.tileFetcher.updating||
null!=this.fetchDataInfoPromise||0<this.asyncTasks.length||"tiles"===this.mode&&this.layerView.view.featureTiles&&this.layerView.view.featureTiles.updating)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"updatingTotal",{get:function(){return this.updating&&this.tileFetcher?this.tileFetcher.updatingTotal:0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"updatingRemaining",{get:function(){return this.updating&&this.tileFetcher?this.tileFetcher.updatingRemaining:
0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"expectedFeatureDiff",{get:function(){return this.updating&&this.tileFetcher?this.tileFetcher.expectedFeatureDiff:0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"memoryForUnusedFeatures",{get:function(){return this.tileFetcher?this.tileFetcher.memoryForUnusedFeatures:0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"maximumNumberOfFeaturesExceeded",{get:function(){return!(!this.tileFetcher||
!this.tileFetcher.maximumNumberOfFeaturesExceeded)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"filteredDataExtent",{get:function(){return this.extent},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"maximumNumberOfFeatures",{get:function(){return this.displayFeatureLimit?this.displayFeatureLimit.maximumNumberOfFeatures:0},set:function(a){a!==this.maximumNumberOfFeatures&&(null==a?this._clearOverride("maximumNumberOfFeatures"):this._override("maximumNumberOfFeatures",
a))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasMaximumNumberOfFeaturesOverride",{get:function(){return this._isOverridden("maximumNumberOfFeatures")},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"mode",{get:function(){if(this.serviceDataCount===m.constants.NO_SERVICE_DATA_COUNT||this.vertexLimitExceeded)return"tiles";var a=this.layerView,b=a.layer,a=(a=(a=a.view)&&a.featureTiles)&&a.tilingScheme;return b&&b.minScale&&this.serviceDataExtent&&a&&(b=this.approximateExtentSizeAtScale(b.minScale,
a),(this.serviceDataExtent.width/b+this.serviceDataExtent.height/b)/2>m.constants.MAX_SNAPSHOT_MIN_SCALE_FACTOR)?"tiles":!this.maximumNumberOfFeatures||this.serviceDataCount<=this.maximumNumberOfFeatures?"snapshot":"tiles"},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"maxTotalSnapshotVertices",{get:function(){var a=this._get("maxTotalSnapshotVertices")||0;return Math.max(a,"snapshot"===this.mode&&this.tileFetcher&&this.tileFetcher.totalVertices||0)},enumerable:!0,configurable:!0});
b.prototype.approximateExtentSizeAtScale=function(a,b){var g=this.layerView.view,x=b.levels[0];return(x.tileSize[0]/(x.scale/a)+x.tileSize[1]/(x.scale/a))/2*Math.ceil((g.width/b.pixelSize[0]+g.height/b.pixelSize[1])/2)};Object.defineProperty(b.prototype,"tileDescriptors",{get:function(){return"snapshot"===this.mode?new r([{id:"dummy-tile-full-extent",lij:[0,0,0]}]):this.layerView.view.featureTiles?this.layerView.view.featureTiles.tiles:new r},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"test",{get:function(){return{fetchDataInfoPromise:this.fetchDataInfoPromise}},enumerable:!0,configurable:!0});b.prototype.initialize=function(){var a=this;this.handles.add([this.watch("vertexLimitInfo",function(){return a.registerAsyncTask(a.updateVertexLimitExceeded(null,a.lifeCycleAbortController.signal))}),n.init(this,"mode",function(){return a.modeChanged()})]);var b=l.resolve().then(function(){return a.verifyCapabilities()}).then(function(){return a.registerAsyncTask(a.fetchServiceDataInfo())}).then(function(){return a.initializeTileFetcher()});
this.addResolvingPromise(b)};b.prototype.verifyCapabilities=function(){var a=this.layerView.layer;if(!a.get("capabilities.operations.supportsQuery"))throw new E("graphicscontroller:query-capability-required","Service requires query capabilities to be used as a feature layer",{layer:a});};b.prototype.registerAsyncTask=function(a){var b=this.asyncTasks;b.add(a);var d=function(){return b.remove(a)};a.then(d,d);return a};b.prototype.destroy=function(){this.cancelFetchServiceDataInfo();this.tileFetcher&&
(this.tileFetcher.destroy(),this.tileFetcher=null);this.handles&&(this.handles.destroy(),this.handles=null);this.tilesHandle&&(this.tilesHandle.remove(),this.tilesHandle=null);this.lifeCycleAbortController&&(this.lifeCycleAbortController.abort(),this.lifeCycleAbortController=null)};b.prototype.suspend=function(){this.suspended||(this.suspended=!0,this.tileFetcher&&this.tileFetcher.suspend())};b.prototype.resume=function(){this.suspended&&(this.suspended=!1,this.tileFetcher&&this.tileFetcher.resume())};
b.prototype.refresh=function(){var a=this,b=function(){a.tileFetcher&&a.tileFetcher.filtersChanged()};this.registerAsyncTask(this.fetchServiceDataInfo().then(b,b))};b.prototype.initializeTileFetcher=function(){var a=this,b=this.layerView.view;n.whenOnce(b.featureTiles,"tilingScheme",this.lifeCycleAbortController.signal).then(function(){var d=a.layerView,g=a.tileDescriptors,c=d.layer,e=new M({sourceSpatialReference:c.spatialReference,destSpatialReference:b.spatialReference});a.tileFetcher=new N.FeatureTileFetcher3D({layerView:d,
filterExtent:a.filteredDataExtent,tilingScheme:b.featureTiles.tilingScheme,tileDescriptors:g,features:a.graphics,verticalScale:e,viewingMode:b.viewingMode,hasZ:a.hasZ,hasM:a.hasM});a.suspended?a.tileFetcher.suspend():a.tileFetcher.resume();a.handles.add([c.watch("definitionExpression",function(){return a.definitionExpressionChanged()}),d.watch("availableFields",function(b,d){return a.attributesChanged(d,b)}),c.on("apply-edits",function(b){return a.applyEdits(b)}),a.watch("filteredDataExtent",function(b){return a.tileFetcher.filterExtent=
b},!0),a.watch("tileDescriptors",function(b){return a.tileFetcher.tileDescriptors=b},!0),n.init(a,"maximumNumberOfFeatures",function(b){a.tileFetcher.maximumNumberOfFeatures=b;a.tileFetcher.useTileCount=a.serviceDataCount>b},!0),n.init(a,"serviceDataCount",function(b){return a.tileFetcher.useTileCount=b>a.maximumNumberOfFeatures},!0),n.init(P,"FEATURE_TILE_FETCH_SHOW_TILES",function(d){d&&a.tileFetcher&&!a.tileFetcher.debugger?(a.tileFetcher.debugger=new O.FeatureTileFetcher3DDebugger(a.tileFetcher,
b.featureTiles.tilingScheme.toTileInfo(),b),a.tileFetcher.debugger.update()):!d&&a.tileFetcher&&a.tileFetcher.debugger&&(a.tileFetcher.debugger.destroy(),a.tileFetcher.debugger=null)})]);a.supportsExceedsLimitQuery||a.watch("maxTotalSnapshotVertices",function(){return a.registerAsyncTask(a.updateVertexLimitExceeded(null,a.lifeCycleAbortController.signal))})})};b.prototype.modeChanged=function(){switch(this.mode){case "tiles":this.tilesHandle||(this.tilesHandle=this.layerView.view.featureTiles.addClient());
break;default:t.warn("Unhandled feature layer mode "+this.mode);case "snapshot":this.tilesHandle&&(this.tilesHandle.remove(),this.tilesHandle=null)}};b.prototype.definitionExpressionChanged=function(){this._set("maxTotalSnapshotVertices",0);this.notifyChange("maxTotalSnapshotVertices");this.refresh()};b.prototype.applyEdits=function(a){var b=this;this.tileFetcher.applyEdits(a).then(function(a){a&&(a.deletedFeatures.length||a.updatedFeatures.length||a.addedFeatures.length)&&b.registerAsyncTask(b.updateServiceDataExtent(b.lifeCycleAbortController.signal))})};
b.prototype.attributesChanged=function(a,b){if(!a||-1===a.indexOf("*"))if(a&&b){for(var d=new Set,g=0;g<a.length;g++){var c=a[g];d.add(c)}for(a=0;a<b.length;a++)if(c=b[a],!d.has(c)){this.refresh();break}}else this.refresh()};b.prototype.createVertexLimitExceededQuery=function(a){var b=this.layerView.layer,d=b.createQuery();d.outStatistics=[new L({statisticType:"exceedslimit",maxVertexCount:a,outStatisticFieldName:"exceedslimit",maxPointCount:1E8,maxRecordCount:1E8})];b.capabilities.query.supportsCacheHint&&
(d.cacheHint=!0);return d};b.prototype.createDataInfoQuery=function(){var a=this.layerView.layer,b=a.createQuery();b.outSpatialReference=this.layerView.view.spatialReference;a.capabilities.query.supportsCacheHint&&(b.cacheHint=!0);return b};b.prototype.fullExtentIsAccurate=function(){var a=this.layerView.layer;if(a.definitionExpression)return!1;switch(a.type){case "feature":case "stream":return J.isHostedAgolService(a.url);case "csv":case "geojson":return!0;default:A.neverReached(a)}};b.prototype.updateServiceDataExtent=
function(a){return k(this,void 0,void 0,function(){var b;return v(this,function(d){switch(d.label){case 0:return d.trys.push([0,2,,3]),[4,this.tryUpdateServiceDataExtent(a)];case 1:return d.sent(),[3,3];case 2:return b=d.sent(),l.isAbortError(b)||this._set("serviceDataExtent",B.clone(this.layerView.fullExtentInLocalViewSpatialReference)),[3,3];case 3:return[2]}})})};b.prototype.tryUpdateServiceDataExtent=function(a){return k(this,void 0,void 0,function(){var b,d,c,e,h,f,u,l,k,p,q,n;return v(this,
function(g){switch(g.label){case 0:b=this.layerView;d=b.layer;c=d.capabilities.query.supportsExtent;e=B.clone(b.fullExtentInLocalViewSpatialReference);h=d.fullExtent;f=this.fullExtentIsAccurate();u=this.serviceDataCount;l=c&&u<=m.constants.MAX_FEATURE_COUNT_FOR_EXTENT&&(!e||!f);if(!l)return[3,2];k=this.createDataInfoQuery();return[4,d.queryExtent(k,{timeout:m.constants.QUERY_EXTENT_TIMEOUT,signal:a})];case 1:return p=g.sent(),this._set("serviceDataExtent",p.extent),[3,6];case 2:if(!e)return[3,3];
this._set("serviceDataExtent",e);return[3,6];case 3:if(!h)return[3,5];q="portalItem"in d?d.portalItem:null;return[4,K.projectGeometry(h,b.view.spatialReference,q,a)];case 4:return n=g.sent(),this._set("serviceDataExtent",n),[3,6];case 5:this._set("serviceDataExtent",null),g.label=6;case 6:return[2]}})})};b.prototype.updateServiceDataCount=function(a){return k(this,void 0,void 0,function(){var b,d,c;return v(this,function(e){switch(e.label){case 0:return b=this.layerView.layer,[4,z.result(b.queryFeatureCount(this.createDataInfoQuery(),
{timeout:m.constants.QUERY_STATISTICS_TIMEOUT,signal:a}))];case 1:d=e.sent();if(!0===d.ok)this._set("serviceDataCount",d.value);else{if(l.isAbortError(d.error))throw d.error;c=m.constants.NO_SERVICE_DATA_COUNT;this._set("serviceDataCount",c)}return[2]}})})};Object.defineProperty(b.prototype,"vertexLimitInfo",{get:function(){if(!this.displayFeatureLimit||!this.displayFeatureLimit.maximumSymbolComplexity)return null;var a=this.displayFeatureLimit,b=a.maximumSymbolComplexity,a=a.maximumTotalNumberOfPrimitives,
d=b.primitivesPerCoordinate,b=b.primitivesPerFeature,c=this._get("vertexLimitInfo");return c&&c.maximumTotalNumberOfPrimitives===a&&c.primitivesPerCoordinate===d&&c.primitivesPerFeature===b?c:{primitivesPerCoordinate:d,primitivesPerFeature:b,maximumTotalNumberOfPrimitives:a}},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"supportsExceedsLimitQuery",{get:function(){var a=this.layerView.layer;return a.capabilities&&a.capabilities.operations&&a.capabilities.operations.supportsExceedsLimitStatistics},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"minimumNumberOfVerticesForGeometry",{get:function(){var a=this.layerView.layer.geometryType;switch(a){case "point":return 1;case "multipoint":return 1;case "polygon":return 4;case "polyline":return 2;case "multipatch":case "mesh":return 3;default:return A.neverReached(a),0}},enumerable:!0,configurable:!0});b.prototype.updateVertexLimitExceeded=function(a,b){return k(this,void 0,void 0,function(){var c,e,g,h,f,u,k,n,p,q,r,w,t,y;return v(this,
function(d){switch(d.label){case 0:c=this.vertexLimitInfo&&0>=this.vertexLimitInfo.primitivesPerFeature;e=this.layerView.layer;g=this.supportsExceedsLimitQuery;if(!c)return this._set("vertexLimitExceeded",!1),[2];h=this.vertexLimitInfo;f=h.primitivesPerFeature;u=h.primitivesPerCoordinate;k=h.maximumTotalNumberOfPrimitives;return(n=0!==f)&&H.isSome(a)?[4,a]:[3,2];case 1:d.sent(),d.label=2;case 2:p=this.serviceDataCount;q=(r=p!==m.constants.NO_SERVICE_DATA_COUNT)?Math.ceil((k-p*f)/(u||1)):Math.ceil(k/
(u||1));if(r&&this.minimumNumberOfVerticesForGeometry*p>q)return this._set("vertexLimitExceeded",!0),[2];g||this._set("vertexLimitExceeded",this.maxTotalSnapshotVertices>q);return[4,z.result(e.queryFeatures(this.createVertexLimitExceededQuery(q),{timeout:m.constants.QUERY_STATISTICS_TIMEOUT,signal:b}))];case 3:w=d.sent();if(!1===w.ok){if(l.isAbortError(w.error))throw w.error;this._set("vertexLimitExceeded",!1);return[2]}t=w.value;(y=t.features[0])&&y.attributes?this._set("vertexLimitExceeded",!!y.attributes.exceedslimit):
this._set("vertexLimitExceeded",!1);return[2]}})})};b.prototype.fetchServiceDataInfo=function(){return k(this,void 0,void 0,function(){var a,b,c,e,f,h=this;return v(this,function(d){this.cancelFetchServiceDataInfo();a=l.createAbortController();b=a.signal;c=this.updateServiceDataCount(b);e=l.eachAlways([c,this.updateVertexLimitExceeded(c,b)]);f=e.then(function(){return h.updateServiceDataExtent(b)}).catch(function(a){l.isAbortError(a)||t.error("#fetchServiceDataInfo()",a)}).then(function(){f===h.fetchDataInfoPromise&&
(h.fetchDataInfoPromise=null,h.fetchDataInfoAbortController=null);a=null});a&&(this.fetchDataInfoPromise=f);this.fetchDataInfoAbortController=a;return[2,e.catch(function(){})]})})};b.prototype.cancelFetchServiceDataInfo=function(){var a=this.fetchDataInfoAbortController;a&&(this.fetchDataInfoPromise=this.fetchDataInfoAbortController=null,a.abort())};Object.defineProperty(b.prototype,"debug",{get:function(){return{storedFeatures:this.tileFetcher?this.tileFetcher.storedFeatures:0,totalFeatures:this.tileFetcher?
this.tileFetcher.totalFeatures:0,totalVertices:this.tileFetcher?this.tileFetcher.totalVertices:0}},enumerable:!0,configurable:!0});var m;e([c.property({readOnly:!0})],b.prototype,"type",void 0);e([c.property({constructOnly:!0})],b.prototype,"graphics",void 0);e([c.property({constructOnly:!0})],b.prototype,"layerView",void 0);e([c.property()],b.prototype,"extent",null);e([c.property({dependsOn:["tileFetcher.updating","mode","layerView.view.featureTiles.updating","fetchDataInfoPromise","asyncTasks.length"]})],
b.prototype,"updating",null);e([c.property({dependsOn:["updating","tileFetcher.updatingTotal"]})],b.prototype,"updatingTotal",null);e([c.property({dependsOn:["updating","tileFetcher.updatingRemaining"]})],b.prototype,"updatingRemaining",null);e([c.property({dependsOn:["updating","tileFetcher.expectedFeatureDiff"]})],b.prototype,"expectedFeatureDiff",null);e([c.property({dependsOn:["tileFetcher.memoryForUnusedFeatures"]})],b.prototype,"memoryForUnusedFeatures",null);e([c.property({dependsOn:["tileFetcher.maximumNumberOfFeaturesExceeded"]})],
b.prototype,"maximumNumberOfFeaturesExceeded",null);e([c.property({readOnly:!0})],b.prototype,"serviceDataExtent",void 0);e([c.property({readOnly:!0})],b.prototype,"serviceDataCount",void 0);e([c.property({readOnly:!0})],b.prototype,"vertexLimitExceeded",void 0);e([c.property({readOnly:!0,dependsOn:["extent"]})],b.prototype,"filteredDataExtent",null);e([c.property()],b.prototype,"displayFeatureLimit",void 0);e([c.property({type:Number,dependsOn:["displayFeatureLimit"]})],b.prototype,"maximumNumberOfFeatures",
null);e([c.property({readOnly:!0,dependsOn:"serviceDataCount displayFeatureLimit maximumNumberOfFeatures vertexLimitExceeded serviceDataExtent layerView.layer.minScale layerView.view.featureTiles.tilingScheme".split(" ")})],b.prototype,"mode",null);e([c.property({readOnly:!0,dependsOn:["mode","tileFetcher.totalVertices"]})],b.prototype,"maxTotalSnapshotVertices",null);e([c.property({readOnly:!0,dependsOn:["mode"]})],b.prototype,"tileDescriptors",null);e([c.property({constructOnly:!0})],b.prototype,
"hasZ",void 0);e([c.property({constructOnly:!0})],b.prototype,"hasM",void 0);e([c.property({readOnly:!0})],b.prototype,"asyncTasks",void 0);e([c.property()],b.prototype,"tileFetcher",void 0);e([c.property()],b.prototype,"fetchDataInfoPromise",void 0);e([c.property({readOnly:!0,dependsOn:["displayFeatureLimit"]})],b.prototype,"vertexLimitInfo",null);return b=m=e([c.subclass("esri.layers.graphics.controllers.FeatureTileController3D")],b)}(c.declared(D,I));(function(c){(function(b){b.NO_SERVICE_DATA_COUNT=
Infinity;b.MAX_SNAPSHOT_MIN_SCALE_FACTOR=5;b.reset=function(){b.MAX_FEATURE_COUNT_FOR_EXTENT=1E4;b.QUERY_STATISTICS_TIMEOUT=12E3;b.QUERY_EXTENT_TIMEOUT=1E4}})(c.constants||(c.constants={}))})(f||(f={}));f.constants.reset();return f});