import { useLocation, useNavigate } from "react-router-dom";

//documentacion o libreria que nos ayuda a extraer y separar todo en el objeto de la busqueda
import queryString from "query-string";
import { useForm } from "../../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers";


const SearchPage = () => {

  

    // se implementa para poder navegar hacia la url colocada en el buscador
    const navigate = useNavigate();

    // hook para ubicar la data de la busqueda
    const location = useLocation();

    //esta desestructuracion de la 'q' viene gracias a la busqueda del hook 'location' + el 'query' que nos ayudo a separar todo de la localizacion
    const { q = '' } = queryString.parse( location.search );

    const heroes = getHeroesByName(q);

    //hook personalizado que me ayuda a guardar una informacion mandada en el submit
    const { searchText, onInputChange } = useForm({
      searchText: q
    });

    const onSearchSubmit = (event) =>{
      event.preventDefault();
      if( searchText.trim().length <= 1 ) return;

      // llamamos al hook guardado en la variable y dentro colocamos a donde se redirigira, que lo colocamos atraves de un query mas la data guarda del input
      navigate(`?q=${searchText}`);
    }

    // validacion con una condicion de 'q' si trae o no trae valor
    const showMostrar = (q.length === 0 );
    const showError = (q.length > 0) && heroes.length === 0;

    return (
      <>
        <h1 className="mt-2"> Buscardor </h1>
        <hr />
        <div className="row">
          <div className="col-5">
              <h1>Buscar:</h1>
              <hr />
              <form onSubmit={onSearchSubmit}>
                <input type="text" className="form-control" placeholder="Buscar heroe" name="searchText" autoComplete="off" value={ searchText } onChange={ onInputChange } />
                <button className="btn btn-info mt-3" >Busccar</button>
              </form>
          </div>
          <div className="col-7 text-center">
              <h1>¡Resultado!</h1>
              <hr />
              {/* Tipo de Condicion ternaria para mostrar o no mostrar un componente */}
              {/* {
                  ( q === '') ? <div className="alert alert-primary">
                Buscar a un heroe
              </div> : (heroes.length === 0) && <div className="alert alert-danger">
                  <strong>No se encontro a {q}</strong> 
                </div> 
              } */}

              <div className="alert alert-primary animete_animated animate__bounce" style={{ display: showMostrar ? '' : 'none' }} >
                Buscar a un heroe
              </div>

              <div className="alert alert-danger animete_animated animate__bounce" style={{ display: showError ? '' : 'none' }} >
                  <strong>No se encontro a {q}</strong> 
              </div> 

              
              {
                heroes.map( hero => ( <HeroCard key={ hero.id } hero={hero} /> ) )
              }

          </div>
        </div>
      </>
        
    )
  }
  
  export{
      SearchPage
  }
  