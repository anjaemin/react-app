import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState("");
    const {id} = useParams();
    const getMovie = async() => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
        setLoading(false);
        setMovieDetail(json.data.movie);
    }
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {loading ? <h1>Loading...</h1> : 
                <MovieInfo cover={movieDetail.large_cover_image} 
                    title={movieDetail.title} 
                    genres={movieDetail.genres} 
                    desc={movieDetail.description_full}    
                    />}
        </div>
    );
}

function MovieInfo({cover, title, genres, desc}) {
    return (
        <div>
            <div>
                <Link to="/">Go Home</Link>
            </div>
            <h1>{title}</h1>
            <img src={cover} alt="movie cover"/>
            <ul>
                {genres.map((g, index) => <li key={index}>{g}</li>)}
            </ul>
            <div>{desc}</div>
        </div>
    );
}

export default Detail;