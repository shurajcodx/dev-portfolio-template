import { FC } from "react";
import { personalInfo, socialLinks } from "../config";
import { CodeLine } from "../types";

const CodeContent: FC = () => {
  const githubLink = socialLinks.find(link => link.name === 'GitHub');
  const linkedinLink = socialLinks.find(link => link.name === 'LinkedIn');

  const userDetails: CodeLine[] = [
    {
      comment: { text: "// my number" },
      const: {
        name: "telephoneNum",
        value: personalInfo.phone,
        href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
      },
    },
    {
      comment: { text: "// my e-mail" },
      const: {
        name: "email",
        value: `"${personalInfo.email}"`,
        href: `mailto:${personalInfo.email}`,
      },
    },
    ...(githubLink ? [{
      comment: { text: "// you can also see it on my Github page" },
      const: {
        name: "githubLink",
        value: `"${githubLink.url}"`,
        href: githubLink.url,
      },
    }] : []),
    ...(linkedinLink ? [{
      comment: { text: "// you can check my LinkedIn page" },
      const: {
        name: "linkedinPage",
        value: `"${linkedinLink.url}"`,
        href: linkedinLink.url,
      },
    }] : []),
  ];

  return (
    <div className="code-content">
      {userDetails.map((item, index) => (
        <div key={index}>
          <div className="code-line">
            <span className="comment">{item.comment.text}</span>
          </div>
          <div className="code-line">
            <span className="const">const</span> {item.const.name} =&nbsp;
            <a className="string" href={item.const.href} target="_blank" rel="noopener noreferrer">
              {item.const.value}
            </a>
            ;
          </div>
        </div>
      ))}
    </div>
  );
};

export default CodeContent;
