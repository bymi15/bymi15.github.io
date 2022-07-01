import _ from "lodash";
import ExperienceRow from "../components/ExperienceRow";
import SkeletonPlaceholder from "../components/shared/SkeletonPlaceholder";
import config from "../config";
import experienceData from "../data/experiences.json";
import { useCachedFetch } from "../utils/cachedFetchHook";
import { sortByDateRange } from "../utils/sort";

function Experience() {
  const PLACEHOLDERS = Array(2).fill(0);

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
        PLACEHOLDERS.map((_, index) => (
          <div key={index} className="mb-4">
            <SkeletonPlaceholder rows={6} ready={!loading && !config.PRE_RENDERING} />
          </div>
        ))
      ) : !_.isEmpty(data) ? (
        sortByDateRange(data).map((d, index) => (
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
