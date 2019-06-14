import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const App = () => (<div>
    <SearchBar></SearchBar>
</div>);

ReactDOM.render(<App/>, document.getElementById('root'));