// src/MentorCard.jsx

import React, { useState } from 'react'; // useState をインポート
import { Link } from 'react-router-dom'; // Link コンポーネントをインポート

const MentorCard = ({ mentor }) => {
  // --- 機能変更点: ここから ---
  // 「いいね」されたかどうかの状態 (初期値: false)
const [isLiked, setIsLiked] = useState(false);
// 「いいね」の数 (初期値: propsで受け取った数)
const [likeCount, setLikeCount] = useState(mentor.interested);

// アイコンがクリックされたときの処理
const handleLikeToggle = () => {
if (isLiked) {
    // すでに「いいね」していた場合
    setIsLiked(false);
    setLikeCount(likeCount - 1); // カウントを減らす
} else {
    // まだ「いいね」していない場合
    setIsLiked(true);
    setLikeCount(likeCount + 1); // カウントを増やす
}
};
// --- 機能変更点: ここまで ---

// 大学名とそれ以外を分離
const affiliationParts = mentor.affiliation.split(' ');
const university = affiliationParts[0];
const lab = affiliationParts.slice(1).join(' ');

return (
<div className="mentor-card">
    <div className="mentor-card-main">
    {/* --- UI変更点: 写真 --- */}
    <img 
        src={mentor.imageUrl} 
        alt={mentor.name} 
        className="mentor-image" 
    />

    <div className="mentor-info">
        <h3>{mentor.name}</h3>
        <p className="mentor-affiliation">{university}</p>
        <p className="mentor-lab">{lab}</p>
        
        <div className="mentor-tags">
        {mentor.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
        ))}
        </div>
    </div>
    </div>

    <div className="mentor-footer">
    {/* --- UI変更点: 実績アイコンと気になる機能 --- */}
    <div className="mentor-stats">
        <span className="stat-item">
        🏆
        <span>実績: {mentor.achievements}人</span>
        </span>
        <span 
        className="stat-item stat-like" 
        onClick={handleLikeToggle} // クリックイベントを追加
        role="button"
        >
        {/* isLiked の状態によってアイコンが変わる */}
        <span className={isLiked ? 'like-icon is-liked' : 'like-icon'}>
            {isLiked ? '❤️' : '🤍'}
        </span>
        <span>
            気になる: {likeCount}人 
        </span>
        </span>
    </div>
    
    {/* --- UI変更点: 詳細ボタン --- */}
    <Link 
        to={`/mentor/${mentor.id}`} // 2. 遷移先のURLを指定
        className="detail-button"   // 3. CSSはそのまま使う
    >
    詳細
    </Link>
    </div>
</div>
);
};

export default MentorCard;