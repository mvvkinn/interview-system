let myStream;
//
export const getCameras = async () => {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter((device) => device.kind === "videoinput");
    const currentCamera = myStream.getVideoTracks();
    cameras.forEach((camera) => {
      const option = document.createElement("option");
      option.value = camera.deviceId;
      option.innerText = camera.label;
      if (currentCamera.label === camera.label) {
        option.selected = true;
      }
      // camerasSelect.appendChild(option);
    });
    console.log(cameras);
  } catch (e) {
    console.log(e);
  }
};

export const getMedia = async (myCamera, deviceId) => {
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
      await getCameras();
    }
    return myStream;
  } catch (e) {
    console.log(e);
  }
};

export const initCall = async () => {
  console.log("initCall");
  return await getMedia();
};
