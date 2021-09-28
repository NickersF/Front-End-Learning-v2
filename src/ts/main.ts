import { styleGuideSetup } from "./styleguide";
import { EchoSlider, ScrollEventExample } from "./overflow_position";

EchoSlider();
ScrollEventExample();
styleGuideSetup();

let ExampleDataObject = {
    "Tenant_Key": "40",
    "Tiles": {
      "PortalInfoTile": {
        "TileTitle": "Portal Information",
        "TemplateID": "PortalInformationTile",
        "TemplatePath": "/Templates/PortalInformation.tmpl.htm",
        "ColSpan": 5,
        "RowSpan": 5
      },
      "MapTile": {
        "TileTitle": "Road Information System Map",
        "TemplateID": "MapTile",
        "TemplatePath": "/Templates/MapTemplate.tmpl.htm",
        "ColSpan": 7,
        "RowSpan": 5
      }
    },
    "Controls": {
      "DashboardPortalInfo": "DashboardPortalInfo",
      "DashboardMap": "DashboardMap"
    }
  }

  console.log(ExampleDataObject);

  for (let key in ExampleDataObject.Tiles) {
      console.log(ExampleDataObject.Tiles[key].TemplateID);
  }