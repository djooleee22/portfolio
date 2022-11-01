import React from "react";
import "./Job.scss";

interface JobObject {
  jobData: {
    id: string;
    company: string;
    position: string;
    time: string;
    extra: string;
    img: string;
  };
}

const Job: React.FC<JobObject> = (props) => {
  return (
    <div id="job">
      <div className="left">
        <img src={props.jobData.img} alt="test" />
      </div>
      <div className="right">
        <h2>{props.jobData.company}</h2>
        <p className="position">{props.jobData.position}</p>
        <p className="time">{props.jobData.time}</p>
        <p className="extra">{props.jobData.extra}</p>
      </div>
    </div>
  );
};

export default Job;
