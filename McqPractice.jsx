import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Sparkles,
  Award,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import MascotAvatar from './mascots/MascotIllustrations';
import './McqPractice.css';

export default function McqPractice({ mcqs = [], chapterTitle, onCorrectAnswer }) {
  const [userAnswers, setUserAnswers] = useState({}); // { [questionIndex]: selectedOptionIndex }
  const [showExplanation, setShowExplanation] = useState({}); // { [questionIndex]: boolean }
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  if (!mcqs || mcqs.length === 0) {
    return (
      <div className="mcq-empty-state">
        <HelpCircle size={36} />
        <p>No practice MCQs available for this chapter at the moment.</p>
      </div>
    );
  }

  const currentQ = mcqs[activeQuestionIndex];
  const selectedOption = userAnswers[activeQuestionIndex];
  const isAnswered = selectedOption !== undefined;

  const handleSelectOption = (optIndex) => {
    if (isAnswered) return; // Prevent re-selection once answered
    setUserAnswers((prev) => ({
      ...prev,
      [activeQuestionIndex]: optIndex
    }));
    setShowExplanation((prev) => ({
      ...prev,
      [activeQuestionIndex]: true
    }));

    if (optIndex === currentQ.correctAnswer && onCorrectAnswer) {
      onCorrectAnswer();
    }
  };

  const handleReset = () => {
    setUserAnswers({});
    setShowExplanation({});
    setActiveQuestionIndex(0);
  };

  // Calculate score
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = Object.entries(userAnswers).reduce((acc, [qIdx, ansIdx]) => {
    const q = mcqs[Number(qIdx)];
    return q && q.correctAnswer === ansIdx ? acc + 1 : acc;
  }, 0);

  const isCompleted = answeredCount === mcqs.length;

  return (
    <div className="mcq-practice-container">
      {/* Top Practice Bar */}
      <div className="mcq-top-bar">
        <div className="mcq-progress-info">
          <span className="mcq-step-text">
            Question {activeQuestionIndex + 1} of {mcqs.length}
          </span>
          <div className="mcq-progress-track">
            <div
              className="mcq-progress-bar"
              style={{ width: `${((activeQuestionIndex + 1) / mcqs.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="mcq-score-counter">
          <Award size={16} />
          <span>Score: <strong>{correctCount}</strong> / {answeredCount}</span>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="mcq-card animate-fade" key={activeQuestionIndex}>
        <div className="mcq-q-header">
          <span className="q-pill">Q{activeQuestionIndex + 1}</span>
          <h3 className="mcq-question-text">{currentQ.question}</h3>
        </div>

        {/* Options List */}
        <div className="mcq-options-list">
          {currentQ.options.map((option, optIdx) => {
            const isSelected = selectedOption === optIdx;
            const isCorrect = optIdx === currentQ.correctAnswer;

            let optionClass = 'mcq-option-btn';
            if (isAnswered) {
              if (isCorrect) {
                optionClass += ' option-correct';
              } else if (isSelected) {
                optionClass += ' option-wrong';
              } else {
                optionClass += ' option-disabled';
              }
            } else if (isSelected) {
              optionClass += ' option-selected';
            }

            return (
              <button
                key={optIdx}
                className={optionClass}
                onClick={() => handleSelectOption(optIdx)}
                disabled={isAnswered}
              >
                <span className="opt-letter">
                  {String.fromCharCode(65 + optIdx)}
                </span>
                <span className="opt-text">{option}</span>
                {isAnswered && isCorrect && (
                  <CheckCircle2 size={18} className="opt-feedback-icon icon-success" />
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <XCircle size={18} className="opt-feedback-icon icon-danger" />
                )}
              </button>
            );
          })}
        </div>

        {/* Answer Explanation Box */}
        {showExplanation[activeQuestionIndex] && (
          <div className="mcq-explanation-box animate-fade">
            <div className="explanation-header">
              <Sparkles size={16} />
              <span>Explanation & Key Concept</span>
            </div>
            <p className="explanation-text">{currentQ.explanation}</p>
          </div>
        )}

        {/* Mascot Encouraging Feedback */}
        {isAnswered && (
          <div className={`mcq-mascot-cheer ${selectedOption === currentQ.correctAnswer ? '' : 'mcq-mascot-encourage'} animate-fade`}>
            <MascotAvatar
              character={selectedOption === currentQ.correctAnswer ? 'robo' : 'ollie'}
              size="sm"
              state={selectedOption === currentQ.correctAnswer ? 'celebrating' : 'idle'}
              animated={true}
            />
            <div>
              {selectedOption === currentQ.correctAnswer ? (
                <span><strong>Robo cheers:</strong> Outstanding! That answer is 100% correct! Keep it up! ⚡</span>
              ) : (
                <span><strong>Ollie reminds:</strong> Nice try! Take a moment to read the concept explanation above—every mistake is a learning step! 🦉</span>
              )}
            </div>
          </div>
        )}

        {/* Question Footer Controls */}
        <div className="mcq-nav-footer">
          <button
            className="btn btn-outline btn-sm"
            onClick={() => setActiveQuestionIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeQuestionIndex === 0}
          >
            <ChevronLeft size={16} />
            Previous
          </button>

          <div className="q-dots-nav">
            {mcqs.map((_, idx) => {
              const answered = userAnswers[idx] !== undefined;
              const correct = answered && userAnswers[idx] === mcqs[idx].correctAnswer;
              let dotClass = 'q-dot';
              if (idx === activeQuestionIndex) dotClass += ' dot-active';
              if (answered) {
                dotClass += correct ? ' dot-correct' : ' dot-wrong';
              }

              return (
                <button
                  key={idx}
                  className={dotClass}
                  onClick={() => setActiveQuestionIndex(idx)}
                  title={`Jump to Question ${idx + 1}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <button
            className="btn btn-primary btn-sm"
            onClick={() => setActiveQuestionIndex((prev) => Math.min(mcqs.length - 1, prev + 1))}
            disabled={activeQuestionIndex === mcqs.length - 1}
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Completion Summary Card when all answered */}
      {isCompleted && (
        <div className="quiz-summary-card animate-fade">
          <div className="summary-left">
            <div className="summary-mascot-avatar">
              <MascotAvatar
                character={correctCount === mcqs.length ? 'robo' : 'ollie'}
                size="md"
                state="celebrating"
                animated={true}
              />
            </div>
            <div>
              <h4>{correctCount === mcqs.length ? 'Flawless Victory!' : 'Practice Completed!'}</h4>
              <p>
                You scored <strong>{correctCount} out of {mcqs.length}</strong> (
                {Math.round((correctCount / mcqs.length) * 100)}%)
              </p>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                {correctCount === mcqs.length
                  ? 'Robo says: Perfect score! Your conceptual foundation is rock-solid! 🚀'
                  : 'Ollie says: Great practice session! Consistent testing builds board exam confidence! ⭐'}
              </span>
            </div>
          </div>
          <button className="btn btn-outline" onClick={handleReset}>
            <RotateCcw size={16} />
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
}
