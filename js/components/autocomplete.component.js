Vue.component('autocomplete-input', {
    template: '#autocomplete-input-template',
    props: {
        tours: {
            type: Array,
            required: true
        }
    },
    data: function() {
        return {
            isOpen: false,
            wasNotSelected: true,
            highlightedPosition: 0,
            //by this prop will be search result shown
            keyword: '',
            //by this prop data will be filtered
            enteredByUser: '',
            filteredTours: [],
            sharedState: store.state
        }
    },
    computed: {
        fTours: function() {
            var REG_EXP = new RegExp(this.enteredByUser, 'i');

            this.filteredTours = this.tours.filter(o => o.title.match(REG_EXP));

            //show first 5 tours
            this.filteredTours = this.filteredTours.slice(0, 5);

            this.openState();

            return this.filteredTours;
        }
    },
    methods: {
        openState: function() {
            this.isOpen = this.wasNotSelected &&
                this.keyword !== '' &&
                this.filteredTours.length > 0;
        },
        onInput: function(value) {
            this.enteredByUser = this.keyword;
            this.highlightedPosition = 0;
            this.isOpen = !!value;
            this.wasNotSelected = true;
        },
        moveDown: function(target) {
            if (!this.isOpen) {
                return;
            }

            this.highlightedPosition = (this.highlightedPosition + 1) % this.fTours.length;
            this.keyword = this.fTours[this.highlightedPosition].title;
        },
        moveUp: function(target) {
            if (!this.isOpen) {
                return;
            }

            this.highlightedPosition = (this.highlightedPosition - 1) < 0 ? this.fTours.length - 1 : this.highlightedPosition - 1;
            this.keyword = this.fTours[this.highlightedPosition].title;
        },
        select: function() {
            var selectedTour = this.fTours[this.highlightedPosition];

            this.sharedState.selectedTour = selectedTour;

            this.isOpen = false;
            this.keyword = selectedTour.title;
            this.wasNotSelected = false;

            this.$router.push({
                path: 'results'
            });
        }
    }
});