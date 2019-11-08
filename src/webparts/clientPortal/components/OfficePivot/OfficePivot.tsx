import * as React from 'react';
import { Label, ILabelStyles } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { IStyleSet } from 'office-ui-fabric-react/lib/Styling';
import {BootstrapCarousel} from '../index';

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
    root: { marginTop: 10 }
  };
  
  export  class OfficePivot extends React.Component<{}, {}> {

    public render(): JSX.Element {
        return (
            <Pivot>
                <PivotItem
                headerText="PICURES"
                headerButtonProps={{
                    'data-order': 1,
                    'data-title': 'PICTURES'
                }}
                >
                   <div>
                       <BootstrapCarousel></BootstrapCarousel>
                   </div>
                </PivotItem>
                {/* <PivotItem headerText="VIDEOS">
                    <Label styles={labelStyles}>Pivot #2</Label>
                </PivotItem> */}
                <PivotItem headerText="NEWS">
                    <Label styles={labelStyles}>Pivot #3</Label>
                </PivotItem>
                <PivotItem headerText="EVENTS">
                    <Label styles={labelStyles}>Pivot #2</Label>
                </PivotItem>
                <PivotItem headerText="INVOICE & SIT">
                    <Label styles={labelStyles}>Pivot #3</Label>
                </PivotItem>
                {/* <PivotItem headerText="ITEMS FOR REVIEW">
                    <Label styles={labelStyles}>Pivot #3</Label>
                </PivotItem> */}
            </Pivot>
        );
    }
  }
  