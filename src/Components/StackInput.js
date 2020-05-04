import React from 'react';
import axios from 'axios';

export default class StackInput extends React.Component {
    state = {
      title: ''
    };

    handleChange = event => {
      this.setState({ title: event.target.value});
    };

    handleSubmit = event => {
      event.preventDefault();

      const stack = {
        title: this.state.title
      };

      console.log(jsonstack);
      axios.post('https://localhost:44393/api/stack', JSON.stringify(stack), {headers: {'Content-Type': 'application/json',}})
        .then(res => {
          console.log(res);
          console.log(res.data);
        });
    };

    render(){
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Stack Title:
                <input type="text" name="title" onChange={this.handleChange} />
              </label>
              <button type="submit">Add</button>
            </form>
          </div>
        );
    }
}