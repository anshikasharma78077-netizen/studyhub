import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  X,
  BookOpen,
  ArrowRight,
  Sparkles,
  Layers,
  GraduationCap,
  Filter,
  CheckCircle2,
  HelpCircle,
  Zap,
  FileText
} from 'lucide-react';
import { CLASSES_DATA } from '../data/coursesData';
import SubjectIcon from './SubjectIcon';
import './SearchModal.css';

export default function SearchModal({
  isOpen,
  onClose,
  initialQuery = '',
  onSelectChapterResult,
  onSelectSubjectResult,
  onSelectClassResult
}) {
  const [query, setQuery] = useState(initialQuery);
  const [resourceFilter, setResourceFilter] = useState('All');
  const [classFilter, setClassFilter] = useState('All');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen, initialQuery]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  // Search logic
  const results = {
    classes: [],
    subjects: [],
    chapters: []
  };

  if (trimmed.length > 0) {
    CLASSES_DATA.forEach((cls) => {
      if (classFilter !== 'All' && cls.id !== classFilter) return;

      if (
        cls.title.toLowerCase().includes(trimmed) ||
        cls.tagline.toLowerCase().includes(trimmed) ||
        cls.level.toLowerCase().includes(trimmed)
      ) {
        if (resourceFilter === 'All') {
          results.classes.push(cls);
        }
      }

      cls.subjects.forEach((subj) => {
        if (
          subj.name.toLowerCase().includes(trimmed) ||
          subj.description.toLowerCase().includes(trimmed) ||
          (subj.stream && subj.stream.toLowerCase().includes(trimmed))
        ) {
          if (resourceFilter === 'All') {
            results.subjects.push({
              ...subj,
              classId: cls.id,
              className: cls.title
            });
          }
        }

        subj.chapters.forEach((ch) => {
          const matchesText =
            ch.title.toLowerCase().includes(trimmed) ||
            ch.summary.toLowerCase().includes(trimmed) ||
            ch.notes.overview.toLowerCase().includes(trimmed);

          if (matchesText) {
            results.chapters.push({
              ...ch,
              classId: cls.id,
              className: cls.title,
              subjectId: subj.id,
              subjectName: subj.name,
              subjectIcon: subj.icon
            });
          }
        });
      });
    });
  }

  const totalResults =
    results.classes.length + results.subjects.length + results.chapters.length;

  const resourceFilters = [
    { id: 'All', label: 'All Resources' },
    { id: 'Notes', label: 'Notes' },
    { id: 'MCQs', label: 'MCQs' },
    { id: 'Flashcards', label: 'Flashcards' },
    { id: 'Important', label: 'Important Qs' },
    { id: 'Papers', label: 'Sample Papers' }
  ];

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal-container animate-fade" onClick={(e) => e.stopPropagation()}>
        {/* Search Input Bar */}
        <div className="modal-search-header">
          <Search size={22} className="modal-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="modal-search-input"
            placeholder="Search classes, subjects, formulas, or chapters..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button className="clear-search-btn" onClick={() => setQuery('')}>
              <X size={18} />
            </button>
          )}
          <button className="close-modal-btn" onClick={onClose} title="Close search (Esc)">
            Esc
          </button>
        </div>

        {/* Filter Pills Bar */}
        <div className="search-filters-bar">
          <div className="filter-group">
            <span className="filter-group-title">Standard:</span>
            <select
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              className="class-filter-select"
            >
              <option value="All">All Classes (6-12)</option>
              {['6', '7', '8', '9', '10', '11', '12'].map((c) => (
                <option key={c} value={c}>Class {c}</option>
              ))}
            </select>
          </div>

          <div className="resource-pills-list">
            {resourceFilters.map((rf) => (
              <button
                key={rf.id}
                className={`rf-pill-btn ${resourceFilter === rf.id ? 'active' : ''}`}
                onClick={() => setResourceFilter(rf.id)}
              >
                {rf.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Results Body */}
        <div className="modal-search-body">
          {trimmed.length === 0 ? (
            <div className="search-empty-prompt">
              <Sparkles size={36} className="empty-sparkle" />
              <h4>Instant Curriculum Search</h4>
              <p>Type keywords like "Real Numbers", "Gauss Law", "Class 10", "Accountancy", or "Photosynthesis".</p>
              
              <div className="suggested-queries">
                <span className="suggested-label">Suggestions:</span>
                <button onClick={() => setQuery('Class 10')}>Class 10 Board Prep</button>
                <button onClick={() => setQuery('Physics')}>Class 11 & 12 Physics</button>
                <button onClick={() => setQuery('MCQs')}>MCQ Practice</button>
                <button onClick={() => setQuery('Nationalism')}>Nationalism in India</button>
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="search-no-results">
              <p>No study resources found for "<strong>{query}</strong>".</p>
              <span>Try checking spelling or resetting the standard filter.</span>
            </div>
          ) : (
            <div className="search-results-list">
              {/* Classes Results */}
              {results.classes.length > 0 && (
                <div className="result-category-section">
                  <span className="category-title">
                    <GraduationCap size={15} /> Classes ({results.classes.length})
                  </span>
                  <div className="category-items">
                    {results.classes.map((cls) => (
                      <div
                        key={cls.id}
                        className="search-item-card"
                        onClick={() => {
                          onSelectClassResult(cls.id);
                          onClose();
                        }}
                      >
                        <div className="item-digit-box">{cls.id}th</div>
                        <div className="item-details">
                          <h4 className="item-name">{cls.title}</h4>
                          <span className="item-desc">{cls.description}</span>
                        </div>
                        <ArrowRight size={16} className="item-arrow" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Subjects Results */}
              {results.subjects.length > 0 && (
                <div className="result-category-section">
                  <span className="category-title">
                    <Layers size={15} /> Subjects ({results.subjects.length})
                  </span>
                  <div className="category-items">
                    {results.subjects.map((subj) => (
                      <div
                        key={`${subj.classId}-${subj.id}`}
                        className="search-item-card"
                        onClick={() => {
                          onSelectSubjectResult(subj.classId, subj.id);
                          onClose();
                        }}
                      >
                        <div className="item-icon-box">
                          <SubjectIcon name={subj.icon} size={20} color={subj.themeColor} />
                        </div>
                        <div className="item-details">
                          <div className="item-title-row">
                            <h4 className="item-name">{subj.name}</h4>
                            <span className="item-tag">{subj.className}</span>
                            {subj.stream && <span className="item-tag stream-tag">{subj.stream}</span>}
                          </div>
                          <span className="item-desc">{subj.description}</span>
                        </div>
                        <ArrowRight size={16} className="item-arrow" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Chapters Results */}
              {results.chapters.length > 0 && (
                <div className="result-category-section">
                  <span className="category-title">
                    <BookOpen size={15} /> Chapters & Topics ({results.chapters.length})
                  </span>
                  <div className="category-items">
                    {results.chapters.map((ch) => (
                      <div
                        key={`${ch.classId}-${ch.subjectId}-${ch.id}`}
                        className="search-item-card chapter-result-card"
                        onClick={() => {
                          onSelectChapterResult(ch.classId, ch.subjectId, ch.id);
                          onClose();
                        }}
                      >
                        <div className="item-ch-num">CH {ch.number}</div>
                        <div className="item-details">
                          <div className="item-title-row">
                            <h4 className="item-name">{ch.title}</h4>
                            <span className="item-tag">{ch.className}</span>
                            <span className="item-tag subject-tag">{ch.subjectName}</span>
                          </div>
                          <span className="item-desc">{ch.summary}</span>
                        </div>
                        <span className="item-jump-action">Open Materials</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
