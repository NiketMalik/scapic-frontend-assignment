import React from 'react'
import ModelItem from './ModelItem'

class ModelSection extends React.Component {
	render() {
		const {
			data = []
		} = this.props

		const scrollMultiplier = 5

		return (
			<div className="models__section">
				<h3>{data.name}</h3>
				<div className="container" ref={ref => this.containerRef = ref}>
					{
						data.models.map((model, k) => <ModelItem key={k} data={model} />)
					}
				</div>
				{
					data.models.length > 3 &&
					<div className="controls">
						<div 
							className="left" 
							onClick={() => {
								let x = scrollMultiplier
								const targetScroll = (this.containerRef.clientWidth / 3) + 8

								let scrollInterval = setInterval(() => {
								  this.containerRef.scrollBy(-1 * (x % targetScroll < scrollMultiplier ? x % targetScroll : scrollMultiplier), 0)
								  if(x >= targetScroll)
								  	clearInterval(scrollInterval)
								  x += scrollMultiplier
								}, 1)
							}}
						/>
						<div 
							className="right" 
							onClick={() => {
								let x = scrollMultiplier
								const targetScroll = (this.containerRef.clientWidth / 3) + 8

								let scrollInterval = setInterval(() => {
								  this.containerRef.scrollBy((x % targetScroll < scrollMultiplier ? x % targetScroll : scrollMultiplier), 0)
								  if(x >= targetScroll)
								  	clearInterval(scrollInterval)
								  x += scrollMultiplier
								}, 1)
							}}
						/>
					</div>
				}
			</div>
		)
	}
}

export default ModelSection