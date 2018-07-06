import React, { Component } from "react";

export default class Arrow extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: false
		};
	}

	flip = function() {
        this.state.status = !this.state.status;
		if (this.state.status) {
			document.getElementById("arrow").classList.add("arrow-closed");
		} else {
			document.getElementById("arrow").classList.remove("arrow-closed");
		}
	}.bind(this);

	render() {
		return <a id="arrow" onClick={() => this.flip()} className={`${this.props.className} arrow`} />;
	}
}
