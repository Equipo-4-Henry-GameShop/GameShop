import {newVideoGame, inputRef} from "../../Create"

export const disabled = if(newVideoGame.platform.includes(inputRef.target.innerHTML))true