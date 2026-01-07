// src/OnlineStudyRoom.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Link を追加
import './OnlineStudyRoom.css';

const OnlineStudyRoom = () => {
  const navigate = useNavigate();
  // ... (タイマーのロジックやデータは変更なし) ...
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(25 * 60);

  useEffect(() => {
    // ... (タイマー処理はそのまま) ...
  }, [isActive, seconds]);

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const members = [
    { id: 1, name: 'ゆうき', task: '数学 I', status: '集中中', icon: '✍️' },
    { id: 2, name: 'あかり', task: '英単語', status: '休憩中', icon: '☕' },
    { id: 3, name: 'たくみ', task: '探究レポート', status: '集中中', icon: '💻' },
  ];

  return (
    <div className="study-room-container">
      <header className="study-header">
        <button onClick={() => navigate(-1)} className="back-btn">&lt; 戻る</button>
        <h1 className="study-title">オンライン自習室</h1>
        <div className="spacer"></div>
      </header>

      {/* タイマーカード */}
      <div className="timer-card">
        <p className="timer-label">FOCUS SESSION</p>
        <div className="timer-display">{formatTime(seconds)}</div>
        <div className="timer-btns">
          <button 
            className={`main-timer-btn ${isActive ? 'stop' : 'start'}`}
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? '一時停止' : '集中をはじめる'}
          </button>
          <button className="reset-btn" onClick={() => {setIsActive(false); setSeconds(25 * 60);}}>
            リセット
          </button>
        </div>
      </div>

      {/* 参加者状況 */}
      <div className="members-section">
        <h3 className="section-title">今の参加メンバー（3名）</h3>
        <div className="members-list">
          {members.map(member => (
            <div key={member.id} className="member-item">
              <span className="member-icon">{member.icon}</span>
              <div className="member-info">
                <span className="member-name">{member.name}</span>
                <span className="member-task">{member.task}</span>
              </div>
              <span className={`member-status ${member.status === '集中中' ? 'focus' : 'rest'}`}>
                {member.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 環境音設定 */}
      <div className="bgm-section">
        <h3 className="section-title">BGM・環境音</h3>
        <div className="bgm-grid">
          <button className="bgm-btn">🤫 静寂</button>
          <button className="bgm-btn">☕ カフェ</button>
          <button className="bgm-btn">🌧️ 雨音</button>
          <button className="bgm-btn">🌳 森</button>
        </div>
      </div>

      {/* --- ▼ 追加：教科別質問への導線 ▼ --- */}
      <div className="question-footer">
        <Link to="/subjects" className="go-to-subjects-btn">
          <span>わからないことがあれば、教科別に質問</span>
          <span className="btn-arrow">→</span>
        </Link>
      </div>
      {/* --- ▲ 追加ここまで ▲ --- */}
    </div>
  );
};

export default OnlineStudyRoom;