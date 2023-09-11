import './App.css';
import { Skills } from './components/Skills/Skills';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';
import { CodingProfiles } from './components/Coding_handles/Coding';
import { useEffect, useState } from 'react';
import { Loading } from './components/Loader/spinner';
// import { GithubStats } from './components/GithubCalendar/GithubStats';


function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 1500)
  }, []);

  if (showLoading) {
    return <Loading />
  }

  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Skills />
      <CodingProfiles />
      <Projects />
      {/* <GithubStats/> */}
      <Footer />
    </div>
  );
}

export default App;
