// File-system
const fs = require('fs')
const path = require('path')

// usamos path.join para crear la ruta compatible con el sistema
// el __dirname nos va a dar el path del directorio actual, y le agregamos el nombre del archivo al final
const archivo = path.join(__dirname, 'diario.txt')

// console.log('archivo: ', archivo);


// con fs.existSync verificamos que el archivo exista, de forma sincronica
// con fs.writefilesync escribimos el archivo, y si no existe, lo crea
if(fs.existsSync(archivo)){
    // console.log("El archivo existe");
    // fs.writeFileSync(archivo, 'Hola, 2')
}else{
    // console.log("el archivo no existe");
    fs.writeFileSync(archivo, 'Adios')
}

// Leemos el contenido de forma sincronica
const contenido = fs.readFileSync(archivo, 'utf8')

// console.log("Contenido: ", contenido);

// Lectura Asincroncia:

fs.readFile(archivo, (err, data) => {
    if(err) throw err;
    // console.log('Lectura asincronica dio: ', data.toString());
})

fs.appendFileSync(archivo,'\nLinea nueva')
// console.log("Append finalizado");

const archivoRenombre = path.join(__dirname,'/nuevo-archivos.txt')

// console.log('archivos renombre: ', archivoRenombre);


if(!fs.existsSync(archivoRenombre)){
    fs.renameSync(archivo, archivoRenombre)
    console.log('Archivo renombrado');
}else{
    console.log('Ya tiene ese nombre');
}

// let id = 2

// const nuevaDireccion = path.join(__dirname,'..','archivos', String(id))

// console.log("nuevaDireccion: ", nuevaDireccion);

// Eliminar archivos: 
// if(fs.existsSync(archivoRenombre)){
//     console.log("Existe");

//     setTimeout(() => {
        
//         fs.unlinkSync(archivoRenombre)
//     }, 2000);
// }

const userPath = path.join(__dirname, 'poke.json')

// fs.readFile(userPath, 'utf8', (err, data) => {
//     if(err) throw err;

//     const nuevaData = JSON.parse(data)
//     // console.log('La Data: ', nuevaData.results[0].name);
    
// })


// LECTURA PARA ARCHIVOS GRANDES

// fs.createReadStream: Lee archivos muy grandes, sin cargarlos en la memoria
// ideal para rendimiento y eficiencia

// const stream = fs.createReadStream(userPath, {encoding: 'utf8'})

// let acumulador = ''

// stream.on('data', chunk => {
//     console.log('ejecutado');
//     acumulador += chunk
    
// })

// stream.on('end', () => {
//     console.log("Termino");
//     console.log('Info: ', JSON.parse(acumulador));
// })


const nuevos = [{
    "name": "venusaur",
    "url": "https://pokeapi.co/api/v2/pokemon/3/"
    },
    {
    "name": "charmander",
    "url": "https://pokeapi.co/api/v2/pokemon/4/"
    },
    {
    "name": "charmeleon",
    "url": "https://pokeapi.co/api/v2/pokemon/5/"
    },
    {
    "name": "charizard",
    "url": "https://pokeapi.co/api/v2/pokemon/6/"
    },]

// fs.readFile(userPath, 'utf8', (err, data) => {
//     if (err) throw err;

//     const pokemons = JSON.parse(data)
//     pokemons.results = pokemons.results.concat(nuevos)
//     pokemons.count = pokemons.results.length
//     // console.log('final: ', JSON.stringify(pokemons, null, 2));

//     fs.writeFile(userPath, JSON.stringify(pokemons, null, 2), (err) => {
//         if(err) throw err;
//         console.log("Archivo escrito correctamente");
        
//     })
    
// })

// PATH:

const rutaRelativa = "./ejemplo.txt"
const rutaAbsoluta = path.join(__dirname, 'ejemplo.jpg')
// console.log("Ruta Absoluta: ", rutaAbsoluta);
// console.log("nombre del archivo: ", path.basename(rutaAbsoluta));
// console.log("Extension: ", path.extname(rutaAbsoluta));
// console.log("Ruta con resolve: ", path.resolve(''));


// if(path.extname(rutaAbsoluta) === '.txt' || path.extname(rutaAbsoluta) === '.json'){
//     console.log("permitido");
    
// }else{
//     console.log('no permitido');
    
// }


const os = require('os')

// console.log("Plataforma: ", os.platform());
// console.log("CPUs Disponibles: ", os.cpus().length);
// console.log("Memoria Libre: ", os.freemem() / 1024 / 1024 / 1024, 'gbytes');
// console.log("Usuario: ", os.userInfo().username);


// const fsP = require('fs').promises

// const archivo2 = path.join(__dirname, 'archivo1.txt')

async function leerArchivo() {

    try {
        const contenido = await fs.promises.readFile(archivoRenombre, 'utf8')
        
        // const contenido = await fsP.readFile(archivoRenombre, 'utf8')


        console.log('contenido: ', contenido);
        
    } catch (error) {
        console.log("error: ", error);
        
    }
}

leerArchivo()




