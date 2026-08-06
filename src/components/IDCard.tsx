import { FC, useState, MouseEvent } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { personalInfo } from "../config";

const IDCard: FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for 3D tilt physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [18, -18]), { stiffness: 250, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-18, 18]), { stiffness: 250, damping: 18 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

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
      <motion.div 
        className="id-card-holder"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1000,
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <div className={`id-card ${isHovered ? 'hovered' : ''}`}>
          <div className="id-card-holo-shine" />
          <div className="header">
            <img src={personalInfo.avatar} alt={personalInfo.name} />
          </div>
          <h2>
            {personalInfo.name} <FontAwesomeIcon icon={faCheckCircle} className="verified-badge" title="Verified Staff Engineer" />
          </h2>
          <span>{personalInfo.title}</span>
          <div className="cv-btn-container">
            <button onClick={handleDownload} className="download-cv-btn">
              <FontAwesomeIcon icon={faFileDownload} /> Download CV
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default IDCard;

