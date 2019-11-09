import * as React from 'react';
import {DataTable} from 'primereact/datatable';
import {IPrimeDataTableProperties,IPrimeDataTableState} from './index';
import {ContextMenu} from 'primereact/contextmenu';
import {Column} from 'primereact/column';
export class PrimeDataTable extends React.Component<IPrimeDataTableProperties,IPrimeDataTableState> {

    private dt:any;
    private cm:any;

    constructor(props) {
        super(props);
        this.state = {
            selectedFile:null,
            contextMenu: [
                {label: 'View', icon: 'pi pi-fw pi-file', command: (event) => this.viewFile(this.state.selectedFile)},
            ],
            selectedFileRows:null
        };
       
    }

    public render() {
        return (
            <div >
                <div className="content-section implementation" style={{marginTop:10}}>
                    <ContextMenu appendTo={document.body} model={this.state.contextMenu} ref={el => this.cm = el} onHide={() => this.setState({selectedFile: null})}/>
                    <DataTable ref={(el) => this.dt = el} onRowClick={(e) => this.onRowClick(e)} 
                        value={this.props.propClientDetails} paginator={true} rows={10}
                        contextMenuSelection={this.state.selectedFile} onContextMenuSelectionChange={e => this.setState({selectedFile: e.value})}
                        onContextMenu={e => this.cm.show(e.originalEvent)}
                        selection={this.state.selectedFileRows} onSelectionChange={e => this.onFileSelectionChange(e)}
                        emptyMessage="No records found">
                        {/* <Column selectionMode="multiple" style={{width:'3em'}}/> */}
                        {/* <Column field="fileType" header="" body={this.fileTypeTemplate} style={{textAlign:'center',width:'4em'}}/> */}
                        <Column field="title" header="File Name" filter={this.props.propShowFilter}  />
                        {/* <Column field="value2" header="File Type" filter={this.props.propShowFilter} /> */}
                        
                    </DataTable>
                </div>
            </div>
        );
    }

    public viewFile=(selectedFile)=>{
        //window.open(selectedFile.serverRedirectedEmbedUri.replace('interactivepreview','default'),'_blank');
        //ComponentServiceUserEvents.redirectFiles(selectedFile);
    }

    private onRowClick=(e)=>{
        console.log("Rowclick",e);
    }

    public onFileSelectionChange=(e)=>{
        console.log(e);
        // this.setState({selectedGridRows: e.value});
        // ComponentContextStoreUserInputs.setSelectedFileDetails(e.value);
        // this.props.propGridRowSelectionChanged(e.value);
    }
}