// App.jsx
// Ojos Project
// 
// App entry.

import './App.css'
import Layout from './Layout'
import Member from './components/Member'

function App() {
  return (
    <Layout>
      <div className="photo_container">
        <img src="./static/logo.png" alt="The logo of the Ojos Project" width="350" height="350"></img>
        <a href="https://markbaldw.in/url/" target="_blank" rel="noopener noreferrer">a uci research project</a>
      </div>

      <div className="story">
        <div id="story_text">
          <h1>Creating an easier way to stay connected with who you love.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam aliquam sem et tortor consequat id porta nibh. Diam ut venenatis tellus in metus vulputate eu scelerisque. Lorem ipsum dolor sit amet.</p>
        </div>
        <img id="story_image" src="./static/grandma.jpg"></img>
      </div>

      <div className="our_team">
        <h1>Our Team</h1>

        <div id="team_members">
        <Member name="Carlos Valdez" position="software development" url="https://calejvaldez.com/" />
          <Member name="Joseph Sweatt" position="engineering" url="https://blackswan3d.com/" />
          <Member name="Mark S. Baldwin, PhD" position="faculty advisor" url="https://markbaldw.in/" />
        </div>

      </div>
      
    </Layout>
  );
}

export default App;
