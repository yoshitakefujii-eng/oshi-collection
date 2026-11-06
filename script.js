// ============================================================
// コードリテラシーワークショップ Session 5 - スターター用
// script.js（Session 4 でTSからコンパイルした状態のJS）
// ============================================================

console.log("動いた！");

const title = document.querySelector("#site-title");
if (title) {
  title.textContent = "好きな文言";
}

const btn = document.querySelector(".submit-btn");
const message = document.querySelector("#form-message");
if (btn && message) {
  btn.addEventListener("click", () => {
    message.textContent = "リアクションありがとうございます！";
  });
}

let count = 0;
const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");
if (likeBtn && likeCount) {
  likeBtn.addEventListener("click", () => {
    count++;
    likeCount.textContent = String(count);
    if (count === 10) {
      likeCount.textContent = "10いいね達成！ありがとうございます！";
    }
  });
}

const items = [
  { title: "推し①", category: "カテゴリ", description: "説明文をここに書く" },
  { title: "推し②", category: "カテゴリ", description: "説明文をここに書く" },
];

console.log(items[0].title);

const SUPABASE_URL = "https://rdturisevgsqddhitupk.supabase.co";
const SUPABASE_KEY = "sb_publishable_3Exn7KItswq3fIzLcEpY9Q_gR_Wjtdq";

async function loadItems() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/items?select=*`, {
    headers: {
      apikey: SUPABASE_KEY,
    },
  });
  const data = await res.json();
  renderItems(data);
}

loadItems();

function renderItems(items) {
  const list = document.getElementById("item-list");
  list.innerHTML = "";

  for (const item of items) {
    const card = document.createElement("div");
    card.className = "item-card";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p class="category">${item.category}</p>
      <p>${item.description ?? ""}</p>
    `;
    list.appendChild(card);
  }
}
