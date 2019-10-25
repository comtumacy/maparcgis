// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Collection ../../core/JSONSupport ../../core/lang ../../core/uuid ../../core/accessorSupport/decorators ./BuildingFilterAuthoringInfo ./BuildingFilterAuthoringInfoCheckbox ./BuildingFilterBlock".split(" "),function(r,t,h,c,k,l,f,m,b,n,g,p){var q=k.ofType(p);return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.description=null;a.filterBlocks=null;a.id=m.generateUUID();
a.name=null;return a}h(a,d);e=a;a.prototype.clone=function(){return new e({description:this.description,filterBlocks:f.clone(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:f.clone(this.filterAuthoringInfo)})};var e;c([b.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);c([b.property({type:q,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"filterBlocks",void 0);c([b.property({types:{key:"type",base:n,typeMap:{checkbox:g}},json:{read:function(a){switch(a&&
a.type){case "checkbox":return g.fromJSON(a);default:return null}},write:!0}})],a.prototype,"filterAuthoringInfo",void 0);c([b.property({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"id",void 0);c([b.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"name",void 0);return a=e=c([b.subclass("esri.layers.support.BuildingFilter")],a)}(b.declared(l))});