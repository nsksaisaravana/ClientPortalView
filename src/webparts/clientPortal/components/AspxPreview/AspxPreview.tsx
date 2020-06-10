import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { getId } from 'office-ui-fabric-react/lib/Utilities';
import {IAspxPreviewPopertyValues} from './index';
import { PrimaryButton, DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { Modal, IDragOptions, ContextualMenu,getTheme,FontWeights,FontSizes,mergeStyleSets } from 'office-ui-fabric-react';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
// import * as PDFViewer from 'pdf-viewer-reactjs';
// import * as PDFReader from 'react-typescript-pdf-reader'
const theme = getTheme();
const contentStyles = mergeStyleSets({
    container: {
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'stretch'
    },
    header: [
      theme.fonts.xLargePlus,
      {
        flex: '1 1 auto',
        borderTop: `4px solid ${theme.palette.themePrimary}`,
        color: theme.palette.neutralPrimary,
        display: 'flex',
        fontSize: FontSizes.xLarge,
        alignItems: 'center',
        fontWeight: FontWeights.semibold,
        padding: '12px 12px 14px 24px'
      }
    ],
    body: {
      flex: '4 4 auto',
      padding: '0 24px 24px 24px',
      overflowY: 'hidden',
      selectors: {
        p: {
          margin: '14px 0'
        },
        'p:first-child': {
          marginTop: 0
        },
        'p:last-child': {
          marginBottom: 0
        }
      }
    }
  });

  const iconButtonStyles = mergeStyleSets({
    root: {
      color: theme.palette.neutralPrimary,
      marginLeft: 'auto',
      marginTop: '4px',
      marginRight: '2px'
    },
    rootHovered: {
      color: theme.palette.neutralDark
    }
  });

export  class AspxPreview extends React.Component<IAspxPreviewPopertyValues, {}> {

    private _labelId: string = getId('dialogLabel');
    private _subTextId: string = getId('subTextLabel');

    private _dragOptions: IDragOptions = {
        moveMenuItemText: 'Move',
        closeMenuItemText: 'Close',
        menu: ContextualMenu
      };

    constructor(props){
        super(props);
        this.state={
            hideDialog: true,
            isDraggable: false
        };
    }


    public render(): React.ReactElement<any> {
        return(
            <div>
                {/* <Dialog
                    hidden={this.props.propHidePreviewDialog}
                    onDismiss={this._closeDialog}
                    dialogContentProps={{
                        type: DialogType.normal,
                        title: this.props.propTitle,
                        subText: this.props.propSubText
                    }}
                    modalProps={{
                        titleAriaId: this._labelId,
                        subtitleAriaId: this._subTextId,
                        isBlocking: false,
                        styles: { main: { maxWidth: 950 } },
                        dragOptions: undefined
                    }}
                    >
                        <iframe src="https://asteriaservices.sharepoint.com/:w:/r/sites/Policies/_layouts/15/Doc.aspx?sourcedoc={cb001ae3-608e-47f6-9993-77b3034a05b0}&action=" width="540" height="450"></iframe>
                    <DialogFooter>
                        <PrimaryButton onClick={this.confirm} text="Ok" />
                        <DefaultButton onClick={this._closeDialog} text="Cancel" />
                    </DialogFooter>
                </Dialog> */}
                {/* <Modal
                    titleAriaId={this._labelId}
                    subtitleAriaId={this._subTextId}
                    isOpen={!this.props.propHidePreviewDialog}
                    onDismiss={this._closeDialog}
                    isModeless={true}
                    containerClassName={contentStyles.container}
                    //dragOptions={isDraggable ? this._dragOptions : undefined}
                    >
                         <div className={contentStyles.header}>
                            <span id={this._labelId}>Document Preview</span>
                            <IconButton
                            styles={iconButtonStyles}
                            iconProps={{ iconName: 'Cancel' }}
                            ariaLabel="Close popup modal"
                            onClick={this._closeDialog as any}
                            />
                        </div>
                        <div id={this._subTextId} className={contentStyles.body}>
                            <iframe src={this.props.propFilePath} width="540" height="450"></iframe>
                        </div>
                        
                    </Modal> */}
                     <Panel
                        isOpen={!this.props.propHidePreviewDialog}
                        type={PanelType.medium}
                        onDismiss={this._closeDialog}
                        //headerText="Document Details"  {`Document Details ${this.state.contentType}`}
                        headerText={'Doc Preview'}            
                        closeButtonAriaLabel="Close"
                        //onRenderFooterContent={this._onRenderFooterContent}
                        isBlocking={false}
                        layerProps= {{  eventBubblingEnabled: true }}
                      >

                        <div id={this._subTextId} className={contentStyles.body}>
                            <iframe src={this.props.propFilePath}  width="500" height="750"></iframe>
                        </div>
                      </Panel>
            </div>
        );
    }

    private _showDialog = (): void => {
        this.setState({ hideDialog: false });
    }
    
    private _closeDialog = (): void => {
        this.props.propConfirmClickEvent("Cancel");
    }

    private confirm=():void =>{
        this.props.propConfirmClickEvent("Ok");
    }
}