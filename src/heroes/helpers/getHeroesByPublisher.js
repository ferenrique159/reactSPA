import { heroes } from "../index";


const getHeroesByPublisher = ( publisher ) => {

    // creamos una variable que se iguala a un arreglo de objetos donde identificamos los nombres a buscar
    const validPublisher = ['DC Comics', 'Marvel Comics'];
    // hacemos una validacion y creamos un error con el comentario personalizado
    if ( !validPublisher.includes(publisher) ){
        throw new Error(`${publisher} is not a valid publisher`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher);

}

export {
    getHeroesByPublisher
}