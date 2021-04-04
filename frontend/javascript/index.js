document.addEventListener('DOMContentLoaded', () => {
    console.log("working!!!")
    fetch('http://localhost:3000/users', (resp) => {
        console.log(resp)
    })
})