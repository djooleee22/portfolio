import React, { useState } from "react";
import "./Experience.scss";
import Job from "./Job";

const jobs = [
  {
    id: "1",
    company: "Triple Jump Group",
    position: "Sales Intern",
    time: "Dec 2020 - Sep 2021",
    extra: "Brand manager assistant for arena Water Instinct",
    img: "https://media-exp1.licdn.com/dms/image/C4E0BAQG9fI4HdIO2BQ/company-logo_100_100/0/1610374353342?e=1675296000&v=beta&t=o7pOycYO1t7XAyKNvZM5XcXzmWFQimKuo5slIF3R2I8",
  },
  {
    id: "2",
    company: "CodeIT doo",
    position: "Internship HR recruit",
    time: "2019",
    extra:
      "Worked on headhunting via LinkedIn; attended the interviews; participated in the organization of teambuilding.",
    img: "https://media-exp1.licdn.com/dms/image/C4E0BAQHCt0Uvjkr-Zg/company-logo_100_100/0/1651487377528?e=1675296000&v=beta&t=nA0Bx8Apm4ocoG_s4z4Kd-Q-o96GExjyw-zb68vt-ig",
  },
  {
    id: "3",
    company: "IPC",
    position: "Office Assistant",
    time: "2016 - 2017",
    extra: "Work in Microsoft Excel; phone calls with customers.",
    img: "https://freesvg.org/storage/img/thumb/Anonymous-Mail-1-icon.png",
  },
  {
    id: "4",
    company: "Hard Rock Cafe Pittsburgh",
    position: "Prep Cook",
    time: "May 2015 - Sep 2015",
    extra: "Prepared food for head chef and senior chefs.",
    img: "https://media-exp1.licdn.com/dms/image/D4D0BAQGSxRhH_RUSUA/company-logo_100_100/0/1664984105005?e=1675296000&v=beta&t=yHYg1Q8U9pjlDdg9RkqOMkc7RTymTrSPJThSb4s1e38",
  },
];

const educationList = [
  {
    id: "1a",
    company: "BIT - Belgrade Institute of Technology",
    position: "Front-end developer",
    time: "2022",
    extra: `Completed with advanced certificate.`,
    img: "https://images.bgit.rs/logo-footer.png",
    // img: "https://images.bgit.rs/logo-tag.png",
  },
  {
    id: "2a",
    company: "Faculty of Organizational Sciences",
    position: "Master's degree, Human Resource Management",
    time: "2018 - 2020",
    extra: "",
    img: "data:image/png;base64,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",
  },
  {
    id: "3a",
    company: "Singidunum University",
    position: "Bachelor's degree, Marketing and Management",
    time: "2013-2018",
    extra: "",
    img: "https://media-exp1.licdn.com/dms/image/C560BAQEw6EiL89bj9A/company-logo_100_100/0/1519874967323?e=1675296000&v=beta&t=pVYR0zjEGbcLy1DzznvHH7t5QG5cZPgFgsaOCwKd-70",
  },
];

const Experience: React.FC = () => {
  const [education, setEducation] = useState(true);
  return (
    <div id="experience" className={education ? "" : "pad"}>
      {education && jobs.map((el) => <Job jobData={el} key={el.id} />)}
      {!education &&
        educationList.map((el) => <Job jobData={el} key={el.id} />)}
      <button onClick={() => setEducation(!education)}>
        {education ? "Education" : "Experience"}
      </button>
    </div>
  );
};

export default Experience;
