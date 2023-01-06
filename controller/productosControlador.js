const {request,response} = require('express')


const obtenerTodos = ( req = request , res = response)=>{
    console.log('Todos pueden verlo')
}

const obtenerPorId = (req,res)=>{
    res.send(req.params)
}



module.exports = {
    obtenerTodos,
    obtenerPorId
}