
(function () {

    function Baseball(digit) {
        this.digit = digit || 3;
        this.answer = this.makeAnswer(digit);

    }
    function getRandomInt (min = 0, max = 9) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    Baseball.prototype.makeAnswer = function () {
        const answer = [], numbers = [0,1,2,3,4,5,6,7,8,9];
        let max, index;

        for (let i = 0; i < this.digit; i++) {
            max = 9-i;
            index = getRandomInt(0, max);
            answer.push(numbers[index]);
            numbers.splice(index,1);
        };

        return answer;
    };
    Baseball.prototype.getResult = function (answers) {
        let result = 'out';
    };
    var baseball = new Baseball();
    console.log(baseball.answer);

    $(function () { //자동으로 가져옮
        const mainEl = $('main'),
            resultBoardEl = $("#result-board");

        console.log(mainEl,resultBoardEl);
        $('#start-btn').click(function (e) {
           const digit = $('#digit').val();
           if(digit){
               startGame(digit);
               mainEl.addClass('started');
           }
        });
        function startGame(digit) {
            const baseball = new Baseball(digit);
            console.log(baseball.answer);
            $('input#guess').keypress(function (e) {
                if(e.which == 13){
                    const guessNum = this.value.split(''),
                        result = baseball.getResult(guessNum),
                        resuultTemplate =
                            '<li class = "list-group-item">' +
                            '${this.value}' +
                            '<span class="badge">${result}</span>' +
                            '</li>'
                    resultBoardEl.append(resultTemplate);
                }
                if(result === '3S0B'){
                    alert(this.value + '정답을 맞추었습니다');
                }
            })
        }
    });
})();