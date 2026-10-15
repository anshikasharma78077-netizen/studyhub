import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSearch from './components/HeroSearch';
import ClassGrid from './components/ClassGrid';
import ClassDetailView from './components/ClassDetailView';
import SubjectDetailView from './components/SubjectDetailView';
import ChapterDetailView from './components/ChapterDetailView';
import StudentDashboard from './components/StudentDashboard';
import StudyBuddyAiModal from './components/StudyBuddyAiModal';
import SearchModal from './components/SearchModal';
import BookmarksModal from './components/BookmarksModal';
import DemoNoticeModal from './components/DemoNoticeModal';
import Footer from './components/Footer';
import {
  CLASSES_DATA,
  getClassById,
  getSubjectById,
  getChapterById
} from './data/coursesData';
import { Sparkles, LayoutDashboard, Grid } from 'lucide-react';
import './App.css';

export default function App() {
  // Navigation states
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'dashboard' | 'class' | 'subject' | 'chapter'
  const [selectedClassId, setSelectedClassId] = useState(null);
  const [selectedSubjectId, setSelectedSubjectId] = useState(null);
  const [selectedChapterId, setSelectedChapterId] = useState(null);

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInitialQuery, setSearchInitialQuery] = useState('');
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [isAiBuddyOpen, setIsAiBuddyOpen] = useState(false);

  // Theme state (Light / Dark)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('studyhub_theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('studyhub_theme', theme);
    } catch (e) {
      /* ignore */
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Accessible Font Size (Standard / Large)
  const [isLargeText, setIsLargeText] = useState(() => {
    return localStorage.getItem('studyhub_large_text') === 'true';
  });

  useEffect(() => {
    if (isLargeText) {
      document.body.classList.add('accessible-large-text');
    } else {
      document.body.classList.remove('accessible-large-text');
    }
    try {
      localStorage.setItem('studyhub_large_text', String(isLargeText));
    } catch (e) {
      /* ignore */
    }
  }, [isLargeText]);

  const handleToggleLargeText = () => {
    setIsLargeText((prev) => !prev);
  };

  // Bookmarks persistence
  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    try {
      const saved = localStorage.getItem('studyhub_bookmarks');
      return saved ? JSON.parse(saved) : ['c10-math-ch1', 'c12-phy-ch1'];
    } catch {
      return ['c10-math-ch1', 'c12-phy-ch1'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('studyhub_bookmarks', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.warn('Could not persist bookmarks', e);
    }
  }, [bookmarkedIds]);

  // Global Ctrl+K / Cmd+K search shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigation handlers
  const handleGoHome = () => {
    setCurrentView('home');
    setSelectedClassId(null);
    setSelectedSubjectId(null);
    setSelectedChapterId(null);
    scrollToTop();
  };

  const handleToggleDashboardView = () => {
    if (currentView === 'dashboard') {
      setCurrentView('home');
    } else {
      setCurrentView('dashboard');
    }
    scrollToTop();
  };

  const handleSelectClass = (classId) => {
    setSelectedClassId(String(classId));
    setSelectedSubjectId(null);
    setSelectedChapterId(null);
    setCurrentView('class');
    scrollToTop();
  };

  const handleSelectSubject = (subjectId) => {
    setSelectedSubjectId(subjectId);
    setSelectedChapterId(null);
    setCurrentView('subject');
    scrollToTop();
  };

  const handleSelectChapter = (chapterId) => {
    setSelectedChapterId(chapterId);
    setCurrentView('chapter');
    scrollToTop();
  };

  const handleOpenChapterDirect = (classId, subjectId, chapterId) => {
    setSelectedClassId(String(classId));
    setSelectedSubjectId(subjectId);
    setSelectedChapterId(chapterId);
    setCurrentView('chapter');
    scrollToTop();
  };

  const handleSearchSubmit = (term) => {
    setSearchInitialQuery(term);
    setIsSearchOpen(true);
  };

  const handleToggleBookmark = (chapterId) => {
    setBookmarkedIds((prev) =>
      prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  // Resolved current data objects
  const currentClassData = selectedClassId ? getClassById(selectedClassId) : null;
  const currentSubjectData =
    selectedClassId && selectedSubjectId
      ? getSubjectById(selectedClassId, selectedSubjectId)
      : null;
  const currentChapterData =
    selectedClassId && selectedSubjectId && selectedChapterId
      ? getChapterById(selectedClassId, selectedSubjectId, selectedChapterId)
      : null;

  return (
    <div className="studyhub-app">
      {/* Top Demo Banner */}
      <div className="demo-banner">
        <span>
          🎓 <strong>StudyHub India:</strong> Free educational study companion for Classes 6 to 12.
          Demonstration notes, flashcards, MCQs, and model papers mapped to CBSE curricula.
        </span>
      </div>

      {/* Main Sticky Navbar */}
      <Navbar
        onSelectHome={handleGoHome}
        onSelectClass={handleSelectClass}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
        onOpenSearch={() => {
          setSearchInitialQuery('');
          setIsSearchOpen(true);
        }}
        onOpenAiBuddy={() => setIsAiBuddyOpen(true)}
        onToggleDashboard={handleToggleDashboardView}
        isDashboardActive={currentView === 'dashboard'}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        isLargeText={isLargeText}
        onToggleLargeText={handleToggleLargeText}
        bookmarksCount={bookmarkedIds.length}
        activeClassId={selectedClassId}
      />

      {/* Dynamic Views */}
      <main className="main-content-flow">
        {/* VIEW 1: HOME (Hero + Switcher + Class Cards) */}
        {currentView === 'home' && (
          <>
            <HeroSearch
              onSearchSubmit={handleSearchSubmit}
              onQuickChipClick={(query) => {
                setSearchInitialQuery(query);
                setIsSearchOpen(true);
              }}
            />

            {/* Quick Switcher Strip for Students */}
            <div className="home-mode-bar">
              <div className="container home-mode-inner">
                <div className="mode-toggle-group">
                  <button
                    className="mode-btn mode-btn-dash"
                    onClick={() => setCurrentView('dashboard')}
                  >
                    <LayoutDashboard size={16} />
                    <span>Open My Student Planner & Goals</span>
                  </button>
                  <button
                    className="mode-btn mode-btn-ai"
                    onClick={() => setIsAiBuddyOpen(true)}
                  >
                    <Sparkles size={16} />
                    <span>Ask StudyBuddy AI</span>
                  </button>
                </div>
              </div>
            </div>

            <ClassGrid onSelectClass={handleSelectClass} />
          </>
        )}

        {/* VIEW 2: STUDENT DASHBOARD & PLANNER */}
        {currentView === 'dashboard' && (
          <StudentDashboard
            onSelectClass={handleSelectClass}
            onSelectSubject={(classId, subjId) => {
              setSelectedClassId(String(classId));
              setSelectedSubjectId(subjId);
              setCurrentView('subject');
              scrollToTop();
            }}
            onSelectChapter={handleOpenChapterDirect}
            onOpenAiBuddy={() => setIsAiBuddyOpen(true)}
            onOpenSearch={() => {
              setSearchInitialQuery('');
              setIsSearchOpen(true);
            }}
            bookmarkedIds={bookmarkedIds}
          />
        )}

        {/* VIEW 3: CLASS DETAIL VIEW */}
        {currentView === 'class' && currentClassData && (
          <ClassDetailView
            classData={currentClassData}
            onBackHome={handleGoHome}
            onSelectSubject={handleSelectSubject}
          />
        )}

        {/* VIEW 4: SUBJECT DETAIL VIEW */}
        {currentView === 'subject' && currentClassData && currentSubjectData && (
          <SubjectDetailView
            classData={currentClassData}
            subjectData={currentSubjectData}
            onBackToClass={() => setCurrentView('class')}
            onBackHome={handleGoHome}
            onSelectChapter={handleSelectChapter}
            bookmarkedChapterIds={bookmarkedIds}
          />
        )}

        {/* VIEW 5: CHAPTER DETAIL & STUDY RESOURCES */}
        {currentView === 'chapter' &&
          currentClassData &&
          currentSubjectData &&
          currentChapterData && (
            <ChapterDetailView
              classData={currentClassData}
              subjectData={currentSubjectData}
              chapterData={currentChapterData}
              onBackToSubject={() => setCurrentView('subject')}
              onBackToClass={() => setCurrentView('class')}
              onBackHome={handleGoHome}
              onSelectChapter={handleSelectChapter}
              isBookmarked={bookmarkedIds.includes(currentChapterData.id)}
              onToggleBookmark={handleToggleBookmark}
            />
          )}
      </main>

      {/* Floating Action Button for StudyBuddy AI Tutor */}
      <button
        className="studybuddy-floating-btn"
        onClick={() => setIsAiBuddyOpen(true)}
        title="Open StudyBuddy AI Tutor"
      >
        <div className="floating-icon-wrap">
          <Sparkles size={16} />
        </div>
        <span>Ask StudyBuddy AI</span>
        <span className="floating-pulse-badge"></span>
      </button>

      {/* Global Modals */}
      <StudyBuddyAiModal
        isOpen={isAiBuddyOpen}
        onClose={() => setIsAiBuddyOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        initialQuery={searchInitialQuery}
        onSelectClassResult={handleSelectClass}
        onSelectSubjectResult={(classId, subjId) => {
          setSelectedClassId(String(classId));
          setSelectedSubjectId(subjId);
          setCurrentView('subject');
          scrollToTop();
        }}
        onSelectChapterResult={handleOpenChapterDirect}
      />

      <BookmarksModal
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarkedIds={bookmarkedIds}
        onRemoveBookmark={handleToggleBookmark}
        onOpenChapter={handleOpenChapterDirect}
      />

      <DemoNoticeModal
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
      />

      {/* Footer */}
      <Footer
        onSelectClass={handleSelectClass}
        onSelectHome={handleGoHome}
        onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
      />
    </div>
  );
}
