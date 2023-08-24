import { Button } from 'components/Button';
import { Wrapper } from './StatusFilter.styled';

export const StatusFilter = () => {
  return (
    <Wrapper>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
    </Wrapper>
  );
};
