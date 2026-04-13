import "./src/styles/global.css";
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Rocket, Sparkles, Map, Target, ArrowRight, Plus } from 'lucide-react-native';
import Animated, { FadeInUp, FadeInRight } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Background Gradient */}
      <LinearGradient
        colors={['#0F172A', '#1E1B4B', '#312E81']}
        style={StyleSheet.absoluteFill}
      />

      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          {/* Header */}
          <Animated.View entering={FadeInUp.delay(200)} style={styles.header}>
            <View style={styles.logoContainer}>
              <View style={styles.iconCircle}>
                <Rocket color="#8B5CF6" size={28} />
              </View>
              <Text style={styles.logoText}>Roadmapper</Text>
            </View>
            <TouchableOpacity style={styles.profileButton}>
              <Sparkles color="#22D3EE" size={24} />
            </TouchableOpacity>
          </Animated.View>

          {/* Hero Section */}
          <Animated.View entering={FadeInUp.delay(400)} style={styles.hero}>
            <Text style={styles.heroTitle}>Transform your vision into a <Text style={styles.highlight}>strategic roadmap</Text></Text>
            <Text style={styles.heroSubtitle}>AI-powered planning for high-achievers. Define your goal, and let our agents map the path.</Text>
          </Animated.View>

          {/* Action Card */}
          <Animated.View entering={FadeInUp.delay(600)} style={styles.cardContainer}>
            <View style={styles.glassCard}>
              <View style={styles.cardHeader}>
                <Target color="#8B5CF6" size={24} />
                <Text style={styles.cardTitle}>New Objective</Text>
              </View>
              <TouchableOpacity style={styles.inputPlaceholder}>
                <Text style={styles.placeholderText}>What do you want to achieve today?</Text>
                <ArrowRight color="#64748B" size={20} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.generateButton}>
                <LinearGradient
                  colors={['#8B5CF6', '#22D3EE']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.gradientButton}
                >
                  <Text style={styles.buttonText}>Generate Roadmap</Text>
                  <Sparkles color="#FFF" size={18} />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </Animated.View>

          {/* Recent Roadmaps */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Active Maps</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {[1, 2].map((item, index) => (
              <Animated.View 
                key={index} 
                entering={FadeInRight.delay(800 + (index * 200))}
                style={styles.mapCard}
              >
                <View style={styles.mapIcon}>
                  <Map color="#22D3EE" size={24} />
                </View>
                <Text style={styles.mapTitle}>{index === 0 ? 'React Native Mastery' : 'Product Launch'}</Text>
                <Text style={styles.mapProgress}>Phase {index + 2} of 5</Text>
                <View style={styles.progressBar}>
                  <View style={[styles.progressFill, { width: index === 0 ? '40%' : '75%' }]} />
                </View>
              </Animated.View>
            ))}
          </ScrollView>

        </ScrollView>

        {/* Floating Action Button */}
        <TouchableOpacity style={styles.fab}>
          <LinearGradient
            colors={['#8B5CF6', '#7C3AED']}
            style={styles.fabGradient}
          >
            <Plus color="#FFF" size={32} />
          </LinearGradient>
        </TouchableOpacity>

      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: 'rgba(139, 92, 246, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.3)',
  },
  logoText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFF',
    letterSpacing: -0.5,
  },
  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  hero: {
    marginBottom: 32,
  },
  heroTitle: {
    fontSize: 34,
    fontWeight: '800',
    color: '#FFF',
    lineHeight: 42,
    marginBottom: 12,
  },
  highlight: {
    color: '#8B5CF6',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#94A3B8',
    lineHeight: 24,
  },
  cardContainer: {
    marginBottom: 40,
  },
  glassCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: 32,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFF',
  },
  inputPlaceholder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  placeholderText: {
    color: '#64748B',
    fontSize: 15,
  },
  generateButton: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  gradientButton: {
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFF',
  },
  seeAll: {
    color: '#8B5CF6',
    fontWeight: '600',
  },
  horizontalScroll: {
    marginHorizontal: -24,
    paddingHorizontal: 24,
  },
  mapCard: {
    width: width * 0.6,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: 24,
    padding: 20,
    marginRight: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  mapIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: 'rgba(34, 211, 238, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  mapTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FFF',
    marginBottom: 4,
  },
  mapProgress: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 16,
  },
  progressBar: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#22D3EE',
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 64,
    height: 64,
    borderRadius: 32,
    elevation: 8,
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  fabGradient: {
    flex: 1,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
