import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Form, Input } from 'antd';
import { updateSummary } from '../actions/index';

const FormItem = Form.Item;
const { TextArea } = Input;

class Summary extends Component {
  componentWillUpdate() {
    localStorage.setItem('data', JSON.stringify(this.props.resumeData));
    console.log('saved store');
  }

  render() {
    return (
      <div>
        <p className="form-reminder">Remember, if you don't want something on your resume, leave it blank!</p>
        <Card title="Professional Summary">
          <Form layout={this.formLayout}>
            <div className="row">
              <div className="col-md-12">
                <FormItem label="Enter Description">
                  <TextArea
                    rows={6}
                    placeholder="I sold stuff..."
                    name="description"
                    value={this.props.resumeData.summary}
                    onChange={e => this.props.updateSummary(e.target.value)}
                  />
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

export default connect(mapStateToProps, { updateSummary })(Summary);
