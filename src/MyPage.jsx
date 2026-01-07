// src/MyPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './MyPage.css'; // 専用のCSSをインポート
import { mentors } from './mockData'; // 担当メンター情報を取得するため

// -----------------------------------------------------
// 小さな「担当メンターカード」コンポーネント (MyPage内だけで使用)
// -----------------------------------------------------
const MentorLinkCard = ({ mentor, role }) => {
return (
// クリックしたら詳細ページに飛ぶ
<Link to={`/mentor/${mentor.id}`} className="mentor-link-card">
    <img 
    src={mentor.imageUrl} 
    alt={mentor.name} 
    className="mentor-link-image" 
    />
    <div className="mentor-link-info">
    <span className="mentor-link-role">{role}</span>
    <p className="mentor-link-name">{mentor.name}</p>
    </div>
    <span className="arrow-icon-small">›</span>
</Link>
);
};

// -----------------------------------------------------
// マイページ本体
// -----------------------------------------------------
const MyPage = () => {
  // mockDataからデモ用のメンターデータを取得
  // (実際はログインユーザー情報から取得する)
const primaryMentor = mentors.find(m => m.id === 2);
const secondaryMentor = mentors.find(m => m.id === 1);

return (
<div className="mypage-container">
    
    {/* 1. ヘッダーロゴ */}
    <header className="mypage-header">
    <img src="/logo.png" alt="IdeaLab Logo" className="logo-img" />
    </header>

    {/* 2. ユーザープロフィール */}
    <section className="user-profile-card">
    <img src="/user-icon.jpeg" alt="Your Icon" className="user-icon" />
    <div className="user-info">
        <p className="user-greeting">こんにちは！</p>
        <h2 className="user-name">ユーザー さん</h2>
    </div>
    </section>

    {/* 3. 担当メンター */}
    <section className="mentor-section">
    <h3>あなたの担当メンター</h3>
    <div className="mentor-card-list">
        {primaryMentor && (
        <MentorLinkCard mentor={primaryMentor} role="Generalメンター" />
        )}
        {secondaryMentor && (
        <MentorLinkCard mentor={secondaryMentor} role="Specialメンター" />
        )}
    </div>
    </section>

    {/* 4. アクションボタン */}
    <section className="action-menu">
    <Link to="/search" className="action-button primary">
        <span>メンターを探す</span>
        <span className="arrow-icon">→</span>
    </Link>
    <Link to="/plan" className="action-button secondary">
        <span>探究を計画する</span>
        <span className="arrow-icon">→</span>
    </Link>
    </section>

</div>
);
};

export default MyPage;