import * as React from 'react';
import { Label, ILabelStyles } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { IStyleSet } from 'office-ui-fabric-react/lib/Styling';

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
    root: { marginTop: 10 }
  };
  
  export default class OfficePivot extends React.Component<{}, {}> {

    public render(): JSX.Element {
        return (
            <Pivot>
                <PivotItem
                headerText="NEWS"
                headerButtonProps={{
                    'data-order': 1,
                    'data-title': 'NEWS'
                }}
                >
                    <Label styles={labelStyles}>Pivot #1</Label>
                </PivotItem>
                <PivotItem headerText="VIDEOS">
                    <Label styles={labelStyles}>Pivot #2</Label>
                </PivotItem>
                <PivotItem headerText="PICTURES">
                    <Label styles={labelStyles}>Pivot #3</Label>
                </PivotItem>
                <PivotItem headerText="EVENTS">
                    <Label styles={labelStyles}>Pivot #2</Label>
                </PivotItem>
                <PivotItem headerText="INVOICE & SIT">
                    <Label styles={labelStyles}>Pivot #3</Label>
                </PivotItem>
                <PivotItem headerText="ITEMS FOR REVIEW">
                    <Label styles={labelStyles}>Pivot #3</Label>
                </PivotItem>
            </Pivot>
        )
    };
  };
  