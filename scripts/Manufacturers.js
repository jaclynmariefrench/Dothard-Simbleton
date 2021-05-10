import { Business } from "./Business.js";
import { ManufacturerArray } from "./database.js";

const contentTarget = document.querySelector(".businessList__manufacturing")

export const ManufacturerList = () => {
    const businessArray = ManufacturerArray()
    contentTarget.innerHTML="<h1>Manufacturing Businesses</h1>"

    businessArray.forEach(
        (business) => {
        contentTarget.innerHTML += Business(business)
    });
}