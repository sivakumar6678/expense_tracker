import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import Dashboard from '../src/Dashboard Component';
import './App.css'
import HomeComponent from './Home Component'
function App() {
  const element = useRoutes([
    {
      path: '/', element: <HomeComponent />
    },
    {
      path: '/dashboard', element: <Dashboard />
    }
  ]
);
  return (
    <div>
      {/* <h1>App Component</h1> */}
      <HomeComponent />
    </div>
  )
}

export default App;
