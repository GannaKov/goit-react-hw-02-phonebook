import PropTypes from 'prop-types';

import { Container, Title } from './Section.styled';

export function ContainerWrap({ title, children }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  );
}

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
