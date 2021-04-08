class Concert < ApplicationRecord
    has_many :comments
    validates_presence_of :artist, :venue, :attendees, :highlights, :lowlights, :user, :date

    def date_formatted
        self.date.strftime("%m/%d/%Y")
    end
end
