import {
    SPHttpClient,
    SPHttpClientResponse,
    ISPHttpClientOptions,
    ISPHttpClientConfiguration,
    SPHttpClientConfiguration,
    ODataVersion,
  } from '@microsoft/sp-http';

  export class DataContextSPHttpClientQueries{



    public static fetchQuery(endPointWithFilterQuery: string, spHttpClient: SPHttpClient,httpOptions:any){

      const spSearchConfig: ISPHttpClientConfiguration = {
        defaultODataVersion: ODataVersion.v3
      };

      const clientConfigODataV3: SPHttpClientConfiguration = SPHttpClient.configurations.v1.overrideWith(spSearchConfig);

      let promise: Promise<any> = new Promise<any>((resolve, reject) => {
          spHttpClient.get(`${endPointWithFilterQuery}`,
          clientConfigODataV3
          ) // get response & parse body as JSON
        .then((response: SPHttpClientResponse): Promise<{ value: any }> => {
          console.log("Final response");
          return response.json();
        }) // get parsed response as array, and return
        .then((response: any) => {
          console.log("search results",response.PrimaryQueryResult.RelevantResults);
          resolve(response.PrimaryQueryResult.RelevantResults);
        })
        .catch((error: any) => {
          reject(error);
        });
    });

    return promise;
  }







  }