import React, { Component } from 'react';


export class NumericInput extends React.Component {

    static defaultProps = {
        decimalAllowed: false,
        min: 0,
        step: 1,
        disabled: false,
    };

    constructor(props, defaultProps) {
        super(props, defaultProps);

        this.props = {
            value: {...props.defaultValue ? null : 0
        }
    };

    }

    //Remove??
    componentWillReceiveProps(props) {

    }

     handleIncrease() {

         const element = this.refs.numericInput;
         const currentValue = parseFloat(element.value);

         if ((currentValue + this.props.step) <= this.props.max || this.props.max == null) {
             element.focus();
             element.value = currentValue + parseFloat(this.props.step);
         }

         return false;
    }

     handleDecrease() {

         const element = this.refs.numericInput;
         const currentValue = parseFloat(element.value);

         if ((currentValue - this.props.step) >= this.props.min) {
             element.focus();
             element.value = currentValue - parseFloat(this.props.step);
         }

         return false;
    }

     validateInput(event) {
         console.log(this.props.decimalAllowed);
         const regex = new RegExp(this.props.decimalAllowed ? "^[0-9.]+$" : "^[0-9]+$");
         const key = String.fromCharCode(!event.charCode ? event.which : event.charCode);

         if (!regex.test(key)) {
             event.preventDefault();
             return false;
         }
    }

     render() {

        //Styles

        const numericInput = {
             "position": "relative",
             "display": "block",
             "max-width": "400 px"
         };

         const increaseBtn = {
             "position": "absolute",
             "right": "0",
             "width": "2.26ex",
             "border-color": "rgba(0, 0, 0, 0.0980392)",
             "border-style": "solid",
             "text-align": "center",
             "cursor": "default",
             "transition": "all 0.1s",
             "background": "rgba(0, 0, 0, 0.0980392)",
             "box-shadow": "rgba(0, 0, 0, 0.0980392) -1px -1px 3px inset, rgba(255, 255, 255, 0.701961) 1px 1px 3px inset",
             "top": "2px",
             "bottom": "50%",
             "border-radius": "2px 2px 0px 0px",
             "border-width": "1px 1px 0px",
             "display": (this.props.disabled) ? "none" : ""
         };

         const decreaseBtn = {
             "position": "absolute",
             "right": "0",
             "width": "2.26ex",
             "border-color": "rgba(0, 0, 0, 0.0980392)",
             "border-style": "solid",
             "text-align": "center",
             "cursor": "default",
             "transition": "all 0.1s",
             "background": "rgba(0, 0, 0, 0.0980392)",
             "box-shadow": "rgba(0, 0, 0, 0.0980392) -1px -1px 3px inset, rgba(255, 255, 255, 0.701961) 1px 1px 3px inset",
             "top": "50%",
             "bottom": "2px",
             "border-radius": "0px 0px 2px 2px",
             "border-width": "0px 1px 1px",
             "display": (this.props.disabled) ? "none" : ""
         };

         const increaseIcon = {
             "position": "absolute",
             "top": "50%",
             "left": "50%",
             "width": "0px",
             "height": "0px",
             "border-width": "0px 0.6ex 0.6ex",
             "border-color": "transparent transparent rgba(0, 0, 0, 0.701961)",
             "border-style": "solid",
             "margin": "-0.3ex 0px 0px -0.56ex"
         };

         const decreaseIcon = {
             "position": "absolute",
             "top": "50%",
             "left": "50%",
             "width": "0px",
             "height": "0px",
             "border-width": "0.6ex 0.6ex 0px",
             "border-color": "rgba(0, 0, 0, 0.701961) transparent transparent",
             "border-style": "solid",
             "margin": "-0.3ex 0px 0px -0.56ex"
         };

         const input = {
             "width": "100%"
         };

        // var value = `${this.props.value ? ("value=" + this.props.value) : "defaultValue=" + this.props.defaultValue}`;

         return <span className="numericInput" style={numericInput}>
            <input
                style={input}
                type="text"
                ref="numericInput"
                className={this.props.className}
                defaultValue={this.props.defaultValue}
                value={this.props.value}
                disabled={this.props.disabled}
                placeholder={this.props.placeholder}
                onKeyPress={(event) => this.validateInput(event)}
            />
            <b onClick={this.handleIncrease.bind(this) } style={increaseBtn}>
                <i style={increaseIcon}>
                </i>
            </b>
            <b onClick={this.handleDecrease.bind(this) } style= {decreaseBtn}>
                <i style={decreaseIcon}>
                </i>
            </b>
        </span>
     }
}