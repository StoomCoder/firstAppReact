import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { todos } from './todos.json';

import  TodoForm  from './components/TodoForm.js'



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }


  handleAddTodo(todo){
    this.setState({
      todos:[...this.state.todos, todo]
    })
  }
  removeTodo(index){

    console.log(index);
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    })

  }


  render() {

    const todos = this.state.todos.map((todo, i)=> {
      return (
        <div className="col-md-4" key={i}>
            <div className="card mt-4">
                <div className="card-header">
                    <h3>  { todo.tittle }</h3>
                    <span className="badge badge-pill badge-danger ml-2">
                                  { todo.Priority }
                            </span>
                              </div>
                    <div className="card-body">
                        <h3>{todo.description}</h3>
                        <p><h5>{ todo.responsable }</h5></p>

                </div>
                <div className = "card-footer">

                    <button className = "btn btn-danger"
                    onClick={this.removeTodo.bind(this,i)}
                    >Eliminar</button>

                </div>
            </div>
        </div>

      )
    });

    return (

      <div className="App">
          <nav className=" navbar navbar-dark bg-dark ">
              <a href="" className="text-white">
                  Tareas
                    <span className = "badge badge-pill badge-light ml-2">
                        { this.state.todos.length }
                    </span>
                  </a>
          </nav>
          <div className="container">
            <div className="row mt-4">
              <div className="col-md-4 text-center">
                <TodoForm onAddTodo={ this.handleAddTodo }></TodoForm>
              </div>
              <div className="col-md-8">
                <div className="row">
                  {todos}
                </div>
              </div>
            </div>
          </div>
      </div>


    );
  }
}

export default App;
