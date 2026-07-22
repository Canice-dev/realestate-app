import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null;

  if (isSignedIn) return <Redirect href="/(root)/(tabs)" />;

  return <Redirect href="/sign-in" />;
}

//  "babel-preset-expo": "^54.0.10", @57.0.3
