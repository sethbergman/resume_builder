import React, { Component } from 'react';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAllState } from '../actions/index';
import { Layout, Menu, Icon, Button } from 'antd';

import BasicInfo from './basicinfo';
import Experience from './experience';
import FinishUp from './finishup';
import Summary from './summary';
import Education from './education';
import Project from './project';

const { Sider } = Layout;

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      sideBarMargin: 250
    };
  }

  componentWillMount() {
    const storage = localStorage.getItem('data');
    if (storage !== null) {
      console.log(storage);
      this.props.setAllState(JSON.parse(storage));
    }
  }

  saveData = () => {
    console.log('slol.');
    localStorage.setItem('data', JSON.stringify(this.props.resumeData));
  };

  // componentDidMount() {
  // 	this.updateWindowDimensions();
  // 	window.addEventListener('resize', () => this.updateWindowDimensions);
  // }

  // componentWillUnmount() {
  // 	window.removeEventListener('resize', () => this.updateWindowDimensions);
  // }

  // updateWindowDimensions() {
  // 	this.setState({ width: window.innerWidth, height: window.innerHeight });
  // }

  // handleClick = (e) => {
  // 	console.log('click ', e);
  // 	this.setState({
  // 		current: e.key,
  // 	});
  // }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout>
        <Layout>
          <Sider
            style={{ overflow: 'false', height: '100vh', position: 'fixed', left: 0 }}
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            width="250"
            trigger={null}
          >
            <div className="logo">
              <img src={require('../logo.png')} alt="resume builder" />
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/">
                  <Icon type="user" />
                  <span className="nav-text">Basic Info</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/summary">
                  <Icon type="video-camera" />
                  <span className="nav-text">Summary</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/experience">
                  <Icon type="laptop" />
                  <span className="nav-text">Experience</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/education">
                  <Icon type="bar-chart" />
                  <span className="nav-text">Education</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/project">
                  <Icon type="cloud-o" />
                  <span className="nav-text">Project</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/finishup">
                  <Icon type="appstore-o" />
                  <span className="nav-text">Finish Up</span>
                </Link>
              </Menu.Item>
            </Menu>
            <Button ghost onClick={this.saveData} type="primary" icon="save" style={{ width: '150px' }}>
              Save
            </Button>
          </Sider>
          <Layout style={{ marginLeft: this.state.sideBarMargin }}>
            <Switch>
              <Route path="/experience" component={Experience} />
              <Route path="/finishup" component={FinishUp} />
              <Route path="/summary" component={Summary} />
              <Route path="/education" component={Education} />
              <Route path="/project" component={Project} />
              <Route path="/" component={BasicInfo} />
            </Switch>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps({ resumeData }) {
  return {
    resumeData
  };
}

export default withRouter(connect(mapStateToProps, { setAllState })(NavBar));
