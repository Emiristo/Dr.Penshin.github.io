// ===== RELATED CLUSTERS (FROM INDEX) =====

document.addEventListener("DOMContentLoaded", function () {

  // Кластеры строго из index.html
  const clusters = [

    {
      title: "🦵 Боль в колене",
      text: "Перегрузки, травмы и восстановление коленного сустава.",
      url: "knee.html"
    },

    {
      title: "🏃‍♂️ Перегрузки",
      text: "Переутомление, усталость и восстановление после нагрузок.",
      url: "overload.html"
    },

    {
      title: "🧍‍♂️ Спина и суставы",
      text: "Осанка, тренировки, бег и хроническая боль.",
      url: "back.html"
    },

    {
      title: "⏱️ Возврат к тренировкам",
      text: "Безопасное восстановление после паузы и травм.",
      url: "return.html"
    },

    {
      title: "🔥 Хроническая боль",
      text: "Длительные болевые синдромы и работа с причинами.",
      url: "chronic.html"
    },

    {
      title: "🛡️ Профилактика",
      text: "Предотвращение травм и поддержание формы.",
      url: "prevention.html"
    }

  ];


  // Контейнер
  const container = document.getElementById("random-links");

  if (!container) return;


  // Текущая страница
  const currentPage = window.location.pathname.split("/").pop();


  // Убираем текущую
  let available = clusters.filter(c => c.url !== currentPage);


  // Fisher-Yates shuffle
  for (let i = available.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [available[i], available[j]] = [available[j], available[i]];
  }


  // Берём 2
  const selected = available.slice(0, 2);


  // Чистим контейнер
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
