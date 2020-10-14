import React from 'react';
import PropTypes from 'prop-types';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CheckList = ({ items }) => (
    <ul className='fa-ul'>
        {items &&
            items.map((item) => (
                <li key={item}>
                    <FontAwesomeIcon className='fa-li' icon={faCheck} /> {item}
                </li>
            ))}
    </ul>
);

CheckList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CheckList;
