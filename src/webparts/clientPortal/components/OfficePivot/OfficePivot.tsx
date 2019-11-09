import * as React from 'react';
import { Label, ILabelStyles } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { IStyleSet } from 'office-ui-fabric-react/lib/Styling';
import {BootstrapCarousel,OfficeDocumentCardCompact,PrimeDataTable,OfficeCard} from '../index';
import {IOfficePivotStateValues} from './index';

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
    root: { marginTop: 10 }
  };
  
  export  class OfficePivot extends React.Component<{}, IOfficePivotStateValues> {

    constructor(props) {
        super(props);
        this.state = {
            clientInvoiceDetails:[
                {
                    "title":"File1"
                },
                {
                    "title":"File2"
                }
            ]
        };
       
    }

    public render(): JSX.Element {
        return (
            <Pivot>
                <PivotItem
                headerText="PIC & NEWS"
                headerButtonProps={{
                    'data-order': 1,
                    'data-title': 'PIC & NEWS'
                }}
                >
                   <div >
                        <div className="row">
                            <div className="col-sm col-md">
                                <BootstrapCarousel></BootstrapCarousel>
                            </div>
                            <div className="col-sm col-md">
                                <div className="row">
                                    <OfficeDocumentCardCompact propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"}></OfficeDocumentCardCompact>
                                </div>
                                <div className="row">
                                    <OfficeDocumentCardCompact propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"}></OfficeDocumentCardCompact>
                                </div>
                                <div className="row">
                                    <OfficeDocumentCardCompact propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"}></OfficeDocumentCardCompact>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <BootstrapCarousel></BootstrapCarousel>
                    </div>
                    <div className="row">
                        <OfficeDocumentCardCompact></OfficeDocumentCardCompact>
                    </div>
                    <div className="row">
                        <OfficeDocumentCardCompact></OfficeDocumentCardCompact>
                    </div>
                    <div className="row">
                        <OfficeDocumentCardCompact></OfficeDocumentCardCompact>
                    </div> */}
                </PivotItem>
                {/* <PivotItem headerText="VIDEOS">
                    <Label styles={labelStyles}>Pivot #2</Label>
                </PivotItem> */}
                {/* <PivotItem headerText="NEWS">
                    <div className="row">
                        <div className="col-sm">
                            <OfficeDocumentCard></OfficeDocumentCard>
                        </div>
                        <div className="col-sm">
                            <OfficeDocumentCard></OfficeDocumentCard>
                        </div>
                        <div className="col-sm">
                            <OfficeDocumentCard></OfficeDocumentCard>
                        </div>
                    </div>
                    <div className="row">
                        <OfficeDocumentCardCompact></OfficeDocumentCardCompact>
                    </div>
                    <div className="row">
                        <OfficeDocumentCardCompact></OfficeDocumentCardCompact>
                    </div>
                    <div className="row">
                        <OfficeDocumentCardCompact></OfficeDocumentCardCompact>
                    </div>
                </PivotItem> */}
                <PivotItem headerText="EVENTS">
                    <div className="row">
                        <OfficeCard propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"}></OfficeCard>
                        <OfficeCard propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"}></OfficeCard>
                        <OfficeCard propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"}></OfficeCard>
                        <OfficeCard propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"}></OfficeCard>
                        <OfficeCard propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"}></OfficeCard>
                        {/* <OfficeDocumentCard propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"}></OfficeDocumentCard> */}
                        {/* <OfficeDocumentCard propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"}></OfficeDocumentCard> */}
                    </div>
                    
                </PivotItem>
                <PivotItem headerText="INVOICE & SIT">
                    <PrimeDataTable propShowFilter={false} propClientDetails={this.state.clientInvoiceDetails}></PrimeDataTable>
                </PivotItem>
                {/* <PivotItem headerText="ITEMS FOR REVIEW">
                    <Label styles={labelStyles}>Pivot #3</Label>
                </PivotItem> */}
            </Pivot>
        );
    }
  }
  