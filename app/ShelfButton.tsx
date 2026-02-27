import { View, Text, Pressable, StyleSheet } from "react-native";
import {Ionicons} from "@expo/vector-icons";
import { router } from "expo-router";
import { Animated } from "react-native";
import { useRef } from "react";

const scale = useRef(new Animated.Value(1)).current;

function animateTo(value: number) {
    Animated.spring(scale, {
        toValue: value,
        useNativeDriver: true,
        friction: 7,
        tension: 120,
    }).start();
};

type Props = {
    id: string;
    title: string;
    color: string;
    icon: string;
};

export function ShelfButton({id, title, color, icon}: Props) {
   return (
    <Animated.View style={{transform: [{ scale }] }}>
        <Pressable
        onPress={() => {
            if (id === "notes") router.push("/notes" as any);
        }}
        onPressIn={() => animateTo(0.97)} // mobile animation
        onPressOut={() => animateTo(1)} // mobile animation
        onHoverIn={() => animateTo(1.03)} // notebook animation
        onHoverOut={() => animateTo(1)} // notebook animation
        style={[styles.container, { backgroundColor: color }]}>
        <View style={styles.iconWrapper}>
        <Ionicons name={icon as any} size={18} color="rgba(255,255,255,0.9)"/>
        </View>
        <Text style={styles.title}>{title}</Text>
    </Pressable>
    </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
    width: "48%",
    height: 56,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,


    // shadow on iOS mobile
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 6},

    // shadow on android mobile
    elevation: 3,

    },

    iconWrapper: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "rgba(255,255,255,0.22)",
    alignItems: "center",
    marginRight: 10,
    justifyContent: "center",
    },

    title: {
        fontSize: 15,
        fontFamily: "Inter_600SemiBold",
        color: "rgba(255,255,255,0.95)",
    },

    iconText: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
    lineHeight: 14,
    opacity: 0.9,
    },
  
})