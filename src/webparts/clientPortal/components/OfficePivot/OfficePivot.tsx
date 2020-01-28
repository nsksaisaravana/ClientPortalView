import * as React from 'react';
import { Label, ILabelStyles } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { IStyleSet } from 'office-ui-fabric-react/lib/Styling';
import {BootstrapCarousel,OfficeDocumentCardCompact,PrimeDataTable,OfficeCard,OfficeCardHorizontal,PrimeCard,DynamicCarousel} from '../index';
import {IOfficePivotStateValues,IOfficePivotPropValues} from './index';
import styles from './OfficePivot.module.scss';
import parse from 'html-react-parser';
import ResizeImage from 'react-resize-image';

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
    root: { marginTop: 10 }
  };
  
  export  class OfficePivot extends React.Component<IOfficePivotPropValues, IOfficePivotStateValues> {

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
                headerText="Gellibrand PIC & NEWS"
                headerButtonProps={{
                    'data-order': 1,
                    'data-title': 'Gellibrand PIC & NEWS'
                }}
                >
                   <div >
                        <div className="row">
                            <div className="col-sm">
                                {/* <BootstrapCarousel></BootstrapCarousel> */}
                                <DynamicCarousel propImageItems={this.props.propSingleImageBannerForGellibrandNews}></DynamicCarousel>
                            </div>
                            <div className="col-sm">
                                <div className="row">
                                    <div className="col">
                                        <img src={this.props.propFourImageBannerForGellibrandNews ?this.props.propFourImageBannerForGellibrandNews[0].blob:''}  style={{width:411,height:181}}/>
                                        <div className={styles.centered}><p className="text-light">{this.props.propFourImageBannerForGellibrandNews ? this.props.propFourImageBannerForGellibrandNews[0].title:''}</p></div>
                                    </div>
                                    <div className="col">
                                        <img src={this.props.propFourImageBannerForGellibrandNews ?this.props.propFourImageBannerForGellibrandNews[1].blob:''}  style={{width:411,height:181}}/>
                                        <div className={styles.centered}><p className="text-light">{this.props.propFourImageBannerForGellibrandNews ? this.props.propFourImageBannerForGellibrandNews[1].title:''}</p></div>
                                    </div>
                                   
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <img src={this.props.propFourImageBannerForGellibrandNews ?this.props.propFourImageBannerForGellibrandNews[2].blob:''}  style={{width:411,height:181}}/>
                                        <div className={styles.centered}><p className="text-light">{this.props.propFourImageBannerForGellibrandNews ?this.props.propFourImageBannerForGellibrandNews[2].title:''}</p></div>
                                    </div>
                                    <div className="col">
                                        <img src={this.props.propFourImageBannerForGellibrandNews ?this.props.propFourImageBannerForGellibrandNews[3].blob:''}  style={{width:411,height:181}}/>
                                        <div className={styles.centered}><p className="text-light">{this.props.propFourImageBannerForGellibrandNews ?this.props.propFourImageBannerForGellibrandNews[3].title:''}</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <h3>Latest News from our Gellibrand</h3>
                        </div>
                        <div className="row mt-1">
                             {this.props.propAdvancedCardForGellibrandNews.map(item=>(
                                <div className="col-sm col-md justify-content-center">
                                <PrimeCard propImagePath={item.blob}></PrimeCard>
                            </div>
                            ))}
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
                <PivotItem headerText="House PIC & NEWS">
                    <div>
                        <div className="row">
                            <div className="col-sm">
                                <BootstrapCarousel></BootstrapCarousel>
                            </div>
                            <div className="col-sm">
                                {/* <BootstrapCarousel></BootstrapCarousel> */}
                                <div className="row">
                                    <div className="col">
                                        <img src={"https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"}  style={{width:"100%"}}/>
                                        <div className={styles.centered}><p className="text-light">Image Title</p></div>
                                    </div>
                                    <div className="col">
                                        <img src={"https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"}  style={{width:"100%"}}/>
                                        <div className={styles.centered}><p className="text-light">Image Title</p></div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <img src={"https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"}  style={{width:"100%"}}/>
                                        <div className={styles.centered}><p className="text-light">Image Title</p></div>
                                    </div>
                                    <div className="col">
                                        <img src={"https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"}  style={{width:"100%"}}/>
                                        <div className={styles.centered}><p className="text-light">Image Title</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <h3>Latest News from our House</h3>
                        </div>
                        <div className="row mt-1">
                            <div className="col-sm col-md justify-content-center">
                                <PrimeCard propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"}></PrimeCard>
                            </div>
                            <div className="col-sm col-md justify-content-around">
                                <PrimeCard propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"}></PrimeCard>
                            </div>
                            <div className="col-sm col-md justify-content-around">
                                <PrimeCard propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"}></PrimeCard>
                            </div>
                        </div>
                    </div>
                </PivotItem>
                <PivotItem headerText="My PICTURES">
                    <div>
                        <div className="row">
                            <div className="col-sm">
                                {/* <BootstrapCarousel></BootstrapCarousel> */}
                                <DynamicCarousel propImageItems={this.props.propMyFileCarousel}></DynamicCarousel>
                            </div>
                            <div className="col-sm">
                                {/* <BootstrapCarousel></BootstrapCarousel> */}
                                <div className="row">
                                    <div className="col">
                                        {/* <img src={"https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"}  style={{width:"100%"}}/> */}
                                        <img src={this.props.myFiles?this.props.myFiles[3].blob:''}  style={{width:411,height:181}}/>
                                        {/* <ResizeImage
                                                src={this.props.myFiles[3]}
                                                alt="Tsunami bt hokusai"
                                                options={{ width: 411.250,height:181.891 }}
                                            /> */}
                                        <div className={styles.centered}><p className="text-light">Image Title</p></div>
                                    </div>
                                    <div className="col">
                                        {/* <img src={"https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"}  style={{width:"100%"}}/> */}
                                        {/* <img src={this.props.myFiles[4]}  style={{height:"181.891",width:"411.250"}}/> */}
                                        <img src={this.props.myFiles ?this.props.myFiles[4].blob:''}   style={{width:411,height:181}}/>
                                        <div className={styles.centered}><p className="text-light">Image Title</p></div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        {/* <img src={"https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"}  style={{width:"100%"}}/> */}
                                        {/* <img src={this.props.myFiles[5]}  style={{height:"181.891",width:"411.250"}}/> */}
                                        <img src={this.props.myFiles?this.props.myFiles[5].blob:''}   style={{width:411,height:181}}/>
                                        <div className={styles.centered}><p className="text-light">Image Title</p></div>
                                    </div>
                                    <div className="col">
                                        {/* <img src={"https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"}  style={{width:"100%"}}/> */}
                                        <img src={this.props.myFiles?this.props.myFiles[6].blob:''}   style={{width:411,height:181}}/>
                                        <div className={styles.centered}><p className="text-light">Image Title</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            {this.props.propMyAdvanceCard.map(item=>(
                                <div className="col-sm col-md justify-content-center">
                                <PrimeCard propImagePath={item.blob}></PrimeCard>
                            </div>
                            ))}
                            {/* <div className="col-sm col-md justify-content-center">
                                <PrimeCard propImagePath={this.props.myFiles[7]}></PrimeCard>
                            </div>
                            <div className="col-sm col-md justify-content-around">
                                <PrimeCard propImagePath={this.props.myFiles[8]}></PrimeCard>
                            </div>
                            <div className="col-sm col-md justify-content-around">
                                <PrimeCard propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"}></PrimeCard>
                            </div> */}
                        </div>
                    </div>
                </PivotItem>
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
                        <div className="col">
                            <OfficeCard propEventMonth={'November'} propEventDay={'25'} propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"}></OfficeCard>
                        </div>
                        <div className="col">
                            <OfficeCard propEventMonth={'December'} propEventDay={'15'} propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"}></OfficeCard>
                        </div>
                        <div className="col">
                            <OfficeCard propEventMonth={'January'} propEventDay={'20'} propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"}></OfficeCard>
                        </div>
                        <div className="col">
                            <OfficeCard propEventMonth={'February'} propEventDay={'10'} propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"}></OfficeCard>
                        </div>
                        {/* <div className="col">
                            <OfficeCard propEventMonth={'March'} propEventDay={'09'} propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"}></OfficeCard>
                        </div> */}
                        {/* <OfficeDocumentCard propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"}></OfficeDocumentCard> */}
                        {/* <OfficeDocumentCard propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"}></OfficeDocumentCard> */}
                    </div>

                    {/* <div className="row">
                        <div className="col-sm col-md">
                            <OfficeCard propEventMonth={'February'} propEventDay={'10'} propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"}></OfficeCard>
                        </div>
                        <div className="col-sm col-md">
                            <OfficeCard propEventMonth={'March'} propEventDay={'09'} propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"}></OfficeCard>
                        </div>
                        <div className="col-sm col-md">
                            <OfficeCard propEventMonth={'January'} propEventDay={'20'} propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"}></OfficeCard>
                        </div>
                    </div> */}
                </PivotItem>
                <PivotItem headerText="Client Documents">
                    <PrimeDataTable propShowFilter={false} propClientDetails={this.state.clientInvoiceDetails}></PrimeDataTable>
                </PivotItem>
                {/* <PivotItem headerText="ITEMS FOR REVIEW">
                    <Label styles={labelStyles}>Pivot #3</Label>
                </PivotItem> */}
            </Pivot>
        );
    }




  }
  