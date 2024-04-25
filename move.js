// para scrollable ang web//

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 2000, function(){
          window.location.hash = hash;
        });
      } 
    });
  });

  // formmmm//

  function submitQuiz() {
    // Get all the selected answers
    var answers = {};
    var questions = document.querySelectorAll('.question');
    questions.forEach(function(question) {
        var questionId = question.querySelector('input[type="radio"]:checked').name;
        var answer = question.querySelector('input[type="radio"]:checked').value;
        answers[questionId] = answer;
    });

    // u compare answers with correct answers
    var correctAnswers = {
        'q1': 'paris',
        'q2': 'everest'
    };
    var score = 0;
    var resultText = '<ul>';
    for (var questionId in answers) {
        if (answers.hasOwnProperty(questionId)) {
            resultText += '<li>';
            resultText += 'Question ' + questionId.slice(1) + ': ';
            resultText += (answers[questionId] === correctAnswers[questionId]) ? 'Correct' : 'Incorrect';
            resultText += '</li>';
            if (answers[questionId] === correctAnswers[questionId]) {
                score++;
            }
        }
    }
    resultText += '</ul>';
    resultText += '<p>Total Score: ' + score + '/' + Object.keys(correctAnswers).length + '</p>';

    // mogawas ang results
    document.getElementById('resultText').innerHTML = resultText;
    document.getElementById('results').style.display = 'block';
}
