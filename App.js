
import React from 'react';




const App = () => {
  return (
    <NativeRouter>
    <View>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/detail/:houseId" component={DetailScreen} />
    </View>
  </NativeRouter>
  );
};

// export default App;