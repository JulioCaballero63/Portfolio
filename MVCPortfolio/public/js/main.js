const links = [
    {
        label: "Week1 Notes",
        url: "/week1"
    },
    {
        label: "Week2 Notes",
        url: "/week2"
    },

    {
        label: "Week3 Notes",
        url: "/week3"
    },

    {
        label: "Week4 Notes",
        url: "/week4"
    },
    {
        label: "Week5 Notes",
        url: "/week5"
    },
    {
        label: "Week6 Notes",
        url: "/week6"
    },
    {
        label: "Week7 Notes",
        url: "/week7"
    },
    {
        label: "Week8 Notes",
        url: "/week8"
    },
    {
        label: "Week9 Notes",
        url: "/week9"
    },
    {
        label: "Week10 Notes",
        url: "/week10"
    },
    {
        label: "Week11 Notes",
        url: "/week11"
    }
    ,
    {
        label: "Block 2 Challenge",
        url: "/onePageApp"
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