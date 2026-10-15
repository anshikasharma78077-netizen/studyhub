import React from 'react';
import {
  AlertTriangle,
  X,
  CheckCircle,
  FileCheck,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import './DemoNoticeModal.css';

export default function DemoNoticeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="demo-modal-overlay" onClick={onClose}>
      <div className="demo-modal-card animate-fade" onClick={(e) => e.stopPropagation()}>
        <div className="demo-modal-header">
          <div className="demo-header-badge">
            <AlertTriangle size={20} className="demo-warn-icon" />
            <h3>Educational Demonstration Notice</h3>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="demo-modal-body">
          <div className="demo-intro-callout">
            <p>
              <strong>StudyHub</strong> is an interactive educational demonstration platform designed for students from Class 6 to Class 12 across India.
            </p>
          </div>

          <div className="demo-points-list">
            <div className="demo-point">
              <CheckCircle size={18} className="dp-icon" />
              <div>
                <h4>Sample Demonstration Content</h4>
                <p>
                  All chapter summaries, sample notes, MCQs, and practice questions provided on this website are illustrative sample materials curated for platform demonstration and conceptual study preview.
                </p>
              </div>
            </div>

            <div className="demo-point">
              <ShieldCheck size={18} className="dp-icon" />
              <div>
                <h4>No Invented Official PDF Links</h4>
                <p>
                  In compliance with academic integrity guidelines, StudyHub does not host or claim to provide official government examination papers or proprietary textbooks. All downloadable or print materials are formatted mock representations.
                </p>
              </div>
            </div>

            <div className="demo-point">
              <FileCheck size={18} className="dp-icon" />
              <div>
                <h4>Curriculum Reference</h4>
                <p>
                  Content is structured in accordance with the National Education Policy (NEP) and typical CBSE and State Board syllabi for Mathematics, Science, Social Science, Commerce, and Humanities.
                </p>
              </div>
            </div>
          </div>

          <div className="demo-modal-footer">
            <button className="btn btn-primary" onClick={onClose}>
              I Understand & Proceed to StudyHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
