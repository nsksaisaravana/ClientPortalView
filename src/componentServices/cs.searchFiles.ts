import {libraryNames} from '../componentEnums/index';
import {DataServicesClientNames, DataServiceBaseFile, DataServicesSearchFiles,
     DataServicesSearchResults,DataServicesDigitalLibrary} from '../dataServicesServices/index';
import {ComponentContextConnectionString,ComponentContextInitialSetUpDetails} from './index';
export class ComponentServicesSearchFiles{

    public static singleImageBanner=[];
    public static fourImageBanner=[];
    public static advancedCard=[];

    public static async getClientFiles(clientDetails){

        let teamDetails=ComponentContextInitialSetUpDetails.returnTeam();
        let connectionDetails=ComponentContextConnectionString.setLibraryAndEndPoint(teamDetails);
    
        // let clientDetails= await DataServicesClientNames.getClientNameByEmailId(connectionDetails.endPoint,
        //     DataServiceBaseFile.returnLoginEmailId());
        console.log("ClientDetails",clientDetails);
        //let kqlQuery=`SearchName:${connectionDetails.library} AND MetaData2:"${clientDetails[0].ClientName.Title}" AND (NOT FileExtension:"docx" NOT FileExtension:"xlsx" NOT FileExtension:"pptx" NOT FileExtension:"pdf") `;
        let kqlQuery=`SearchName:${connectionDetails.library} AND MetaData2:"${clientDetails[0].ClientName.Title}" AND MetaData3:"Pictures" `;
        let searchDetails=await DataServicesSearchResults.getSearchResults(connectionDetails.endPoint,kqlQuery,
            teamDetails.SearchSourceId,500,0,DataServiceBaseFile.spHttpClient,
            DataServiceBaseFile.spHttpOptions);
        return this.fetchItemImageUrl(connectionDetails.endPoint,searchDetails.Table.Rows);

    }

    public static async fetchItemImageUrl(listEndPoint,searchDetails:any){
        let imageItem={
            blob:{},
            fileType:'',
            title:'',
            description:''
        };
        let imageArrays=[];
        for(let item of searchDetails){
            for(let cell of item.Cells){
                if(cell.Key=="ListItemId"){
                    let listItem=await DataServicesDigitalLibrary.getItemById(listEndPoint,cell.Value);
                    console.log(`${listItem.FileDirRef}/${listItem.FieldValuesAsText.FileLeafRef} ` );
                    let path=`${listItem.FileDirRef}/${listItem.FieldValuesAsText.FileLeafRef} `;
                    let itemBlob=await DataServicesDigitalLibrary.getItemBlob(listEndPoint,path);
                    let blobItem={} as any;
                    var file = new Blob([itemBlob], {
                        type:`application/${listItem.File_x0020_Type}`  //'application/pdf'
                      });
                    var fileURL = URL.createObjectURL(file);
                    blobItem.blob=fileURL;
                    blobItem.fileType=listItem.File_x0020_Type;
                    
                    imageArrays.push(blobItem);
                }
            }
        }
        console.log(imageArrays);
        //return imageArrays;

        console.log("House Pictures Items",imageArrays);
        if(imageArrays.length <=5){
            let counter=0;
            for(let images of imageArrays){
                if(counter==0){
                    this.singleImageBanner.push(images);
                }else{
                    this.fourImageBanner.push(images);
                }
                counter ++;
            }
        }

        if(imageArrays.length >5){
            let counter=0;
            for(let images of imageArrays){
                if(counter < imageArrays.length -4){
                    this.singleImageBanner.push(images);
                }else{
                    this.fourImageBanner.push(images);
                }
                counter ++;
            }
        }

        // if(imageArrays.length >5 && imageArrays.length <=8){
        //     let counter=0;
        //     for(let images of imageArrays){
        //         if(counter==0){
        //             this.singleImageBanner.push(images);
        //         }else if (counter >0 && counter <=4) {
        //             this.fourImageBanner.push(images);
        //         }else{
        //             this.advancedCard.push(images);
        //         }
        //         counter ++;
        //     }
        // }

        // if(imageArrays.length >8 ){
        //     let counter=0;
        //     let singleImageCount=imageArrays.length -8;
        //     for(let images of imageArrays){
        //         if(counter <=singleImageCount){
        //             this.singleImageBanner.push(images);
        //         }else if (counter >singleImageCount && counter <= singleImageCount+4) {
        //             this.fourImageBanner.push(images);
        //         }else{
        //             this.advancedCard.push(images);
        //         }
        //         counter ++;
        //     }
        // }

        console.log("Sinlge Image banner My Pictures",this.singleImageBanner);
        console.log("Four Image banner My Pictures",this.fourImageBanner);
        console.log("Advance Image My Pictures",this.advancedCard);
    }

}