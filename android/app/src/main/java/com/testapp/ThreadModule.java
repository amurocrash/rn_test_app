package com.testapp;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ThreadModule extends ReactContextBaseJavaModule {
    public ThreadModule(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "ThreadModule";
    }

    @ReactMethod
    public void test(String name, String location) {
        Log.d("TestApp", name + ": " + location);
    }
}
