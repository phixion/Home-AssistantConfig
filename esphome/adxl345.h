#include "esphome.h"
#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_ADXL345_U.h>

class ADXL345Sensor : public PollingComponent
{
public:
    Adafruit_ADXL345_Unified accel = Adafruit_ADXL345_Unified(12345);
    Sensor *accel_x_sensor = new Sensor();
    Sensor *accel_y_sensor = new Sensor();
    Sensor *accel_z_sensor = new Sensor();

    ADXL345Sensor() : PollingComponent(1000) {}

    void setup() override
    {
        accel.begin();
        /* Set the range to whatever is appropriate for your project */
        // accel.setRange(ADXL345_RANGE_16_G);
        // accel.setRange(ADXL345_RANGE_8_G);
        // accel.setRange(ADXL345_RANGE_4_G);
        accel.setRange(ADXL345_RANGE_2_G);
        //
    }

    void update() override
    {
        sensors_event_t event;
        accel.getEvent(&event);

        accel_x_sensor->publish_state(event.acceleration.x);
        accel_y_sensor->publish_state(event.acceleration.y);
        accel_z_sensor->publish_state(event.acceleration.z);
    }
};