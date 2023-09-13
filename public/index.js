console.log("1 - page loaded with enable cam/mic button");
const showLocalVideo = async () => {
  console.log("2 - button clicked to start showlocalvideo function");
  const videoTrack = await Twilio.Video.createLocalVideoTrack({
    width: 640,
    height: 480,
    frameRate: 24
  });
  console.log("3 - video track created");
  document.getElementById('video').appendChild(videoTrack.attach());
  console.log("4 - video track attached to video component/element");

  // uncomment one of the two following blocks, depending on what effect
  // you want to use

  

  let img = new Image();
  img.src = 'background.jpg';
  console.log(`5 - image initialized as `, img);
  img.onload = async () => {
    console.log(`6 - image loaded as ${img}`);
    const bg = new Twilio.VideoProcessors.VirtualBackgroundProcessor({
      assetsPath: '/',
      backgroundImage: img,
      maskBlurRadius: 5,
    });
    await bg.loadModel();

    videoTrack.addProcessor(bg);
    console.log(`7 - virtual background processor added as `, bg);
  }
  console.log(`8 - add virtual background function comppleted`);
}


