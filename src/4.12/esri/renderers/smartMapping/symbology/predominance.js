// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/extendsHelper ../../../Color ./size ./support/colors ./support/SymbologyBase ./support/utils".split(" "),function(e,x,m,n,d,k,p,q,f){function l(b,c,a,g){if(c=p[c]){var d=c[b.numColors]||c.stops,h="mesh"!==b.geometryType&&b.worldScale?b.view:null;switch(b.geometryType){case "point":case "multipoint":return r({name:c.name,tags:c.tags,colors:d,noDataColor:a.noDataColor,opacity:1,sizeScheme:g,outline:a.outline,size:a.size},
h);case "polyline":return t({name:c.name,tags:c.tags,colors:d,noDataColor:a.noDataColor,opacity:1,sizeScheme:g,width:a.width},h);case "polygon":return g&&g.marker&&null!=a.markerSize&&(g.marker.size=a.markerSize),u({name:c.name,tags:c.tags,colors:d,noDataColor:a.noDataColor,opacity:a.fillOpacity,outline:a.outline,sizeScheme:g},h);case "mesh":return v({name:c.name,tags:c.tags,colors:d,noDataColor:a.noDataColor,opacity:a.fillOpacity})}}}function r(b,c){return{name:b.name,tags:b.tags.slice(),colors:b.colors.map(function(a){return new d(a)}),
noDataColor:new d(b.noDataColor),outline:{color:new d(b.outline.color),width:b.outline.width},size:c?f.toWorldScale(b.size,c):b.size,sizeScheme:b.sizeScheme,opacity:b.opacity}}function t(b,c){return{name:b.name,tags:b.tags.slice(),colors:b.colors.map(function(a){return new d(a)}),noDataColor:new d(b.noDataColor),width:c?f.toWorldScale(b.width,c):b.width,sizeScheme:b.sizeScheme,opacity:b.opacity}}function u(b,c){var a=b.sizeScheme;a.marker.size=c?f.toWorldScale(a.marker.size,c):a.marker.size;return{name:b.name,
tags:b.tags.slice(),colors:b.colors.map(function(a){return new d(a)}),noDataColor:new d(b.noDataColor),outline:{color:new d(b.outline.color),width:b.outline.width},sizeScheme:a,opacity:b.opacity}}function v(b){return{name:b.name,tags:b.tags.slice(),colors:b.colors.map(function(b){return new d(b)}),noDataColor:new d(b.noDataColor),opacity:b.opacity}}e={color:[153,153,153,.25],width:"1px"};var w={default:{name:"default",label:"Default",description:"Default theme for visualizing features by their predominant category.",
schemes:{point:{light:{common:{noDataColor:"#aaaaaa",outline:e,size:"8px"},primary:"predominant-v1",secondary:"predominant-v2 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")},dark:{common:{noDataColor:"#aaaaaa",outline:{color:[26,26,26,.25],width:"1px"},size:"8px"},primary:"predominant-v2",secondary:"predominant-v1 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")}},
polyline:{light:{common:{noDataColor:"#aaaaaa",width:"2px"},primary:"predominant-v1",secondary:"predominant-v2 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")},dark:{common:{noDataColor:"#aaaaaa",width:"2px"},primary:"predominant-v2",secondary:"predominant-v1 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")}},
polygon:{light:{common:{noDataColor:"#aaaaaa",outline:e,fillOpacity:.8,markerSize:"8px"},primary:"predominant-v1",secondary:"predominant-v2 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")},dark:{common:{noDataColor:"#aaaaaa",outline:{color:[153,153,153,.25],width:"1px"},fillOpacity:.8,markerSize:"8px"},primary:"predominant-v2",secondary:"predominant-v1 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")}}}}};
return new (function(b){function c(){return b.call(this,{themeDictionary:w})||this}n(c,b);c.prototype.getSchemes=function(a){var b=this.getRawSchemes({theme:"default",basemap:a.basemap,geometryType:a.geometryType});if(b){var c=this.getBasemapId(a.basemap,"default"),d=b.common,e=k.getSchemes({basemap:a.basemap,geometryType:a.geometryType,worldScale:a.worldScale,view:a.view}),f=e&&e.primaryScheme;return{primaryScheme:l(a,b.primary,d,f),secondarySchemes:b.secondary.map(function(b){return l(a,b,d,f)}).filter(Boolean),
basemapId:c}}};c.prototype.getSchemeByName=function(a){return this.filterSchemesByName(a)};c.prototype.getSchemesByTag=function(a){return this.filterSchemesByTag(a)};c.prototype.cloneScheme=function(a){if(a)return a=m({},a),a.colors=a.colors.map(function(a){return new d(a)}),a.noDataColor&&(a.noDataColor=new d(a.noDataColor)),"outline"in a&&a.outline&&(a.outline={color:a.outline.color&&new d(a.outline.color),width:a.outline.width}),"sizeScheme"in a&&a.sizeScheme&&(a.sizeScheme=k.cloneScheme(a.sizeScheme)),
a};return c}(q))});