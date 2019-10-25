// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../../../core/tsSupport/assignHelper ../../../../webgl ../enums ../Utils ./WGLGeometryBrush ../materialKey/MaterialKey".split(" "),function(h,k,l,t,u,m,p,q,r){Object.defineProperty(k,"__esModule",{value:!0});h=function(d){function e(){return null!==d&&d.apply(this,arguments)||this}l(e,d);e.prototype.dispose=function(){};e.prototype.getGeometryType=function(){return m.WGLGeometryType.MARKER};e.prototype.drawGeometry=function(f,
e,a,d){var g=f.context,h=f.painter,c=f.rendererInfo,b=f.drawPhase,k=f.state,l=a.indexCount,m=a.indexFrom;a=r.MarkerMaterialKey.load(a.materialKey);var n=p.createProgramDescriptor(a.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_vertexOffset",count:2,type:5122},{location:2,name:"a_texAndBitSet",count:4,type:5121},{location:3,name:"a_id",count:4,type:5121},{location:4,name:"a_color",count:4,type:5121,normalized:!0},{location:5,name:"a_outlineColor",count:4,type:5121,
normalized:!0},{location:6,name:"a_sizeAndOutlineWidth",count:4,type:5121}]}),b=h.materialManager.getProgram(a,b,c,"icon",n.attributes);d=this._getVAO(g,n.bufferLayouts,n.attributes,d);g.bindProgram(b);g.bindVAO(d);a.textureBinding&&h.textureManager.bindTextures(g,b,a,4);this._setSharedUniforms(b,f,e);b.setUniformMatrix3fv("u_displayMat3",a.vvRotation?k.displayViewMat3:k.displayMat3);a.vvSizeMinMaxValue&&b.setUniform4fv("u_vvSizeMinMaxValue",c.vvSizeMinMaxValue);a.vvSizeScaleStops&&b.setUniform1f("u_vvSizeScaleStopsValue",
c.vvSizeScaleStopsValue);a.vvSizeFieldStops&&(b.setUniform1fv("u_vvSizeFieldStopsValues",c.vvSizeFieldStopsValues),b.setUniform1fv("u_vvSizeFieldStopsSizes",c.vvSizeFieldStopsSizes));a.vvSizeUnitValue&&b.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",c.vvSizeUnitValueToPixelsRatio);a.vvColor&&(b.setUniform1fv("u_vvColorValues",c.vvColorValues),b.setUniform4fv("u_vvColors",c.vvColors));a.vvOpacity&&(b.setUniform1fv("u_vvOpacityValues",c.vvOpacityValues),b.setUniform1fv("u_vvOpacities",c.vvOpacities));
a.vvRotation&&b.setUniform1f("u_vvRotationType","geographic"===c.vvMaterialParameters.vvRotationType?0:1);g.drawElements(4,l,5125,4*m);g.bindVAO(null)};return e}(q.default);k.default=h});