import {libraryNames} from '../componentEnums/index';
import {DataServicesClientNames, DataServiceBaseFile, DataServicesSearchFiles,
     DataServicesSearchResults,DataServicesDigitalLibrary} from '../dataServicesServices/index';
import {ComponentContextConnectionString,ComponentContextInitialSetUpDetails} from './index';

export class ComponentContextHousePictures{

    public static singleImageBanner=[];
    public static fourImageBanner=[];
    public static advancedCard=[];

    public static async getHousePictures(clientDetails){

        let teamDetails=ComponentContextInitialSetUpDetails.returnTeam();
        let connectionDetails=ComponentContextConnectionString.setLibraryAndEndPoint(teamDetails);
        let kqlQuery=`SearchName:${connectionDetails.library} AND MetaData2:"${clientDetails[0].Site.Title}" AND (NOT FileExtension:"docx" NOT FileExtension:"xlsx" NOT FileExtension:"pptx") `;
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
        let housePictures=[];
        for(let item of searchDetails){
            for(let cell of item.Cells){
                if(cell.Key=="ListItemId"){
                    let listItem=await DataServicesDigitalLibrary.getItemById(listEndPoint,cell.Value);
                    console.log(`${listItem.FileDirRef}/${listItem.FieldValuesAsText.FileLeafRef} ` );
                    let path=`${listItem.FileDirRef}/${listItem.FieldValuesAsText.FileLeafRef} `;
                    // let itemBlob=await DataServicesDigitalLibrary.getItemBlob(listEndPoint,path);
                    let blobItem={} as any;
                    // var file = new Blob([itemBlob], {
                    //     type:`application/${listItem.File_x0020_Type}`  //'application/pdf'
                    //   });
                    // var fileURL = URL.createObjectURL(file);
                    blobItem.blob=`https://gellibrandss.sharepoint.com/_api/v2.0/sharePoint:${path}:/driveItem/thumbnails/0/c343x457/content`;
                    // const response = await fetch(
                    //     path
                    // );
                    // let itemBlob = await response.blob();
                    // let imageItemBlob = new Blob([itemBlob], {
                    //     type:`application/jpg`  //'application/pdf'
                    // });

                    // var fileURL = URL.createObjectURL(imageItemBlob);
                    // blobItem.blob=fileURL;
                    blobItem.fileType=listItem.File_x0020_Type;
                    
                    housePictures.push(blobItem);
                }
            }
        }
        console.log(housePictures);
        //return imageArrays;
        this.singleImageBanner=housePictures;
        // console.log("House Pictures Items",housePictures);
        // if(housePictures.length <=5){
        //     let counter=0;
        //     for(let images of housePictures){
        //         if(counter==0){
        //             this.singleImageBanner.push(images);
        //         }else{
        //             this.fourImageBanner.push(images);
        //         }
        //         counter ++;
        //     }
        // }

        // if(housePictures.length >5){
        //     let counter=0;
        //     for(let images of housePictures){
        //         if(counter < housePictures.length -4){
        //             this.singleImageBanner.push(images);
        //         }else{
        //             this.fourImageBanner.push(images);
        //         }
        //         counter ++;
        //     }
        // }

        // if(housePictures.length >5 && housePictures.length <=8){
        //     let counter=0;
        //     for(let images of housePictures){
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

        // if(housePictures.length >8 ){
        //     let counter=0;
        //     let singleImageCount=housePictures.length -8;
        //     for(let images of housePictures){
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

        console.log("Sinlge Image banner House",this.singleImageBanner);
        console.log("Four Image banner house",this.fourImageBanner);
        console.log("Advance Image house",this.advancedCard);
    }
}