import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, TextInput, TextInputProps, View } from "react-native";
import { InputVariants, InputVariantsProps } from "./input.variants";

export interface InputProps extends TextInputProps, InputVariantsProps {
  label?: string;
  containerClassName?: string;
  error?: string;
}

export const Input = ({
  label,
  containerClassName,
  value,
  onChangeText,
  error,
  ...textInputProps
}: InputProps) => {
  const styles = InputVariants();

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>{label}</Text>
      <Pressable className={styles.wrapper()}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          className={styles.input()}
          {...textInputProps}
        />
      </Pressable>

      {error && (
        <Text className={styles.error()}>
          <Ionicons className="ml-2" name="alert-circle-outline" /> {error}
        </Text>
      )}
    </View>
  );
};
