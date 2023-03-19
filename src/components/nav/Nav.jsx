import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import './nav.css';

const Nav = ({heading, clicking, faIcon}) => {

  return (
    <div className="nav_container">
    <h1 className='emoticon_header'>
        {heading}
    </h1>
    <FontAwesomeIcon icon={faIcon} onClick={clicking} className="switch_btn" />
    </div>
  )
}

export default Nav