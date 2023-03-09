let sign;
let first = document.getElementById('video-section')
let output = document.getElementById('output');
let getSigns = document.querySelectorAll('.astro-signs')

getSigns = Array.from(getSigns)

getSigns.forEach((div) => {
    div.addEventListener('click', () => {
        sign = div.ariaLabel;

        (async () => {
            const url = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`
            let data = await fetch(url, {
                method: 'POST'
            })
            let parsedData = await data.json()
            const description = parsedData.description;
            const mood = parsedData.mood;
            const color = parsedData.color;
            output.innerHTML = `
            <p style="text-align: center">${description}</p>
            <br>
            <p><u>Your Mood</u>: ${mood}</p>
            <br>
            <p><u>Your lucky color</u>: ${color}</p>
            `
        })()
        first.scrollIntoView({behavior: 'smooth'})
    })
})