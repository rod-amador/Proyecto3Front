  
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login, signup } from "../../services/authService";
import AppContext from "../../AppContext";
import {themeWhite, themeBlack} from "../../components/themes"


class LoginForm extends Component {
  static contextType = AppContext;
  state = {user: {},};

  handleChange = (e) => {
    let { user } = this.state;
    user = { ...user, [e.target.name]: e.target.value };
    this.setState({ user });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isLogin = this.props.location.pathname === "/login";
    const { setUser } = this.context;
    const { user: credentials } = this.state;
    const action = isLogin ? login : signup;
    const { history } = this.props;
    const nextRoute = isLogin ? "/" : "/login";
    action(credentials)
        .then((res) => {
          if (isLogin) {
            const { user } = res.data;
            localStorage.setItem("user", JSON.stringify(user));
            setUser(user);}
          
            history.push(nextRoute);
                      })
        .catch((err) => {console.log(err)});
                        };

  render() {
    const isLogin = this.props.location.pathname === "/login";

    return (
      <section className="uk-section" >
        <div className="uk-container uk-flex uk-flex-center uk-width-1-3 uk-padding" style={themeBlack}>
          <article className="">
            <h3 className="uk-text-center uk-margin-medium-right" style={{color:"white"}}>{isLogin ? "Login" : "Signup"}</h3>
            
            <form   onSubmit={this.handleSubmit}
                    className="uk-width-1-1 uk-form-stacked uk-flex uk-flex-center uk-flex-column">

              <div className="uk-margin">
                    <label className="uk-form-label" htmlFor="email" style={{color:"white"}}> Email:  </label>
                        <div className="uk-inline">
                              <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: mail"> </span>
                              <input
                                onChange={this.handleChange}
                                id="email"
                                name="email"
                                className="uk-input"
                                type="email"
                                required  />
                        </div>

                    <div className="uk-margin">
                      <label className="uk-form-label" htmlFor="password" style={{color:"white"}}>  Password: </label>
                        <div className="uk-inline">
                              <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                              <input
                                onChange={this.handleChange}
                                id="password"
                                name="password"
                                className="uk-input"
                                type="password"
                                required  />
                        </div>
                    </div>
              </div>

              {isLogin ? 
                    ( <div className="uk-text-meta">                       ¿Aún no tienes cuenta?{" "}
                          <Link className="uk-text-primary" to="/signup"> Crear cuenta  </Link>
                      </div>
                    ) 
                : null
              }

              <button className="uk-button uk-button-primary">  {isLogin ? "Login" : "Signup"}  </button>
            </form>

          </article>
        </div>
      </section>
    );
  }
}

export default LoginForm;