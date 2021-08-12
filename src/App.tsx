import { FC } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

const App: FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </div>
    );
};

export default App;
