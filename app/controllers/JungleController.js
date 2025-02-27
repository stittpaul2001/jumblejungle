import { AppState } from "../AppState.js"


export class JungleController {
    constructor(){
        this.drawjumblelist()
    }
    drawjumblelist() {
        const jumbleFiles = AppState.jumbleFiles
        let jumbleFilesContent = ''
        jumbleFiles.forEach(jumbleFile => jumbleFilesContent +=
        jumbleFile.listHTMLTemplate)
        const jumbleFilesListElem = document.getElementById('JumbleList')
        jumbleFilesListElem.innerHTML = jumbleFilesContent
    }
}