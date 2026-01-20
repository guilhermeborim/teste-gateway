import { Redirect, Stack } from "expo-router";
import { useUserStore } from "../../shared/store/auth";

export default function PrivateLayout() {
  const { signIn } = useUserStore();

  if (!signIn?.user || !signIn?.token) {
    return <Redirect href={"(public)/"} />;
  }
  return <Stack screenOptions={{ headerShown: false }} />;
}
