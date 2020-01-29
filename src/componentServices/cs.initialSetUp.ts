import { DepartmentConfiguration } from "../config";
import { ComponentContextConnectionString } from "./cs.connectionString";
import { DataServicesClientNames, DataServiceBaseFile } from "../dataServicesServices";


export class ComponentContextInitialSetUpDetails{
    
    private static selectedTeam;

    public static returnTeam(){
        let teamDetails= DepartmentConfiguration.returnDigitalLibraryDetails();
        return teamDetails[0];
    }

    public static async getClientNameByEmailId(){
        let teamDetails=this.returnTeam();
        let connectionDetails=ComponentContextConnectionString.setLibraryAndEndPoint(teamDetails);
    
        let clientDetails= await DataServicesClientNames.getClientNameByEmailId(connectionDetails.endPoint,
            DataServiceBaseFile.returnLoginEmailId());
        return clientDetails;
    }
}