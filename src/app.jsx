import ReactDOM from 'react-dom';
import React from 'react';
import Grid from './component/grid.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './css/grid-css.less';

/*ReactDOM.render(
	<Grid />,
	document.getElementById("todoList")
);*/
import Items from 'bundle-loader?lazy&name=[name]!./component/item.jsx';
import Bundle from './bundle.js';

const Item = () => (
    <Bundle load={Items}>
        {(Item) => <Item />}
    </Bundle>
);

ReactDOM.render(
    <Router>
		<div>
			<h1>123</h1>
            <Route exact path="/" component={Grid}/>
			<Route path='/as' component={Grid} />
			<Route path='/index' component={Item} />
		</div>
    </Router>
  , document.getElementById('todoList'));
