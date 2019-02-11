const quizForm = document.getElementById('quiz');


quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(quizForm);

    const answers = {
        reward: formData.get('reward')
    };

    console.log(answers);
});
