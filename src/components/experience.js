import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Form, Input, Button } from 'antd';
import { updateSectionInfo, addSectionInfo, deleteSectionInfo } from '../actions/index';

const FormItem = Form.Item;
const { TextArea } = Input;

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formLayout: 'vertical'
    };
  }

  componentWillUpdate() {
    localStorage.setItem('data', JSON.stringify(this.props.resumeData));
    console.log('saved store');
  }

  updateInfo = (index, e) => {
    this.props.updateSectionInfo({
      name: e.target.name,
      value: e.target.value,
      index: index,
      type: 'experienceAr'
    });
  };

  deleteInfo = index => {
    this.props.deleteSectionInfo({
      index: index,
      type: 'experienceAr'
    });
  };

  addInfo = () => {
    this.props.addSectionInfo({
      companyName: '',
      jobTitle: '',
      date: '',
      companyLocation: '',
      description: ''
    });
  };

  experience = () => {
    return this.props.resumeData.experienceAr.map((item, index) => {
      return (
        <Card
          title={`Experience ${index + 1}`}
          key={index}
          extra={<Button ghost type="danger" icon="delete" onClick={() => this.deleteInfo(index)} />}
        >
          <Form layout={this.formLayout}>
            <div className="row">
              <div className="col-md-6">
                <FormItem label="Enter Company Name">
                  <Input
                    placeholder="Dundler Mifflin"
                    name="companyName"
                    value={item.companyName}
                    onChange={e => this.updateInfo(index, e)}
                  />
                </FormItem>
              </div>
              <div className="col-md-6">
                <FormItem label="Enter Job Title">
                  <Input
                    placeholder="Paper Salesman"
                    name="jobTitle"
                    value={item.jobTitle}
                    onChange={e => this.updateInfo(index, e)}
                  />
                </FormItem>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <FormItem label="Enter Company Location">
                  <Input
                    placeholder="Scranton, PA"
                    name="companyLocation"
                    value={item.companyLocation}
                    onChange={e => this.updateInfo(index, e)}
                  />
                </FormItem>
              </div>
              <div className="col-md-6">
                <FormItem label="Enter Date">
                  <Input
                    placeholder="Jan 2017 - Aug 2018"
                    name="date"
                    value={item.date}
                    onChange={e => this.updateInfo(index, e)}
                  />
                </FormItem>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <FormItem label="Enter Description">
                  <TextArea
                    rows={6}
                    placeholder="I sold stuff..."
                    name="description"
                    value={item.description}
                    onChange={e => this.updateInfo(index, e)}
                  />
                </FormItem>
              </div>
            </div>
          </Form>
        </Card>
      );
    });
  };

  render() {
    return (
      <div>
        <p className="form-reminder">Remember, if you don't want something on your resume, leave it blank!</p>

        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <Button type="primary" icon="plus" onClick={this.addInfo}>
            Add New Experience
          </Button>
        </div>

        {this.experience()}
      </div>
    );
  }
}

function mapStateToProps({ resumeData }) {
  return {
    resumeData
  };
}

export default connect(mapStateToProps, {
  updateSectionInfo,
  addSectionInfo,
  deleteSectionInfo
})(Experience);
