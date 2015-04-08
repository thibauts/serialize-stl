serialize-stl
=============
### STL (ASCII and binary) file serialization

Produces a [STL](http://en.wikipedia.org/wiki/STL_%28file_format%29) (STereoLithography) ASCII string or binary buffer from a mesh. Face normals are computed internally if not provided.

Install
-------

```bash
$ npm install serialize-stl
```

Usage
-----

```javascript
var serializeSTL = require('serialize-stl');
var fs = require('fs');

var mesh = {
  positions: [
    [-1.0, 0.0, 0.0],
    [ 0.0, 1.0, 0.0],
    [ 1.0, 0.0, 0.0]
  ],
  cells: [
    [0, 1, 2]
  ]
};

// if ascii === true, will output an ASCII STL file.
// if faceNormals is falsy normals will be computed internally

var buf = serializeSTL(mesh.cells, mesh.positions/*, faceNormals, ascii*/);
fs.writeFileSync('mesh.stl', buf);
```