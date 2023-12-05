// Creacion de un servidor web en Express
const express = require('express') //COMMONJS
const app = express()
const port =3000

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Landing Page")
})
app.get('/dashboard', (req,res)=>{
    res.send("Bienvenido - Usuario")
})

//Iniciar el servidor en el puerto1 3000
app.listen(3000)
console.log("Web server ejecutandose en el puerto 3000")




//Ruta publica
// app.get('/entrada',(req,res)=>{
//     res.send("Entrada al local")
// })

// // Crear un middleware

// app.use((req,res,next)=>{
//     const {email,password}= req.body
//     if(email ==="andrewtosh@gmail.com" && password ==="12345"){
//         next()
//     }
//     else{
//         res.send("Usuario no registrado")
//     }
// })

// //Ruta privada
// app.get('/pedido',(req,res)=>{
//     res.send(`Bienvenido - ${req.body.email} - Listo para tomar su orden`)
// })





