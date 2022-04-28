const express = require("express")

const productRoutes = require("./router/allProducts")

const app = express()


//archivos estaticos
app.use(express.static(__dirname + "public"))



//Formatear el req.body a JSON
app.use(express.json())

//rutas
app.use("/api/producto", productRoutes)

app.listen(8080, () => {
    console.log("Server run on port 8080")
})






