import {DataServicesGellibrandNews} from '../dataServicesServices/index';

export class ComponentServicesGellibrandNews{

    public static singleImageBanner=[];
    public static fourImageBanner=[];
    public static advancedCard=[];

    public static async getGellibrandNews(){
        let news=await DataServicesGellibrandNews.getGellibrandNews();
        console.log("Gellibrand News",news);
        let imageItem={
            blob:{},
            title:'',
            description:''
        };
        let bannerItems=[];//,singleImageBanner=[],fourImageBanner=[],advancedCard=[];
        for(let file of news){
            if(file.BannerImageUrl){
                const response = await fetch(
                    file.BannerImageUrl.Url
                );
                let itemBlob = await response.blob();
                let item = new Blob([itemBlob], {
                    type:`application/jpg`  //'application/pdf'
                });
                var fileURL = URL.createObjectURL(item);
                console.log(fileURL);
                let bannerItem={} as any;
                bannerItem.blob=fileURL;
                bannerItem.title=file.Title;
                bannerItem.description=file.Description;
                bannerItems.push(bannerItem);
            }
        }
        console.log("Banner Items",bannerItems);
        if(bannerItems.length <=5){
            let counter=0;
            for(let images of bannerItems){
                if(counter==0){
                    this.singleImageBanner.push(images);
                }else{
                    this.fourImageBanner.push(images);
                }
                counter ++;
            }
        }

        if(bannerItems.length >5 && bannerItems.length <=8){
            let counter=0;
            for(let images of bannerItems){
                if(counter==0){
                    this.singleImageBanner.push(images);
                }else if (counter >0 && counter <=4) {
                    this.fourImageBanner.push(images);
                }else{
                    this.advancedCard.push(images);
                }
                counter ++;
            }
        }

        if(bannerItems.length >8 ){
            let counter=0;
            let singleImageCount=bannerItems.length -8;
            for(let images of bannerItems){
                if(counter <=singleImageCount){
                    this.singleImageBanner.push(images);
                }else if (counter >singleImageCount && counter <= singleImageCount+4) {
                    this.fourImageBanner.push(images);
                }else{
                    this.advancedCard.push(images);
                }
                counter ++;
            }
        }

        console.log("Sinlge Image banner",this.singleImageBanner);
        console.log("Four Image banner",this.fourImageBanner);
        console.log("Advance Image",this.advancedCard);
    }
}