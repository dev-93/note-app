import { posts } from "./index";

export interface IPostData {
  title: string;
  contents: string;
}

function fetchPosts() {
  return posts.get("/");
}

function createPost(postData: IPostData) {
  return posts.post("/", postData);
}

function deletePost(postId: string) {
  return posts.delete(postId);
}

function editPost(postId: string, postData: IPostData) {
  return posts.put(postId, postData);
}

function fetchPost(postId: string) {
  return posts.get(postId);
}

export { fetchPosts, createPost, editPost, deletePost, fetchPost };
