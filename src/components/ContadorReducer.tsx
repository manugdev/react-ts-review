import { useReducer } from "react"

const initialState = {
  contador: 0,
}

type ActionType = { type: 'incrementar' } | { type: 'decrementar' } | { type: 'custom', payload: number}

const contadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'incrementar':
      return {...state, contador: state.contador+1}
    case 'decrementar':
      return { ...state, contador: state.contador - 1 }
    case 'custom':
      return { ...state, contador: action.payload }
    default:
      return state
  }
}

export const ContadorReducer = () => {

  const [{ contador }, dispatch] = useReducer(contadorReducer, initialState)

  return (
    <>
      <p>Contador: { contador }</p>
      <button onClick={() => dispatch({type: 'incrementar'})} className="btn btn-outline-primary mt-2">
        +1
      </button>
      <button onClick={() => dispatch({ type: 'decrementar' })} className="btn btn-outline-primary mt-2 mx-2">
        -1
      </button>
      <button onClick={() => dispatch({ type: 'custom', payload: 100 })} className="btn btn-outline-danger mt-2">
        100
      </button>
    </>
  )
}
