import React from "react";

function Footer() {
  return (
    <div className="footer">
      <footer class="py-5 bg-dark fixed-bottom">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Your Website 2020
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

/* import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>
                    </div>
                    <div className="col">
                        <a role="button" className="btn btn-link" href="mailto:portfolio@gmail.com"><i className="fa fa-envelope-o" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer; */