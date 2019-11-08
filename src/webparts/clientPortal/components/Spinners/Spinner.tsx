import * as React from 'react';
import { css } from '@emotion/core';
import  PropagateLoader from 'react-spinners/PropagateLoader';
import {ISpinnerPopertyValues} from './index';

const override = css`
    border-color: red;
    position: absolute;
    width:100%;
    top: 50%;
    left: 50%;
    opacity: 1;
    z-index: 500000;
`;


export  class Spinner extends React.Component<ISpinnerPopertyValues, {}> {
    constructor(props){
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className='sweet-loading'>
              <PropagateLoader
                css={override}
                size={25}
                color={'#36D7B7'}
                loading={this.props.propShowSpinner}
              />
            </div> 
          );
      }
}