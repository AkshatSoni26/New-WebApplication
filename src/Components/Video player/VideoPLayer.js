import { useCallback, useRef, useState } from "react";
// import "./styles.css";

export default function VideoPlayer() {
  const container = useRef();
  const [isVideoAdded, setIsVideoAdded] = useState(false);
  const loadVideo = useCallback(
    ({ otp, playbackInfo, container, configuration }) => {
      const params = new URLSearchParams("");
      const parametersToAdd = { otp, playbackInfo, ...configuration };
      for (const item in parametersToAdd) {
        params.append(item, parametersToAdd[item]);
      }
      const iframe = document.createElement("iframe");
      iframe.setAttribute("allowfullscreen", "true");
      iframe.setAttribute("allow", "autoplay; encrypted-media");
      iframe.setAttribute("frameborder", "0");
      iframe.style = "height: 100%; width: 100%;overflow: auto;";
      iframe.src = "https://player.vdocipher.com/v2/?" + params;
      container.append(iframe);
      setIsVideoAdded(true);
    },
    []
  );

  const handleClick = useCallback(() => {
    if (!container.current) return;
    if (isVideoAdded) {
      setIsVideoAdded(false);
      return (container.current.innerHTML = "Click Add Video button");
    }
    container.current.innerHTML = "";
    loadVideo({
      otp: "20160313versASE313c63a68c96144b8d770464f6bac27531b38825875e952ca",
      playbackInfo:
        "eyJ2aWRlb0lkIjoiMTA0MWVkNThjZDU0NGY5YmE2MGEzYWE1ZGEzZjExZWYifQ==",
      configuration: {
        // autoplay: true
      },
      container: container.current
    });
  }, [loadVideo, isVideoAdded]);

  return (
    <div className="App">

      <button onClick={handleClick}>
        {isVideoAdded ? "Remove Video" : "Add Video"}
      </button>
      
      <div className="vdo-container" ref={container}>
        Click Add Video button
      </div>

    </div>
  );
}
