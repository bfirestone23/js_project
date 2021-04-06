const BASE_URL = "http://localhost:3000"

document.addEventListener('DOMContentLoaded', () => {
    getConcerts();
    getComments();
    addConcertFormListener();
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
function addConcertFormListener() {
    let concertsForm = document.getElementById('concerts-form')
    
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
function getComments() {
    fetch(`${BASE_URL}/comments`)
    .then(resp => resp.json())
    .then(comments => {
        for (const comment of comments) {
            let c = new Comment(
                comment.content,
                comment.user,
                comment.concert_id
            )
            c.renderComment();
        }
    })
}

// create - new comment
    //create form
    //gather data + POST to db

function addCommentFormListener(concertID) {
    // debugger;
    const commentForm = document.getElementById(`comment-form-${concertID}`)
    commentForm.addEventListener('submit', commentFormSubmission)
}

function commentFormSubmission() {
    event.preventDefault();
    console.log("clicked!");
}