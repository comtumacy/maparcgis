// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/libs/gl-matrix-2/mat4 ../../../../../core/libs/gl-matrix-2/mat4f32 ../../../../../core/libs/gl-matrix-2/vec3f32 ../../../../../core/libs/gl-matrix-2/vec4f32 ../../../../webgl ../../../engine ../GeometryUtils ./BackgroundRenderer ./CircleRenderer ./FadeRecorder ./FillRenderer ./LineRenderer ./SymbolRenderer ./TileInfoRenderer ./shaders/ProgramCache".split(" "),function(D,E,k,m,p,r,q,t,u,v,w,x,y,z,A,B,C){return function(){function g(a,b,d){void 0===d&&(d=
!0);this._extrudeMatrix=m.mat4f32.create();this._extrudeNoRotationMatrix=m.mat4f32.create();this._extrudeRotateVector=p.vec3f32.fromValues(0,0,1);this._extrudeScaleVector=p.vec3f32.fromValues(1,1,1);this._backgroundColor=r.vec4f32.fromValues(1,0,0,1);this._state={rotation:0,size:[0,0]};this._cachedRotation=this._cachedHeight=this._cachedWidth=0;this._blitRenderer=new t.BitBlitRenderer;this._programCache=this._boundFBO=this._globalOpacityFBO=null;this._spriteMosaic=a;this._glyphMosaic=b;this._ignoreSpeed=
!d;this._fadeRecorder=new x.FadeRecorder(300)}g.prototype.dispose=function(){this._backgroundRenderer&&(this._backgroundRenderer.dispose(),this._backgroundRenderer=null);this._lineRenderer&&(this._lineRenderer.dispose(),this._lineRenderer=null);this._fillRenderer&&(this._fillRenderer.dispose(),this._fillRenderer=null);this._symbolRenderer&&(this._symbolRenderer.dispose(),this._symbolRenderer=null);this._circleRenderer&&(this._circleRenderer.dispose(),this._circleRenderer=null);this._tileInfoRenderer&&
(this._tileInfoRenderer.dispose(),this._tileInfoRenderer=null);this._hittestFBO&&(this._hittestFBO.dispose(),this._hittestFBO=null);this._globalOpacityFBO&&(this._globalOpacityFBO.dispose(),this._globalOpacityFBO=null);this._blitRenderer&&(this._blitRenderer.dispose(),this._blitRenderer=null);this._boundFBO=null;this._programCache&&(this._programCache.dispose(),this._programCache=null);this._cachedRotation=this._cachedHeight=this._cachedWidth=0};g.prototype.initializeProgramCache=function(a){if(null===
this._programCache){var b=new C.default;b.initialize(a);this._backgroundRenderer=new v(b);this._lineRenderer=new z(b);this._fillRenderer=new y(b);this._symbolRenderer=new A(b);this._circleRenderer=new w(b);this._tileInfoRenderer=new B(b);this._programCache=b}};g.prototype.setStateParams=function(a,b,d){this._fadeRecorder.recordLevel(d);this._state=a;if(this._state.size[0]!==this._cachedWidth||this._state.size[1]!==this._cachedHeight||this._state.rotation!==this._cachedRotation)this._extrudeScaleVector[0]=
2/a.size[0],this._extrudeScaleVector[1]=-2/a.size[1],k.mat4.identity(this._extrudeMatrix),k.mat4.rotate(this._extrudeMatrix,this._extrudeMatrix,-a.rotation*u.C_DEG_TO_RAD,this._extrudeRotateVector),k.mat4.scale(this._extrudeMatrix,this._extrudeMatrix,this._extrudeScaleVector),k.mat4.transpose(this._extrudeMatrix,this._extrudeMatrix),k.mat4.identity(this._extrudeNoRotationMatrix),k.mat4.scale(this._extrudeNoRotationMatrix,this._extrudeNoRotationMatrix,this._extrudeScaleVector),k.mat4.transpose(this._extrudeNoRotationMatrix,
this._extrudeNoRotationMatrix),this._cachedWidth=this._state.size[0],this._cachedHeight=this._state.size[1],this._cachedRotation=this._state.rotation};g.prototype.drawClippingMasks=function(a,b){if(0!==b.length){a.setDepthWriteEnabled(!1);a.setDepthTestEnabled(!1);a.setStencilTestEnabled(!0);a.setBlendingEnabled(!1);a.setColorMask(!1,!1,!1,!1);a.setStencilOp(7680,7680,7681);a.setStencilWriteMask(255);a.setClearStencil(0);a.clear(a.gl.STENCIL_BUFFER_BIT);for(var d=0;d<b.length;d++){var e=b[d];e.attached&&
e.visible&&(a.setStencilFunctionSeparate(1032,519,e.stencilData.reference,e.stencilData.mask),this._backgroundRenderer.renderSolidColor(a,{u_matrix:e.tileTransform.transform,u_normalized_origin:e.tileTransform.displayCoord,u_coord_range:e.coordRange,u_depth:0,u_color:this._backgroundColor}))}a.setColorMask(!0,!0,!0,!0);a.setBlendingEnabled(!0)}};g.prototype.renderDebug=function(a,b){var d=b.key;this._backgroundColor.set([d.col%2,d.row%2,0===d.col%2&&0===d.row%2?1:0,.5]);this._backgroundRenderer.renderSolidColor(a,
{u_matrix:b.tileTransform.transform,u_normalized_origin:b.tileTransform.displayCoord,u_coord_range:b.coordRange,u_depth:0,u_color:this._backgroundColor})};g.prototype.renderBucket=function(a,b,d,e,c,f,h,g){if(!h||void 0!==h.minzoom&&h.minzoom>d+1E-6||f.key.level===e&&void 0!==h.maxzoom&&h.maxzoom<=d-1E-6)return 0;switch(b.type){case 0:if(2!==c)return this._renderBackground(a,b,d,c,f,h,g);break;case 1:if(2!==c)return this._renderFill(a,b,d,c,f,h,g);break;case 2:if(1===c||3===c)return this._renderLine(a,
b,d,c,f,h,g);break;case 3:if(2===c||3===c)return this._renderSymbol(a,b,d,c,e,f,h,g);break;case 4:if(2===c||3===c)return this._renderCircle(a,b,d,c,e,f,h,g)}return 0};g.prototype.renderTileInfo=function(a,b){this._tileInfoRenderer.render(a,b)};g.prototype.setGlobalOpacity=function(a,b,d){if(1!==d){this._boundFBO=a.getBoundFramebufferObject();d=b.pixelRatio;var e=b.state.size;b=Math.round(e[0]*d);d=Math.round(e[1]*d);if(null===this._globalOpacityFBO||this._globalOpacityFBO.width!==b||this._globalOpacityFBO.height!==
d)null!==this._globalOpacityFBO&&this._globalOpacityFBO.dispose(),this._globalOpacityFBO=q.FramebufferObject.create(a,{colorTarget:0,depthStencilTarget:3,width:b,height:d});a.bindFramebuffer(this._globalOpacityFBO);a.setClearColor(0,0,0,0);a.clear(a.gl.COLOR_BUFFER_BIT)}};g.prototype.applyGlobalOpacity=function(a,b,d){if(1!==d){var e=b.pixelRatio,c=b.state.size;b=c[0];var c=c[1],f=a.getViewport();a.setViewport(0,0,e*b,e*c);a.bindFramebuffer(this._boundFBO);this._blitRenderer.render(a,this._globalOpacityFBO.colorTexture,
9728,d);a.setViewport(f.x,f.y,f.width,f.height);this._boundFBO=null}};g.prototype.needsRedraw=function(){return this._fadeRecorder.needsRedraw()};g.prototype.hitTest=function(a,b,d,e,c,f,h){var g=[0,0],n=[0,0],k=a.state;k.toMap(g,[0,0]);k.toMap(n,[f,f]);b=e.filter(function(a){return!(g[0]>a.bounds[2]||n[0]<a.bounds[0]||g[1]<a.bounds[3]||n[1]>a.bounds[1])});if(0===b.length)return[];b.sort(function(a,b){return a.key.level-b.key.level});d=b.length;for(e=1;e<=d;e++){var l=b[e-1];l.attached&&(l.stencilData.reference=
e,l.stencilData.mask=255)}h(k,c,b);c=a.context;this._hittestFBO||(this._hittestFBO=q.FramebufferObject.create(c,{colorTarget:0,depthStencilTarget:3,width:f,height:f}));h=c.getViewport();k=c.getBoundFramebufferObject();c.bindFramebuffer(this._hittestFBO);c.setViewport(0,0,f,f);e=c.gl;c.setDepthWriteEnabled(!0);c.setStencilWriteMask(255);c.setClearColor(1,1,1,1);c.setClearDepth(1);c.setClearStencil(0);c.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT|e.STENCIL_BUFFER_BIT);c.setDepthWriteEnabled(!1);this.drawClippingMasks(c,
b);c.setBlendingEnabled(!1);c.setStencilWriteMask(0);c.setStencilOp(7680,7680,7681);c.setDepthFunction(515);c.setDepthTestEnabled(!0);c.setDepthWriteEnabled(!0);c.setStencilTestEnabled(!0);for(e=0;e<d;e++)l=b[e],l.attached&&l.doRender(a);c.setStencilTestEnabled(!1);c.setDepthTestEnabled(!1);this._readbackBuffer||(this._readbackBuffer=new Uint8Array(4*f*f),this._readbackBuffer32=new Uint32Array(this._readbackBuffer.buffer));this._hittestFBO.readPixels(0,0,f,f,6408,5121,this._readbackBuffer);a=new Set;
f*=f;b=this._readbackBuffer32[Math.round(f/2)];4294967295!==b&&a.add(b);for(e=0;e<f;e++)b=this._readbackBuffer32[e],4294967295!==b&&a.add(b);c.bindFramebuffer(k);c.setViewport(h.x,h.y,h.width,h.height);var m=[];a.forEach(function(a){m.push(a)});return m};g.prototype._renderBackground=function(a,b,d,e,c,f,g){return this._backgroundRenderer.render(a,b,d,e,c,f,this._spriteMosaic,this._spriteMosaic.pixelRatio,g)};g.prototype._renderLine=function(a,b,d,e,c,f,g){return this._lineRenderer.render(a,b,d,e,
this._state,c,f,this._spriteMosaic,this._extrudeMatrix,this._spriteMosaic.pixelRatio,g)};g.prototype._renderFill=function(a,b,d,e,c,f,g){return this._fillRenderer.render(a,b,d,this._state.rotation,e,c,f,this._spriteMosaic,this._extrudeMatrix,this._spriteMosaic.pixelRatio,g)};g.prototype._renderCircle=function(a,b,d,e,c,f,g,k){var h=!0;c===f.key.level&&(h=!1);a.setStencilTestEnabled(h);return this._circleRenderer.render(a,b,d,e,this._state.rotation,f,g,this._extrudeMatrix,k)};g.prototype._renderSymbol=
function(a,b,d,e,c,f,g,k){var h=!0;c===f.key.level&&(h=!1);a.setStencilTestEnabled(h);return this._symbolRenderer.render(a,b,d,e,this._state.rotation,this._fadeRecorder.getFadeValues(this._ignoreSpeed),f,g,this._spriteMosaic,this._glyphMosaic,this._extrudeMatrix,this._extrudeNoRotationMatrix,this._spriteMosaic.pixelRatio,k)};return g}()});