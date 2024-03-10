import React from 'react'

const TodoItem = ({name, id, remove}) => {
  return (
    <li onClick={() => remove(id)}>{name}</li>
  )
}

export default TodoItem