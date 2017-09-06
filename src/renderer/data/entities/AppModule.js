import AbstractEntity from "./AbstractEntity";

export default class AppModule extends AbstractEntity
{
    constructor()
    {
        super();

        this.name = "";
        this.icon = "";
        this.url = "";
    }
}