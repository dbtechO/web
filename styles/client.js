App = Ember.Application.create();
App.Router.map(function() {
	this.resource('index');
	this.resource('about');
	this.resource('projects');
})

