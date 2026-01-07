// src/ChatPage.jsx

import { useState } from 'react';
// --- ▼ 変更点 ▼ ---
import { useParams, useNavigate } from 'react-router-dom';
import { mentors } from './mockData.js'; // メンターデータをインポート
import './ChatPage.css';
// --- ▲ 変更点 ▲ ---

// --- ▼ 変更点（ユーザーアイコン） ▼ ---
const UserIcon = () => (
<div className="icon-placeholder">
    {/* ↓ publicフォルダ内のご自身のアイコンパスに変更してください
    (例: /user-icon.png や /images/profile.jpg など) 
    */}
    <img 
    src="/user-icon.jpeg" // ユーザーが変更する前提のパス
    alt="あなたのアイコン" 
    className="icon-image" 
    />
</div>
);
// --- ▲ 変更点（ユーザーアイコン） ▲ ---


// --- ▼ 変更点（メンターアイコン） ▼ ---
// mentorオブジェクトを受け取り、画像を表示するコンポーネントに変更
const MentorIcon = ({ mentor }) => (
<div className="icon-placeholder">
{/* publicフォルダのパス (例: /assets/mentor1.jpg) がそのまま使える */}
<img 
    src={mentor.imageUrl} 
    alt={mentor.name} 
    className="icon-image" 
/>
</div>
);
// --- ▲ 変更点（メンターアイコン） ▲ ---


export default function ChatPage() {
const [messages, setMessages] = useState([]);
const [inputValue, setInputValue] = useState('');
const [isMentorReplying, setIsMentorReplying] = useState(false);

// --- ▼ 変更点（フックとデータ取得） ▼ ---
const navigate = useNavigate(); // 「戻る」ために使用
const { id } = useParams(); // URLから :id を取得

// :id に一致するメンターを mockData から検索
const mentor = mentors.find(m => m.id == id);

// (handleSubmit 関数は変更なし)
const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isMentorReplying) return;

    // 1. これから追加する *前* の、ユーザー送信済みメッセージ数を数える
const userMessageCount = messages.filter(
    (msg) => msg.sender === 'user'
).length;

// 2. 返信メッセージを
let mentorReplyText = '';
if (userMessageCount === 0) {
    // ユーザーの1回目の送信 (カウントが0)
    mentorReplyText = `${mentor.name}です。こんにちは。面談リクエストありがとうございます。ご希望の日時はいかがでしょうか？`;
} else if (userMessageCount === 1) {
    // ユーザーの2回目の送信 (カウントが1)
    mentorReplyText = '承知いたしました。日程を調整しますので、少々お待ちください。';
} else if (userMessageCount === 2) {
    // ユーザーの3回目の送信 (カウントが2)
    mentorReplyText = 'ありがとうございます。11月19日17時によろしくお願いいたします。';
}
else {
    // ユーザーの3回目以降の送信
    mentorReplyText = '（現在メンターが確認中です...）';
}

// 3. ユーザーのメッセージを追加
const userMessage = { id: Date.now(), sender: 'user', text: inputValue };
setMessages((prev) => [...prev, userMessage]);
setInputValue('');
setIsMentorReplying(true); 

// 4. setTimeout の中で、上で決めた返信メッセージを使う
setTimeout(() => {
    const mentorReply = {
    id: Date.now() + 1,
    sender: 'mentor',
    text: mentorReplyText, // ここで動的なテキストを使用
    };
    setMessages((prev) => [...prev, mentorReply]);
    setIsMentorReplying(false); 
}, 1500);
};

// メンターが見つからない場合のガード処理
if (!mentor) {
return (
    <div className="chat-window">
    <div className="chat-header">
        <button onClick={() => navigate(-1)} className="chat-back-button">&lt;</button>
        <h2>エラー</h2>
        <div className="header-spacer"></div>
    </div>
    <div className="chat-messages">
        <p style={{ padding: '1rem', textAlign: 'center' }}>
        該当するメンターが見つかりませんでした。
        </p>
    </div>
    </div>
);
}
// --- ▲ 変更点（フックとデータ取得） ▲ ---


return (
<div className="chat-window">
    
    {/* --- ▼ 変更点（ヘッダー） ▼ --- */}
    <div className="chat-header">
    <button 
        onClick={() => navigate(-1)} // navigate(-1) で「戻る」
        className="chat-back-button"
    >
        &lt;
    </button>
    <h2>{mentor.name}</h2> {/* メンターの名前に変更 */}
    <div className="header-spacer"></div> {/* 中央揃えのためのスペーサー */}
    </div>
    {/* --- ▲ 変更点（ヘッダー） ▲ --- */}

    {/* 1. チャット欄 (メッセージ一覧) */}
    <div className="chat-messages">
    {messages.map((msg) => (
        <div
        key={msg.id}
        className={`message-row ${
            msg.sender === 'user' ? 'user' : 'mentor'
        }`}
        >
        {msg.sender === 'mentor' && (
            <div className="avatar-wrapper">
            {/* --- ▼ 変更点 ▼ --- */}
            <MentorIcon mentor={mentor} />
            {/* --- ▲ 変更点 ▲ --- */}
            </div>
        )}
        
        <div className="message-bubble">
            <p>{msg.text}</p>
        </div>
        
        {msg.sender === 'user' && (
            <div className="avatar-wrapper">
            <UserIcon /> {/* ユーザーは変更なし */}
            </div>
        )}
        </div>
    ))}

    {/* 入力中... */}
    {isMentorReplying && (
        <div className="message-row mentor typing-indicator">
        <div className="avatar-wrapper">
            {/* --- ▼ 変更点 ▼ --- */}
            <MentorIcon mentor={mentor} />
            {/* --- ▲ 変更点 ▲ --- */}
        </div>
        <div className="typing-bubble">
            <p>入力中...</p>
        </div>
        </div>
    )}
    </div>

    {/* ( ... 2. 入力フォーム部分は変更なし ... ) */}
    <div className="chat-input-form-area">
    <form onSubmit={handleSubmit} className="chat-input-form">
        <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="メッセージを入力..."
        className="chat-input"
        disabled={isMentorReplying}
        />
        <button
        type="submit"
        className="chat-submit-button"
        disabled={isMentorReplying}
        >
        送信
        </button>
    </form>
    </div>
</div>
);
}