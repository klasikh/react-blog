import React, { useState } from 'react';

const BlogList = ({blogs, title, handleDelete}) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return (
        <div className="bloglist">
            <h2>{title}</h2>
            {
            blogs.map( (blog) => (
                <div className="blog" key="{blog.id}">
                <a href="" className='blog-titre'>{blog.title}</a>
                <small className='blog-publication-date'>{blog.body}</small>
                <p className='blog-author'>{blog.author}</p>
                <button onClick={ () => handleDelete(blog.id) }>Supprimer</button>
                </div>
            ))
            }
        </div>
    )
}

export default BlogList;
