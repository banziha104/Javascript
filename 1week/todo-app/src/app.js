function App() {
    var todos = [
            {
                todo: "공부하기", done: false
            },
            {
                todo: "놀기", done: true
            },{
                todo: "밥먹기", done: false
            }
        ],
        todoConatinerEl =
            document.querySelector('.todo-container'),
        plusTodoBtnEl =
            document.querySelector('.add-todo button'),
        titleEl =
            document.querySelector('.title h2');

    for (var i = 0; i < todos.length; i++) {
        var t = todos[i],
            todoEl = createTodoEl(t);
        todoEl.querySelector('input').addEventListener('click',(function (e) {
            var num = i;
            return function () {
                todos[num].done = e.target.checked;
                renderTodoCounts();
            }
        })());
        todoConatinerEl.appendChild(todoEl);
    }
    plusTodoBtnEl.addEventListener('click', function(evt){
        var textEl = document.querySelector('.add-todo input[type="text"]'),
            todoText = textEl.value,
            newTodo = { todo: todoText, done: false};
        todoConatinerEl.appendChild(createTodoEl(newTodo));
        todos.push(newTodo);
        renderTodoCounts();
    });
    renderTodoCounts();

    function renderTodoCounts() {
        var count = 0,
            now = new Date();
        for (var i = 0; i < todos.length; i++) {
            var todo = todos[i];
            if (todo.done === false) count ++;
        }
        titleEl.innerHTML = now.getMonth() + 1 + '월' + now.getDate()
            + '일 (' + count + ')';
    }

    function createTodoEl(todo) {
        var todoEl = document.createElement('div');
        todoEl.className =  'todo';
        todoEl.innerHTML =
            '<input type="checkbox" ' +
            ((todo.done) ? 'checked' : '')
            + '> <label>' + todo.todo + '</label>';

        return todoEl;
    }
}

App();