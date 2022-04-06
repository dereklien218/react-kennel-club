import React from "react";
import { Container, Row, Col } from "reactstrap";
import MapboxMap from "../components/MapboxMapComponent";

function About() {
  return (
    <Container className="mt-5 pt-5 pb-5">
      <Row className="justify-content-center">
        <Col xs="10" md="8" lg="6" className="text-center">
          <h1
            className="mb-3 mt-3 text"
            style={{ fontWeight: "600", color: "#f87242" }}
          >
            About Us
          </h1>

          <p className="mb-5" style={{ fontWeight: "300", fontSize: "large" }}>
            Nieturitias aut enita vellautem ad eseque qui dolorat urepele senime
            nus est faccae verore soloriam aut et, officimus sim ea pratusciam.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            className="w-100 mb-4"
            src="assets/images/Kona_MSU9058-1366x683.jpg"
            alt="A dog sitting."
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="10" className="mb-5 mt-4">
          <h3>Eriorio Aque Prosessum Nonse</h3>
          <p className="mt-3">
            Doluptas molor a volesed que cusam, offictat volo optate am
            volorerum renet dolorion rernat exerchitas arum exped ea vercipsame
            rerecta temquia destistiam el eostiat laceribeaqui cores aritia
            nonsece stincia con pa conem eos rae dolorporem volutat empore cum
            in re min parunt vellati orporit andi odiorrumqui debis eatio derum
            et volenia adit ut alita pellatur, assinve rspedi doloreicit, que
            vollest runtoreic tem eveni sunt que sae as mos ius autectore vel
            magnatisit, que labore omnisciet, oditam volectur? Eriorio. Aque
            proressum nonse consed que non net unt labor sin consersperi aut
            velitatibus dit quatem verum es et, aut velique et, offici re
            optaquatiis cullenient ut fugitis cienimi, cuptaquam andae lamusant,
            offic tempore hendicabore derumet audam eos et officipsum et que et
            veleserferum quibusa a voluptat harum qui occus am rentis solupta
            spiendi as ipsanissiti veles aliqui doluptaquam erchili gnimusam
            dolorro mos magnisque porrum a nient verepuda qui res issum fugiatur
            rendae cum si conectis aut ium, nit alignam as autat atur? Eped ma
            velique liquia voluptat aliquae si ut volupti busciis imiliqui
            officiae sam ra pligend antisqui dolo modisto offic to volorume
            dignisciis re iunt veribus aut eum que quam as soluptaque ium
            volenias expel ipienti berum re, cum dolupta qui te odigenist,
            verspie nditiae rumquae necat presciam aribus reperore velit landus
            sinimax impost fugit dem re veliatemquo.
          </p>
        </Col>
      </Row>
      <Row>
        <MapboxMap />
      </Row>
      <Row className="justify-content-center">
        <Col xs="10" className="mb-4 mt-5">
          <h3 id="location">Our Location</h3>
          <p className="mt-3">
            We are located in West Fargo, ND at the Red River Valley
            Fairgrounds.
          </p>
          <p>
            (From I-94 east or west) Take exit 343 to Highway 10 (Main Ave.).
            Fairgrounds is located on your right (south), about 1/2 mile after
            exit. Turn south at the old white church building with a steeple
            (15th St NW). There is also a sign indicating the Fairgrounds on
            Main Ave. Turn right (Avenue of the Flags) at the tan house with
            white fencing.
          </p>
          <p>
            (From I-29 north or south) Exit on I-94 West and follow above
            directions.
          </p>
          <p>
            (From 13 Ave SW Fargo) Follow 13th Ave going west, road curves north
            and becomes 15 th St NW. Turn left at the tan house with white
            fencing.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
