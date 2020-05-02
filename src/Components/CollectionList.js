import React from 'react';
import axios from 'axios';

export default class CollectionList extends React.Component {
    state =     {
        collections: []
    }
    componentDidMount(){
        axios.get('https://localhost:44393/api/collection').then(res => {
            console.log(res);
            this.setState({ collections: res.data});
        });
    }

    render(){
        return <ul>{this.state.collections.map(collection => <li>{collection.title}</li>)}</ul>;
    }
}