import { Agents } from "./agenthtml.js";
import { getNewAgent } from "./database.js";

const contentTarget = document.querySelector(".agents")

const newAgentObject = getNewAgent()


export const PurchasingAgents = () => {
    contentTarget.innerHTML="<h1>Purchasing Agents</h1>"

    newAgentObject.forEach(
        (agent) => {
        contentTarget.innerHTML += Agents(agent)
    });
}

