App = Ember.Application.create();
App.Router.map(function() {
	this.resource('about');
	this.resource('work');
	this.resource('blog');
})

$('.carousel').carousel()

// var source = $("#project-slider").html();
// var template= Handlebars.compile(source);
// $('#projects').append(template());
 Handlebars.registerPartial("project-slider", $("#project-slider").html());