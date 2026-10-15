import React from 'react';
import {
  Bookmark,
  X,
  Trash2,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { CLASSES_DATA } from '../data/coursesData';
import './BookmarksModal.css';

export default function BookmarksModal({
  isOpen,
  onClose,
  bookmarkedIds = [],
  onRemoveBookmark,
  onOpenChapter
}) {
  if (!isOpen) return null;

  // Resolve all bookmarked chapters details
  const bookmarkedItems = [];
  CLASSES_DATA.forEach((cls) => {
    cls.subjects.forEach((subj) => {
      subj.chapters.forEach((ch) => {
        if (bookmarkedIds.includes(ch.id)) {
          bookmarkedItems.push({
            chapter: ch,
            subject: subj,
            classItem: cls
          });
        }
      });
    });
  });

  return (
    <div className="bookmarks-modal-overlay" onClick={onClose}>
      <div className="bookmarks-modal-card animate-fade" onClick={(e) => e.stopPropagation()}>
        <div className="bookmarks-header">
          <div className="bookmarks-title-group">
            <Bookmark size={20} className="b-icon" />
            <h3>Saved Chapters ({bookmarkedItems.length})</h3>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="bookmarks-body">
          {bookmarkedItems.length === 0 ? (
            <div className="no-bookmarks">
              <Bookmark size={36} className="empty-b-icon" />
              <h4>No Saved Chapters Yet</h4>
              <p>
                Click the <strong>Save</strong> button on any chapter to bookmark it for fast offline review.
              </p>
            </div>
          ) : (
            <div className="bookmarks-list">
              {bookmarkedItems.map(({ chapter, subject, classItem }) => (
                <div key={chapter.id} className="bookmark-item">
                  <div
                    className="b-info-area"
                    onClick={() => {
                      onOpenChapter(classItem.id, subject.id, chapter.id);
                      onClose();
                    }}
                  >
                    <div className="b-badges">
                      <span className="b-cls-tag">{classItem.title}</span>
                      <span className="b-subj-tag">{subject.name}</span>
                    </div>
                    <h4 className="b-ch-title">CH {chapter.number}: {chapter.title}</h4>
                    <span className="b-time">{chapter.estimatedTime} reading</span>
                  </div>

                  <div className="b-actions">
                    <button
                      className="b-remove-btn"
                      onClick={() => onRemoveBookmark(chapter.id)}
                      title="Remove from saved"
                    >
                      <Trash2 size={16} />
                    </button>
                    <button
                      className="b-open-btn"
                      onClick={() => {
                        onOpenChapter(classItem.id, subject.id, chapter.id);
                        onClose();
                      }}
                      title="Open Chapter"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
