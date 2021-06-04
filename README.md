# TourDiary

A RESTful web application concept built with a Ruby on Rails JSON API backend + JavaScript/HTML/CSS/Bootstrap frontend that allows users to document concerts they've attended and comment on them.

## Demo

[Click here to view a demo!](https://drive.google.com/file/d/1nwNGIEJ6ks7GlXnFwLyJ_TlqG6KG9V5b/view?usp=sharing) 

## Installation

Fork and clone this repository. Then, in the backend directory, install all dependencies:

```bundle install```

Run the migrations:

```rails db:migrate```

And start up the server:

```rails s```

Then, navigate to the frontend directory, open up a new terminal, and open the app:

```open index.html```

Or, use Node.js to hot-reload the page when any file is saved:

```npx reload -b```

You can then navigate to http://localhost:8080 to access the application.

## Usage

Fill out the concert form and submit, and your addition will render below. You or any user can then submit comments on that concert.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/bfirestone23/tour-diary.

## License

Released under the terms of the [MIT License](https://opensource.org/licenses/MIT).
