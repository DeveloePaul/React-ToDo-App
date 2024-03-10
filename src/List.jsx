import React from 'react'
import TodoItem from './TodoItem'

const List = ({todoList, toDelete}) => {
  return (
    <ul>
        {todoList.map((item, index) => <TodoItem key={index} id={index} name={item} remove={toDelete} />)}
    </ul>
  )
}

export default List