import { Business } from "./Business.js";
import { BusinessesList } from "./BusinessList.js";

const mainContainer = document.querySelector("#container");

const renderAllHTML = () => {
    mainContainer.innerHTML = Business();
}

BusinessesList()

renderAllHTML();