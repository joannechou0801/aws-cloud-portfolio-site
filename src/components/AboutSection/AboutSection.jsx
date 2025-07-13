import { forwardRef } from 'react';
import './AboutSection.css';

const AboutSection = forwardRef(({ language }, ref) => {
  const content = {
    zh: {
      sectionTitle: '簡介',
      educationTitle: '學歷',
      education: [
        '澳洲昆士蘭科技大學 資訊科技碩士',
        '文藻外語大學 英語主修'
      ],
      experienceTitle: '經歷',
      experience: [
        '昆士蘭科技大學資訊碩士「2024 最佳研究論文獎」',
        '澳洲職業籃球隊球迷互動 App 開發合作案核心成員',
        '具備3年以上海外求學及工作經驗，擅長跨文化溝通'
      ],
      attributesTitle: '個人特質',
      attributes: [
        '系統思考、邏輯清晰，善於簡化複雜概念',
        '積極主動，熱衷於雲端、自動化與技術探索',
        '熟悉跨文化環境，具備海外工作與英語溝通經驗',
        '重視團隊合作與品質管理，具備獨立作業與責任感'
      ]
    },
    en: {
      sectionTitle: 'About Me',
      educationTitle: 'Academic Background',
      education: [
        'Master of Information Technology, QUT, Australia',
        'BA in English, Wenzao Ursuline University of Languages'
      ],
      experienceTitle: 'Experience',
      experience: [
        'QUT Master of IT "2024 Best Research Paper Award"',
        'Core team member in the development of a fan engagement app for the Brisbane Bullets basketball team',
        'Over 3 years of overseas study and work experience; skilled in cross-cultural communication'
      ],
      attributesTitle: 'Personal Attributes',
      attributes: [
        'Systematic thinker with clear logic and ability to simplify complexity',
        'Proactive and passionate about cloud, automation, and technical exploration',
        'Experienced in multicultural settings with overseas work and English communication',
        'Team-oriented with strong quality focus, independence, and accountability'
      ]
    }
  };

  const c = content[language];

  return (
    <section ref={ref} className={`about-section lang-${language}`}>
      <div className="about-section__title-container">
        <h2 className="about-section__title">{c.sectionTitle}</h2>
      </div>

      <div className="about-section__content">
        <div className="about-section__column">
          <h3 className="about-section__subtitle">{c.educationTitle}</h3>
          <ul className="about-section__list">
            {c.education.map((edu, idx) => (
              <li key={idx} className="about-section__list-item">{edu}</li>
            ))}
          </ul>

          <h3 className="about-section__subtitle">{c.experienceTitle}</h3>
          <ul className="about-section__list">
            {c.experience.map((exp, idx) => (
              <li key={idx} className="about-section__list-item">{exp}</li>
            ))}
          </ul>
        </div>

        <div className="about-section__column">
          <h3 className="about-section__subtitle">{c.attributesTitle}</h3>
          <ul className="about-section__list">
            {c.attributes.map((attr, idx) => (
              <li key={idx} className="about-section__list-item about-section__attributes-list-item">{attr}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
