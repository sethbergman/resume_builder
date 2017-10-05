import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Form, Input } from 'antd';
import { updateBasicInfo } from '../actions/index';

const FormItem = Form.Item;

class BasicInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formLayout: 'vertical'
    };
  }

  componentWillUpdate() {
    localStorage.setItem('data', JSON.stringify(this.props.resumeData));
    console.log('saved store')
  }

  onChange = (e) => {
    this.props.updateBasicInfo({
        name: e.target.name,
        value: e.target.value
    });
  }

  render() {
    const { fullName, email, phoneNumber, address, personalWebsite, linkedIn } = this.props.resumeData.basicInfo;

    return (
      <div>
        <p className="form-reminder">Remember, if you don't want something on your resume, leave it blank!</p>
        <Card title="Basic Information">
          <Form layout={this.formLayout}>

            <div className="row">
              <div className="col-md-6">
                <FormItem label="Enter Full Name">
                  <Input placeholder="Seth Bergman" name="fullName" value={fullName} onChange={this.onChange} />
                </FormItem>
              </div>
              <div className="col-md-6">
                <FormItem label="Enter Email">
                  <Input placeholder="hello@sethbergman.com" name="email" value={email} onChange={this.onChange} />
                </FormItem>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <FormItem label="Enter Phone Number">
                  <Input placeholder="512-701-0186" name="phoneNumber" value={phoneNumber} onChange={this.onChange} />
                </FormItem>
              </div>
              <div className="col-md-6">
                <FormItem label="Enter Address">
                  <Input placeholder="Austin, TX" name="address" value={address} onChange={this.onChange} />
                </FormItem>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <FormItem label="Personal Website">
                  <Input placeholder="https://sethbergman.com" name="personalWebsite" value={personalWebsite} onChange={this.onChange} />
                </FormItem>
              </div>
              <div className="col-md-6">
                <FormItem label="LinkedIn">
                  <Input placeholder="linkedin/sethbergman" name="linkedIn" value={linkedIn} onChange={this.onChange} />
                </FormItem>
              </div>
            </div>

          </Form>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ resumeData }) {
  return {
    resumeData
  };
}

export default connect(mapStateToProps, { updateBasicInfo })(BasicInfo);

