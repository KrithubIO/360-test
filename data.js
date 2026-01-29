var APP_DATA = {
  "scenes": [
    {
      "id": "0-img_csit_lounge_merged",
      "name": "IMG_CSIT_LOUNGE_merged",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2000512807266563,
          "pitch": 0.5442342437889103,
          "rotation": 0.7853981633974483,
          "target": "1-img_wendy_merged"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.8797585142575723,
          "pitch": 0.3514197249908868,
          "title": "CSIT Receptionist",
          "text": "Christina Boggs"
        }
      ]
    },
    {
      "id": "1-img_wendy_merged",
      "name": "IMG_Wendy_merged",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.119405907715114,
          "pitch": 0.7069708756602804,
          "rotation": 5.497787143782138,
          "target": "0-img_csit_lounge_merged"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5802494417833692,
          "pitch": 0.3757046510340061,
          "title": "CSIT Head",
          "text": "Wendy"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
