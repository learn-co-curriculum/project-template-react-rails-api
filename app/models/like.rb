class Like < ApplicationRecord
  belongs_to :user
  has_one :match

  def match_check
    likedID = self.liked_person_id 
    user = Like.where(user_id: likedID).take
      if user.liked_person_id === self.user_id
          return "Congratulations #{self.user.username} you matched with #{user.user.username}!"
      else return nil
    end
  end

end
