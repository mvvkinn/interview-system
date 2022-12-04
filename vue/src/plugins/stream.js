/* eslint-disable no-unused-vars */
let myStream;
//
export const getDevices = async () => {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();

    // Video Input, Audio Input, Audio Output
    const cameras = devices.filter(device => device.kind === "videoinput");
    const AIDevice = devices.filter(device => device.kind === "audioinput");
    const AODevice = devices.filter(device => device.kind === "audioinput");

    const currentCamera = myStream.getVideoTracks();

    // Prevent ESLint Unused Error
    cameras;
    AIDevice;
    AODevice;
    currentCamera;
  } catch (e) {
    console.log(e);
  }
};

export const toggleMute = isMuted => {
  myStream.getAudioTracks().forEach(track => {
    track.enabled = !track.enabled;
    isMuted = track.enabled;
  });
  return isMuted ? "MUTE" : "UNMUTE";
};

export const toggleCamera = isCameraOn => {
  myStream.getVideoTracks().forEach(track => {
    track.enabled = !track.enabled;
    isCameraOn = track.enabled;
  });

  return isCameraOn ? "CAMERA OFF" : "CAMERA ON";
};

export const getMedia = async deviceId => {
  // deviceId가 없을 경우 초기 상태
  const initialConstrains = {
    audio: true,
    video: { facingMode: "user" },
  };

  // deviceId가 있을 경우
  const cameraConstrains = {
    audio: true,
    video: { deviceId: { exact: deviceId } },
  };
  try {
    myStream = await navigator.mediaDevices.getUserMedia(
      deviceId ? cameraConstrains : initialConstrains
    );
    console.log(myStream);
    // myCamera.srcObject = myStream;
    if (!deviceId) {
      await getDevices();
    }
    return myStream;
  } catch (e) {
    console.log(e);
  }
};

export const initCall = async peerConnection => {
  console.log("initCall");
  const stream = await getMedia();

  // Add
  myStream
    .getTracks()
    .forEach(track => peerConnection.addTrack(track, myStream));
  return stream;
};
