
import {Presentation} from './components/presentation/presentation.js'
import {AboutMe} from './components/about-me/about-me.js'
import { Skills } from './components/skills/skills.js';
import { Dashboard } from './components/dashboard/dashboard.js';
import { Contact } from './components/contact/contact.js';

function App() {
  return (
   <>
    <Presentation/>
    <AboutMe/>
    <Skills/>
    <Dashboard/>
    <Contact/>
   </>
  );
}

export default App;
