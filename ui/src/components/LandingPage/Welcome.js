import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Grid,
  Row,
  Col,
  Panel,
  ButtonGroup,
  Button
} from 'react-bootstrap'

import MainLogo from 'gittoken-svg-icons/dist/MainLogo'
import GitHubIcon from 'react-icons/lib/fa/github'

class WelcomeComponent extends Component {
  constructor(opts) {
    super(opts)
  }

  signup() {
    location.href = "/auth/github"
  }

  render() {

    return (
      <div style={{
        // background: 'linear-gradient(135deg, #0c0019, #493f5b)',
        fontWeight: '100',
        paddingTop: '-50px',
        marginBottom: '50px'
      }}>
        <Row>
          <Col sm={12} xs={12} md={6} lg={6} style={{ zIndex: '2', position: 'relative' }}>
            <blockquote>
              <p style={{ fontSize: '55px' }}>Issue Reward Points for GitHub Contributions</p>
              <p style={{ fontSize: '26px' }}>
                <i className="text-success">Developers</i>,
                <i className="text-warning"> Project Managers</i>, and
                <i className="text-info"> Users</i> earn Ethereum ERC20 tokens when contributing to GitToken enabled organizations
              </p>
            </blockquote>
            <br/>
            <Button
              bsSize={'lg'}
              bsStyle={'info'}
              style={{ margin: '5px' }}
              onClick={this.signup.bind(this)}
              block
            >
              <GitHubIcon style={{ fontSize: '36px' }} /> Register with GitHub
            </Button>
          </Col>
          <Col smHidden xsHidden md={6} lg={6}>
            <Row>
              {/* {this.gif()} */}
              <svg width={"200%"} viewBox="0 0 1000 1000" style={{
                zIndex: '-1',
                margin: '-300px',
                marginBottom: '-150px'
              }}>

                <defs>
                  <radialGradient id="g1" fx="50%" fy="50%" cx="50%" cy="50%" r="50%">
                      <stop stopColor="white" offset="10%"/>
                      <stop stopColor="#320551" offset="100%"/>
                  </radialGradient>
                </defs>

                <circle cx="500" cy="500" r="400" style={{fill: 'url(#g1)'}}/>

                <path d="M 520 500 L 700 500 L 700 600 L 500 700 L 300 600 L 300 400 L 500 300 L 680 390 "
                  fill="transparent"
                  strokeLinejoin={"round"}
                  stroke="#cc5333"
                  strokeWidth="36"
                />

                <circle
                  cx="500"
                  cy="500"
                  r="26"
                  fill="transparent"
                  stroke="#cc5333"
                  strokeWidth="16"
                />

                <circle
                  cx="700"
                  cy="400"
                  r="26"
                  fill="transparent"
                  stroke="#cc5333"
                  strokeWidth="16"
                />
              </svg>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStoreToProps = (store, props) => {
  return {
    // main: store.main
  }
}

const Welcome = connect(mapStoreToProps)(WelcomeComponent)

export default Welcome
