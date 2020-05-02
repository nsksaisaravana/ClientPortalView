import * as React from 'react';
import  Select  from 'antd/es/select';
import {IAntDropdownProps,IAntDropdownState} from './index';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react';
//import { ComponentContextStoreUserInputs, ComponentContextSetUserUploadValues } from '../../../../componentsContextServices';
const { Option } = Select;
const children = [];

export class AntDropdown extends React.Component<IAntDropdownProps, IAntDropdownState> {

    constructor(props){
        super(props);
        this.state={
            selectedDropdownValue:'',
        };
    }
    
    public render() {
        return (<Select
            showSearch
            style={{ width: '100%' }}
            placeholder={this.props.propDropdownValuesPlaceHolder ?this.props.propDropdownValuesPlaceHolder:''}
            optionFilterProp="children"
            onChange={this.onChange}
            allowClear={true}
            defaultValue={this.props.propDefaultValue != ''? this.props.propDefaultValue:undefined}
            //firstActiveValue={this.props.propDefaultValue != ''? this.props.propDefaultValue:undefined}
            //value={this.state.selectedDropdownValue != ''? this.state.selectedDropdownValue:undefined}
            filterOption={(input, option) =>
            option.props.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            >
            {this.props.propDropdownValues ?this.props.propDropdownValues.map(v => (<Option key={v.ClientName.Title} value={v.ClientName.Title}>{v.ClientName.Title}</Option>)):''}
        </Select>
        );
    }

    private assignDropdownValues(){
        if(this.props.propDropdownValues==null) return;
        for (let item of this.props.propDropdownValues) {
            children.push(<Option key={item.Title}>{item.Title}</Option>);
        }
    }

    private onChange=(value)=>{
        console.log(`selected ${value}`);
        this.setDropDownValue(value);
        //ComponentContextStoreUserInputs.setUploadDropDownValue5(value);
        this.props.propDropdownIndexChanged(value);
        // if(ComponentContextStoreUserInputs.returnUploadSceenOpened()){
        //     this.props.propDocumentCompleted(value);

        // }
    }

    public setDropDownValue=(dropdownValue)=>{
        this.setState({selectedDropdownValue:dropdownValue});
    }

    public componentDidMount(){
        //this.setDropDownValue("Draft");
        //ComponentContextStoreUserInputs.setUploadDropDownValue5("Draft");
        // if(ComponentContextSetUserUploadValues.returnPanelEditMode()){
        //     this.setDropDownValue(ComponentContextStoreUserInputs.returnUploadDropDownValue5());
        //     return;
        // }else  if(ComponentContextStoreUserInputs.returnUploadSceenOpened() && 
        //     !ComponentContextSetUserUploadValues.returnPanelEditMode()){
        //     this.setDropDownValue("Pending");
        //     ComponentContextStoreUserInputs.setUploadDropDownValue5("Pending");
        // }else{
        //     this.setDropDownValue('');
        //     ComponentContextStoreUserInputs.setUploadDropDownValue5("");
        // }

        // if(ComponentContextSetUserUploadValues.returnPanelEditMode()){
        //     this.setDropDownValue(ComponentContextStoreUserInputs.returnUploadDropDownValue5());
        //     return;
        // }
    }

    public componentDidUpdate(previousProps: IAntDropdownProps, previousState: IAntDropdownState) {
        if (previousProps.propDropdownValues !== this.props.propDropdownValues) {
          //this.setState({selectedDropdownValue: null});
        //   if(ComponentContextSetUserUploadValues.returnPanelEditMode()){
        //         this.setDropDownValue(ComponentContextStoreUserInputs.returnUploadDropDownValue5());
        //         return;
        //     }
        }

        // if (previousProps.propSetBlankValue !== this.props.propSetBlankValue) {
        //     this.setDropDownValue('Pending');
        // }
    }
}