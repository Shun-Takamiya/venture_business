// src/PlanPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// --- ▼ 1. カレンダー関連をインポート ▼ ---
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // カレンダーのデフォルトCSS
// --- ▲ 1. カレンダー関連をインポート ▲ ---

import './PlanPage.css'; // 専用CSS

const PlanPage = () => {
const navigate = useNavigate();

// --- ▼ 2. カレンダーの日付を管理するState ▼ ---
const [date, setDate] = useState(new Date()); // 今日の日付を初期値に
// --- ▲ 2. カレンダーの日付を管理するState ▲ ---

// Todo機能のためのState
const [todos, setTodos] = useState([
{ id: 1, text: '実験手法の計画をとりあえず考えてみる', completed: false },
{ id: 2, text: '高宮メンターに連絡する', completed: false },
]);
const [newTodo, setNewTodo] = useState('');

// ( ... Todoの処理 ... )
const toggleTodo = (id) => {
setTodos(
    todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
);
};
const handleAddTodo = () => {
if (newTodo.trim() === '') return;
setTodos([
    ...todos,
    { id: Date.now(), text: newTodo, completed: false }
]);
setNewTodo('');
};

return (
<div className="plan-page">
    {/* --- 戻るボタン --- */}
    <button onClick={() => navigate(-1)} className="back-button">
    &lt; 戻る
    </button>

    <h1 className="plan-title">探究計画</h1>

    {/* --- 1. 目標機能セクション (変更なし) --- */}
    <section className="plan-section">
    <h2>目標設定</h2>
    <div className="goal-card">
        <label>最終目標</label>
        <p>VR技術を用いて視力回復のトレーニングを行う</p>
        <label>今週の目標</label>
        <p>Unityを触れてみる</p>
    </div>
    </section>

    {/* --- 2. カレンダー機能セクション (モックアップから変更) --- */}
    <section className="plan-section">
    <h2>カレンダー</h2>
    {/* --- ▼ 3. カレンダーコンポーネントを配置 ▼ --- */}
    <div className="calendar-container">
        <Calendar
        onChange={setDate} // 日付がクリックされたら 'date' Stateを更新
        value={date}      // 'date' Stateをカレンダーに反映
        locale="ja-JP"    // 日本語化
        />
    </div>
    {/* --- ▲ 3. カレンダーコンポーネントを配置 ▲ --- */}

    {/* 近日中の予定 (カレンダーの下に移動) */}
    <div className="calendar-event-list">
        <p><strong>近日中の予定:</strong></p>
        <ul>
        <li>11/20 (水) 18:00 - 髙宮メンターと面談</li>
        <li>11/25 (月) - 中間レポート提出期限</li>
        </ul>
    </div>
    </section>
    {/* --- ▲ 2. カレンダー機能セクション ▲ --- */}


    {/* --- 3. Todo機能セクション (変更なし) --- */}
    <section className="plan-section">
    <h2>Todoリスト</h2>
    <div className="todo-input-area">
        <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="新しいタスクを追加"
        className="todo-input"
        />
        <button onClick={handleAddTodo} className="todo-add-button">
        追加
        </button>
    </div>
    <ul className="todo-list">
        {todos.map(todo => (
        <li
            key={todo.id}
            className={todo.completed ? 'todo-item completed' : 'todo-item'}
            onClick={() => toggleTodo(todo.id)}
        >
            <span className="todo-checkbox"></span>
            <span className="todo-text">{todo.text}</span>
        </li>
        ))}
    </ul>
    </section>
</div>
);
};

export default PlanPage;