json.user do
    json.extract! @user, :id, :email, :first_name, :title, :created_at, :updated_at
end