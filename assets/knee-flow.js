// ===== KNEE SMART FLOW SYSTEM =====

// Все страницы кластера "Колено"
const kneePages = [
  { id: "running", title: "После бега", url: "knee-running.html" },
  { id: "gym", title: "В зале", url: "knee-gym.html" },
  { id: "surgery", title: "После операции", url: "knee-surgery.html" },
  { id: "football", title: "Футбол", url: "knee-football.html" }
];

// Ключ для памяти
const STORAGE_KEY = "knee_path";
// Если пользователь зашёл не изнутри кластера — сбрасываем путь
if (document.referrer === "" || !document.referrer.includes("/problems/")) {
  localStorage.removeItem(STORAGE_KEY);
}

// Текущая страница
const currentFile = window.location.pathname.split("/").pop();

// Определяем текущий id
const currentPage = kneePages.find(p => p.url === currentFile);

if (!currentPage) {
  console.warn("Not a knee subpage");
} else {

  // Получаем историю
  let visited = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  // Добавляем текущую, если её нет
  if (!visited.includes(currentPage.id)) {
    visited.push(currentPage.id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(visited));
  }

  // Оставшиеся страницы
  const remaining = kneePages.filter(
    p => !visited.includes(p.id)
  );

  // Перемешиваем
  const shuffled = remaining.sort(() => Math.random() - 0.5);

  // Сколько показывать
  let count = 3;

  if (remaining.length === 2) count = 2;
  if (remaining.length === 1) count = 1;
  if (remaining.length === 0) count = 0;

  const selected = shuffled.slice(0, count);

  // Контейнер
  const container = document.getElementById("knee-flow");

  if (container) {
    container.innerHTML = "";

    if (selected.length > 0) {

      selected.forEach(page => {
        const link = document.createElement("a");

        link.href = page.url;
        link.className = "cluster-card";

        link.textContent = page.title;

        container.appendChild(link);
      });

    } else {

      // Конец маршрута
      const done = document.createElement("div");
      done.className = "card";
      done.textContent = "✅";

      container.appendChild(done);

      // Очищаем путь
      localStorage.removeItem(STORAGE_KEY);
    }
  }
}
