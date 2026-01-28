import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { personalInfo } from "../config";

const IDCard: FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = personalInfo.resumeUrl;
    link.download = `${personalInfo.name.replace(/\s/g, '_')}_CV.pdf`;
    link.click();
  };

  return (
    <section className="id-card-container">
      <div className="id-card-tag"></div>
      <div className="id-card-tag-strip"></div>
      <div className="id-card-hook"></div>
      <div className="id-card-holder">
        <div className="id-card">
          <div className="header">
            <img src={personalInfo.avatar} alt={personalInfo.name} />
          </div>
          <h2>{personalInfo.name}</h2>
          <span>{personalInfo.title}</span>
          <div className="cv-btn-container">
            <button onClick={handleDownload} className="download-cv-btn">
              <FontAwesomeIcon icon={faFileDownload} /> CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IDCard;
