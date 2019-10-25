// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/promiseUtils ./WorkerTile ./style/StyleRepository ../../tiling/enums".split(" "),function(q,r,f,k,d,n){return function(){function b(){this._tiles=new Map;this._spriteInfo={};this._glyphInfo={}}b.prototype.reset=function(){this._spriteInfo={};this._glyphInfo={};var a=this._tiles;a.forEach(function(a){return a.setObsolete()});a.clear();return f.resolve()};b.prototype.getLayers=function(){return this._layers};b.prototype.setLayers=function(a){this._layers=(new d(a)).layers;
return f.resolve({data:""})};b.prototype.createTileAndParse=function(a,p){for(var b=this,e=a.key,g=a.cacheTile,c=k.pool.acquire(),h={},l=0,m=Object.keys(a.sourceName2DataAndRefKey);l<m.length;l++){var d=m[l];h[d]=a.sourceName2DataAndRefKey[d].refKey}c.initialize(e,h,this,a.rotation);return c.setDataAndParse(a.sourceName2DataAndRefKey,p).then(function(a){g&&c.status!==n.TileStatus.INVALID&&b._tiles.set(e,c);return a}).catch(function(a){c.setObsolete();k.pool.release(c);if(b._tiles.has(c.tileKey))b._tiles["delete"](c.tileKey);
return f.reject(a)}).catch(function(a){return a}).then(function(a){g||k.pool.release(c);return a})};b.prototype.updateSymbols=function(a){var b=this._tiles.get(a.key);return b?b.updateSymbols(a.rotation):f.reject()};b.prototype.updateStyle=function(a,b){this._layers=(new d(a)).layers;this._tiles.forEach(function(a,e){a.reparse(b).then(function(e){b.client.invoke("updateTileData",{tileId:a.tileKey,tileData:e.result})})});return f.resolve({data:""})};b.prototype.destructTileData=function(a){this._tiles.has(a)&&
(k.pool.release(this._tiles.get(a)),this._tiles["delete"](a));return f.resolve()};b.prototype.fetchSprites=function(a,b,d){var e=[],g=this._spriteInfo;a.forEach(function(a){void 0===g[a]&&e.push(a)});return 0===e.length?f.resolve():b.invoke("getSprites",e,{signal:d&&d.signal}).then(function(a){for(var b in a)g[b]=a[b]})};b.prototype.getSpriteItems=function(){return this._spriteInfo};b.prototype.fetchGlyphs=function(a,b,d,e,g){var c=[],h=this._glyphInfo[b];h?d.forEach(function(a){h[a]||c.push(a)}):
(h=this._glyphInfo[b]=[],d.forEach(function(a){return c.push(a)}));return 0===c.length?f.resolve():e.invoke("getGlyphs",{tileID:a,font:b,codePoints:c},g).then(function(a){for(var b in a)h[b]=a[b]})};b.prototype.getGlyphItems=function(a){return this._glyphInfo[a]};return b}()});