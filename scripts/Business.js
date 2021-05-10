

export const Business = (businessArray) => {
        return `
            
            <section class="business">
                <h2 class="business__name">${businessArray.companyName}</h2>
                <div class="business__address">
                ${businessArray.addressFullStreet}
                ${businessArray.addressCity}, ${businessArray.addressStateCode} ${businessArray.addressZipCode}
                </div>
            </section>
            `
    }
    
