const http = require("http");

const sunucu = http.createServer((require, response) =>{
    const url = require.url;
    if(url === "/index") {
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.write("<h2>INDEX SAYFASINA HOSGELDINIZ</h2>");
    }else if(url === "/about") {
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.write("<h2>HAKKIMIZDA SAYFASINA HOSGELDINIZ</h2>")
    }else if(url === "/contact"){
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.write("<h2>ILETISIM SAYFASINA HOSGELDINIZ</h2>")
    }else {
        response.writeHead(404, {"content-type" : "text/html"});
        response.write("<h2>404 ARADIGINIZ SAYFA BULUNAMADI</h2>")
    }
    response.end();
});

const port = 5000;
sunucu.listen(port, () =>{
    console.log(`Sunucu port ${port} de başlatıldı.`);
});