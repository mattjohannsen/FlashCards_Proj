import React from 'react';
import axios from 'axios';

export default class StackInput extends React.Component {
    state =     {
        title: '',
    }
    handleSubmit = event => {
      event.preventDefault();
      const user = {
        title: this.state.title,
      };
      axios.post('https://localhost:44393/api/stack', );
    }

    render(){
        return <ul>{this.state.stacks.map(stack => <li key={stack.id}>{stack.title}</li>)}</ul>;
    }
}