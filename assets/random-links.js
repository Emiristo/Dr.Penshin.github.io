// ===== RELATED CLUSTERS SYSTEM =====

document.addEventListener("DOMContentLoaded", function () {

  const clusters = [
    {
      title: "🦵 Колено",
      text: "Боль, перегрузки и восстановление коленного сустава.",
      url: "knee.html"
    },
    {
      title: "🦴 Спина",
      text: "Осанка, тренировки, бег и хроническая боль.",
      url: "back.html"
    },
    {
      title: "⚡ Перегрузка",
      text: "Перетренированность, усталость и восстановление.",
      url: "overload.html"
    }
  ];

  const container = document.getElementById("random-links");

  if (!container) return;

  const current = window.location.pathname.split("/").pop();

  // Убираем текущий кластер
  const filtered = clusters.filter(c => c.url !== current);

  // Перемешиваем
  const shuffled = [...filtered].sort(() => 0.5 - Math.random());

  // Берём 2
  const selected = shuffled.slice(0, 2);

  container.innerHTML = "";

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
