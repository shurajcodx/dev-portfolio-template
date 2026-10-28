import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { personalInfo, socialLinks } from '../config';
import { CodeLine } from '../types';
import { useTemplate } from '../context/TemplateContext';

const CodeContent: FC = () => {
    const { currentTemplate } = useTemplate();
    const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

    const githubLink = socialLinks.find((link) => link.name === 'GitHub');
    const linkedinLink = socialLinks.find((link) => link.name === 'LinkedIn');

    const userDetails: (CodeLine & { rawCopy: string })[] = [
        {
            comment: { text: '// direct phone line' },
            const: {
                name: 'telephoneNum',
                value: `"${personalInfo.phone}"`,
                href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
            },
            rawCopy: personalInfo.phone,
        },
        {
            comment: { text: '// primary engineering email' },
            const: {
                name: 'emailAddress',
                value: `"${personalInfo.email}"`,
                href: `mailto:${personalInfo.email}`,
            },
            rawCopy: personalInfo.email,
        },
        ...(githubLink
            ? [
                  {
                      comment: { text: '// open-source repositories & this template' },
                      const: {
                          name: 'githubProfile',
                          value: `"${githubLink.url}"`,
                          href: githubLink.url,
                      },
                      rawCopy: githubLink.url,
                  },
              ]
            : []),
        ...(linkedinLink
            ? [
                  {
                      comment: { text: '// professional network & career history' },
                      const: {
                          name: 'linkedinProfile',
                          value: `"${linkedinLink.url}"`,
                          href: linkedinLink.url,
                      },
                      rawCopy: linkedinLink.url,
                  },
              ]
            : []),
    ];

    const handleCopy = (text: string, idx: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIdx(idx);
        setTimeout(() => setCopiedIdx(null), 1800);
    };

    return (
        <div className="code-window surface-card">
            <div className="window-chrome">
                <div className="window-dots" aria-hidden="true">
                    <span className="chrome-dot dot-close" />
                    <span className="chrome-dot dot-min" />
                    <span className="chrome-dot dot-max" />
                </div>
                <div className="window-title">
                    <FontAwesomeIcon icon={faTerminal} />
                    <span>developer.config.ts — [{currentTemplate.name}]</span>
                </div>
                <div className="window-controls-y2k" aria-hidden="true">
                    <span>_</span>
                    <span>□</span>
                    <span>×</span>
                </div>
            </div>

            <div className="code-content">
                {userDetails.map((item, index) => (
                    <div key={index} className="code-block-group">
                        <div className="code-line comment-line">
                            <span className="line-num">{index * 2 + 1}</span>
                            <span className="comment">{item.comment.text}</span>
                        </div>
                        <div className="code-line value-line">
                            <span className="line-num">{index * 2 + 2}</span>
                            <span className="code-statement">
                                <span className="const">const</span>{' '}
                                <span className="var-name">{item.const.name}</span> ={' '}
                                <a
                                    className="string"
                                    href={item.const.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.const.value}
                                </a>
                                ;
                            </span>
                            <button
                                type="button"
                                className="code-copy-inline"
                                onClick={() => handleCopy(item.rawCopy, index)}
                                title={`Copy ${item.const.name}`}
                                aria-label={`Copy ${item.const.name}`}
                            >
                                <FontAwesomeIcon
                                    icon={copiedIdx === index ? faCheck : faCopy}
                                />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CodeContent;
