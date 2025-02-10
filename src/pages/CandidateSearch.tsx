import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    avatar_url: '',
    name: '',
    location: '',
    email: '',
    company: '',
    bio: '',
    login: '',
    html_url: ''
  })

  useEffect(() => {
    const fetchCandidates = async () => {
      const candidates = await searchGithub();
      setCurrentCandidate(candidates[0]);
    }

    fetchCandidates();
  }, [])

  const handleSave = () => {
    const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    savedCandidates.push(currentCandidate);
    localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
    fetchNextCandidate();
  }

  const handleSkip = () => {
    fetchNextCandidate();
  }

  const fetchNextCandidate = async () => {
    const candidates = await searchGithub();
    setCurrentCandidate(candidates[0]);
  }

  return (
    <div>
      <h1>Candidate Search</h1>
      <CandidateCard
        currentCandidate={currentCandidate}
        onSave={handleSave}
        onSkip={handleSkip}
      />
    </div>
  )

};

export default CandidateSearch;

/*
import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    avatar_url: '',
    name: '',
    location: '',
    email: '',
    company: '',
    bio: '',
    login: '',
    html_url: ''
  })

  useEffect(() => {
    const fetchCandidates = async () => {
      const candidates = await searchGithub();
      setCurrentCandidate(candidates[0]);
    }

    fetchCandidates();
  }, [])

  const handleSave = () => {
    const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    savedCandidates.push(currentCandidate);
    localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
    fetchNextCandidate();
  }

  const handleSkip = () => {
    fetchNextCandidate();
  }

  const fetchNextCandidate = async () => {
    const candidates = await searchGithub();
    setCurrentCandidate(candidates[0]);
  }

  return (
    <div>
      <h1>Candidate Search</h1>
      <CandidateCard
        candidate={currentCandidate}
        onSave={handleSave}
        onSkip={handleSkip}
      />
    </div>
  )

};

export default CandidateSearch;
*/

/*
const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const candidates = await searchGithub();
        setCurrentCandidate(candidates[0]);
      } catch (err) {
        setError('Failed to fetch candidates');
      }
    };

    fetchCandidates();
  }, []);

  const handleSave = () => {
    if (currentCandidate) {
      const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      savedCandidates.push(currentCandidate);
      localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
      fetchNextCandidate();
    }
  };

  const handleSkip = () => {
    fetchNextCandidate();
  };

  const fetchNextCandidate = async () => {
    try {
      const candidates = await searchGithub();
      setCurrentCandidate(candidates[0]);
    } catch (err) {
      setError('Failed to fetch candidates');
    }
  };

  if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <div>
        <h1>Candidate Search</h1>
        {currentCandidate && (
          <CandidateCard
            candidate={currentCandidate} 
            onSave={handleSave}
            onSkip={handleSkip}
          />
        )}
        {/*
        <button onClick={handleSave}>Save</button>
        <button onClick={handleSkip}>Skip</button>
        }
      </div>
    );
  }
};

export default CandidateSearch;
*/
