import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16,
        marginTop: 24,
    },

    incidentProperty: {
        marginTop: 8,
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    incidentValue: {
        marginTop: 4,
        fontSize: 15,
        marginBottom: 16,
        color: '#737380',
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16,
    },

    heroTitle: {
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
        fontWeight: 'bold',
    },

    heroDescription: {
        fontSize: 15,
        marginTop: 10,
        color: '#737380',
    },

    actionGroup: {
        marginTop: 26,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    actionButton:{
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
});
