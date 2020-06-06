import { DepartmentConfiguration } from "../config";
import { ComponentContextConnectionString } from "./cs.connectionString";
import { DataServicesClientNames, DataServiceBaseFile } from "../dataServicesServices";


export class ComponentContextInitialSetUpDetails{
    
    private static selectedTeam;
    public static clientDetails;

    public static returnTeam(){
        let teamDetails= DepartmentConfiguration.returnDigitalLibraryDetails();
        return teamDetails[0];
    }

    public static async getClientNameByEmailId(){
        let teamDetails=this.returnTeam();
        let connectionDetails=ComponentContextConnectionString.setLibraryAndEndPoint(teamDetails);
    
        this.clientDetails= await DataServicesClientNames.getClientNameByEmailId(connectionDetails.endPoint,
            DataServiceBaseFile.returnLoginEmailId());
        return this.clientDetails;
    }

    public static async getSuperAdmin(){
        let teamDetails=this.returnTeam();
        let connectionDetails=ComponentContextConnectionString.setLibraryAndEndPoint(teamDetails);
        let superAdmin=await DataServicesClientNames.getSuperAdmin(connectionDetails.endPoint,
            DataServiceBaseFile.returnLoginEmailId());
        if(superAdmin && superAdmin.length >0){
            return true;
        }
        return false;
    }

    public static async getAllClientNames(){
        let teamDetails=this.returnTeam();
        let connectionDetails=ComponentContextConnectionString.setLibraryAndEndPoint(teamDetails);
        let allClientNames=await DataServicesClientNames.getAllClientNames(connectionDetails.endPoint);
        return allClientNames;
    }


}