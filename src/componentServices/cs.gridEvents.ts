import { ComponentContextInitialSetUpDetails,ComponentContextConnectionString } from "./index";

import { DataServicesDigitalLibrary } from "../dataServicesServices/index";

export class ComponentContextGridEvents{

    public static async downloadFile(record){
        let teamDetails=ComponentContextInitialSetUpDetails.returnTeam();
        let connectionDetails=ComponentContextConnectionString.setLibraryAndEndPoint(teamDetails);
        let itemDeails= await DataServicesDigitalLibrary.getItemById(connectionDetails.endPoint,record.id);
        let path="https://" + window.location.hostname  + itemDeails.FileDirRef+ "/" + itemDeails.FieldValuesAsText.FileLeafRef;
        window.open(path);
    }

    public static async viewFile(record){
        console.log(record);
        let teamDetails=ComponentContextInitialSetUpDetails.returnTeam();
        let connectionDetails=ComponentContextConnectionString.setLibraryAndEndPoint(teamDetails);
        let itemDeails= await DataServicesDigitalLibrary.getItemById(connectionDetails.endPoint,record.id);
        let realativePath= itemDeails.FileDirRef+ "/" + itemDeails.FieldValuesAsText.FileLeafRef;
        let itemBlob=await DataServicesDigitalLibrary.getItemBlob(connectionDetails.endPoint,realativePath);
        let blobItem={} as any;
        var file = new Blob([itemBlob], {
            type:`application/${itemDeails.File_x0020_Type}`  //'application/pdf'
        });
        var fileURL = URL.createObjectURL(file);
        window.open(fileURL);
        
    }
}