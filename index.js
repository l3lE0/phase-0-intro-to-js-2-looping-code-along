
const thankYouMessage = []

function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        thankYouMessage.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }

    return thankYouMessage
}

function countDown() {

    let i = 10
    while (i >= 0) {
        console.log(i)
        i--
    }
}