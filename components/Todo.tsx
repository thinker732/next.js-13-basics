'use client'
// Import the page and head components as well as the default style sheet.
import type { NextPage } from 'next'
import Head from 'next/head'
//import styles from '../styles/Home.module.css'

// Import the React module for handling state variables.
import { useState } from 'react'

//disponible sur /user

const Todo= () => {
 // Initialize the state variables and their set functions.
  // This example uses a static initial todo list, but you could instead have
  // the application load the todo list from a database on page load using
  // the useEffect module from React.
  const [todoList, setTodoList] = useState([
    'Go for a run',
    'Attend that meeting',
    'Get groceries',
    'Go to bed too late'
  ])
  const [newTodoItem, setNewTodoItem] = useState('')

  // Provide a function to add a new item to the todo list.
  function addTodoItem(){
    // Create a new version of the list with the new item added, then set the
    // todo list state variable to the new list.
    const newTodoList = todoList.concat(newTodoItem)
    setTodoList(newTodoList)
  }

  // Provide a function to mark a todo item completed, removing the item from
  // the list.
  function markTodoItem(markedItem: string, isMarked: boolean) {
    // Make sure that the user has marked the item for removal.
    if (isMarked) {
      // Create a new version of the list filtering out the marked item, then
      // set the todo list state variable to the new list.
      const newTodoList = todoList.filter(e => e !== markedItem)
      setTodoList(newTodoList)
    }
  }

  // Define the page's HTML structure. This includes a mapping function to
  // loop through the todo list items and create an li element for each with
  // the todo item text and a checkbox for marking it complete.
  return (
    <div>
      <Head>
        <title>Example Next App | Todo List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1 >
          Todo
        </h1>
        <div>
          <div>
            <ul>
              {todoList.map((todoItem) => (
                <li key={todoItem}>
                  <input type="checkbox" onChange={ (e) => markTodoItem(todoItem, e.target.checked) } />
                  <span>{todoItem}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Add New Item</h2>
              <p>
                <input type="text" onChange={ (e) => { setNewTodoItem(e.target.value) } } />
                <button onClick={addTodoItem}>Add</button>
              </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Todo;