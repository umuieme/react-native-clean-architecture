import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import PostDetail from './src/app/ui/posts/post_detail';
import PostListScreen from './src/app/ui/posts/post_list_screen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={PostListScreen} />
        <Stack.Screen name="Profile" component={PostDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
