const links = [
    {
      week: "Week 01",
      url: "https://byui-cse.github.io/wdd231/lesson01/index.html"
    },
    {
      week: "Week 02",
      url: "https://byui-cse.github.io/wdd231/lesson02/index.html"
    },
    {
      week: "Week 03",
      url: "https://byui-cse.github.io/wdd231/lesson03/index.html"
    },
    {
      week: "Week 04",
      url: "https://byui-cse.github.io/wdd231/lesson04/index.html"
    },
    {
      week: "Week 05",
      url: "https://byui-cse.github.io/wdd231/lesson05/index.html"
    },
    {
      week: "Week 06",
      url: "https://byui-cse.github.io/wdd231/lesson06/index.html"
    }
  ];
  
  const courseWork = document.querySelector("#coursework");
  
  links.forEach(item => {
    const section = document.createElement("section");
    const a = document.createElement("a");
    a.href = item.url;
    a.textContent = item.week;
    a.target = "_blank";
    section.appendChild(a);
    courseWork.appendChild(section);
  });
  