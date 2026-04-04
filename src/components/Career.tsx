import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — Information Technology</h4>
                <h5>Bharati Vidyapeeth COE, Pune</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently in 3rd year, building real-world projects alongside
              academics. Deep into web dev, Android apps, and AI-assisted
              development — shipping stuff that actually works, not just
              assignments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class XII — Science (PCM + CS)</h4>
                <h5>D.A.V. Public School, Sector 14, Faridabad</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed 12th with Computer Science — where the coding journey
              really kicked off. Faridabad bred, Pune grinding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
