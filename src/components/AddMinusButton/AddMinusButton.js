import React, { Component } from 'react';


class AddMinusButton extends Component {
    render() {
        // Add button
        if (this.props.add) {
            return (
                <div className='add-minus-button offWhite'>
                    <i className="material-icons" title={this.props.title} id={this.props.id}>
                        add_circle_outline
                     </i>
                </div>
            );
        }
        else if (this.props.blue) {
            return <div className='add-minus-button offWhite'>
                <i className="material-icons blue" title={this.props.title} id={this.props.id}>
                    remove_circle_outline
                 </i>
            </div>
        }

        // Minus button
        else return (
            <div className='add-minus-button'>
                <i className="material-icons" title={this.props.title} id={this.props.id}>
                    remove_circle_outline
                 </i>
            </div>
        )
    }
}

export default AddMinusButton;