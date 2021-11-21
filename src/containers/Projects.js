import _ from "lodash";
import React from "react";
import { Col, Row } from "reactstrap";
import Loader from "../components/shared/Loader";
import ShowcaseCard from "../components/ShowcaseCard";
import config from "../config";
import projectData from "../data/projects.json";
import { useCachedFetch } from "../utils/cachedFetchHook";
import getImagePathArr from "../utils/getImagePathArr";

const Projects = () => {
  let { loading, data, error } = useCachedFetch(
    `${config.API_ENDPOINT}/projects`,
    config.CACHE_TOGGLE
  );

  if (error) {
    console.log(error);
    console.log("Loading static data as fallback...");
    data = projectData;
  }

  return (
    <Row className="mt-3">
      {loading || config.PRE_RENDERING ? (
        <Loader />
      ) : !_.isEmpty(data) ? (
        data.map((d) => (
          <Col md="6" xl="4" className="mb-5 mb-md-0">
            <ShowcaseCard
              title={d.title}
              images={getImagePathArr(d.img.namePrefix, d.img.extension, d.img.count)}
              tags={d.tags}
              link={d.url}
              date={d.date}
              desc={d.desc}
            />
          </Col>
        ))
      ) : (
        <></>
      )}
    </Row>
  );
};

export default Projects;
