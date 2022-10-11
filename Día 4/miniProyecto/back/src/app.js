const express = require("express");
const cors = require("cors");
const alumnosRouters = require("./routers/alumnos.router");
const notasRouter = require("./routers/notas.router")
const adicionalesRouter = require("./routers/adicionales.router")
const errorHandling = require("./error/errorHandling");

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(alumnosRouters);
app.use(notasRouter)
app.use(adicionalesRouter)
app.use((req, res, next)=>{
    res.status(404).json({
        error:true,
        codigo: 404,
        mensaje:"Endpoint no encontrado"
    })
})

app.use(errorHandling);

module.exports= app;