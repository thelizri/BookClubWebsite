import { useDispatch, useSelector } from "react-redux";
import {
    setAddress,
    setDescription, setMeetingDate, setMeetingLink,
    setOnline, setVoteDeadline
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

    const setNewMeetingDate = ( unprocessedNewDate ) => {
        const newDate = unprocessedNewDate.toISOString([], {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'});
        dispatch(setMeetingDate( newDate ));
    }

    const setVoteDate = ( unprocessedNewDate ) => {
        const newDate = unprocessedNewDate.toISOString([], {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'});
        dispatch(setVoteDeadline( newDate ));
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
                            newMeetingDate={setNewMeetingDate}
                            newVoteDate={setVoteDate}
    />;
}