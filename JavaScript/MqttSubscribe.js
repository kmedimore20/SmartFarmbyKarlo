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
    });
  
  
  }
  
  function onConnect(){

    /*Prvi senzor*/
    topicTemeperatura1 = "SmartFarmKarlo/Temperatura1";
    topicVlaga1 = "SmartFarmKarlo/Vlaga1";
    topicSvijetlo1 = "SmartFarmKarlo/Svijetlo1";
    client.subscribe(topicTemeperatura1);
    client.subscribe(topicVlaga1);
    client.subscribe(topicSvijetlo1);

    /*Drugi senzor*/
    topicTemeperatura2 = "SmartFarmKarlo/Temperatura2";
    topicVlaga2 = "SmartFarmKarlo/Vlaga2";
    topicSvijetlo2 = "SmartFarmKarlo/Svijetlo2";
    client.subscribe(topicTemeperatura2);
    client.subscribe(topicVlaga2);
    client.subscribe(topicSvijetlo2);

    /*Treci senzor*/
    topicTemeperatura3 = "SmartFarmKarlo/Temperatura3";
    topicVlaga3 = "SmartFarmKarlo/Vlaga3";
    topicSvijetlo3 = "SmartFarmKarlo/Svijetlo3";
    client.subscribe(topicTemeperatura3);
    client.subscribe(topicVlaga3);
    client.subscribe(topicSvijetlo3);
  
    console.log("Subscribed to topic");
  }
  
  
  
  function onConnectionLost(responseObject){
    console.log("ERROR: Connection is lost.</span><br>");
    if(responseObject !=0){
        console.log("ERROR: "+ responseObject.errorMessage);
    }
  }
  
  function onMessageArrived(message){
    console.log("OnMessageArrived: "+message.payloadString);

    /*Poruke za prvi senzor*/
    if(message.destinationName == "SmartFarmKarlo/Temperatura1"){
      document.getElementById("temperatura1").innerHTML = "<span> Temperatura: " + message.payloadString + " °C</span><br>";
    }
    if (message.destinationName == "SmartFarmKarlo/Vlaga1"){
      document.getElementById("vlaga1").innerHTML = "<span> Vlaga: " + message.payloadString + " %</span><br>";
    }
    if (message.destinationName == "SmartFarmKarlo/Svijetlo1"){
      document.getElementById("svijetlo1").innerHTML = "<span> Vlaga: " + message.payloadString + " %</span><br>";
      if(message.payloadString == "1"){
        document.getElementById("svijetlo1").innerHTML = "<span> Svijetlo ne radi </span><br>";
      }
      if (message.payloadString == "0"){
        document.getElementById("svijetlo1").innerHTML = "<span> Svijetlo radi </span><br>";
      }
    }

    /*Poruke za drugi senzor*/
    if(message.destinationName == "SmartFarmKarlo/Temperatura2"){
      document.getElementById("temperatura2").innerHTML = "<span> Temperatura: " + message.payloadString + " °C</span><br>";
    }
    if (message.destinationName == "SmartFarmKarlo/Vlaga2"){
      document.getElementById("vlaga2").innerHTML = "<span> Vlaga: " + message.payloadString + " %</span><br>";
    }
    if (message.destinationName == "SmartFarmKarlo/Svijetlo2"){
      document.getElementById("svijetlo2").innerHTML = "<span> Vlaga: " + message.payloadString + " %</span><br>";
      if(message.payloadString == "1"){
        document.getElementById("svijetlo2").innerHTML = "<span> Svijetlo ne radi </span><br>";
      }
      if (message.payloadString == "0"){
        document.getElementById("svijetlo2").innerHTML = "<span> Svijetlo radi </span><br>";
      }
    }

    /*Poruke za treci senzor*/
    if(message.destinationName == "SmartFarmKarlo/Temperatura3"){
      document.getElementById("temperatura3").innerHTML = "<span> Temperatura: " + message.payloadString + " °C</span><br>";
    }
    if (message.destinationName == "SmartFarmKarlo/Vlaga3"){
      document.getElementById("vlaga3").innerHTML = "<span> Vlaga: " + message.payloadString + " %</span><br>";
    }
    if (message.destinationName == "SmartFarmKarlo/Svijetlo3"){
      document.getElementById("svijetlo3").innerHTML = "<span> Vlaga: " + message.payloadString + " %</span><br>";
      if(message.payloadString == "1"){
        document.getElementById("svijetlo3").innerHTML = "<span> Svijetlo ne radi </span><br>";
      }
      if (message.payloadString == "0"){
        document.getElementById("svijetlo3").innerHTML = "<span> Svijetlo radi </span><br>";
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