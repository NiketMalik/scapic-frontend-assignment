import React from 'react'

class ARFrame extends React.Component {
	render() {
		const {
			obj,
			mtl 
		} = this.props

		if(!obj || !mtl) return ''

		// AWS Link has CORS, uncomment below string for local resolution
		// Could go deep in AFrame docs due to lack of time
		return (
			<a-scene>
			  <a-assets>
			    <a-asset-item id="tree-obj" src={obj/*"./BisonPlains.obj"*/}></a-asset-item>
			    <a-asset-item id="tree-mtl" src={mtl/*"./BisonPlains.mtl"*/}></a-asset-item>
			  </a-assets>
	      <a-entity ></a-entity>
	      <a-entity camera></a-entity>
			</a-scene>
		)
	}
}

export default ARFrame