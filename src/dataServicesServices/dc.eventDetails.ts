import { Web,Logger,LogLevel, sp, Items } from '@pnp/pnpjs';
import 'moment';
export class DataServicesEventDetails{

    private static  moment:any = require('moment');

    public static saveEventDetails(endPoint,eventDetails:any):Promise<any>{
        let web=new Web(endPoint);
        let list=web.lists.getByTitle("EventDetails");
        return list.items.add({
            Title:eventDetails.houseName,
            EventDate:eventDetails.eventDate,
            EventTitle:eventDetails.eventTitle,
            EventDesc:eventDetails.eventDesc
        });
    }

    public static async fetchEventDetails(endPoint):Promise<any>{
        //let currentDate = new Date(new Date().setDate(new Date().getDate() - 30));
        let currentDate = new Date(new Date().setDate(new Date().getDate()));
        let currentDateString= this.moment(currentDate).utc().format("YYYY-MM-DD");
        currentDateString+="T00:00:00.000Z";
        let web=new Web(endPoint);
        let items=await web.lists.getByTitle("EventDetails").items
        .filter(`EventFromDate gt datetime'${currentDateString}'`)
        .top(5000)
        .orderBy("EventFromDate",true)
        .get();
        return items;
    }

    public static async fetchEventDetailsByHouseNameOrClientName(endPoint,clientName,houseName):Promise<any>{
        //let currentDate = new Date(new Date().setDate(new Date().getDate() - 30));
        let currentDate = new Date(new Date().setDate(new Date().getDate()));
        let currentDateString= this.moment(currentDate).utc().format("YYYY-MM-DD");
        currentDateString+="T00:00:00.000Z";
        let web=new Web(endPoint);
        let items=await web.lists.getByTitle("EventDetails").items
        .filter(`EventFromDate gt datetime'${currentDateString}' and (Title eq '${clientName}' or Title eq '${houseName}')`)
        .top(5000)
        .orderBy("EventFromDate",true)
        .get();
        return items;
    }
}