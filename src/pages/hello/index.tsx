import { FC } from "react";
import CodeContent from "../../components/CodeContent";
import IDCard from "../../components/IDCard";
import { personalInfo } from "../../config";

const HelloPage: FC = () => {
  return (
    <div className="main-content">
      <section className="intro">
        <p>Hi all. I am</p>
        <h1>{personalInfo.name}</h1>
        <h2>&gt; {personalInfo.title}</h2>
      </section>
      <CodeContent />
      <IDCard />
    </div>
  );
};

export default HelloPage;
