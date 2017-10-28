# 인터프리터 언어

컴파일럴를 거쳐서 비변환되지 않고 바로 실행되는 프로그래밍 언어

<br/>

----

# 동적 프로그래밍 언어 

다른 언어에서 컴파일 과정 중 수행하는 특정 일들을 실행 도중에 수행하는 고급 언어

<br/>

---

# var 

```javascript
var v = "1"; //변수
var bool = true; //불린
var obj = {}; //객체
var arr = [1,2,3];
```

<br/>

---

# 스코프

함수 단위로 스코프가 이루어짐

```javascript
function add() {
  var c = "a"; // 안찍힘 함수단위 스코프이기 때문
}
if (true){
    var d = "b" //찍힘 
}
add();
c;
d;
```

<br/>

---

# 데이터 타입

<li> 원시데이터타입 : 숫자 문자열 불린 null undefined
<li> 객체 : 배열 함수 날짜 정규식 
<li> undefined : 생성하면 기본으로들어감
<li> null : 널은 직접 장입해야됨

<br/>

---

# 이벤트 핸들

각 노드에 addEventListener 메서드를 이용하여 이벤트 핸들러를 등록하면 해당 이벤트 발생시 등록된 함수가 호출됨

```javascript
<button>클릭하세요!</button>
<p>핸들러가 없는 요소</p>

<script>
var button = document.querySelector("button");
button.addEventListener("click", function() {
console.log("버튼이 클릭);
});
</script>
```

캡쳐링 : 상위문서부터 내려옮
버블링 : 하위문서부터 올라감


<br/>

---

# 클로져

i가 3이나옮

```javascript
for (var i = 0; i < todos.length; i++) {
        var t = todos[i],
            todoEl = createTodoEl(t);
        todoEl.addEventListener('click',function (e) {
            console.log(e.target);
            console.log(i);
        });
```

```javascript
 for (var i = 0; i < todos.length; i++) {
        var t = todos[i],
            todoEl = createTodoEl(t);
        todoEl.addEventListener('click',function (e) {
            var num = i;
            return function () {
                console.log(e.target.checked);
                console.log(num);
            }
        })();
        todoConatinerEl.appendChild(todoEl);
    }
```

# 테스트 방법론

<li> 단위 테스트 : 함수 또는 클래스와 같이 작은 단위의 기능을 테스트하는 방법
<li> E2E 테스트 : 어플리케이션의 기능을 처음부터 끝까지 예상한 흐름대로 동작하는지 테스트하는 방법


<br/>

---


# Canvas

자바스크립트를 통해 그래픽을 그리는데 사용되는 요소

```javascript
function Chart(containerId, config) { // 생성자 함수인지 그냥 함수인지 모르기때문에 첫문자를 대문자로 만듬
    this.containerEl = document.getElementById(containerId); //문서객체를 가져옮
    this.canvas = document.createElement('canvas');          //캔버스를 만듬
    this.ctx = this.canvas.getContext('2d');                 //2d캔버스의 컨텍스트를가져옮
    this.containerEl.appendChild(this.canvas);               //section 밑에 캔버를 넣음

    if(!config.options) config.options = {};                //옵션이 없다면 초기화
    this.options = {                                        //옵션이 있다면 장입 없다면 200으로세팅
        width : config.options.width || 200,
        height : config.options.height || 200
    };

    this.canvas.width = config.options.width;               //값 장입
    this.canvas.height = config.options.height;
}

Chart.prototype.drawRect = function (x, y, width, height, opts) {   //프로토타입 선언
    if(!opts) opts = {};
    this.ctx.beginPath();
    this.ctx.lineWidth = opts.lineWidth;
    this.ctx.strokeStyle = opts.strokeStyle;
    this.ctx.borderColor = opts.borderColor;
    this.ctx.rect(x,y,width,height);
    this.ctx.stroke();
    if(opts.backgroundColor){
        this.ctx.fillStyle = opts.backgroundColor;
        this.ctx.fillRect(x,y,width,height);
    }
};

Chart.prototype.drawText =
    function (text,x,y,options) {
        if(!options) options = {};
        this.ctx.font = options.font;
        this.ctx.textAlign = options.textAlign || 'center';
        this.ctx.fillStyle = options.fillStyle || '#000000';
        this.ctx.fillText(text,x,y);
    };

function BarChart(ctx, config) {
    // Chart()                          둘다 함수를 불러오지만, call은 여러변수를 넣을 수 있음
    Chart.call(this,ctx,config);        //상속, 여기까지만 쓰면 부모에 있는 것만 가져옮.
}

BarChart.prototype = Object.create(Chart.prototype); // 프로토타입 체인, Chart의 프로토타입에 있는 것들을 가져옮.

```
<br/>

---

# 스코프

<li> Lexical Scope : Javascript,  소스코드 -> 어휘분석기(scope 확정) -> 내부 코드 생성기 -> 구문 분석 및 실행
<li> Dynamic Scope : Perl

<br/>

---

# 실행컨텍스트

자바스크립트의 코드가 실행되기 위해 필요한 정보를 담고 있는 객체

<li> global code : 전역에 있는 코드
<li> function code : 함수 내의 코드
<li> eval code : eval 함수로 실행되는 코드 

<br/>

---

# This

<li> 기본 : window
<li> 객체의 경우 : 객체 자체를 가르킴
<li> click 시 : window
