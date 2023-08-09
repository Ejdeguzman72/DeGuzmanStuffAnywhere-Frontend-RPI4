import React, { useState, useEffect } from 'react';
import PostsService from '../../services/post-service';
import { Link } from 'react-router-dom';
import Pagination from "@material-ui/lab/Pagination";
import AddPost from './AddPost';

const SocialMediaList = () => {
    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");

    const [page, setpage] = useState(1);
    const [count, setCount] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    const onChangeSearchTitle = (event) => {
        const searchTitle = event.target.value;
        setSearchTitle(searchTitle);
    };

    const pageSizes = [10,15,20];

    const getRequestParams = (searchTitle, page, pageSize) => {
        let params = {};

        if (searchTitle) {
            params['content'] = searchTitle;
        }

        if (page) {
            params['page'] = page - 1;
        }

        if (pageSize) {
            params['size'] = pageSize;
        }

        return params;
    }

    const retrievePosts = () => {
        const params = getRequestParams(searchTitle, page, pageSize);
        
        PostsService.getAllPosts(params)
            .then(response => {
                const { posts, totalPages } = response.data;

                setPosts(posts);
                setCount(totalPages);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(retrievePosts, [page, pageSize]);

    const refreshList = () => {
        retrievePosts();
        setCurrentPost(null);
        setCurrentIndex(-1);
    }

    const handlePageChange = (event, value) => {
        setpage(value);
    }

    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setpage(1);
    }

    const setActivePost = (book, index) => {
        setCurrentPost(book);
        setCurrentIndex(index);
    }

    const removeAllPosts = () => {
        PostsService.deleteAllPosts()
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const findByUser = (user_id) => {
        PostsService.getPostByUser(user_id)
            .then(response => {
                setPosts(response.data);
            })
    }

    return (
        <div className="list row">
            <div className="col-md-6">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search By Title"
                        value={searchTitle}
                        onChange={onChangeSearchTitle}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByUser}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-md-9">
                <h4>Post List</h4>


                <div className="mt-3">
                    {"Items per Page: "}
                    <select onChange={handlePageSizeChange} value={pageSize}>
                        {pageSizes.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>

                    <Pagination
                        className="my-3"
                        count={count}
                        page={page}
                        siblingCount={1}
                        boundaryCount={1}
                        variant="outlined"
                        shape="rounded"
                        onChange={handlePageChange}
                    />
                </div>


                <ul className="list-group">
                    {posts &&
                        posts.map((post, index) => (
                            <li
                                className={
                                    "list-group-item selected-book" + (index === currentIndex ? "active" : "")

                                }
                                onClick={() => setActivePost(post, index)}
                                key={index}
                            >
                                <p><strong>{post.user.username}: </strong>{post.content}</p>
                                {<br></br>}
                                {post.createdDate}
                            </li>
                        ))}
                </ul>
                <br></br>
                {/* <button
                    className="m-3 btn btn-sm btn-danger"
                    onClick={removeAllPosts}
                >
                    Delete All
                </button> */}
                {/* <button
                    className="m-3 btn btn-primary"
                    onClick={removeAllBooks}
                >
                    Add Book Information
                </button> */}
                <AddPost />
            </div>
            <div className="col-md-2">
                {currentPost ? (
                    <div>
                        <h4>Post</h4>
                        <div>
                            <label>
                                <strong>User:</strong>
                            </label>{" "}
                            {currentPost.user.username}
                        </div>
                        <div>
                            <label>
                                <strong>Message:</strong>
                            </label>{" "}
                            {currentPost.content}
                        </div>
                        
                        <Link
                            to={"/update-medical-office/" + currentPost.postId}
                            className="badge badge-warning"
                        >
                            Edit
                        </Link>
                    </div>
                ) : (
                        <div>
                            <br></br>
                            <p>Please click on a Post...</p>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default SocialMediaList;