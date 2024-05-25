import React, { Fragment, Suspense, lazy, startTransition } from 'react';
import * as actions from './common/redux/action';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.scss';
import { Routingdata } from './common/routingdata';
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';

const App = lazy(() => import('./layouts/App'));
const Loaderimage = lazy(() => import('./layouts/loader/loader'));

// Authentication
const Login = lazy(() => import('./components/authentication/login/login'));
const Register = lazy(() => import('./components/Authentication/Register/Register'));

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: !!(localStorage.getItem('token')),
      userRoles: JSON.parse(localStorage.getItem('role')) || []
    };
  }

  checkRoles(arrA, arrB) {
    for (let i = 0; i < arrA?.length; i++) {
      if (arrB.includes(arrA[i])) {
        return true; // Return true if found
      }
    }
    return false; // Return false if none found
  }

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Suspense fallback={<Loaderimage />}>
            <Routes>
              <Route index element={<Login {...this.props} />} />
                <Route path={`${import.meta.env.BASE_URL}`} element={<App {...this.props} />}>

                  {Routingdata.map(idx =>{
                    return (
                    
                  <Route element={<PrivateRoute roles={idx.roles} />}>
                      <Route key={idx.path} path={idx.path} element={idx.element} />
                      
                      </Route>
                      )})}

                  <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null,
    role: state.role
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRoot);
