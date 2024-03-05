import {Chip} from '@mantine/core';
import {Todo as TodoType, updateStatus} from './todos';

export type TodosProps = {
  todo: TodoType
}
const Todo = ({todo}: TodosProps) => (
  <Chip key={todo.id}
    color={todo.completed ? 'green' : 'grey'}
    checked={todo.completed}
    onChange={function (isComplete: boolean) {
      updateStatus(todo.id, isComplete);
    }}>
    {todo.name}
  </Chip>
);
export default Todo;