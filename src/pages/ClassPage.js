import React from "react";

function ClassPage() {
  return (
    <React.Fragment>
      <header
        className="jumbotron-fluid parallax"
        style={{
          height: "500px",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url(" +
            "assets/images/line-of-dogs.jpg" +
            ")",
        }}
      >
        <div className="container h-100">
          <div className="row row-content justify-content-center h-100 align-items-center">
            <div className="col-10 col-md-8 col-lg-6 text-center">
              <h1
                className="text-white"
                style={{
                  fontWeight: "700",
                  fontFamily: "Playfair Display",
                  fontStyle: "normal",
                }}
              >
                Class Descriptions
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container p-4 mt-4">
        <div className="row">
          <div className="col-md-5">
            <img
              className="mr-3 mt-4 mb-4 img-fluid box"
              src="assets/images/puppy-lab.jpg"
              alt="Puppy dog"
            />
          </div>
          <div className="col-md-5 align-self-center mx-auto">
            <h2 className="mb-2">Puppy</h2>
            <p className="mb-0">
              Our puppy classes offer training needed to have a well mannered
              and disciplened dog. Whether you plan to move into one of our
              advanced obedience classes, agility classes or just need a well
              trained puppy, our classes are perfect for you.
            </p>
            <a
              className="btn btn-outline-warning text-warning-hover mt-4"
              href="/puppy-classes"
              role="button"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="container p-4">
        <div className="row">
          <div className="col-md-5 align-self-center order-md-1 order-2 mx-auto">
            <h2 className="mb-2">Obedience</h2>
            <p className="mb-0">
              Designed to develop teamwork between dog and handler. This class
              will review obedience skills learned in AKC S.T.A.R. PUPPY class
              or other puppy class and will focus on teaching teamwork and
              confidence building.
            </p>
            <a
              className="btn btn-outline-warning text-warning-hover mt-4 order-md-3 order-3"
              href="/obedience-classes"
              role="button"
            >
              Learn More
            </a>
          </div>
          <div className="col-md-5 order-md-2 order-1">
            <img
              className="mr-3 mt-4 mb-4 img-fluid"
              src="assets/images/02-Gus-BB-Comercial-cropped.jpg"
              alt="Obedience Dog"
            />
          </div>
        </div>
      </div>

      <div className="container p-4">
        <div className="row">
          <div className="col-md-5">
            <img
              className="mr-3 mt-4 mb-4 img-fluid"
              src="assets/images/agility.jpg"
              alt="Agility dog"
            />
          </div>
          <div className="col-md-5 align-self-center mx-auto">
            <h2 className="mb-2">Agility</h2>
            <p className="mb-0">
              Fargo-Moorhead Kennel Club offers agility classes for those that
              have the desire to compete in AKC agility trials. We offer classes
              from foundation skill learning to master agility course analysis.
              If you are interested in our agility classes please contact us to
              get on our agility list.{" "}
              <strong>AGILITY CLASSES HAVE PREREQUISITES.</strong>
            </p>
            <a
              className="btn btn-outline-warning text-warning-hover mt-4"
              href="/agility-classes"
              role="button"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="container p-4">
        <div className="row">
          <div className="col-md-5 align-self-center order-md-1 order-2 mx-auto">
            <h2 className="mb-2">Scent Work</h2>
            <p className="mb-0">
              Fargo-Moorhead Kennel Club offers scent work classes for those
              that have the desire to compete in AKC Scent Work trials. We offer
              classes varying in levels throughout the year. Please check or
              schedule to see what level of class we are currently offering.
            </p>
            <a
              className="btn btn-outline-warning text-warning-hover mt-4 order-md-3 order-3"
              href="/scentwork-classes"
              role="button"
            >
              Learn More
            </a>
          </div>
          <div className="col-md-5 order-md-2 order-1">
            <img
              className="mr-3 mt-4 mb-4 img-fluid"
              src="assets/images/scent-work-1.jpg"
              alt="Scent work dog"
            />
          </div>
        </div>
      </div>

      <div className="container p-4">
        <div className="row">
          <div className="col-md-5">
            <img
              className="mr-3 mt-4 mb-4 img-fluid"
              src="assets/images/border-collie-competition.jpg"
              alt="Rally dog"
            />
          </div>
          <div className="col-md-5 align-self-center mx-auto">
            <h2 className="mb-2">Rally</h2>
            <p className="mb-0">
              Think of an AKC Rally® event as any team sport: You and your dog
              navigate a course, side-by-side, as you steer him through a course
              of 10-20 different signs. Each of these signs provides
              instructions regarding the next skill that is to be performed.
            </p>
            <a
              className="btn btn-outline-warning text-warning-hover mt-4"
              href="/rally-classes"
              role="button"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="container p-4 mb-5">
        <div className="row">
          <div className="col-md-5 align-self-center order-md-1 order-2 mx-auto">
            <h2 className="mb-2">Conformation</h2>
            <p className="mb-0">
              A conformation class will prepare you and your dog for your first
              experience – and for your best chances at winning. Designed to
              prepare dogs and handlers for competitive dog showing. Stacking,
              gaiting techniques and tips on best presentation are covered. The
              instructor will have hands on your dogs to teach acceptance of the
              judges.
            </p>
            <a
              className="btn btn-outline-warning text-warning-hover mt-4 order-md-3 order-3"
              href="/conformation"
              role="button"
            >
              Learn More
            </a>
          </div>
          <div className="col-md-5 order-md-2 order-1">
            <img
              className="mr-3 mt-4 mb-4 img-fluid"
              src="assets/images/conformation-1.jpg"
              alt="Conformation dog"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ClassPage;
