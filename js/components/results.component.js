Vue.component('results', {
	template: '#result-template',
	data: function() {
		return {}
	},
	computed: {
		selectedTour: function() {
			var isTourSelected = !!Object.keys(store.state.selectedTour).length;

			//redirect user to the home page
			//if tour wasn't selected
			if (isTourSelected) {
				return store.state.selectedTour;
			} else {
				this.$router.push({
					path: 'home'
				});
			}

		}
	}
});