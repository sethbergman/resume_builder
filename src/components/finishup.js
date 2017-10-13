import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import ResumeTheme from './resumetheme';
import { connect } from 'react-redux';

class FinishUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      iconLoading: false
    };
  }

  getPdf() {
    this.setState({ iconLoading: true });
    const html = document.getElementById('print-section').innerHTML;
    axios({
      url: '/pdf',
      method: 'POST',
      data: {
        html: html
      },
      responseType: 'arraybuffer'
    })
      .then(data => {
        this.setState({ iconLoading: false });
        console.log('data: ', data);
        let blob = new Blob([data.data], { type: 'application/pdf' });
        //let blob = new Blob([data.data])
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'resume.pdf';
        //link.download = 'resume.html';
        link.click();
      })
      .catch(error => {
        this.setState({ iconLoading: false });
        console.log(error);
      });
  }

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  render() {
    return (
      <div>
        <div className="lower-nav">
          <ul>
            <li>
              <Button
                type="primary"
                onClick={() => this.getPdf()}
                icon="download"
                loading={this.state.iconLoading}
              >
                Download PDF
              </Button>
            </li>
          </ul>
        </div>

        <div id="print-section">
          <ResumeTheme resumeData={this.props.resumeData} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ resumeData }) {
  return {
    resumeData
  };
}

export default connect(mapStateToProps, null)(FinishUp);
