import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";

type CheckboxProps<T extends FieldValues> = {
  label: string;
  checked: boolean;
  onPress: () => void;
  control: Control<T>;
  name: Path<T>;
};

export const Checkbox = <T extends FieldValues>({
  label,
  checked,
  onPress,
  control,
  name,
}: CheckboxProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({}) => (
        <TouchableOpacity
          onPress={onPress}
          className="flex-row items-center gap-4"
        >
          <View
            className={`w-4 h-4 rounded-full border border-[#14CE7C] items-center justify-center`}
          >
            {checked && <View className="w-2 h-2 rounded-full bg-[#14CE7C]" />}
          </View>

          <Text className="font-bold text-base text-[#070707]">{label}</Text>
        </TouchableOpacity>
      )}
    />
  );
};
