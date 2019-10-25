// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/maybe ../core/accessorSupport/decorators ./Symbol3DLayer ./support/ObjectSymbol3DLayerResource ./support/Symbol3DAnchorPosition3D ./support/Symbol3DMaterial".split(" "),function(p,q,h,d,k,c,l,m,f,n){return function(g){function b(a){a=g.call(this)||this;a.material=null;a.castShadows=!0;a.resource=null;a.type="object";a.width=void 0;a.height=void 0;a.depth=void 0;a.anchor=void 0;a.anchorPosition=
void 0;a.heading=void 0;a.tilt=void 0;a.roll=void 0;return a}h(b,g);e=b;b.prototype.clone=function(){return new e({heading:this.heading,tilt:this.tilt,roll:this.roll,anchor:this.anchor,anchorPosition:this.anchorPosition&&this.anchorPosition.clone(),depth:this.depth,enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),height:this.height,material:k.isSome(this.material)?this.material.clone():null,castShadows:this.castShadows,resource:this.resource&&this.resource.clone(),
width:this.width})};Object.defineProperty(b.prototype,"isPrimitive",{get:function(){return!this.resource||"string"!==typeof this.resource.href},enumerable:!0,configurable:!0});var e;d([c.property({type:n.default,json:{write:!0}})],b.prototype,"material",void 0);d([c.property({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],b.prototype,"castShadows",void 0);d([c.property({type:m.default,json:{write:!0}})],b.prototype,"resource",void 0);d([c.enumeration.serializable()({Object:"object"})],
b.prototype,"type",void 0);d([c.property({type:Number,json:{write:!0}})],b.prototype,"width",void 0);d([c.property({type:Number,json:{write:!0}})],b.prototype,"height",void 0);d([c.property({type:Number,json:{write:!0}})],b.prototype,"depth",void 0);d([c.enumeration.serializable()({center:"center",top:"top",bottom:"bottom",origin:"origin",relative:"relative"}),c.property({json:{default:"origin"}})],b.prototype,"anchor",void 0);d([c.property({type:f.Symbol3DAnchorPosition3D,json:{type:[Number],read:{reader:function(a){return new f.Symbol3DAnchorPosition3D({x:a[0],
y:a[1],z:a[2]})}},write:{writer:function(a,b){b.anchorPosition=[a.x,a.y,a.z]},overridePolicy:function(){return{enabled:"relative"===this.anchor}}}}})],b.prototype,"anchorPosition",void 0);d([c.property({type:Number,json:{write:!0}})],b.prototype,"heading",void 0);d([c.property({type:Number,json:{write:!0}})],b.prototype,"tilt",void 0);d([c.property({type:Number,json:{write:!0}})],b.prototype,"roll",void 0);d([c.property({readOnly:!0,dependsOn:["resource","resource.href"]})],b.prototype,"isPrimitive",
null);return b=e=d([c.subclass("esri.symbols.ObjectSymbol3DLayer")],b)}(c.declared(l))});