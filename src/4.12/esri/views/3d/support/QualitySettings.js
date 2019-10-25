// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/accessorSupport/decorators".split(" "),function(m,n,f,c,g,b){var h=function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.minTotalNumberOfFeatures=2E3;a.maxTotalNumberOfFeatures=5E4;a.maxTotalNumberOfPrimitives=17E5;return a}f(a,d);c([b.property()],a.prototype,"minTotalNumberOfFeatures",void 0);c([b.property()],a.prototype,"maxTotalNumberOfFeatures",
void 0);c([b.property()],a.prototype,"maxTotalNumberOfPrimitives",void 0);return a=c([b.subclass("esri.views.3d.support.QualitySettings.Graphics3DSettings")],a)}(b.declared(g)),e=function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.lodFactor=1;return a}f(a,d);c([b.property()],a.prototype,"lodFactor",void 0);return a=c([b.subclass("esri.views.3d.support.QualitySettings.LoDFactorSettings")],a)}(b.declared(g)),k=function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;
a["3dObject"]=new e;a.point=new e;a.integratedMesh=new e;a.pointCloud=new e;a.uncompressedTextureDownsamplingEnabled=!1;return a}f(a,d);c([b.property({type:e})],a.prototype,"3dObject",void 0);c([b.property({type:e})],a.prototype,"point",void 0);c([b.property({type:e})],a.prototype,"integratedMesh",void 0);c([b.property({type:e})],a.prototype,"pointCloud",void 0);c([b.property()],a.prototype,"uncompressedTextureDownsamplingEnabled",void 0);return a=c([b.subclass("esri.views.3d.support.QualitySettings.SceneServiceSettings")],
a)}(b.declared(g)),l=function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.lodBias=0;a.angledSplitBias=1;return a}f(a,d);c([b.property()],a.prototype,"lodBias",void 0);c([b.property()],a.prototype,"angledSplitBias",void 0);return a=c([b.subclass("esri.views.3d.support.QualitySettings.TiledSurfaceSettings")],a)}(b.declared(g));return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.graphics3D=new h;a.sceneService=new k;a.tiledSurface=new l;a.antialiasingEnabled=
!0;return a}f(a,d);c([b.property({type:h})],a.prototype,"graphics3D",void 0);c([b.property({type:k})],a.prototype,"sceneService",void 0);c([b.property({type:l})],a.prototype,"tiledSurface",void 0);c([b.property()],a.prototype,"antialiasingEnabled",void 0);c([b.property()],a.prototype,"memoryLimit",void 0);c([b.property()],a.prototype,"additionalCacheMemory",void 0);c([b.property()],a.prototype,"frameRate",void 0);c([b.property()],a.prototype,"maximumRenderResolution",void 0);c([b.property()],a.prototype,
"maximumPixelRatio",void 0);return a=c([b.subclass("esri.views.3d.support.QualitySettings.QualitySettings")],a)}(b.declared(g))});