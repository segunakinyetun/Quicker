
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const { height: SCREEN_HEIGHT } = Dimensions.get('screen'); 

const OnboardingScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const flatListRef = useRef(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  const slides = [
    {
      id: '1',
      title: 'fast delivery',
      description: 'managing delivery easily',
      image: require('../assets/images/delivery.png')
    },
    {
      id: '2',
      title: 'Instant pickup',
      description: 'Reliable dispatch and instant pickup.',
      image: require('../assets/images/delivering.png')
    },
    {
      id: '3',
      title: 'Start your delivery journey today',
      description: 'Let us get moving',
      image: require('./assets/budgeting.png'),
    },
  ];

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  const onMomentumScrollEnd = (event) => {
    const slideHeight = SCREEN_HEIGHT * 0.6;
    const currentIndex = Math.round(
      event.nativeEvent.contentOffset.y / slideHeight
    );
    setCurrentSlide(currentIndex);
  };

  const renderSlide = ({ item }) => (
    <View style={[styles.slide, { height: SCREEN_HEIGHT * 0.6 }]}>
      <Image source={item.image} style={styles.featureImage} resizeMode="contain" />
      <Text style={styles.slideTitle}>{item.title}</Text>
      <Text style={styles.slideDescription}>{item.description}</Text>
    </View>
  );

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentSlide + 1 });
    } else {
      console.log('Get Started Pressed!');
      // Navigate to next screen or home
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderSlide}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        onScroll={onScroll}
        onMomentumScrollEnd={onMomentumScrollEnd}
        snapToAlignment="center"
        decelerationRate="fast"
      />

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentSlide === index && styles.activeDot,
            ]}
          />
        ))}
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={() => router.push ('')}>
        <Text style={styles.buttonText}>
          {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  featureImage: {
    width: '80%',
    height: 200,
    marginBottom: 30,
  },
  slideTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
  },
  slideDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#6C63FF',
    width: 16,
  },
  button: {
    backgroundColor: '#6C63FF',
    marginHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});