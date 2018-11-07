import { NavigationActions } from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params, action) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      action,
    })
  );
}

export default {
  navigate,
  setTopLevelNavigator,
};