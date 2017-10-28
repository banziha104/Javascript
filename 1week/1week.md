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



