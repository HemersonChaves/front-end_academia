import {
  useLocation,
} from 'react-router-dom';

function NoMatch() {
  const location = useLocation();

  return (
    <div data-testid="error-page">
      <h3>
        erro 404
      </h3>
      <code>{location.pathname}</code>
    </div>
  );
}

export default NoMatch;
