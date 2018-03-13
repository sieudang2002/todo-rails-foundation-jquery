class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.string :title
      t.boolean :is_complete, default: false
      t.boolean :is_important, default: false

      t.timestamps
    end
  end
end
