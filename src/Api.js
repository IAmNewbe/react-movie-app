import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

export const getMovieList = async () => {
    const options = {
        method: "GET",
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDlmNjY1ZDRlMGIyY2ZkYmJmMjVjMDM0NmJkNDI1NiIsInN1YiI6IjY0MGQ3OGUyYjQyMjQyMDA4YTJkNGRlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HAryeqnh9ZDnHq_Rmm9GHEorl6lG1MKYj7czxJUYmBg'
          }
    }
    console.log("api: "+ apiKey);
    console.log("base: "+ baseUrl);
    const movie = await axios.get(`${baseUrl}/movie/popular?language=en-US&page=1`, options)
    // console.log(movie.data);
    return movie.data.results;
}