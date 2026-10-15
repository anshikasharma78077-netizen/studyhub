import React from 'react';
import {
  GraduationCap,
  Heart,
  BookOpen,
  Sparkles,
  Info,
  Layers,
  Award
} from 'lucide-react';
import './Footer.css';

export default function Footer({ onSelectClass, onSelectHome, onOpenDisclaimer }) {
  const classes = ['6', '7', '8', '9', '10', '11', '12'];

  return (
    <footer className="studyhub-footer">
      <div className="container footer-container">
        {/* Top Footer Grid */}
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand" onClick={onSelectHome}>
              <div className="footer-brand-icon">
                <GraduationCap size={22} />
              </div>
              <span className="footer-brand-name">
                Study<span className="accent">Hub</span>
              </span>
            </div>
            <p className="footer-brand-desc">
              India's free open educational study platform for students from Class 6 to Class 12. 
              Comprehensive chapter notes, interactive quizzes, revision sheets, and board exam models.
            </p>
            <div className="footer-trust-tag">
              <Sparkles size={14} />
              <span>Free Educational Demonstration</span>
            </div>
          </div>

          {/* Classes 6 - 10 */}
          <div className="footer-col">
            <h4 className="footer-col-title">Foundational Classes</h4>
            <ul className="footer-links-list">
              {classes.slice(0, 5).map((cls) => (
                <li key={cls}>
                  <button
                    className="footer-link-btn"
                    onClick={() => onSelectClass(cls)}
                  >
                    Class {cls} Materials
                    {cls === '10' && <span className="foot-badge">Board Prep</span>}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Senior Secondary & Streams */}
          <div className="footer-col">
            <h4 className="footer-col-title">Senior Secondary (11 & 12)</h4>
            <ul className="footer-links-list">
              <li>
                <button className="footer-link-btn" onClick={() => onSelectClass('11')}>
                  Class 11 (All Streams)
                </button>
              </li>
              <li>
                <button className="footer-link-btn" onClick={() => onSelectClass('12')}>
                  Class 12 (Board & CUET)
                  <span className="foot-badge">Senior Board</span>
                </button>
              </li>
              <li className="footer-stream-subhead">Senior Streams Available:</li>
              <li className="stream-bullet">🧪 Science (PCM & PCB)</li>
              <li className="stream-bullet">📊 Commerce (Accountancy, BST, Eco)</li>
              <li className="stream-bullet">🏛️ Humanities (History, Pol Sci, Geo)</li>
            </ul>
          </div>

          {/* Resources & Disclaimers */}
          <div className="footer-col">
            <h4 className="footer-col-title">Study Resources</h4>
            <ul className="footer-links-list">
              <li className="resource-item">📘 Chapter Notes & Formulas</li>
              <li className="resource-item">🎯 Interactive Practice MCQs</li>
              <li className="resource-item">⭐ High-Yield Important Qs</li>
              <li className="resource-item">⚡ 10-Minute Revision Sheets</li>
              <li className="resource-item">📄 Sample Papers & Blueprints</li>
              <li className="footer-disclaimer-link">
                <button className="disclaimer-btn-link" onClick={onOpenDisclaimer}>
                  <Info size={14} /> View Demo Notice & Syllabi Info
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} StudyHub. Built for Indian School Students (Classes 6 to 12).
          </p>
          <div className="footer-compliance-text">
            All materials are demonstration educational samples mapped to CBSE & State Board standards.
          </div>
        </div>
      </div>
    </footer>
  );
}
