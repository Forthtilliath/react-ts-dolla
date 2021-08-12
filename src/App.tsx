import { FC } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

const App: FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </div>
    );
};

export default App;
