import http from "./httpService";

export default function getGenres() {
  return http.get("http://localhost:3900/api/genres");
}
