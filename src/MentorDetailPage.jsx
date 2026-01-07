// src/MentorDetailPage.jsx

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mentors } from './mockData';
import './MentorDetailPage.css';

const MentorDetailPage = () => {
const { id } = useParams();
const navigate = useNavigate();
const mentor = mentors.find(m => m.id == id);

if (!mentor) {
return (
    <div className="detail-page">
    <p>該当するメンターが見つかりませんでした。</p>
    <button onClick={() => navigate(-1)} className="back-button">
        戻る
    </button>
    </div>
);
}

const affiliationParts = mentor.affiliation.split(' ');
const university = affiliationParts[0];
const lab = affiliationParts.slice(1).join(' ');

return (
<div className="detail-page">
    {/* ( ... 戻るボタンやヘッダー情報は変更なし ... ) */}
    <button onClick={() => navigate(-1)} className="back-button">
    &lt; 戻る
    </button>

    <img src={mentor.imageUrl} alt={mentor.name} className="detail-image" />
    <h1 className="detail-name">{mentor.name}</h1>
    <p className="detail-affiliation">{university}</p>
    <p className="detail-lab">{lab}</p>

    <div className="detail-tags">
    {mentor.tags.map(tag => (
        <span key={tag} className="tag">{tag}</span>
    ))}
    </div>

    {/* --- 詳細情報 --- */}
    <div className="detail-section">
    <h2>自己紹介</h2>
    {/* --- ▼ 変更点 --- */}
    <p>{mentor.introduction}</p>
    {/* --- ▲ 変更点 --- */}
    </div>

    <div className="detail-section">
    <h2>実績</h2>
    {/* --- ▼ 変更点 --- */}
    <ul>
        {/* mentor.achievementsList 配列を map で展開する */}
        {mentor.achievementsList.map((item, index) => (
        <li key={index}>{item}</li>
        ))}
    </ul>
    {/* --- ▲ 変更点 --- */}
    </div>

    <button 
        className="contact-button"
        // onClickイベントで /chat/:id パスに遷移
        onClick={() => navigate(`/chat/${mentor.id}`)} 
    >
        面談をリクエスト
    </button>
</div>
);
};

export default MentorDetailPage;