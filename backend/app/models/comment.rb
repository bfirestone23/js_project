class Comment < ApplicationRecord
    belongs_to :concert
    validates_presence_of :user, :concert_id, :content
end