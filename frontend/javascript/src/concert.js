class Concert {
    constructor(id, artist, venue, date, attendees, highlights, lowlights, photo, user){
        this.id = id;
        this.artist = artist;
        this.venue = venue;
        this.date = date;
        this.attendees = attendees;
        this.highlights = highlights;
        this.lowlights = lowlights;
        this.photo = photo;
        this.user = user;
    }

    renderConcertCommentSection = () => {
        let concertDiv = document.getElementById(`concert-${this.id}-container`)
        concertDiv.innerHTML +=
        `
        <div>
            <div id="comments-${this.id}" class="comments-container">
            </div>
            <form data-id="${this.id}" id="comment-form-${this.id}">
                <label for="comment-user">Leave comment as:</label>
                <input id="comment-user" type="text">

                <label for="comment-content">Your comment:</label>
                <textarea id="comment-content"></textarea>

                <input type="submit">
            </form>
        </div>
        `
        addCommentFormListener(this.id);
    }

    // renders concert object to the DOM
    renderConcert = () => {
        let concertsDiv = document.getElementById('concerts-container')
        concertsDiv.innerHTML +=
        `
        <div id="concert-${this.id}-container" class="concert-container">
            <div>
                <h3>${this.artist} at ${this.venue}</h3>
                <h4>${this.date}</h4>
                <h5>Posted by: ${this.user}</h5>
                <p>Attendees: ${this.attendees}</p>
                <p>Highlights: ${this.highlights}</p>
                <p>Lowlights: ${this.lowlights}</p>
                <button class="delete-btn" onClick="deleteConcert()" data-id="${this.id}">Delete Concert</button>
            </div>
        </div>
        `
        this.renderConcertCommentSection();
        
    }
    
}