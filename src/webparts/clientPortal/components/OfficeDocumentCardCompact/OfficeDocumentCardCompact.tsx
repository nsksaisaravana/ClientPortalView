import * as React from 'react';
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardDetails,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
  DocumentCardType,
  IDocumentCardActivityPerson
} from 'office-ui-fabric-react/lib/DocumentCard';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';
//import { TestImages } from '@uifabric/example-data';
import {IOfficeDocumentCardCompactPropValues} from './index';

export  class OfficeDocumentCardCompact extends React.Component<IOfficeDocumentCardCompactPropValues,{} > {


  constructor(props) {
    super(props);
  }

    public render(): JSX.Element {
        const previewProps: IDocumentCardPreviewProps = {
          previewImages: [
            {
              name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
              linkProps: {
                href: 'http://bing.com',
                target: '_blank'
              },
              previewImageSrc: this.props.propImagePath ,
              //iconSrc: TestImages.iconPpt,
              width: 250,
              //height:350
            },
          ]
        };
    
        return (
          <DocumentCard
          aria-label="Document Card with document preview. Revenue stream proposal fiscal year 2016 version 2.
          Created by Roko Kolar a few minutes ago"
          type={DocumentCardType.compact}
          onClickHref="http://bing.com"
        >
          <DocumentCardPreview previewImages={[previewProps.previewImages[0]]} />
          <DocumentCardDetails>
            <DocumentCardTitle title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, " shouldTruncate={false} />
            <DocumentCardActivity activity="Created a few minutes ago" people={[]} />
          </DocumentCardDetails>
        </DocumentCard>
        );
      }

}

