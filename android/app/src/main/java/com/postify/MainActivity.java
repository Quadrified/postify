package com.postify;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // import this for react-native-splash-screen
import android.os.Bundle;

public class MainActivity extends ReactActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);  // Displaying splash screen
    super.onCreate(null);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Postify";
  }
}
