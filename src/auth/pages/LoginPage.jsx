import { useNavigate } from "react-router-dom"
import { HeroesApp } from "../../heroes";



const LoginPage = () => {

  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/', {
      replace: true,
    });
  }

    return (
      <div className="container mt-5">
         <h1>LoginPage</h1>
         <hr />

         <button className="btn btn-primary" onClick={ onLogin } >
          Login
         </button>
      </div>
    )
  }
  
  export{
      LoginPage
  }
  