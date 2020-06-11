import * as React from 'react';
import { Label, ILabelStyles } from '@fluentui/react';
import { Pivot, PivotItem } from '@fluentui/react';
import { IStyleSet } from '@fluentui/react';
import {BootstrapCarousel,OfficeDocumentCardCompact,PrimeDataTable,OfficeCard,OfficeCardHorizontal,
    PrimeCard,DynamicCarousel,ImageHorizontal,AspxPreview} from '../index';
import {IOfficePivotStateValues,IOfficePivotPropValues} from './index';
import './OfficePivot.module.scss';
import parse from 'html-react-parser';
import ResizeImage from 'react-resize-image';
import { MyDocsAntDataTable } from '../AntDataTable';
import { Stack, IStackStyles, IStackTokens, IStackItemStyles } from '@fluentui/react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { Document, Page } from 'react-pdf';
import {DataServiceBaseFile} from '../../../../dataServicesServices/index';
const stackItemStyle : IStackItemStyles = {
    root: {
      width: '100%'
    }
  };
const sectionStackTokens: IStackTokens = { childrenGap: 10 };
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
            ],
            hiddenPreviewPage:true,
            aspxFilePath:'',
            numPages:null,
            pageNumber:1,
            filePath:''
        };
       
    }

    public componentDidMount(){

        //this.loadFile();
    }

    public async loadFile(){
        let file='https://gellibrandss.sharepoint.com//sites/Intranet/SiteAssets/Gellibrand Support Service.pdf';
        let blob=await DataServiceBaseFile.returnReponse(file);
        if (blob) {
            var blobUrl = URL.createObjectURL(blob);
            this.setState({filePath:blobUrl});
        }
    }

    public render(): JSX.Element {
        return (
            <div>
            <Pivot>
                <PivotItem
                headerText="Gellibrand PIC & NEWS"
                headerButtonProps={{
                    'data-order': 1,
                    'data-title': 'Gellibrand PIC & NEWS'
                }}
                
                >
                   <div >
                        <Stack style={{width:'100%'}} tokens={sectionStackTokens}>
                        {this.props.propSingleImageBannerForGellibrandNews.map(item=>(
                                <Stack.Item styles={stackItemStyle}>
                                    <OfficeCardHorizontal teamItem={item} clickItem={this.navigateAspxPagePath}></OfficeCardHorizontal>
                                </Stack.Item>
                            ))}
                        </Stack>
                        {/* <div className="row">
                            <div className="col-sm">
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
                        </div> */}
                        {/* <div className="row mt-5">
                            <h3>Latest News from our Gellibrand</h3>
                        </div>
                        <div className="row mt-1">
                            {this.props.propAdvancedCardForGellibrandNews.map(item=>(
                                <div className="col-sm col-md justify-content-center">
                                    <PrimeCard propImagePath={item.blob}></PrimeCard>
                                </div>
                            ))}
                        </div> */}
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
                            {/* <DynamicCarousel propImageItems={this.props.propSingleImageBannerForHouseNews}></DynamicCarousel> */}
                            {/* <Stack tokens={sectionStackTokens}>
                            {this.props.propSingleImageBannerForHouseNews.map(item=>(
                                    <Stack.Item styles={stackItemStyle}>
                                        <ImageHorizontal teamItem={item}></ImageHorizontal>
                                    </Stack.Item>
                                ))}
                            </Stack> */}
                        </div>
                        <Stack style={{width:'100%'}} tokens={sectionStackTokens}>
                        {this.props.propSingleImageBannerForHouseNews.map(item=>(
                                <Stack.Item styles={stackItemStyle}>
                                    <OfficeCardHorizontal teamItem={item} clickItem={this.navigateAspxPagePath}></OfficeCardHorizontal>
                                </Stack.Item>
                            ))}
                        </Stack>
                        {/* <div className="row">
                            <div className="col-sm">
                                <DynamicCarousel propImageItems={this.props.propSingleImageBannerForHouseNews}></DynamicCarousel>
                            </div>
                            <div className="col-sm">
                                <div className="row">
                                    <div className="col">
                                        <img src={this.props.propFourImageBannerForHouseNews ?this.props.propFourImageBannerForHouseNews[0].blob:''}  style={{width:411,height:181}}/>
                                        <div className={styles.centered}><p className="text-light">{this.props.propFourImageBannerForHouseNews ? this.props.propFourImageBannerForHouseNews[0].title:''}</p></div>
                                    </div>
                                    <div className="col">
                                        <img src={this.props.propFourImageBannerForHouseNews ?this.props.propFourImageBannerForHouseNews[1].blob:''}  style={{width:411,height:181}}/>
                                        <div className={styles.centered}><p className="text-light">{this.props.propFourImageBannerForHouseNews ? this.props.propFourImageBannerForHouseNews[1].title:''}</p></div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <img src={this.props.propFourImageBannerForHouseNews ?this.props.propFourImageBannerForHouseNews[2].blob:''}  style={{width:411,height:181}}/>
                                        <div className={styles.centered}><p className="text-light">{this.props.propFourImageBannerForHouseNews ?this.props.propFourImageBannerForHouseNews[2].title:''}</p></div>
                                    </div>
                                    <div className="col">
                                        <img src={this.props.propFourImageBannerForHouseNews ?this.props.propFourImageBannerForHouseNews[3].blob:''}  style={{width:411,height:181}}/>
                                        <div className={styles.centered}><p className="text-light">{this.props.propFourImageBannerForHouseNews ?this.props.propFourImageBannerForHouseNews[3].title:''}</p></div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="row mt-5">
                            <h3>Latest News from our House</h3>
                        </div>
                        <div className="row mt-1">
                            {this.props.propAdvancedCardForHouseNews.map(item=>(
                                <div className="col-sm col-md justify-content-center">
                                    <PrimeCard propImagePath={item.blob}></PrimeCard>
                                </div>
                            ))}
                        </div> */}
                    </div>
                </PivotItem>
                <PivotItem headerText="My PICTURES">
                    <div>
                        <Stack style={{width:'100%'}} tokens={sectionStackTokens}>
                            {this.props.propSingleImageBannerForMyPictures.map(item=>(
                                <Stack.Item styles={stackItemStyle}>
                                    <OfficeCardHorizontal teamItem={item} clickItem={this.navigateAspxPagePath}></OfficeCardHorizontal>
                                </Stack.Item>
                            ))}
                        </Stack>
                        {/* <div className="row">
                            <div className="col-sm">
                                <DynamicCarousel propImageItems={this.props.propSingleImageBannerForMyPictures}></DynamicCarousel>
                            </div>
                            <div className="col-sm">
                                <div className="row">
                                    <div className="col">
                                        <img src={this.props.propFourImageBannerForMyPictures ?this.props.propFourImageBannerForMyPictures[0].blob:''}  style={{width:411,height:181}}/>
                                        <div className={styles.centered}><p className="text-light">{this.props.propFourImageBannerForMyPictures ? this.props.propFourImageBannerForMyPictures[0].title:''}</p></div>
                                    </div>
                                    <div className="col">
                                        <img src={this.props.propFourImageBannerForMyPictures ?this.props.propFourImageBannerForMyPictures[1].blob:''}  style={{width:411,height:181}}/>
                                        <div className={styles.centered}><p className="text-light">{this.props.propFourImageBannerForMyPictures ? this.props.propFourImageBannerForMyPictures[1].title:''}</p></div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <img src={this.props.propFourImageBannerForMyPictures ?this.props.propFourImageBannerForMyPictures[2].blob:''}  style={{width:411,height:181}}/>
                                        <div className={styles.centered}><p className="text-light">{this.props.propFourImageBannerForMyPictures ?this.props.propFourImageBannerForMyPictures[2].title:''}</p></div>
                                    </div>
                                    <div className="col">
                                        <img src={this.props.propFourImageBannerForMyPictures ?this.props.propFourImageBannerForMyPictures[3].blob:''}  style={{width:411,height:181}}/>
                                        <div className={styles.centered}><p className="text-light">{this.props.propFourImageBannerForMyPictures ?this.props.propFourImageBannerForMyPictures[3].title:''}</p></div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="row mt-5">
                            {this.props.propAdvancedCardForMyPictures.map(item=>(
                                <div className="col-sm col-md justify-content-center">
                                <PrimeCard propImagePath={item.blob}></PrimeCard>
                            </div>
                            ))}
                           
                        </div> */}
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
                        {this.props.propEventDetails.map(item=>(
                            <div className="col-sm col-md justify-content-center">
                                {/* <PrimeCard propImagePath={item.blob}></PrimeCard> */}
                                <OfficeCard propEventMonth={item.eventMonth} propEventDay={item.eventDate} 
                                    propImagePath={"https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"}
                                    propEventTitle={item.EventTitle}
                                    propEventDesc={item.EventDesc}
                                    propFromTime={item.eventFromTime}
                                    propToTime={item.eventToTime}
                                    propEventDayName={item.eventDay}
                                    propEventPlace={item.EventPlace}
                                    ></OfficeCard>
                            </div>
                        ))}
                    </div>
                </PivotItem>
                <PivotItem headerText="Client Documents">
                    {/* <PrimeDataTable propShowFilter={false} propClientDetails={this.state.clientInvoiceDetails}></PrimeDataTable> */}
                    <MyDocsAntDataTable propDownloadClick={[]} propMyDocsDetails={this.props.propClientDocuments}></MyDocsAntDataTable>
                </PivotItem>
                <PivotItem headerText="Terms of Use" onClick={this.loadFile}>
                    <div className="row">
                        <div className="col">
                            <iframe src={'https://gellibrandss.sharepoint.com/sites/Intranet/SiteAssets/Gellibrand Support Service.pdf'} width="100%" height="750"></iframe>
                            {/* <div>
                                <Document
                                    file={this.state.filePath}
                                    onLoadSuccess={({ numPages })=>this.setState(numPages)}>

                                        // Showing page 1,2,3,10,11,12
                                        {[1].map(page => (
                                            <Page pageNumber={page} />
                                        ))}

                                </Document>
                        </div> */}
                        </div>
                    </div>
                    
                </PivotItem>
                <PivotItem headerText="Comments and Feedback" onClick={this.redirectToComments}>
                    <div><a href="http://gellibrand.org.au/concerns-compliments/">Please click for Comments and Feedback</a></div>
                </PivotItem>
                {/* <PivotItem headerText="ITEMS FOR REVIEW">
                    <Label styles={labelStyles}>Pivot #3</Label>
                </PivotItem> */}
            </Pivot>
            <AspxPreview propFilePath={this.state.aspxFilePath}
                propTitle={""} propSubText={""} propHidePreviewDialog={this.state.hiddenPreviewPage} propConfirmClickEvent={this.closePreviewPage}></AspxPreview>
            </div>
        );
    }

    public closePreviewPage=()=>{
        this.setState({hiddenPreviewPage:true});
    }

    public navigateAspxPagePath=(path)=>{
        this.setState({aspxFilePath:path,hiddenPreviewPage:false});
    }

    private redirectToComments=()=>{
        window.open("http://gellibrand.org.au/concerns-compliments/ ",'_blank');
    }




  }
  