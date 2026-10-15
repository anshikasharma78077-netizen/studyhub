import React, { useState } from 'react';
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Lightbulb,
  Award,
  Layers
} from 'lucide-react';
import './FlashcardsView.css';

export default function FlashcardsView({
  cards = [],
  chapterTitle = '',
  subjectName = '',
  className = ''
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState([]);
  const [deck, setDeck] = useState(cards);

  if (!cards || cards.length === 0) {
    return (
      <div className="flashcards-empty">
        <HelpCircle size={36} />
        <h4>No Flashcards Generated</h4>
        <p>This chapter does not have flashcards available yet.</p>
      </div>
    );
  }

  const currentCard = deck[currentIndex] || deck[0];
  const isMastered = masteredIds.includes(currentCard.id);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % deck.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + deck.length) % deck.length);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleToggleMastered = (id) => {
    setMasteredIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
  };

  const masteryPercent = Math.round((masteredIds.length / deck.length) * 100);

  return (
    <div className="flashcards-wrapper animate-fade">
      {/* Top Header & Progress */}
      <div className="flashcards-header-bar">
        <div className="deck-info">
          <span className="deck-title-badge">
            <Layers size={14} /> Flashcard Deck
          </span>
          <span className="deck-progress-text">
            Card <strong>{currentIndex + 1}</strong> of <strong>{deck.length}</strong>
          </span>
        </div>

        <div className="deck-mastery-wrap">
          <div className="mastery-counter">
            <Award size={15} />
            <span>Mastered: <strong>{masteredIds.length}/{deck.length}</strong> ({masteryPercent}%)</span>
          </div>
          <button className="deck-shuffle-btn" onClick={handleShuffle} title="Shuffle Flashcards">
            <Shuffle size={15} />
            <span>Shuffle</span>
          </button>
        </div>
      </div>

      {/* Interactive 3D Flip Card */}
      <div className="flashcard-scene" onClick={handleFlip}>
        <div className={`flashcard-object ${isFlipped ? 'is-flipped' : ''}`}>
          {/* Card Front */}
          <div className="flashcard-face flashcard-front">
            <div className="card-face-top">
              <span className="card-category-pill">
                {currentCard.category || 'Core Concept'}
              </span>
              <span className="card-tap-hint">
                <RotateCw size={13} /> Click to Flip
              </span>
            </div>

            <div className="card-face-center">
              <span className="card-prompt-label">Concept / Question</span>
              <h3 className="card-front-title">{currentCard.front}</h3>
            </div>

            <div className="card-face-bottom">
              {currentCard.hint && (
                <div className="card-hint-row">
                  <Lightbulb size={14} className="hint-icon" />
                  <span>{currentCard.hint}</span>
                </div>
              )}
              {isMastered && (
                <span className="card-mastered-tag">
                  <CheckCircle2 size={14} /> Mastered
                </span>
              )}
            </div>
          </div>

          {/* Card Back */}
          <div className="flashcard-face flashcard-back">
            <div className="card-face-top">
              <span className="card-category-pill pill-back">
                <Sparkles size={13} /> Detailed Answer & Explanation
              </span>
              <span className="card-tap-hint">
                <RotateCw size={13} /> Click to Flip Back
              </span>
            </div>

            <div className="card-face-center">
              <div className="card-back-content">
                {currentCard.back}
              </div>
            </div>

            <div className="card-face-bottom">
              <span className="card-source-tag">StudyHub NCERT / Board High-Yield</span>
              {isMastered && (
                <span className="card-mastered-tag">
                  <CheckCircle2 size={14} /> Mastered
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Card Controls Bar */}
      <div className="flashcard-controls">
        <button
          className="btn btn-outline control-btn"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          title="Previous card"
        >
          <ChevronLeft size={18} />
          <span>Previous</span>
        </button>

        <button
          className="btn btn-primary flip-trigger-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleFlip();
          }}
        >
          <RotateCw size={16} />
          <span>{isFlipped ? 'Show Front' : 'Reveal Answer'}</span>
        </button>

        <button
          className={`btn ${isMastered ? 'btn-accent' : 'btn-outline'} master-btn`}
          onClick={(e) => {
            e.stopPropagation();
            handleToggleMastered(currentCard.id);
          }}
          title="Mark card as mastered"
        >
          <CheckCircle2 size={16} />
          <span>{isMastered ? 'Mastered!' : 'Mark Mastered'}</span>
        </button>

        <button
          className="btn btn-outline control-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          title="Next card"
        >
          <span>Next</span>
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="flashcard-keyboard-tips">
        <span>💡 Tip: Click anywhere on the card to flip between Question and Answer.</span>
      </div>
    </div>
  );
}
