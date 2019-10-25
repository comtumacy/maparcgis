// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/assignHelper ../../Color ../../core/watchUtils ../../core/accessorSupport/decorators ../Histogram ../Slider ../Widget ./support/utils".split(" "),function(f,h,m,e,k,g,l,d,n,p,q,r){Object.defineProperty(h,"__esModule",{value:!0});f=function(f){function c(a){var b=f.call(this)||this;b.hasTimeData=null;b.histogram=new n({layout:"vertical"});b.histogramConfig=null;b.labelFormatFunction=
null;b.max=null;b.min=null;b.slider=new p({layout:"vertical",labelsVisible:!0,labelInputsEnabled:!0,rangeLabelsVisible:!0,rangeLabelInputsEnabled:!0});b.state=null;b.viewModel=null;a=b.slider;b.own(a.on("max-change",function(a){return b.emit("max-change",a)}),a.on("min-change",function(a){return b.emit("min-change",a)}),a.on("thumb-change",function(a){return b.emit("thumb-change",a)}),a.on("thumb-drag",function(a){return b.emit("thumb-drag",a)}),l.watch(b,["histogramConfig","max","min"],function(){var a=
b.histogram,c=b.max,d=b.min,e=b.getParamsFromHistogramConfig(b.histogramConfig);a.set(k({},e,{max:c,min:d}))}),l.watch(b,"labelFormatFunction",function(){b.histogram.set({labelFormatFunction:b.labelFormatFunction})}));return b}m(c,f);c.prototype.postInitialize=function(){var a=this.histogramConfig,b=this.labelFormatFunction,c=this.max,d=this.min,e=this.viewModel,a=this.getParamsFromHistogramConfig(void 0===a?{}:a);this.histogram.set(k({},a,{labelFormatFunction:b,max:c,min:d}));this.slider.set({viewModel:e})};
c.prototype.getPropsForStop=function(a){var b=a.color;a=a.offset;var c=b instanceof g?b.toCss(!0):g.fromString(b).toCss(!0),b=b instanceof g?b.toRgba()[3]:null;return{color:c,offset:(100*a).toFixed(2)+"%",opacity:b}};c.prototype.getParamsFromHistogramConfig=function(a){return a?{average:a.average,barCreatedFunction:a.barCreatedFunction,bins:a.bins,dataLineCreatedFunction:a.dataLineCreatedFunction,dataLines:this._getDataLines(a)}:null};c.prototype._getDataLines=function(a){return this._getStandardDeviationDataLines(a.standardDeviation,
a.average,a.standardDeviationCount||1).concat(a.dataLines||[])};c.prototype._getStandardDeviationDataLines=function(a,b,c){return r.getDeviationValues(a,b,c).map(function(a){return{value:a}})};e([d.aliasOf("viewModel.hasTimeData")],c.prototype,"hasTimeData",void 0);e([d.property()],c.prototype,"histogram",void 0);e([d.property()],c.prototype,"histogramConfig",void 0);e([d.aliasOf("viewModel.labelFormatFunction")],c.prototype,"labelFormatFunction",void 0);e([d.aliasOf("viewModel.max")],c.prototype,
"max",void 0);e([d.aliasOf("viewModel.min")],c.prototype,"min",void 0);e([d.property()],c.prototype,"slider",void 0);e([d.aliasOf("viewModel.state")],c.prototype,"state",void 0);e([d.aliasOf("viewModel.values")],c.prototype,"values",void 0);e([d.property()],c.prototype,"viewModel",void 0);return c=e([d.subclass("esri.widgets.smartMapping.SmartMappingSliderBase")],c)}(d.declared(q));h.SmartMappingSliderBase=f});