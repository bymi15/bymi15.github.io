import _ from "lodash";
import React from "react";
import FlipMove from "react-flip-move";
import { Row } from "reactstrap";
import CategoryFilter from "../components/CategoryFilter";
import SkeletonPlaceholder from "../components/shared/SkeletonPlaceholder";
import ShowcaseCard from "../components/ShowcaseCard";
import config from "../config";
import projectData from "../data/projects.json";
import { useCachedFetch } from "../utils/cachedFetchHook";
import getImagePathArr from "../utils/getImagePathArr";

const Projects = () => {
  const PLACEHOLDERS = Array(8).fill(0);
  const [filter, setFilter] = React.useState("All");

  let { loading, data, error } = useCachedFetch(
    `${config.API_ENDPOINT}/projects`,
    config.CACHE_TOGGLE
  );

  if (error) {
    console.log(error);
    console.log("Loading static data as fallback...");
    data = projectData;
  }

  const filtered = filter === "All" ? data : _.filter(data, (d) => d.tags.includes(filter));

  return (
    <Row>
      <CategoryFilter filter={filter} setFilter={setFilter} />
      {loading || config.PRE_RENDERING ? (
        PLACEHOLDERS.map((_, index) => (
          <div key={index} className="project-showcase-col mb-5 mb-md-4">
            <SkeletonPlaceholder rows={8} ready={!loading && !config.PRE_RENDERING} portfolio />
          </div>
        ))
      ) : !_.isEmpty(data) ? (
        <FlipMove typeName={null}>
          {filtered.map((d) => (
            <div key={d.id} className="project-showcase-col mb-4 mb-md-0">
              <ShowcaseCard
                id={d.id}
                title={d.title}
                images={getImagePathArr(d.img.namePrefix, d.img.extension, d.img.count)}
                tags={d.tags}
                link={d.url}
                date={d.date}
                desc={d.desc}
                isTeam={d.isTeam}
                isWork={d.isWork}
              />
            </div>
          ))}
        </FlipMove>
      ) : (
        <></>
      )}
    </Row>
  );
};

export default Projects;
