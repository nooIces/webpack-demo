import React from 'react';
import ReactModal from 'react-modal';

export default class Windows extends React.Component {
	constructor(props) {
		super(props);
		/*let divs = document.createElement("div");
		divs.id = this.props.divId;
		document.getElementsByTagName('body')[0].append(divs);*/
		this.state = {
			isOpen: true
		};
		this.closeWin = this.closeWin.bind(this);
	}
	render() {
		return (
			<ReactModal isOpen={this.state.isOpen}>
				<p>111111111</p>
				<div>
					<button onClick={this.closeWin}>关闭</button>
				</div>
			</ReactModal>
		)
	}
	closeWin() {
		this.setState({
			isOpen:!this.state.isOpen
		})
	}
}