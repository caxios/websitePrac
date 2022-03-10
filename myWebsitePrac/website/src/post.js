import http from "./http-common";

class PostData {
    createPost(data) {
        return http.post("/post-new", data);
      }
}

export default new PostData();