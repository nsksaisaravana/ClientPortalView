import { WebPartContext } from '@microsoft/sp-webpart-base';
import pnp from '@pnp/pnpjs';
import {
    SPHttpClient,
    SPHttpClientResponse,
    ISPHttpClientOptions,
  } from '@microsoft/sp-http';

export class DataServiceBaseFile{

  public static spContext:WebPartContext;
  public static userEmail:string;

  public static pageLoad(spContext:WebPartContext){
    this.spContext=spContext;
    this.userEmail=spContext.pageContext.user.email;
  }

  public static returnLoginEmailId(){
    return this.userEmail;
  }

  public static getUserDetailsByEmail(): Promise<number> {
    return pnp.sp.site.rootWeb.ensureUser(this.userEmail).then(result => {
      return result.data.Id;
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

public static returnSiteServerRelativeUrl (){
    //return this.spContext.pageContext.site.serverRelativeUrl;
    return "/sites/Intranet/ManageDocuments";
}

public static returnSiteServerObsoleteUrl (){
    //return this.spContext.pageContext.site.absoluteUrl;
    return "https://gellibrandss.sharepoint.com/sites/Intranet/ManageDocuments";
}

}