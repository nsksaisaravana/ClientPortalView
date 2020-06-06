import { Web,Logger,LogLevel, sp, Items } from '@pnp/pnpjs';

export class DataServicesClientNames{

    public static getClientNameByEmailId(recordPoint,emailId){
        let web = new Web(recordPoint);
        return web.lists.getByTitle("ClientNameLoginMapping").items
            .select("Title","ClientName/Title","ClientName/Id","Site/Title","Site/Id")
            .expand("ClientName","Site")
            .filter(`Title eq '${emailId}' and Enabled eq 1`).get()
            .then((items)=>{
                console.log(items);
                return items;
            });
    }

    public static getSuperAdmin(recordPoint,emailId){
        let web = new Web(recordPoint);
        return web.lists.getByTitle("SuperAdmin").items
            .filter(`Title eq '${emailId}' and Enabled eq 1`).get()
            .then((items)=>{
                console.log(items);
                return items;
            });
    }

    public static getAllClientNames(recordPoint){
        let web = new Web(recordPoint);
        return web.lists.getByTitle("ClientNames").items
            .select("Title","ClientName/Title","ClientName/Id","Site/Title","Site/Id")
            .expand("ClientName","Site")
            .filter(`Active eq 1`).get()
            .then((items)=>{
                console.log(items);
                return items;
            });
    }
}