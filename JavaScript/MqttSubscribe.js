function startConnect(){

    clientID = "ID-"+parseInt(Math.random() * 100);
  
    host = "test.mosquitto.org";
    port = 8080; 
  
    console.log("Connectiong to " + host + " on port " + port);
  
    client = new Paho.MQTT.Client(host,Number(port),clientID);
  
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
  
    client.connect({
        onSuccess: onConnect,
        useSSL: useTLS
    });
  
  
  }
  
  function onConnect(){
    topicTemeperatura = "SmartFarmKarlo/Temperatura";
    topicVlaga = "SmartFarmKarlo/Vlaga";
    topicSvijetlo = "SmartFarmKarlo/Svijetlo";
  
    console.log("Connected to broker");
    console.log("Subscribing to topics: " + topicTemeperatura + ", " + topicVlaga + ", " + topicSvijetlo);
  
    client.subscribe(topicTemeperatura);
    client.subscribe(topicVlaga);
    client.subscribe(topicSvijetlo);
  }
  
  
  
  function onConnectionLost(responseObject){
    console.log("ERROR: Connection is lost.</span><br>");
    if(responseObject !=0){
        console.log("ERROR: "+ responseObject.errorMessage);
    }
  }
  
  function onMessageArrived(message){
    console.log("OnMessageArrived: "+message.payloadString);
    if(message.destinationName == "SmartFarmKarlo/Temperatura"){
      document.getElementById("temperatura").innerHTML = "<span> Temperatura: " + message.payloadString + " °C</span><br>";
    }
    if (message.destinationName == "SmartFarmKarlo/Vlaga"){
      document.getElementById("vlaga").innerHTML = "<span> Vlaga: " + message.payloadString + " %</span><br>";
    }
    if (message.destinationName == "SmartFarmKarlo/Svijetlo"){
      document.getElementById("svijetlo").innerHTML = "<span> Vlaga: " + message.payloadString + " %</span><br>";
      if(message.payloadString == "1"){
        document.getElementById("svijetlo").innerHTML = "<span> Svijetlo ne radi </span><br>";
      }
      if (message.payloadString == "0"){
        document.getElementById("svijetlo").innerHTML = "<span> Svijetlo radi </span><br>";
      }
    }
  }
  
  /*function startDisconnect(){
    client.disconnect();
    document.getElementById("messages").innerHTML += "<span> Disconnected. </span><br>";
  
  }
  
  function publishMessage(){
  msg = document.getElementById("Message").value;
  topic = document.getElementById("topic_p").value;
  
  Message = new Paho.MQTT.Message(msg);
  Message.destinationName = topic;
  
  client.send(Message);
  document.getElementById("messages").innerHTML += "<span> Message to topic "+topic+" is sent </span><br>";
  
  }*/