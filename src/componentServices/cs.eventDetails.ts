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
            clientDetails[0].Site.Title,"Gellibrand");

        let counter=0;
        let date='';
        let month='';
        for(let eventItem of eventDetails){
            date=this.moment(eventItem.EventDate).local().format("DD");
            month=this.moment(eventItem.EventDate).local().format("MMMM");
            eventDetails[counter].eventDate=date;
            eventDetails[counter].eventMonth=month;
            counter ++;
        }
        return eventDetails;
    }
}