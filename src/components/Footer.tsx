import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { socialLinks } from "../config";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  const instagramLink = socialLinks.find(link => link.name === 'Instagram');
  const facebookLink = socialLinks.find(link => link.name === 'Facebook');
  const githubLink = socialLinks.find(link => link.name === 'GitHub');

  return (
    <footer className="footer">
      <div className="footer-left">
        <span>Find me on:</span>
        {instagramLink && (
          <a
            href={instagramLink.url}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        )}
        {facebookLink && (
          <a
            href={facebookLink.url}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
        )}
      </div>
      <div className="footer-right">
        {githubLink && (
          <a
            href={githubLink.url}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{githubLink.username}</span> <FontAwesomeIcon icon={faGithub} />
          </a>
        )}
        <span className="copyright">© {currentYear}</span>
      </div>
    </footer>
  );
};

export default Footer;
