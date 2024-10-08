import React from "react";
import {
	List,
	Text,
	HStack,
	VStack,
	type UIColor,
	useUIColor,
	ForEach,
	Label,
  Image,
} from "swiftui-react-native";
import { toWords } from "../utils";

export const ColorSection = () => {
	const UIColors = useUIColor();
	return (
		<>
			<List inset header="testing">
				{ForEach(Object.keys(UIColors), (color, i) => (
          <HStack>
					<Label
						key={i}
						title={toWords(color)}
						icon={<Swatch color={color as UIColor} />}
					/>
          <Image
          fontWeight="bold"
            systemName={'chevron.right'}
            foregroundColor={'systemGray2'}
            fontSize={12}
          />
          </HStack>
				))}
			</List>
		</>
	);
};

const Swatch = ({ color }: { color: UIColor }) => {
	return (
		<VStack
			frame={{ width: 26, height: 26 }}
			cornerRadius={6}
			// border={{ width: 1, color: "systemGray5" }}
			backgroundColor={color}
		>
              <Image
              fontWeight="bold"
              key={1}
              systemName={'person.fill'}
              foregroundColor={'white'}
              fontSize={16}
            />
      </VStack>
	);
};
