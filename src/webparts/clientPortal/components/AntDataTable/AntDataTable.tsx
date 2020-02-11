//https://stackoverflow.com/questions/24898012/react-js-setstate-overwriting-not-merging
//https://github.com/ant-design/ant-design/issues/20027
//https://codesandbox.io/s/naughty-wescoff-w1jhd

import * as React from 'react';
import { IAntDataTablePropsValues,IAntDataTableStateValues } from './IAntDataTableProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Table from 'antd/es/table';
import Divider from 'antd/es/divider';
import Popconfirm from 'antd/es/popconfirm';
import Button  from 'antd/es/button';
import Badge  from 'antd/es/badge';
import Menu  from 'antd/es/menu';
import Dropdown  from 'antd/es/dropdown';
import Icon  from 'antd/es/icon';
import 'moment';
import { DataServicesDigitalLibrary } from '../../../../dataServicesServices';
import { ComponentContextInitialSetUpDetails, ComponentContextConnectionString,ComponentContextGridEvents } from '../../../../componentServices';
const dateFormat = 'DD/MM/YYYY';

export  class MyDocsAntDataTable extends React.Component<IAntDataTablePropsValues, IAntDataTableStateValues> {

  private  moment:any = require('moment');

    constructor(props){
      super(props);
      this.state={
        trainingDetails:null,
        expandedRowKeys:[],
        nestedData:[],
        isLoading:false
      };
    }

    private columnDetails=[
      { title: 'Document Name', dataIndex: 'title', key: 'title' },
      { title: 'Doc Date', dataIndex: 'docDate', key: 'docDate' ,
        render:(text, row) =><a> {this.moment.utc(text).local().format("DD/MM/YYYY")}</a>
      },
      {
        title: 'Action',
        dataIndex: 'markascompleted',
        render: (text, record) =>
        <div onClick={()=>this.download(record) }><a>Download</a></div>
        //<a>Delete {this.handleMarkAsCompleted(record.key)}</a>
          // this.props.propMyDocsDetails.length >= 1 ? (
          //   <Popconfirm title="Sure to Mark as completed?" onConfirm={() => this.handleMarkAsCompleted(record)}>
          //     <a>Download</a>
          //   </Popconfirm>
          //   // <div onClick={()=>this.handleMarkAsCompleted(record) }><a>Mark as completed</a></div>
          // ) : null,
      }
      // {
      //   title: '',
      //   dataIndex: 'view',
      //   render: (text, record) =>
      //   <div onClick={()=>this.viewFile(record) }><a>View</a></div>
      // }
    ];


  
    public render(): React.ReactElement<IAntDataTablePropsValues> {
      return (
        <Table
        className="components-table-demo-nested"
        columns={this.columnDetails}
        dataSource={this.props.propMyDocsDetails}
        // expandedRowRender={this.expandedRowRender}
        // onExpand={this.handleExpand}
        pagination={{ pageSize: 10 }}
      />
      );
    }

    private async download(record:any){
      console.log(record);
      ComponentContextGridEvents.downloadFile(record);
    }

    private async viewFile(record:any){
      ComponentContextGridEvents.viewFile(record);
    }

    // private handleExpand = (expanded, record) => {

    //   if(!expanded) return;
    //   this.setState({isLoading: {[record.Id]:true} });
      
    //   console.log(this.state.nestedData);
      
    //   ComponentServicesTrainigDetail.getTrainingDetail(record.Id).then((trainingDetailItems)=>{
    //     this.setState((prevState, props) => ({
    //       nestedData: {
    //           ...prevState.nestedData, // x:0, y:0,
    //           [record.Id]: trainingDetailItems, // overwrites old y
    //       },
    //     }));

    //     console.log(this.state.nestedData);
    //     this.setState({isLoading: {[record.Id]:false} });
      
    //   });

    // }

    private expandedRowRender = record => {
      const columns = [
        //{ title: "Date", dataIndex: "date", key: "date" },
        { title: "Name", dataIndex: "AttendeeName", key: "AttendeeName" },
        {
          title: "Status",
          key: "state",
          render: () => (
            <span>
              <Badge status="success" />
              Finished
            </span>
          )
        }
      ];

      const data = this.state.nestedData[record.Id];

      return (
        <Table
          loading={this.state.isLoading[record.Id] && !data}
          columns={columns}
          dataSource={this.state.nestedData[record.Id]}
          pagination={false}
        />
      );
    }
  
  }