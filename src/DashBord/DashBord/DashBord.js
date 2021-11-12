import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AllOrders from '../AllOrders/AllOrders';
import MyOrder from '../MyOrders/MyOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageAllOrders from '../ManageAllProduct/ManageAllProduct';
import Review from '../Review/Review';
import Payment from '../Payment/Payment';

const drawerWidth = 240;

function DashBord(props) {
  const {user, admin, logOut} = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
     { user.email && <div>
         <h5 className="fw-bold m-4 header-text text-center">{user.displayName}</h5>
         <p className="fw-bold  header-text text-center">{user.email}</p>
              </div>} 
      <Divider />
      {!admin && <Box>
        <NavLink className="text-decoration-none header-text fs-5 ms-3 fw-bold d-flex justify-content-center align-items-center mt-5" to="/"> <i className="fas fa-home me-2"></i>  Home</NavLink>
      <NavLink className="text-decoration-none header-text fs-5 ms-3 fw-bold d-flex justify-content-center align-items-center mt-3" to={`${url}`}> <i className="fas fa-clipboard-list me-2"></i>My Orders</NavLink>
      <NavLink className="text-decoration-none header-text fs-5 ms-3 fw-bold d-flex justify-content-center align-items-center mt-3" to={`${url}/review`}> <i className="far fa-star-half me-2"></i>Review</NavLink>
      <NavLink className="text-decoration-none header-text fs-5 ms-3 fw-bold d-flex justify-content-center align-items-center mt-3" to={`${url}/pay`}> <i className="fas fa-hand-holding-usd me-2"></i>Pay</NavLink>
      <NavLink onClick={logOut} to={`${url}`} className="text-decoration-none header-text fs-5 ms-3 fw-bold d-flex justify-content-center align-items-center mt-3"> <i className="fas fa-sign-in-alt me-2"></i>LogOut</NavLink>
        </Box>}
      

      {admin && <Box>
        <NavLink className="text-decoration-none header-text fs-5 ms-3 fw-bold d-flex justify-content-center align-items-center mt-5" to="/"> <i className="fas fa-home me-2"></i>  Home</NavLink>
        <NavLink className="text-decoration-none header-text fs-5 ms-3 fw-bold d-flex justify-content-center align-items-center mt-3" to={`${url}/allorders`}> <i className="fas fa-tasks me-2"></i> Manage All Orders</NavLink>
        <NavLink className="text-decoration-none header-text fs-5 ms-3 fw-bold d-flex justify-content-center align-items-center mt-3" to={`${url}/addproduct`}> <i className="fas fa-folder-plus me-2"></i> Add Product</NavLink>
        <Link className="text-decoration-none header-text fs-5 ms-3 fw-bold d-flex justify-content-center align-items-center mt-3" to={`${url}/makeAdmin`}> <i className="fas fa-users-cog me-2"></i> Make Admin</Link>
      <Link className="text-decoration-none header-text fs-5 ms-3 fw-bold d-flex justify-content-center align-items-center mt-3" to={`${url}/manageAllOrders`}> <i className="fas fa-marker me-2"></i> Manage Products</Link>
      <NavLink onClick={logOut} to={`${url}`} className="text-decoration-none header-text fs-5 ms-3 fw-bold d-flex justify-content-center align-items-center mt-3"> <i className=" me-2 fas fa-sign-in-alt"></i>LogOut</NavLink>
        </Box>}
      
      
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
      className="bg-light"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="header-text fw-bold" noWrap component="div">
            Welcome to Dashbord
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Switch>
           <Route exact path={path}>
              <MyOrder />
           </Route>
           <Route path={`${path}/makeAdmin`}>
                  <MakeAdmin></MakeAdmin>
         </Route>
           <Route path={`${path}/allorders`}>
                  <AllOrders />
         </Route>
           <Route path={`${path}/addproduct`}>
                  <AddProduct />
         </Route>
           <Route path={`${path}/manageAllOrders`}>
                  <ManageAllOrders />
         </Route>
           <Route path={`${path}/review`}>
                  <Review />
         </Route>
           <Route path={`${path}/review`}>
                  <Review />
         </Route>
           <Route path={`${path}/pay`}>
                  <Payment />
         </Route>
         </Switch>
      </Box>
    </Box>
  );
}

DashBord.propTypes = {
  window: PropTypes.func,
};

export default DashBord;
