import { FC } from "react";
import { motion } from "framer-motion";
import CodeContent from "../../components/CodeContent";
import IDCard from "../../components/IDCard";
import ThreeBackground from "../../components/ThreeBackground";
import { personalInfo } from "../../config";

const HelloPage: FC = () => {
  return (
    <div className="main-content" style={{ position: 'relative' }}>
      <ThreeBackground />
      <motion.section 
        className="intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <p className="text-accent">Hi all. I am</p>
        <h1>{personalInfo.name}</h1>
        <h2>&gt; {personalInfo.title}</h2>
      </motion.section>
      
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <CodeContent />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <IDCard />
      </motion.div>
    </div>
  );
};

export default HelloPage;

