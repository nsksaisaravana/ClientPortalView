import { Web,Logger,LogLevel, sp, Items } from '@pnp/pnpjs';
import {DataServiceBaseFile} from './index';

export class DataServicesGellibrandNews{

    public static getGellibrandNews(){
        let web=new Web(DataServiceBaseFile.returnGellibrandUrl());
        return web.lists.getByTitle("Site Pages").items.top(20).orderBy("Created",false)
            .get().then((items)=>{
                return items;
            });
    }
}