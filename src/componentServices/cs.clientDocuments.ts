import {DataServicesClientNames, DataServiceBaseFile, DataServicesSearchFiles,
     DataServicesSearchResults,DataServicesDigitalLibrary} from '../dataServicesServices/index';
import {ComponentContextConnectionString,ComponentContextInitialSetUpDetails} from './index';

export class ComponentContextClientDocuments{

    public static async getClientDocuments(clientDetails){

        let teamDetails=ComponentContextInitialSetUpDetails.returnTeam();
        let connectionDetails=ComponentContextConnectionString.setLibraryAndEndPoint(teamDetails);
    
        // let clientDetails= await DataServicesClientNames.getClientNameByEmailId(connectionDetails.endPoint,
        //     DataServiceBaseFile.returnLoginEmailId());
        console.log("ClientDetails",clientDetails);
        //let kqlQuery=`SearchName:${connectionDetails.library} AND MetaData2:"${clientDetails[0].ClientName.Title}" AND (FileExtension:"docx" OR FileExtension:"xlsx" OR FileExtension:"pptx" OR FileExtension:"pdf") `;
        let kqlQuery=`SearchName:${connectionDetails.library} AND MetaData2:"${clientDetails[0].ClientName.Title}" AND MetaData3:"Documents" AND MetaData5:"Published"`;
        let searchDetails=await DataServicesSearchResults.getSearchResults(connectionDetails.endPoint,kqlQuery,
            teamDetails.SearchSourceId,500,0,DataServiceBaseFile.spHttpClient,
            DataServiceBaseFile.spHttpOptions);
        console.log("Client Docs",searchDetails.Table.Rows);
        return this.getClientDocumentMetaData(searchDetails.Table.Rows);

    }

    public static getClientDocumentMetaData(searchDetails:any){
        let itemId="",title="",fileName="",createdDate="";
        let clientDocs=[];
        for(let item of searchDetails){
            for(let cell of item.Cells){
                cell.Key=='Title'? title=cell.Value:'';
                cell.Key=='Filename'? fileName=cell.Value:'';
                cell.Key=='ListItemId'? itemId=cell.Value:0;
                cell.Key=='ModifiedTime'? createdDate=cell.Value:0;
            }
            let clientDocItem={} as any;
            clientDocItem.id=itemId;
            clientDocItem.title=fileName =='' || fileName==null || fileName ==undefined ? title:fileName;
            clientDocItem.createdDate=createdDate;
            clientDocs.push(clientDocItem);
        }
        console.log("Client Docs final",clientDocs);
        return clientDocs;
    }

}