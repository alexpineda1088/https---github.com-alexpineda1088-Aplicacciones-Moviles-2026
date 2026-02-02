import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Step3Permisos() {
  const router = useRouter();

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', padding:20 }}>
      <Text style={{ fontSize:24, marginBottom:20 }}>Permisos</Text>
      <Text style={{ fontSize:16, marginBottom:30 }}>Permite notificaciones para no perder tus eventos.</Text>

      <Button title="Atrás" onPress={() => router.back()} />
      <View style={{ marginTop:10 }}>
        <Button title="Siguiente" onPress={() => router.push('./step4-acceso')} />
      </View>
    </View>
  );
}
