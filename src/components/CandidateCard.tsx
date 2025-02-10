import Candidate from '../interfaces/Candidate.interface';
import { IoRemoveCircleOutline } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";

interface CandidateCardProps {
    currentCandidate: Candidate;
    onSave?: () => void;
    onSkip?: () => void;
}

const CandidateCard = ({ currentCandidate, onSave, onSkip }: CandidateCardProps) => {
    if (!currentCandidate) return null;
    return (
        <div>
            <img src={currentCandidate.avatar_url}/>
            <h2>{currentCandidate.name}</h2>
            <p>
                <strong>Location:</strong>{currentCandidate.location}
            </p>
            <p>
                <strong>Email:</strong>{currentCandidate.email}
            </p>
            <p>
                <strong>Company:</strong>{currentCandidate.company}
            </p>
            <p>
                <strong>Bio:</strong>{currentCandidate.bio}
            </p>
            <div className="buttons">
                <IoAddCircleOutline 
                    onClick={() => onSave?.()}
                    id="save"
                />
                <IoRemoveCircleOutline
                     onClick={() => onSkip?.()}
                    id="skip"
                />
            </div>
        </div>
    );
};

export default CandidateCard;
