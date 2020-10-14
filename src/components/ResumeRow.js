import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/styles/ResumeRow.module.scss';

const ResumeRow = ({ jobTitle, company, desc, link, date }) => (
    <div className={styles.resumeRow}>
        <div>
            <h4 className={styles.jobTitle}>{jobTitle}</h4>
            <h4 className={styles.company}>{company}</h4>
            <p className={styles.desc}>{desc}</p>
            {link && (
                <p>
                    <a target='_blank' href={link}>
                        {link}
                    </a>
                </p>
            )}
        </div>
        <div className={styles.resumeDate}>{date}</div>
    </div>
);

ResumeRow.propTypes = {
    jobTitle: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    link: PropTypes.string,
    date: PropTypes.string.isRequired,
};

ResumeRow.defaultProps = {
    link: '',
};

export default ResumeRow;
