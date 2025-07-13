import React, { useState, forwardRef } from 'react';
import './ProjectsSection.css';

const ProjectsSection = forwardRef(({ language }, ref) => {
  const [activeTab, setActiveTab] = useState('projects');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const content = {
    zh: {
      sectionTitle: '作品集',
      tabs: ['技術開發專案', '研究成果'],
      projectTitles: [
        '雲端影片轉檔平台',
        '個人履歷網站',
        '澳洲職籃球迷互動 App',
        '跨平台筆記應用 App',
      ],
      demoShort: '觀看 Demo',
      demoFull: '觀看完整版',
      researchPlaceholder: '這裡將展示您的研究成果，例如研究論文、獲獎紀錄等內容。',
      certificateTitle: '最佳研究論文獎狀',
      downloadLabel: '下載論文 PDF',
      researchAwardHeading: '2024 最佳研究論文獎 — 澳洲昆士蘭科技大學碩士班',
      researchTitle: 'Analyzing Satisfaction Levels of Recent Information Technology Graduates from Queensland University of Technology',
      researchSummary: '透過問卷調查及統計分析，評估畢業生對課程與職涯準備的滿意度，研究結果促進課程改進。',
      researchAward: '澳洲昆士蘭科技大學電腦科學學院評選為最佳研究論文。',
      researchPdfLink: '/pdf/Research_Paper.pdf',
    },
    en: {
      sectionTitle: 'Projects',
      tabs: ['Technical Projects', 'Research'],
      projectTitles: [
        'Cloud-Based Video Transcoding Platform',
        'Portfolio Website',
        'Australian Pro Basketball Fan Engagement App',
        'Cross-Platform Personal Note-Taking App',
      ],
      demoShort: 'View Demo',
      demoFull: 'View Full Demo',
      researchPlaceholder: 'This section will showcase your research outcomes, such as papers and awards.',
      certificateTitle: 'Best Research Paper Award Certificate',
      downloadLabel: 'Download Thesis PDF',
      researchAwardHeading: '2024 Best Research Paper Award — Queensland University of Technology, Master’s Program',
      researchTitle: 'Title: Analyzing Satisfaction Levels of Recent Information Technology Graduates from Queensland University of Technology',
      researchSummary: 'Summary: Surveyed graduate satisfaction to improve curriculum and career support.',
      researchAward: 'Award: Best Research Paper by the School of Computer Science, Queensland University of Technology in 2024.',
      researchPdfLink: '/pdf/Research_Paper.pdf',
    }
  };

  const shortDemoUrl = 'https://vimeo.com/1096844612?share=copy#t=71.336';
  const fullDemoUrl = 'https://vimeo.com/1096844612?share=copy#t=71.336';

  const totalProjects = 4;

  const handlePrev = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  const handleNext = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % totalProjects);
  };

  const renderProjectCard = (index, isCenter = false) => {
    const title = content[language].projectTitles[index];
    const image = `/images/projectpage/project${index + 1}.jpg`;

    return (
      <div
        key={index}
        className={`hover-card ${index >= 2 ? 'tall-card' : ''} ${isCenter ? 'center-card' : ''}`}
      >
        {index >= 2 ? (
          <div className="mockup-frame">
            <img src={image} alt={`Project ${index + 1}`} className="mockup-screen-image" />
          </div>
        ) : (
          <div className="desktop-mockup-frame">
            <div className="browser-bar">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <img src={image} alt={`Project ${index + 1}`} className="desktop-mockup-image" />
          </div>
        )}
        <div className="hover-card-overlay">
          <div className="hover-card-overlay-content">
            <h3>{title}</h3>
            <div className="hover-card-buttons">
              <a href={shortDemoUrl} target="_blank" rel="noopener noreferrer" className="project-button">
                {content[language].demoShort}
              </a>
              {index === 0 && (
                <a href={fullDemoUrl} target="_blank" rel="noopener noreferrer" className="project-button">
                  {content[language].demoFull}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="projects-section" ref={ref}>
      <h2 className="projects-title">{content[language].sectionTitle}</h2>

      <div className="projects-tab-buttons">
        {['projects', 'research'].map((tab, idx) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {content[language].tabs[idx]}
          </button>
        ))}
      </div>

      {activeTab === 'projects' ? (
        <>
          <div className="carousel-arrow-wrapper">
            <button className="carousel-arrow left" onClick={handlePrev} aria-label="Previous Project">‹</button>
            <button className="carousel-arrow right" onClick={handleNext} aria-label="Next Project">›</button>
          </div>
          <div className="carousel-focus-wrapper">
            <div className="carousel-focus-container">
              {renderProjectCard((currentProjectIndex - 1 + totalProjects) % totalProjects)}
              {renderProjectCard(currentProjectIndex, true)}
              {renderProjectCard((currentProjectIndex + 1) % totalProjects)}
            </div>
          </div>
        </>
      ) : (
        <div className="research-content">
          <div className="research-left">
            <img
              src="/images/projectpage/best_research.jpg"
              alt={content[language].certificateTitle}
              className="certificate-image"
            />
          </div>
          <div className="research-right">
            <h3>{content[language].researchAwardHeading}</h3>
            <p className="research-description">
              <strong>{language === 'zh' ? '論文題目：' : 'Title:'}</strong> {content[language].researchTitle.replace(/^Title: /, '')}<br />
              <strong>{language === 'zh' ? '摘要：' : 'Summary:'}</strong> {content[language].researchSummary.replace(/^(Summary|摘要): /, '')}<br />
              <strong>{language === 'zh' ? '獲獎紀錄：' : 'Award:'}</strong> {content[language].researchAward.replace(/^(Award|獲獎紀錄): /, '')}
            </p>
            <a
              href={content[language].researchPdfLink}
              download
              className="project-button research-download-button"
            >
              {content[language].downloadLabel}
            </a>
          </div>
        </div>
      )}
    </section>
  );
});

export default ProjectsSection;
