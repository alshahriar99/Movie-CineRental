import React, { useContext, useState } from "react";
import { getImageUrl } from "../utils/cine-utility";
import Rating from "./Rating";
import MovieCardModel from "./MovieCardModel";
import { MovieContext } from "../context/Context";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
 const {cardData, setCardData} = useContext(MovieContext)






  const handleAddToCart = (e,movie) => {
    e.stopPropagation();
 
 
    const existingMovie = cardData.find(item => item.id=== movie.id)

    if(!existingMovie){
      setCardData([...cardData, movie])
    }else{
      console.log("Movie already in cart");
    }
  }





  const handleCloseModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };
  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <MovieCardModel movie={selectedMovie} onClose={handleCloseModal } onCardAdd={handleAddToCart} />
      )}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImageUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button className="bg-[#00D991] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm "
            onClick={(e)=>handleAddToCart(e,movie)}
            >
              <img src="../assets/tag.svg" alt="" />
              <span>${movie.price} | add To Card</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
