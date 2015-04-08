var serializeASCII  = require('serialize-stl-ascii');
var serializeBinary = require('serialize-stl-binary');

function serialize(cells, positions, faceNormals, ascii) {
  var fn = ascii
    ? serializeASCII
    : serializeBinary;

  return fn(cells, positions, faceNormals);
}

module.exports = serialize;