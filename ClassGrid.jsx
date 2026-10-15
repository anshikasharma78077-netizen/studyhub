import React from 'react';
import {
  BookOpen,
  ArrowRight,
  GraduationCap,
  Sparkles,
  Layers,
  Award,
  ChevronRight
} from 'lucide-react';
import { CLASSES_DATA } from '../data/coursesData';
import './ClassGrid.css';

export default function ClassGrid({ onSelectClass }) {
  return (
    <section className="class-grid-section" id="classes-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <GraduationCap size={16} />
            <span>Select Your Standard</span>
          </div>
          <h2 className="section-title">
            Choose Your Class to Access Study Materials
          </h2>
          <p className="section-subtitle">
            Curated chapter notes, interactive practice questions, formulas, and model papers mapped 
            precisely to Indian school curricula.
          </p>
        </div>

        {/* 7 Class Cards Grid */}
        <div className="classes-grid">
          {CLASSES_DATA.map((cls) => {
            const isSenior = cls.id === '11' || cls.id === '12';
            const isBoard = cls.id === '10' || cls.id === '12';

            return (
              <div
                key={cls.id}
                className={`class-card ${isSenior ? 'class-card-senior' : ''} ${isBoard ? 'class-card-board' : ''}`}
                onClick={() => onSelectClass(cls.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onSelectClass(cls.id);
                  }
                }}
              >
                {/* Top Badge row */}
                <div className="card-top-row">
                  <span className="class-stage-badge">
                    {cls.level}
                  </span>
                  {isBoard && (
                    <span className="class-board-badge">
                      <Award size={13} />
                      Board Exam
                    </span>
                  )}
                  {isSenior && !isBoard && (
                    <span className="class-streams-badge">
                      <Layers size={13} />
                      3 Streams
                    </span>
                  )}
                </div>

                {/* Big Class Number Identifier */}
                <div className="card-class-number-wrap">
                  <div className="class-big-digit">
                    {cls.id}
                    <span className="class-th">th</span>
                  </div>
                  <div className="class-header-text">
                    <h3 className="class-card-title">{cls.title}</h3>
                    <span className="class-card-tagline">{cls.tagline}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="class-card-desc">{cls.description}</p>

                {/* Streams or Subjects Tags */}
                <div className="card-highlights">
                  {cls.streams ? (
                    <div className="streams-list">
                      <span className="highlight-label">Streams:</span>
                      {cls.streams.map((stream, idx) => (
                        <span key={idx} className="stream-chip">
                          {stream}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="subjects-preview-list">
                      <span className="highlight-label">Subjects:</span>
                      {cls.subjects.map((subj) => (
                        <span key={subj.id} className="subject-chip">
                          {subj.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className="class-card-footer">
                  <span className="materials-count-text">
                    <BookOpen size={14} />
                    {cls.subjects.length} Major Subjects
                  </span>
                  <div className="open-class-btn">
                    <span>Explore</span>
                    <ArrowRight size={16} className="btn-arrow-icon" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
