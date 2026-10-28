import { BrowserRouter as Router } from 'react-router';
import { TemplateProvider } from './context/TemplateContext';
import AppRoutes from './routes';

function App() {
  return (
    <TemplateProvider>
      <Router>
        <AppRoutes />
      </Router>
    </TemplateProvider>
  );
}

export default App;
