import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 360,
        width: '100%',
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50,
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        fontFamily: theme.fonts.title700,
        lineHeight: 40,
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64,
        fontFamily: theme.fonts.title500,
        lineHeight: 25,
    },
})