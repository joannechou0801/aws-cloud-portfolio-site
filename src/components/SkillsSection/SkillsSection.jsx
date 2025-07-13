import React, { forwardRef } from 'react';
import './SkillsSection.css'; // 新增這行：引入樣式表

const SkillsSection = forwardRef(({ language }, ref) => {
  const content = {
    zh: {
      sectionTitle: '程式技能',
      skills: [
        {
          title: '前端開發',
          image: '/images/skillspage/frontend.png',
          label: 'React / React Native',
          description: '具備基礎前端開發能力，曾完成多個學術專案與作品。',
        },
        {
          title: 'AWS 雲端技術',
          image: '/images/skillspage/aws.png',
          label: 'AWS',
          description: '具備 AWS 架構與開發經驗，持有 Cloud Practitioner 證照，並持續進修架構師等進階技能。',
        },
        {
          title: '版本控制與自動化',
          image: '/images/skillspage/git.png',
          label: 'Git / Basic CI',
          description: '具基本 Git 版本控制經驗，曾於多個專案中實作協作與程式管理。',
        },
      ],
    },
    en: {
      sectionTitle: 'Technical Skills',
      skills: [
        {
          title: 'Front-End Development',
          image: '/images/skillspage/frontend.png',
          label: 'React / React Native',
          description: 'Basic front-end development experience from academic projects.',
        },
        {
          title: 'AWS Cloud Technologies',
          image: '/images/skillspage/aws.png',
          label: 'AWS',
          description: 'Experience in AWS architecture and development; Cloud Practitioner certified.',
        },
        {
          title: 'Version Control & Automation',
          image: '/images/skillspage/git.png',
          label: 'Git / Basic CI',
          description: 'Basic experience with Git version control; used in multiple academic and collaborative projects.',
        },
      ],
    },
  };

  const c = content[language];

  return (
    <section
      ref={ref}
      style={{
        padding: '7rem 3rem 8rem',
        backgroundColor: '#f7f7f7',
        borderBottom: '1px solid #ccc',
      }}
    >
      <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '2.5rem', textAlign: 'center' }}>
        {c.sectionTitle}
      </h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
        {c.skills.map((skill, idx) => (
          <div className="skill-card" key={idx}>
            <img
              src={skill.image}
              alt={skill.label}
              style={{ width: 90, height: 90, marginBottom: '0.2rem' }}
            />
            <h3>{skill.title}</h3>
            <p className="label">{skill.label}</p>
            <p className="description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default SkillsSection;
