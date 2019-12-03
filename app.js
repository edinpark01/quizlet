(function quizlet(){
    function QuestionsBucket(listOfQuestions) {
        this.bucket = listOfQuestions;
        this.getRandomQuestion = function () {
            randInt = Math.floor(Math.random() * this.bucket.length);
            var tempQuestion = this.bucket[randInt];

            tempQuestion.display();
            var input = this.__promptPlayer();

            if ( input === 'exit' ){ return true; }
            if ( tempQuestion.checkAnswer(input) ) {
                this.__score += 1
                console.log('INFO\tGood job, you got it right!');
            }
            else {
                console.log('INFO\tIncorrect answer, please try again!');
            }

            console.log('INFO\tCurrent Score: ' + this.__score);
            console.log('-------------------------------------\n');
        }
    }
    QuestionsBucket.prototype.__promptPlayer = function(){
        var answer = prompt('What is the correct answer? [ Type \'exit\' to finish game ]');
        return answer;
    }
    QuestionsBucket.prototype.__score = 0;

    function Question(question, possibleAnswers, correctAnswer){
        /*  STEP 01:    
            Build a function constructor called Question 
            to describe a question. A question should include:

            a)  question itself
            b)  the answers from which the player can choose the correct 
                one (choose an adequate data structure here, array, object, etc.)
            c)  correct answer (I would use a number for this) */    
        this.question = question;
        this.possibleAnwers = possibleAnswers;
        this.correctAnwer = correctAnswer;
        this.display = function(){
            console.log(this.question);
            for( var i = 0; i < this.possibleAnwers.length; i++ ){
                console.log('\t' + i + ': ' + possibleAnswers[i]);
            }
        }
    }
    Question.prototype.checkAnswer = function(ans){
        msg = ans == this.correctAnwer ? 'You got it!' : 'Wrong Answer!';

        console.log(msg);

        return ans == this.correctAnwer
    }
    
    var qts = new QuestionsBucket([
        new Question(
            "What is Johnny Depp afraid of?",
            ['Clowns', 'Ships', 'Comedians', 'Flying'],
            0 
        ),
        new Question(
            "In California you can't legally buy a mousetrap without having a what?",
            ['Money', 'Hunting License', 'ID', 'Property'],
            1 
        ),
        new Question(
            "In Texas it's illegal to swear in front of a what?",
            ['Mother', 'Police Officer', 'Judge', 'Corpse'],
            3 )
    ])
    
    while ( true ){    
        var exit = qts.getRandomQuestion();
        
        if ( exit ) { break; } 
    }
}())

