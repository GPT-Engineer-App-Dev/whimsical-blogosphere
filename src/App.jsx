import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    { title: "Post Title 1", content: "This is a summary of the first blog post. It gives a brief overview of the content.", imageUrl: "/images/blog-image.jpg" },
    { title: "Post Title 2", content: "This is a summary of the second blog post. It gives a brief overview of the content.", imageUrl: "/images/blog-image.jpg" }
  ]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index posts={posts} />} />
        <Route path="/add-post" element={<AddPost addPost={addPost} />} />
      </Routes>
    </Router>
  );
}

export default App;
