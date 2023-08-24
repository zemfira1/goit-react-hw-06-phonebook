import { Task } from 'components/Task';
import { Item, List } from './TaskList.styled';

export const TaskList = () => {
  return (
    <List>
      {[].map(task => (
        <Item key={task.id}>
          <Task task={task} />
        </Item>
      ))}
    </List>
  );
};
