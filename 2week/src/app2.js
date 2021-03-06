(function(){
    // function includeJs(jsfile) {
    //     var js = document.createElement('script');
    //     script.onload = function () {
    //     };
    //     js.type = "text/javascript";
    //     js.src = jsfile;
    //     document.body.appendChild(js);
    // }
    // includeJs("../jquery-3.2.1.min.js");
    function getRandomInt (min = 0, max = 9) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function Baseball(digit = 3) {
        this.digit = digit;
        this.answer = this.makeAnswer();
    }
    Baseball.prototype.makeAnswer =
        function () {
            const answer = [], numbers = [0,1,2,3,4,5,6,7,8,9];
            let max, index;

            for (let i = 0; i < this.digit; i++) {
                max = 9-i;
                index = getRandomInt(0, max);
                answer.push(numbers[index]);
                numbers.splice(index,1);
            };

            return answer;
        }

    Baseball.prototype.getResult = function(answers) {
        let result = '3S0B';

        return result;
    }

    $(function() {
        const mainEl = $('main')
            , resultBoardEl = $('#result-board')
            , buildResultTemplete = (guess,result) =>
                `<li class="list-group-item">
                                ${guess}
                                <span class="badge">${result}</span>                            
                             </li>`;

        $('#start-btn').click(function(e) {
            const digit = $('#digit').val();
            if (digit) {
                startGame(digit);
                mainEl.addClass('started');
            }
        })

        function startGame(digit) {
            const baseball = new Baseball(digit);
            console.log(baseball.answer);
            $('input#guess').keypress(e => {
                if (e.which === 13) {
                    const guessNum = this.value.split('')
                            .map(v => Number(v)),
                        result = baseball.getResult(guessNum)

                    resultBoardEl.append(buildResultTemplete(this.value,result));
                    if (result === '3S0B') {
                        alert(`${this.value} 정답을 맞추셨습니다`);
                        resetGame();
                    }
                }
            });
        }

        function resetGame() {
            mainEl.removeClass('started');
            resultBoardEl.empty();
            $('input#guess').unbind('keypress');
        }
    });
})();

function avg(a, ...args) {
    // console.log(arguments)
    // const args = Array.from(arguments);
    console.log(a);
    // console.log(args.length === 0);
}