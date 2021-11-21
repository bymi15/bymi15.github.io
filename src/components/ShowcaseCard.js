import PropTypes from "prop-types";
import React from "react";
import { Badge, Card, CardBody, CardImg, CardTitle } from "reactstrap";
import styles from "../assets/styles/ShowcaseCard.module.scss";
import ImageLightbox from "./ImageLightbox";

const ShowcaseCard = ({ title, tags, images, link, desc, date }) => {
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
              <p>{desc}</p>
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
