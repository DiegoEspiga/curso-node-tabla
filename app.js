const { alias, describe } = require("yargs");
const {crearArchivo }= require("./ayudas/multiplicar");
const { type } = require("os");

const argv= require("yargs")
.options({'b':{
        alias:'base',
        type:'number',
        demandOption:true,
    describe: 'Indica el numero que se va a multiplicar.'},
        'l':{
        alias:'listar',
        type:"boolean",
        default:false,
        describe:'Muestra la tabla por consola.'
        },
        'h':{
            alias:'hasta',
            type:'number',
            default:10,
            describe:'Modifica el tamaño de la tabla.'
        }
    })
.check((argv, options) =>{
    if(isNaN(argv.base)){
    throw 'La base tiene que ser un número'
    }
    return true;
})
.argv

console.clear()


//const [,,arg3='base=5']=process.argv;
//const[,base]= arg3.split('='); 
//console.log(process.argv);
//console.log(argv)

//console.log('base: yargs',argv.b);


//let base=4;

crearArchivo(argv.b,argv.l,argv.h).then(nombreArchivo => console.log(nombreArchivo))
.catch(err => console.log(err));
