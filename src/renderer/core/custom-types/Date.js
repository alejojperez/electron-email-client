import moment from "moment";
import Constants from "../constants";

export default class Date
{
    constructor(date, timezone, timezone_type)
    {
        this.date = date;
        this.timezone = timezone;
        this.timezone_type = timezone_type;
    }

    format(format)
    {
        return moment(this.date, Constants.DATE_FORMAT).format(format);
    }
}
