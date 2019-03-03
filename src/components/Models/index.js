import React from 'react'
import ReactDOM from 'react-dom'

import { withActiveModel } from 'hoc'

import ARFrame from './ARFrame'
import ModelSection from './ModelSection'
import SAMPLES from 'samples'

class Models extends React.Component {
	state = {
		cursor: 2
	}

	componentDidMount() {
	  document.addEventListener('scroll', this.loadMoreListner)
	}

	componentWillUnmount() {
	  document.removeEventListener('scroll', this.loadMoreListner)
	}

	loadMoreListner = () => {
		// should add a check if API is used, wether received data has items
		// if no items in API, detach listner and hide load more
		if(this.state.cursor === SAMPLES.length)
			document.removeEventListener('scroll', this.loadMoreListner)
	  else
	  	if (this.modelsRef.getBoundingClientRect().bottom <= window.innerHeight)
	  		this.setState({ cursor: this.state.cursor + 2 })
	}

	renderInPortal(Component, props, key, target) {
		return ReactDOM.createPortal(
			<Component key={key} {...props} />, document.querySelector(target)
		)		
	}

	render() {
		const { activeModel } = this.props

		const {
			cursor
		} = this.state

		const models = SAMPLES.slice(0, cursor)
		return (
			<section className="models" ref={ref => this.modelsRef = ref}>
				{
					models.map(model => (<ModelSection key={model.name} data={model} />))
				}
				{
					cursor < SAMPLES.length &&
					<button 
						className="button button-outline load-more"
						onClick={() => this.setState({ cursor: cursor + 2 })}
					>Load More</button>
				}
				{
					this.renderInPortal(ARFrame, (activeModel || {}), activeModel.name, '#root')
				}
			</section>
		)
	}
}

export default withActiveModel(Models)