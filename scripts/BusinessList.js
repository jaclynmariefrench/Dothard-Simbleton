import { Business } from "./Business.js";
import { getCompanies } from "./database.js";


const contentTarget = document.querySelector(".business")

export const BusinessesList = () => {
    const businessArray = getCompanies()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"
 
    businessArray.forEach(
        (businessObject) => {
        contentTarget.innerHTML += Business(businessObject) 
    });
}