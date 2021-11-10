import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AuthProvider from './contexts/AuthProvider';
import Header from './Pages/Home/Header/Header';
import Login from './LogIn/LogIn/LogIn';
import Footer from './Pages/Footer/Footer';
import MoreProducts from './Pages/MoreProducts/MoreProducts';
import Orders from './Pages/Orders/Orders';
import PrivateRoute from './privetRoute/privetRoute';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/moreProducts">
            <MoreProducts />
          </Route>
          <PrivateRoute exact path="/orders/:orders">
             <Orders />
          </PrivateRoute>
        </Switch>
        <Footer />
    </Router> 
      </AuthProvider>
    </div>
  ); 
}

export default App;
