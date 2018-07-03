import React, { Component } from "react";
import { Icon } from "../icon";
import Arrow from "../arrow";

export default class LibraryCourse extends Component {
	render() {
		return (
			<div className="library-course">
				<div className="library-course__title-arrow">
					<label className="library-course__title">Problem Solving</label>
					{Icon("fas fa-check", "library-course__icon")}
				</div>
				<Arrow className="library-course__arrow" />
				<div className="library-course__description">
					<label>Course Description</label>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
						gravida augue. Aliquam vel nulla augue. Phasellus venenatis porta
						posuere. Aenean rhoncus porta sapien. Suspendisse eget dolor sed
						orci ultricies aliquet non non arcu. Morbi auctor fermentum semper.
						Sed lacinia facilisis malesuada. Proin aliquam ex eget urna
						vulputate, vitae maximus massa facilisis. Aliquam ac diam sapien.
						Donec gravida leo elit, vel feugiat lacus cursus sed.
					</p>
				</div>
			</div>
		);
	}
}
