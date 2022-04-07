import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import { Row, Col, Container } from "reactstrap";
import Carousel, { Modal, ModalGateway } from "react-images";

export default function DogGallery(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <Container className="mt-5 pt-5">
        <Row className="justify-content-center">
          <Col xs="10" md="8" lg="6" className="text-center">
            <h1>Gallery</h1>

            <p className="subhead">
              Nieturitias aut enita vellautem ad eseque qui dolorat urepele
              senime nus est faccae verore soloriam aut et, officimus sim ea
              pratusciam.
            </p>
          </Col>
        </Row>
      </Container>
      <div>
        <Gallery
          photos={props.gallery.map((x) => ({
            src: x.image,
            alt: x.name,
            height: x.height,
            width: x.width,
          }))}
          margin={10}
          onClick={openLightbox}
        />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={props.gallery.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.name,
                  src: x.image,
                  alt: x.name,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </>
  );
}
