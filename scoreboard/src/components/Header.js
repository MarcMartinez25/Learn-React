import React from "react";
import PropTypes from 'prop-types';

import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

// Destructuring props so we don't have to type 'this.props' or 'props.' anymore
const Header = ({players, title}) => {

  // You can also destructure a prop like on line 9:
  // const {players, title} = props;

  return (
    <header>
      <Stats  players={players}/>
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
};

Header.defaultProps = {
  title: 'Scoreboard'
};

export default Header;
