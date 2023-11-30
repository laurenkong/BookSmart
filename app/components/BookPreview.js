import React from "react";
import { WebView } from "react-native-webview";
import { Text, View } from "react-native";

const BookPreview = ({ isbn }) => {
  const createHtmlContent = (isbn) => {
    return `
      <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script type="text/javascript" src="https://books.google.com/books/previewlib.js"></script>
        <style>
          body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
          }
          #viewerCanvas {
            margin-left: 150px;  
            width: 700px;  
            height: 800px;
          }
        </style>
      </head>
      <body>
        <div id="viewerCanvas"></div>
        <script type="text/javascript">
          function sendToReactNative(message) {
            if (window.ReactNativeWebView) {
              window.ReactNativeWebView.postMessage(message);
            }
          }
  
          try {
            GBS_insertEmbeddedViewer('ISBN:${isbn}', 600, 500);
            sendToReactNative('Script loaded successfully');
          } catch (e) {
            sendToReactNative('Error: ' + e.message);
          }
        </script>
      </body>
      </html>
    `;
  };

  return (
    <WebView
      originWhitelist={["*"]}
      source={{ html: createHtmlContent(isbn) }}
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true}
      renderError={(errorName) => (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Error loading preview: {errorName}</Text>
        </View>
      )}
      onMessage={(event) => {
        alert(event.nativeEvent.data);
      }}
    />
  );
};

export default BookPreview;
