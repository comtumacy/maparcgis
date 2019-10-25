// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/maybe ../../../core/accessorSupport/decorators ../../../renderers/support/utils ../../Slider/SliderViewModel ../support/utils".split(" "),function(t,u,l,n,d,g,f,p,q,r){return function(k){function c(a){var b=k.call(this)||this;b.handlesSyncedToPrimary=!0;b.hasTimeData=!1;b.labelFormatFunction=function(a,c,e){return b.hasTimeData?r.formatDateLabel(a):
b.defaultLabelFormatFunction(a)};return b}n(c,k);Object.defineProperty(c.prototype,"primaryHandleEnabled",{get:function(){var a=this.stops;if(!a||!a.length)return!1;a=a.length;return 3===a||5===a?this._get("primaryHandleEnabled"):!1},set:function(a){this._set("primaryHandleEnabled",a)},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"state",{get:function(){var a=this.min,b=this.values;return g.isSome(this.max)&&g.isSome(a)&&1<b.length?"ready":"disabled"},enumerable:!0,configurable:!0});
Object.defineProperty(c.prototype,"stops",{set:function(a){if(a&&a.length){var b=a.map(function(a){return a.value}),m=this.max,c=this.min,e={};g.isSome(c)&&b.some(function(a){return a<c})&&(e.min=Math.min.apply(Math,b));g.isSome(m)&&b.some(function(a){return a>m})&&(e.max=Math.max.apply(Math,b));this.set(l({},e))}this._set("stops",a)},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"values",{get:function(){var a=this.primaryHandleEnabled,b=this.stops;if(!b||!b.length||2>b.length)return[];
b=b.map(function(a){return a.value});return a?3===b.length?[b[0],b[1],b[2]]:[b[0],b[2],b[4]]:[b[0],b[b.length-1]]},enumerable:!0,configurable:!0});c.prototype.setValue=function(a,b){var c=this.min;b>this.max||b<c||(a=this._getColorStopChanges(a,b),this._updateColorStops(a),this.notifyChange("values"),this.notifyChange("labels"))};c.prototype.getStopInfo=function(){var a=this.min,b=this.max,c=this.stops;return c&&c.length?c.map(function(c){return{color:c.color,offset:(b-c.value)/(b-a)}}):[]};c.prototype._getStopIndexFromValueIndex=
function(a){var b=this.primaryHandleEnabled,c=this.stops;return 0===a?0:b&&1===a?2:c.length-1};c.prototype._getColorStopChanges=function(a,b){return this.primaryHandleEnabled?1===a?this._getColorStopChangesAfterPrimaryHandleMove(a,b):this._getColorStopChangesAfterSecondaryHandleMove(a,b):this._getColorStopChangesAfterHandleMove(a,b)};c.prototype._getColorStopChangesAfterPrimaryHandleMove=function(a,b){var c=this.handlesSyncedToPrimary,f=this.stops,e=this.values,d=this._getStopIndexFromValueIndex(a);
if(c){var c=this.max,d=this.min,g=b-e[a];a=Math.max(Math.min(e[0]+g,c),d);c=Math.max(Math.min(e[2]+g,c),d);return 5===f.length?[{index:0,value:a},{index:1,value:(e[1]+a)/2},{index:2,value:b},{index:3,value:(e[1]+c)/2},{index:4,value:c}]:[{index:0,value:a},{index:1,value:b},{index:2,value:c}]}return 5===f.length?[{index:1,value:(e[1]+e[0])/2},{index:2,value:b},{index:3,value:(e[1]+e[2])/2}]:[{index:d,value:b}]};c.prototype._getColorStopChangesAfterSecondaryHandleMove=function(a,b){var c=this.stops,
d=this.values;a=this._getStopIndexFromValueIndex(a);return 5===c.length?[{index:a,value:b},{index:0===a?1:3,value:(b+d[1])/2}]:[{index:a,value:b}]};c.prototype._getColorStopChangesAfterHandleMove=function(a,b){var c=this.max,d=this.min,e=this.stops,f=this.values,g=this._getStopIndexFromValueIndex(a),d=0===a?d:f[a-1];a=a===f.length-1?c:f[a+1];var h=e.map(function(a){return a.value});h[g]=Math.max(Math.min(b,a),d);var k=h[h.length-1]-h[0],l=e.length-1;return h.map(function(a,b){return{index:b,value:h[0]+
b*k/l}})};c.prototype._updateColorStops=function(a){p.updateColorStops({changes:a,stops:this.stops,isDate:this.hasTimeData})};d([f.property()],c.prototype,"handlesSyncedToPrimary",void 0);d([f.property()],c.prototype,"hasTimeData",void 0);d([f.property()],c.prototype,"labelFormatFunction",void 0);d([f.property({dependsOn:["stops"]})],c.prototype,"primaryHandleEnabled",null);d([f.property({dependsOn:["max","min","values"],readOnly:!0})],c.prototype,"state",null);d([f.property()],c.prototype,"stops",
null);d([f.property({dependsOn:["primaryHandleEnabled","stops"],readOnly:!0})],c.prototype,"values",null);return c=d([f.subclass("esri.widgets.smartMapping.ColorSlider.ColorSliderViewModel")],c)}(f.declared(q))});