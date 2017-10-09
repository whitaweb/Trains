  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB6DXMM2q7KDngbF3XT7ymrapDy_AYj-dQ",
    authDomain: "trains-2c6e5.firebaseapp.com",
    databaseURL: "https://trains-2c6e5.firebaseio.com",
    projectId: "trains-2c6e5",
    storageBucket: "",
    messagingSenderId: "30857530169"
  };
  firebase.initializeApp(config);

   // Create a variable to reference the database
   var database = firebase.database();

      // Firebase Variables

      var trainName = $('#name').val().trim();
      var destination = $('#dest').val().trim();
      var trainTime = $('#time').val().trim();
      var frequency= $('#frequencymin').val().trim();

      $('#submit').on("click", function(){
        event.preventDefault();

    console.log('all:', trainName, destination, trainTime, frequency);


    var trainData = {

      trainName: trainName,
      destination: destination,
      trainTime: trainTime,
      frequency: frequency

    };


      database.ref().push(trainData);

        // Add Alert or Modal
        // Here.......

        // Clears all of the text-boxes
  // $("#name").val("");
  // $("#dest").val("");
  // $("#time").val("");
  // $("#frequencymin").val("");

});



    database.ref().on("child_added", function(snapshot) {

        // Print the initial data to the console.
        console.log(snapshot.val());
        // Log the value of the various properties

        var newTrain = snapshot.val().trainName;
        var newDestination = snapshot.val().destination;
        var newTime = snapshot.val().trainTime;
        var newFrequency = snapshot.val().frequency;

        console.log(newTrain);
        console.log(newDestination);
        console.log(newTime);
        console.log(newFrequency);
       
        // $("#trainname").html(snapshot.val().trainName);
        // $("#destination").html(snapshot.val().destination);
        // $("#frequency").html(snapshot.val().frequency);
        // $("#nextarrival").html(snapshot.val().trainTime);

         // Add each train's data into the table
  $("#tablebody > tbody").append("<tr><td>" + newTrain + "</td><td>" + newDestination + "</td><td>" +
  newTime + "</td><td>" + newFrequency + "</td><td>" + newFrequency + "</td></tr>");
});



      