import React, { useState } from 'react';
import {
  Search,
  Sparkles,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  FileText,
  Layers,
  ArrowRight
} from 'lucide-react';
import './HeroSearch.css';

export default function HeroSearch({ onSearchSubmit, onQuickChipClick }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearchSubmit(searchTerm.trim());
    }
  };

  const quickPills = [
    { label: 'Class 10 Trigonometry', query: 'Trigonometry' },
    { label: 'Class 12 Electric Charges', query: 'Electric Charges' },
    { label: 'Class 11 Accountancy', query: 'Accountancy' },
    { label: 'Photosynthesis (Class 7)', query: 'Nutrition in Plants' },
    { label: 'Class 9 Polynomials', query: 'Polynomials' },
    { label: 'Revolt of 1857 & Constitution', query: 'Constitution' }
  ];

  return (
    <section className="hero-section">
      <div className="hero-bg-glow"></div>
      <div className="container hero-container">
        {/* Curricular Trust Badge */}
        <div className="hero-badge-wrapper animate-fade">
          <span className="hero-pill-badge">
            <Sparkles size={14} className="hero-sparkle-icon" />
            Designed for CBSE & Indian State Board Curricula
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="hero-title animate-fade">
          Free Quality Study Resources for <br />
          <span className="hero-gradient-text">Classes 6 to 12</span> Across India
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle animate-fade">
          Empowering Indian school students with structured Chapter Notes, Interactive MCQs, 
          High-Yield Revision Sheets, and Sample Papers across Science, Commerce & Humanities.
        </p>

        {/* Prominent Search Bar */}
        <div className="hero-search-box animate-fade">
          <form className="hero-search-form" onSubmit={handleFormSubmit}>
            <div className="search-input-wrapper">
              <Search className="search-field-icon" size={22} />
              <input
                type="text"
                className="hero-search-input"
                placeholder="Search topics, chapters, or subjects (e.g. Real Numbers, Gauss Law, Accountancy)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search study materials"
              />
            </div>
            <button type="submit" className="hero-search-submit-btn">
              <span>Find Materials</span>
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Quick Search Chips */}
          <div className="quick-search-chips">
            <span className="chips-title">Popular Topics:</span>
            <div className="chips-list">
              {quickPills.map((pill, idx) => (
                <button
                  key={idx}
                  className="quick-chip"
                  type="button"
                  onClick={() => {
                    setSearchTerm(pill.query);
                    onQuickChipClick(pill.query);
                  }}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="hero-features-grid">
          <div className="feature-stat-card">
            <div className="feature-stat-icon-wrap icon-blue">
              <Layers size={22} />
            </div>
            <div className="feature-stat-info">
              <div className="stat-number">7 Classes</div>
              <div className="stat-desc">Complete coverage from Class 6 to 12</div>
            </div>
          </div>

          <div className="feature-stat-card">
            <div className="feature-stat-icon-wrap icon-sky">
              <BookOpen size={22} />
            </div>
            <div className="feature-stat-info">
              <div className="stat-number">3 Senior Streams</div>
              <div className="stat-desc">Science, Commerce & Humanities in 11-12</div>
            </div>
          </div>

          <div className="feature-stat-card">
            <div className="feature-stat-icon-wrap icon-green">
              <CheckCircle2 size={22} />
            </div>
            <div className="feature-stat-info">
              <div className="stat-number">Interactive MCQs</div>
              <div className="stat-desc">Instant score checking & explanations</div>
            </div>
          </div>

          <div className="feature-stat-card">
            <div className="feature-stat-icon-wrap icon-amber">
              <FileText size={22} />
            </div>
            <div className="feature-stat-info">
              <div className="stat-number">Sample Papers</div>
              <div className="stat-desc">Board model papers with blueprints</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
