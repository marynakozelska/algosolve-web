angular.module('algo-solve').component('about', {
    templateUrl: 'app/components/about/about.template.html',
    controller: function () {
        this.title = 'About Us';
        this.description = 'This is the About page where you can find more information about our organization.';
    }
});