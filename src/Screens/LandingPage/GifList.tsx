import React, { useEffect, useState } from "react";
import { Button, FlatList, Image, Share, StyleSheet, View } from "react-native";
import { GET_TRENDING_GIFS } from "../../API/APIConstants";
import { fetchHelper } from "../../utils/APIHelper";
import RNFS from "react-native-fs";

const GifList = ({ gifs, setGIFS }) => {
  //Currently I'm using fetch but we can integrate third party library axios as well

  const fetchGif = async () => {
    const gifs = await fetchHelper(GET_TRENDING_GIFS);
    setGIFS(gifs);
  };

  useEffect(() => {
    fetchGif();
  }, []);

  const renderItem = ({ item, index }) => {
    const url = item?.images?.downsized?.url;
    const handledownload = async () => {
      const filePath = RNFS.DocumentDirectoryPath + "/example.mp4";
      RNFS.downloadFile({
        fromUrl: url,
        toFile: filePath,
        background: true, // Enable downloading in the background (iOS only)
        discretionary: true, // Allow the OS to control the timing and speed (iOS only)
        progress: (res) => {
          // Handle download progress updates if needed
          const progress = (res.bytesWritten / res.contentLength) * 100;
          console.log(`Progress: ${progress.toFixed(2)}%`);
        },
      })
        .promise.then((response) => {
          console.log("File downloaded!", response, filePath);
        })
        .catch((err) => {
          console.log("Download error:", err);
        });
    };

    const handleShare = async () => {
      const result = await Share.share({
        message: "Giphy",
        url: url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    };
    return (
      <View style={styles.listContainer} key={index}>
        <Image
          source={{
            uri: url,
          }}
          style={styles.img}
        />
        <View style={styles.btnContainer}>
          <Button title="Download" onPress={handledownload} />
          <Button title="Share" onPress={handleShare} />
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={gifs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  listContainer: {
    paddingVertical: 10,
  },
  img: {
    width: "100%",
    height: 200,
  },
});

export default GifList;
