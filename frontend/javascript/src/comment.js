class Comment {
    constructor(content, user, concert_id) {
        this.content = content;
        this.user = user;
        this.concert_id = concert_id;
    }

    // instance method to render comment object to the DOM
    renderComment = () => {
        let commentsDiv = document.querySelector(`div#comments-${this.concert_id}`)
        commentsDiv.innerHTML +=
        `
        <div class="comment-container">
            <p class="comment-user">@${this.user}:</p>
            <p class="comment-content">${this.content}</p>
        </div>
        `
    }
}