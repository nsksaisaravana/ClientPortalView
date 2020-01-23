import { Web,Logger,LogLevel, sp, Items } from '@pnp/pnpjs';

export class DataServicesClientNames{

    public static getClientNameByEmailId(recordPoint,emailId){
        let web = new Web(recordPoint);
        return web.lists.getByTitle("ClientNameLoginMapping").items
            .filter(`ClientEmail eq ${emailId}`).get()
            .then((items)=>{
                return items;
            });
    }
}