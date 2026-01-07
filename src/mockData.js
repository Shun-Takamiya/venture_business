// src/mockData.js

// 画像から読み取ったメンター情報のダミーデータ
export const mentors = [
    {
        id: 1,
        name: "髙宮 駿",
        affiliation: "関西学院大学 バーチャルリアリティ研究室",
        tags: ["バーチャルリアリティ", "機械学習", "制御工学"],
        achievements: 2,
        interested: 20,
        // ダミー画像URL (適宜変更してください)
        imageUrl: "/assets/TakamiyaShun.png",
        introduction: "VR/AR技術を用いた新しいヒューマン・コンピュータ・インタラクションを研究しています。人類の技術が指数関数的に加速する中で、人が人であり続けるためには、という思想のもと、特にアニマトロニクスの機械学習を専門とし、一緒にデジタルと機械、人間が融合した世界を作りましょう！",
        achievementsList: [
            `International Conference on Entertainment Computing 2025 / Interaction 2025`,
            "キャッチバトルロボコン 予選進出",
            "IVRC SEED/LEEP 進出",
            "技育展 決勝進出",
            "幕張メッセ DCEXPO 出展",
            "デカボチャレンジ2025/冬"
        ]
    },
    {
        id: 2,
        name: "河原 未知",
        affiliation: "近畿大学 General",
        tags: ["経済", "統計", "臨床心理学"],
        achievements: 6,
        interested: 37,
        imageUrl: "/assets/KawaharaMiwa.png",
        introduction: "人はなぜ不合理な選択をしてしまうのか？行動経済学の観点から、人々の意思決定プロセスを大学で学んでいます。",
        achievementsList: [
            "河合塾アイデア・ラボ 最終審査出場",
        ]
    },
    {
        id: 3,
        name: "藤原 奈津",
        affiliation: "関西学院大学 微分幾何学研究室",
        tags: ["ルベーク積分", "ベクトル解析"],
        achievements: 20,
        interested: 5,
        imageUrl: "/assets/FuziwaraNatsu.png",
        introduction: "純粋数学の美しさを探求しています。一見複雑に見える世界も、数学の言葉で記述すると驚くほどシンプルになります。",
        achievementsList: [
            "修士論文 優秀賞",
            "日本数学会 発表"
        ]
    },
    {
        id: 4,
        name: "川口 純平",
        affiliation: "同志社大学 メディア情報学ゼミ",
        tags: ["統計"],
        achievements: 1,
        interested: 10,
        imageUrl: "/assets/KawaguchiJyunpei.jpg",
        introduction: "一瞬のノイズを永遠の残像へ－人々の心に残るような演出をメディアの観点から創造しています。",
        achievementsList: [
            "ジャーナリズム論 統計 舞台制作学",
            "日本演出者協会賞 優秀賞",
            "放送文化賞 "
        ]
    },
    {
        id: 5,
        name: "山田 楓花",
        affiliation: "神戸大学 医学系",
        tags: ["医学"],
        achievements: 120,
        interested: 41,
        imageUrl: "/assets/user-icon.jpeg",
        introduction: "解剖学を専門としていて、生命の精緻なメカニズムを探求しています．一見カオスに見える病や身体の反応も、医学の言葉で記述すると驚くほど合理的な秩序になります。",
        achievementsList: [
            "博士論文 優秀賞"
        ]
    },
    {
        id: 6,
        name: "山田 碧海",
        affiliation: "兵庫県立大学 ワークライフバランス研究ゼミ",
        tags: ["統計", "会計"],
        achievements: 1,
        interested: 10,
        imageUrl: "/assets/YamadaAomi.jpg",
        introduction: "常に面白いことがないか探してます！主に会計系を主軸にした経営学を勉強しています！",
        achievementsList: [
            "部活動の運営資金の10万円の赤字を解消しました!"
        ]
    },
    {
        id: 7,
        name: "中内 結愛",
        affiliation: "神戸大学 法律ゼミ",
        tags: ["法律", "六法"],
        achievements: 1,
        interested: 10,
        imageUrl: "/assets/user-icon.jpeg",
        introduction: "社会の秩序を探求しています。一見複雑に絡み合った人間関係のトラブルも、法律の言葉で記述すると驚くほどシンプルな「権利と義務」の関係になります。",
        achievementsList: [
            "六法"
        ]
    },
    {
        id: 8,
        name: "山田 あきら",
        affiliation: "関西学院大学 アルティメット研究室",
        tags: ["アルティメット", "スポーツ科学"],
        achievements: 1,
        interested: 0,
        imageUrl: "/assets/user-icon.jpeg",
        introduction: "身体運動のメカニズムを探求しています。一見複雑で感覚的なスーパープレーも、バイオメカニクスの視点で記述すると、驚くほど合理的な物理法則になります。",
        achievementsList: [
            "スポーツ科学修士論文 優秀賞",
        ]
    },
    {
        id: 9,
        name: "日高 快希",
        affiliation: "大阪大学 生物無機化学研究室",
        tags: ["量子化学", "熱力学"],
        achievements: 1,
        interested: 0,
        imageUrl: "/assets/HidakaYoshiki.jpg",
        introduction: "生化学に興味があり、生体内で用いられる金属を用いて、生体模倣した化学的なモデルを構築しています！授業では、化学反応の仕組みを反応速度論、量子化学、熱力学、電子の動きなどの観点から学んでいます",
        achievementsList: [
            "第30回日本数学オリンピック予選通過",
            "マンドリン曲「虹彩II」世界初演"
        ]
    },
];

// ヘッダー部分のタグのダミーデータ
export const searchTags = [
    "バーチャルリアリティ",
    "機械学習",
    "量子力学",
    "統計",
    "ベクトル解析",
    "スポーツ科学",
    "熱力学",
    "法律",
    "医学",
];