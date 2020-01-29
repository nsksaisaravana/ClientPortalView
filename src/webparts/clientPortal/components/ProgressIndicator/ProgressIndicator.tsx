import * as React from 'react';
import { ProgressIndicator, IProgressIndicatorProps } from 'office-ui-fabric-react/lib/ProgressIndicator';
import { IProgressIndicatorPopertyValues } from './IProgressIndicator';
import { css } from '@emotion/core';
import  ScaleLoader from 'react-spinners/GridLoader';
import styles from './ProgressIndicator.module.scss';
const override = css`
    // display: block;
    // margin: 0 auto;
    border-color: red;
    position: absolute;
    width:100%;
    top: 50%;
    left: 50%;
    opacity: 1;
    z-index: 500000;
`;
export  class DocProgressIndicator extends React.Component<IProgressIndicatorPopertyValues, {}> {

    constructor(props){
        super(props);
    }

    public render(): JSX.Element {
        // return <ProgressIndicator barHeight={4} progressHidden={!this.props.propShowProgressIndicator} label="" description="" />;
        return (
            <div className='sweet-loading'>
              <ScaleLoader
                css={override}
                //sizeUnit={"px"}
                //height={35}
                //width={4}
                //radius={2}
                margin={"2px"}
                size={15}
                color={'#D0021B'}
                loading={this.props.propShowProgressIndicator}
              />
            </div> 
          );
      }
}