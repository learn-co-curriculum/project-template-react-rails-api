class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :email, :username, :password_digest, :is_parent, :total_earnings
  has_one :household
  has_many :child_chores
  has_many :chores, through: :child_chores


  def total_earnings
    self.object.child_chores.where(is_completed: true).sum(:reward)
  end
end
