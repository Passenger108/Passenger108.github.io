/*------------------------------init--------------------------------------------------------------------------------------------------- */
const xlr8 = document.querySelector("#xlr8-img");
const wildmutt = document.querySelector("#wildmutt-img");
const upgrade = document.querySelector("#upgrade-img");
const stinkfly = document.querySelector("#stinkfly-img");
const heatblast = document.querySelector("#heatblast-img");
const ripjaws = document.querySelector("#ripjaws-img");
const graymatter = document.querySelector("#graymatter-img");
const ghostfreak = document.querySelector("#ghost-freak-img");
const fourarms = document.querySelector("#fourarms-img");
const diamondhead = document.querySelector("#diamond-head-img");

let myButton = document.querySelector("button");
let myhtml = document.querySelector("html");

// xlr8.addEventListener("click", () => {
//     const currentSrc = xlr8.getAttribute("src");
//     if (currentSrc === "images/XLR8.avif") {
//         xlr8.setAttribute("src", "images/xlr8-2.png");
//     }
//     else {
//         xlr8.setAttribute("src", "images/XLR8.avif");
//     }
// });

/*-----------------on-click-------------------------------------------------------------------------------------------------------------------- */
xlr8.onclick = () => {
    const currentSrc = xlr8.getAttribute("src");
    if (currentSrc === "images/XLR8.avif") {
        xlr8.setAttribute("src", "images/xlr8-2.png");
    }
    else {
        xlr8.setAttribute("src", "images/XLR8.avif");
    }
};

wildmutt.onclick = () => {
    const currentSrc = wildmutt.getAttribute("src");
    if (currentSrc === "images/Wildmutt.avif") {
        wildmutt.setAttribute("src", "images/wildmutt-2.jpeg");
    }
    else {
        wildmutt.setAttribute("src", "images/Wildmutt.avif");
    }
};
upgrade.onclick = () => {
    const currentSrc = upgrade.getAttribute("src");
    if (currentSrc === "images/Upgrade-Ben-10.avif") {
        upgrade.setAttribute("src", "images/upgrade-2.jpeg");
    }
    else {
        upgrade.setAttribute("src", "images/Upgrade-Ben-10.avif");
    }
};
stinkfly.onclick = () => {
    const currentSrc = stinkfly.getAttribute("src");
    if (currentSrc === "images/stinkfly.avif") {
        stinkfly.setAttribute("src", "images/stinkfly-2.jpg");
    }
    else {
        stinkfly.setAttribute("src", "images/stinkfly.avif");
    }
};
heatblast.onclick = () => {
    const currentSrc = heatblast.getAttribute("src");
    if (currentSrc === "images/Heatblast.avif") {
        heatblast.setAttribute("src", "images/heatblast-2.jpg");
    }
    else {
        heatblast.setAttribute("src", "images/Heatblast.avif");
    }
};
ripjaws.onclick = () => {
    const currentSrc = ripjaws.getAttribute("src");
    if (currentSrc === "images/Ripjaws.avif") {
        ripjaws.setAttribute("src", "images/ripjaws-2.jpg");
    }
    else {
        ripjaws.setAttribute("src", "images/Ripjaws.avif");
    }
};
graymatter.onclick = () => {
    const currentSrc = graymatter.getAttribute("src");
    if (currentSrc === "images/Gray-Matter.avif") {
        graymatter.setAttribute("src", "images/graymatter-2.jpg");
    }
    else {
        graymatter.setAttribute("src", "images/Gray-Matter.avif");
    }
};
ghostfreak.onclick = () => {
    const currentSrc = ghostfreak.getAttribute("src");
    if (currentSrc === "images/Ghostfreak.avif") {
        ghostfreak.setAttribute("src", "images/ghost-freak-2.jpg");
    }
    else {
        ghostfreak.setAttribute("src", "images/Ghostfreak.avif");
    }
};
fourarms.onclick = () => {
    const currentSrc = fourarms.getAttribute("src");
    if (currentSrc === "images/Four-Arms.avif") {
        fourarms.setAttribute("src", "images/four-arms-2.jpg");
    }
    else {
        fourarms.setAttribute("src", "images/Four-Arms.avif");
    }
};
diamondhead.onclick = () => {
    const currentSrc = diamondhead.getAttribute("src");
    if (currentSrc === "images/Diamondhead.avif") {
        diamondhead.setAttribute("src", "images/diamond-head-2.jpg");
    }
    else {
        diamondhead.setAttribute("src", "images/Diamondhead.avif");
    }
};

myButton.onclick = () => {
  setBackgroundColor();
};

/*----------------------------defined-functions----------------------------------------------------------------------------------- */
function setBackgroundColor() {
  const backcolor = prompt("Enter color.");
  localStorage.setItem("background",backcolor );
    myhtml.style.backgroundColor = backcolor;
}



/* ------------------------------------------------commands---------------------------------------------------------------------------------*/

if (!localStorage.getItem("background")) {
  setBackgroundColor();
} else {
    const storedColor = localStorage.getItem("background");
    myhtml.style.backgroundColor = storedColor;
}


