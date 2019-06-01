import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { todos } from './todos.json';

import { TodoForm } from './components/TodoForm.js'



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: todos
    }

  }
  render() {

    const todos = this.state.todos.map((todo, i)=> {
      return (

        <div className = "col-md-4">
          <div className = "card mt-4" >
            <div className = "card-header" >
                    <h3>  { todo.tittle }</h3>
                    <span className = "badge badge-pill badge-danger ml-2">
                          { todo.Priority }
                    </span>
                      <div className = "card-body" >
                              <h3>{todo.description}</h3>
                              <p><h5>{ todo.responsable }</h5></p>
                            </div>
                      </div>
              </div>
        </div>
      )
    });

    return (



      <div className="App">
          <nav className=" navbar navbar-dark bg-dark ">
            <a href="" className = "text-white">
            Tareas

              <span className = "badge badge-pill badge-light ml-2">
                  { this.state.todos.length }
              </span>

            </a>
          </nav>

          <div className = "container" >
            <div className = "row mt-4">
                  { todos }
            </div>
          </div>



      </div>
    );
  }
}

export default App;
