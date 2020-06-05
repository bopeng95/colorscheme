import React from 'react';

import Text from 'components/Text';
import Flex from 'components/Flex';
import ColorBox from 'components/ColorBox';

const ColorContainer = (props) => {
  const { title, width, colors, handleColor } = props;

  const list = Object.entries(colors).reduce((result, color, i) => {
    const [key, value] = color;
    const changeColor = handleColor(key);
    const Comp = (
      <Flex key={key} direction="column">
        <Text color="white">{key}</Text>
        <ColorBox color={value} handleColor={changeColor} />
      </Flex>
    );
    const location = Math.floor(i / 4);
    if (!result[location]) result[location] = [];
    result[location].push(Comp);
    return result;
  }, []);

  const Component = (
    <>
      <Flex gutter fullWidth>
        {list[0]}
      </Flex>
      <Flex gutter fullWidth>
        {list[1]}
      </Flex>
    </>
  );

  return (
    <>
      {title && (
        <Text color="white" type="subtitle" bold>
          # {title}
        </Text>
      )}
      <Flex gutter direction="column" fullWidth>
        {Component}
      </Flex>
    </>
  );
};

export default ColorContainer;
