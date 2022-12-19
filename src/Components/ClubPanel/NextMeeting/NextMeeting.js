import { useDispatch, useSelector } from "react-redux";
import {
    setAddress,
    setDescription, setMeetingDate, setMeetingLink,
    setOnline, setVoteDeadline
} from "../../../Store/slices/meetingSlice";
import NextMeetingView from "./NextMeetingView";
import {useEffect} from "react";
import {setMeeting} from "../../../Store/slices/clubSlice";

export const NextMeeting = () => {
    const dispatch = useDispatch();
    const meeting = useSelector( state => state.meeting );
    const meetingDescription = useSelector( state => state.meeting.description );
    const isOnline = useSelector( state => state.meeting.online);
    const meetingAddress = useSelector( state => state.meeting.address );
    const meetingLink = useSelector( state => state.meeting.meetingLink );
    const meetingDate = useSelector( state => state.meeting.meetingDate );
    const voteDate = useSelector( state => state.meeting.voteDeadline );
    const admin = useSelector( state => state.club.clubOwnerId );
    const user = useSelector( state => state.auth.user.uid)
    const isAdmin = admin === user

    useEffect(() => {
        if(meeting) dispatch(setMeeting(meeting));
    }, [meeting])

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
                            voteDate={voteDate}

                            onlineOrPhysical={onlineOrPhysical}
                            newDescription={setNewDescription}
                            newAddress={setNewAddress}
                            newLink={setNewLink}
                            newMeetingDate={setNewMeetingDate}
                            newVoteDate={setVoteDate}
    />;
}