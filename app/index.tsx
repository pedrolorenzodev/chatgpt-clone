import { Redirect } from 'expo-router';

function Index(): React.JSX.Element {
  return <Redirect href="/(chat)" />;
}

export default Index;
