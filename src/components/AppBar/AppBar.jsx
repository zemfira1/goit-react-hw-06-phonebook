import { TaskCounter } from 'components/TaskCounter';
import { StatusFilter } from 'components/StatusFilter';
import { Section, Title, Wrapper } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Wrapper>
      <Section>
        <Title>Tasks</Title>
        <TaskCounter />
      </Section>
      <Section>
        <Title>Filter by status</Title>
        <StatusFilter />
      </Section>
    </Wrapper>
  );
};
