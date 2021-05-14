import { Business } from "./Business.js";
import { getCompanies } from "./database.js";

const businessArray = getCompanies()
document
    .querySelector("#companySearch")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    const searchEntry = keyPressEvent.target.value.toLowerCase()

                    const foundBusiness = businessArray.find(business => business.companyName.toLowerCase().includes(searchEntry))
                    

                    companySearchResultArticle.innerHTML = Business(foundBusiness)
                }
        });

const contentTarget = document.querySelector(".business")

export const BusinessesList = () => {
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"
 
    businessArray.forEach(
        (businessObject) => {
        contentTarget.innerHTML += Business(businessObject) 
    });

}

const companySearchResultArticle = document.querySelector(".foundCompanies")

