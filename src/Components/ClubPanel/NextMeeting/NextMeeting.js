import { useDispatch, useSelector } from "react-redux";
import {
    setAddress,
    setDescription, setMeetingDate, setMeetingLink, setMeetingTime,
    setOnline
} from "../../../Store/slices/meetingSlice";
import NextMeetingView from "./NextMeetingView";

export const NextMeeting = () => {
    const dispatch = useDispatch();
    const meetingDescription = useSelector( state => state.meeting.description )
    const isOnline = useSelector( state => state.meeting.online)
    const meetingAddress = useSelector( state => state.meeting.address );
    const meetingLink = useSelector( state => state.meeting.meetingLink );
    const meetingDate = useSelector( state => state.meeting.meetingDate );
    const meetingTime = useSelector( state => state.meeting.meetingTime );
    const admin = useSelector( state => state.club.clubOwnerId );
    const user = useSelector( state => state.auth.user.uid)
    const isAdmin = admin === user


    const onlineOrPhysical = ( newFormat ) => {
        dispatch( setOnline( newFormat === "online" ) );
    }

    const setNewDescription = ( newDescription ) => {
        dispatch(setDescription( newDescription ));
    }

    const setNewAddress = ( newAddress ) => {
        dispatch(setAddress( newAddress ));
    }

    const setNewLink = ( newLink ) => {
        dispatch(setMeetingLink( newLink ));
    }

    const setNewDate = ( newDate ) => {
        dispatch(setMeetingDate( newDate ));
    }

    const setNewTime = ( newTime ) => {
        dispatch(setMeetingTime( newTime ));
    }



    return <NextMeetingView isAdmin={isAdmin}
                            isOnline={isOnline}
                            meetingDescription={meetingDescription}
                            meetingAddress={meetingAddress}
                            meetingLink={meetingLink}
                            meetingDate={meetingDate}
                            meetingTime={meetingTime}

                            onlineOrPhysical={onlineOrPhysical}
                            newDescription={setNewDescription}
                            newAddress={setNewAddress}
                            newLink={setNewLink}
                            newDate={setNewDate}
                            newTime={setNewTime}



    />;
}