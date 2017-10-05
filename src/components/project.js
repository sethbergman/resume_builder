import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Form, Input, Button } from 'antd';
import { updateSectionInfo, addSectionInfo, deleteSectionInfo } from '../actions/index';

const FormItem = Form.Item;
const { TextArea } = Input

class Project extends Component {
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

  updateInfo = (index, e) => {
    this.props.updateSectionInfo({
      name: e.target.name,
      value: e.target.value,
      index: index,
      type: 'projectAr'
    });
  }

  deleteInfo = (index) => {
    this.props.deleteSectionInfo({
      index: index,
      type: 'projectAr'
    });
  }

  addInfo = () => {
    this.props.addSectionInfo({
      info: {
        name: '',
        description: ''
      },
      type: 'projectAr'
    });
  }
  
  projects = () => {
    return this.props.resumeData.projectAr.map((item, index) => {
      return (
        <Card title={`Project ${index + 1}`} key={index} 
          extra={<Button ghost type="danger" icon="delete" onClick={() => this.deleteInfo(index)}></Button>}>
          <Form layout={this.formLayout} >

            <div className="row">
              <div className="col-md-12">
                <FormItem label="Enter Project Name">
                  <Input placeholder="Stock Tracker" name="name" value={item.name}
                    onChange={(e) => this.updateInfo(index, e)} />
                </FormItem>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <FormItem label="Enter Project Description">
                  <TextArea rows={6} placeholder="Stock tracker does stuff..." name="description" value={item.description}
                    onChange={(e) => this.updateInfo(index, e)} />
                </FormItem>
              </div>
            </div>

          </Form>
        </Card>
      );
    });
  }

  render() {
    return (
      <div>
        <p className="form-reminder">Remember, if you don't want something on your resume, leave it blank!</p>

        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <Button type="primary" icon="plus" onClick={this.addInfo}>Add New Project</Button>
        </div>

        {this.projects()}
      </div>
    );
  }
}

function mapStateToProps({ resumeData }) {
  return {
    resumeData
  };
}

export default connect(mapStateToProps, { updateSectionInfo, addSectionInfo, deleteSectionInfo })(Project);
