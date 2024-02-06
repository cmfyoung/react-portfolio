import React from 'react';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

const socialLinks = [
  {
    id: 1,
    icon: <FiGithub />,
    url: 'https://github.com/cmfyoung',
  },
  {
    id: 2,
    icon: <FiTwitter />,
    url: 'https://twitter.com/',
  },
  {
    id: 3,
    icon: <FiLinkedin />,
    url: 'https://www.linkedin.com/in/christophermfyoung',
  },
];

function Footer() {
  let footerStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px', 
    margin: '10px',
  };

  return (
    <>
        {/* Footer social links */}
    <footer style={footerStyle}>
        <div>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300 mb-6"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>
        <p className="bottom-text"> © 2024 Chris Young</p>
      </footer>
    </>
  );
}

export default Footer;
