import React from 'React';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class GridItem extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<td>
				<input key = {"input"} type="text" value={this.props.item} />
			</td>
		)
	}
}
class GridColumn extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<tr>
				{
					this.props.column.map((name,index) => (<GridItem key = {"item"+index} item = {name} />))
				}
				<td>
					<Link to = {{ pathname: './index'}} >123</Link>
				</td>
			</tr>
		)
	}
}
var datas = (() => {
	var arr = [];
	for(let i = 1; i < 10; i++){
		let arr2 = [];
		for(let j = 1; j <= i; j++){
			arr2.push(j + "*" + i + "=" + i*j);
		}
		arr.push(arr2);
	}
	return arr;
})();
export default class Grid extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: datas
		}
	}

	render() {
		return (
			<table className = "tab">
				<caption><h1>{this.props.title}</h1></caption>
				<tbody>
					{
						this.state.data.map((column,index) => (<GridColumn key = {"item"+index} column = {column} index = {index} />))
					}
				</tbody>
			</table>
		)
	}
}
