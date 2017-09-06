import AbstractRepository from "./AbstractRepository";
import Helpers from "../Helpers";

let json = [
    {
        name: "Web Mail",
        icon: "fa fa-envelope",
        url: "/modules/web-mail",
    },

];

export default class AppModulesRepository extends AbstractRepository
{
    constructor()
    {
        super();
    }

    static all()
    {
        return Helpers.fillCollection("AppModule", json);
    }
}