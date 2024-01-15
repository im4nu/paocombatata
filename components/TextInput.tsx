import {
  TextInput as NativeTextInput,
  Platform,
  Text,
  TextInputProps,
  View,
} from "react-native";
import React from "react";

type AuthInputProps = {
  title: string;
  error?: string;
  startDecoration?: React.ReactNode;
  endDecoration?: React.ReactNode;
} & TextInputProps;

export default function TextInput({
  title,
  startDecoration,
  endDecoration,
  error,
  ...rest
}: AuthInputProps) {
  return (
    <View className="flex flex-col justify-center items-start w-full py-2">
      <View className="flex flex-row">
        <Text className="text-black">{title}</Text>
        <Text className="text-red pl-4">{error}</Text>
      </View>

      <View
        className={`flex flex-row w-full rounded-xl px-3 py-4 mt-2 shadow-2xl bg-white shadow-black/50 items-center ${
          Platform.OS === "ios"
            ? "shadow-xl shadow-['#00000099']"
            : "shadow-lg shadow-dark "
        }`}
        style={{ elevation: 20 }}
      >
        {startDecoration}

        <NativeTextInput
          // cursorColor={`${mainDarkColor}`}
          // selectionColor={`${mainDarkColor}`}
          // placeholderTextColor={`${grayColor}`}
          className="w-[85%] pl-2 text-base"
          style={Platform.OS == "ios" ? { lineHeight: 18 } : {}}
          {...rest}
        />

        {endDecoration}
      </View>
    </View>
  );
}
