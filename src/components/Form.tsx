import { type FormEvent, useState } from 'react'

interface Props {
  addTaskItem: (name: string, desc: string) => void
}

export default function Form({ addTaskItem }: Props): React.JSX.Element {
  const [name, setName] = useState<string>('')
  const [desc, setDesc] = useState<string>('')

  const formHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    addTaskItem(name, desc)
    setName('')
    setDesc('')
  }

  return <form
    className="flex flex-col items-center justify-center gap-2.5"
    onSubmit={formHandler}
  >
    <label htmlFor="title">
      Escribe el titulo del libro<br />
      <input
        className="bg-zinc-800 rounded-lg w-80 p-1 outline-none"
        type="text"
        name="title"
        placeholder="Eloquent JS"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoFocus
      />
    </label>
    <label htmlFor="desc">
      Escribe una descripción breve del libro<br />
      <textarea
        className="bg-zinc-800 resize-none rounded-lg w-80 h-24 px-2 outline-none"
        name="desc"
        value={desc}
        placeholder="EloquentJS es un libro de JavaScript..."
        onChange={(e) => setDesc(e.target.value)}
      />
    </label>
    <button
      className="bg-zinc-800 rounded-lg w-40 h-10 p-1 outline-none transition-colors duration-500 hover:bg-zinc-700 hover:text-zinc-400 active:text-zinc-500"
    >Guardar libro</button>
  </form>
}
