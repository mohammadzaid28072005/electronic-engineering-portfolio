# FPGA Accelerometer and Seven-Segment Display System

A modular VHDL design for the Digilent Nexys A7-100T that acquires ADXL362 accelerometer data over SPI and displays signed X, Y and Z values on multiplexed seven-segment displays.

## Highlights

- SPI data acquisition from the ADXL362
- Signed-value processing
- Binary-to-BCD conversion
- Clock division, counters and multiplexers
- Seven-segment decoding and anode control
- RGB orientation/status indication
- Simulation testbench
- XDC pin constraints
- Synthesis, implementation and working FPGA bitstream

## Technologies

VHDL, Vivado, Nexys A7-100T, SPI, FPGA, XDC

## Suggested files to add

- VHDL source modules
- Testbench
- XDC constraints
- Simulation screenshots
- Photos of the board running
