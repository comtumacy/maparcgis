// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../Color ../../../../core/compilerUtils ../../../../core/maybe ../../../../core/screenUtils ../../../../core/libs/gl-matrix-2/vec4f64".split(" "),function(m,b,k,l,e,d,f){function g(h,a,c){if(e.isNone(a))return null;var b=e.isSome(a.color)?f.vec4f64.fromArray(k.toUnitRGBA(a.color)):f.vec4f64.fromValues(0,0,0,0);c=c.opacity;switch(a.type){case "solid":return h.createSolidEdgeMaterial({color:b,size:d.pt2px(a.size),extensionLength:d.pt2px(a.extensionLength),opacity:c});
case "sketch":return h.createSketchEdgeMaterial({color:b,size:d.pt2px(a.size),extensionLength:d.pt2px(a.extensionLength),opacity:c});default:l.neverReached(a)}}Object.defineProperty(b,"__esModule",{value:!0});b.createMaterial=function(b,a,c){return g(b,a&&a.enabled&&a.edges||null,c)};b.createMaterialFromEdges=g});