import { Web,Logger,LogLevel, sp, Items } from '@pnp/pnpjs';
import {DataServiceBaseFile} from './index';

export class DataServicesGellibrandNews{

    public static getGellibrandNews(){
        let web=new Web(DataServiceBaseFile.returnGellibrandUrl());
        return web.lists.getByTitle("Site Pages").items.top(20).orderBy("Created",false)
            .select("Created","Id","FileDirRef","FileRef","File_x0020_Type","FieldValuesAsText/FileLeafRef","BannerImageUrl","Title","Description")
            .top(5)
            .get().then((items)=>{
                return items;
            });
    }
}