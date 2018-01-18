/**
 * Created by emols on 5/26/2017.
 */
import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/createParty">Create Party</Link>
      {" | "}
    </nav>
  );
};

export default Header;
