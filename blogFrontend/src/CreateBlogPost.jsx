import React, { useState } from 'react';
import './CreateBlogPost.css';

const CreateBlogPost = ({ click, setClick }) => {
    const [post, setPost] = useState({
        title: "",
        content: "",
    });


    const dataHandling = (e) => {
        setPost(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };



    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload

        try {
            const response = await fetch("http://localhost:9000/api/v1/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(post) // Convert state object to JSON
            });

            if (!response.ok) {
                throw new Error("Failed to submit post");
            }

            // ✅ Handle empty responses properly
            const text = await response.text();
            const data = text ? JSON.parse(text) : {};

            setPost({ title: "", content: "" }); // Reset form
            setClick(!click);

        } catch (error) {
            console.error("Error submitting post:", error);
        }
    };


    return (
        <div >
            {click &&
                <form method="post" onSubmit={handleSubmit} id='post-form'>
                    <div id='form-cont'>
                        <label htmlFor="title">Title:</label><br />
                        <input className='input'
                            name="title"
                            onChange={dataHandling}
                            value={post.title}
                            type="text"
                            required
                        /><br />

                        <label htmlFor="content">Content:</label><br />
                        <textarea className='input'
                            
                            name="content"
                            onChange={dataHandling}
                            value={post.content}
                            required
                        /><br />

                        <label htmlFor="file">Upload File:</label><br />
                        <input className='input'
                            type="file"
                            name="file"
                        /><br />
                        <div className='submit-cont'>
                            <input className='submit' type="submit" value="Submit" />   
                        </div>

                    </div>

                </form>}
        </div>
    );
};

export default CreateBlogPost;
