import { Web,Logger,LogLevel, sp, Items } from '@pnp/pnpjs';

export class DataServicesDigitalLibrary{

    public static getItemById(recordPoint,itemId){

        let web = new Web(recordPoint);
        return web.lists.getByTitle("DigitalLibrary").items
        .select("Title","Id","File_x0020_Type","FileDirRef","FieldValuesAsText/FileLeafRef","DocTitle","DocDescription","SitePageUrl")
        .expand("FieldValuesAsText")
        // .getById(itemId).get().then((item)=>{
        //     console.log(item);
        //     return item;
        // });
        .filter(`Id eq ${parseInt(itemId)}`).get().then((item)=>{
            //console.log(item);
            return item[0];
        });
    }

    public static getItemByIdFiledValueText(recordPoint,itemId){

        let web = new Web(recordPoint);
        return web.lists.getByTitle("DigitalLibrary").items
        .select("Title","Id","File_x0020_Type","FileDirRef","FieldValuesAsText/FileLeafRef")
        .expand("FieldValuesAsText")
        //.getById(itemId).get().then((item)=>{
        .filter(`Id eq ${parseInt(itemId)}`).get().then((item)=>{
            console.log(item);
            return item;
        });
    }

    public static getItemBlob(recordPoint,relativeUrl){
        //const blob: Blob = await sp.web.getFileByServerRelativeUrl("/sites/dev/documents/file.avi").getBlob();
        let web = new Web(recordPoint);
        return web.getFileByServerRelativeUrl(relativeUrl).getBlob();
    }
}