# 🌿 PlantApp - React Native Case Study

PlantApp is a mobile application that helps users identify plants, access care guides, and manage their plant collections.\
This project was built with **React Native + Expo + Tailwind + Redux** technologies.

---

## 🚀 Project Structure

- **Get Started Screen:** Welcomes the user upon launching the app.
- **Onboarding Flow:** Introduces app features to the user (2 steps).
- **Paywall Screen:** Subscription screen where the user selects a payment plan.
- **Home Screen:** Main screen where questions and categories are listed.
- **Tabs Structure:** Main navigation (`home`, `diagnose`, `scan`, `mygarden`, `profile`).
- **Redux:** State management is handled by fetching Questions and Categories API data.
- **Dynamic Navigation:** After completing the flow, the user cannot navigate back to previous screens.

---

## 🛠️ Technologies Used

- **React Native**
- **Expo Router**
- **TypeScript**
- **Nativewind (Tailwind CSS for React Native)**
- **Redux Toolkit**
- **Expo WebView**
- **SafeAreaView**
- **Ionicons**

---

## 🧭 User Flow

1. Get Started → Onboarding 1 → Onboarding 2 → Paywall → Home
2. **replace navigation** is used so that users cannot return to previous screens once they reach Home.
3. On the Home screen:
   - Questions (Get Started section) are listed.
   - Categories (Plant Types) are listed.
   - Clicking on questions opens a detail page via WebView.

---

## 🖼️ Screens

- Get Started Screen
- Onboarding Take Photo
- Onboarding Care Guide
- Paywall Screen
- Home Screen (Questions and Categories)
- Diagnose / My Garden / Profile → Coming Soon placeholder screens
- Scan Tab (Camera icon + Start Scan button)

---

## 📦 Installation

```bash
git clone https://github.com/ulas49/PlantApp.git
cd your file directory
npm install
npx expo start
```

---

## ⚙️ Notes

- **replace() navigation** ensures the user cannot navigate back to Get Started, Onboarding, or Paywall screens after reaching Home.
- **FlatList usage** on Home Screen is optimized for performance.
- **Loading states** are managed with ActivityIndicator.
- **Pixel Perfect** design is targeted and aligned with the Figma design.
- **Search input** is currently for visual purposes only; it does not have active functionality.

---

## 📄 License

This project is a case study and is not intended for commercial use.

---

## ✨ Developer

- Name: Ulaş Beyaz
- LinkedIn: https://www.linkedin.com/in/ulaş-beyaz-65aab6284/

---

