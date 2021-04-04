# CONCERT LOG

models: 

- user > has many concerts
    - username:string
- concert > belongs to user
    - artist:string
    - venue:string
    - attendees:string
    - highlights:text
    - lowlights:text
    - photo:string