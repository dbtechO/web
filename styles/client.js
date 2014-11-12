App = Ember.Application.create();
App.Router.map(function() {
	this.resource('index');
	this.resource('about');
	this.resource('projects');
})

$(document).ready(function(){
    $('.conveyor').slick({
        dots: true,
        infinite: true,
        autoplay: true, 
        centerMode: false,
        speed: 300,
    });
});
