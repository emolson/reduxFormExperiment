/**
 * Created by emols on 5/26/2017.
 */
import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/createVendor">Create Vendor</Link>
      {" | "}
    </nav>
  );
};

export default Header;
