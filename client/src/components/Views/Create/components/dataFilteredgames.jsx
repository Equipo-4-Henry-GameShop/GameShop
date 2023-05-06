import { videogames } from "../../../../utils/dataVideojuegos";

////filtrado platfomrs
const filterplataforms = videogames.map((g) => g.plataformas);
console.log(filterplataforms)
export const allPlatforms = [...new Set(filterplataforms.flat().sort())];
console.log(allPlatforms);

export const allPlatformsKeyValue = allPlatforms.map((g) =>[g, false]);
console.log(allPlatformsKeyValue);

export const objPlatforms = Object.fromEntries(allPlatformsKeyValue);
console.log(objPlatforms);




////filtrado genres
const filtergenres = videogames.map((g) => g.genres);
// console.log(filtergenres)
export const allGenres = [...new Set(filtergenres.flat().sort())];
console.log(allGenres);

const allGenresKeyValue = allGenres.map((g) => [g, false]);
console.log(allGenresKeyValue);

// export const objGenres = Object.fromEntries(allGenresKeyValue);
// console.log(objGenres);

export const objGenres = allGenresKeyValue.map(([key,value])=>({[key]:value}))
console.log(objGenres);






