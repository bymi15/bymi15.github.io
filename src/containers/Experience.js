import _ from "lodash";
import React from "react";
import ExperienceRow from "../components/ExperienceRow";
import Loader from "../components/shared/Loader";
import config from "../config";
import experienceData from "../data/experiences.json";
import { useCachedFetch } from "../utils/cachedFetchHook";

function Experience() {
  let { loading, data, error } = useCachedFetch(
    `${config.API_ENDPOINT}/experiences`,
    config.CACHE_TOGGLE
  );

  if (error) {
    console.log(error);
    console.log("Loading static data as fallback...");
    data = experienceData;
  }

  return (
    <>
      {loading || config.PRE_RENDERING ? (
        <Loader style={{ marginTop: "50px" }} />
      ) : !_.isEmpty(data) ? (
        data.map((d, index) => (
          <ExperienceRow
            key={d.id}
            title={d.jobTitle}
            company={d.company}
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

export default Experience;
