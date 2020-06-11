import { WebPartContext } from '@microsoft/sp-webpart-base';
import pnp from '@pnp/pnpjs';
import {
    SPHttpClient,
    SPHttpClientResponse,
    ISPHttpClientOptions,
  } from '@microsoft/sp-http';
  import { HttpClient } from '@microsoft/sp-http';

export class DataServiceBaseFile{

    public static spContext:WebPartContext;
    public static userEmail:string;
    public static spHttpClient:SPHttpClient;

    public static pageLoad(spContext:WebPartContext){
      this.spContext=spContext;
      this.userEmail=spContext.pageContext.user.email;
      this.spHttpClient=spContext.spHttpClient;
    }

    public static async returnReponse(file){
      const response = await this.spContext.httpClient.get(file, HttpClient.configurations.v1);
      if (response.ok) {
          const blob = await response.blob();
          return blob;
      }
      return null;
  }  

    public static returnLoginEmailId(){
      return this.userEmail;
    }

    public static getUserDetailsByEmail(): Promise<number> {
      return pnp.sp.site.rootWeb.ensureUser(this.userEmail).then(result => {
        return result.data.Id;
      });   
    }

    public static getUserDetails(): Promise<any> {
      return pnp.sp.site.rootWeb.ensureUser(this.userEmail).then(result => {
        //return result.data.Id;
        return result;
      });   
    }

    public static returnEndPointForRespectiveSite(sitePath){
      return "https://gellibrandss.sharepoint.com/sites/Intranet/ManageDocuments" +'_api/web/lists/';
  }

  public static returnEndPointForDefaultSite(){
      return "https://gellibrandss.sharepoint.com/sites/Intranet/ManageDocuments"+ '/_api/web/lists/';
  }

  public static returnEndPointForDefaultSiteForPnpJS(){
      return "https://gellibrandss.sharepoint.com/sites/Intranet/ManageDocuments";
  }

  public static returnGellibrandUrl(){
    //return "https://gellibrandss.sharepoint.com/sites/Intranet/News/GellibrandNews";  
    return "https://gellibrandss.sharepoint.com/sites/Intranet/News/CoffeeLounge";
  }

  public static returnSiteServerRelativeUrl (){
      //return this.spContext.pageContext.site.serverRelativeUrl;
      return "/sites/Intranet/ManageDocuments";
  }

  public static returnSiteServerObsoleteUrl (){
      //return this.spContext.pageContext.site.absoluteUrl;
      return "https://gellibrandss.sharepoint.com/sites/Intranet/ManageDocuments";
  }

  public static spHttpOptions: any = {
    getNoMetadata: <ISPHttpClientOptions>{
        headers: { 'ACCEPT': 'application/json; odata.metadata=none' }
        },
    getFullMetadata: <ISPHttpClientOptions>{
        headers: { 'ACCEPT': 'application/json; odata.metadata=full' }
        },
    postNoMetadata: <ISPHttpClientOptions>{
        headers: {
            'ACCEPT': 'application/json; odata.metadata=none',
            'CONTENT-TYPE': 'application/json',
        }
    },
    updateNoMetadata: <ISPHttpClientOptions>{
        headers: {
            'ACCEPT': 'application/json; odata.metadata=none',
            'CONTENT-TYPE': 'application/json',
            'X-HTTP-Method': 'MERGE'
        }
    },
    deleteNoMetadata: <ISPHttpClientOptions>{
        headers: {
            'ACCEPT': 'application/json; odata.metadata=none',
            'CONTENT-TYPE': 'application/json',
            'X-HTTP-Method': 'DELETE'
        }
    }

  };

}