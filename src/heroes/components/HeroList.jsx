import { useMemo } from "react"
import { HeroCard } from ".."
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"



const HeroList = ( { publisher } ) => {

    //useMemo para memorizar valores
    const heores  = useMemo( () => getHeroesByPublisher( publisher ), [publisher] ); 

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3" >
            {
                heores.map( heroe => (
                    <HeroCard key={heroe.id} hero={heroe} />
                ) )
            }
        </div>
    )
}

export{
    HeroList
}