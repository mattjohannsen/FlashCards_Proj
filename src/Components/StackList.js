import React from 'react';
import axios from 'axios';

export default class StackList extends React.Component {
    state =     {
        stacks: [],
    }
    componentDidMount(){
        axios.get('https://localhost:44393/api/collection').then(res => {
            console.log(res);
            this.setState({ stacks: res.data});
        });
    }

    render(){
        return <ul>{this.state.stacks.map(stack => <li key={stack.id}>{stack.title}</li>)}</ul>;
    }
}