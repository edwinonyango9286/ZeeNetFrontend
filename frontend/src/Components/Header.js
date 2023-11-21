import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <>
      <header className="header-top-strip py-2 ">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white link" href="tel:+254 0719547267">
                  +254 719547267
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header