import { useSelector } from "react-redux";
import { selectClubName } from "../../Store/slices/clubSlice";
import ClubPanelView from "./ClubPanelView";

export const ClubPanel = () => {
    const clubName = useSelector( selectClubName );

    return (
        <ClubPanelView clubName={ clubName }/>
    );
}