import React from 'react'

import { withActiveModel } from 'hoc'

class ModelItem extends React.Component {
	render() {
		const {
			data = [],
			setActiveModel
		} = this.props

		return (
			<div className="models__item" onClick={() => setActiveModel(data)}>
				<img className="thumb" src={data.thumb} alt={data.name} />
				<div className="info">
					<h5>{data.name}</h5>
				</div>
			</div>
		)
	}
}

export default withActiveModel(ModelItem)