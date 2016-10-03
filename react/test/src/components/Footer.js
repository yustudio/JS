import React from "react";

export default class Footer extends React.Component {

	handleChange(e){
		const title = e.target.value;
		this.props.changeTitle(title);
	}

	render() {
		return (
			<div>
			    <footer>footer note</footer>
				<h1>title is {this.props.title}</h1>
				<input value="Type something" onChange={this.handleChange.bind(this)} />
			</div>
		)
	}
}