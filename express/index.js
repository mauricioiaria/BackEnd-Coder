const express = require("express")
const path = require("path")

const fs = require('fs');


const app = express()

app.get("/productos", (req, res) => {
    fs.readFile("productos.json", "utf-8", (error, data) => {
        if (error) {
            res.send({ message: "Error a la consulta" })
        } else {
            res.send(data);
        }
    });
});

app.listen(8080, () => {
    console.log("Server run on port 8080")
})






class Contenedor {
    constructor(nombre) {
        this.nombre = nombre;
        this.stock = [];
    }


    save(obj) {
        this.stock.push(obj)
        fs.readFile(`./${this.nombre}`, "utf-8", (error, data) => {
            if (error) {
                fs.writeFile(`./${this.nombre}`, JSON.stringify(this.stock), "utf-8", (error) => {
                    if (error) {
                        console.log("archivo vacio")
                    } else {
                        console.log("archivo creado")
                        this.stock.forEach(element => {
                            console.log("el id asignado al prodcuto es " + element.id)
                        })
                    }
                })

            } else {
                fs.appendFile(`./${this.nombre}`, JSON.stringify(this.stock), "utf-8", (error) => {
                    if (error) {
                        console.log("No se pudo agregar el producto a la lista");
                    } else {
                        // this.stock.push(obj)
                        console.log(`Se agrego ${obj.title} con Nº ID: ${obj.id}`);
                    }
                })
            }
        })
    }

    getById(idGenerator) {
        fs.readFile(`./${this.nombre}`, "utf-8", (error, data) => {
            if (error) {
                console.log("Error en la busqueda");
            } else {
                const itemFound = JSON.parse(data).find((item) => item.id === idGenerator)
                if (itemFound) {
                    console.log(itemFound);
                } else {
                    console.log("No se encontro ningun producto");
                }
            }
        })
    }

    getAll() {
        fs.readFile(`./${this.nombre}`, "utf-8", (error, data) => {
            if (error) throw error;
            console.log(JSON.parse(data));
        })

    }

    deleteById(id) {
        fs.readFile(`./${this.nombre}`, "utf-8", (error, data) => {
            if (error) {
                console.log("Error")
            } else {
                // console.log(JSON.parse(data))
                const dataArray = JSON.parse(data)
                const idFound = dataArray.find((dataArray) => dataArray.id === id)
                console.log(idFound)
            }
        })

    }

    deleteAll() {
        fs.unlink(`./${this.nombre}`, (error) => {
            if (error) throw error;
            console.log('Archivo Json Eliminado')
        })

    }
}

//! OBJETO //

const obj = {
    title: "TV",
    price: 500,
    img: "kjabsdkjasbd",
    id: idGenerator()
}

let producto = new Contenedor("productos.json")





//! funcion generadora de ID //
function idGenerator() {
    let num = (Math.random() * 100)
    return num
}




//! Ejeccucion //

// producto.save(obj);

// producto.getById(6.511865756140511);

//producto.getAll();

// producto.deleteById(76.41229547303834);

// producto.deleteAll();
