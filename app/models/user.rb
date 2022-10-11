class User < ApplicationRecord
    belongs_to :seller
    belongs_to :property
end
