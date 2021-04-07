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

    // renders concert object to the DOM
    renderConcert = () => {
        let concertsDiv = document.getElementById('concerts-container')
        concertsDiv.innerHTML +=
        `
        <div id="concert-${this.id}-container" class="container-fluid concert-container">
            <div>
                <div class="concert-info">
                    <h3>${this.artist} at ${this.venue}</h3>
                    <h4>${this.date}</h4>
                    <h5>Posted by ${this.user}</h5>
                    <p><strong>Attended by</strong> ${this.attendees}</p>
                </div>
                <div class="concert-info">
                    <h5><strong>Highlights:</strong></h5> 
                    <p>${this.highlights}</p>
                    <h5><strong>Lowlights:</strong></h5>
                    <p>${this.lowlights}</p>
                </div>
                <button class="hidden delete-btn btn btn-dark" onClick="deleteConcert()" data-id="${this.id}">Delete Concert</button>
            </div>
            <hr>
        </div>
        `
        this.renderConcertCommentSection();
        
    }

    renderConcertCommentSection = () => {
        let concertDiv = document.getElementById(`concert-${this.id}-container`)
        concertDiv.innerHTML +=
        `
        <div class="container-fluid">
            <div id="comments-${this.id}" class="comments-container">
            </div>
            <form class="comment-form" data-id="${this.id}" id="comment-form-${this.id}">
                <div class="form-group">
                    <label class="sr-only" for="comment-user">Leave comment as:</label>
                    <input placeholder="Username" id="${this.id}-comment-user" class="comment-user form-control" type="text">
                </div>

                <div class="form-group">
                    <label class="sr-only" for="comment-content">Your comment:</label>
                    <textarea placeholder="Comment" id="${this.id}-comment-content" class="comment-content form-control"></textarea>
                </div>
                <input class="comment-submit btn btn-dark" type="submit" value="Submit Comment">
            </form>
        </div>
        `
        addCommentFormListener(this.id);
    }
    
}