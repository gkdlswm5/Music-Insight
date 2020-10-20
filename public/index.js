window.onSpotifyWebPlaybackSDKReady = () => {
  const token =
    "BQCfHr3VDTqYY803DhpnqVWQKup3Eafp6U98AsFMu5qvdQ2cy2AkNv2N2ipIf8oL1NUZXEZY6m1LUEvZA8KZhxZEDkr9FM4OZKyVG5Q1_QORsauK9VQTl3BXqZqhYkQQDFcgmnhAANV8s6RB04iT7VFvw14XWiyNSM0";
  const player = new Spotify.Player({
    name: "Web Playback SDK Quick Start Player",
    getOAuthToken: (cb) => {
      cb(token);
    },
  });

  // Error handling
  player.addListener("initialization_error", ({ message }) => {
    console.error(message);
  });
  player.addListener("authentication_error", ({ message }) => {
    console.error(message);
  });
  player.addListener("account_error", ({ message }) => {
    console.error(message);
  });
  player.addListener("playback_error", ({ message }) => {
    console.error(message);
  });

  // Playback status updates
  player.addListener("player_state_changed", (state) => {
    console.log(state);
  });

  // Ready
  player.addListener("ready", ({ device_id }) => {
    console.log("Ready with Device ID", device_id);
  });

  // Not Ready
  player.addListener("not_ready", ({ device_id }) => {
    console.log("Device ID has gone offline", device_id);
  });

  // Connect to the player!
  player.connect();
};
