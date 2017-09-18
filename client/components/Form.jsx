import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props){
        super(props);

        this.state = {};
    }
    
    render() {
        return(
            <form className="form">
                <input type="text" placeholder="Добавить"/>
                <button className="button" type="submit">Добавить</button>
            </form>  
        );
    }
}