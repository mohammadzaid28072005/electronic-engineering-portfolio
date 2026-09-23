# IoT Device Fleet Management & Temperature Monitoring

**Final-year individual project · BEng Electronic Engineering · Royal Holloway, University of London**

Developed an integrated hardware and software prototype for monitoring and configuring multiple wireless temperature-sensing devices through a central browser dashboard. The project combined embedded sensing, network communications, persistent data storage and a physical hardware prototype.

![Temperature Fleet Monitor dashboard](../../website/assets/fleet-dashboard.png)

## Engineering objective

Bring temperature readings, device connectivity and configuration into one interface, enabling users to inspect individual nodes, review historical measurements and monitor events across the device fleet.

## System architecture

- **Sensor nodes:** ESP32-S3 microcontrollers interfaced with LM35 analogue temperature sensors.
- **Telemetry:** Device identity, temperature, received signal strength and connection-health information transmitted to the backend.
- **Communications:** HTTP telemetry with an HTTP-to-MQTT bridge.
- **Application services:** Node.js and Express for telemetry handling and device-management functions.
- **Persistence:** SQLite storage for measurement history, operational events and device configuration.
- **User interface:** Browser dashboard with live updates delivered through Socket.IO.

## Engineering contributions

### Embedded sensing and hardware integration

Developed the sensor-node implementation around ESP32-S3 and LM35 hardware, addressing ADC sampling, temperature conversion and connectivity management. Explored a two-layer KiCad PCB design with LiPo input and AP2112K regulation; the final physical prototype used battery-powered stripboard construction with a designed, 3D-printed and test-fitted enclosure.

### Fleet monitoring and device management

Implemented a central dashboard presenting fleet status and individual device information, with historical measurements, persistent event logs and remote configuration. Connected the interface to backend services and SQLite storage so that the platform supported both live monitoring and review of recorded activity.

### Network troubleshooting and integration

Investigated direct MQTT connection timeouts on port 1883 while using eduroam. Adapted the communications architecture with an HTTP-to-MQTT bridge, allowing the project to work around the network constraint while retaining MQTT integration.

## Outcome and project scope

Produced an integrated university prototype spanning sensor hardware, backend services and a live monitoring dashboard. The work demonstrates embedded-to-web integration, practical network troubleshooting and device-management software development.

Full sensor calibration and power-consumption testing remained incomplete at submission. The system is presented as a prototype rather than a commercially validated deployment.

## Technologies

ESP32-S3 · LM35 · C/C++ · Arduino · KiCad · Node.js · Express · SQLite · Socket.IO · HTTP · MQTT · JSON

## Supporting material

The dashboard image above is extracted from the project report. This folder documents the project; implementation files and hardware documentation can be added as supporting material.
