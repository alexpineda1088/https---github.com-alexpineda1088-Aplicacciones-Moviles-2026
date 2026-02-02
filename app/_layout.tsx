import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(onboarding)/step1-bienvenida" options={{ headerShown:false }} />
      <Stack.Screen name="registro" options={{ title:'Registro' }} />
      <Stack.Screen name="(tabs)" options={{ headerShown:false }} />
    </Stack>
  );
}
