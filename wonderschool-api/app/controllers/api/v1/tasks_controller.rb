class Api::V1::TasksController < ApplicationController
  before_action :find_task, only: [:update]
def index
  @tasks = Task.all
  render json: @tasks
end

def update
  @Task.update(Task_params)
  if @Task.save
    render json: @Task, status: :accepted
  else
    render json: { errors: @Task.errors.full_messages }, status: :unprocessible_entity
  end
end

private

def Task_params
  params.permit(:group, :task, :dependencyIds, :completedAt)
end

def find_task
  @Task = Task.find(params[:id])
end

end
