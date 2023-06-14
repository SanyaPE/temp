import { Controller } from "./controller/controller.js"

export class App{
    init(){
        new Controller().init()
    }
}