# Master Prompt: Roadmapper App Blueprint

## 1. Vision & Goals
Roadmapper is a premium mobile application designed to help users visualize and execute their goals through AI-assisted strategic planning. The app must feel "Emergent"—autonomous, sleek, and highly functional.

## 2. Tech Stack
- **Framework**: React Native with Expo (SDK 51+)
- **Navigation**: Expo Router (File-based routing)
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Backend/DB**: Supabase (PostgreSQL, Realtime, Auth)
- **State Management**: Zustand
- **Monetization**: Stripe SDK (Expo-compatible)
- **Icons**: Lucide React Native / Expo Icons

## 3. Design System
- **Theme**: Dark Mode by default.
- **Primary Color**: Electric Violet (`#8B5CF6`)
- **Secondary Color**: Cyan Neon (`#22D3EE`)
- **Aesthetics**: 
  - Glassmorphism (Semi-transparent backgrounds with blur effects).
  - Vibrant gradients (Violet to Cyan).
  - Smooth micro-animations using `react-native-reanimated`.
  - Modern typography (Inter/Roboto).

## 4. Key Features & Agents
### A. The Architect (Roadmap Generator)
- Takes a goal string (e.g., "Learn React Native in 3 months").
- Generates a structured JSON roadmap with phases, milestones, and daily tasks.
- Integrates with Supabase to store and track progress.

### B. The Researcher (Resource Finder)
- Automatically finds relevant links, docs, or tools for each roadmap stage.

### C. Authentication (User Sign In)
- Email/Password login via Supabase Auth.
- Protected routes for roadmap management.

### D. Subscription (Monetization)
- Stripe integration for "Premium" tier (Unlimited roadmaps, AI researcher).

## 5. Deployment & Build
- **Target**: Android APK.
- **Provider**: Expo Application Services (EAS).
- **Versioning**: Integrated Git with GitHub.

## 6. Project Structure
- `/src/app`: Routes and main entry.
- `/src/components`: UI Atomic components.
- `/src/lib`: Supabase and Stripe clients.
- `/src/store`: Zustand state stores.
- `/src/theme`: Theme constants and global styles.
