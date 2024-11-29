import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from 'react-native-vector-icons'; 
export default function Dashboard() {
  return (
    <LinearGradient
      colors={['#6a11cb', '#2575fc']}
      style={styles.gradientBackground}
    >
      <ScrollView contentContainerStyle={styles.container}>
      
        {/* Project Summary */}
        <View style={styles.cardContainer}>
          <LinearGradient
            colors={['#4C84FF', '#4D96FF']}
            style={[styles.card]}
          >
            <FontAwesome name="hourglass-start" size={30} color="#fff" />
            <Text style={styles.cardTitle}>24</Text>
            <Text style={styles.cardLabel}>In Progress</Text>
          </LinearGradient>
          <LinearGradient
            colors={['#F8A62D', '#F9C26D']}
            style={[styles.card]}
          >
            <FontAwesome name="clipboard" size={30} color="#fff" />
            <Text style={styles.cardTitle}>56</Text>
            <Text style={styles.cardLabel}>In Review</Text>
          </LinearGradient>
          <LinearGradient
            colors={['#F2C94C', '#F4D94E']}
            style={[styles.card]}
          >
            <FontAwesome name="pause" size={30} color="#fff" />
            <Text style={styles.cardTitle}>16</Text>
            <Text style={styles.cardLabel}>On Hold</Text>
          </LinearGradient>
          <LinearGradient
            colors={['#4CAF50', '#81C784']}
            style={[styles.card]}
          >
            <FontAwesome name="check-circle" size={30} color="#fff" />
            <Text style={styles.cardTitle}>45</Text>
            <Text style={styles.cardLabel}>Completed</Text>
          </LinearGradient>
        </View>

        {/* Project Statistics */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Project Statistics</Text>
          <LineChart
            data={{
              labels: ['M', 'T', 'W', 'T', 'F', 'S'],
              datasets: [
                {
                  data: [30, 50, 70, 90, 50, 60],
                  strokeWidth: 2,
                },
              ],
            }}
            width={350}
            height={220}
            chartConfig={{
              backgroundColor: '#FFF',
              backgroundGradientFrom: '#f4f4f4',
              backgroundGradientTo: '#f4f4f4',
              color: (opacity = 1) => `rgba(0, 150, 136, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            bezier
          />
        </View>

        {/* Task Summary */}
        <View style={styles.summaryContainer}>
          <LinearGradient
            colors={['#fff', '#E3F2FD']}
            style={styles.summaryBox}
          >
            <Text style={styles.summaryTitle}>Total working hours</Text>
            <Text style={styles.summaryValue}>50:25:06</Text>
            <Text style={styles.summaryPercent}>34%</Text>
          </LinearGradient>
          <LinearGradient
            colors={['#fff', '#FCE4EC']}
            style={styles.summaryBox}
          >
            <Text style={styles.summaryTitle}>Total task activity</Text>
            <Text style={styles.summaryValue}>125 Tasks</Text>
            <Text style={styles.summaryPercent}>50%</Text>
          </LinearGradient>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  cardLabel: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  chartContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryBox: {
    width: '48%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 4,
  },
  summaryTitle: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  summaryPercent: {
    fontSize: 14,
    color: '#2ecc71',
    marginTop: 5,
  },
});
