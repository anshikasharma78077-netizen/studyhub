import React, { useState, useEffect } from 'react';
import {
  Calendar,
  CheckCircle2,
  Circle,
  Plus,
  Trash2,
  Flame,
  Award,
  BookOpen,
  ArrowRight,
  Sparkles,
  Layers,
  Zap,
  Target,
  Clock,
  Bookmark,
  ChevronRight,
  Filter
} from 'lucide-react';
import { CLASSES_DATA, getClassById } from '../data/coursesData';
import SubjectIcon from './SubjectIcon';
import './StudentDashboard.css';

export default function StudentDashboard({
  onSelectClass,
  onSelectSubject,
  onSelectChapter,
  onOpenAiBuddy,
  onOpenSearch,
  bookmarkedIds = []
}) {
  // Student Profile / Active Class Preference
  const [activeClassId, setActiveClassId] = useState(() => {
    return localStorage.getItem('studyhub_active_class') || '10';
  });

  const [selectedStream, setSelectedStream] = useState(() => {
    return localStorage.getItem('studyhub_active_stream') || 'Science';
  });

  // Daily Study Goals State (persisted in localStorage)
  const [dailyGoals, setDailyGoals] = useState(() => {
    const saved = localStorage.getItem('studyhub_daily_goals');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return [
      { id: 1, text: 'Read Class 10 Real Numbers Notes', completed: true },
      { id: 2, text: 'Solve 10 Trigonometry Practice MCQs', completed: false },
      { id: 3, text: 'Review 5 Physics Formula Flashcards', completed: false }
    ];
  });

  const [newGoalText, setNewGoalText] = useState('');
  const [isAddingGoal, setIsAddingGoal] = useState(false);

  useEffect(() => {
    localStorage.setItem('studyhub_daily_goals', JSON.stringify(dailyGoals));
  }, [dailyGoals]);

  useEffect(() => {
    localStorage.setItem('studyhub_active_class', activeClassId);
  }, [activeClassId]);

  useEffect(() => {
    localStorage.setItem('studyhub_active_stream', selectedStream);
  }, [selectedStream]);

  const toggleGoal = (id) => {
    setDailyGoals((prev) =>
      prev.map((g) => (g.id === id ? { ...g, completed: !g.completed } : g))
    );
  };

  const removeGoal = (id) => {
    setDailyGoals((prev) => prev.filter((g) => g.id !== id));
  };

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (!newGoalText.trim()) return;
    setDailyGoals((prev) => [
      ...prev,
      { id: Date.now(), text: newGoalText.trim(), completed: false }
    ]);
    setNewGoalText('');
    setIsAddingGoal(false);
  };

  const completedGoalsCount = dailyGoals.filter((g) => g.completed).length;
  const progressPercent = dailyGoals.length > 0
    ? Math.round((completedGoalsCount / dailyGoals.length) * 100)
    : 0;

  // Active Class Data
  const currentClass = getClassById(activeClassId) || getClassById('10');
  const isSenior = activeClassId === '11' || activeClassId === '12';

  // Filter subjects for the student
  const studentSubjects = currentClass.subjects.filter((subj) => {
    if (!isSenior) return true;
    return subj.stream === selectedStream || subj.stream === 'All Streams';
  });

  return (
    <div className="student-dashboard animate-fade">
      <div className="container dashboard-container">
        {/* Welcome Header */}
        <div className="dashboard-welcome-banner">
          <div className="welcome-text-side">
            <div className="student-badge-row">
              <span className="streak-pill">
                <Flame size={15} className="flame-icon" />
                3-Day Study Streak
              </span>
              <span className="curriculum-pill">CBSE & State Board Prep</span>
            </div>
            <h1 className="welcome-title">
              Welcome to Your <span className="text-gradient">StudyHub Dashboard</span>
            </h1>
            <p className="welcome-subtitle">
              Track daily goals, review your active class subjects, and practice high-yield MCQs & flashcards.
            </p>
          </div>

          {/* Quick Active Class Switcher */}
          <div className="active-class-selector-card">
            <span className="selector-title">My Active Class:</span>
            <div className="class-pills-row">
              {['6', '7', '8', '9', '10', '11', '12'].map((clsId) => (
                <button
                  key={clsId}
                  className={`class-select-pill ${activeClassId === clsId ? 'active' : ''}`}
                  onClick={() => setActiveClassId(clsId)}
                >
                  {clsId}th
                </button>
              ))}
            </div>

            {isSenior && (
              <div className="stream-switch-row">
                <span className="stream-switch-label">Stream:</span>
                {['Science', 'Commerce', 'Humanities'].map((stream) => (
                  <button
                    key={stream}
                    className={`stream-select-pill ${selectedStream === stream ? 'active' : ''}`}
                    onClick={() => setSelectedStream(stream)}
                  >
                    {stream}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Dashboard 2-Column Grid */}
        <div className="dashboard-main-grid">
          {/* LEFT COLUMN: Study Planner & Daily Goals */}
          <div className="dashboard-col planner-col">
            <div className="planner-card">
              <div className="planner-header">
                <div className="planner-title-group">
                  <Target size={20} className="target-icon" />
                  <div>
                    <h2 className="planner-h2">Today's Study Goals</h2>
                    <span className="planner-subtext">Stay consistent every day</span>
                  </div>
                </div>

                <button
                  className="add-goal-btn"
                  onClick={() => setIsAddingGoal(!isAddingGoal)}
                  title="Add new study goal"
                >
                  <Plus size={16} />
                  <span>Add Goal</span>
                </button>
              </div>

              {/* Progress Bar */}
              <div className="planner-progress-box">
                <div className="progress-labels">
                  <span><strong>{completedGoalsCount} of {dailyGoals.length}</strong> Completed</span>
                  <span className="progress-percent">{progressPercent}%</span>
                </div>
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
              </div>

              {/* Add Goal Input Form */}
              {isAddingGoal && (
                <form className="add-goal-form animate-fade" onSubmit={handleAddGoal}>
                  <input
                    type="text"
                    placeholder="e.g. Read 1 chapter notes, Solve 5 MCQs..."
                    value={newGoalText}
                    onChange={(e) => setNewGoalText(e.target.value)}
                    className="goal-input"
                    autoFocus
                  />
                  <div className="form-actions">
                    <button type="button" className="btn btn-outline btn-xs" onClick={() => setIsAddingGoal(false)}>
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary btn-xs" disabled={!newGoalText.trim()}>
                      Save Goal
                    </button>
                  </div>
                </form>
              )}

              {/* Goals Checklist */}
              <div className="goals-checklist">
                {dailyGoals.map((goal) => (
                  <div
                    key={goal.id}
                    className={`goal-item ${goal.completed ? 'completed' : ''}`}
                    onClick={() => toggleGoal(goal.id)}
                  >
                    <button className="goal-checkbox" aria-label="Toggle Goal">
                      {goal.completed ? (
                        <CheckCircle2 size={20} className="check-done" />
                      ) : (
                        <Circle size={20} className="check-todo" />
                      )}
                    </button>
                    <span className="goal-text">{goal.text}</span>
                    <button
                      className="goal-del-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeGoal(goal.id);
                      }}
                      title="Delete goal"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Quick AI Study Buddy Card */}
              <div className="ai-assistant-card" onClick={onOpenAiBuddy}>
                <div className="ai-card-content">
                  <div className="ai-icon-wrap">
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <h3>Have an Exam Doubt?</h3>
                    <p>Ask StudyBuddy AI for instant concept explanations, mnemonics & formulas.</p>
                  </div>
                </div>
                <button className="ai-trigger-pill">
                  Ask AI Tutor <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Active Class Subjects & Shortcuts */}
          <div className="dashboard-col subjects-col">
            <div className="dashboard-subjects-box">
              <div className="box-header-row">
                <div>
                  <h2 className="box-h2">
                    Class {activeClassId} Subjects
                    {isSenior && <span className="stream-tag-header">({selectedStream})</span>}
                  </h2>
                  <span className="box-sub">Click any subject to open chapters & study materials</span>
                </div>

                <button
                  className="view-full-class-btn"
                  onClick={() => onSelectClass(activeClassId)}
                >
                  <span>Full Syllabus</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* Quick Subjects Grid */}
              <div className="dash-subjects-grid">
                {studentSubjects.map((subj) => (
                  <div
                    key={subj.id}
                    className="dash-subject-card"
                    onClick={() => onSelectSubject(activeClassId, subj.id)}
                  >
                    <div
                      className="dash-subj-icon"
                      style={{ backgroundColor: `${subj.themeColor}15`, color: subj.themeColor }}
                    >
                      <SubjectIcon name={subj.icon} size={24} color={subj.themeColor} />
                    </div>
                    <div className="dash-subj-info">
                      <h4 className="dash-subj-name">{subj.name}</h4>
                      <span className="dash-subj-count">{subj.chaptersCount || subj.chapters?.length} Chapters</span>
                    </div>
                    <ChevronRight size={16} className="dash-subj-arrow" />
                  </div>
                ))}
              </div>

              {/* Quick Tools Grid */}
              <div className="quick-study-tools-banner">
                <span className="tools-title">Quick Study Tools:</span>
                <div className="tools-row">
                  <button
                    className="tool-btn"
                    onClick={() => {
                      // Navigate to first subject chapter
                      const firstSubj = studentSubjects[0];
                      if (firstSubj && firstSubj.chapters?.[0]) {
                        onSelectChapter(activeClassId, firstSubj.id, firstSubj.chapters[0].id);
                      } else {
                        onSelectClass(activeClassId);
                      }
                    }}
                  >
                    <Zap size={16} className="tool-icon-rev" />
                    <span>Flashcards & Notes</span>
                  </button>

                  <button
                    className="tool-btn"
                    onClick={onOpenSearch}
                  >
                    <BookOpen size={16} className="tool-icon-book" />
                    <span>Search Materials</span>
                  </button>

                  <button
                    className="tool-btn"
                    onClick={onOpenAiBuddy}
                  >
                    <Sparkles size={16} className="tool-icon-ai" />
                    <span>AI Doubt Solver</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
