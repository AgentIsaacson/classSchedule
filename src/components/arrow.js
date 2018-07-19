import React, { Component } from "react";

export default class Arrow extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: false
		};
	}

	flip = function() {
		this.props.callback(this.state.status)
		this.state.status = !this.state.status;
		if (this.state.status) {
			document.getElementById(this.id).classList.add("arrow-closed");
		} else {
			document.getElementById(this.id).classList.remove("arrow-closed");
		}
	}.bind(this);

	render() {
		this.id = `arrow-${this.props.id}`;
		return (
			<a
				id={this.id}
				onClick={() => this.flip()}
				className={`${this.props.className} arrow`}
			/>
		);
	}
}
