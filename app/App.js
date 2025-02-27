import { JungleController } from "./controllers/JungleController.js"

class App {
  activeJumble = new JungleController

}

window['app'] = new App()


