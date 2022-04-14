import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { EVENTS } from "../shared/events";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class CalendarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <Container className="mt-5 pt-5 pb-5">
        <Row className="justify-content-center">
          <Col xs="10" md="8" lg="6" className="text-center">
            <h1>Event Calendar</h1>

            <p className="subhead">Click on an event to see more info.</p>
          </Col>
        </Row>
        <Container className="vh-100">
          <Calendar
            popup
            localizer={localizer}
            events={EVENTS}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "100%" }}
            onSelectEvent={(event) =>
              alert(event.title + ", \n" + event.info + ", \n" + event.start)
            }
            scrollToTime={13}
            showAllEvents
          />
        </Container>
      </Container>
    );
  }
}

export default CalendarPage;
