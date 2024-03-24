import { StyleSheet } from "react-native";

export const colors = {
    lightGray: '#f5f5f5',  
    mediumGray: '#9e9e9e',  
    darkGray: '#424242', 
    blue: '#2979ff', 
    white: '#ffffff', }

export const style = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.lightGray,
    },
    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: "flex-end",
    },
    mainResult: {
        color: colors.darkGray,
        fontSize: 60, 
        textAlign: "right",
        marginBottom: 10,
        fontWeight: "bold", 
    },
    subResult: {
        color: colors.mediumGray,
        fontSize: 30, 
        textAlign: "right",
        fontWeight: "normal",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    button: {
        height: 70,
        width: 70,
        backgroundColor: colors.mediumGray,
        borderRadius: 35, 
    },
    buttonText: {
        color: colors.white,
        fontSize: 28,
        fontWeight: "500", 
    },
    specialButton: {
        backgroundColor: colors.blue, 
    },
    specialButtonText: {
        color: colors.lightGray, 
    }
})
