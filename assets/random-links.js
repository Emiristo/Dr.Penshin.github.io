// ===== GLOBAL RELATED CLUSTERS =====

const clusters = [
  { title: "🦵 Колено", url: "knee.html" },
  { title: "🦴 Спина", url: "back.html" },
  { title: "⚡ Перегрузка", url: "overload.html" }
];

// Получаем контейнер
const container = document.getElementById("random-links");

if (container) {

  // Перемешиваем
  const shuffled = clusters.sort(() => Math.random() - 0.5);

  // Берём 2 направления
  const selected = shuffled.slice(0, 2);

  selected.forEach(item => {

    const a = document.createElement("a");

    a.href = item.url;
    a.className = "cluster-card";

    a.textContent = item.title;

    container.appendChild(a);

  });
}
