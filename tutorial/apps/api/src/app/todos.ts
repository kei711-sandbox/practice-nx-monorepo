import { Express } from 'express';

interface Todos {
  title: string;
}

const todos: Todos[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

export function addTodoRoutes(app: Express) {
  app.get('/api/todos', (req, res) => res.send(todos));
  app.post('/api/addTodo', (req, res) => {
    const newTodo = {
      title: `New todo ${ Math.floor(Math.random() * 1000) }`
    };
    todos.push(newTodo);
    res.send(newTodo);
  });
}
