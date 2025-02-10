import Candidate from '../interfaces/Candidate.interface';
import { IoRemoveCircleOutline, IoAddCircleOutline } from "react-icons/io5";

interface CandidateCardProps {
    currentCandidate: Candidate;
    onSave?: () => void;
    onSkip?: () => void;
}

const CandidateCard = ({ currentCandidate, onSave, onSkip }: CandidateCardProps) => {
    if (!currentCandidate) return null;
    return (
        <div className='card'>
            <img src={currentCandidate.avatar_url} alt={`${currentCandidate.name}'s avatar`} />
            <h2>{currentCandidate.name} ({currentCandidate.login})</h2>
            <p>
                <strong>Location:</strong> {currentCandidate.location}
            </p>
            <p>
                <strong>Email:</strong> {currentCandidate.email}
            </p>
            <p>
                <strong>Company:</strong> {currentCandidate.company}
            </p>
            <p>
                <strong>Bio:</strong> {currentCandidate.bio}
            </p>
            <div className='icons'>
            <IoRemoveCircleOutline
                    onClick={onSkip}
                    className="button"
                    id="skip"
                />
                <IoAddCircleOutline 
                    onClick={onSave}
                    className="button"
                    id="save"
                />
            </div>
        </div>
    );
};

export default CandidateCard;
