const http = require('http');
const fs = require('fs');
const { isUtf8 } = require('buffer');


const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // Lisez le fichier HTML de manière asynchrone
    fs.readFile('./sr.html', (err, data) => {
        if (err) {
            // Gérez les erreurs de lecture de fichier
            console.error(err);
            res.statusCode = 500; // Erreur interne du serveur
            res.setHeader('Content-Type', 'text/plain');
            res.end('Internal Server Error');   
        } else {
            // Définissez l'en-tête Content-Type pour HTML
            res.setHeader('Content-Type', 'text/html');
            // Envoyez le contenu du fichier HTML en réponse
            res.end(data);
        }
    });
const content = 'Hello Node';

// Create the file
fs.writeFile('welcome.txt', content, (err,content) => {
  if (err) {
    console.error('Error creating the file:', err);
  } else {
    console.log(fs.readFileSync("welcome.txt","Utf8"));
  }
});

});

server.listen(5000, 'localhost', () => {
    console.log('Listening for requests on port 5000');
});