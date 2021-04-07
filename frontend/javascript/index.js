const BASE_URL = "http://localhost:3000"

document.addEventListener('DOMContentLoaded', () => {
    getConcerts();
    getComments();
    addConcertFormListener();
})

// fetch concerts index
const getConcerts = () => {
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
const addConcertFormListener = () => {
    let concertsForm = document.getElementById('concerts-form')
    
    concertsForm.addEventListener('submit', concertFormSubmission)
}

// gather submitted data
const concertFormSubmission = (e) => {
    e.preventDefault();

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
const createConcert = (concert) => {
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
const deleteConcert = () => {
    let concertId = parseInt(event.target.dataset.id);

    fetch(`${BASE_URL}/concerts/${concertId}`, {
        method: 'DELETE'
    })

    this.location.reload();
}

// read - fetch concert comments 
const getComments = () => {
    fetch(`${BASE_URL}/comments`)
    .then(resp => resp.json())
    .then(comments => {
        for (let comment of comments) {
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

const addCommentFormListener = (concertID) => {
    let commentForm = document.getElementById(`comment-form-${concertID}`)
    commentForm.addEventListener('submit', commentFormSubmission)
}

const commentFormSubmission = (e) => {
    e.preventDefault();

    let user = document.getElementById('comment-user').value;
    let content = document.getElementById('comment-content').value;
    let concert_id = parseInt(e.target.dataset.id);

    let comment = {user, content, concert_id};
    createComment(comment);

    e.target.reset();
}



const createComment = (comment) => {
    fetch(`${BASE_URL}/comments`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })
    .then(resp => resp.json())
    .then(comment => {
        let c = new Comment(
            comment.content,
            comment.user,
            comment.concert_id
        )
        c.renderComment();
    })
}