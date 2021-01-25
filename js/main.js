//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPicture)

function getPicture() {
    const inputVal = document.querySelector('input').value
    const url = 'https://api.nasa.gov/planetary/apod?api_key=iGFKXujRNK1iFRGCGsz9XudMSUGs8gBWzxQYZA0N' + inputVal


    fetch(url)
        .then(res => res.json())
        .then(data => {
            let dateEnter = data.dates[0].strDate
            let datePicture = data.dates[0].strPicture
            let dateDescription = data.dates[0].strDescription
            document.querySelector('h2').innerText = dateEnter
            document.querySelector('img').src = datePicture
            document.querySelector('h3').innerText = dateDescription
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

//enter date, get picture of the day from said date
