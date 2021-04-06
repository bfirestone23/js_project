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
    renderConcert() {
        let concertsDiv = document.getElementById('concerts-container')
        concertsDiv.innerHTML +=
        `
        <div class="concert-container">
            <div>
                <h3>${this.artist} at ${this.venue}</h3>
                <h4>${this.date}</h4>
                <h5>Posted by: ${this.user}</h5>
                <p>Attendees: ${this.attendees}</p>
                <p>Highlights: ${this.highlights}</p>
                <p>Lowlights: ${this.lowlights}</p>
                <button class="delete-btn" onClick="deleteConcert()" data-id="${this.id}">Delete Concert</button>
            </div>
            <div>
                <div id="comments-${this.id}" class="comments-container">
                </div>
                <form>
                    <input type="text">
                    <input type="submit" value="Add Comment">
                </form>
            </div>
        </div>
        `
    }
    
}