// src/App.jsx

import React, { useState } from 'react';
import './App.css';
import MentorCard from './MentorCard.jsx';
import { mentors, searchTags } from './mockData.js';

// 1. Link をインポート
import { Routes, Route, Link } from 'react-router-dom';
import MentorDetailPage from './MentorDetailPage.jsx';
import './MentorDetailPage.css'; 

// --- ▼ 2. マイページ関連をインポート ▼ ---
import MyPage from './MyPage.jsx';
import './MyPage.css';
// --- ▲ 2. マイページ関連をインポート ▲ ---

import PlanPage from './PlanPage.jsx';
import './PlanPage.css';

import ChatPage from './ChatPage.jsx';
import './ChatPage.css';

// (MentorListPageコンポーネントは変更なし。中身は検索機能など)
const MentorListPage = () => {
  const [activeTags, setActiveTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState("");

  const handleSearchSubmit = () => {
    setSubmittedSearchTerm(searchTerm);
  };
  
  const handleTagClick = (tag) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter(t => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };

  const filteredMentors = mentors.filter(mentor => {
    const tagMatch = activeTags.length === 0 
      ? true 
      : activeTags.every(activeTag => mentor.tags.includes(activeTag));

    const searchTermLower = submittedSearchTerm.toLowerCase().trim();
    
    if (searchTermLower === "") {
      return tagMatch;
    }

    const searchMatch = 
      mentor.name.toLowerCase().includes(searchTermLower) ||
      mentor.affiliation.toLowerCase().includes(searchTermLower) ||
      mentor.tags.some(tag => tag.toLowerCase().includes(searchTermLower));

    return tagMatch && searchMatch;
  });

  return (
    <>
      <header className="app-header">
        {/* --- 3. マイページに戻るボタンを追加 --- */}
        <div className="header-navigation">
          <Link to="/" className="back-to-mypage-button">&lt; マイページ</Link>
        </div>
        {/* ---------------------------------- */}
        
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="名前やキーワードで検索"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearchSubmit();
            }}
          />
          <button className="search-button" onClick={handleSearchSubmit}>
            検索
          </button>
        </div>
        
        <div className="tag-cloud">
          <span 
            className={activeTags.length === 0 ? 'search-tag active' : 'search-tag'}
            onClick={() => setActiveTags([])}
          >
            すべて
          </span>
          {searchTags.map(tag => (
            <span 
              key={tag}
              className={activeTags.includes(tag) ? 'search-tag active' : 'search-tag'}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <main className="mentor-list">
        {filteredMentors.length > 0 ? (
          filteredMentors.map(mentor => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))
        ) : (
          <p className="no-mentors-message">
            該当するメンターが見つかりませんでした。
          </p>
        )}
      </main>
    </>
  );
}


function App() {
  return (
    <div className="app-background">
      <div className="smartphone-container">
        <div className="screen">
          
          <Routes>
            <Route path="/" element={<MyPage />} />
            <Route path="/search" element={<MentorListPage />} />
            <Route path="/mentor/:id" element={<MentorDetailPage />} />
            
            {/* --- ▼ 2. /plan のルートを追加 ▼ --- */}
            <Route path="/plan" element={<PlanPage />} />
            {/* --- ▲ 2. /plan のルートを追加 ▲ --- */}
            <Route path="/chat/:id" element={<ChatPage />} />

          </Routes>

        </div>
      </div>
    </div>
  );
}
export default App;