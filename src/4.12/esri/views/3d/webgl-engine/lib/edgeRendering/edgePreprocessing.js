// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/arrayUtils ../../../../../core/typedArrayUtil ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../support/mathUtils".split(" "),function(T,x,N,O,e,f,A){function P(b,C){var g=A.acos(b.cosAngle),a=D.fwd,c=D.ortho;A.directionFromTo(a,b.position1,b.position0);b=0<e.vec3.dot(e.vec3.cross(c,b.faceNormal0,b.faceNormal1),a)?-1:1;return g*b>C}function Q(b){var e=b.faces.length/3,g=b.faces;b=b.neighbors;for(var a=0,c=0;c<
e;c++)var l=b[3*c+0],m=b[3*c+1],k=b[3*c+2],n=g[3*c+0],d=g[3*c+1],p=g[3*c+2],a=a+(-1===l||n<d?1:0),a=a+(-1===m||d<p?1:0),a=a+(-1===k||p<n?1:0);for(var a=new Int32Array(4*a),h=0,c=0;c<e;c++){l=b[3*c+0];m=b[3*c+1];k=b[3*c+2];n=g[3*c+0];d=g[3*c+1];p=g[3*c+2];if(-1===l||n<d)a[h++]=n,a[h++]=d,a[h++]=c,a[h++]=l;if(-1===m||d<p)a[h++]=d,a[h++]=p,a[h++]=c,a[h++]=m;if(-1===k||p<n)a[h++]=p,a[h++]=n,a[h++]=c,a[h++]=k}return a}function R(b){var f=b.faces.length/3,g=b.vertices.position;b=b.faces;for(var a=u.v0,
c=u.v1,l=u.v2,m=new Float32Array(3*f),k=0;k<f;k++){var n=b[3*k+1],d=b[3*k+2];g.getVec(b[3*k+0],a);g.getVec(n,c);g.getVec(d,l);e.vec3.subtract(c,c,a);e.vec3.subtract(l,l,a);e.vec3.cross(a,c,l);e.vec3.normalize(a,a);m[3*k+0]=a[0];m[3*k+1]=a[1];m[3*k+2]=a[2]}return m}Object.defineProperty(x,"__esModule",{value:!0});x.extractEdges=function(b,f,g,a){void 0===a&&(a=S);var c=b.vertices.position,l=b.vertices.componentIndex,m=A.deg2rad(a.anglePlanar);a=A.deg2rad(a.angleSignificantEdge);var k=Math.cos(a),n=
Math.cos(m),d=D.edge,p=d.position0,h=d.position1,v=d.faceNormal0,y=d.faceNormal1,r=R(b),t=Q(b),z=t.length/4;b=f.allocate(z);a=0;var u=g.allocate(z),x=0,H=0,I=0,J=N.range(0,z),B=new Float32Array(z);O.forEach(B,function(a,b,d){c.getVec(t[4*b+0],p);c.getVec(t[4*b+1],h);d[b]=e.vec3.distance(p,h)});J.sort(function(a,b){return B[b]-B[a]});for(var K=[],L=[],E=0;E<z;E++){var q=J[E],F=B[q],G=t[4*q+0],C=t[4*q+1],w=t[4*q+2],q=t[4*q+3],M=-1===q;c.getVec(G,p);c.getVec(C,h);if(M)e.vec3.set(v,r[3*w+0],r[3*w+1],
r[3*w+2]),e.vec3.copy(y,v),d.componentIndex=l.get(G),d.cosAngle=e.vec3.dot(v,y);else{e.vec3.set(v,r[3*w+0],r[3*w+1],r[3*w+2]);e.vec3.set(y,r[3*q+0],r[3*q+1],r[3*q+2]);d.componentIndex=l.get(G);d.cosAngle=e.vec3.dot(v,y);if(d.cosAngle>n)continue;-.9999>d.cosAngle&&e.vec3.copy(y,v)}H+=F;I++;M||d.cosAngle<k?(f.write(b,a++,d),K.push(F)):P(d,m)&&(g.write(u,x++,d),L.push(F))}l=new Float32Array(K.reverse());m=new Float32Array(L.reverse());return{regular:{instancesData:f.trim(b,a),lodInfo:{lengths:l}},silhouette:{instancesData:g.trim(u,
x),lodInfo:{lengths:m}},averageEdgeLength:H/I}};var D={edge:{position0:f.vec3f64.create(),position1:f.vec3f64.create(),faceNormal0:f.vec3f64.create(),faceNormal1:f.vec3f64.create(),componentIndex:0,cosAngle:0},ortho:f.vec3f64.create(),fwd:f.vec3f64.create()},u={v0:f.vec3f64.create(),v1:f.vec3f64.create(),v2:f.vec3f64.create()},S={anglePlanar:4,angleSignificantEdge:35}});