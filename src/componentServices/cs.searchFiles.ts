import {libraryNames} from '../componentEnums/index';
import {DataServicesClientNames, DataServiceBaseFile, DataServicesSearchFiles,
     DataServicesSearchResults,DataServicesDigitalLibrary} from '../dataServicesServices/index';
import {ComponentContextConnectionString,InitialSetUpDetails} from './index';
export class ComponentServicesSearchFiles{

    public static async getClientFiles(){

        let teamDetails=InitialSetUpDetails.returnTeam();
        let connectionDetails=ComponentContextConnectionString.setLibraryAndEndPoint(teamDetails);
        
        // return DataServicesClientNames.getClientNameByEmailId(connectionDetails.endPoint,
        //     DataServiceBaseFile.returnLoginEmailId()).then((clientDetails:any)=>{
        //         let kqlQuery=`SearchName:${connectionDetails.library} AND MetaData2:"${clientDetails[0].ClientName.Title}"  `;
        //         return DataServicesSearchResults.getSearchResults(connectionDetails.endPoint,kqlQuery,
        //             teamDetails.SearchSourceId,500,0,DataServiceBaseFile.spHttpClient,
        //             DataServiceBaseFile.spHttpOptions).then((searchDetails)=>{
        //                 console.log("Search results",searchDetails);
        //             });
        // });
        
        let clientDetails= await DataServicesClientNames.getClientNameByEmailId(connectionDetails.endPoint,
            DataServiceBaseFile.returnLoginEmailId());
        console.log("ClientDetails",clientDetails);
        let kqlQuery=`SearchName:${connectionDetails.library} AND MetaData2:"${clientDetails[0].ClientName.Title}"  `;
        let searchDetails=await DataServicesSearchResults.getSearchResults(connectionDetails.endPoint,kqlQuery,
            teamDetails.SearchSourceId,500,0,DataServiceBaseFile.spHttpClient,
            DataServiceBaseFile.spHttpOptions);
        return this.fetchItemImageUrl(connectionDetails.endPoint,searchDetails.Table.Rows);

    }

    public static async fetchItemImageUrl(listEndPoint,searchDetails:any){
        // let imageItem={
        //     blob:{},
        //     fileType:''
        // }
        let imageArrays=[];
        for(let item of searchDetails){
            for(let cell of item.Cells){
                if(cell.Key=="ListItemId"){
                    let listItem=await DataServicesDigitalLibrary.getItemById(listEndPoint,cell.Value);
                    console.log(`${listItem.FileDirRef}/${listItem.FieldValuesAsText.FileLeafRef} ` );
                    let path=`${listItem.FileDirRef}/${listItem.FieldValuesAsText.FileLeafRef} `;
                    let itemBlob=await DataServicesDigitalLibrary.getItemBlob(listEndPoint,path);
                    // let blobItem=imageItem;
                    var file = new Blob([itemBlob], {
                        type:`application/${listItem.File_x0020_Type}`  //'application/pdf'
                      });
                    var fileURL = URL.createObjectURL(file);
                    // blobItem.blob=itemBlob;
                    // blobItem.fileType=listItem.File_x0020_Type;
                    imageArrays.push(fileURL);
                }
            }
        }
        console.log(imageArrays);
        return imageArrays;
    }

}