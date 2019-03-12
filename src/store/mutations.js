export default {
	changeCity (state, str) {
		state.depart = str
		try {
			localStorage.depart = str
		} catch (e) {}
	},
	changeCity1 (state, str) {
		state.arrive = str
		try {
			localStorage.arrive = str
		} catch (e) {}
	}
}