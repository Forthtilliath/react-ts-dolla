import { FC } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

const App: FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/signin" exact component={SignIn} />
                </Switch>
                <Home />
            </BrowserRouter>
        </div>
    );
};

export default App;
