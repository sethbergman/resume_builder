class ResumeApi {
  static requestHeaders() {
    return { AUTHORIZATION: `Bearer ${sessionStorage.jwt}` };
  }

  static getAllResumes() {
    const headers = this.requestHeaders();
    const request = new Request(`${process.env.API_HOST}/api/v1/resume`, {
      method: 'GET',
      headers: headers
    });

    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }

  static updateSectionInfo(section) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, this.requestHeaders());
    const request = new Request(`${process.env.API_HOST}/api/v1/resume/${resumeData}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({ resume: resumeData })
    });

    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }

  static addInfo() {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, this.requestHeaders());
    const request = new Request(`${process.env.API_HOST}/api/v1/resume`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ resume: resumeData })
    });

    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }

  static deleteInfo() {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, this.requestHeaders());
    const request = new Request(`${process.env.API_HOST}/api/v1/resume/${resumeData}`, {
      method: 'DELETE',
      headers: headers
    });

    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }
}

export default ResumeApi;
