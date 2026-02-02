import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Step4Acceso() {
  const router = useRouter();

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', padding:20 }}>
      <Text style={{ fontSize:24, marginBottom:20 }}>Acceso</Text>
      <Text style={{ fontSize:16, marginBottom:30 }}>Crea tu cuenta para empezar a usar la app.</Text>

      <Button title="Atrás" onPress={() => router.back()} />
      <View style={{ marginTop:10 }}>
        <Button title="Ir al Registro" onPress={() => router.push('/registro')} />
      </View>
    </View>
  );
}
