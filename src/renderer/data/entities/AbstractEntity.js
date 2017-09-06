export default class AbstractEntity
{
    constructor()
    {
        if (this.constructor === AbstractEntity)
            throw new TypeError('Abstract class instantiation: AbstractEntity');

        // ------------------ Inherit Properties ------------------
        this.entitiesCollection = {};

        // ------------------ Abstract Methods ------------------
        // ...
    }

    fill(data)
    {
        if(data === null || typeof data !== "object") return;

        Object.getOwnPropertyNames(this).forEach(function (val)
        {
            console.log(this);
            console.log("TEST");

            if(data.hasOwnProperty(val))
                this[val] = data[val];
        });
    }
}