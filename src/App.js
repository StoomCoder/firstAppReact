import React, { Component } from 'react';
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

    const todos = this.state.todos.map((todo, i) => {
        return (
          <div className="col-md-4" key={i}>
            <div className="card mt-4">
              <div className="card-title text-center">
                <h1>{ todo.tittle }</h1>
                <span className="badge badge-pill badge-danger ml-2">
                  {todo.priority}
                </span>
              </div>
              <div className="card-body">
                {todo.description}

                <h3>{todo.responsible}</h3>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  >
                  Eliminar
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Confirmacion</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        ¿Estas seguro de eliminar este registro?
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                        <button
                          type="button"
                          data-dismiss="modal"
                          class="btn btn-primary"
                          onClick={this.removeTodo.bind(this, i)}>Confirmar</button>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>










        )
      });

    return (

      <div className="App">
          <nav className=" navbar navbar-dark bg-dark ">
              <div className="text-white">
                  Tareas
                    <span className = "badge badge-pill badge-light ml-2">
                        { this.state.todos.length }
                    </span>
                  </div>
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
