import { WebPartContext } from '@microsoft/sp-webpart-base';
export interface IClientPortalProps {
  description: string;
  context:WebPartContext;
}

export interface IClientPortalState{
  isPageLoading:boolean;
  showSpinner:boolean;
  myFiles:any;
  myFilesCarousel:any;
  myAdvanceCard:any;
  singleImageBannerForGellibrandNews:any;
  fourImageBannerForGellibrandNews:any;
  advancedCardForGellibrandNews:any;

  singleImageBannerForHouseNews:any;
  fourImageBannerForHouseNews:any;
  advancedCardForHouseNews:any;

  singleImageBannerForMyPictures:any;
  fourImageBannerForMyPictures:any;
  advancedCardForMyPicutures:any;

  clientDocuments:any;

  clientEventDetails:any;

  clientNameDetails:any;
  clientSelectedName:string;
  loginUserName:string;
}
