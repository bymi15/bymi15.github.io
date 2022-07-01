import PropTypes from "prop-types";
import React from "react";
import styles from "../assets/styles/ExperienceRow.module.scss";

const ExperienceRow = ({ title, company, desc, url, location, date, lastRow }) => (
  <div className={styles.experienceRow} style={lastRow ? { paddingBottom: "10px" } : {}}>
    <div className="w-100">
      <div className={styles.flexRow}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.date}>
          <span>{date}</span>
        </div>
      </div>
      <div>
        <h4 className={styles.company} style={{ display: "inline" }}>
          {company}
        </h4>
        {location && <span className={styles.location}>{location}</span>}
      </div>
      <p className={styles.desc}>{desc}</p>
      {url && (
        <p className={styles.desc}>
          <a target="_blank" rel="noopener noreferrer" href={url}>
            {url}
          </a>
        </p>
      )}
    </div>
  </div>
);

ExperienceRow.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  url: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string.isRequired,
  lastRow: PropTypes.bool,
};

ExperienceRow.defaultProps = {
  url: "",
  location: "",
  lastRow: false,
};

export default ExperienceRow;
