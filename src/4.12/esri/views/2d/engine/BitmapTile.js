// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../core/ObjectPool ../tiling ./Bitmap".split(" "),function(b,c,d,h,e,f,g){Object.defineProperty(c,"__esModule",{value:!0});b=function(b){function a(a){a=b.call(this,a)||this;a.key=new f.TileKey(0,0,0,0);return a}d(a,b);a.prototype.acquire=function(a){};a.prototype.release=function(){this.key.set(0,0,0,0);this.source=null};a.pool=new e(a,!0);return a}(g.Bitmap);c.BitmapTile=b});