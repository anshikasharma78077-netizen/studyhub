import React, { useState } from 'react';
import {
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  Zap,
  FileText,
  Bookmark,
  Printer,
  Share2,
  Check,
  AlertTriangle,
  Clock,
  Sparkles,
  Info,
  Layers
} from 'lucide-react';
import McqPractice from './McqPractice';
import FlashcardsView from './FlashcardsView';
import { getChapterFlashcards } from '../data/coursesData';
import './ChapterDetailView.css';

export default function ChapterDetailView({
  classData,
  subjectData,
  chapterData,
  onBackToSubject,
  onBackToClass,
  onBackHome,
  onSelectChapter,
  isBookmarked = false,
  onToggleBookmark
}) {
  const [activeTab, setActiveTab] = useState('notes'); // 'notes' | 'mcq' | 'important' | 'revision' | 'samplePaper'
  const [copiedLink, setCopiedLink] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!classData || !subjectData || !chapterData) return null;

  const chapters = subjectData.chapters || [];
  const currentChapterIndex = chapters.findIndex((c) => c.id === chapterData.id);
  const prevChapter = currentChapterIndex > 0 ? chapters[currentChapterIndex - 1] : null;
  const nextChapter = currentChapterIndex < chapters.length - 1 ? chapters[currentChapterIndex + 1] : null;

  const handleShareClick = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const flashcards = getChapterFlashcards(chapterData, subjectData.name, classData.title);

  return (
    <div className="chapter-detail-page animate-fade">
      {/* Top Demo Disclaimer Ribbon */}
      <div className="demo-strip no-print">
        <div className="container demo-strip-inner">
          <Info size={15} />
          <span>
            <strong>Demonstration Material:</strong> All study notes, MCQs, and sample question blueprints are curated samples for study and navigation demonstration.
          </span>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="breadcrumb-bar no-print">
        <div className="container breadcrumb-container">
          <button className="back-btn" onClick={onBackToSubject}>
            <ArrowLeft size={16} />
            <span>Back to {subjectData.name} Chapters</span>
          </button>
          <div className="breadcrumb-path">
            <span className="crumb-link" onClick={onBackHome}>Home</span>
            <ChevronRight size={14} className="crumb-sep" />
            <span className="crumb-link" onClick={onBackToClass}>{classData.title}</span>
            <ChevronRight size={14} className="crumb-sep" />
            <span className="crumb-link" onClick={onBackToSubject}>{subjectData.name}</span>
            <ChevronRight size={14} className="crumb-sep" />
            <span className="crumb-active">Chapter {chapterData.number}</span>
          </div>
        </div>
      </div>

      {/* Chapter Workspace Header */}
      <div className="chapter-header-banner">
        <div className="container chapter-header-content">
          <div className="chapter-meta-top">
            <div className="ch-pill-group">
              <span className="ch-pill-class">{classData.title}</span>
              <span className="ch-pill-subject">{subjectData.name}</span>
              {subjectData.stream && (
                <span className="ch-pill-stream">{subjectData.stream}</span>
              )}
              <span className="ch-pill-num">Chapter {chapterData.number}</span>
            </div>

            <div className="chapter-utility-actions no-print">
              <button
                className={`utility-btn bookmark-action ${isBookmarked ? 'bookmarked' : ''}`}
                onClick={() => onToggleBookmark(chapterData.id)}
                title={isBookmarked ? 'Remove Bookmark' : 'Bookmark this chapter'}
              >
                <Bookmark size={16} />
                <span>{isBookmarked ? 'Saved' : 'Save'}</span>
              </button>

              <button
                className={`utility-btn complete-action ${isCompleted ? 'completed' : ''}`}
                onClick={() => setIsCompleted(!isCompleted)}
                title="Mark study status"
              >
                <CheckCircle2 size={16} />
                <span>{isCompleted ? 'Completed' : 'Mark Done'}</span>
              </button>

              <button
                className="utility-btn print-action"
                onClick={handlePrint}
                title="Print or Save as PDF"
              >
                <Printer size={16} />
                <span>Print Notes</span>
              </button>

              <button
                className="utility-btn share-action"
                onClick={handleShareClick}
                title="Copy share link"
              >
                {copiedLink ? <Check size={16} /> : <Share2 size={16} />}
                <span>{copiedLink ? 'Copied!' : 'Share'}</span>
              </button>
            </div>
          </div>

          <h1 className="chapter-h1">{chapterData.title}</h1>
          <p className="chapter-lead">{chapterData.summary}</p>

          <div className="chapter-header-stats">
            <div className="stat-pill">
              <Clock size={14} />
              <span>Est. Study Time: <strong>{chapterData.estimatedTime}</strong></span>
            </div>
            <div className="stat-pill">
              <Sparkles size={14} />
              <span>Difficulty Level: <strong>{chapterData.difficulty}</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Resource Tabs Bar */}
      <div className="resource-tabs-bar no-print">
        <div className="container resource-tabs-container">
          <button
            className={`res-tab-btn ${activeTab === 'notes' ? 'active' : ''}`}
            onClick={() => setActiveTab('notes')}
          >
            <BookOpen size={18} />
            <span>Chapter Notes</span>
          </button>

          <button
            className={`res-tab-btn ${activeTab === 'flashcards' ? 'active' : ''}`}
            onClick={() => setActiveTab('flashcards')}
          >
            <Layers size={18} />
            <span>Flashcards ({flashcards.length})</span>
          </button>

          <button
            className={`res-tab-btn ${activeTab === 'mcq' ? 'active' : ''}`}
            onClick={() => setActiveTab('mcq')}
          >
            <CheckCircle2 size={18} />
            <span>Interactive MCQs ({chapterData.mcqs?.length || 0})</span>
          </button>

          <button
            className={`res-tab-btn ${activeTab === 'important' ? 'active' : ''}`}
            onClick={() => setActiveTab('important')}
          >
            <HelpCircle size={18} />
            <span>Important Questions ({chapterData.importantQuestions?.length || 0})</span>
          </button>

          <button
            className={`res-tab-btn ${activeTab === 'revision' ? 'active' : ''}`}
            onClick={() => setActiveTab('revision')}
          >
            <Zap size={18} />
            <span>Revision Sheet</span>
          </button>

          <button
            className={`res-tab-btn ${activeTab === 'samplePaper' ? 'active' : ''}`}
            onClick={() => setActiveTab('samplePaper')}
          >
            <FileText size={18} />
            <span>Sample Paper</span>
          </button>
        </div>
      </div>

      {/* Main Study Content Area */}
      <main className="container chapter-workspace-body">
        {/* TAB: FLASHCARDS */}
        {activeTab === 'flashcards' && (
          <div className="tab-pane animate-fade">
            <div className="flashcards-pane-header text-center" style={{ marginBottom: '1.75rem', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.6rem', color: 'var(--navy-900)', marginBottom: '0.25rem' }}>
                Interactive Memory Flashcards
              </h2>
              <p style={{ color: 'var(--text-muted)' }}>
                Click any flashcard to flip and test your formula & definition recall before exams.
              </p>
            </div>
            <FlashcardsView
              cards={flashcards}
              chapterTitle={chapterData.title}
              subjectName={subjectData.name}
              className={classData.title}
            />
          </div>
        )}

        {/* TAB 1: CHAPTER NOTES */}
        {activeTab === 'notes' && (
          <div className="tab-pane animate-fade">
            <div className="notes-paper-card">
              <div className="notes-card-header">
                <div>
                  <span className="card-kicker">Comprehensive Study Notes</span>
                  <h2 className="notes-card-title">{chapterData.title} - Concept Overview</h2>
                </div>
                <span className="badge badge-navy">Class {classData.id} • {subjectData.name}</span>
              </div>

              {/* Overview Block */}
              <div className="notes-section-block">
                <h3 className="notes-block-heading">1. Chapter Foundation & Overview</h3>
                <p className="notes-overview-text">{chapterData.notes.overview}</p>
              </div>

              {/* Key Concept Points */}
              <div className="notes-section-block">
                <h3 className="notes-block-heading">2. High-Yield Key Points & Definitions</h3>
                <div className="key-points-grid">
                  {chapterData.notes.keyPoints.map((point, idx) => (
                    <div key={idx} className="key-point-item">
                      <div className="kp-bullet">
                        <Check size={14} />
                      </div>
                      <p className="kp-text">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Formulas / Rules */}
              {chapterData.notes.formulae && chapterData.notes.formulae.length > 0 && (
                <div className="notes-section-block">
                  <h3 className="notes-block-heading">3. Essential Formulas & Mathematical Rules</h3>
                  <div className="formulae-card-deck">
                    {chapterData.notes.formulae.map((formula, idx) => (
                      <div key={idx} className="formula-box">
                        <span className="formula-tag">Formula {idx + 1}</span>
                        <code className="formula-expression">{formula}</code>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Demonstration Disclaimer Note Box */}
              <div className="study-disclaimer-box">
                <div className="sdb-icon">
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <h4>Sample Educational Content Notice</h4>
                  <p>
                    These study notes are created for demonstrative and learning navigation purposes. 
                    For official board examinations, please cross-verify with your NCERT and State Board prescribed textbooks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE MCQS */}
        {activeTab === 'mcq' && (
          <div className="tab-pane animate-fade">
            <div className="mcq-pane-header">
              <div>
                <h2>Interactive Self-Testing MCQs</h2>
                <p>Test your conceptual understanding with instant answer feedback and step-by-step explanations.</p>
              </div>
              <span className="badge badge-navy">Interactive Quiz Mode</span>
            </div>
            <McqPractice mcqs={chapterData.mcqs} chapterTitle={chapterData.title} />
          </div>
        )}

        {/* TAB 3: IMPORTANT QUESTIONS & MODEL ANSWERS */}
        {activeTab === 'important' && (
          <div className="tab-pane animate-fade">
            <div className="qa-pane-header">
              <div>
                <h2>Important Board & Term Questions</h2>
                <p>Frequently asked 3-mark and 5-mark subjective questions with step-by-step model answers.</p>
              </div>
              <span className="badge badge-demo">Sample Solved Bank</span>
            </div>

            <div className="questions-list">
              {chapterData.importantQuestions?.map((item, idx) => (
                <div key={idx} className="question-card">
                  <div className="question-header">
                    <span className="marks-badge">{item.marks} Marks Question</span>
                    <span className="q-index-pill">Question {idx + 1}</span>
                  </div>
                  <h3 className="q-text">{item.question}</h3>
                  <div className="model-answer-box">
                    <div className="answer-header">
                      <Sparkles size={15} />
                      <span>Model Answer & Marking Guidance:</span>
                    </div>
                    <div className="answer-content">
                      {item.answer.split('\\n').map((line, lIdx) => (
                        <p key={lIdx}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: REVISION SHEET */}
        {activeTab === 'revision' && (
          <div className="tab-pane animate-fade">
            <div className="revision-card">
              <div className="rev-header">
                <div>
                  <h2>Rapid Revision Cheat-Sheet</h2>
                  <p>High-yield quick review deck for last-minute exam recall.</p>
                </div>
                <Zap size={28} className="rev-icon" />
              </div>

              <div className="revision-points-grid">
                {chapterData.revisionSheet?.map((item, idx) => (
                  <div key={idx} className="rev-point-card">
                    <span className="rev-point-num">{idx + 1}</span>
                    <p className="rev-point-content">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: SAMPLE PAPER */}
        {activeTab === 'samplePaper' && (
          <div className="tab-pane animate-fade">
            <div className="sample-paper-card">
              <div className="paper-top-strip">
                <span className="paper-badge">Model Question Paper</span>
                <span className="paper-demo-badge">Curriculum Blueprint</span>
              </div>

              <h2 className="paper-title">{chapterData.samplePaper?.paperTitle || 'Unit Assessment Paper'}</h2>
              
              <div className="paper-details-bar">
                <span><strong>Duration:</strong> {chapterData.samplePaper?.duration || '2 Hours'}</span>
                <span>•</span>
                <span><strong>Maximum Marks:</strong> {chapterData.samplePaper?.totalMarks || 40} Marks</span>
                <span>•</span>
                <span><strong>Standard:</strong> Class {classData.id} ({subjectData.name})</span>
              </div>

              <div className="paper-sections-box">
                <h3>Question Paper Structure & Blueprint</h3>
                <ul className="paper-sections-list">
                  {chapterData.samplePaper?.sections?.map((sec, idx) => (
                    <li key={idx} className="paper-sec-item">
                      <CheckCircle2 size={16} className="sec-icon" />
                      <span>{sec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="paper-guidance-box">
                <h4>General Instructions for Students:</h4>
                <ol className="instructions-list">
                  <li>All questions are compulsory according to current exam patterns.</li>
                  <li>Section A questions carry 1 mark each and are objective/multiple choice.</li>
                  <li>Write neat and legible steps for mathematical numericals and scientific derivations.</li>
                  <li>Draw neat labeled diagrams wherever specified.</li>
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* Chapter Bottom Navigation (Prev / Next) */}
        <div className="chapter-bottom-nav no-print">
          {prevChapter ? (
            <button
              className="btn btn-outline nav-chapter-btn"
              onClick={() => onSelectChapter(prevChapter.id)}
            >
              <ChevronLeft size={16} />
              <div className="btn-ch-text">
                <span className="btn-ch-sub">Previous Chapter</span>
                <span className="btn-ch-main">{prevChapter.title}</span>
              </div>
            </button>
          ) : (
            <div></div>
          )}

          {nextChapter && (
            <button
              className="btn btn-primary nav-chapter-btn text-right"
              onClick={() => onSelectChapter(nextChapter.id)}
            >
              <div className="btn-ch-text">
                <span className="btn-ch-sub">Next Chapter</span>
                <span className="btn-ch-main">{nextChapter.title}</span>
              </div>
              <ChevronRight size={16} />
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
