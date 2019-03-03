import { connect } from 'react-redux'

const withActiveModel = Component => {
	return connect(
		state => {
			return {
				activeModel: state.activeModel
			}
		},
		dispatch => ({
			setActiveModel: payload => {
				dispatch({
					type: 'SET_ACTIVE_MODEL',
					payload: payload
				})
			}
		})
	)(Component)
}

export { withActiveModel }
