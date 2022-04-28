const { response } = require("express");
const express = require("express");
const { Router } = express;
const fs = require("fs");
const Contenedor = require("../classContenedor");

let router = new Router();

router.get("/", (require, response) => {
    // aca va funcion getAll()
})

router.get("/:id", (require, response) => {
    // aca va funcion getById()
})

router.post("/", (require, response) => {
    // Recibe y agrega un producto, y lo devuelve con su id asignado
})

router.put("/", (require, response) => {
    // recibe y actualiza un producto con su id
})

router.delete("/", (require, response) => {
    // elimina un producto segun id indicado
})


// ------------------------ //

router.get("/productos", (req, res) => {
    fs.readFile("productos.json", "utf-8", (error, data) => {
        if (error) {
            res.send({ message: "Error a la consulta" })
        } else {
            res.send(data);
        }
    });
});

router.get("/productosrandom", (req, res) => {
    fs.readFile("productos.json", "utf-8", (error, data) => {
        if (error) {
            console.log("Error")
        } else {
            let newArray = JSON.parse(data);
            let random = Math.floor(Math.random() * newArray.length);
            let result = newArray[random];
            res.send(result)
        }
    })
})

module.exports = router