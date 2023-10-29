import React, { useState, useEffect } from "react";

function Header() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div className="header">
        <div className="block">
          <div className="header_img">
            <img src="assets/Vector.png" alt="xyz" />
          </div>
          <div className="header_name">
            <p className="name">e-Certify</p>
          </div>
        </div>
        <div className="block_right">
          <div className="rightheader_img">
            <img
              src="assets/https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              alt="xyz"
            />
          </div>
          <div className="cred">
            <button className="logoutbtn" onClick={handleLogout}>
              <h4>username</h4>
              <p>USer</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
