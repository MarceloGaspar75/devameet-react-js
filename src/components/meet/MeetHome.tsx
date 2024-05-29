import { useState } from "react";
import { RoomObjects } from "../room/RoomObjects";
import { MeetList } from "./MeetList";
import { MeetUserHeader } from "./MeetUserHeader";

export const MeetHome= () => {

    const [objects, setObjects] = useState([]);
    return(
        <div className="container-principal">
            <div className="container-meet">
                <MeetUserHeader />
                <MeetList  setObjects={setObjects} />
            </div>
            {objects?.length > 0 && <RoomObjects objects ={objects}/>}
        </div>
    );
}