import { useSelector } from "react-redux";
import { selectClub } from "../../Store/slices/clubSlice";
import ClubPanelView from "./ClubPanelView";

export const ClubPanel = () => {
    const club = useSelector( selectClub );

    return (
        <ClubPanelView currentClub={ club }/>
    );
}