import { FC } from 'react';
import { Experience, Education } from '../types';

interface TimelineProps {
    items: (Experience | Education)[];
    type: 'experience' | 'education';
}

const Timeline: FC<TimelineProps> = ({ items, type }) => {
    const formatDate = (date: string) => {
        if (date === 'Present') return 'Present';
        const [year, month] = date.split('-');
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return month ? `${monthNames[parseInt(month) - 1]} ${year}` : year;
    };

    return (
        <div className="timeline">
            {items.map((item, index) => (
                <div key={item.id} className="timeline-item" data-index={index}>
                    <div className="timeline-marker" />
                    <div className="timeline-content">
                        <div className="timeline-header">
                            {type === 'experience' ? (
                                <>
                                    <h3>{(item as Experience).position}</h3>
                                    <h4>{(item as Experience).company}</h4>
                                </>
                            ) : (
                                <>
                                    <h3>{(item as Education).degree}</h3>
                                    <h4>{(item as Education).institution}</h4>
                                </>
                            )}
                        </div>
                        <div className="timeline-meta">
                            <span className="timeline-date">
                                {formatDate(item.startDate)} - {formatDate(item.endDate)}
                            </span>
                            <span className="timeline-location">{item.location}</span>
                        </div>
                        {type === 'experience' && (item as Experience).description && (
                            <ul className="timeline-description">
                                {(item as Experience).description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        )}
                        {type === 'education' && (item as Education).description && (
                            <p className="timeline-description">{(item as Education).description}</p>
                        )}
                        {type === 'experience' && (item as Experience).technologies && (
                            <div className="timeline-tech">
                                {(item as Experience).technologies?.map((tech, i) => (
                                    <span key={i} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                        {type === 'education' && (item as Education).gpa && (
                            <p className="timeline-gpa">GPA: {(item as Education).gpa}</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
