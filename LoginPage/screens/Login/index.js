import React, { Component } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import styles from './style';
const logoIcon = require('../../assets/ico-logo.png');
type Props = {};
export default class Login extends Component<Props> {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>

                <View style={{ width: 200, height: 100 }}>
                    <Image source={logoIcon} style={{ width: '100%', height: '100%' }} resizeMode='contain' />
                </View>

                <Text style={{ fontFamily: 'System', fontSize: 24, color: '#5B5A5A', marginTop: 60 }}>WELCOME</Text>

                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: 20, paddingHorizontal: 40 }} behavior="padding" enabled>
                    <TextInput placeholder="Email" placeholderTextColor="#979899" style={{ height: 50, width: '100%', borderColor: '#CFD0D1', borderWidth: 1, backgroundColor: '#F5F6F7', padding: 10, color: '#5B5A5A', color: '#5B5A5A' }} />
                    <TextInput placeholder="Password" placeholderTextColor="#979899" style={{ height: 50, width: '100%', borderColor: '#CFD0D1', borderWidth: 1, backgroundColor: '#F5F6F7', padding: 10, color: '#5B5A5A' }} />

                    <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
                        <Text style={{ color: '#5B5A5A', marginTop: 10 }}>Forgot password?</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ width: '100%', marginTop: 25, height: 50, borderRadius: 50, borderWidth: 1, borderColor: '#CFD0D1', backgroundColor: '#129793', justifyContent: 'center', alignItems: 'center', shadowColor: '#129793', shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 5 }}>
                        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 40 }}>
                    <Text style={{ color: '#505050' }}>Don't have an account?</Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#FF7260' }}>Create new account</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

