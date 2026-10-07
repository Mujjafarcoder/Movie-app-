import React from "react";
import useApi from "../customHook/useApi";
import Showmovies from "./Showmovies";
import { useParams } from "react-router";
import Loader from "./loader";

export default function Searchmovie() {

    let { name } = useParams();

    let ans = useApi(
        `${process.env.REACT_APP_API}/3/search/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&query=${name}&page=1`,
        [name]
    );

    console.log(ans);

    // API data has not arrived yet
    if (!ans) {
        return <Loader />;
    }

    // API data has arrived
    return (
        <Showmovies
            data={ans}
            heading={"Search Movie Page : " + name}
        />
    );
}