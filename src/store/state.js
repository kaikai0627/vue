let defaultDepart = '上海'
let defaultArrive = '深圳'
try {
	if (localStorage.depart) {
		defaultDepart = localStorage.depart
	}
	if (localStorage.arrive) {
		defaultArrive = localStorage.arrive
	}
} catch (e) {}

export default {
	depart: defaultDepart,
	arrive: defaultArrive
}