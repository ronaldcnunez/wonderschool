class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string "group", null: false
      t.string "task", null: false
      t.integer "dependencyIds", array: true, default: []
      t.datetime "completedAt", null: true
    end
  end
end
