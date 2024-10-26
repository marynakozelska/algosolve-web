angular.module('algo-solve').component('home', {
    templateUrl: 'app/components/home/home.template.html',
    controller: function () {
        this.faqs = [
            {
                question: 'Is AlgoSolve free to use?',
                answer: 'Yes, AlgoSolve is free to use for all users. You can solve problems without any cost.',
                isOpen: false
            },
            {
                question: 'Is there a limit to how many problems I can solve on AlgoSolve?',
                answer: 'No, there is no limit to the number of problems you can solve on AlgoSolve. You can solve as many as you want.',
                isOpen: false
            },
            {
                question: 'How do I report an issue or suggest a feature for AlgoSolve?',
                answer: 'You can report issues or suggest new features by contacting our support team through the AlgoSolve contact page.',
                isOpen: false
            }
        ];

        this.toggleFaq = function (faq) {
            faq.isOpen = !faq.isOpen;
        };
    }
});