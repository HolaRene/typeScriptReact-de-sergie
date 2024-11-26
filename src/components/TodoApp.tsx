import { useState } from 'react'
import ListaTareas from './ListaTareas'
export const TodoApp = () => {
  const [nuevaTarea, setnuevaTarea] = useState<string>('')
  const [lista, setLista] = useState<string[]>([])

  const envio = () => {
    if (nuevaTarea.trim() === '') return
    setLista(tareasAnterior => [...tareasAnterior, nuevaTarea])
    setnuevaTarea('') //vaciar el input
    console.log('Tarea agregada:', nuevaTarea)
  }
  const borrarTareas = (index: number) => {
    setLista(listaAnterior => listaAnterior.filter((_, i) => i !== index))
    console.log(`se ha borrado la tarea ${index}`)
  }
  return (
    <div>
      <h1>Hello, World!</h1>
      <input
        type='text'
        onChange={e => setnuevaTarea(e.target.value)}
        value={nuevaTarea}
        placeholder='Escribe una tarea'
      />
      <button onClick={envio}>Agregar</button>
      <ListaTareas listaT={lista} borrarT={borrarTareas} />
    </div>
  )
}
