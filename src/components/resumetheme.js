import React from 'react';

const ResumeTheme = ({ resumeData }) => {

  const { basicInfo, summary, experienceAr, educationAr, projectAr } = resumeData;

  function experience() {
    return experienceAr.map((item, index) => {
      return (
        <div key="index">
          <div className="experience-title">{item.jobTitle}</div>
          <div>
            <span>{item.companyName} // </span>
            <span>{item.companyLocation} // </span>
            <span>{item.date}</span>
          </div>
          <div className="experience-desc">{item.description}</div> 
        </div>
      );
    });
  }        
  
  function education() {
    return educationAr.map((item, index) => {
      return (
        <div key="index">
          <div className="education-name">{item.name}</div>
          <div>
            <span>{item.institute} // </span>
            <span>{item.location} // </span>
            <span>{item.gpa} // </span>
            <span>{item.date}</span>
          </div>
        </div>
      );
    });
  }    

  function projects() {
    return projectAr.map((item, index) => {
      return (
        <div key="index">
          <div className="project-name">{item.name}</div>
          <div className="project-desc">{item.description}</div>
        </div>
      );
    });
  }    

  return (
    <div id="resume-theme" style={{ fontSize: 12 }}>

      <div className="header">
        <div className="header-name">{basicInfo.fullName}</div>
        <div>{basicInfo.emailAddress}</div>
        <div>{basicInfo.phoneNumber}</div>
        <div>{basicInfo.address}</div>
        <div>{basicInfo.personalWebsite}</div>
        <div>{basicInfo.linkedIn}</div>
      </div>

      <div className="body">

        {summary.length > 0 &&
          <div>
            <hr />
            <div className="section-header">Professional Summary</div>
            <div className="summary">{ summary }</div>
          </div>
        }

        {experienceAr.length > 0 &&
          <div>
            <hr />
            <div className="section-header">Experience</div>
            { experience() }
          </div>
        }

        {educationAr.length > 0 &&
          <div>
            <hr />
            <div className="section-header">Education</div>
            { education() }
          </div>
        }
        
        {projectAr.length > 0 &&
          <div>
            <hr />
            <div className="section-header">Projects</div>
            { projects() }
          </div>
        }
        
      </div>

    </div>
  );
}

export default ResumeTheme;