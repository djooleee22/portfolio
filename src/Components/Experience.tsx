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
    img: "http://www.fon.bg.ac.rs/wp-content/themes/fon/img/fon-logo=cir=.png",
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
