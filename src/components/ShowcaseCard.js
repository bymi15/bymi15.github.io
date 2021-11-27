import PropTypes from "prop-types";
import React from "react";
import { Badge, Card, CardBody, CardImg, CardTitle, UncontrolledTooltip } from "reactstrap";
import styles from "../assets/styles/ShowcaseCard.module.scss";
import ImageLightbox from "./ImageLightbox";

const ShowcaseCard = ({ id, title, tags, images, link, desc, date, isTeam, isWork }) => {
  const [isLightboxOpen, setLightboxOpen] = React.useState(false);
  return (
    images &&
    images.length > 0 && (
      <React.Fragment>
        <Card className={styles.showcaseCard}>
          <div
            className={styles.imgWrapper}
            onClick={() => {
              setLightboxOpen(true);
            }}
          >
            <CardImg top width="100%" src={images[0]} alt={title} />
          </div>
          <CardBody className={styles.showcaseBody}>
            <CardTitle className={styles.title}>
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <h4>{title}</h4>
                </a>
              ) : (
                <h4>{title}</h4>
              )}
            </CardTitle>
            <div>
              <span className={styles.date}>{date}</span>
              {isTeam ? (
                <>
                  <span id={`team-${id}`}>
                    <span
                      className={`${styles.icon} iconify`}
                      data-icon="fluent:people-team-16-filled"
                    ></span>
                  </span>
                  <UncontrolledTooltip placement="top" target={`team-${id}`}>
                    Team Work
                  </UncontrolledTooltip>
                </>
              ) : (
                <>
                  <span id={`individual-${id}`}>
                    <span className={`${styles.icon} iconify`} data-icon="bi:person-fill"></span>
                  </span>
                  <UncontrolledTooltip placement="top" target={`individual-${id}`}>
                    Individual Work
                  </UncontrolledTooltip>
                </>
              )}
              {isWork && (
                <>
                  <span id={`work-${id}`}>
                    <span className={`${styles.icon} iconify`} data-icon="ic:baseline-work"></span>
                  </span>
                  <UncontrolledTooltip placement="top" target={`work-${id}`}>
                    Work for organisation
                  </UncontrolledTooltip>
                </>
              )}
            </div>
            <div id={`desc-${id}`} className={styles.description}>
              {desc}
            </div>
            <UncontrolledTooltip
              innerClassName={styles.tooltip}
              placement="bottom"
              target={`desc-${id}`}
              autohide={false}
            >
              {desc}
            </UncontrolledTooltip>
            <div className={styles.tags}>
              {tags &&
                tags.map((tag) => (
                  <Badge key={tag} className={styles.badge} color="light" pill>
                    {tag}
                  </Badge>
                ))}
            </div>
          </CardBody>
        </Card>

        {isLightboxOpen && <ImageLightbox images={images} setLightboxOpen={setLightboxOpen} />}
      </React.Fragment>
    )
  );
};

ShowcaseCard.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  link: PropTypes.string,
  desc: PropTypes.string,
  date: PropTypes.string,
};

ShowcaseCard.defaultProps = {
  tags: [],
  link: null,
  desc: "",
  date: "",
};

export default ShowcaseCard;
