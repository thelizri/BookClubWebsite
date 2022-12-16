import "./ClubListStyle.css"
import Accordion from 'react-bootstrap/Accordion';
import {useAccordionButton} from "react-bootstrap";
import Card from "react-bootstrap/Card";

import membersIcon from "../../../Images/members-icon.png";
import languageIcon from "../../../Images/language-icon.png";
import meetingIcon from "../../../Images/meeting-icon.png";
import genreIcon from "../../../Images/genre-icon.png";
import paceIcon from "../../../Images/pace-icon.png";
import genderIcon from "../../../Images/gender-icon.png";

/**
 * Displays a list of clubs.
 *
 * https://react-bootstrap.github.io/components/accordion/
 *
 * @param {Object} props -
 *      clubs: a list of clubs
 *      currentClub: the currently selected club
 *      setCurrentClub: callback for setting the currently selected club
 */

export default function ClubListView({
    clubs = [],
    currentClub = null,
    setCurrentClub = (club) => console.log({setCurrentClub: club}),
}) {
    function renderListItem( club ) {
        function renderInfo() {
            const rows = [
                [membersIcon, "Members", `${club.memberIds.length}/${club.maxMemberCount}`],
                // FOR GENRES UNCOMMENT BELOW AND REPLACE WITH THE ONE BELOW IT.
                // [genreIcon, "Genres", clubs.genres.reduce((genres, genre) => `${genres}, ${genre}`)],
                [genreIcon, "Genres", ["Abc", "Def"].reduce((genres, genre) => `${genres}, ${genre}`)],
                [languageIcon, "Language", club.language],
                [meetingIcon, "Meetings", club.meetingType],
                [paceIcon, "Pace", "<Pace placeholder>"],
                [genderIcon, "Gender", club.gender],
            ];
            
            function renderInfoRow(icon, label, info) {
                return (
                    <tr>
                        <td className="label">
                            <img
                                src={icon}
                                className="icon"
                            />
                            {label}
                        </td>
                        <td className="info">{info}</td>
                    </tr>
                );
            }
            
            return (
                <table className="table">
                    { rows.map((row) => renderInfoRow(row[0], row[1], row[2])) }
                </table>
            );
        }     
        
        return (
//            <Accordion.Item eventKey={club.clubId}>
//                <Accordion.Header onClick={e => setCurrentClub(club)}>
//                    { club.clubName }
//                </Accordion.Header>
//                <Accordion.Body>{renderInfo()}</Accordion.Body>
//            </Accordion.Item>
            <CustomAccordionItem
                header={club.clubName}
                body={renderInfo()}
                eventKey={club.clubId}
                callback={() => setCurrentClub(club)}
                isActive={currentClub.clubId === club.clubId}
            />
        );
    }

    return (
        <Accordion
            defaultActiveKey={currentClub.clubId}
            //flush
        >
            { clubs.map( renderListItem ) }
        </Accordion>
    );
}

function CustomAccordionItem({
    header,
    body,
    eventKey,
    callback = () => console.log("toggle"),
    isActive = false,
}) {   
    return (
        <Card bsPrefix={isActive ? "active-card" : "card"}>
            <Card.Header onClick={useAccordionButton(eventKey, callback)}>
                <strong>{header}</strong>
            </Card.Header>
            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>
                    {body}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}
