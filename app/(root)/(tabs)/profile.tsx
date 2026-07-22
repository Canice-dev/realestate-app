import { useAuth } from "@clerk/expo";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.replace("/sign-in");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">Profile Page</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>SignOut</Text>
      </TouchableOpacity>
    </View>
  );
}
