// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/awaiterHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/assignHelper ../../../core/maybe ../../../core/promiseUtils ../../../core/libs/gl-matrix-2/mat4f64 ./DefaultErrorContext ./LoaderResult ./internal/Resource".split(" "),function(M,v,u,x,N,C,D,E,F,w,G){function H(c,a){return u(this,void 0,void 0,function(){function d(l,n){return u(this,void 0,void 0,function(){var r,z,q,p,g,m,k,h,f;return x(this,function(e){switch(e.label){case 0:r=
b.nodes[l];z=c.getNodeTransform(l);y.warnUnsupportedIf(null!=r.weights,"Morph targets are not supported.");if(null==r.mesh)return[3,4];q=b.meshes[r.mesh];p=0;g=q.primitives;e.label=1;case 1:if(!(p<g.length))return[3,4];m=g[p];return[4,a(m,z,n,q.name)];case 2:e.sent(),e.label=3;case 3:return p++,[3,1];case 4:k=0,h=r.children||[],e.label=5;case 5:if(!(k<h.length))return[3,8];f=h[k];return[4,d(f,n)];case 6:e.sent(),e.label=7;case 7:return k++,[3,5];case 8:return[2]}})})}var b,g,l,m,h,k,n,t,e,A;return x(this,
function(a){switch(a.label){case 0:b=c.json,g=b.scenes[b.scene||0],l=g.nodes,m=1<l.length,h=0,k=l,a.label=1;case 1:if(!(h<k.length))return[3,4];n=k[h];t=b.nodes[n];e=[d(n,0)];t.extensions&&t.extensions.MSFT_lod&&Array.isArray(t.extensions.MSFT_lod.ids)&&!m&&(A=t.extensions.MSFT_lod.ids,e.push.apply(e,A.map(function(a,b){return d(a,b+1)})));return[4,D.all(e)];case 2:a.sent(),a.label=3;case 3:return h++,[3,1];case 4:return[2]}})})}function I(c,a,d){var b=function(a){var b=d+"_tex_"+(a&&a.id)+(a&&a.name?
"_"+a.name:"");if(a&&!c.textures.has(b)){var g=w.makeTextureSource(a.data,{wrap:{s:B(a.wrapS),t:B(a.wrapT)},mipmap:J.some(function(b){return b===a.minFilter}),noUnpackFlip:!0});c.textures.set(b,g)}return b},g=d+"_mat_"+a.id+"_"+a.name;c.materials.has(g)||(a=w.makeMaterialParameters({color:[a.color[0],a.color[1],a.color[2]],opacity:a.color[3],alphaMode:a.alphaMode,alphaCutoff:a.alphaCutoff,doubleSided:a.doubleSided,colorMixMode:a.ESRI_externalColorMixMode,textureColor:a.colorTexture?b(a.colorTexture):
void 0,textureNormal:a.normalTexture?b(a.normalTexture):void 0,textureOcclusion:a.occlusionTexture?b(a.occlusionTexture):void 0,textureEmissive:a.emissiveTexture?b(a.emissiveTexture):void 0,textureMetallicRoughness:a.metallicRoughnessTexture?b(a.metallicRoughnessTexture):void 0,emissiveFactor:[a.emissiveFactor[0],a.emissiveFactor[1],a.emissiveFactor[2]],metallicFactor:a.metallicFactor,roughnessFactor:a.roughnessFactor}),c.materials.set(g,a));return g}function B(c){if(33071===c||33648===c||10497===
c)return c;y.error("Unexpected TextureSampler WrapMode: "+c)}Object.defineProperty(v,"__esModule",{value:!0});var K=0;v.load=function(c,a,d){void 0===d&&(d={});return u(this,void 0,void 0,function(){var b,g,l,m,h=this;return x(this,function(k){switch(k.label){case 0:return[4,G.Resource.load(c,y,a,d)];case 1:return b=k.sent(),g="gltf_"+K++,l={lods:[],materials:new Map,textures:new Map},m=!(!b.json.asset.extras||"symbolResource"!==b.json.asset.extras.ESRI_type),[4,H(b,function(a,c,e,k){return u(h,void 0,
void 0,function(){var h,m,r,n,q,p,t,u,v,w;return x(this,function(f){switch(f.label){case 0:h=a.mode||4;a:switch(h){case 4:case 5:case 6:m=h;break a;default:m=null}return C.isNone(m)?(y.warnUnsupported("Unsupported primitive mode ("+L[h]+"). Skipping primitive."),[2]):[4,b.getMaterial(a,d)];case 1:return r=f.sent(),q={transform:E.mat4f64.clone(c)},p={},[4,b.getPositionData(a,d)];case 2:return q.attributes=(p.position=f.sent(),p.normal=null,p.texCoord0=null,p.color=null,p.tangent=null,p),[4,b.getIndexData(a,
d)];case 3:n=(q.indices=f.sent(),q.primitiveType=m,q.material=I(l,r,g),q);if(!b.hasNormals(a))return[3,5];t=n.attributes;return[4,b.getNormalData(a,d)];case 4:t.normal=f.sent(),f.label=5;case 5:if(!b.hasTangents(a))return[3,7];u=n.attributes;return[4,b.getTangentData(a,d)];case 6:u.tangent=f.sent(),f.label=7;case 7:if(!b.hasTextureCoordinates(a))return[3,9];v=n.attributes;return[4,b.getTextureCoordinates(a,d)];case 8:v.texCoord0=f.sent(),f.label=9;case 9:if(!b.hasVertexColors(a))return[3,11];w=n.attributes;
return[4,b.getVertexColors(a,d)];case 10:w.color=f.sent(),f.label=11;case 11:return l.lods[e]=l.lods[e]||{parts:[],name:k,lodThreshold:null},l.lods[e].parts.push(n),[2]}})})})];case 2:return k.sent(),[2,{model:l,meta:{isEsriSymbolResource:m,uri:b.uri},customMeta:{}}]}})})};var y=new F.DefaultErrorContext,J=[9987,9985],L="POINTS LINES LINE_LOOP LINE_STRIP TRIANGLES TRIANGLE_STRIP TRIANGLE_FAN".split(" ")});