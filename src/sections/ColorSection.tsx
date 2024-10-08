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
  Spacer,
  Rectangle,
} from "swiftui-react-native";
import { toWords } from "../utils";
import { View } from "react-native";

export const ColorSection = () => {
	const UIColors = useUIColor();
	return (
		<>
			<List inset header="testing" style={{paddingLeft: 30}} hideSeparators>
				{ForEach(Object.keys(UIColors), (color, i) => (
          <>
          <HStack>
					<Label
          style={{marginLeft: -40}}
						key={i}
						title={toWords(color)}
						icon={<Swatch color={color as UIColor} />}
					/>
          <Spacer/>
          <Image
          fontWeight="bold"
            systemName={'chevron.right'}
            foregroundColor={'systemGray4'}
            fontSize={12}
            style={{marginRight: 5}}
          />
          </HStack>
                    <Rectangle  fill="lightgray" frame={{ width: '100%', height: 1 }} style={{marginLeft: 10, top: 10}} />
                    </>
				))}
			</List>
		</>
	);
};

const Swatch = ({ color }: { color: UIColor }) => {
	return (
		<VStack
			frame={{ width: 26, height: 26, marginRight: 5 }}
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
