import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import NewsParallax from "../components/NewsParallaxComponent";

import { NEWS } from "../shared/news";

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: NEWS,
    };
  }

  render() {
    const news = this.state.news.map((news) => {
      return (
        <React.Fragment>
          <Container>
            <Row>
              <Col key={news.id}>
                <img className="w-100 mb-4" src={news.image} alt={news.name} />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs="10" className="mb-5 mt-4">
                <h3>{news.name}</h3>
                <p className="mt-3">{news.description}</p>
                <p className="mt-4">
                  <span style={{ color: "#f87242", fontWeight: "bold" }}>
                    More informtation:&nbsp;
                  </span>
                  {news.information}
                </p>
                <Link
                  className="btn btn-outline-warning"
                  role="button"
                  to={news.register}
                >
                  Register
                </Link>
              </Col>
            </Row>
          </Container>

          <NewsParallax />

          <Container className="mt-3 pt-5 pb-5">
            <Row className="justify-content-center pb-4">
              <Col sm={2} className="text-center">
                <h3>{news.date1}</h3>
                <h4>{news.month1}</h4>
              </Col>
              <Col
                sm={7}
                className="text-center text-sm-left mr-3 ml-3 m-sm-auto"
              >
                {news.event1}
              </Col>
              <Col sm={3} className="text-center">
                <Link
                  className="btn btn-outline-warning"
                  role="button"
                  to={news.register}
                >
                  Register
                </Link>
              </Col>
            </Row>
            <Row className="justify-content-center pt-4 pb-4">
              <Col sm={2} className="text-center">
                <h3>{news.date2}</h3>
                <h4>{news.month2}</h4>
              </Col>
              <Col
                sm={7}
                className="text-center text-sm-left mr-3 ml-3 m-sm-auto"
              >
                {news.event2}
              </Col>
              <Col sm={3} className="text-center">
                <Link
                  className="btn btn-outline-warning"
                  role="button"
                  to={news.register}
                >
                  Register
                </Link>
              </Col>
            </Row>
            <Row className="justify-content-center pt-4 pb-4">
              <Col sm={2} className="text-center">
                <h3>{news.date3}</h3>
                <h4>{news.month3}</h4>
              </Col>
              <Col
                sm={7}
                className="text-center text-sm-left mr-3 ml-3 m-sm-auto"
              >
                {news.event3}
              </Col>
              <Col sm={3} className="text-center">
                <Link
                  className="btn btn-outline-warning"
                  role="button"
                  to={news.register}
                >
                  Register
                </Link>
              </Col>
            </Row>
          </Container>
        </React.Fragment>
      );
    });

    return (
      <Container className="mt-5 pt-5 pb-5">
        <Row className="justify-content-center">
          <Col xs="10" md="8" lg="6" className="text-center">
            <h1>News & Events</h1>

            <p className="subhead">
              Nieturitias aut enita vellautem ades eque qui dolorat urepele
              senime nus est faccae verore soloriam aut et, officimus sim ea
              pratusciam.
            </p>
          </Col>
        </Row>
        {news}
      </Container>
    );
  }
}

export default NewsPage;
