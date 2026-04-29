import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SkillMeter = ({ title, percentage }) => {
  return (
    <div className="item">
      <div style={{ width: 160, margin: "0 auto", paddingBottom: "20px" }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          strokeWidth={10}
          styles={buildStyles({
            textColor: "#fff",
            pathColor: " rgb(21, 167, 167)",
            trailColor: "#151515",
          })}
        />
      </div>
      <h5>{title}</h5>
    </div>
  );
};

export default SkillMeter;