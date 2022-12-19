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
    return (
        <Accordion
            defaultActiveKey={currentClub.clubId}
            //flush
        >
            { clubs.map( renderListItem ) }
        </Accordion>
    );

    function renderListItem( club, index ) {
        return (
            <CustomAccordionItem
                index={index}
                header={club.clubName}
                body={renderInfo(club)}
                eventKey={club.clubId}
                callback={() => setCurrentClub(club)}
                isActive={currentClub.clubId === club.clubId}
                key={index}
            />
        );
    }
}

function CustomAccordionItem({
    header,
    body,
    eventKey,
    callback = () => console.log("toggle"),
    isActive = false,
    index
}) {
    return (
        <Card bsPrefix={isActive ? "active-card" : "card"}>
            <Card.Header
                as="button"
                onClick={useAccordionButton(eventKey, callback)}
            >
                {header}
            </Card.Header>
            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>
                    {body}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

function renderInfo(club) {
    const rows = [
        [membersIcon, "Members", `${club.memberIds.length}/${club.maxMemberCount}`],
        [genreIcon, "Genres", club.genres.reduce((genres, genre) => `${genres}, ${genre}`)],
        [languageIcon, "Language", club.language],
        [meetingIcon, "Meetings", club.meetingType],
        [genderIcon, "Gender", club.gender],
    ];

    function renderInfoRow(icon, label, info, i) {
        return (
            <tr key={i+1000}>
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
            <tbody>
            { rows.map((row,i) => renderInfoRow(row[0], row[1], row[2],i)) }
            </tbody>
        </table>
    );
}
