import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import exercises from './assets/data/exercises.json';
export default function App() {
  const exercise = exercises[2];
  return (
    <View style={styles.container}>
      {/* <FlatList
      data={exercises}
      /> */}
      <View style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{exercise.name} </Text>
        <Text style={styles.exerciseSubtitle}>
          Muscle: {exercise.muscle.toUpperCase()} | Equipment:{' '}
          {exercise.equipment.toUpperCase()}
        </Text>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    padding: '10',
  },
  exerciseName: {
    fontSize: 24,
    fontWeight: '500',
  },
  exerciseSubtitle: {
    color: 'dimgray',
  },
  exerciseContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    gap: 5,
  },
});
