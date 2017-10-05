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
    const request = new Request(`${process.env.API_HOST}/api/v1/resume/${resumeData.id}`, {
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

  static createResume(ResumeApi) {
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

  static deleteCat(cat) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, this.requestHeaders());
    const request = new Request(`${process.env.API_HOST}/api/v1/cats/${cat.id}`, {
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
