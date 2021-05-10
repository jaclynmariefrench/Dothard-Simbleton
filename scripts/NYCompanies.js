import { Business } from "./Business.js"
import { NYCompanies } from "./database.js"

const contentTarget = document.querySelector(".businessList__newYork")

export const NYList = () => {
    const businessArray = NYCompanies()
    contentTarget.innerHTML="<h1>New York Businesses</h1>"

    businessArray.forEach(
        (business) => {
        contentTarget.innerHTML += Business(business)
    });
}