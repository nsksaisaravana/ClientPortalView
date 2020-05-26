import {SPHttpClient} from '@microsoft/sp-http';
  
import {DataContextSPHttpClientQueries} from './ds.spHttpClientQueries';

export class DataServicesSearchResults{

    private static deptSelectedProperties=`SearchName,MetaData2,MetaData1,MetaData3,TeamFileType,SitePageUrl,
        MetaData4,MetaData5,TeamDocName,TeamLibraryName,TeamDocumentSecuredUsers,IsTeamDocumentSecured,IsMetaTagSecured,IsUserSecured,
        LastModifiedBy,ModifiedById,ModifiedOWSDATE,ModifiedTime,LastModifiedTime,ListItemId,FileRef,Path,ServerRedirectedEmbedURL,
        ServerRedirectedPreviewURL,FileExtension,Filename,Title,ows_q_TEXT__UIVersionString,ows_AppVersion,CreatedBy,ows_AuthorUserId,CreatedById`;
    public static getSearchResults(endPoint, kqlQueryString,sourceId,rowCount,startRow,
        spHttpClient: SPHttpClient,httpOptions:any){
        var searchString ="/_api/search/query?querytext='(" ;

        searchString=searchString +  encodeURIComponent(kqlQueryString) + ")' &sourceid='" + sourceId +"'&selectproperties='" + this.deptSelectedProperties +"	'&rowlimit=" + rowCount + " &startrow=" + startRow +"&TrimDuplicates=false" ;
        endPoint+=searchString;
        return DataContextSPHttpClientQueries.fetchQuery(endPoint,spHttpClient,httpOptions);
    }
}