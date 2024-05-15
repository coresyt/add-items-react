import React, { type FormEvent } from 'react'
import { Task } from '~/types'

interface Props {
  tasks: Task[],
  deleteTaskItem: (id: string) => void
}

export default function ListItems({ tasks, deleteTaskItem }: Props): React.JSX.Element {
  const handleClick = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    if (!e.currentTarget.parentElement?.id) return
    deleteTaskItem(e.currentTarget.parentElement?.id)
  }

  return <ul className="flex flex-col gap-2">
    {tasks.map((t): React.JSX.Element => (
      <li key={t.id} id={t.id}>
        <h2 
          className="text-lg font-bold"
        >{t.name}</h2>
        <p>{t.desc}</p>
        <button
          onClick={handleClick}
          className="bg-red-800 rounded-lg w-40 h-10 p-1 outline-none transition-colors duration-500 hover:bg-red-700 hover:text-red-400"
        >Delete</button>
      </li>
    ))}
  </ul>
}
