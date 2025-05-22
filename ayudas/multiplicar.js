const fs= require("fs");
var colors=require('colors');
const crearArchivo = async(base = 5, listar=false,hasta=5) => {

try{
   

    let salida="";

for(i=1;i<=hasta;i++){

salida+=`${colors.green(base)} x ${i} = ${colors.blue(base*i)}\n`;
}
if(listar){
console.log(colors.rainbow("================================="));
console.log(`TABLA DE MULTIPLICAR DEL NUMERO ${base}`);
console.log(colors.rainbow("================================="));

    console.log(salida);
 
}
fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
 return `Tabla-${base} creada`;
}
catch(err){
    throw err;
}

}

module.exports= {
    crearArchivo
}