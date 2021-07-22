import React from 'react';
import swiftLogo from '../images/swift-logo-white.png'

const Login = () => {

   
    return (
        <section className="login mx-auto">
          <div className="container">
           <div className="form-wrapper">

                <div className="row">
                    <div className="col-md-5 col-sm-none">
                        <div className="logo-section">
                            <div className="form-logo">
                                <img src={swiftLogo} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-12">
                        <div className="form-section">
                            <div className="login-form">
                                <h3 className="form-title">login to the site</h3>
                                <form action="">
                                    <div className="form-group">
                                        <label htmlFor="email" className="label">e-mail</label><br/>
                                        <input type="email" name="email" id="email" className="swift-login-form-control" required/>
                                    </div>
                                    <div className="form-group">
                                       <label htmlFor="password" className="label">password</label><br/>
                                        <input type="password" name="password" id="password" className="swift-login-form-control" required/>
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn-swift-login">Login</button>
                                    </div>

                                </form>

                               <p className="copyright">&copy;{new Date().getFullYear()} Ryan Mwakio</p> 
                            </div>
                        </div>
                    </div>
                </div>

           </div>
           </div>
        </section>
    );
}

export default Login;
