import { NavigationAction, NavigationScreenProp, NavigationState } from 'react-navigation';

let navigator: NavigationScreenProp<NavigationState>;

function setTopLevelNavigator(navigatorRef: NavigationScreenProp<NavigationState>) {
  navigator = navigatorRef;
}

function dispatch(action: NavigationAction) {
  navigator.dispatch(action);
}

export default {
  dispatch,
  setTopLevelNavigator,
};