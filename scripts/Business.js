

export const Business = (businessArray) => {
        return `
            
            <section class="business">
                <h3 class="business__name">${businessArray.companyName}</h3>
                <p></p>
                <div class="business__address">
                ${businessArray.addressFullStreet}
                ${businessArray.addressCity},
                <p></p>
                ${businessArray.addressStateCode} ${businessArray.addressZipCode}
                </div>
                <hr>
            </section>
            `
    }
    
