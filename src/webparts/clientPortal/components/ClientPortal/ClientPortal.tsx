import * as React from 'react';
import styles from './ClientPortal.module.scss';
import { IClientPortalProps,IClientPortalState } from './index';
import { escape } from '@microsoft/sp-lodash-subset';
import { Spinner,OfficePivot} from '../index';
export default class ClientPortal extends React.Component<IClientPortalProps, IClientPortalState> {

  constructor(props){
    super(props);
    this.state={
      showSpinner:false,
      isPageLoading:true
    };
  }

  public render(): React.ReactElement<IClientPortalProps> {
    if(!this.state.isPageLoading){
      return (
        <div >
          <Spinner propShowSpinner={this.state.showSpinner}></Spinner>
          <OfficePivot></OfficePivot>
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
  }

  ///////////////////
}
