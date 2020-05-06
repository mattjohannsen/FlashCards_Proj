import React from 'react';
import axios from 'axios';

export default class StackList extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            stacks: [],
            currentStack: "0"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({currentStack: event.target.value});
        console.log(event.target.value);
      }
    
    handleSubmit(event) {
    alert('A name was submitted: ' + this.state.currentStack);
    event.preventDefault();
    }

    componentDidMount(){
        axios.get('https://localhost:44393/api/collection').then(res => {
            console.log(res);
            this.setState({ stacks: res.data});
        });
    }

    render(){
        return <form className="form-group" onSubmit={this.handleSubmit}>
                <label>Choose a stack of cards:
                  <select value={this.state.currentStack} onChange={this.handleChange}>
                    {this.state.stacks.map(stack => <option key={`${stack.id}-${Date.now()}`} value={stack.id} >{stack.title}</option>)}
                  </select>
                </label>
                <div className="form-group">
                  <button className="btn-primary">Select Stack</button>
                </div>
          </form>;

        // return <ul>{this.state.stacks.map(stack => <li key={stack.id}>{stack.title}</li>)}</ul>;
    }
}