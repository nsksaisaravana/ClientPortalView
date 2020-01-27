import * as React from 'react';
import {Card} from 'primereact/card';
import {IPrimeCardPropValues} from './index';

export  class PrimeCard extends React.Component<IPrimeCardPropValues,{} > {

    constructor(props) {
        super(props);
    }

    public render(): JSX.Element {
        const header = (
            <img alt="Card" src={this.props.propImagePath} style={{width:360,height:159}} />
        );
        return (
                <Card title="Advanced Card" subTitle="Subtitle" style={{width: '360px',height:'159px', display:'block',marginLeft:'auto',marginRight:'auto' }} className="ui-card-shadow"  header={header}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
                </Card>
        );

    }
}