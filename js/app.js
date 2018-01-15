//object for sharing data
var store = {
    state: {
        selectedTour: {}
    }
};

//routing set up
var router = new VueRouter({
    routes: [{
        path: '*',
        redirect: '/search'
    }, {
        path: '/search',
        component: {
            template: '<search></search>'
        }
    }, {
        path: '/results',
        component: {
            template: '<results></results>'
        }
    }]
});

//mounting app
var app = new Vue({
    el: '#app',
    router
});