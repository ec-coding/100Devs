const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

// const server = http.createServer((req, res) => {
//   const page = url.parse(req.url).pathname;
//   const params = querystring.parse(url.parse(req.url).query);
//   console.log(page);
//   if (page == '/') {
//     fs.readFile('index.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       res.end();
//     });
//   }
//   else if (page == '/otherpage') {
//     fs.readFile('otherpage.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       res.end();
//     });
//   }
//   else if (page == '/otherotherpage') {
//     fs.readFile('otherotherpage.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       res.end();
//     });
//   }
//   else if (page == '/api') {
//     if('student' in params){
//       if(params['student']== 'leon'){
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         const objToJson = {
//           name: "leon",
//           status: "Boss Man",
//           currentOccupation: "Baller"
//         }
//         res.end(JSON.stringify(objToJson));
//       }//student = leon
//       else if(params['student'] != 'leon'){
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         const objToJson = {
//           name: "unknown",
//           status: "unknown",
//           currentOccupation: "unknown"
//         }
//         res.end(JSON.stringify(objToJson));
//       }//student != leon
//     }//student if
//   }//else if
//   else if (page == '/css/style.css'){
//     fs.readFile('css/style.css', function(err, data) {
//       res.write(data);
//       res.end();
//     });
//   }else if (page == '/js/main.js'){
//     fs.readFile('js/main.js', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/javascript'});
//       res.write(data);
//       res.end();
//     });
//   }else{
//     figlet('404!!', function(err, data) {
//       if (err) {
//           console.log('Something went wrong...');
//           console.dir(err);
//           return;
//       }
//       res.write(data);
//       res.end();
//     });
//   }
// });

// server.listen(8000);

const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    if (page == '/') {
        outputHTMLFile('index.html', req, res)
    }
    else if (page == '/otherpage') {
        outputHTMLFile('otherpage.html', req, res)
    }
    else if (page == '/otherotherpage') {
        outputHTMLFile('otherotherpage.html', req, res)
    }
    else if (page == '/api') {
        if('student' in params){
            if(params['student']== 'leon'){
                res.writeHead(200, {'Content-Type': 'application/json'});
                let flipRes = Math.ceil(Math.random() * 2) === 1 ? 'heads' : 'tails'
                const objToJson = {
                    name: "leon",
                    status: "Boss Man",
                    currentOccupation: "Baller",
                    flip: flipRes
                }
                res.end(JSON.stringify(objToJson));
            }//student = leon
            else if(params['student'] != 'leon'){
                res.writeHead(200, {'Content-Type': 'application/json'});
                const objToJson = {
                    name: "unknown",
                    status: "unknown",
                    currentOccupation: "unknown"
                }
                res.end(JSON.stringify(objToJson));
            }//student != leon
        }//student if
        else {
            res.end()
        }
    }//else if
    else if (page == '/css/style.css'){
        outputCSSFile('/css/style.css', req, res)
    }else if (page == '/js/main.js'){
        outputJSFile('/js/main.js', req, res)
    }else{
        figlet('404!!', function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            res.write(data);
            res.end();
        });
    }
});

server.listen(8000);

function outputHTMLFile(fileName, req, res) {
    fs.readFile(fileName, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'}); //200 means everything went okay. So we'll send you some HTML
        res.write(data);
        res.end();
    });
}
function outputCSSFile(fileName, req, res) {
    fs.readFile('css/style.css', function(err, data) {
        res.write(data);
        res.end();
    });
}
function outputJSFile(fileName, req, res) {
    fs.readFile('js/main.js', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
    });
}