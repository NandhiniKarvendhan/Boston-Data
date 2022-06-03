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
  container.innerHTML = '<ul id = "topSalaries">' + '<h1 style="color: red;">' +'Top 5 salaries' + '</h1>' + html + "</ul>";
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
  container.innerHTML += '<ul id = "topEmployees">' + '<h1 style="color: red;">' +'Salaries above 200k' + '</h1>' + html + "</ul>";
}
renderTopemployees(boston, document.getElementById("container"));

// How many people work in each Department 
function renderTopdepartment(boston, container) {
  const people = boston.data;
let department = [];
people.forEach((element) => {
  department.push(element[10]);
});

let result = department.reduce(function(previous,current){
  if(current in previous) {
    previous[current] += 1;
  }else{
    previous[current] = 1;
  }
  return previous;
},{});

let top3Department = Object.entries(result).sort((a,b) => b[1] - a[1]).slice(0,3)
let html = "";
for (let i = 0; i < top3Department.length; i++) {
  html +=
    '<li class="topD">' +
    "<h2>" +
    top3Department[i][0] +
    "</h2>" +
    "<h3>" +
    top3Department[i][1] +
    "</h3>";
}
container.innerHTML += '<ul id = "topDepartments">' + '<h1 style="color: red;">' +'Top 3 Departments in which Boston people work' + '</h1>' + html + "</ul>";

console.log(top3Department);
}renderTopdepartment(boston, document.getElementById("container"));