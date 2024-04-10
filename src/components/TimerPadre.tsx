import { useState } from "react"
import { Timer } from "./Timer"

export const TimerPadre = () => {

  const [milisegundos, setMilisegundos] = useState<number>(0)

  return (
    <>
      <p>Milisegundos { milisegundos }</p>
      <button onClick={() => setMilisegundos(1000)} className="btn btn-outline-success my-2">
        1000
      </button>
      <button onClick={() => setMilisegundos(2000)} className="btn btn-outline-success mx-2 my-2">
        2000
      </button>
      <Timer milisegundos={milisegundos} />
    </>
  )
}
