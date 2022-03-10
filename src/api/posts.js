import { posts } from "./index";

function fetchPosts() {
  return posts.get("/");
}

function createPost(postData) {
  return posts.post("/", postData);
}

function deletePost(postId) {
  return posts.delete(postId);
}

export { fetchPosts, createPost, deletePost };
