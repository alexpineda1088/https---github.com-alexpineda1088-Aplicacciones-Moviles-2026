import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', padding:20 }}>
      <Text style={{ fontSize:24, marginBottom:20 }}>Bienvenido a la App</Text>
      <Button title="Iniciar Onboarding" onPress={() => router.push('/(onboarding)/step1-bienvenida')} />
      <Button title="Ir al Registro" onPress={() => router.push('/registro')} />
    </View>
  );
}
