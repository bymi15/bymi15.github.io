import React from "react";
import PropTypes from "prop-types";
import { Card, CardImg, CardBody, Badge, CardTitle } from "reactstrap";
import styles from "../assets/styles/ShowcaseCard.module.scss";
import ImageLightbox from "./ImageLightbox";

const ShowcaseCard = ({ title, tags, images, videoUrl, link }) => {
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
            {videoUrl ? (
              <></>
            ) : (
              <CardImg top width="100%" src={require("../" + images[0]).default} alt={title} />
            )}
          </div>
          <CardBody>
            <CardTitle>
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <h4>{title}</h4>
                </a>
              ) : (
                <h4>{title}</h4>
              )}
            </CardTitle>
            <div>
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
};

ShowcaseCard.defaultProps = {
  tags: [],
  link: null,
};

export default ShowcaseCard;
