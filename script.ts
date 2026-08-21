// ============================================================
// コードリテラシーワークショップ Session 5 - スターター用
// script.ts（Session 4 完成状態＝赤線ゼロ）
// ※同じフォルダに tsconfig.json が必要です
// ============================================================

console.log('動いた！');

const title = document.querySelector('#site-title');
if (title) {
  title.textContent = '好きな文言';
}

const btn = document.querySelector('.submit-btn');
const message = document.querySelector('#form-message');
if (btn && message) {
  btn.addEventListener('click', () => {
    message.textContent = 'リアクションありがとうございます！';
  });
}

let count: number = 0;
const likeBtn = document.querySelector('#like-btn');
const likeCount = document.querySelector('#like-count');
if (likeBtn && likeCount) {
  likeBtn.addEventListener('click', () => {
    count++;
    likeCount.textContent = String(count);
    if (count === 10) {
      likeCount.textContent = '10いいね達成！ありがとうございます！';
    }
  });
}

interface Item {
  title: string;
  category: string;
  description: string;
}

const items: Item[] = [
  { title: '推し①', category: 'カテゴリ', description: '説明文をここに書く' },
  { title: '推し②', category: 'カテゴリ', description: '説明文をここに書く' },
];

console.log(items[0].title);
