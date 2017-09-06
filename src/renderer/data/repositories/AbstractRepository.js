export default class AbstractRepository
{
    constructor()
    {
        if (this.constructor === AbstractRepository)
            throw new TypeError('Abstract class instantiation: AbstractRepository');

        // ------------------ Abstract Methods ------------------
        // if(typeof this.all !== "function")
        //     throw new TypeError('If ypu extend AbstractRepository, you must implement: all()');
    }
}