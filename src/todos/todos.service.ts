import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    {
      id: 0,
      title: 'Learn Angular',
      creationDate: '2024-08-05',
      isDone: true,
    },
    {
      id: 1,
      title: 'Learn Signal',
      creationDate: '2024-08-05',
      isDone: true,
    },
    {
      id: 2,
      title: 'Create a todo app',
      creationDate: '2024-08-06',
      isDone: false,
    },
    {
      id: 3,
      title: 'Play with my dog',
      creationDate: '2024-08-06',
      isDone: false,
    },
    {
      id: 4,
      title: 'Brew some coffee',
      creationDate: '2024-08-06',
      isDone: false,
    },
  ];

  create(createTodoDto: CreateTodoDto) {
    const newTodo: Todo = {
      ...createTodoDto,
      id: this.todos.length,
      creationDate: new Date().toLocaleDateString(),
    };
    this.todos.push(newTodo);
  }

  findAll() {
    return this.todos;
  }

  findOne(id: number) {
    return this.todos.find((todo) => todo.id === id);
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = this.findOne(id);
    if (todo) {
      Object.assign(todo, updateTodoDto);
    }
    return todo;
  }

  remove(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
