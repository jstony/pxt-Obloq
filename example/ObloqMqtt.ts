Obloq.Obloq_setup(
    "dfrobotYanfa",
    "hidfrobot",
    "H1zzdztAwz",
    "ry-MOzFAPz",
    "SkMaGKCDM"
    )
Obloq.obloq_mqttCallbackUser(({ mye: instruction, myparam: message }) => {
    if (instruction == "SkMaGKCDM") {
        basic.showString(message)
    }
    if (message == "MqttConneted") {
        Obloq.Obloq_subTopic()
    }
    if (instruction == "SubOk") {
        basic.showString("OK")
    }
})
Obloq.Obloq_serialInit(SerialPin.P2, SerialPin.P1, BaudRate.BaudRate9600)
Obloq.Obloq_connectWifi()
Obloq.Obloq_connectMqtt()
basic.forever(() => {
    Obloq.Obloq_sendMessage("hello")
    basic.pause(5000)
})
