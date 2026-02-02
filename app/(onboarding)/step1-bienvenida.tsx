import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Step1Bienvenida() {
  const router = useRouter();

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', padding:20 }}>
      <Text style={{ fontSize:24, marginBottom:20 }}>¡Bienvenido a Agenda Escolar Inteligente!</Text>
      <Text style={{ fontSize:16, marginBottom:30 }}>Organiza tus tareas y eventos de manera sencilla.</Text>
      <Button title="Siguiente" onPress={() => router.push('./step2-beneficios')} />
    </View>
  );
}
