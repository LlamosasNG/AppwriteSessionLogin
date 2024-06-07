
import { StyleSheet, Text, View } from 'react-native';
import { UserProvider } from './contexts/userContexts';
import { IdeasProvider } from './contexts/ideasProvider'; // Add import
import { Router } from './views/router';

export default function App() {
  return (
    <UserProvider>
      <IdeasProvider> 
        <Router />
      </IdeasProvider>
    </UserProvider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
