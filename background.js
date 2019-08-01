// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("Welcome! :)");
  });
});

function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

chrome.browserAction.onClicked.addListener(function(activeTab) {
    var URLs = ["https://www.youtube.com/watch?v=CsGYh8AacgY", "https://www.youtube.com/watch?v=EwTZ2xpQwpA", "https://www.youtube.com/watch?v=_OBlgSz8sSM", "https://youtu.be/JdLCEwEFCMU","https://www.youtube.com/watch?v=J---aiyznGQ", "https://www.youtube.com/watch?v=dMH0bHeiRNg&feature=youtu.be",
                "https://www.youtube.com/watch?v=h47fNaOb-JU", "https://www.youtube.com/watch?v=zGxwbhkDjZM", "https://www.youtube.com/watch?v=9bZkp7q19f0", "https://www.youtube.com/watch?v=kfVsfOSbJY0", "https://www.youtube.com/watch?v=kffacxfA7G4"];
    var size = URLs.length
    var selection = URLs[getRndInt(0, size)]
    chrome.tabs.create({ url: selection });
});