import React, { Component } from 'react';


class AddMinusButton extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         add: true
    //     }
    // }

    // onClick() {
    //     if (this.state.add) {
    //         this.setState({
    //             add: false
    //         })
    //     }
    //     else this.setState({
    //         add: true
    //     })
    // }

    render() {
        if (this.props.add) {
            return (
                <div className='add-minus-button'>
                    <i className="material-icons" title={this.props.title} id={this.props.id}>
                        add_circle_outline
                     </i>
                </div>
            );
        }
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