import _ from "lodash";
import ExperienceRow from "../components/ExperienceRow";
import data from "../data/education.json";
import { sortByDate } from "../utils/sort";

function Education() {
  return (
    <>
      {!_.isEmpty(data) ? (
        sortByDate(data).map((d, index) => (
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
