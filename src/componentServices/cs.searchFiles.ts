import {libraryNames} from '../componentEnums/index';
import {DataServicesClientNames, DataServiceBaseFile, DataServicesSearchFiles, DataServicesSearchResults} from '../dataServicesServices/index';
import {ComponentContextConnectionString,InitialSetUpDetails} from './index';
export class ComponentServicesSearchFiles{

    public static getClientFiles(){

        let teamDetails=InitialSetUpDetails.returnTeam();
        let connectionDetails=ComponentContextConnectionString.setLibraryAndEndPoint(teamDetails);
        DataServicesClientNames.getClientNameByEmailId(connectionDetails.endPoint,
            DataServiceBaseFile.returnLoginEmailId()).then((clientDetails)=>{
                DataServicesSearchResults.getSearchResults(connectionDetails.endPoint,)
        })
    }

}