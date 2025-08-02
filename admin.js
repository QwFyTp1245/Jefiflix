document.getElementById("seriesForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const country = document.getElementById("country").value;
  const episodes = document.getElementById("episodes").value;
  const rating = document.getElementById("rating").value;
  const description = document.getElementById("description").value;
  const coverFile = document.getElementById("cover").files[0];
  const videoFiles = document.getElementById("videos").files;

  const reader = new FileReader();

  reader.onload = function () {
    const coverDataUrl = reader.result;

    const videos = [];
    for (let i = 0; i < videoFiles.length; i++) {
      videos.push(videoFiles[i].name); // فقط اسم فایل ذخیره میشه، چون نمیشه مستقیم تو پوشه ذخیره کرد بدون بک‌اند
    }

    const seriesData = {
      title,
      country,
      episodes,
      rating,
      description,
      cover: coverDataUrl,
      videos,
    };

    // ذخیره در localStorage
    let allSeries = JSON.parse(localStorage.getItem("jefiflix_series")) || [];
    allSeries.push(seriesData);
    localStorage.setItem("jefiflix_series", JSON.stringify(allSeries));

    alert("سریال با موفقیت ذخیره شد ✅");

    // ریست کردن فرم
    document.getElementById("seriesForm").reset();
  };

  if (coverFile) {
    reader.readAsDataURL(coverFile);
  }
});
<hr>
<h2>لیست سریال‌های ثبت‌شده</h2>
<div id="seriesList"></div>