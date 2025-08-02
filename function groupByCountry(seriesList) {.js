function groupByCountry(seriesList) {
  const result = {};
  seriesList.forEach(series => {
    if (!result[series.country]) {
      result[series.country] = [];
    }
    result[series.country].push(series);
  });
  return result;
}

function showSeries() {
  const container = document.getElementById("seriesContainer");
  const allSeries = JSON.parse(localStorage.getItem("jefiflix_series")) || [];

  const grouped = groupByCountry(allSeries);

  container.innerHTML = "";

  for (let country in grouped) {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "category";

    const title = document.createElement("h2");
    title.textContent = سریال‌های ${country};
    categoryDiv.appendChild(title);

    const row = document.createElement("div");
    row.className = "series-row";

    grouped[country].forEach (series => {
      const card = document.createElement("div");
      card.className = "series-card";

     card.innerHTML = 
  <a href="series.html?id=${index}">
    <img src="${series.cover}" alt="cover">
    <div class="series-title">${series.title}</div>
    <div>🎞️ ${series.episodes} قسمت</div>
    <div>⭐ امتیاز: ${series.rating}</div>
  </a>
;
      ;

      row.appendChild(card);
    });

    categoryDiv.appendChild(row);
    container.appendChild(categoryDiv);
  }
}

showSeries();