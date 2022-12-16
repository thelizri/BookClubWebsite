import "./ClubListStyle.css"
import Accordion from 'react-bootstrap/Accordion';
import membersIcon from "../../../Images/members-icon.png";
import languageIcon from "../../../Images/language-icon.png";
import meetingIcon from "../../../Images/meeting-icon.png";
import {useContext} from "react";
import {AccordionContext, useAccordionButton} from "react-bootstrap";

/**
 * Displays a list of clubs.
 *
 * https://getbootstrap.com/docs/3.4/javascript/#collapse
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
                [languageIcon, "Language", club.language],
                [meetingIcon, "Meetings", club.meetingType]
            ];
            
            function renderInfoRow(icon, label, info) {
                return (
                    <tr>
                        <td className="label">
                            <img src={icon}/>
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
            <Accordion.Item eventKey={club.clubId}>
                <Accordion.Header onClick={e => setCurrentClub(club)}>
                    { club.clubName }
                </Accordion.Header>
                <Accordion.Body>{renderInfo()}</Accordion.Body>
            </Accordion.Item>
        );
    }

    return (
        <Accordion
            defaultActiveKey={currentClub.clubId}
            flush
        >
            { clubs.map( renderListItem ) }
        </Accordion>
    );
}
