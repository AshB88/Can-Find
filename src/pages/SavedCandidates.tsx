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
      {savedCandidates.length === 0 ? (
        <p>No Candidates Saved Yet!</p>
      ) : (
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Location</th>
                <th>Email</th>
                <th>Company</th>
                <th>Bio</th>
                <th>Github Profile</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {savedCandidates.map((candidate, index) => (
                <tr key={index}>
                  <td className="avatar"><img src={candidate.avatar_url} /></td>
                  <td>{candidate.name} ({candidate.login})</td>
                  <td>{candidate.location}</td>
                  <td>{candidate.email}</td>
                  <td>{candidate.company}</td>
                  <td>{candidate.bio}</td>
                  <td><a href={candidate.html_url}>Github Profile</a></td>
                  <td><button onClick={() => {
                    const newCandidates = savedCandidates.filter((_, i) => i !== index);
                    setSavedCandidates(newCandidates);
                    localStorage.setItem('savedCandidates', JSON.stringify(newCandidates));
                  }} className="remove">Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
      )}
    </>
  );
};

export default SavedCandidates;
