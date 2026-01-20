import { Redirect } from "expo-router";
import "../../global.css";
import { useUserStore } from "../shared/store/auth";

export default function App() {
  const { signIn } = useUserStore();
  if (signIn?.user && signIn?.token) {
    return <Redirect href={"(private)/profile"} />;
  }
  return <Redirect href={"(public)/"} />;
}
