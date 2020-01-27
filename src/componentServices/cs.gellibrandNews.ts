import {DataServicesGellibrandNews} from '../dataServicesServices/index';

export class ComponentServicesGellibrandNews{

    public static async getGellibrandNews(){
        let news=await DataServicesGellibrandNews.getGellibrandNews();
        console.log("Gellibrand News",news);
        let imageItem={
            blob:{},
            title:'',
            description:''
        }

        for(let file of news){
            
        }
    }
}