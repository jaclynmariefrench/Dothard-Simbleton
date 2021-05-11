
export const Agents = (agent) => {
    return `
        <section class="purchasing__agent">
            <h2>
                ${agent.fullName}
            </h2>
            <h3>
                ${agent.company}
            </h3>
            <h3>
                ${agent.phoneNumber}
            </h3>
        </section>
    `
}