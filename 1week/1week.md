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

