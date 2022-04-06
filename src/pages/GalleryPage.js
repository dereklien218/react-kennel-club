import React, { Component } from 'react';
import { Row, Col, Modal, ModalBody, ModalHeader, CarouselControl, Carousel, CarouselItem, CarouselIndicators, Container } from "reactstrap";

class GalleryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() { 
        return (
            <React.Fragment>
                <Container>
                    <Modal id="galleryModal" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader>
                                <span onClick={this.toggleModal} ariaHidden="true" style={{color: "#fff", fontWeight: "100", fontSize: "5rem"}}>&times;</span>
                            </ModalHeader>
                            <ModalBody>
                                <CarouselGallery  />
                            </ModalBody>
                    </Modal>
                </Container>
                
                <Container className="mt-5 pt-5 pb-5">
                <Row className="justify-content-center">
                    <Col xs="10" md="8" lg="6" className="text-center">
                        
                        <h1 className="mb-3 mt-3 text" style={{fontWeight: "600", color: "#f87242"}}>Gallery
                        </h1>

                        <p className="mb-5" style={{fontWeight: "300", fontSize: "large"}}>
                        Nieturitias aut enita vellautem ad eseque qui dolorat urepele senime nus est faccae verore soloriam aut et, officimus sim ea pratusciam.
                        </p>
                    </Col>
                </Row>
            </Container>
                
                <Row className="mr-4 ml-4" id="gallery">
                    <Col md={4} className="mb-4 mb-lg-0">
                        <img 
                        onClick={this.toggleModal} 
                        src="assets/images/IMG_7111.jpg"
                        className="w-100 shadow-1-strong rounded mb-4" 
                        id="galleryImg"
                        alt=""
                        />
                        <img
                        onClick={this.toggleModal}
                        src="assets/images/_MSU9073.jpg"
                        className="w-100 shadow-1-strong rounded mb-4" 
                        id="galleryImg"
                        alt=""
                        />
                    </Col>
                    <Col  md={4} className="mb-4 mb-lg-0">
                        <img 
                        onClick={this.toggleModal}
                        src="assets/images/GUS-IMG_7144.jpg"
                        className="w-100 shadow-1-strong rounded mb-4" 
                        id="galleryImg"
                        alt=""
                        />
                        <img 
                        onClick={this.toggleModal}
                        src="assets/images/04-Gus-BB-Comercial.jpg"
                        className="w-100 shadow-1-strong rounded mb-4" 
                        id="galleryImg"
                        alt=""
                        />
                    </Col>
                    <Col  md={4} className="mb-4 mb-lg-0">
                        <img 
                        onClick={this.toggleModal}
                        src="assets/images/02-Gus-BB-Comercial.jpg"
                        className="w-100 shadow-1-strong rounded mb-4" 
                        id="galleryImg"
                        alt=""
                        />
                        <img 
                        onClick={this.toggleModal}
                        src="assets/images/KONA-IMG_7640.jpg"
                        className="w-100 shadow-1-strong rounded mb-4" 
                        id="galleryImg"
                        alt=""
                        />
                    </Col>

                    <Col  md={4} className="mb-4 mb-lg-0">
                        <img 
                        onClick={this.toggleModal}
                        src="assets/images/conformation-retriever.jpg"
                        className="w-100 shadow-1-strong rounded mb-4" 
                        id="galleryImg"
                        alt=""
                        />
                        <img 
                        onClick={this.toggleModal}
                        src="assets/images/gus-bone-2.jpg"
                        className="w-100 shadow-1-strong rounded mb-4" 
                        id="galleryImg"
                        alt=""
                        />
                    </Col>
                    <Col  md={4} className="mb-4 mb-lg-0">
                        <img 
                        onClick={this.toggleModal}
                        src="assets/images/husky-vert.jpg"
                        className="w-100 shadow-1-strong rounded mb-4" 
                        id="galleryImg"
                        alt=""
                        />
                        <img 
                        onClick={this.toggleModal}
                        src="assets/images/scent-work-1.jpg"
                        className="w-100 shadow-1-strong rounded mb-4" 
                        id="galleryImg"
                        alt=""
                        />
                    </Col>
                    <Col  md={4} className="mb-4 mb-lg-0">
                        <img 
                        onClick={this.toggleModal}
                        src="assets/images/puppy-lab.jpg"
                        className="w-100 shadow-1-strong rounded mb-4" 
                        id="galleryImg"
                        alt=""
                        />
                        <img 
                        onClick={this.toggleModal}
                        src="assets/images/kona-firepit.jpg"
                        className="w-100 shadow-1-strong rounded mb-4" 
                        id="galleryImg"
                        alt=""
                        />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default GalleryPage;



function CarouselGallery() {

    // State for Active index
    const [activeIndex, setActiveIndex] = React.useState(0);

    // State for Animation
    const [animating, setAnimating] = React.useState(false);

    // Items for Carousel
    const items = [
        {
            caption: 'Sample Caption One',
            src: 'assets/images/IMG_7111.jpg',
            altText: 'Slide One'
        },
        {
            caption: 'Sample Caption Two',
            src: 'assets/images/_MSU9073.jpg',
            altText: 'Slide Two'
        },
        {
            caption: 'Sample Caption Three',
            src: 'assets/images/GUS-IMG_7144.jpg',
            altText: 'Slide Three'
        },
        {
            caption: 'Sample Caption Four',
            src: 'assets/images/04-Gus-BB-Comercial.jpg',
            altText: 'Slide Four'
        },
        {
            caption: 'Sample Caption Five',
            src: 'assets/images/02-Gus-BB-Comercial.jpg',
            altText: 'Slide Five'
        },
        {
            caption: 'Sample Caption Six',
            src: 'assets/images/KONA-IMG_7640.jpg',
            altText: 'Slide Six'
        },
        {
            caption: 'Sample Caption Seven',
            src: 'assets/images/conformation-retriever.jpg',
            altText: 'Slide Seven'
        },
        {
            caption: 'Sample Caption Eight',
            src: 'assets/images/gus-bone-2.jpg',
            altText: 'Slide Eight'
        },
        {
            caption: 'Sample Caption Nine',
            src: 'assets/images/husky-vert.jpg',
            altText: 'Slide Nine'
        },
        {
            caption: 'Sample Caption Ten',
            src: 'assets/images/scent-work-1.jpg',
            altText: 'Slide Ten'
        },
        {
            caption: 'Sample Caption Eleven',
            src: 'assets/images/puppy-lab.jpg',
            altText: 'Slide Eleven'
        },
        {
            caption: 'Sample Caption Twelve',
            src: 'assets/images/kona-firepit.jpg',
            altText: 'Slide Twelve'
        },
    ];

    // Items array length
    const itemLength = items.length - 1

    // Previous button for Carousel
    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    // Next button for Carousel
    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    // Carousel Item Data
    const carouselItemData = items.map((item) => {
        return (
            <CarouselItem 
                key={item.src}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                <img 
                    src={item.src} 
                    alt={item.altText} 
                    className="w-100 shadow-1-strong rounded mb-4" 
                />
            </CarouselItem>
        );
    });

    return (
        <div className="container shadow-1-strong rounded mb-4 pb-4" 
        >
            <Carousel previous={previousButton} next={nextButton}
                activeIndex={activeIndex}>
                <CarouselIndicators 
                    className="pb-4"
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={(newIndex) => {
                        if (animating) return;
                        setActiveIndex(newIndex);
                    }} />
                {carouselItemData}
                <CarouselControl directionText="Prev"
                    direction="prev" onClickHandler={previousButton} />
                <CarouselControl directionText="Next"
                    direction="next" onClickHandler={nextButton} />
            </Carousel>
        </div >
    );
}
