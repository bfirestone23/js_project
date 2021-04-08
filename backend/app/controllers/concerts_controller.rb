class ConcertsController < ApplicationController
  before_action :set_concert, only: [:show, :update, :destroy]

  # GET /concerts
  def index
    concerts = Concert.all

    render json: concerts, include: [:comments]
  end

  # GET /concerts/1
  def show
    render json: @concert
  end

  # POST /concerts
  def create
    @concert = Concert.new(concert_params)

    if @concert.save
      render json: @concert, status: :created, location: @concert
    else
      render json: @concert.errors, status: :unprocessable_entity
    end
  end

  # DELETE /concerts/1
  def destroy
    @concert.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_concert
      @concert = Concert.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def concert_params
      params.require(:concert).permit(:artist, :venue, :attendees, :highlights, :lowlights, :photo, :user, :date)
    end
end
