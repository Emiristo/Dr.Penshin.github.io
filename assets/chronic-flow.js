 // ===== CHRONIC SMART FLOW SYSTEM =====

// Все страницы кластера "Хроническая боль"
const chronicPages = [
  { id: "overload", title: "Перегрузка", url: "chronic-overload.html" },
  { id: "movement", title: "Движение", url: "chronic-movement.html" },
  { id: "lifestyle", title: "Образ жизни", url: "chronic-lifestyle.html" },
  { id: "return", title: "Возврат к нагрузке", url: "chronic-return.html" }
];

// Ключ
const STORAGE_KEY = "chronic_path";

// Сброс если вход извне
if (document.referrer === "" || !document.referrer.includes("chronic")) {
  localStorage.removeItem(STORAGE_KEY);
}

// Текущий файл
const currentFile = window.location.pathname.split("/").pop();

// Текущая страница
const currentPage = chronicPages.find(p => p.url === currentFile);

if (!currentPage) {
  console.warn("Not a chronic subpage");
} else {

  // История
  let visited = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  // Добавляем
  if (!visited.includes(currentPage.id)) {
    visited.push(currentPage.id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(visited));
  }

  // Оставшиеся
  const remaining = chronicPages.filter(
    p => !visited.includes(p.id)
  );

  // Перемешивание
  const shuffled = remaining.sort(() => Math.random() - 0.5);

  // Количество
  let count = 3;
  if (remaining.length === 2) count = 2;
  if (remaining.length === 1) count = 1;
  if (remaining.length === 0) count = 0;

  const selected = shuffled.slice(0, count);

  // Контейнер
  const container = document.getElementById("chronic-flow");

  if (container) {
    container.innerHTML = "";

    if (selected.length > 0) {

      selected.forEach(page => {
        const link = document.createElement("a");

        link.href = page.url;
        link.className = "card";
        link.innerHTML = `<span>${page.title}</span>`;

        container.appendChild(link);
      });

    } else {

      const done = document.createElement("div");

      done.className = "card";
      done.textContent = "Вы разобрали основные причины хронической боли";

      container.appendChild(done);

      localStorage.removeItem(STORAGE_KEY);
    }
  }
}
