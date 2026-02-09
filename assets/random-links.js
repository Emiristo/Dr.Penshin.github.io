// ===== RELATED CLUSTERS SYSTEM =====

document.addEventListener("DOMContentLoaded", function () {

  const clusters = [
    { title: "🦵 Колено", url: "knee.html" },
    { title: "🦴 Спина", url: "back.html" },
    { title: "⚡ Перегрузка", url: "overload.html" }
  ];

  // Контейнер
  const container = document.getElementById("random-links");

  if (!container) return;

  // Текущая страница
  const currentPage = window.location.pathname.split("/").pop();

  // Убираем текущую
  const filtered = clusters.filter(item => item.url !== currentPage);

  // Перемешиваем
  const shuffled = filtered.sort(() => 0.5 - Math.random());

  // Берём только 2
  const selected = shuffled.slice(0, 2);

  // Очищаем контейнер
  container.innerHTML = "";

  // Создаём карточки
  selected.forEach(item => {

    const link = document.createElement("a");

    link.href = item.url;
    link.className = "cluster-card";
    link.textContent = item.title;

    container.appendChild(link);

  });

});
