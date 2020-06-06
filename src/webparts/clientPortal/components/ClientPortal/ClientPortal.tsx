import * as React from 'react';
import styles from './ClientPortal.module.scss';
import { IClientPortalProps,IClientPortalState } from './index';
import { escape } from '@microsoft/sp-lodash-subset';
import { Spinner,OfficePivot,AntDropdown} from '../index';
import {ComponentServicesSearchFiles,ComponentServicesGellibrandNews, ComponentContextInitialSetUpDetails, 
  ComponentContextHousePictures,ComponentContextClientDocuments,
  ComponentServicesEventDetails,
  ComponentContextInitializeObjects} from '../../../../componentServices/index';
import { DataServiceBaseFile } from '../../../../dataServicesServices';
import { Stack, IStackStyles, IStackTokens, IStackItemStyles } from '@fluentui/react';
import { DefaultPalette } from 'office-ui-fabric-react/lib/Styling';

const stackItemStyles: IStackItemStyles = {
  root: {
    background: DefaultPalette.themePrimary,
    color: DefaultPalette.white,
    padding: 5,
  },
};


// Styles definition
const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.themeTertiary,
  },
};
const itemStyles: React.CSSProperties = {
  alignItems: 'center',
  //background: DefaultPalette.themePrimary,
  color: DefaultPalette.white,
  display: 'flex',
  height: 50,
  justifyContent: 'center',
  width: 50,
};

export default class ClientPortal extends React.Component<IClientPortalProps, IClientPortalState> {

  private clientDetails:any=[];

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
      clientEventDetails:[],
      clientNameDetails:[],
      clientSelectedName:'',
      loginUserName:''
    };
    DataServiceBaseFile.pageLoad(this.props.context);
  }

  public render(): React.ReactElement<IClientPortalProps> {
    if(!this.state.isPageLoading){
      return (
        <div>
          <div className="ms-hiddenMdDown">
         {/* <Stack horizontal horizontalAlign="space-between" styles={stackStyles}> */}
         <Stack horizontal horizontalAlign="space-between" verticalAlign='center' style={{ padding: '0 12px', color: 'white', background: '#266ead' }}>
          <span>
            <img src={'/sites/Intranet/SiteAssets/Gellibrand_real_emblem250.gif'} style={{height:54,width:148}}/>
          </span>
          <span style={{ fontSize: '28px' }} ><b>Client Portal</b></span>
          <span style={{ textAlign: 'right' }} >Welcome<br></br><b>{this.state.loginUserName}</b></span>
        </Stack>
        </div>
        <div className="ms-hiddenLgUp" style={{ padding: '0px 12px 6px', color: 'white', background: '#266ead', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
         <div style={{ display: 'flex', flexDirection: 'column' }}>
         <span>
            <img src={'/sites/Intranet/SiteAssets/Gellibrand_real_emblem250.gif'} style={{height:44,width:122}}/>
          </span>
          <span style={{ fontSize: '24px' }} ><b>Client Portal</b></span>
         </div>
         <span style={{ textAlign: 'right' }} >Welcome<br></br><b>{this.state.loginUserName}</b></span>
        </div>
          <div className="ms-Grid-row" style={{display:this.state.clientNameDetails.length>1  ? '' : 'none', padding: '20px 10px 10px', margin: '0px', background: '#1bb7ea'}}>
            <AntDropdown propDefaultValue={this.state.clientSelectedName} propDropdownValues={this.state.clientNameDetails} propSetBlankValue={""} 
              propDropdownValuesPlaceHolder="" propDocumentCompleted={this.dropDownCompleted} propDropdownIndexChanged={this.dropDownIndexChanged}
            ></AntDropdown>
          </div>
          <div className="ms-Grid-row" style={{ margin: '0px' }}>
            <div>
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
        </div>
      );
    }else{
      return (<div><Spinner propShowSpinner={true}></Spinner></div>);
    }
   
  }


  public componentDidMount(){
    //this.pageLoad();
    this.checkSuperAdminAndProcess();
    this.getUserDetails();
  }

  public dropDownCompleted=(value)=>{
    console.log(value);
  }

  public async checkSuperAdminAndProcess(){
    let superAdmin=await ComponentContextInitialSetUpDetails.getSuperAdmin();
    // if(superAdmin==true){
    //   let allClientNames=await ComponentContextInitialSetUpDetails.getAllClientNames();
    // }else{
    //   this.pageLoad();
    // }
    this.pageLoad(superAdmin);
  }

  public  getUserDetails=async ()=>{
    let userDetails:any=await DataServiceBaseFile.getUserDetails();
    console.log(userDetails);
    this.setState({
      loginUserName:userDetails.data.Title
    });
  }

  public dropDownIndexChanged=async(value)=>{
    console.log(value);
    let clientItem=this.clientDetails.filter(item=> item.ClientName.Title==value);
    await Promise.all([this.getClientFiles(clientItem),
      this.getHouseNews(clientItem),this.getClientDocuments(clientItem)
    ]);
  }


  public async pageLoad(superAdmin){
    if(superAdmin==true){
      this.clientDetails=await ComponentContextInitialSetUpDetails.getAllClientNames();
    }else{
      this.clientDetails=await ComponentContextInitialSetUpDetails.getClientNameByEmailId();
    }
    
    // await Promise.all([this.getGellibrandNews(),this.getClientFiles(clientDetails),
    //   this.getHouseNews(clientDetails),this.getClientDocuments(clientDetails),
    //   this.getEventDetails(clientDetails)]);
    this.getEventDetails(this.clientDetails);
    await Promise.all([this.getGellibrandNews(),this.getClientFiles(this.clientDetails),
      this.getHouseNews(this.clientDetails),this.getClientDocuments(this.clientDetails)
      ]);
    this.setState({
      isPageLoading:false,
      clientNameDetails:this.clientDetails,
      clientSelectedName:this.clientDetails[0].ClientName.Title
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
