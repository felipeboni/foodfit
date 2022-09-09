import React, { useState } from 'react';
import { View, Image, ImageBackground, Text, StyleSheet, SafeAreaView, TouchableWithoutFeedback, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export type RootStackParamList = {
  RegisterEmail: {};
};

const RegisterEmail = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState<string>('');

  function handleNavigationToPoints() {
    navigation.navigate('RegisterEmail', '')
  }

  function validate(text: string) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    return reg.test(text)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={require('../../assets/signup_email.png')}
        style={styles.container}
      >
        <SafeAreaView style={{ flex: 1 }}>

          <View style={styles.logo}>
            <Image source={require('../../assets/logo.png')} />
          </View>


          <View style={styles.main}>
            <View>
              <Text style={styles.subtitle}>vamos</Text>
            </View>

            <View>
              <Text style={styles.title}>começar!</Text>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.label}><Text style={styles.lighter}>primeiro, </Text>insira seu e-mail</Text>

            <TextInput
              style={styles.input}
              onChangeText={email => setEmail(email)}
              placeholder="email"
              keyboardType="email-address"
            />

            <RectButton
            enabled={validate(email) ? true : false}
            style={[styles.button, validate(email) ? styles.enabled : null]}
            onPress={handleNavigationToPoints}>
              <Text style={styles.buttonText}>iniciar jornada</Text>
            </RectButton>
          </View>

        </SafeAreaView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  logo: {
    justifyContent: 'flex-start',
    marginTop: 24,
    marginBottom: 136
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  subtitle: {
    color: '#FF460A',
    fontSize: 36,
    fontFamily: 'Poppins_400Regular',
    opacity: 0.5
  },

  title: {
    color: '#FF460A',
    fontSize: 48,
    fontFamily: 'Poppins_600SemiBold',
    marginTop: -8
  },

  label: {
    color: '#FF460A',
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
  },

  lighter: {
    opacity: 0.5
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#F5F5F5',
    fontFamily: 'Poppins_400Regular',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
    marginTop: 16
  },

  button: {
    backgroundColor: '#FF460A',
    height: 70,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 16,
    opacity: 0.5
  },

  enabled: {
    opacity: 1
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  }
});

export default RegisterEmail;