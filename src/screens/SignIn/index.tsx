import React from 'react';
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native';
import { useAuth } from '../../hooks/auth';

import { styles } from './styles';
import { theme } from '../../global/styles/themes';

import IlustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

export function SignIn(){
    const { signIn, loading } = useAuth();

    async function handleSingIn(){
        try {
            await signIn();
        } catch {
            Alert.alert('Problema ao tentar autenticar usuário para login.');
        };
    };

    return(
        <Background>
            <View style={styles.container}>
                <Image source={IlustrationImg} style={styles.image} resizeMode="stretch" />
                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {'\n'}
                        e organize suas {'\n'}
                        jogatinas
                    </Text>
                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games {'\n'}
                        favoritos com seus amigos
                    </Text>
                    {
                        loading ?
                        <ActivityIndicator color={theme.colors.primary} />
                        :
                        <ButtonIcon title="Entrar com Discord" onPress={handleSingIn} />
                    }
                </View>
            </View>
        </Background>
    );
}