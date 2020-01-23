import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';
import styled from 'styled-components';

import { apiReadAllPosts } from '../actions';
import { postShape } from '../shapes';

const StyledPost = styled.div`
  padding: 0.5em;
  margin: 0.5em;
  border: 1px solid black;
`;

const StyledRedux = ({
  history,
  posts,
  actionApiReadAllPosts,
}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    actionApiReadAllPosts()
      .then(setLoading(false))
      .catch();
  }, [actionApiReadAllPosts]);

  const goHome = () => history.push('/');

  if (loading) {
    return (<p>Loading ...</p>);
  }
  return (
    <>
      { posts.map((post) => (
        <StyledPost key={post.id}>
          <p>{post.title}</p>
        </StyledPost>
      ))}
      <button type="button" onClick={goHome}>
        Go Home
      </button>
    </>
  );
};

StyledRedux.propTypes = {
  posts: PropTypes.arrayOf(postShape),
  history: ReactRouterPropTypes.history.isRequired,
  actionApiReadAllPosts: PropTypes.func.isRequired,
};

StyledRedux.defaultProps = {
  posts: [],
};

function mapStateToProps({ posts }) {
  return { posts };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    actionApiReadAllPosts: apiReadAllPosts,
  }, dispatch);
}

// Export connected styled component
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StyledRedux));
