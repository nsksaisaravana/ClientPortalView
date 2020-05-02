import * as React from 'react';
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import { FontWeights } from '@uifabric/styling';
import { Icon, IIconStyles, Image, Stack, IStackTokens, Text, ITextStyles } from 'office-ui-fabric-react';
import {IOfficeDocumentCardHorizontalPropValues} from './index';

export  class OfficeCardHorizontal extends React.Component<IOfficeDocumentCardHorizontalPropValues, {}> {

  constructor(props) {
      super(props);
  }

  public render(): JSX.Element {
    
    const siteTextStyles: ITextStyles = {
      root: {
        color: '#025F52',
        fontWeight: FontWeights.bold
      }
    };
    const descriptionTextStyles: ITextStyles = {
      root: {
        color: '#333333',
        fontWeight: FontWeights.regular
      }
    };
    const helpfulTextStyles: ITextStyles = {
      root: {
        color: '#333333',
        fontWeight: FontWeights.regular
      }
    };
    const iconStyles: IIconStyles = {
      root: {
        color: '#0078D4',
        fontSize: 16,
        fontWeight: FontWeights.regular
      }
    };
    const footerCardSectionStyles: ICardSectionStyles = {
      root: {
        borderLeft: '1px solid #F3F2F1'
      }
    };

    const sectionStackTokens: IStackTokens = { childrenGap: 20 };
    const cardTokens: ICardTokens = { 
      childrenMargin: 12 ,
      maxWidth: '100%',
      maxHeight:200
    };
    const footerCardSectionTokens: ICardSectionTokens = { padding: '0px 0px 0px 12px' };

    return (
      <div className="ms-Grid-row">
      <Stack tokens={sectionStackTokens} style={{width:'100%'}}>
        <div className="ms-Grid-col ms-hiddenMdDown" style={{ marginTop: '14px', padding: '0 16px' }}>
          <Card horizontal onClick={()=>this.alertClicked(this.props.teamItem)} tokens={cardTokens} >
            <Card.Item fill>

              {/* Full Height */}
              <div style={{ height: '200px', width: '343px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e6e6e654' }}>
                <img  src={this.props.teamItem.blob} alt="" style={{height:'100%'}} />
              </div>

              {/* Full Width */}
              {/* <div style={{ height: '200px', width: '343px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', backgroundColor: '#e6e6e654', overflow: 'hidden' }}>
                <img  src={this.props.teamItem.blob} alt="" style={{width:'100%', minHeigh: '200px'}} />
              </div> */}

            </Card.Item>
            <Card.Section>
              <Text variant="large" styles={siteTextStyles}>
                {this.props.teamItem.title}
              </Text>
              <Text styles={descriptionTextStyles}>{this.props.teamItem.description}</Text>
            </Card.Section>
          </Card>
        </div>
        <div className="ms-Grid-col  ms-hiddenLgUp">
          <Card  onClick={()=>this.alertClicked(this.props.teamItem)} tokens={cardTokens}>
            <Card.Item fill>

              {/* Full Height */}
              <div style={{ height: '130px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e6e6e654' }}>
                <img  src={this.props.teamItem.blob} alt="" style={{height:'100%'}} />
              </div>

              {/* Full Width */}
              {/* <div style={{ height: '130px', maxWidth: '235px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', backgroundColor: '#e6e6e654', overflow: 'hidden' }}>
                <img  src={this.props.teamItem.blob} alt="" style={{width:'100%'}} />
              </div> */}

            </Card.Item>
            <Card.Section>
              <Text variant="large" styles={siteTextStyles}>
                {this.props.teamItem.title? `${this.props.teamItem.title.substring(0,20)}...`:''}
              </Text>
              <Text styles={descriptionTextStyles}>{this.props.teamItem.description ?`${this.props.teamItem.description.substring(0,20)}...`:'' }</Text>
            </Card.Section>
          </Card>
        </div>
      </Stack>
      </div>
    );
  
    }

  public alertClicked(item){
    window.open(item.url);
  }


}

