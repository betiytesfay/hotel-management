import RoomGallery from "../components/room/RoomGallery";
import RoomInfo from "../components/room/RoomInfo";
import RoomAmenities from "../components/room/RoomAmenities";
import RoomBookingCard from "../components/room/RoomBookingCard";
import RoomDescription from "../components/room/RoomDescription"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom";
import axios from "axios"

const RoomDetailsPage = () => {
  const { id } = useParams()
  const getRoomById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/rooms/${id}`)
      return response.data
    } catch (err) {
      console.error(err);
    }
  }
  const { isLoading, error, data: room } = useQuery({
    queryKey: ['room', id],
    queryFn: getRoomById
  })
  if (isLoading) return <div>isLoading please wait</div>
  if (error) return <div>error has occured</div>

  return (
    <div className="p-10 pt-20 grid grid-cols-3 gap-8">

      <div className="col-span-2 space-y-6">
        <RoomGallery images={room.images} />
        <RoomInfo room={room} />
        <RoomAmenities amenities={room.amenities} />
        <RoomDescription description={room.description} />
      </div>

      <div className="">
        <RoomBookingCard room={room} />
      </div>

    </div>
  );
};

export default RoomDetailsPage;