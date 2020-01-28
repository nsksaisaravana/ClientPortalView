import * as React from 'react';
import styles from './ClientPortal.module.scss';
import { IClientPortalProps,IClientPortalState } from './index';
import { escape } from '@microsoft/sp-lodash-subset';
import { Spinner,OfficePivot} from '../index';
import {ComponentServicesSearchFiles,ComponentServicesGellibrandNews} from '../../../../componentServices/index';
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
      advancedCardForGellibrandNews:[]
    };
    DataServiceBaseFile.pageLoad(this.props.context);
  }

  public render(): React.ReactElement<IClientPortalProps> {
    if(!this.state.isPageLoading){
      return (
        <div >
          <Spinner propShowSpinner={this.state.showSpinner}></Spinner>
          <OfficePivot myFiles={this.state.myFiles} propMyFileCarousel={this.state.myFilesCarousel} 
            propMyAdvanceCard={this.state.myAdvanceCard}
            propSingleImageBannerForGellibrandNews={this.state.singleImageBannerForGellibrandNews}
            propFourImageBannerForGellibrandNews={this.state.fourImageBannerForGellibrandNews}
            propAdvancedCardForGellibrandNews={this.state.advancedCardForGellibrandNews}
            ></OfficePivot>
        </div>
      );
    }else{
      return (<div><Spinner propShowSpinner={true}></Spinner></div>);
    }
   
  }


  public componentDidMount(){
    this.setState({
      isPageLoading:false
    });
    this.getGellibrandNews();
    ComponentServicesSearchFiles.getClientFiles().then((files)=>{
      console.log("Search completed");
      
      let carouselFiles=[],counter=0,advanceCard=[];
      for(let file of files){
        if(counter <2 ){
          carouselFiles.push(file);
        }
        if(counter ==7 || counter ==8 ){
          advanceCard.push(file);
        }
        counter++;
      }
      this.setState({myFiles:files,myFilesCarousel:carouselFiles,myAdvanceCard:advanceCard});
    });
  }


  public  getGellibrandNews(){
    ComponentServicesGellibrandNews.getGellibrandNews().then(()=>{
      this.setState({
        singleImageBannerForGellibrandNews:ComponentServicesGellibrandNews.singleImageBanner,
        fourImageBannerForGellibrandNews:ComponentServicesGellibrandNews.fourImageBanner,
        advancedCardForGellibrandNews:ComponentServicesGellibrandNews.advancedCard
      });
    });
  }

  ///////////////////
}
