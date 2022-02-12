const links = [
    {
        label: "Week1 Notes",
        url: "week1/index.html"
    },
    {
        label: "Week2 Notes",
        url: "week2/index.html"
    },

    {
        label: "Week3 Notes",
        url: "week3/index.html"
    },

    {
        label: "Week4 Notes",
        url: "week4/index.html"
    },
    {
        label: "Week5 Notes",
        url: "week5/index.html"
    },
    {
        label: "Week6 Notes",
        url: "week6/index.html"
    }
]

function loadIndex() {
    const ol = document.querySelector("#linksList");

    links.forEach(link => {
        const li = document.createElement("li");
        const href = document.createElement("a");
        li.setAttribute("class", "section");
        href.setAttribute("href", link.url);
        href.innerText = link.label;

        li.appendChild(href);
        ol.appendChild(li);
    })
};