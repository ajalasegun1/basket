import { View } from "react-native";
import React, { FC } from "react";

type Props = {
  gap: number;
  horizontal?: boolean;
};
const Spacer: FC<Props> = ({ gap, horizontal }) => {
  return (
    <View
      style={{
        width: horizontal ? gap : undefined,
        height: !horizontal ? gap : undefined,
      }}
    />
  );
};

export default Spacer;
