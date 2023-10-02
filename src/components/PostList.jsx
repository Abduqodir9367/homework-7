import axios from "axios";
import React, { useState } from "react";

const PostList = ({ loading, posts, error }) => {
  const [contact, setContact] = useState({
    favorite: false,
  });


  const handleLike = () => {
    setContact((contact) => {
      return {
        ...contact,
        favorite: !contact.favorite,
      };
    });
  };

  const deleteUser = async (id) => {
    const result = await axios.delete("http://localhost:3000/posts/${id}");
  };
  return (
    <div>
      {posts.length > 0 ? (
        <div className="cards">
          {posts.map((post) => (
            <div className="card" key={post.id}>
              <h2>{post.name}</h2>
              <h3>{post.username}</h3>
              <h6>{post.phone}</h6>
              <button className="like-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ fill: contact.favorite ? "red" : "gray" }}
                  onClick={handleLike}
                >
                  <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path>
                </svg>
              </button>
              <button onClick={() => deleteUser(post.id)}>delete</button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default PostList;
