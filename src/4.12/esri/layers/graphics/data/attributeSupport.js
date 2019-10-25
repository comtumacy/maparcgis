// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper @dojo/framework/shim/Set ../../../core/Error ../../../core/sql/WhereClauseCache".split(" "),function(w,c,x,t,d,u){function q(b,a){return b?m.get(b,a):null}function k(b,a,c,e){void 0===e&&(e=!0);for(var g=[],n=0;n<a.length;n++){var h=a[n];if("*"!==h&&!b.has(h))if(e){var f=r(h);try{var l=q(f,b);if(!l)throw new d("feature-store:unsupported-query","invalid SQL expression",{where:f});if(!l.isStandardized)throw new d("feature-store:unsupported-query",
"expression is not standard",{clause:l});k(b,l.fieldNames,"expression contains missing fields")}catch(p){if((f=p&&p.details)&&(f.clause||f.where))throw p;f&&f.missingFields?g.push.apply(g,f.missingFields):g.push(h)}}else g.push(h)}if(g.length)throw new d("feature-store:unsupported-query",c,{missingFields:g});}function r(b){return b.split(" as ")[0]}Object.defineProperty(c,"__esModule",{value:!0});var m=new u.WhereClauseCache(50,500),v=new t.default("esriFieldTypeOID esriFieldTypeSmallInteger esriFieldTypeInteger esriFieldTypeSingle esriFieldTypeDouble esriFieldTypeLong esriFieldTypeDate".split(" "));
c.validateWhere=function(b,a){if(!a)return!0;var c=m.get(a,b);if(!c)throw new d("feature-store:unsupported-query","invalid SQL expression",{where:a});if(!c.isStandardized)throw new d("feature-store:unsupported-query","where clause is not standard",{where:a});k(b,c.fieldNames,"where clause contains missing fields");return!0};c.validateHaving=function(b,a,c){if(!a)return!0;var e=m.get(a,b);if(!e)throw new d("feature-store:unsupported-query","invalid SQL expression",{having:a});if(!e.isAggregate)throw new d("feature-store:unsupported-query",
"having does not contain a valid aggregate function",{having:a});k(b,e.fieldNames,"having contains missing fields");if(!e.getExpressions().every(function(a){var d=a.aggregateType;a=a.field;var e=b.has(a)&&b.get(a).name;return c.some(function(a){var c=a.onStatisticField;a=a.statisticType;return(b.has(c)&&b.get(c).name)===e&&a.toLowerCase().trim()===d})}))throw new d("feature-store:unsupported-query","expressions in having should also exist in outStatistics",{having:a});return!0};c.getWhereClause=q;
c.validateFields=k;c.getExpressionFromFieldName=r;c.getAliasFromFieldName=function(b){return b.split(" as ")[1]};c.hasInvalidFieldType=function(b,a){return(b=a.get(b))?!v.has(b.type):!1}});