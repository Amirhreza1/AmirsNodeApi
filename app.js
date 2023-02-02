const express = require("express");
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 3000

const bodyParser = require("body-parser")

var Books = [{id:1,name:"halmert",author:"William",releaseDate: "2016-08-11",ISBN:"9781909621862"},
{id:2,name:"48 Laws Of Power",author:"Robert Greene",releaseDate:"2000-09-01",ISBN:"9780140280197"},
{id:3,name:"51th Laws Of Pawor",author:"50 Cent, Robert Greene",releaseDate:"2009-09-08",ISBN:"9780061774607"},
{id:4,name:"Rich Dad Poor Dad",author:"9781612680194",releaseDate:"2017-04-27",ISBN:"9781612680194"},
{id:5,name:"Jacffar i Byn",author:"Police myndigheten",releaseDate:"2015-10-27",ISBN:"9781616380194"}]

app.get("/getbooks", (req, res) => {
    res.send(Books); 
})

app.get("/books/:bookname", (req, res) => {
    const bookname = req.params.bookname.toLowerCase()
    const book = Books.find(({name}) => name.toLocaleLowerCase() === bookname);
    if (book) {
    res.send(book);
    } else {
    res.send("Book not found");
    }
    });

    app.post("/addbook", (req, res) => {
        Books.push(req.body)
        res.send()
    })
    

app.delete("/delete/:bookname", (req, res) => {
    console.log(req.params)
    const bookname = req.params.bookname.toLowerCase()
    console.log(Books)
    const id = Books.findIndex(({name}) => name.toLocaleLowerCase() === bookname)
    console.log(id)
    Books.splice(id, 1)
    res.send()
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(PORT, () => {
    console.log("listening to port" + PORT)
})