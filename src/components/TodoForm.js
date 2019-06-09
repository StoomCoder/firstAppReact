import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
      tittle: '',
      responsible: '',
      description: '',
      priority: 'Baja'
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e){

    const { value, name } = e.target;
    this.setState({
      [name]:value
    })
  }

  handleSubmit(e){

    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      tittle: '',
      responsible: '',
      description: '',
      priority: 'Baja'
    });


  }



  render() {
    return (
      <div className="card">
        <form  className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="tittle"
              className="form-control"
               value={this.state.tittle}
              onChange={ this.handleInput }
              placeholder="Titulo"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control"
              value={this.state.responsible}
              onChange={ this.handleInput }
              placeholder="Responsable"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={ this.handleInput }
              placeholder="Descripcion"
              />
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
                value={this.state.priority}
                onChange={ this.handleInput }
              >
              <option>Baja</option>
              <option>Media</option>
              <option>Alta</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;
