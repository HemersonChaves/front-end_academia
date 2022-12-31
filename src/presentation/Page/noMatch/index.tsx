import {
  useLocation,
} from 'react-router-dom';
import { Container } from '../../Components/Elements';

function NoMatch() {
  const location = useLocation();

  return (
    <Container data-testid="error-page">
      <h3>
        erro 404
      </h3>
      <code>{location.pathname}</code>
    </Container>
  );
}

export default NoMatch;
