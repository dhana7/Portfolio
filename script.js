// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("skillsChart").getContext("2d");

  new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["Python", "Java", "React", "HTML/CSS", "Node.js", "SQL", "AWS"],
      datasets: [
        {
          label: "Proficiency",
          data: [90, 80, 85, 95, 70, 85, 85],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        r: {
          angleLines: { display: false },
          suggestedMin: 0,
          suggestedMax: 100,
        },
      },
    },
  });
});
