class User < ApplicationRecord
    has_secure_password
    belongs_to :avatar


    def change_score
        i = self.score
        i += 1
        self.update(score: i)
    end
    
end
