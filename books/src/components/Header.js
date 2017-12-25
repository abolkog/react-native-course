import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.viewStyle} >
            <Text>Books</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        height: 60,
        backgroundColor: '#2a3744'
    }
});

export default Header;
