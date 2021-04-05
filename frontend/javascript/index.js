const BASE_URL = "http://localhost:3000"

document.addEventListener('DOMContentLoaded', () => {
    getConcerts();
    createConcertForm();
})

// fetch concerts index
function getConcerts() {
    fetch(`${BASE_URL}/concerts`)
    .then(resp => resp.json())
    .then(concerts => {
        for (const concert of concerts) {
            let c = new Concert(
                concert.id,
                concert.artist,
                concert.venue,
                concert.date,
                concert.attendees,
                concert.highlights,
                concert.lowlights,
                concert.photo,
                concert.user
            )
            c.renderConcert();
        }
    })
}

// create concert form and add event listener
function createConcertForm() {
    let concertsForm = document.getElementById('concerts-form')

    concertsForm.innerHTML += 
    `
    <form>
        <h3 id="concert-form-title">Add a Concert</h3>
        <label for="user">Username</label>
        <input type="text" id="user">
        
        <label for="artist">Artist</label>
        <input type="text" id="artist">
        
        <label for="venue">Venue</label>
        <input type="text" id="venue">
        
        <label for="date">Date</label>
        <input type="date" id="date">
        
        <label for="attendees">Attendees</label>
        <input type="text" id="attendees">
        
        <label for="highlights">Highlights</label>
        <textarea id="highlights"></textarea>
        
        <label for="lowlights">Lowlights</label>
        <textarea id="lowlights"></textarea>

        
        <input type="submit" value="Add Concert">
    </form>
    `
    concertsForm.addEventListener('submit', concertFormSubmission)
}

// gather submitted data
function concertFormSubmission() {
    event.preventDefault();

    let user = document.getElementById('user').value
    let artist = document.getElementById('artist').value
    let venue = document.getElementById('venue').value
    let date = document.getElementById('date').value
    let attendees = document.getElementById('attendees').value
    let highlights = document.getElementById('highlights').value
    let lowlights = document.getElementById('lowlights').value

    let concert = {
        user,
        artist,
        venue,
        date,
        attendees,
        highlights,
        lowlights
    }

    createConcert(concert)
    event.target.reset();
}

// POST submitted concert data to db and render
function createConcert(concert) {
    fetch(`${BASE_URL}/concerts`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(concert)
    })
    .then(resp => resp.json())
    .then(concert => {
        let c = new Concert(
            concert.id,
            concert.artist,
            concert.venue,
            concert.date,
            concert.attendees,
            concert.highlights,
            concert.lowlights,
            concert.photo,
            concert.user
        )
        c.renderConcert();
    })
}

// delete concert and reload page
function deleteConcert() {
    let concertId = parseInt(event.target.dataset.id);

    fetch(`${BASE_URL}/concerts/${concertId}`, {
        method: 'DELETE'
    })

    this.location.reload();
}




// read - fetch concert comments 
// create - new comment

