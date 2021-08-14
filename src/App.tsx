import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={SignIn} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
