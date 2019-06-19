import React , { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term:''
        };
    }
    onSearchChangeTerm(term){
        this.props.onSearchChangeTerm(term);
        this.setState({term});
    }
    render(){
        return (
            <div className="col-12 search-bar row justify-content-md-center mb-3">
                <div className="col-8">
                    <input
                        className="col"
                        value={this.state.term}
                        onChange={ event => this.onSearchChangeTerm(event.target.value)}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBar