import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AuthProvider from './contexts/AuthProvider';
import Login from './LogIn/LogIn/LogIn';
import MoreProducts from './Pages/MoreProducts/MoreProducts';
import Orders from './Pages/Orders/Orders';
import PrivateRoute from './privetRoute/privetRoute';
import MyOrders from './DashBord/MyOrders/MyOrders';
import AllOrders from './DashBord/AllOrders/AllOrders';
import DashBord from './DashBord/DashBord/DashBord';
import Header from './Pages/Home/Header/Header';
import Error from './Error/Error';
import MakeAdmin from './DashBord/MakeAdmin/MakeAdmin';

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
          <Route exact path="/aaa">
            <MakeAdmin />
          </Route>
          <Route exact path="/moreProducts">
            <MoreProducts />
          </Route>
          <PrivateRoute exact path="/orders/:orders">
             <Orders />
          </PrivateRoute>
          {/* <PrivateRoute exact path="/MyOrders">
             <MyOrders />
          </PrivateRoute>
          <PrivateRoute exact path="/allorders">
             <AllOrders />
          </PrivateRoute> */}
          <PrivateRoute path="/dashbord">
             <DashBord />
          </PrivateRoute>
          <Route exact path="*">
             <Error />
          </Route>
        </Switch>
        
    </Router> 
      </AuthProvider>
    </div>
  ); 
}

export default App;
