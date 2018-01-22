import { StackNavigator, NavigationActions, StackNavigatorConfig } from 'react-navigation';
// import Welcome from '../screens/welcome'
import Home from '../screens/home'
import About from '../screens/about'
import Categories from '../screens/categories'


export const AppStack = StackNavigator({
    home: {
        screen: Home
    },
    categories: {
        screen: Categories
    },
    about: {
        screen: About
    }
}, {
        headerMode: 'none',
        mode: 'card'
    })

export const resetAppStack = NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'home' })] })

