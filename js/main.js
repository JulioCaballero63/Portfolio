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
    },
    {
        label: "Week7 Notes",
        url: "week7/index.html"
    },
    {
        label: "Week8 Notes",
        url: "week8/index.html"
    },
    {
        label: "Week9 Notes",
        url: "week9/index.html"
    },
    {
        label: "Week10 Notes",
        url: "week10/index.html"
    },
    {
        label: "Week11 Notes",
        url: "week11/index.html"
    }
    ,
    {
        label: "Block 2 Challenge",
        url: "onePageApp"
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