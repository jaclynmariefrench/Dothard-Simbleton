import { Agents } from "./agenthtml.js";
import { getNewAgent } from "./database.js";

const newAgentObject = getNewAgent()
const contentTarget = document.querySelector(".agents")

document.querySelector("#agentSearch").addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    const searchEntry = keyPressEvent.target.value.toLowerCase()

                    const foundAgent = newAgentObject.find(agent => agent.fullName.toLowerCase().startsWith(searchEntry))
                    

                    companySearchResultArticle.innerHTML = Agents(foundAgent)
                }
        });



export const PurchasingAgents = () => {
    contentTarget.innerHTML="<h1>Purchasing Agents</h1>"

    newAgentObject.forEach(
        (agent) => {
        contentTarget.innerHTML += Agents(agent)
    });
}

const companySearchResultArticle = document.querySelector(".foundAgents")
