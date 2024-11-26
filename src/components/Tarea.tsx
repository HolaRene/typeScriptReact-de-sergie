type Props = {
  tarea: string
  borrar: () => void
}

export const Tarea = ({ tarea, borrar }: Props) => {
  return (
    <div className='task'>
      <span>{tarea}</span>
      <button onClick={borrar}>Borrar Tarea</button>
    </div>
  )
}

export default Tarea
