console.log("merhaba");

var http = require("http"); // node modules=> https harıcı baska da olabılır fs vb
var fs = require("fs"); // dosya olusturma, silme vb temel ıslemlerı bununla yap

var server = http.createServer((req, res) => {

   if(req.url == "/"){
    // fs komutuyla ilk basta dosyayı oku sonrasında iste hataları kontrol et sonra dosyayı oku demek.
    fs.readFile("index.html", (err, html) => {
        res.write(html);
        res.end();
        // her write den sonra yazmak lazım çünkü cevap gelsin
    });
}

    

    else if(req.url == "/products" ){
        fs.readFile("urunler.html", (err, html) =>{
            res.write(html);
            res.end();
        });
        
    }
    else{
        fs.readFile("404.html", (err, html) =>{
            res.write(html);
            res.end();
    });
   }
   // req ile baslatınca her zaman res etmek end lemek lazım. 
  

    });

server.listen(3000, () => {
    console.log("node.js server at port 3000");
});