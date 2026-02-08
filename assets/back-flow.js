const backPages = [
 { id:"posture", url:"back-posture.html" },
 { id:"training", url:"back-training.html" },
 { id:"running", url:"back-running.html" },
 { id:"chronic", url:"back-chronic.html" }
];

const container = document.getElementById("back-flow");

if (container) {

 let current = window.location.pathname.split("/").pop();

 let pages = backPages.filter(p => p.url !== current);

 pages.sort(() => 0.5 - Math.random());

 pages.slice(0,3).forEach(page => {

  let a = document.createElement("a");
  a.href = page.url;
  a.className = "card";

  a.innerText = page.id.toUpperCase();

  container.appendChild(a);

 });

}
