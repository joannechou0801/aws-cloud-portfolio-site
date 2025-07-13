import { useState, useRef } from 'react';
import AboutSection from '../AboutSection/AboutSection.jsx';
import SkillsSection from '../SkillsSection/SkillsSection.jsx';
import ProjectsSection from '../ProjectsSection/ProjectsSection.jsx';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import './HomePage.css';

export default function HomePage() {
  const [language, setLanguage] = useState('zh');
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'zh' ? 'en' : 'zh'));
  };

  const content = {
    zh: {
      name: '周芸榛 Joanne Chou',
      subtitle: '初階雲端工程師',
      intro:
        '具備 React、React Native、Node.js 與 AWS 架構實務經驗，參與多個全端專案，' +
        '並取得 AWS Certified Cloud Practitioner 證照。曾獲選國際研究論文獎，亦具海外業務與活動策劃背景，' +
        '擅長中英雙語簡報與跨文化溝通。目前正積極進修 AWS 解決方案架構與 DevOps 技能，' +
        '致力於成為能獨立設計與維運雲端系統的專業人才。',
      nav: ['首頁', '簡介', '技能', '作品集'],
    },
    en: {
      name: 'Joanne Chou',
      subtitle: 'Junior Cloud Engineer',
      intro:
        'Hands-on experience with React, React Native, Node.js, and AWS architecture, ' +
        'having participated in multiple full-stack projects. Certified AWS Cloud Practitioner ' +
        'with an international research award and background in overseas business and event planning. ' +
        'Skilled in bilingual (English/Mandarin) communication and cross-cultural collaboration. ' +
        'Currently advancing knowledge in AWS Solutions Architecture and DevOps, ' +
        'aiming to independently design and manage cloud systems.',
      nav: ['Home', 'About', 'Skills', 'Projects'],
    },
  };

  const handleNavClick = (item) => {
    if ((language === 'zh' && item === '首頁') || (language === 'en' && item === 'Home')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if ((language === 'zh' && item === '簡介') || (language === 'en' && item === 'About')) {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if ((language === 'zh' && item === '技能') || (language === 'en' && item === 'Skills')) {
      skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if ((language === 'zh' && item === '作品集') || (language === 'en' && item === 'Projects')) {
      projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="homepage-container">
      <nav className="homepage-nav">
        <div className="nav-buttons">
          {content[language].nav.map((item, idx) => (
            <button
              key={idx}
              className="nav-button"
              onClick={() => handleNavClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="language-toggle">
          <button onClick={toggleLanguage} className="language-button">
            {language === 'zh' ? 'EN' : '中'}
          </button>
        </div>
      </nav>

      <div className="homepage-main">
        <div className="left-panel">
          <img src="/images/homepage/profile.jpg" alt="Profile" className="profile-image" />
          <h2 className="profile-name">{content[language].name}</h2>

          <div className="contact-icons">
            <a href="https://github.com/joannechou0801" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:joannechou0801@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>

          <a href="/pdf/Joanne_Chou_CV.pdf" download="Joanne_Chou_CV.pdf" className="download-cv">
            {language === 'zh' ? '下載履歷' : 'Download Resume'}
          </a>
        </div>

        <div className="right-panel">
          <div className="subtitle-badge">
            <h1 className="profile-subtitle">{content[language].subtitle}</h1>
            <a
              href="https://www.credly.com/badges/b7662e2a-b786-4e9c-804e-bd32e565f4ca/public_url"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AWS Certified Cloud Practitioner"
            >
              <img
                src="/images/homepage/aws-cloud-practitioner-badge.png"
                alt="AWS Certified Cloud Practitioner"
                className="cert-badge-inline"
              />
            </a>
          </div>
          <p className="profile-intro">{content[language].intro}</p>
        </div>
      </div>

      <AboutSection ref={aboutRef} language={language} />
      <SkillsSection ref={skillsRef} language={language} />
      <ProjectsSection ref={projectsRef} language={language} />

      <footer className="footer">
        © 2025 Joanne Chou. All rights reserved.
      </footer>
    </div>
  );
}
