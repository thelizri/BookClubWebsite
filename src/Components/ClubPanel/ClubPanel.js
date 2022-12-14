import ClubPanelView from "./ClubPanelView";
import {selectClub} from "../../Store/slices/club";
import {useSelector} from "react-redux";

export const ClubPanel = () => {
    const club = useSelector(selectClub);

    return (
        <ClubPanelView currentClub={ club }/>
    );
}