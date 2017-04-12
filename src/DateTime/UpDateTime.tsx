import * as $ from "jquery";
import "eonasdan-bootstrap-datetimepicker"
import * as React from "react";
import UpDateTimeStyle from './styles'
import {UpDateTimeProps} from './types'
import { BaseControl } from '../BaseControl/BaseControl';

export default class UpDateTime extends BaseControl<UpDateTimeProps,Date> {

    private inputElementGroup: any;
    constructor(p, c) {
        super(p, c);
    }

    
    componentDidMount = () => {
        $(this.inputElementGroup).datetimepicker({ locale: 'fr', format: "DD/MM/YYYY HH:mm" });
        $(this.inputElementGroup).on("dp.change", this.handleChangeJsEvent.bind(this));
    }

    renderControl() {
        return <div className="input-group" style={{ marginBottom: "3px" }} ref={(input) => { this.inputElementGroup = input; }}>
            <input type='text' className="form-control" />
            <span className="input-group-addon">
                <span className="glyphicon glyphicon-calendar"></span>
            </span>
        </div >

    }

    handleChangeJsEvent(event: any) {
        if (typeof (event.date) === "object" && event.date && typeof (event.date.toDate) === "function") {
            this.setState({ value: event.date.toDate().toString() }, this.dispatchOnChange)
            return;
        }
        this.setState({ value: null }, this.dispatchOnChange);
    }

    dispatchOnChange() {
        if (typeof (this.props.onChange) === "function") {
            this.props.onChange(this.state.value);
        }
    }
}
