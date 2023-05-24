import { videogames } from "../../../../../utils/dataVideojuegos";

////filtrado platfomrs
const filterplataforms = videogames.map((g) => g.platforms);
export const allPlatforms = [...new Set(filterplataforms.flat().sort())];

// export const allPlatformsKeyValue = allPlatforms.map((g) =>[g, false]);

<<<<<<< HEAD
////filtrado genres
const filtergenres = videogames.map((g) => g.genre);

=======
// export const objPlatforms = Object.fromEntries(allPlatformsKeyValue);


////filtrado genres
const filtergenres = videogames.map((g) => g.genre);
>>>>>>> fd8b5ee77740599ebabb3baae45ae89e70b43c18

export const allGenres = [...new Set(filtergenres.flat().sort())];


// const allGenresKeyValue = allGenres.map((g) => [g, false]);

// export const objGenres = Object.fromEntries(allGenresKeyValue);

<<<<<<< HEAD
export const objGenres = allGenresKeyValue.map(([key,value])=>({[key]:value}))
=======
// export const objGenres = allGenresKeyValue.map(([key,value])=>({[key]:value}))
>>>>>>> fd8b5ee77740599ebabb3baae45ae89e70b43c18




const filterTags = videogames.map((g) => g.etiquetas);

export const allTags = [...new Set(filterTags.flat().sort())];



