import React from 'react';
import { View, Image, ImageBackground, Text, StyleSheet, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export type RootStackParamList = {
  Points: {
    id?: string
  };
};

const RegisterPassword = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  function handleNavigationToPoints() {
    navigation.navigate('Points', { id: '' })
  }

  return (
    <ImageBackground
      source={require('../../assets/start.png')}
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1 }}>

        <View style={styles.main}>
          <Image source={require('../../assets/logo_white.png')} />
          <Text style={styles.subtitle}>comida saudável para</Text>
          <Text style={styles.title}>todos.</Text>
        </View>

        <View style={styles.footer}>
          <RectButton style={styles.button} onPress={handleNavigationToPoints}>
            <Text style={styles.buttonText}>Começar</Text>
          </RectButton>

          <Text style={styles.alreadyMember}>Já tem um conta?&nbsp;
            <TouchableWithoutFeedback>
              <Text style={styles.AnchorAlreadyMember}>Entrar</Text>
            </TouchableWithoutFeedback>
          </Text>
        </View>

      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 24,
  },

  subtitle: {
    color: '#FFF',
    fontSize: 36,
    marginTop: 8,
    fontFamily: 'Poppins_400Regular',
    maxWidth: 180,
    lineHeight: 48,
    opacity: 0.5
  },

  title: {
    color: '#FFF',
    fontSize: 64,
    fontFamily: 'Poppins_600SemiBold',
    marginTop: -8
  },

  alreadyMember: {
    marginTop: 12,
    color: '#ffffff7b',
    fontSize: 18,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
    marginRight: 14
  },

  AnchorAlreadyMember: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
    textDecorationLine: 'underline'
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#fff',
    height: 70,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
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
    color: '#FF460A',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  }
});

export default RegisterPassword;