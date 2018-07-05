import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleEnrolled } from "../../actions";

class ScheduleCourse extends Component {
	render() {
		return (
			<div className="schedule-course">
				<label>{this.props.title}</label>
			</div>
		);
	}
}

export default connect(
	null,
	[toggleEnrolled]
)(ScheduleCourse);
