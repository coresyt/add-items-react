import { useEffect, useState } from 'react'
import { Form, ListItems } from './components/index'
import { Task } from './types'

export default function App(): React.JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(()=>{
    const JsonTasks = localStorage.getItem('tasks')
    if (typeof JsonTasks !== 'string') return
    setTasks(JSON.parse(JsonTasks))
  }, [])

  useEffect(()=>{
    const JsonTasks = JSON.stringify(tasks)
    localStorage.setItem('tasks', JsonTasks)
  }, [tasks])

  const addTaskItem = (name: string, desc: string): void => {
    const newTask: Task = {
      name,
      desc,
      id: crypto.randomUUID()
    }

    setTasks([...tasks, newTask])
  }

  const deleteTaskItem = (id: Task['id'] | string): void => {
    const newTasks = tasks.filter(tsk => tsk.id !== id)
    setTasks(newTasks)
  }


  return (
    <main
      className='max-w-screen mx-[10vw] flex flex-col gap-2 items-center justify-center'
    >
      <h1 className='text-2xl font-bold tracking-tighter'>Lista de libros</h1>
      <Form.default addTaskItem={addTaskItem} />
      <ListItems.default deleteTaskItem={deleteTaskItem} tasks={tasks} />
    </main>
  )
}
