import { Web,Logger,LogLevel, sp, Items } from '@pnp/pnpjs';

export class DataServicesClientNames{

    public static getClientNameByEmailId(recordPoint,emailId){
        let web = new Web(recordPoint);
        return web.lists.getByTitle("ClientNameLoginMapping").items
            .select("Title","ClientName/Title","ClientName/Id")
            .expand("ClientName")
            .filter(`Title eq '${emailId}'`).get()
            .then((items)=>{
                console.log(items);
                return items;
            });
    }
}