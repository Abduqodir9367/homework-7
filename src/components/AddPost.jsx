import React from "react";

const AddPost = ({ post, handleChange, handleSubmit }) => {
  const { name, username, phone } = post;

  return (
    <div>
      <form onSubmit={handleSubmit} className="big">
        <div>
          <label htmlFor="firstname" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="Abduqodir"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
            placeholder="Rixsiboyev"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            name="phone"
            placeholder="+998 (99) 047-93-67"
            id="phone"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="sub-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddPost;
