import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ActivityIndicator, Button, Text, TextInput, View } from 'react-native';
import { z } from 'zod';

// Simulación de correos ya registrados
const correosRegistrados = ['test@correo.com', 'usuario@ejemplo.com'];

// Esquema Zod
const registroSchema = z.object({
  nombre: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: z.string().email('Correo inválido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

export default function Registro() {
  const { control, handleSubmit, setError, clearErrors, formState: { errors } } = useForm({
    resolver: zodResolver(registroSchema)
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [checkingEmail, setCheckingEmail] = useState(false);

  // ✅ Debounce compatible con React Native
  const debounceTimeout = useRef<number | null>(null);

  const validarEmail = (email: string) => {
    if (!email) return;

    // Limpiar timeout anterior
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = window.setTimeout(async () => {
      setCheckingEmail(true);
      await new Promise(res => setTimeout(res, 1000)); // Simula llamada a API
      if (correosRegistrados.includes(email)) {
        setError('email', { type: 'manual', message: 'Correo ya registrado' });
      } else {
        clearErrors('email');
      }
      setCheckingEmail(false);
    }, 500); // debounce 500ms
  };

  const onSubmit = (data: any) => setSubmittedData(data);

  return (
    <View style={{ flex:1, padding:20 }}>
      <Text style={{ fontSize:24, marginBottom:20 }}>Registro</Text>

      <Text>Nombre</Text>
      <Controller
        control={control}
        name="nombre"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={{ borderWidth:1, marginBottom:5, padding:5 }}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.nombre && <Text style={{ color:'red' }}>{errors.nombre.message}</Text>}

      <Text>Email</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={{ borderWidth:1, marginBottom:5, padding:5 }}
            onChangeText={text => { onChange(text); validarEmail(text); }}
            value={value}
            keyboardType="email-address"
          />
        )}
      />
      {checkingEmail && <ActivityIndicator size="small" color="#0000ff" />}
      {errors.email && <Text style={{ color:'red' }}>{errors.email.message}</Text>}

      <Text>Contraseña</Text>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={{ borderWidth:1, marginBottom:5, padding:5 }}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
      />
      {errors.password && <Text style={{ color:'red' }}>{errors.password.message}</Text>}

      <Text>Confirmar Contraseña</Text>
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={{ borderWidth:1, marginBottom:5, padding:5 }}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
      />
      {errors.confirmPassword && <Text style={{ color:'red' }}>{errors.confirmPassword.message}</Text>}

      <Button title="Registrarse" onPress={handleSubmit(onSubmit)} />

      {submittedData && (
        <View style={{ marginTop:20 }}>
          <Text>¡Registro exitoso! Datos:</Text>
          <Text>{JSON.stringify(submittedData, null, 2)}</Text>
        </View>
      )}
    </View>
  );
}
