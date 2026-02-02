import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Step2Beneficios() {
  const router = useRouter();

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', padding:20 }}>
      <Text style={{ fontSize:24, marginBottom:20 }}>Beneficios</Text>
      <Text style={{ fontSize:16, marginBottom:30 }}>Recibe recordatorios y organiza tu tiempo mejor.</Text>

      <Button title="Atrás" onPress={() => router.back()} />
      <View style={{ marginTop:10 }}>
        <Button title="Siguiente" onPress={() => router.push('./step3-permisos')} />
      </View>
    </View>
  );
}
