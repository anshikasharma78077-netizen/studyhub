import React, { useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  ChevronRight,
  Filter,
  Sparkles,
  Layers,
  Award,
  CheckCircle2
} from 'lucide-react';
import SubjectIcon from './SubjectIcon';
import './ClassDetailView.css';

export default function ClassDetailView({ classData, onBackHome, onSelectSubject }) {
  const [selectedStream, setSelectedStream] = useState('All');

  if (!classData) return null;

  const hasStreams = Boolean(classData.streams && classData.streams.length > 0);

  // Filter subjects by stream if streams exist
  const filteredSubjects = classData.subjects.filter((subj) => {
    if (!hasStreams || selectedStream === 'All') return true;
    return subj.stream === selectedStream || subj.stream === 'All Streams';
  });

  return (
    <div className="class-detail-page animate-fade">
      {/* Top Breadcrumb & Back Bar */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-container">
          <button className="back-btn" onClick={onBackHome}>
            <ArrowLeft size={16} />
            <span>Back to All Classes</span>
          </button>
          <div className="breadcrumb-path">
            <span className="crumb-link" onClick={onBackHome}>Home</span>
            <ChevronRight size={14} className="crumb-sep" />
            <span className="crumb-active">{classData.title}</span>
          </div>
        </div>
      </div>

      {/* Class Banner Header */}
      <div className="class-hero-banner">
        <div className="container class-hero-content">
          <div className="class-badge-row">
            <span className="hero-level-badge">{classData.level}</span>
            {(classData.id === '10' || classData.id === '12') && (
              <span className="hero-board-badge">
                <Award size={14} /> Official Board Exam Syllabus
              </span>
            )}
          </div>

          <div className="class-hero-main">
            <div className="class-hero-icon-box">
              <span className="hero-digit">{classData.id}</span>
              <span className="hero-th">th</span>
            </div>
            <div className="class-hero-titles">
              <h1 className="class-hero-h1">{classData.title} Study Materials</h1>
              <p className="class-hero-p">{classData.description}</p>
            </div>
          </div>

          {/* Quick Curriculum Facts */}
          <div className="class-meta-ribbon">
            <div className="meta-ribbon-item">
              <BookOpen size={16} />
              <span>{classData.subjects.length} Total Subjects</span>
            </div>
            {hasStreams && (
              <div className="meta-ribbon-item">
                <Layers size={16} />
                <span>3 Streams: Science, Commerce, Humanities</span>
              </div>
            )}
            <div className="meta-ribbon-item">
              <CheckCircle2 size={16} />
              <span>Free Chapter Notes, MCQs & Model Papers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stream Tabs for Senior Secondary Classes (11 & 12) */}
      {hasStreams && (
        <div className="stream-selector-section">
          <div className="container">
            <div className="stream-selector-box">
              <div className="stream-label">
                <Filter size={16} />
                <span>Select Stream:</span>
              </div>
              <div className="stream-buttons-group">
                <button
                  className={`stream-pill-btn ${selectedStream === 'All' ? 'active' : ''}`}
                  onClick={() => setSelectedStream('All')}
                >
                  All Streams ({classData.subjects.length})
                </button>
                {classData.streams.map((stream) => {
                  const streamCount = classData.subjects.filter(
                    (s) => s.stream === stream || s.stream === 'All Streams'
                  ).length;
                  return (
                    <button
                      key={stream}
                      className={`stream-pill-btn ${selectedStream === stream ? 'active' : ''}`}
                      onClick={() => setSelectedStream(stream)}
                    >
                      {stream} ({streamCount})
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Subjects Grid */}
      <div className="container subjects-container">
        <div className="subjects-grid-header">
          <h2 className="subjects-heading">
            {selectedStream !== 'All' ? `${selectedStream} Stream Subjects` : 'All Available Subjects'}
          </h2>
          <span className="subjects-count-badge">
            Showing {filteredSubjects.length} {filteredSubjects.length === 1 ? 'Subject' : 'Subjects'}
          </span>
        </div>

        <div className="subjects-cards-grid">
          {filteredSubjects.map((subject) => (
            <div
              key={subject.id}
              className="subject-card"
              onClick={() => onSelectSubject(subject.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onSelectSubject(subject.id);
                }
              }}
            >
              <div className="subject-card-header">
                <div className="subject-icon-wrap" style={{ backgroundColor: `${subject.themeColor}15`, color: subject.themeColor }}>
                  <SubjectIcon name={subject.icon} size={26} color={subject.themeColor} />
                </div>
                {subject.stream && (
                  <span className={`subject-stream-badge stream-${subject.stream.toLowerCase().replace(/\s+/g, '-')}`}>
                    {subject.stream}
                  </span>
                )}
              </div>

              <h3 className="subject-title">{subject.name}</h3>
              <p className="subject-description">{subject.description}</p>

              <div className="subject-card-footer">
                <span className="chapter-count-tag">
                  <BookOpen size={14} />
                  {subject.chaptersCount || subject.chapters?.length || 10} Chapters
                </span>
                <span className="open-subject-link">
                  View Syllabus & Notes
                  <ChevronRight size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
