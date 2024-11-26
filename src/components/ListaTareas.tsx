import Tarea from './Tarea'

type Lista = {
  listaT: string[]
  borrarT: (index: number) => void
}

export const ListaTareas = ({ listaT, borrarT }: Lista) => {
  return (
    <div className='taskList'>
      {listaT.map((tarea, index) => (
        <Tarea tarea={tarea} key={index} borrar={() => borrarT(index)} />
      ))}
    </div>
  )
}

export default ListaTareas
