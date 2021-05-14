
export const Agents = (agent) => {
    return `
        <section class="purchasing__agent">
            <h3>
                ${agent.fullName}
            </h3>
            <p>
                ${agent.company}
            </p>
            <p>
                ${agent.phoneNumber}
            </p>
            <hr>
        </section>
    `
}