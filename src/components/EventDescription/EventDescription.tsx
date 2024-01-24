import React, {useState, useRef, FC} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import {styles} from './EventDescripton.styles';

export const EventDescription: FC<{description: string}> = ({description}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const animationHeight = useRef(new Animated.Value(0)).current;

  const toggleDescription = () => {
    Animated.timing(animationHeight, {
      toValue: isExpanded ? 0 : 300,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDescription}>
        <Text style={styles.title}>
          {isExpanded ? 'Hide description' : 'Show Description'}
        </Text>
      </TouchableOpacity>
      <Animated.View style={{height: animationHeight, overflow: 'hidden'}}>
        <Text style={styles.description}>{description}</Text>
      </Animated.View>
    </View>
  );
};
