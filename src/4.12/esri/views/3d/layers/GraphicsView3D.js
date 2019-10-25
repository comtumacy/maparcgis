// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/maybe ../../../core/promiseUtils ../../../core/accessorSupport/decorators ../../../symbols/support/defaults3D ./graphics/Graphics3DGraphicLikeLayerView ../../layers/GraphicsView".split(" "),function(p,q,e,c,f,g,h,k,b,l,m,n){return function(d){function a(a){a=d.call(this)||this;a.graphics3d=null;a.slicePlaneEnabled=
!1;a.supportsDraping=!0;a.overlayUpdating=!1;a.mockLayerId="__sceneView.graphics-"+Date.now().toString(16);return a}e(a,d);a.prototype.initialize=function(){this._set("graphics3d",new m({owner:this,layer:{id:this.mockLayerId,uid:this.mockLayerId}}));this.graphics3d.setup()};a.prototype.destroy=function(){this.graphics3d&&(this.graphics3d.destroy(),this._set("graphics3d",null))};Object.defineProperty(a.prototype,"updating",{get:function(){return!(this.graphics3d&&!this.graphics3d.updating&&!this.overlayUpdating)},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"drawingOrder",{set:function(a){this.graphics3d.graphicsCore.setDrawingOrder(a);this._set("drawingOrder",a)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"graphics3DGraphics",{get:function(){return this.graphics3d.graphicsCore.graphics3DGraphics},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"graphics3DGraphicsByObjectID",{get:function(){return this.graphics3d.graphicsCore.graphics3DGraphicsByObjectID},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"symbolUpdateType",{get:function(){return this.graphics3d.graphicsCore.symbolUpdateType},enumerable:!0,configurable:!0});a.prototype.getRenderingInfo=function(a){return{symbol:a.symbol||l.getDefaultSymbol3D(a.geometry)}};a.prototype.getGraphicFromGraphicUid=function(a){return this.graphics3d.getGraphicFromGraphicUid(a)};a.prototype.whenGraphicBounds=function(a,b){return this.graphics3d.whenGraphicBounds(a,b)};a.prototype.graphicChanged=
function(a){this.graphics3d.graphicsCore.graphicUpdateHandler(a)};a.prototype.queryGraphics=function(){return k.resolve(this.loadedGraphics)};a.prototype.fetchPopupFeatures=function(a,b){return g(this,void 0,void 0,function(){return f(this,function(a){return[2,h.isSome(b)?b.clientGraphics:null]})})};c([b.property({readOnly:!0,aliasOf:"view.graphics"})],a.prototype,"graphics",void 0);c([b.property({aliasOf:"graphics"})],a.prototype,"loadedGraphics",void 0);c([b.property({readOnly:!0,dependsOn:["graphics3d.updating",
"overlayUpdating"]})],a.prototype,"updating",null);c([b.property({constructOnly:!0})],a.prototype,"view",void 0);c([b.property()],a.prototype,"graphics3d",void 0);c([b.property({type:Boolean})],a.prototype,"slicePlaneEnabled",void 0);c([b.property({aliasOf:"graphics3d.graphicsCore.hasDraped"})],a.prototype,"hasDraped",void 0);c([b.property({type:Boolean})],a.prototype,"supportsDraping",void 0);c([b.property({type:Boolean})],a.prototype,"overlayUpdating",void 0);c([b.property()],a.prototype,"drawingOrder",
null);return a=c([b.subclass("esri.views.3d.layers.GraphicsView3D")],a)}(b.declared(n))});