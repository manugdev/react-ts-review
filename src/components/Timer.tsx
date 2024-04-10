import { useEffect, useRef, useState } from "react"

type TimerArgs = {
  milisegundos: number
}

export const Timer = ({ milisegundos }: TimerArgs) =>{

  const [segundos, setSegundos] = useState<number>(0)
  const ref = useRef<NodeJS.Timeout>()

  useEffect(() => {
    ref.current && clearInterval(ref.current)
    ref.current = setInterval(() => setSegundos(s => s + 1), milisegundos)
  }, [milisegundos])
  

  return (
    <p>Timer: <small>{segundos}</small></p>
  )
}
