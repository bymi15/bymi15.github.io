import _ from "lodash";
import React from "react";
import ExperienceRow from "../components/ExperienceRow";
import data from "../data/education.json";

function Education() {
  return (
    <>
      {!_.isEmpty(data) ? (
        data.map((d, index) => (
          <ExperienceRow
            key={d.id}
            title={d.degree}
            company={d.institution}
            desc={d.desc}
            url={d.url}
            location={d.location}
            date={d.date}
            lastRow={index + 1 === _.size(data)}
          />
        ))
      ) : (
        <></>
      )}
    </>
  );
}

export default Education;
