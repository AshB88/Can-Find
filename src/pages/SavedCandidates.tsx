import Candidate from '../interfaces/Candidate.interface';
import { useState, useEffect } from 'react';

const SavedCandidates = () => {

  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(savedCandidates);
  }, []);

  return (
    <>
      <h1>Potential Candidates</h1>
      {savedCandidates.map((candidate, index) => (
        <div key={index}>
          <img src={candidate.avatar_url} />
          <h2>{candidate.name}</h2>
          <p>{candidate.location}</p>
          <p>{candidate.email}</p>
          <p>{candidate.company}</p>
          <p>{candidate.bio}</p>
        {/*  <a href={candidate.html_url}>Github Profile</a> */}
        </div>
      ))}
    </>
  );
};

export default SavedCandidates;
