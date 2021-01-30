# My Home-Assitant Config

## Statistics

![My Github Stats](https://github-readme-stats.phixion.vercel.app/api?username=phixion&show_icons=true&hide_title=false&show_owner&include_all_commits=true&hide_border=true)[![Top Langs](https://github-readme-stats.phixion.vercel.app/api/top-langs/?username=phixion&layout=compact&hide_border=true&hide_title=true)](https://github.com/phixion/Home-AssistantConfig)
[![ReadMe Card](https://github-readme-stats.phixion.vercel.app/api/pin/?username=phixion&repo=home-assistantconfig&hide_border=true&hide_title=true)](https://github.com/phixion/Home-AssistantConfig)

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/phixion/Home-AssistantConfig/Home%20Assistant%20CI?label=build%20stable&style=flat-square)](https://github.com/phixion/Home-AssistantConfig/actions?query=workflow%3A%22Home+Assistant+CI%22) [![Pre Commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?style=flat-square)](https://github.com/pre-commit/pre-commit) [![Black Duck Security Risk](https://copilot.blackducksoftware.com/github/repos/phixion/Home-AssistantConfig/branches/master/badge-risk.svg)](https://copilot.blackducksoftware.com/github/repos/phixion/Home-AssistantConfig/branches/master) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT) [![GitHub commit activity](https://img.shields.io/github/commit-activity/y/phixion/Home-AssistantConfig?style=flat-square)](https://github.com/phixion/Home-AssistantConfig/commits/master) ![Lines of code](https://img.shields.io/tokei/lines/github/phixion/home-assistantconfig?label=lines%20of%20code&style=flat-square)

## Monitoring

![Uptime Robot status](https://img.shields.io/uptimerobot/status/m785013905-aac6cbb5e0f5898914257c94?label=web&logo=home-assistant&logoColor=white&style=flat-square) ![Uptime Robot status](https://img.shields.io/uptimerobot/status/m785013899-1b07df90c40854d77eeed0c8?label=ssh&logo=home-assistant&logoColor=white&style=flat-square) ![Uptime Robot status](https://img.shields.io/uptimerobot/status/m785013903-432813b6a77a2d8a693de506?label=ping&logo=home-assistant&logoColor=white&style=flat-square) ![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m785013905-aac6cbb5e0f5898914257c94?label=30d&logo=home-assistant&logoColor=white&style=flat-square)
![Security Headers](https://img.shields.io/security-headers?style=flat-square&url=https%3A%2F%2Fhome.inferior.dev&logo=nginx&logoColor=white) ![Requires.io](https://img.shields.io/requires/github/phixion/home-assistant-config?logo=ubuntu&logoColor=white&style=flat-square)

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
