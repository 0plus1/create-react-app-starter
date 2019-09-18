import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

function Hello(props) {
  const { match } = props;
  const {
    name,
    location,
  } = match.params;
  return (
    <p>
      {`Hello ${name} from ${location}!`}
    </p>
  );
}

Hello.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Hello;
