import { DepartmentConfiguration } from "../config";


export class InitialSetUpDetails{
    
    private static selectedTeam;

    public static returnTeam(){
        let teamDetails= DepartmentConfiguration.returnDigitalLibraryDetails();
        return teamDetails[0];
    }
}