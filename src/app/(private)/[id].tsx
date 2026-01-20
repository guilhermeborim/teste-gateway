import { useLocalSearchParams } from "expo-router";
import { PropertyView } from "../../viewModels/Property/Property.view";

export default function Property() {
  const { id } = useLocalSearchParams();
  return <PropertyView id={id as string} />;
}
