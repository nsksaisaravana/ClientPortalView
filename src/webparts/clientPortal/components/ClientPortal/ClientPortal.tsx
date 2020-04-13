import * as React from 'react';
import styles from './ClientPortal.module.scss';
import { IClientPortalProps,IClientPortalState } from './index';
import { escape } from '@microsoft/sp-lodash-subset';
import { Spinner,OfficePivot} from '../index';
import {ComponentServicesSearchFiles,ComponentServicesGellibrandNews, ComponentContextInitialSetUpDetails, 
  ComponentContextHousePictures,ComponentContextClientDocuments,
  ComponentServicesEventDetails} from '../../../../componentServices/index';
import { DataServiceBaseFile } from '../../../../dataServicesServices';
export default class ClientPortal extends React.Component<IClientPortalProps, IClientPortalState> {

  constructor(props){
    super(props);
    this.state={
      showSpinner:false,
      isPageLoading:true,
      myFiles:null,
      myFilesCarousel:[],
      myAdvanceCard:[],
      singleImageBannerForGellibrandNews:[],
      fourImageBannerForGellibrandNews:null,
      advancedCardForGellibrandNews:[],
      singleImageBannerForHouseNews:[],
      fourImageBannerForHouseNews:null,
      advancedCardForHouseNews:[],

      singleImageBannerForMyPictures:[],
      fourImageBannerForMyPictures:null,
      advancedCardForMyPicutures:[],
      clientDocuments:[],
      clientEventDetails:[]
    };
    DataServiceBaseFile.pageLoad(this.props.context);
  }

  public render(): React.ReactElement<IClientPortalProps> {
    if(!this.state.isPageLoading){
      return (
        <div className="ms-Grid-row">
          <div  >
            <Spinner propShowSpinner={this.state.showSpinner}></Spinner>
            <OfficePivot 
              propSingleImageBannerForGellibrandNews={this.state.singleImageBannerForGellibrandNews}
              propFourImageBannerForGellibrandNews={this.state.fourImageBannerForGellibrandNews}
              propAdvancedCardForGellibrandNews={this.state.advancedCardForGellibrandNews}
              propSingleImageBannerForHouseNews={this.state.singleImageBannerForHouseNews}
              propFourImageBannerForHouseNews={this.state.fourImageBannerForHouseNews}
              propAdvancedCardForHouseNews={this.state.advancedCardForHouseNews}
              propSingleImageBannerForMyPictures={this.state.singleImageBannerForMyPictures}
              propFourImageBannerForMyPictures={this.state.fourImageBannerForMyPictures}
              propAdvancedCardForMyPictures={this.state.advancedCardForMyPicutures}
              propClientDocuments={this.state.clientDocuments}
              propEventDetails={this.state.clientEventDetails}
              ></OfficePivot>
          </div>
        </div>
      );
    }else{
      return (<div><Spinner propShowSpinner={true}></Spinner></div>);
    }
   
  }


  public componentDidMount(){
   
    this.pageLoad();
    
    
  }

  public async pageLoad(){
    let clientDetails=await ComponentContextInitialSetUpDetails.getClientNameByEmailId();
    // await Promise.all([this.getGellibrandNews(),this.getClientFiles(clientDetails),
    //   this.getHouseNews(clientDetails),this.getClientDocuments(clientDetails),
    //   this.getEventDetails(clientDetails)]);
    this.getEventDetails(clientDetails);
    await Promise.all([this.getGellibrandNews(),this.getClientFiles(clientDetails),
      this.getHouseNews(clientDetails),this.getClientDocuments(clientDetails)
      ]);
    this.setState({
      isPageLoading:false
    });
    // this.getGellibrandNews();
    // this.getClientFiles(clientDetails);
    // this.getHouseNews(clientDetails);
  }

  public getClientFiles(clientDetails){
   

    return ComponentServicesSearchFiles.getClientFiles(clientDetails).then(()=>{
      this.setState({
        singleImageBannerForMyPictures:ComponentServicesSearchFiles.singleImageBanner,
        fourImageBannerForMyPictures:ComponentServicesSearchFiles.fourImageBanner,
        advancedCardForMyPicutures:ComponentServicesSearchFiles.advancedCard
      });
    });
  }


  public  getGellibrandNews(){
    return ComponentServicesGellibrandNews.getGellibrandNews().then(()=>{
      this.setState({
        singleImageBannerForGellibrandNews:ComponentServicesGellibrandNews.singleImageBanner,
        fourImageBannerForGellibrandNews:ComponentServicesGellibrandNews.fourImageBanner,
        advancedCardForGellibrandNews:ComponentServicesGellibrandNews.advancedCard
      });
    });
  }

  public  getHouseNews(clientDetails){
    return ComponentContextHousePictures.getHousePictures(clientDetails).then(()=>{
      this.setState({
        singleImageBannerForHouseNews:ComponentContextHousePictures.singleImageBanner,
        fourImageBannerForHouseNews:ComponentContextHousePictures.fourImageBanner,
        advancedCardForHouseNews:ComponentContextHousePictures.advancedCard
      });
    });
  }

  public async getClientDocuments(clientDetails){
    let clientDocs= await ComponentContextClientDocuments.getClientDocuments(clientDetails);
    this.setState({
      clientDocuments:clientDocs
    });
    return clientDocs;
  }

  public async getEventDetails(clientDetails){
    let eventDetails=await ComponentServicesEventDetails.fetchEventDetails(clientDetails);
    console.log("EventDetails",eventDetails);
    this.setState({
      clientEventDetails:eventDetails
    });
    

  }

  

  ///////////////////
}
