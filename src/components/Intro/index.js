import React from 'react'
import 'static/scss/app.scss'

class Intro extends React.Component {
	render() {
		return (
			<section className="intro">
				<div className="skew" />
				<div className="content">
					<h2>Select Model</h2>
					<p>Interact and personalize from a wide variety of models.</p>
				</div>
			</section>
		)
	}
}

export default Intro