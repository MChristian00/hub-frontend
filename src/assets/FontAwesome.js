import React, { Component, Fragment } from "react";
import ReactCSSTransitionGroup from "C:/Users/MChristian/Desktop/wikis-copy/node_modules/react-addons-css-transition-group";

import {
  Row,
  Col,
  Card,
  CardBody,
} from "C:/Users/MChristian/Desktop/wikis-copy/node_modules/reactstrap";

import { library } from "C:/Users/MChristian/Desktop/wikis-copy/node_modules/@fortawesome/fontawesome-svg-core";
import { fab } from "C:/Users/MChristian/Desktop/wikis-copy/node_modules/@fortawesome/free-brands-svg-icons";
import {
  faEye ,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faAngry,
  faAnkh,
  faAppleAlt,
  faArchive,
  faCalendarAlt,
  faArchway,
  faArrowAltCircleDown,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faArrowAltCircleUp,
  faArrowCircleDown,
  faArrowCircleLeft,
  faArrowCircleRight,
  faArrowCircleUp,
  faArrowDown,
  faArrowLeft,
  faComment
} from "C:/Users/MChristian/Desktop/wikis-copy/node_modules/@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "C:/Users/MChristian/Desktop/wikis-copy/node_modules/@fortawesome/react-fontawesome";

library.add(
  fab,
  faEye ,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare,
  faAngleLeft,
  faCalendarAlt,
  faAngleRight,
  faAngleUp,
  faAngry,
  faAnkh,
  faAppleAlt,
  faArchive,
  faArchway,
  faArrowAltCircleDown,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faArrowAltCircleUp,
  faArrowCircleDown,
  faArrowCircleLeft,
  faArrowCircleRight,
  faArrowCircleUp,
  faArrowDown,
  faArrowLeft,
);

class FontAwesomeIconsExample extends Component {
  render() {
    return (
      <Fragment>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Row>
            <Col md="12">
              <Card className="main-card mb-3">
                <CardBody>
                  <Row>
                    <Col md="2">
                      <div className="font-icon-wrapper text-primary">
                        <FontAwesomeIcon
                          icon={["fab", "font-awesome"]}
                          size="4x"
                        />
                        <p>size="4x"</p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper text-success">
                        <FontAwesomeIcon icon={faEye} size="4x" />
                        <p>faEye</p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper text-warning">
                        <FontAwesomeIcon icon={faComment} size="4x" />
                        <p>faCalendarAlt</p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper text-danger">
                        <FontAwesomeIcon
                          icon={["fas", "cog"]}
                          spin
                          fixedWidth={false}
                          size="4x"
                        />
                        <p>spin fixedWidth=false size="4x"</p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper text-info">
                        <FontAwesomeIcon
                          icon={["fas", "spinner"]}
                          pulse
                          fixedWidth
                          size="4x"
                        />
                        <p>pulse fixedWidth size="4x"</p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper text-warning">
                        <FontAwesomeIcon
                          icon={["fab", "internet-explorer"]}
                          flip="both"
                          size="4x"
                        />
                        <p>flip="both" size="4x"</p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper text-dark">
                        <FontAwesomeIcon
                          icon={["fab", "font-awesome"]}
                          size="4x"
                          transform="left-1 rotate-15"
                        />
                        <p>size="4x" transform="left-1 rotate-15"</p>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <Row>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
                        <p>faAngleLeft size="2x"</p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon icon={faAngleRight} size="2x" />
                        <p>faAngleLeft size="2x"</p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon icon={faAngleUp} size="2x" />
                        <p>faAngleLeft size="2x"</p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon icon={faAngry} size="2x" />
                        <p>faAngleLeft size="2x"</p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon icon={faAnkh} size="2x" />
                        <p>faAngleLeft size="2x"</p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon icon={faAppleAlt} size="2x" />
                        <p>faAngleLeft size="2x"</p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon icon={faArchive} size="2x" />
                        <p>faAngleLeft size="2x"</p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon icon={faArchway} size="2x" />
                        <p>faAngleLeft size="2x"</p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon
                          icon={faArrowAltCircleDown}
                          size="2x"
                        />
                        <p>faAngleLeft size="2x"</p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon
                          icon={faArrowAltCircleLeft}
                          size="2x"
                        />
                        <p>faAngleLeft size="2x"</p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon
                          icon={faArrowAltCircleRight}
                          size="2x"
                        />
                        <p>faAngleLeft size="2x"</p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon icon={faArrowAltCircleUp} size="2x" />
                        <p>faAngleLeft size="2x"</p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon icon={faArrowCircleDown} size="2x" />
                        <p>faAngleLeft size="2x"</p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon icon={faArrowCircleLeft} size="2x" />
                        <p>faAngleLeft size="2x"</p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon icon={faArrowCircleRight} size="2x" />
                        <p>faAngleLeft size="2x"</p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon icon={faArrowCircleUp} size="2x" />
                        <p>faAngleLeft size="2x"</p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon icon={faArrowDown} size="2x" />
                        <p>faAngleLeft size="2x"</p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon icon={faArrowLeft} size="2x" />
                        <p>faAngleLeft size="2x"</p>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card className="mt-3">
                <CardBody>
                  <Row>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon icon={faAngleLeft} spin />
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="text-danger"
                          pulse
                        />
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon
                          icon={faAngleUp}
                          className="text-primary"
                        />
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon
                          icon={faAngry}
                          className="text-warning"
                        />
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon
                          icon={faAnkh}
                          className="text-alternate"
                        />
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon
                          icon={faAppleAlt}
                          className="text-info"
                        />
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon
                          icon={faArchive}
                          className="text-danger"
                        />
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon
                          icon={faArchway}
                          className="text-success"
                        />
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon
                          icon={faArrowAltCircleDown}
                          className="text-success"
                        />
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon
                          icon={faArrowAltCircleLeft}
                          className="text-dark"
                        />
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon
                          icon={faArrowAltCircleRight}
                          className="text-secondary"
                        />
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon icon={faArrowAltCircleUp} />
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon icon={faArrowCircleDown} />
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon icon={faArrowCircleLeft} />
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon icon={faArrowCircleRight} />
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon icon={faArrowCircleUp} />
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon icon={faArrowDown} />
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="font-icon-wrapper">
                        <FontAwesomeIcon icon={faArrowLeft} />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default FontAwesomeIconsExample;
