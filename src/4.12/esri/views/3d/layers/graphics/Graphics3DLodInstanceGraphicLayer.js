// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/support/aaBoundingBox ./featureExpressionInfoUtils ./Graphics3DGraphicElevationContext ./graphicUtils ../../webgl-engine/lib/HighlightUtils".split(" "),function(p,H,I,y,z,A,q,m,g,B,C,D,E){p=function(){function c(b,
a,c,d){this.type="lod-instance";this.alignedTerrainElevation=0;this.needsElevationUpdates=!1;this.graphics3DSymbolLayer=b;this.instanceIndex=a;this.elevationAligner=c;this.elevationContext=new C(d)}c.prototype.initialize=function(b,a){};c.prototype.setVisibility=function(b){var a=this.lodRenderer.instanceData;return b!==a.getVisible(this.instanceIndex)?(a.setVisible(this.instanceIndex,b),!0):!1};c.prototype.destroy=function(){null!=this.instanceIndex&&(this.lodRenderer.instanceData.removeInstance(this.instanceIndex),
this.graphics3DSymbolLayer.notifyDestroyGraphicLayer(this))};c.prototype.alignWithElevation=function(b,a,c){this.elevationAligner&&(B.setContextFeature(this.elevationContext.featureExpressionInfoContext,c),b=this.elevationAligner(this,this.elevationContext,b,a),null!=b&&(this.alignedTerrainElevation=b))};c.prototype.getBSRadius=function(){var b=this.lodRenderer;return b.baseBoundingSphere.radius*b.instanceData.getCombinedMaxScaleFactor(this.instanceIndex)};c.prototype.getCenterObjectSpace=function(b){void 0===
b&&(b=m.vec3f64.create());this.lodRenderer.instanceData.getCombinedLocalTransform(this.instanceIndex,k);return q.vec3.transformMat4(b,this.lodRenderer.baseBoundingSphere.center,k)};c.prototype.getBoundingBoxObjectSpace=function(b){void 0===b&&(b=g.create());this.lodRenderer.instanceData.getCombinedLocalTransform(this.instanceIndex,k);var a=this.lodRenderer.baseBoundingBox;g.empty(b);for(var c=0;8>c;++c)q.vec3.set(d,0===(c&1)?a[0]:a[3],0===(c&2)?a[1]:a[4],0===(c&4)?a[2]:a[5]),q.vec3.transformMat4(d,
d,k),g.expandPointInPlace(b,d);return b};c.prototype.getProjectedBoundingBox=function(b,c,m,F,p){return z(this,void 0,void 0,function(){var a,v,r,e,t,u,f,n,x;return y(this,function(l){switch(l.label){case 0:a=this.getBoundingBoxObjectSpace(p);v=G;r=g.isPoint(a)?1:v.length;this.lodRenderer.instanceData.getGlobalTransform(this.instanceIndex,k);for(e=0;e<r;e++)t=v[e],d[0]=a[t[0]],d[1]=a[t[1]],d[2]=a[t[2]],q.vec3.transformMat4(d,d,k),h[3*e+0]=d[0],h[3*e+1]=d[1],h[3*e+2]=d[2];if(!b(h,0,r))return[2,null];
g.empty(a);u=null;this.calculateRelativeScreenBounds&&(u=this.calculateRelativeScreenBounds());for(e=0;e<3*r;e+=3){for(f=0;3>f;f++)a[f]=Math.min(a[f],h[e+f]),a[f+3]=Math.max(a[f+3],h[e+f]);u&&m.push({location:h.slice(e,e+3),screenSpaceBoundingRect:u})}if(!c)return[3,5];g.center(a,w);if("absolute-height"===this.elevationContext.mode)return[3,5];n=void 0;x=D.demResolutionForBoundingBox(a,c);l.label=1;case 1:return l.trys.push([1,3,,4]),[4,c.service.queryElevation(w[0],w[1],F,x)];case 2:return n=l.sent(),
[3,4];case 3:return l.sent(),n=null,[3,4];case 4:null!=n&&g.offset(a,0,0,-this.alignedTerrainElevation+n),l.label=5;case 5:return[2,a]}})})};c.prototype.addHighlight=function(b,a){var c=this;a=E.generateHighlightId();this.addHighlightId(a);b.addExternal(function(a){c.removeHighlightId(a)},a)};c.prototype.removeHighlight=function(b){this.highlights&&this.highlights.forEach(function(a){return b.remove(a)})};c.prototype.addHighlightId=function(b){this.highlights=this.highlights||new Set;this.highlights.add(b);
this.lodRenderer.instanceData.setHighlight(this.instanceIndex,!0)};c.prototype.removeHighlightId=function(b){this.highlights&&(this.highlights.delete(b),this.lodRenderer.instanceData.setHighlight(this.instanceIndex,0<this.highlights.size),0===this.highlights.size&&(this.highlights=null))};Object.defineProperty(c.prototype,"lodRenderer",{get:function(){return this.graphics3DSymbolLayer.lodRenderer},enumerable:!0,configurable:!0});return c}();var h=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
d=m.vec3f64.create(),w=m.vec3f64.create(),G=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],[3,4,5]],k=A.mat4f64.create();return p});