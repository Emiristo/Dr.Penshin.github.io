// ===== CLUSTER SMART FLOW SYSTEM =====

const clusters = [
  { id: "back", title: "🦴 Спина", url: "back.html" },
  { id: "knee", title: "🦵 Колено", url: "knee.html" },
  { id: "overload", title: "⚡ Перегрузка", url: "overload.html" }
];

const STORAGE_KEY = "cluster_path";

// Если вход не из платформы — сбрасываем
if (document.referrer === "" || !document.referrer.includes(".html")) {
  localStorage.removeItem(STORAGE_KEY);
}

// Текущая страница
const current = window.location.pathname.split("/").pop();

const currentCluster = clusters.find(c => c.url === current);

if (!currentCluster) {
  console.warn("Not a cluster page");
} else {

  let visited = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  if (!visited.includes(currentCluster.id)) {
    visited.push(currentCluster.id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(visited));
  }

  const remaining = clusters.filter(
    c => !visited.includes(c.id)
  );

  const shuffled = remaining.sort(() => Math.random() - 0.5);

  let count = 2;

  if (remaining.length === 1) count = 1;
  if (remaining.length === 0) count = 0;

  const selected = shuffled.slice(0, count);

  const container = document.getElementById("cluster-flow");

  if (container) {

    container.innerHTML = "";

    if (selected.length > 0) {

      selected.forEach(c => {

        const a = document.createElement("a");

        a.href = c.url;
        a.className = "card";

        a.textContent = c.title;

        container.appendChild(a);

      });

    } else {

      const done = document.createElement("div");

      done.className = "card";

      done.textContent = "✅ Вы изучили все направления";

      container.appendChild(done);

      localStorage.removeItem(STORAGE_KEY);
    }
  }
}
