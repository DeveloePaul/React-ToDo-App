import { useState } from 'react'
import List from './List';

function App() {
  const [inputItem, setInputItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const setInputText = (e) => {
    const text = e.target.value;
    setInputItem(text);
  }

  const addItem = (e) => {
    e.preventDefault();
    setTodoList(previous => [...previous, inputItem]);
    setInputItem("");
  }

  const deleteItem = (id) => {
    setTodoList(previous => previous.filter((item, index) => index !== id))
  }

  return <div>
    <h1>ToDo App</h1>
    <form >
      <input type="text" onChange={setInputText} value={inputItem} />
      <button type='submit' onClick={addItem}>Add</button>
    </form>
    <List todoList={todoList} toDelete={deleteItem} />
    <p>{todoList.length} ToDo left</p>
  </div>
}

export default App
