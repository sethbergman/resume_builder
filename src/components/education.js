import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Form, Input, Button } from "antd";
import {
  updateSectionInfo,
  addSectionInfo,
  deleteSectionInfo
} from "../actions/index";

const FormItem = Form.Item;
const { TextArea } = Input;

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formLayout: "vertical"
    };
  }

  componentWillUpdate() {
    localStorage.setItem("data", JSON.stringify(this.props.resumeData));
    console.log("saved store");
  }

  updateInfo = (index, e) => {
    this.props.updateSectionInfo({
      name: e.target.name,
      value: e.target.value,
      index: index,
      type: "educationAr"
    });
  };

  deleteInfo = index => {
    this.props.deleteSectionInfo({
      index: index,
      type: "educationAr"
    });
  };

  addInfo = (index, e) => {
    this.props.addSectionInfo({
      info: {
        name: "",
        institute: "",
        location: "",
        dateEarned: "",
        gpa: ""
      },
      type: "educationAr"
    });
  };

  education = () => {
    return this.props.resumeData.educationAr.map((item, index) => {
      return (
        <Card
          title={`Qualification ${index + 1}`}
          key={index}
          extra={
            <Button
              ghost
              type="danger"
              icon="delete"
              onClick={() => this.deleteInfo(index)}
            />
          }
        >
          <Form layout={this.formLayout}>
            <div className="row">
              <div className="col-md-6">
                <FormItem label="Enter Qualification Name">
                  <Input
                    placeholder="Computer Science"
                    name="name"
                    value={index.item}
                    onChange={e => this.updateInfo(item, e)}
                  />
                </FormItem>
              </div>
              <div className="col-md-6">
                <FormItem label="Enter Intitute">
                  <Input
                    placeholder="Texas State University"
                    name="institute"
                    value={index.institute}
                    onChange={e => this.updateInfo(index, e)}
                  />
                </FormItem>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <FormItem label="Enter Institute Location">
                  <Input
                    placeholder="San Marcos, TX"
                    name="location"
                    value={index.location}
                    onChange={e => this.updateInfo(index, e)}
                  />
                </FormItem>
              </div>
              <div className="col-md-6">
                <FormItem label="Enter Date">
                  <Input
                    placeholder="Aug 2004 - Aug 2008"
                    name="date"
                    value={index.date}
                    onChange={e => this.updateInfo(index, e)}
                  />
                </FormItem>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <FormItem label="Enter GPA (if applicable)">
                  <TextArea
                    rows={6}
                    placeholder="3.94"
                    name="gpa"
                    value={index.gpa}
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
        <p className="form-reminder">
          Remember, if you don't want something on your resume, leave it blank!
        </p>

        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <Button type="primary" icon="plus" onClick={this.addInfo}>
            Add New Education
          </Button>
        </div>

        {this.education()}
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
})(Education);
