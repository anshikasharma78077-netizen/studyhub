import React, { useState } from 'react';
import {
  GraduationCap,
  Bookmark,
  Search,
  Menu,
  X,
  Info,
  Sun,
  Moon,
  Type,
  LayoutDashboard,
  Sparkles,
  Layers
} from 'lucide-react';
import './Navbar.css';

export default function Navbar({
  onSelectHome,
  onSelectClass,
  onOpenBookmarks,
  onOpenDisclaimer,
  onOpenSearch,
  onOpenAiBuddy,
  onToggleDashboard,
  isDashboardActive = false,
  theme = 'light',
  onToggleTheme,
  isLargeText = false,
  onToggleLargeText,
  bookmarksCount = 0,
  activeClassId = null
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const classesList = ['6', '7', '8', '9', '10', '11', '12'];

  const handleClassClick = (id) => {
    onSelectClass(id);
    setMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    onSelectHome();
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container container">
        {/* Brand Logo */}
        <div className="navbar-brand" onClick={handleHomeClick} role="button" tabIndex={0}>
          <div className="brand-icon-wrapper">
            <GraduationCap className="brand-icon" size={24} />
          </div>
          <div className="brand-text">
            <span className="brand-title">Study<span className="brand-accent">Hub</span></span>
            <span className="brand-badge">India • Classes 6-12</span>
          </div>
        </div>

        {/* Desktop Quick Nav Tabs & Classes */}
        <nav className="desktop-nav">
          <button
            className={`dashboard-nav-tab ${isDashboardActive ? 'active' : ''}`}
            onClick={onToggleDashboard}
            title="Open Student Dashboard & Daily Goals"
          >
            <LayoutDashboard size={16} />
            <span>My Dashboard</span>
          </button>

          <div className="classes-pill-group">
            <span className="pill-group-label">Classes:</span>
            {classesList.map((cls) => (
              <button
                key={cls}
                className={`class-pill-btn ${activeClassId === cls && !isDashboardActive ? 'active' : ''}`}
                onClick={() => handleClassClick(cls)}
                title={`Explore Class ${cls} Materials`}
              >
                {cls}th
              </button>
            ))}
          </div>
        </nav>

        {/* Right Action Buttons */}
        <div className="navbar-actions">
          {/* Ask AI StudyBuddy Trigger */}
          <button
            className="ai-navbar-btn"
            onClick={onOpenAiBuddy}
            title="Ask StudyBuddy AI Tutor"
          >
            <Sparkles size={16} className="ai-spark-icon" />
            <span className="btn-label-desktop">AI Tutor</span>
          </button>

          {/* Search Trigger */}
          <button
            className="action-icon-btn search-trigger"
            onClick={onOpenSearch}
            title="Search notes, MCQs & subjects"
            aria-label="Search StudyHub"
          >
            <Search size={17} />
            <span className="search-text-hint">Search...</span>
            <kbd className="search-kbd-hint">Ctrl+K</kbd>
          </button>

          {/* Bookmarks Counter */}
          <button
            className="action-icon-btn bookmark-btn"
            onClick={onOpenBookmarks}
            title="View Saved Chapters"
            aria-label="Saved Chapters"
          >
            <Bookmark size={17} />
            <span className="btn-label-desktop">Saved</span>
            {bookmarksCount > 0 && (
              <span className="bookmark-counter-pill">{bookmarksCount}</span>
            )}
          </button>

          {/* Light / Dark Mode Toggle */}
          <button
            className="action-icon-btn theme-toggle-btn"
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Accessible Font Size Adjuster */}
          <button
            className={`action-icon-btn text-size-toggle ${isLargeText ? 'active-text-size' : ''}`}
            onClick={onToggleLargeText}
            title={isLargeText ? 'Switch to Standard Text' : 'Switch to Large Readable Text'}
            aria-label="Toggle Text Size"
          >
            <Type size={16} />
            <span className="text-size-tag">{isLargeText ? 'A+' : 'A'}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade">
          <div className="mobile-drawer-inner">
            <button
              className={`mobile-dashboard-link ${isDashboardActive ? 'active' : ''}`}
              onClick={() => {
                onToggleDashboard();
                setMobileMenuOpen(false);
              }}
            >
              <LayoutDashboard size={18} />
              <span>Student Dashboard & Daily Planner</span>
            </button>

            <button
              className="mobile-ai-link"
              onClick={() => {
                onOpenAiBuddy();
                setMobileMenuOpen(false);
              }}
            >
              <Sparkles size={18} />
              <span>Ask StudyBuddy AI (Instant Doubts)</span>
            </button>

            <div className="mobile-section-title">Jump to Class:</div>
            <div className="mobile-classes-grid">
              {classesList.map((cls) => (
                <button
                  key={cls}
                  className={`mobile-class-btn ${activeClassId === cls && !isDashboardActive ? 'active' : ''}`}
                  onClick={() => handleClassClick(cls)}
                >
                  Class {cls}
                  {cls === '10' && <span className="mobile-tag">Board</span>}
                  {(cls === '11' || cls === '12') && <span className="mobile-tag">Streams</span>}
                </button>
              ))}
            </div>

            <div className="mobile-actions-list">
              <button
                className="mobile-action-item"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }}
              >
                <Search size={18} /> Search All Chapters
              </button>
              <button
                className="mobile-action-item"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookmarks();
                }}
              >
                <Bookmark size={18} /> Saved Chapters ({bookmarksCount})
              </button>
              <div className="mobile-toggles-row">
                <button
                  className="mobile-toggle-btn"
                  onClick={onToggleTheme}
                >
                  {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
                  <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
                <button
                  className="mobile-toggle-btn"
                  onClick={onToggleLargeText}
                >
                  <Type size={17} />
                  <span>{isLargeText ? 'Standard Font' : 'Large Font'}</span>
                </button>
              </div>
              <button
                className="mobile-action-item"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDisclaimer();
                }}
              >
                <Info size={18} /> Demonstration Material Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
