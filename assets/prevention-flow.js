 // ===== PREVENTION SMART FLOW SYSTEM =====

const preventionPages = [
  { id: "load", title: "Контроль нагрузки", url: "prevention-load.html" },
  { id: "movement", title: "Техника движения", url: "prevention-movement.html" },
  { id: "recovery", title: "Восстановление", url: "prevention-recovery.html" },
  { id: "screening", title: "Оценка состояния", url: "prevention-screening.html" }
];

const STORAGE_KEY = "prevention_path";

// Сброс если вход извне
if (document.referrer === "" || !document.referrer.includes("prevention")) {
  localStorage.removeItem(STORAGE_KEY);
}

const currentFile = window.location.pathname.split("/").pop();

const currentPage = preventionPages.find(p => p.url === currentFile);

if (!currentPage) {
  console.warn("Not a prevention subpage");
} else {

  let visited = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  if (!visited.includes(currentPage.id)) {
    visited.push(currentPage.id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(visited));
  }

  const remaining = preventionPages.filter(
    p => !visited.includes(p.id)
  );

  const shuffled = remaining.sort(() => Math.random() - 0.5);

  let count = 3;
  if (remaining.length === 2) count = 2;
  if (remaining.length === 1) count = 1;
  if (remaining.length === 0) count = 0;

  const selected = shuffled.slice(0, count);

  const container = document.getElementById("prevention-flow");

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
      done.textContent = "Вы разобрали основные принципы профилактики";

      container.appendChild(done);

      localStorage.removeItem(STORAGE_KEY);
    }
  }
}
