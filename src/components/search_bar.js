import React, { Component } from 'react';



class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { term : '' };
    }

    onChangeTerm(term){
        this.props.onChangeTerm(term);
        this.setState({term});
    }
    render(){
        return (
            <div className="row justify-content-center col-12 mb-3">
                <div className="col-8">
                    <input
                        className="col" type="text"
                        value={this.state.term}
                        onChange={event=> this.onChangeTerm(event.target.value)}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBar;