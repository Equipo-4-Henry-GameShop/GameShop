import { StyleSheet ,Image,TouchableOpacity, Text, View, Button,SectionList} from 'react-native';

import {color_blanco, color_crema, color_gris, color_naranja, color_negro, color_rojo, color_rojoNeon, color_verdeNeon} from '../../constants/Colors'

import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react'
import {getvideoGames} from "../../redux/videogamesActions"
import {videogames} from "../../utils/dataVideojuegos"

const arreglo2=[{
  "id": 29153,
  "nombre": "Max Payne 2: The Fall of Max Payne",
  "descripcion": "",
  "plataformas": [
    "Xbox 360",
    "Xbox",
    "PC",
    "PlayStation 2"
  ],
  "image": "https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg",
  "fecLan": "2003-10-14",
  "rating": 4.43,
  "genres": [
    "Action",
    "Shooter"
  ],
  "screnshoots": [
    "https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg",
    "https://media.rawg.io/media/screenshots/69f/69f55950ca3dd483cff0e2c74726a520.jpg",
    "https://media.rawg.io/media/screenshots/3a1/3a1ffe1d81286a0fa40899e070a128b0.jpg",
    "https://media.rawg.io/media/screenshots/0f1/0f175d7cff768e1a20de8340d5aea4f6.jpg",
    "https://media.rawg.io/media/screenshots/8de/8de049517ca15e76b846b74349ab7c87.jpg",
    "https://media.rawg.io/media/screenshots/1ab/1abb5cbfcced18d50c29d134d57bf528.jpg",
    "https://media.rawg.io/media/screenshots/49c/49cd9d491706a7269fecb74d654369fa.jpg"
  ],
  "tiendas": [
    "Steam",
    "Xbox 360 Store"
  ],
  "etiquetas": [
    "Physics",
    "Story",
    "Destruction",
    "Drama",
    "character",
    "Romance",
    "first person mod",
    "police",
    "fall"
  ],
  "create": false
},
{
  "id": 5528,
  "nombre": "Call of Duty: World at War",
  "descripcion": "",
  "plataformas": [
    "Xbox 360",
    "PlayStation 3",
    "Nintendo DS",
    "PC",
    "Xbox One",
    "Wii"
  ],
  "image": "https://media.rawg.io/media/games/da1/da15524e850ee9791b32973b748e08d5.jpg",
  "fecLan": "2008-11-11",
  "rating": 3.95,
  "genres": [
    "Action",
    "Shooter"
  ],
  "screnshoots": [
    "https://media.rawg.io/media/games/da1/da15524e850ee9791b32973b748e08d5.jpg",
    "https://media.rawg.io/media/screenshots/8a1/8a1f2cdaaaf8aa19441d890858d01d70.jpg",
    "https://media.rawg.io/media/screenshots/afe/afe6afc104621713ea0c8c5c5dc17149.jpg",
    "https://media.rawg.io/media/screenshots/b53/b535859c3a2a6f80f3c68398dbd39a79.jpg",
    "https://media.rawg.io/media/screenshots/baf/baf3982d7d0b65c4e74a38386641b07e.jpg",
    "https://media.rawg.io/media/screenshots/18d/18d0c96f64a6f2093a7097265b831ce9.jpg",
    "https://media.rawg.io/media/screenshots/b7b/b7bac2bff127258d92a266dd6a9adef7.jpg"
  ],
  "tiendas": [
    "Xbox Store",
    "Steam",
    "PlayStation Store",
    "Nintendo Store",
    "Xbox 360 Store"
  ],
  "etiquetas": [
    "Singleplayer",
    "Multiplayer",
    "Great Soundtrack",
    "Co-op",
    "cooperative",
    "First-Person",
    "Horror",
    "FPS",
    "Online Co-Op",
    "Gore",
    "Classic",
    "Survival",
    "Zombies",
    "Moddable",
    "War",
    "Historical",
    "World War II",
    "Tanks"
  ],
  "create": false
},
{
  "id": 1140,
  "nombre": "World of Goo",
  "descripcion": "",
  "plataformas": [
    "Android",
    "iOS",
    "PC",
    "macOS",
    "Linux",
    "Nintendo Switch",
    "Wii"
  ],
  "image": "https://media.rawg.io/media/games/d03/d030347839f74454afcd1008248b08ae.jpg",
  "fecLan": "2008-10-13",
  "rating": 4.01,
  "genres": [
    "Strategy",
    "Educational",
    "Family",
    "Indie",
    "Puzzle"
  ],
  "screnshoots": [
    "https://media.rawg.io/media/games/d03/d030347839f74454afcd1008248b08ae.jpg",
    "https://media.rawg.io/media/screenshots/44b/44bb511be323062b35e64dac6bc4dda0.jpg",
    "https://media.rawg.io/media/screenshots/c18/c1840fcf75ad14bcaffc5c10a2d929f3.jpg",
    "https://media.rawg.io/media/screenshots/2c1/2c1a9ea80f4d50edc64caa5c8be9208f.jpg",
    "https://media.rawg.io/media/screenshots/46f/46f070838b9087b8f2b44ab5aed5ba12.jpg",
    "https://media.rawg.io/media/screenshots/dde/dde84b4351694f58b7bc28dd9c907a64.jpg",
    "https://media.rawg.io/media/screenshots/7bb/7bb50d061107afc3680b0d31d6206a95.jpg"
  ],
  "tiendas": [
    "App Store",
    "Steam",
    "GOG",
    "Nintendo Store",
    "Google Play",
    "Epic Games"
  ],
  "etiquetas": [
    "Singleplayer",
    "Steam Achievements",
    "Multiplayer",
    "Atmospheric",
    "Great Soundtrack",
    "Story Rich",
    "2D",
    "Funny",
    "Difficult",
    "Classic",
    "Comedy",
    "Family Friendly",
    "Cute",
    "Physics",
    "Building",
    "Surreal",
    "puzzles",
    "Touch-Friendly",
    "Satire"
  ],
  "create": false
},
{
  "id": 9631,
  "nombre": "Sins of a Solar Empire: Rebellion",
  "descripcion": "",
  "plataformas": [
    "PC"
  ],
  "image": "https://media.rawg.io/media/screenshots/65c/65c9c15e274705b5fe343e424ce76ec8.jpg",
  "fecLan": "2012-06-12",
  "rating": 2.75,
  "genres": [
    "Strategy",
    "Indie"
  ],
  "screnshoots": [
    "https://media.rawg.io/media/screenshots/65c/65c9c15e274705b5fe343e424ce76ec8.jpg",
    "https://media.rawg.io/media/screenshots/f9a/f9a3a2e2a3a21300e44d093612f5b6f1.jpg",
    "https://media.rawg.io/media/screenshots/da4/da48ac6e582836d15473a7f56b1d407a.jpg",
    "https://media.rawg.io/media/screenshots/c0b/c0b0e65b80ed230f5078ddedcdb6e4fe.jpg",
    "https://media.rawg.io/media/screenshots/648/64805b741a98e7aa9aeb3038624f7778.jpg",
    "https://media.rawg.io/media/screenshots/e00/e00648b57a620de6936a07c6a36a87dd.jpg",
    "https://media.rawg.io/media/screenshots/563/56351b209cfaf5e06dc6d1c3bbbc438e.jpg"
  ],
  "tiendas": [
    "Steam"
  ],
  "etiquetas": [
    "Singleplayer",
    "Steam Achievements",
    "Multiplayer",
    "Steam Cloud",
    "steam-trading-cards",
    "Great Soundtrack",
    "Co-op",
    "cooperative",
    "Sci-fi",
    "Online Co-Op",
    "Exploration",
    "Online multiplayer",
    "Local Co-Op",
    "Local Multiplayer",
    "Space",
    "Includes level editor",
    "Moddable",
    "War",
    "Aliens",
    "RTS",
    "Grand Strategy",
    "4X",
    "Real-Time",
    "Diplomacy"
  ],
  "create": false
},
{
  "id": 452638,
  "nombre": "Stray",
  "descripcion": "",
  "plataformas": [
    "PlayStation 5",
    "PC",
    "PlayStation 4"
  ],
  "image": "https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg",
  "fecLan": "2022-07-19",
  "rating": 4.2,
  "genres": [
    "Action",
    "Adventure",
    "Simulation",
    "Indie",
    "Puzzle",
    "Platformer"
  ],
  "screnshoots": [
    "https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg",
    "https://media.rawg.io/media/screenshots/6c9/6c9d036518f78895ddf552d2cb7421d6.jpg",
    "https://media.rawg.io/media/screenshots/444/44480d0f02c17e41dd1d9b58affad214.jpg",
    "https://media.rawg.io/media/screenshots/e38/e38f600f4ad9145d0bcba128064503db.jpg"
  ],
  "tiendas": [
    "PlayStation Store",
    "Steam"
  ],
  "etiquetas": [
    "Singleplayer",
    "Steam Achievements",
    "Full controller support",
    "Atmospheric",
    "Steam Cloud",
    "Open World",
    "Third Person",
    "Sci-fi",
    "Horror",
    "Exploration",
    "Stealth",
    "exclusive",
    "Cute",
    "Mystery",
    "Colorful",
    "Cyberpunk",
    "Dystopian",
    "Robots",
    "Steam Trading Cards",
    "Beautiful",
    "Remote Play on TV",
    "cats",
    "Котики"
  ],
  "create": false
},
{
  "id": 11279,
  "nombre": "Day of Defeat: Source",
  "descripcion": "",
  "plataformas": [
    "Linux",
    "macOS",
    "PC"
  ],
  "image": "https://media.rawg.io/media/games/bff/bff7d82316cddea9541261a045ba008a.jpg",
  "fecLan": "2005-09-26",
  "rating": 3.22,
  "genres": [
    "Action"
  ],
  "screnshoots": [
    "https://media.rawg.io/media/games/bff/bff7d82316cddea9541261a045ba008a.jpg",
    "https://media.rawg.io/media/screenshots/005/0052befe44787cb5965fd60c7f2313e2.jpg",
    "https://media.rawg.io/media/screenshots/a0a/a0ab09b638835040a682d756c1f41a7c.jpg",
    "https://media.rawg.io/media/screenshots/2b9/2b9ad598d10f7d2eb65f7abe1e7ea1b1.jpg",
    "https://media.rawg.io/media/screenshots/82e/82e72c867380e876dea9951ecfb83679.jpg",
    "https://media.rawg.io/media/screenshots/5bf/5bfc1d5e990afa11bca985a3716be1a3.jpg"
  ],
  "tiendas": [
    "Steam"
  ],
  "etiquetas": [
    "Steam Achievements",
    "Multiplayer",
    "steam-trading-cards",
    "First-Person",
    "FPS",
    "Online Co-Op",
    "Gore",
    "Classic",
    "Comedy",
    "Tactical",
    "stats",
    "Cross-Platform Multiplayer",
    "War",
    "Historical",
    "Team-Based",
    "Realistic",
    "Military",
    "Valve Anti-Cheat enabled",
    "World War II",
    "Includes Source SDK",
    "Class-Based"
  ],
  "create": false
},
{
  "id": 3315,
  "nombre": "Magicka 2",
  "descripcion": "",
  "plataformas": [
    "Linux",
    "macOS",
    "PC",
    "PlayStation 4"
  ],
  "image": "https://media.rawg.io/media/games/516/516c6bfe36ddb498d860f68927448a75.jpg",
  "fecLan": "2015-05-26",
  "rating": 3.67,
  "genres": [
    "Action",
    "Adventure",
    "RPG"
  ],
  "screnshoots": [
    "https://media.rawg.io/media/games/516/516c6bfe36ddb498d860f68927448a75.jpg",
    "https://media.rawg.io/media/screenshots/5ba/5ba82469736858815346b86f1b47f84b.jpg",
    "https://media.rawg.io/media/screenshots/cbd/cbd99b773894d091f8218f5c6d97c0dd.jpg",
    "https://media.rawg.io/media/screenshots/70a/70afb2882d5a18026b6cf39f691a0de4.jpg",
    "https://media.rawg.io/media/screenshots/c52/c5217b965fbc46b17fe26a2c48d931f7.jpg",
    "https://media.rawg.io/media/screenshots/b3e/b3e8892694c64bc68067920af9860216.jpg",
    "https://media.rawg.io/media/screenshots/24a/24ac7297c41423b294d41e5201d69d6b.jpg"
  ],
  "tiendas": [
    "PlayStation Store",
    "Steam"
  ],
  "etiquetas": [
    "Singleplayer",
    "Steam Achievements",
    "Multiplayer",
    "Full controller support",
    "Atmospheric",
    "steam-trading-cards",
    "RPG",
    "Co-op",
    "Open World",
    "cooperative",
    "Online Co-Op",
    "Fantasy",
    "Funny",
    "Gore",
    "Comedy",
    "Split Screen",
    "Local Co-Op",
    "Local Multiplayer",
    "PvP",
    "Team-Based",
    "Isometric",
    "Memes",
    "Magic"
  ],
  "create": false
}]


const HomeScreen =({ navigation}:{navigation: any}, {route}:{route:any})=>{
  const vGames=useSelector((state)=>state.videogamesState)
  const dispatch= useDispatch();
  useEffect(()=>{
    console.log("entro aqui?")
    dispatch(getvideoGames()) ;
  },[])


  

  return (
    <View  style={styles.container}>
    <SectionList
    // <SectionList 
    sections={[
      {
        title: 'Videojuegos Parte 1', 
        data: arreglo2.map( (el)=> {
                  return (
                    {
                      key: `${el.id}`, 
                      img: {uri:el.image }, 
                      nombre:el.nombre ,
                      fecLan: el.fecLan,
                      screenshots: el.screnshoots,
                      informacion: 'ipsom lupsum',
                      rating: el.rating,
                      generos: el.genres,
                      tiendas: el.tiendas,
                      etiquetas: el.etiquetas,
                      imagen: el.image
                    }
                  )})
      },
     
    ]}
    renderItem={({item}) => //renderizo todos los datos q llegan al arreglo no puedo cambiar nombre de item
      <>
          <View>
            <Text style={styles.h2}>{item.nombre}</Text>
            { item.img ? <Image source={item.img} style={styles.image}/> 
                      : <Image source={require('../../assets/Unknown.jpg')} /> 
            }
            <Button 
              
              title={"Ver Detalle"}
              onPress={() =>
              // navigation.navigate('Detail', { name: item.nombre , id: item.key })
              
              navigation.navigate('Detail', { videogame: item , 
                                              nombre:item.nombre, 
                                            rating: item.rating,
                                        screeshots: item.screenshots,
                                            imagen: item.imagen})
              }
              /> 
          </View>
          </>
          }
    renderSectionHeader={({section}) => <Text style={styles.title}>{section.title}</Text>}//aqui puedo cambiar la cabecera de grupo
          // keyExtractor={(item, index) => index}
    />
    </View>
    );

}
const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: color_negro,
    alignItems: 'center',
    width: '100%',
  },
  
  title: {
    color: color_naranja,
    fontSize:30,
    fontWeight:'700',
    alignItems: 'center',
    
  },
  separator: {
    marginVertical: 30,
    height: 5,
    width: '80%',
    color: color_blanco
  },
   h2: {
    color: '#FAE042',
    fontSize: 18,
    marginTop: 8,
    textAlign: 'center',
    alignItems: 'center',
  },
  button: {
    marginBottom: 30,
    width: 250,
    alignItems: 'center',
    backgroundColor: color_verdeNeon,
    borderRadius:8,

  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    fontSize:40,
  
    color: color_negro,

  },
  image: {
    width: 250,
    height: 300,
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonContainer: {
    backgroundColor: color_negro,
    height:'100%',
    width: '100%',
    borderRadius: 5,
    padding: 2,
    margin: 2,
    alignItems: 'center',
    // justifyContent: ,
  },
 
});

export default HomeScreen;