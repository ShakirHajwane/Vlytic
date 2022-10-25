import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { Subss, Subscribers } from './Subscribers';



const mods: any[] = [
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrCategoryChart | undefined
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Weekly Subs gain and loss
            </div>


            <div className="container fill">
                <IgrCategoryChart
                    chartType="Line"
                    yAxisLabelLeftMargin="0"
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisTitle="Subss"
                    xAxisTitle="Weeks"
                    dataSource={this.Subscribers}
                    includedProperties={["year", "Subs"]}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    computedPlotAreaMarginMode="Series"
                    ref={this.chartRef}>
                </IgrCategoryChart>
                <IgrCategoryChart
                    chartType="Column"
                    yAxisLabelLeftMargin="0"
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisTitle="Subss"
                    xAxisTitle="Weeks"
                    dataSource={this.Subscribers}
                    includedProperties={["year", "Subs"]}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    computedPlotAreaMarginMode="Series"
                    ref={this.chartRef}>
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _Subscribers: Subscribers = null;
    public get Subscribers(): Subscribers {
        if (this._Subscribers == null)
        {
            this._Subscribers = new Subscribers();
        }
        return this._Subscribers;
    }
    


}


// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
