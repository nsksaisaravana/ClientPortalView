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
}
