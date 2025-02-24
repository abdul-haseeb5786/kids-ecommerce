import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <div>
      <Routes> {/* ✅ No BrowserRouter Here */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
