import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "..";

const HeroPage = () => {

  const navigate = useNavigate();

    const { id } = useParams();
    

    // useMemo para memorizar valor y useCallback para memorizar funciones
    const hero = useMemo( () => getHeroById( id ), [id] );

    if (!hero) {
      return <Navigate to='/marvel' />
    }
    // Manera sencilla de resolver en caso de que venga una url no conocida
    // if (!hero) {
    //   return <>404 -Not Found</> ;
    // }

    const heroImagenUrl = `/assets/heroes/${hero.id}.jpg`;
    const onReturn = () => {
      return navigate(-1); 
    }   

    return (
      <>
      <div>
      <h1>{hero.superhero}</h1>
      <div className="row mt-5 ">
        <div className="col-4">
          <img className="img-thumbnail animate__animated animate__fadeInDown" src={ heroImagenUrl } alt="{hero.superhero}" />
        </div>
        <div className="col-8">
          <h3> { hero.superhero } </h3>
          <ul>
              <li className="list-group-item"> <strong>Alter ego:</strong> { hero.alter_ego } </li>
              <li className="list-group-item"> <strong>Publisher:</strong> { hero.publisher } </li>
              <li className="list-group-item"> <strong>First appearance:</strong> { hero.first_appearance } </li>
          </ul>
          <h3 className="mt-3" >Character:</h3>
          <h5> { hero.characters } </h5>
          <button className="btn btn-danger" onClick={ onReturn } > Regresar </button>
        </div>
      </div>

      </div>
        

      </>
        
    )
  }
  
  export{
      HeroPage
  }
  