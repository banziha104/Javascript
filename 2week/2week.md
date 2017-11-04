# Babel

<li> ES6와 같은 최신 자바스크립트 코드를 ES5로 바꿔주는 트랜스파일러
<li> Node.js 플ㄹ랫폼에서 동작
<li> ES6 -> ES5
<li> 플러그인들의 모음인 프리셋 설치 및 실행


```
npm install babel-preset-env --save-dev
babel src --presets env -d lib #babel-preset- 생략가능
```

<li> .babelrc 를 할경우 위의 생략가능

# ES6

```javascript
(function () {
    // var는 함수단위로 만들어지기 때매 스코프에서 소멸
   var app = "app";
})();

//전역
console.log(app);

if(true){
    var app = 'app';
}

console.log(app);
```

# let

```javascript

if(true){
    var app = 'app';
}


if(true){
    let app2 = 'app';
}

console.log(app); // 함수 스코프 단위기 떄문에 출력됨
console.log(app2); // 블락 단위기때문에 출력안됨
```


```javascript
for (var i = 0 ; i < 5 ; i++){
    setTimeout(function() { // 몇초뒤에 실행시키겠다는 함수
      console.log(i); // 4,4,4,4,4가 출력됨
    },10);
}

for (let i = 0 ; i < 5 ; i++){
    setTimeout(function() { // 몇초뒤에 실행시키겠다는 함수
      console.log(i); // 원하는대로 0,1,2,3,4가 출력됨.
    },10);
}
```

# const

```javascript
const a = "a";
a = "b"; //Error 기본형은 넣지 못함


const b = {
    /*레퍼런스 형태의 속서안의 값은 바꿀수 있음*/
};

const c = [];

c.push(1); 
```

# arguments 객체

```javascript
function avg() {
  const args = Array.from(arguments) // 가져올 수 있음.
  console.log(args);
}

avg(1,2,3,4)
avg(2,3)
avg(1)

function avg(...args) { //rest 연산자
  console.log(args);
}

avg(1,2,3,4)
avg(2,3)
avg(1)

const a = [1,2,3]
const b = [4,5,6]
const c = [...a,...b] // 1,2,3,4,5,6

```

# default 처리

```javascript
function buildUserInfo({name = '-',email = '-'}={}) {
  
}

buildUserInfo({
 name : 5
});

buildUserInfo();
```

```javascript
let product = {
    name: 'n',
    price : 200,
    review : [
        {text : 'good'}
    ]
}

let {name , price , review : [first, ...restReview]} = product;

console.log(name , price , first, restReview);

a(product);
```

# Arrow Funtion

```javascript
const exponetx = exp => {return 10};

const add = (a,b) => a + b;

const exponet = exp => base => base ** exp;
```

```javascript
const sum = (...args) => args.reduce((a,b) => a+b);
```

# 객체와 클래스