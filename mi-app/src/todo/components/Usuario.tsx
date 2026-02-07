import { useState } from "react"

interface User {
    uid: string;
    name: string;
}

export const Usuario = () => {

 const [user, setuser] = useState<User>();   
 
 const Usuario = () => {
        setuser({
                uid : 'asdf1234',
                name: 'Camilo Henao'
        })
    }  
 

  return (
    <div className="mt-5">
        <h3>Usuario: useState</h3>

        <button 
            onClick={Usuario}
            className="btn btn-outline-primary">
                Login
        </button>

        {
            (!user)
                ?  <pre>No hay usuarios</pre>
                :  <pre>{JSON.stringify(user)}</pre>
        }
    </div>
  )
}
    

