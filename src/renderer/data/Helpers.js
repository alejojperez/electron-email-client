import * as entities from "./entities/entities";
import Date from "../core/custom-types/Date"
import AbstractEntity from "./entities/AbstractEntity";

export default class Helpers
{
    static fill(entity, json)
    {
        for (let propertyName in json)
        {
            if(!entity.hasOwnProperty(propertyName)) continue;

            if(Array.isArray(entity[propertyName]) && entity.entitiesCollection.hasOwnProperty(propertyName))
            {
                let data = json[propertyName].hasOwnProperty("data")
                    ? json[propertyName]["data"]
                    : json[propertyName];

                if(Array.isArray(data))
                {
                    for(let newEntityDataIndex in data)
                    {
                        let newEntityData = data[newEntityDataIndex];

                        let newEntity = new entities[ entity.entitiesCollection[propertyName] ];
                        newEntity = Helpers.fill(newEntity, newEntityData);

                        entity[propertyName].push(newEntity);
                    }
                }

                continue;
            }

            if(entity[propertyName] instanceof Date)
            {
                entity[propertyName].date = json.hasOwnProperty(propertyName) && json[propertyName] && json[propertyName].hasOwnProperty("date") ? json[propertyName].date : null;
                entity[propertyName].timezone = json.hasOwnProperty(propertyName) && json[propertyName] && json[propertyName].hasOwnProperty("timezone") ? json[propertyName].timezone : null;
                entity[propertyName].timezone_type = json.hasOwnProperty(propertyName) && json[propertyName] && json[propertyName].hasOwnProperty("timezone_type") ? json[propertyName].timezone_type : null;

                continue;
            }

            if(entity[propertyName] instanceof AbstractEntity)
            {
                Helpers.fill(
                    entity[propertyName],
                    json[propertyName].hasOwnProperty("data")
                        ? json[propertyName]["data"]
                        : json[propertyName]
                );

                continue;
            }

            entity[propertyName] = json[propertyName];
        }

        return entity;
    }

    static fillCollection(entityString, json)
    {
        let collection = [];

        for(let jsonData of json)
            collection.push(Helpers.fill(new entities[entityString](), jsonData));

        return collection;
    }
}