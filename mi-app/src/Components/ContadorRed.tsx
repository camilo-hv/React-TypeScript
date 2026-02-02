import React, { useReducer } from 'react'


const initialState = {
    contador: 10,
}

type ActionType = {type: 'incrementar'}

const contadorReducer = ( state: typeof initialState, action: ActionType) => {
   switch (action.type) {
    case 'incrementar':
        
        return {
            ...state,
            contador: state.contador + 1
        }
   
    default:
        return state;
   }
}

export const ContadorRed = () => {
    const [contadorState, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <div>
        <h2>ContadorRed: useReducer</h2>

        ContadorRed: {contadorState.contador}    
    </div>
  )
}
