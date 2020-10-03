import React from 'react';
import PropTypes from 'prop-types';

function Panel({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

Panel.defaultProps = {
  title: 'title',
};

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Panel;
