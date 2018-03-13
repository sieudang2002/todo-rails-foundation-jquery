module ApplicationHelper
  def generate_item(todo)
    template = "<div eclass>iconImportant &nbsp; #{todo.title}</div>"
    todo.is_complete ? template.gsub!('eclass', "class=\"t-complete\"") : template.gsub!(/eclass/, "")
    todo.is_important ? template.gsub!('iconImportant', "<i class=\"fi-star t-important\"></i>") : template.gsub!(/iconImportant/, "")
    template.html_safe
  end
end
