// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ./core/tsSupport/assignHelper ./core/tsSupport/declareExtendsHelper ./core/tsSupport/decorateHelper ./core/tsSupport/generatorHelper ./core/tsSupport/awaiterHelper @dojo/framework/shim/array @dojo/framework/shim/Set ./core/Collection ./core/JSONSupport ./core/lang ./core/Logger ./core/promiseUtils ./core/accessorSupport/decorators ./core/accessorSupport/ensureType ./layers/support/fieldUtils ./popup/content ./popup/ExpressionInfo ./popup/FieldInfo ./popup/LayerOptions ./popup/RelatedRecordsInfo ./popup/content/AttachmentsContent ./popup/content/Content ./popup/content/FieldsContent ./popup/content/MediaContent ./popup/content/TextContent ./popup/content/support/mediaInfoTypes ./support/actions/ActionBase ./support/actions/ActionButton ./support/actions/ActionToggle".split(" "),
function(P,Q,R,w,f,h,k,x,y,l,z,g,A,u,d,B,v,C,D,E,F,G,m,H,n,p,q,I,J,K,L){var M=l.ofType({key:"type",defaultKeyValue:"button",base:J,typeMap:{button:K,toggle:L}}),N={base:H,key:"type",typeMap:{media:p,text:q,attachments:m,fields:n}},O=A.getLogger("esri.PopupTemplate");return function(r){function b(){var a=null!==r&&r.apply(this,arguments)||this;a.actions=null;a.content="";a.expressionInfos=null;a.fieldInfos=null;a.layerOptions=null;a.lastEditInfoEnabled=!0;a.outFields=null;a.overwriteActions=!1;a.title=
"";a.relatedRecordsInfo=null;return a}w(b,r);t=b;b.prototype.castContent=function(a){if(Array.isArray(a))return a.map(function(a){return B.ensureOneOfType(N,a)});if("string"===typeof a||"function"===typeof a||a instanceof HTMLElement||u.isThenable(a))return a;O.error("content error","unsupported content value",{value:a});return null};b.prototype.readContent=function(a,c){var e=c.description,b=c.mediaInfos;a=c.popupElements;c=c.showAttachments;if(Array.isArray(a)&&0<a.length)return a.map(function(a){if("media"===
a.type)return!a.mediaInfos&&b&&(a.mediaInfos=b),p.fromJSON(a);if("text"===a.type)return!a.text&&e&&(a.text=e),q.fromJSON(a);if("attachments"===a.type)return m.fromJSON(a);if("fields"===a.type)return n.fromJSON(a)}).filter(Boolean);a=[];e?a.push(new q({text:e})):a.push(new n);Array.isArray(b)&&b.length&&a.push(p.fromJSON({mediaInfos:b}));c&&a.push(m.fromJSON({displayType:"list"}));return a.length?a:e};b.prototype.writeContent=function(a,c){"string"===typeof a?c.description=a:Array.isArray(a)&&(c.popupElements=
a.map(function(a){return a&&a.toJSON()}),c.popupElements.forEach(function(a){"attachments"!==a.type||c.showAttachments?"media"!==a.type||c.mediaInfos?"text"!==a.type||c.description||(a.text&&(c.description=a.text),delete a.text):(a.mediaInfos&&(c.mediaInfos=g.clone(a.mediaInfos)),delete a.mediaInfos):c.showAttachments=!0}))};b.prototype.writeLayerOptions=function(a,c){c.layerOptions=!a||null===a.showNoDataRecords&&null===a.returnTopmostRaster?null:a.toJSON()};b.prototype.writeTitle=function(a,c){c.title=
a||""};b.prototype.clone=function(){var a=this.actions,a=a?g.clone(a.toArray()):[];return new t({actions:a,content:Array.isArray(this.content)?g.clone(this.content):this.content,expressionInfos:Array.isArray(this.expressionInfos)?g.clone(this.expressionInfos):null,fieldInfos:Array.isArray(this.fieldInfos)?g.clone(this.fieldInfos):null,layerOptions:this.layerOptions?g.clone(this.layerOptions):null,lastEditInfoEnabled:this.lastEditInfoEnabled,outFields:Array.isArray(this.outFields)?g.clone(this.outFields):
null,overwriteActions:this.overwriteActions,title:this.title,relatedRecordsInfo:this.relatedRecordsInfo?g.clone(this.relatedRecordsInfo):null})};b.prototype.collectRequiredFields=function(a,c){return k(this,void 0,void 0,function(){return h(this,function(b){switch(b.label){case 0:return[4,this._collectExpressionInfoFields(a,c,this.expressionInfos)];case 1:return b.sent(),v.collectFields(a,c,(this.outFields||[]).concat(this._getActionsFields(this.actions),this._getTitleFields(this.title),this._getContentFields(this.content))),
[2]}})})};b.prototype.getRequiredFields=function(a){return k(this,void 0,void 0,function(){var c;return h(this,function(b){switch(b.label){case 0:return c=new y.default,[4,this.collectRequiredFields(c,a)];case 1:return b.sent(),[2,x.from(c).sort()]}})})};b.prototype._getContentElementFields=function(a){var c=this;if(!a||"attachments"===a.type)return[];if("fields"===a.type)return this._getFieldInfoFields(a.fieldInfos||this.fieldInfos);if("media"===a.type)return(a.mediaInfos||[]).reduce(function(a,
b){return a.concat(c._getMediaInfoFields(b))},[]);if("text"===a.type)return this._extractFieldNames(a.text)};b.prototype._getMediaInfoFields=function(a){var b=a.caption,e=a.value||{},d=e.fields,f=void 0===d?[]:d,d=e.normalizeField,g=e.tooltipField,h=e.sourceURL,e=e.linkURL;a=this._extractFieldNames(a.title).concat(this._extractFieldNames(b),this._extractFieldNames(h),this._extractFieldNames(e),f);d&&a.push(d);g&&a.push(g);return a};b.prototype._getContentFields=function(a){var b=this;return"string"===
typeof a?this._extractFieldNames(a):Array.isArray(a)?a.reduce(function(a,c){return a.concat(b._getContentElementFields(c))},[]):[]};b.prototype._collectExpressionInfoFields=function(a,b,e){return k(this,void 0,void 0,function(){return h(this,function(c){switch(c.label){case 0:return e?[4,u.all(e.map(function(c){return v.collectArcadeFieldNames(a,b,c.expression)}))]:[2];case 1:return c.sent(),[2]}})})};b.prototype._getFieldInfoFields=function(a){return a?a.filter(function(a){return"undefined"===typeof a.visible?
!0:!!a.visible}).map(function(a){return a.fieldName}).filter(function(a){return-1===a.indexOf("relationships/")&&-1===a.indexOf("expression/")}):[]};b.prototype._getActionsFields=function(a){var b=this;return a?a.toArray().reduce(function(a,c){return a.concat(b._getActionFields(c))},[]):[]};b.prototype._getActionFields=function(a){var b=a.className,e=a.type,e="button"===e||"toggle"===e?a.image:"";return this._extractFieldNames(a.title).concat(this._extractFieldNames(b),this._extractFieldNames(e))};
b.prototype._getTitleFields=function(a){return"string"===typeof a?this._extractFieldNames(a):[]};b.prototype._extractFieldNames=function(a){if(!a||"string"!==typeof a)return[];a=a.match(/{[^}]*}/g);if(!a)return[];var b=/\{(\w+):.+\}/;return(a=a.filter(function(a){return!(0===a.indexOf("{relationships/")||0===a.indexOf("{expression/"))}).map(function(a){return a.replace(b,"{$1}")}))?a.map(function(a){return a.slice(1,-1)}):[]};var t;f([d.property({type:M})],b.prototype,"actions",void 0);f([d.property()],
b.prototype,"content",void 0);f([d.cast("content")],b.prototype,"castContent",null);f([d.reader("content",["description","popupElements","mediaInfos","showAttachments"])],b.prototype,"readContent",null);f([d.writer("content",{popupElements:{type:l.ofType(C.types)},showAttachments:{type:Boolean},mediaInfos:{type:l.ofType(I.types)},description:{type:String}})],b.prototype,"writeContent",null);f([d.property({type:[D],json:{write:!0}})],b.prototype,"expressionInfos",void 0);f([d.property({type:[E],json:{write:!0}})],
b.prototype,"fieldInfos",void 0);f([d.property({type:F})],b.prototype,"layerOptions",void 0);f([d.writer("layerOptions")],b.prototype,"writeLayerOptions",null);f([d.property({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],b.prototype,"lastEditInfoEnabled",void 0);f([d.property()],b.prototype,"outFields",void 0);f([d.property()],b.prototype,"overwriteActions",void 0);f([d.property({json:{type:String}})],b.prototype,"title",void 0);f([d.writer("title")],
b.prototype,"writeTitle",null);f([d.property({type:G,json:{write:!0}})],b.prototype,"relatedRecordsInfo",void 0);return b=t=f([d.subclass("esri.PopupTemplate")],b)}(d.declared(z))});