import React from 'react'
import {Text} from "react-native-elements";

interface Props {
    size: number
}

export default class VerticalSpace extends React.Component<Props> {
    render() {
        return (<Text style={{height: this.props.size}}/>)
    }
}
