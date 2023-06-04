const useGenreHook = (selectedGenre) =>{
    if(selectedGenre.length < 1) return '';

    const genreids = selectedGenre.map((g) => g.id);
    return genreids.reduce((acc, curr)=>acc+','+curr);
}

export default useGenreHook;