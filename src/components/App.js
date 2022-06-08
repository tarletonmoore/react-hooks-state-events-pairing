import video from "../data/video.js";
import DislikeButton from "./DislikeButton.js";
import LikeButton from "./LikeButton.js";
import HideComment from "./HideComment.js";

function App() {
  console.log("Here's your data:", video);

  return (

    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <div>
        <LikeButton />
        <DislikeButton />
      </div>
      <HideComment comments={video.comments} />
    </div>



  );
}

export default App;
