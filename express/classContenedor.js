const fs = require(`fs`);

class Contenedor {
    constructor(nombre) {
        this.nombre = nombre;
        this.stock = [];
    }

    save(obj) {
        this.stock.push(obj);
        fs.readFile(`./${this.nombre}`, "utf-8", (error, data) => {
            if (error) {
                console.log("Error al leer el archivo");
                fs.writeFile(
                    `./${this.nombre}`,
                    JSON.stringify(this.stock),
                    "utf-8",
                    (error) => {
                        if (error) {
                            console.log("No se pudo actualizar el documento");
                        } else {
                            console.log("Se actualizó el documento correctamenteeeeee");
                            this.stock.forEach((element) => {
                                console.log("el id asignado al prodcuto essss " + element.id);
                            });
                        }
                    }
                );
            } else {
                consol.log("Entre a este else")
                // if (data.length >= 1) {
                //     fs.appendFile(
                //         `./${this.nombre}`,
                //         JSON.stringify(this.stock),
                //         "utf-8",
                //         (error) => {
                //             if (error) {
                //                 console.log("No se actualizo el documento");
                //             } else {
                //                 this.stock.push(obj);
                //                 this.stock.forEach((element) => {
                //                     console.log(
                //                         "el id asignado al nuevo producto AGREGADO es " + element.id
                //                     );
                //                 });
                //             }
                //         }
                //     );
                // }
            }
        });
    }

    // if (error) {
    //     fs.writeFile(`./${this.nombre}`, JSON.stringify(this.stock), "utf-8", (error) => {
    //         if (error) {
    //             console.log("archivo vacio")
    //         } else {
    //             console.log("archivo creado")
    //             this.stock.forEach(element => {
    //                 console.log("el id asignado al prodcuto es " + element.id)
    //             })
    //         }
    //     })

    // console.log(this.stock)
    // fs.appendFile(`./${this.nombre}`, JSON.stringify(this.stock), "utf-8", (error) => {
    //     if (error) {
    //         console.log("No se pudo agregar el producto a la lista");
    //     } else {
    // this.stock.push(obj)
    //         console.log(`Se agrego ${obj.title} con Nº ID: ${obj.id}`);
    //     }
    // })

    getById(idGenerator) {
        fs.readFile(`./${this.nombre}`, "utf-8", (error, data) => {
            if (error) {
                console.log("Error en la busqueda");
            } else {
                const itemFound = JSON.parse(data).find(
                    (item) => item.id === idGenerator
                );
                if (itemFound) {
                    console.log(itemFound);
                } else {
                    console.log("No se encontro ningun producto");
                }
            }
        });
    }

    getAll() {
        fs.readFile(`./${this.nombre}`, "utf-8", (error, data) => {
            if (error) throw error;
            console.log(JSON.parse(data));
        });
    }

    deleteById(id) {
        fs.readFile(`./${this.nombre}`, "utf-8", (error, data) => {
            if (error) {
                console.log("Error");
            } else {
                // console.log(JSON.parse(data))
                const dataArray = JSON.parse(data);
                const idFound = dataArray.find((dataArray) => dataArray.id === id);
                console.log(idFound);
            }
        });
    }

    deleteAll() {
        fs.unlink(`./${this.nombre}`, (error) => {
            if (error) throw error;
            console.log("Archivo Json Eliminado");
        });
    }
}

//! OBJETO //

const obj = {
    title: "TV",
    price: 500,
    img: "kjabsdkjasbd",
    id: idGenerator(),
};

let producto = new Contenedor("productos.json");

//! funcion generadora de ID //
function idGenerator() {
    let num = Math.random() * 100;
    return num;
}

//! Ejeccucion //

// producto.save(obj);

// producto.getById(6.511865756140511);

//producto.getAll();

// producto.deleteById(76.41229547303834);

// producto.deleteAll();

module.exports = Contenedor;
