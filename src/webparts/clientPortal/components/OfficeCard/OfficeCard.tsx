import * as React from 'react';
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardPreviewProps
} from 'office-ui-fabric-react/lib/DocumentCard';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';
//import { TestImages } from '@uifabric/example-data';
import {IOfficeDocumentCardPropValues} from './index';
import { FontWeights } from '@uifabric/styling';
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import {
  ActionButton,
  IButtonStyles,
  Icon,
  IIconStyles,
  Image,
  Persona,
  Stack,
  IStackTokens,
  Text,
  ITextStyles
} from 'office-ui-fabric-react';

export  class OfficeCard extends React.Component<IOfficeDocumentCardPropValues, {}> {

    constructor(props) {
        super(props);
    }

    public render(): JSX.Element {
      
      const siteTextStyles: ITextStyles = {
        root: {
          color: '#025F52',
          fontWeight: FontWeights.semibold
        }
      };
      const descriptionTextStyles: ITextStyles = {
        root: {
          color: '#333333',
          fontWeight: FontWeights.semibold
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
          borderTop: '1px solid #F3F2F1'
        }
      };
      const backgroundImageCardSectionStyles: ICardSectionStyles = {
        root: {
          backgroundImage: 'url(https://placehold.it/256x144)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          height: 144
        }
      };
      const dateTextStyles: ITextStyles = {
        root: {
          color: '#505050',
          fontWeight: 600
        }
      };
      const subduedTextStyles: ITextStyles = {
        root: {
          color: '#666666'
        }
      };
      const actionButtonStyles: IButtonStyles = {
        root: {
          border: 'none',
          color: '#333333',
          height: 'auto',
          minHeight: 0,
          minWidth: 0,
          padding: 0,
  
          selectors: {
            ':hover': {
              color: '#0078D4'
            }
          }
        },
        textContainer: {
          fontSize: 12,
          fontWeight: FontWeights.semibold
        }
      };
  
      const sectionStackTokens: IStackTokens = { childrenGap: 30 };
      const cardTokens: ICardTokens = { childrenMargin: 12 };
      const footerCardSectionTokens: ICardSectionTokens = { padding: '12px 0px 0px' };
      const backgroundImageCardSectionTokens: ICardSectionTokens = { padding: 12 };
      const agendaCardSectionTokens: ICardSectionTokens = { childrenGap: 0 };
      const attendantsCardSectionTokens: ICardSectionTokens = { childrenGap: 6 };
  


        return (
          <Card onClick={this.alertClicked} tokens={cardTokens}>
          <Card.Section fill verticalAlign="end" styles={backgroundImageCardSectionStyles} tokens={backgroundImageCardSectionTokens}>
            <Text variant="large" styles={dateTextStyles}>
              NOVEMBER
            </Text>
            <Text variant="superLarge" styles={dateTextStyles}>
              26
            </Text>
          </Card.Section>
          <Card.Section>
            <Text variant="small" styles={subduedTextStyles}>
              Category
            </Text>
            <Text styles={descriptionTextStyles}>Contoso marketing customer visit and survey results</Text>
          </Card.Section>
          <Card.Section tokens={agendaCardSectionTokens}>
            <Text variant="small" styles={descriptionTextStyles}>
              Tuesday 2:00-4:30 pm
            </Text>
            <Text variant="small" styles={subduedTextStyles}>
              Conf Room 34/1301
            </Text>
          </Card.Section>
          <Card.Item grow={1}>
            <span />
          </Card.Item>
          <Card.Section horizontal tokens={attendantsCardSectionTokens}>
            <ActionButton text="12 Attendees" styles={actionButtonStyles} />
            <ActionButton text="4 Accepted" styles={actionButtonStyles} />
            <ActionButton text="3 Declined" styles={actionButtonStyles} />
          </Card.Section>
          <Card.Section horizontal styles={footerCardSectionStyles} tokens={footerCardSectionTokens}>
            <Icon iconName="RedEye" styles={iconStyles} />
            <Icon iconName="SingleBookmark" styles={iconStyles} />
            <Stack.Item grow={1}>
              <span />
            </Stack.Item>
            <Icon iconName="MoreVertical" styles={iconStyles} />
          </Card.Section>
        </Card>

        );
      }

    public alertClicked(){

    }


}

