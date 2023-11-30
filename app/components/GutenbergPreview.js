import React from "react";
import { WebView } from "react-native-webview";

const GutenbergPreview = () => {
  return (
    <WebView
      source={{
        uri: "https://www.gutenberg.org/cache/epub/64317/pg64317-images.html",
      }}
      style={{ flex: 1 }}
    />
  );
};

export default GutenbergPreview;
