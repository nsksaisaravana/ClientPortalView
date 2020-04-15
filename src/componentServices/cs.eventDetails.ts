import {DataServicesClientNames, DataServiceBaseFile, DataServicesSearchFiles,
    DataServicesSearchResults,DataServicesDigitalLibrary,DataServicesEventDetails} from '../dataServicesServices/index';
import {ComponentContextConnectionString,ComponentContextInitialSetUpDetails} from './index';
import 'moment';

export class ComponentServicesEventDetails{

    private static  moment:any = require('moment');

    public static async fetchEventDetails(clientDetails){
        let teamDetails=ComponentContextInitialSetUpDetails.returnTeam();
        let connectionDetails=ComponentContextConnectionString.setLibraryAndEndPoint(teamDetails);

        let eventDetails=await DataServicesEventDetails.fetchEventDetailsByHouseNameOrClientName(connectionDetails.endPoint,
            clientDetails[0].Site.Title,clientDetails[0].ClientName.Title);

        let counter=0;
        let fromDate='';
        let fromMonth='';
        let fromTime='';
        let toTime='';
        let eventDay='';
        for(let eventItem of eventDetails){
            fromDate=this.moment(eventItem.EventFromDate).local().format("DD");
            fromMonth=this.moment(eventItem.EventFromDate).local().format("MMMM");
            fromTime=this.moment(eventItem.EventFromDate).local().format("hh.mm a");
            toTime=this.moment(eventItem.EventToDate).local().format("hh.mm a");
            eventDay=this.moment(eventItem.EventFromDate).local().format("dddd");
            eventDetails[counter].eventDate=fromDate;
            eventDetails[counter].eventMonth=fromMonth;
            eventDetails[counter].eventFromTime=fromTime;
            eventDetails[counter].eventToTime=toTime;
            eventDetails[counter].eventDay=eventDay;
            eventDetails[counter].EventDesc=eventDetails[counter].EventDesc ? eventDetails[counter].EventDesc.length > 32 ?eventDetails[counter].EventDesc.substring(0, 32)+'..':eventDetails[counter].EventDesc:'';
            counter ++;
        }
        //return new Promise((resolve) => { resolve(null); });
        return eventDetails;
    }
}