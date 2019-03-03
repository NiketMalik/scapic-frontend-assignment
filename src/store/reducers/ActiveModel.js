export const ActiveModel = (state = false, action) => {
	switch (action.type) {
		case 'SET_ACTIVE_MODEL':
			state = action.payload
			break
		default:
			break
	}

	return state
}
