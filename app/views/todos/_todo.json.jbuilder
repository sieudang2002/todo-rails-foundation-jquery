json.extract! todo, :id, :title, :is_complete, :is_important, :created_at, :updated_at
json.url todo_url(todo, format: :json)
