import React from 'react';

export class SubBlockGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            payment: {
                balance: 0,
                ccList: []
            }
        }
    }
    componentDidMount() {
        this.setState({
            payment: {
                balance: 2000,
                ccList: [
                    {
                        ccNumber: 4411,
                        billingName: "John Goodspeed"
                    },
                    {
                        ccNumber: 6677,
                        billingName: "Sarah Sparks"
                    }
                ]
            }
        });
    }
    render() {
        return (
            <div id={this.props.value.id}>
                <div id={"sbg-" + this.props.value.id}>{this.props.value.name}</div>
            </div>
        )
    }
}