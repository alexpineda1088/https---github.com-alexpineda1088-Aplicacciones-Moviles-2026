import { Stack } from 'expo-router';

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="step1-bienvenida" />
      <Stack.Screen name="step2-beneficios" />
      <Stack.Screen name="step3-permisos" />
      <Stack.Screen name="step4-acceso" />
    </Stack>
  );
}
