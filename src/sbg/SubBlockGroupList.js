import React from 'react';
import {SubBlockGroup} from './SubBlockGroup';

export class SubBlockGroupList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        this.setState({
            list: [{
                id: 1,
                name: 'SBG Name'
            }]
        });
    }

    componentWillUnmount() {
    }

    render() {
        const content = this.state.list.map((sbg) => <SubBlockGroup value={sbg}/>);
        return (
            <div id="sbg-list"> {content} </div>
        )
    }
}