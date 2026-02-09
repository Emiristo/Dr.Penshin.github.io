// ===== RELATED CLUSTERS SYSTEM (FINAL) =====

document.addEventListener("DOMContentLoaded", function () {

  // Все кластеры проекта
  const clusters = [
    {
      id: "back",
      title: "🦴 Спина",
      text: "Осанка, тренировки, бег и хроническая боль.",
      url: "back.html"
    },
    {
      id: "knee",
      title: "🦵 Колено",
      text: "Боль, перегрузки и восстановление коленного сустава.",
      url: "knee.html"
    },
    {
      id: "overload",
      title: "⚡ Перегрузка",
      text: "Перетренированность, усталость и восстановление.",
      url: "overload.html"
    }
  ];

  const container = document.getElementById("random-links");

  if (!container) return;

  // Имя текущей страницы
  const currentPage = window.location.pathname.split("/").pop();

  // Убираем текущий кластер
  const available = clusters.filter(c => c.url !== currentPage);

  // Перемешиваем (настоящий shuffle)
  for (let i = available.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [available[i], available[j]] = [available[j], available[i]];
  }

  // Берём максимум 2
  const selected = available.slice(0, 2);

  container.innerHTML = "";

  // Рендер
  selected.forEach(item => {

    const link = document.createElement("a");

    link.href = item.url;
    link.className = "info-item related-item";

    link.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    `;

    container.appendChild(link);

  });

});
