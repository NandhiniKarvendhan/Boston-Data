function renderPosts(boston, container) {
  const people = boston.data;
  const len = boston.data.length;
  let html = "";
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' +
      "<h2>" +
      people[i][8] +
      "</h2>" +
      "<h3>" +
      people[i][11] +
      "</h3>";
  }
  container.innerHTML = '<ul id = "data">' + html + "</ul>";
}

function renderTopsalaries(boston, container) {
  const people = boston.data;
  let top5Salaries = people
    .sort((a, b) => {
      return b[11] - a[11];
    })
    .slice(0, 5);
  let html = "";
  for (let i = 0; i < top5Salaries.length; i++) {
    html +=
      '<li class="topSalariesFive">' +
      "<h2>" +
      top5Salaries[i][8] +
      "</h2>" +
      "<h3>" +
      top5Salaries[i][11] +
      "</h3>";
  }
  console.log(top5Salaries);
  container.innerHTML = '<ul id = "topSalaries">' + html + "</ul>";
}
renderTopsalaries(boston, document.getElementById("container"));

function renderTopemployees(boston, container) {
  const people = boston.data;
  let topEmployees = people.filter((a) => a[11] >= 200000);
  let html = "";
  for (let i = 0; i < topEmployees.length; i++) {
    html +=
      '<li class="top">' +
      "<h2>" +
      topEmployees[i][8] +
      "</h2>" +
      "<h3>" +
      topEmployees[i][11] +
      "</h3>";
  }
  container.innerHTML += '<ul id = "topEmployees">' + html + "</ul>";
}
renderTopemployees(boston, document.getElementById("container"));
