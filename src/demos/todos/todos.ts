import {computed, effect, signal} from '@preact/signals-react';
import {getStore, setStore} from '../store';

const STORE_KEY = 'todo-list';

export type Todo = {
  id: number;
  name: string;
  completed: boolean;
}

export const todos = signal<Todo[]>(
  getStore<Todo[]>(STORE_KEY) || []
);

export const completed = computed(() => (
  todos.value.filter((todo: Todo) => todo.completed)
));

export const pending = computed(() => (
  todos.value.filter((todo: Todo) => !todo.completed)
));

export const addTodo = (name: string) => {
  if (name?.length) {
    todos.value = [{
      id        : Math.random() * 100,
      completed : false,
      name
    }, ...todos.value];
  }
};

export const updateStatus = (id: number, isChecked: boolean) => {
  todos.value = todos.value.map((todo: Todo) => (
    todo.id === id ? {...todo, completed: isChecked} : todo
  ));
};


export const clearCompleted = () => {
  todos.value = todos.value.filter((todo: Todo) => (
    !todo.completed 
  ));
};

export const reset = () => {
  todos.value = [];
};

effect(() => {
  setStore<Todo[]>(STORE_KEY, todos.value);
});