# My Home-Assitant Config

[![Build Status](https://travis-ci.org/phixion/Home-AssistantConfig.svg?branch=master)](https://travis-ci.org/phixion/Home-AssistantConfig)
[![Pre Commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
[![Black Duck Security Risk](https://copilot.blackducksoftware.com/github/repos/phixion/Home-AssistantConfig/branches/master/badge-risk.svg)](https://copilot.blackducksoftware.com/github/repos/phixion/Home-AssistantConfig/branches/master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Hardware

### Docker Host

- Intel NUC
- nvme as faststorage and HDD as local backup storage
- 16GB DDR4
- 2x Gbit LAN in a bond (IEEE 802.3ad Dynamic link aggregation)

### Network

- Unifi USG 3
- Unifi Switch 8
- Unifi AP Light
- QNAP 269 Pro 10 TB
  - Network Storage
  - MariaDB
  - MongoDB
  - RClone Plexdata to gdrive

### ESPHome Devices

- nodeMCU
  - Lightsensors (binary)
  - PIR Motion Sensors
  - Noise Sensors (binary)
  - Illuminance Sensors
  - Door Sensor
  - Window Sensor
- Neopixel RGB Strips (2 of which run WLED)
- Sonoff POW2
  - monitoring power consumption
- Sonoff T3 Touch Lightswitches
- Sonoff TH16
  - Humidity
  - Temperature
- Teckin E27 RGBWW Bulbs

### Heating

- Drayton Wiser
  - 3x iRTV
  - 1x HeatHub

### Assistance

- Google Nest Hub
- Google Home Mini

### Misc / Abandoned

- a few MagicHome LED controllers running ESPHome
- Luminea LAX RGBW LED Controllers
- 2x Raspberry Pi 3b
  - Failover Wireless Hotspot
  - LTE Failover router
  - DNS (Adguard Home)
  - Zerotier One Nodes

### Software

- Home Assitant
- ESPHome
- Archlinux
- Docker
- Adguard Home
- Zerotier One
- librenms
- Plex
- InfluxDB
- central logging with telegraf
- Traccar
- Traefik
- Caddy

### Media

A couple of impressions of the Lovelace Interface

WIP COMING SOON

### Useful Resources

- [GitHub README Docs](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax)
- [ESPHome](https://esphome.io)
- [HA Community](https://community.home-assistant.io/)
