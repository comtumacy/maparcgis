// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/Handles ../../../core/now ../../../core/scheduling ./index ./MemoryController ./StreamDataLoader ../../support/Scheduler".split(" "),function(r,g,k,h,l,c,m,n,p){Object.defineProperty(g,"__esModule",{value:!0});g.newResourceController=function(c,e){void 0===e&&(e=h);return new f.ResourceController(c,e)};var f;(function(f){function e(a){var b={},d;for(d in c.ClientType)b[c.ClientType[d]]=0;b[c.ClientType.TERRAIN]=15;b[c.ClientType.SCENE]=20;b[c.ClientType.SYMBOLOGY]=
5;return new n.default(b,a)}var g=function(){function a(a,d){void 0===d&&(d=h);var b=this;this._view=a;this._streamDataLoader=this._memoryController=this._scheduler=null;this._lastTargetChangeTime=0;this._handles=new k;this._frameTask=null;this._lastTargetChangeTime=d();this._scheduler=p.newScheduler(d);this._memoryController=m.newMemoryController(this._view);this._streamDataLoader=e(this._scheduler);this._handles.add(this._view.watch("state.camera",function(){return b._cameraChangedHandler()},!0));
this._frameTask=l.addFrameTask({update:function(a){return b.frame(a)}})}a.prototype.destroy=function(){this._handles.remove();this._frameTask&&(this._frameTask.remove(),this._frameTask=null);this._streamDataLoader&&(this._streamDataLoader.destroy(),this._streamDataLoader=null);this._memoryController.destroy();this._scheduler=this._memoryController=null};Object.defineProperty(a.prototype,"updating",{get:function(){return this._memoryController.updating},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"scheduler",{get:function(){return this._scheduler},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"memoryController",{get:function(){return this._memoryController},enumerable:!0,configurable:!0});a.prototype.createStreamDataRequester=function(a){var b=this;return function(c,d,e){return b._streamDataLoader.request(c,d,a,e)}};Object.defineProperty(a.prototype,"hasPendingDownloads",{get:function(){return this._streamDataLoader&&this._streamDataLoader.hasPendingDownloads},enumerable:!0,
configurable:!0});a.prototype.frame=function(a){if(!this._view.suspended){if(this._view.stateManager&&(this._view.stateManager.step(a.deltaTime/1E3),!this._scheduler))return;this._scheduler.state=this.state;this._scheduler.updateBudget(a)?(this._memoryController.update(),this._scheduler.frame()):this._memoryController.updating&&this._memoryController.update()}};a.prototype._cameraChangedHandler=function(){this._lastTargetChangeTime=this._scheduler.now;this._scheduler.state=this.state;this.memoryController.notifyViewChanged()};
Object.defineProperty(a.prototype,"state",{get:function(){return this._scheduler.now-this._lastTargetChangeTime>q?2:this._view.animation?0:1},enumerable:!0,configurable:!0});return a}();f.ResourceController=g;var q=300})(f||(f={}))});