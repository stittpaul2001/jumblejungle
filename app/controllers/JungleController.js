import { AppState } from "../AppState.js"


export class JungleController {
    constructor() {
        this.drawjumblelist()
        this.drawTryCount()
    }
    drawjumblelist() {
        const jumbleFiles = AppState.jumbles
        let jumbleFilesContent = ''
        jumbleFiles.forEach(jumbleFile => jumbleFilesContent +=
            jumbleFile.listHTMLTemplate)
        const jumbleFilesListElem = document.getElementById('JumbleList')
        jumbleFilesListElem.innerHTML = jumbleFilesContent
    }

    drawTryCount() {
        const jumbleFiles = AppState.jumbles
        const tryCountElem = document.getElementById('countnumber')
        tryCountElem.setAttribute('title', '${jumbleFiles.length} tries')
        // const boldElem = tryCountElem.querySelector('b')
        // boldElem.innerText = jumbleFiles.length.toString()
    }

    createJumbleFile() {
        event.preventDefault()
        console.log('creating case file');

    }


}