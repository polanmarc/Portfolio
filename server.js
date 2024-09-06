const express = require('express');
const mime = require('mime');

const app = express();

// Configurar el tipo MIME para archivos .jsx
mime.define({'application/javascript': ['jsx']});

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
