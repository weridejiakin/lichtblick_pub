import { LayoutData } from "@lichtblick/suite-base/context/CurrentLayoutContext/actions";
import { defaultPlaybackConfig } from "@lichtblick/suite-base/providers/CurrentLayoutProvider/reducers";

export const defaultFlyfishLayout: LayoutData = {
    configById: {
      "Image!242guv1": {
        cameraState: {
          distance: 20,
          perspective: true,
          phi: 60,
          target: [0, 0, 0],
          targetOffset: [0, 0, 0],
          targetOrientation: [0, 0, 0, 1],
          thetaOffset: 45,
          fovy: 45,
          near: 0.5,
          far: 5000,
        },
        followMode: "follow-pose",
        imageMode: {
          calibrationTopic: "/camera_calibration/camera_center",
          imageTopic: "/camera/camera_center",
        },
        topics: {
          "/viz/lidar/obstacle": {
            color: "#f5ea0969",
            visible: true,
          },
        },
      },
      "3D!18i6zy7": {
        cameraState: {
          distance: 100,
          thetaOffset: 90,
          far: 5000,
          fovy: 90,
          near: 0.5,
          perspective: false,
          phi: 0,
        },
        topics: {
          "/viz/lidar/obstacle": {
            color: "#f5ea0969",
            visible: true,
          },
          "/viz/map/element_map": {
            visible: true,
          },
          "/lidar/hdl64": {
            visible: false,
          },
          "/viz/ego_vehicle_marker": {
            arrowScale: [4, 1, 1],
            axisScale: 0.15,
            color: "#fa0505ff",
            type: "arrow",
            visible: true,
          },
        },
        transforms: {
          "frame:map": {
            visible: false,
          },
          "frame:base_link": {
            visible: false,
          },
          "frame:camera_back_center_L": {
            visible: false,
          },
          "frame:camera_back_center_R": {
            visible: false,
          },
          "frame:camera_back_left": {
            visible: false,
          },
          "frame:camera_back_right": {
            visible: false,
          },
          "frame:camera_center": {
            visible: false,
          },
          "frame:camera_left": {
            visible: false,
          },
          "frame:camera_obj_center": {
            visible: false,
          },
          "frame:camera_obj_left": {
            visible: false,
          },
          "frame:camera_obj_right": {
            visible: false,
          },
          "frame:camera_right": {
            visible: false,
          },
          "frame:hdl64": {
            visible: false, 
          }
        },
        layers: {
          "845139cb-26bc-40b3-8161-8ab60af4baf5": {
            visible: false,
            frameLocked: true,
            label: "Grid",
            instanceId: "845139cb-26bc-40b3-8161-8ab60af4baf5",
            layerId: "foxglove.Grid",
            size: 10,
            divisions: 10,
            lineWidth: 1,
            color: "#248eff",
            position: [0, 0, 0],
            rotation: [0, 0, 0],
            order: 1,
          },
        },
      },
      "map!36u1o8w": {
        customTileUrl: "",
        disabledTopics: [],
        followTopic: "/localization/gnss",
        layer: "map",
        topicColors: {},
        zoomLevel: 18,
        maxNativeZoom: 18,
        topics: {
          "/localization/gnss": {
            visible: true,
          },
        },
      },
    },
    globalVariables: {},
    userNodes: {},
    playbackConfig: { ...defaultPlaybackConfig },
    layout: {
      first: "Image!242guv1",
      second: "3D!18i6zy7",

      direction: "row",
      splitPercentage: 50,
    },
  };