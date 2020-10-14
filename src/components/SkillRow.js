import React from 'react';
import PropTypes from 'prop-types';

const SkillRow = ({ children }) => <ul className='list-inline'>{children}</ul>;

SkillRow.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SkillRow;
