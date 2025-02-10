import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCandidates = async () => {
      const fetchedCandidates = await searchGithub();
      console.log('Fetched candidates:', fetchedCandidates);
      setCandidates(fetchedCandidates);
      setCurrentCandidate(fetchedCandidates[0]);
    };

    fetchCandidates();
  }, []);

  useEffect(() => {
    const fetchCandidateDetails = async () => {
      if (currentCandidate?.login) {
        const fetchedCandidate = await searchGithubUser(currentCandidate.login);
        console.log('Fetched candidate details:', fetchedCandidate);
        setCurrentCandidate(fetchedCandidate);
      }
    };

    fetchCandidateDetails();
  }, [currentCandidate?.login]);

  const handleSave = () => {
    const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    if (currentCandidate) {
      savedCandidates.push(currentCandidate);
      localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
    }
    fetchNextCandidate();
  };

  const handleSkip = () => {
    fetchNextCandidate();
  };

  const fetchNextCandidate = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < candidates.length) {
      setCurrentCandidate(candidates[nextIndex]);
      setCurrentIndex(nextIndex);
    } else {
      console.log('No more candidates');
      setCurrentCandidate(null);
    }
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      {!currentCandidate ? (
        <h2 className="end">No More Candidates!</h2>
      ) : (
        <CandidateCard
          currentCandidate={currentCandidate}
          onSave={handleSave}
          onSkip={handleSkip}
        />
      )}
    </div>
  );
};

export default CandidateSearch;