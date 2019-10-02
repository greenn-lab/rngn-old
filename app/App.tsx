import React from 'react'
import {Image, View} from "react-native";
import {Button, Input} from "react-native-elements";

import VerticalSpace from "./components/VerticalSpace";
import LoginStyle from './styles/LoginStyle'
import logo from "../assets/logo.png";

import Firebase from './firebase'
import {FirebaseProvider} from "./firebase/FirebaseContext";


interface State {
    loading: boolean
    email: string
    password: string
}

export default class App extends React.Component<{}, State> {
    state: Readonly<State> = {
        loading: false,
        email: '',
        password: ''
    };


    login(): void {
        this.setState({
            loading: true
        });

        const {email, password} = this.state;
        Firebase.login(email, password)
            .then(value => {
                console.log('success', value)
            })
            .catch(reason => {
                console.log('failure', reason)
            })
            .finally(() => {
                this.setState({
                    loading: false
                })
            })
    }

    render(): any {
        return (
            <FirebaseProvider value={Firebase}>
                <View style={LoginStyle.container}>
                    <Image source={logo}/>

                    <Input
                        label={'Email'}
                        leftIcon={{type: 'material', name: 'person'}}
                        keyboardType={'email-address'}
                        onChangeText={(v: string) => this.setState({
                            email: v
                        })}
                    />

                    <VerticalSpace size={20}/>

                    <Input
                        label={'Password'}
                        leftIcon={{type: 'material', name: 'lock'}}
                        secureTextEntry={true}
                        onChangeText={(v: string) => this.setState({
                            password: v
                        })}
                    />

                    <VerticalSpace size={50}/>

                    <Button
                        title={'LOGIN'}
                        raised={true}
                        buttonStyle={{width: '100%'}}
                        loading={this.state.loading}
                        onPress={() => this.login()}
                    />
                </View>
            </FirebaseProvider>
        )
    }
}
