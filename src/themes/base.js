import normal from "./normal"
import dark from "./dark"
import global from "./global"

const themes = {
  normal,
  dark,
  global,
}

export default function getTheme(theme) {
  return themes[theme]
}
