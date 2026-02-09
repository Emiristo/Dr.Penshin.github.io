// ===== RETURN SMART FLOW SYSTEM =====

// Все страницы кластера "Возврат"
const returnPages = [
  { id: "injury", title: "🏥 После травмы", url: "return-after-injury.html" },
  { id: "surgery", title: "🔬 После операции", url: "return-after-surgery.html" },
  { id: "break", title: "⏸️ После перерыва", url: "return-after-break.html" },
  { id: "competition", title: "🏆 Перед соревнованиями", url: "return-competition.html" }
];

// Ключ маршрута
const STORAGE_KEY = "return_path";

// Сброс пути если вход не из кластера
if (document.referrer === "" || !document.referrer.includes("return")) {
  localStorage.removeItem(STORAGE_KEY);
}

// Текущая страница
const currentFile = window.location.pathname.split("/").pop();

// Текущая страница
const currentPage = returnPages.find(p => p.url === currentFile);

if (!currentPage) {
  console.warn("Not a return subpage");
} else {

  // История
  let visited = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  // Добавляем
  if (!visited.includes(currentPage.id)) {
    visited.push(currentPage.id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(visited));
  }

  // Остались
  const remaining = returnPages.filter(
    p => !visited.includes(p.id)
  );

  // Shuffle
  const shuffled = remaining.sort(() => Math.random() - 0.5);

  // Сколько
  let count = 3;
  if (remaining.length === 2) count = 2;
  if (remaining.length === 1) count = 1;
  if (remaining.length === 0) count = 0;

  const selected = shuffled.slice(0, count);

  // Контейнер
  const container = document.getElementById("return-flow");

  if (container) {
    container.innerHTML = "";

    if (selected.length > 0) {

      selected.forEach(page => {
        const link = document.createElement("a");

        link.href = page.url;
        link.className = "card";
        link.textContent = page.title;

        container.appendChild(link);
      });

    } else {

      // Конец маршрута
      const done = document.createElement("div");

      done.className = "card";
      done.textContent = "✅ Вы изучили все этапы возвращения";

      container.appendChild(done);

      localStorage.removeItem(STORAGE_KEY);
    }
  }
}
