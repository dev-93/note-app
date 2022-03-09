import { posts } from "./index";

function fetchPosts() {
  return posts.get("/");
}

function createPost(postData) {
  return posts.post("/", postData);
}

export { fetchPosts, createPost };
