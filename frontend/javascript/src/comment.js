class Comment {
    constructor(content, user, concert_id) {
        this.content = content;
        this.user = user;
        this.concert_id = concert_id;
    }

    // how/when to associate comment with concert?

    // instance method to render comment object to the DOM
    renderComment() {
        let commentsDiv = document.querySelector(`div#comments-${this.concert_id}`)
        commentsDiv.innerHTML +=
        `<div>
            <h6>${this.user}</h6>
            <p>${this.content}</p>
        </div>
        `
    }
}