import React, { useState } from 'react';
import {
  ArrowLeft,
  ChevronRight,
  BookOpen,
  CheckCircle,
  HelpCircle,
  FileText,
  Clock,
  Sparkles,
  Search,
  Zap,
  Bookmark
} from 'lucide-react';
import SubjectIcon from './SubjectIcon';
import './SubjectDetailView.css';

export default function SubjectDetailView({
  classData,
  subjectData,
  onBackToClass,
  onBackHome,
  onSelectChapter,
  bookmarkedChapterIds = []
}) {
  const [chapterSearch, setChapterSearch] = useState('');

  if (!classData || !subjectData) return null;

  const chapters = subjectData.chapters || [];

  const filteredChapters = chapters.filter((ch) =>
    ch.title.toLowerCase().includes(chapterSearch.toLowerCase()) ||
    ch.summary.toLowerCase().includes(chapterSearch.toLowerCase())
  );

  return (
    <div className="subject-detail-page animate-fade">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-container">
          <button className="back-btn" onClick={onBackToClass}>
            <ArrowLeft size={16} />
            <span>Back to {classData.title} Subjects</span>
          </button>
          <div className="breadcrumb-path">
            <span className="crumb-link" onClick={onBackHome}>Home</span>
            <ChevronRight size={14} className="crumb-sep" />
            <span className="crumb-link" onClick={onBackToClass}>{classData.title}</span>
            <ChevronRight size={14} className="crumb-sep" />
            <span className="crumb-active">{subjectData.name}</span>
          </div>
        </div>
      </div>

      {/* Subject Header Banner */}
      <div className="subject-header-banner">
        <div className="container subject-header-content">
          <div className="subject-title-row">
            <div className="subject-hero-icon-box" style={{ backgroundColor: `${subjectData.themeColor}25`, borderColor: subjectData.themeColor }}>
              <SubjectIcon name={subjectData.icon} size={32} color={subjectData.themeColor} />
            </div>
            <div className="subject-title-text">
              <div className="subject-badges-meta">
                <span className="class-tag">{classData.title}</span>
                {subjectData.stream && (
                  <span className="stream-tag">{subjectData.stream} Stream</span>
                )}
                <span className="syllabus-tag">CBSE / State Boards</span>
              </div>
              <h1 className="subject-h1">{subjectData.name} Syllabus & Chapters</h1>
              <p className="subject-p">{subjectData.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chapters Section */}
      <div className="container chapters-container">
        {/* Search & Filter Header */}
        <div className="chapters-filter-header">
          <div className="chapters-heading-block">
            <h2 className="chapters-heading">Curated Chapters & Study Modules</h2>
            <p className="chapters-subtitle">
              Each chapter includes concise concepts, self-testing MCQs, high-frequency board questions, and formula sheets.
            </p>
          </div>

          <div className="chapter-search-box">
            <Search size={18} className="search-box-icon" />
            <input
              type="text"
              placeholder="Search chapters or topics..."
              value={chapterSearch}
              onChange={(e) => setChapterSearch(e.target.value)}
              className="chapter-search-input"
            />
          </div>
        </div>

        {/* Chapters List */}
        {filteredChapters.length === 0 ? (
          <div className="no-chapters-found">
            <HelpCircle size={40} className="empty-icon" />
            <h3>No chapters matched "{chapterSearch}"</h3>
            <p>Try searching with another keyword or clear the search input.</p>
            <button className="btn btn-outline" onClick={() => setChapterSearch('')}>
              Clear Search
            </button>
          </div>
        ) : (
          <div className="chapters-list">
            {filteredChapters.map((ch) => {
              const isBookmarked = bookmarkedChapterIds.includes(ch.id);

              return (
                <div
                  key={ch.id}
                  className="chapter-item-card"
                  onClick={() => onSelectChapter(ch.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      onSelectChapter(ch.id);
                    }
                  }}
                >
                  {/* Left Chapter Number Box */}
                  <div className="ch-number-badge">
                    <span className="ch-label">CH</span>
                    <span className="ch-num">{ch.number}</span>
                  </div>

                  {/* Chapter Core Info */}
                  <div className="ch-info-body">
                    <div className="ch-meta-row">
                      <span className={`difficulty-badge diff-${ch.difficulty.toLowerCase()}`}>
                        {ch.difficulty}
                      </span>
                      <span className="ch-time-badge">
                        <Clock size={13} />
                        {ch.estimatedTime}
                      </span>
                      {isBookmarked && (
                        <span className="ch-saved-tag">
                          <Bookmark size={12} /> Saved
                        </span>
                      )}
                    </div>

                    <h3 className="ch-title">{ch.title}</h3>
                    <p className="ch-summary">{ch.summary}</p>

                    {/* Resources Available Pills */}
                    <div className="ch-resources-pill-row">
                      <span className="res-pill res-notes">
                        <BookOpen size={13} /> Notes
                      </span>
                      <span className="res-pill res-mcq">
                        <CheckCircle size={13} /> {ch.mcqs?.length || 5} MCQs
                      </span>
                      <span className="res-pill res-qa">
                        <HelpCircle size={13} /> Important Qs
                      </span>
                      <span className="res-pill res-rev">
                        <Zap size={13} /> Revision Sheet
                      </span>
                      <span className="res-pill res-paper">
                        <FileText size={13} /> Model Paper
                      </span>
                    </div>
                  </div>

                  {/* Right Action */}
                  <div className="ch-action-column">
                    <button className="btn btn-accent ch-open-btn">
                      <span>Study Now</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
