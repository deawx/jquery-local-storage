
// waits for document to load first before running code.
$(document).ready(function() {

    //create object
    var info = {};

        //put inputs into object 
        function putInputToObject(){
            info.username = $('#user-name').val();
            info.password = $('#password').val();
            info.firstname = $('#firstname').val();
            info.firstname = $('#middlename').val();
            info.lastname = $('#lastname').val();
            info.phone = $('#phone').val();
            info.address = $('#address').val();
            info.address_line_2 = $('#address_line_2').val();
            info.city = $('#city').val();
            info.state = $('#state').val();
            info.post_code = $('#post_code').val();
            info.country = $('#country').val();
        }

        //if any input values are empty then return flase value
        function checkInputMain(val){
            if ($('#user-name').val() == "" || $('#password').val() == "" || $('#firstname').val() == "" || $('#lastname').val() == "" || $('#phone').val() == "" || $('#address').val() == "" || $('#city').val() == "" || $('#state').val() == "" || $('#post_code').val() == "" || $('#city').val() == ""){
                
                alert("Please enter all your information.");
                return false;
            }
            else{
                return true;
            }
        }

        //run function when submit button is clicked.
        $('#submit-btn').click(function(){
            //prevent the submit button from refreshing the page
            event.preventDefault();

            //Check to see any input fields are empty
            if (checkInputMain()) {
                console.log("checkInputIsEmpty: " + checkInputMain() );

                //put inputs into object
                putInputToObject();
                //create variable with simpleapply followed by the username
                var tmp_user = "simple_apply_" + info.username

                //If the user hasn't been created. Then proceed with new user entry.
                if (localStorage.getItem(tmp_user) === null) {
                
                    //put object into local storage
                    localStorage.setItem(tmp_user, JSON.stringify(info));

                    // Retrieve the object from storage with "simple_apply_username"
                    var retrievedObject = localStorage.getItem(tmp_user);
                    
                    console.log("Username-object: " + info.username );

                    console.log("Username-variable: " + tmp_user );

                    console.log('retrievedObject: ', JSON.parse(retrievedObject));

                    console.log("Submit button was successful");

                    alert("Username: " + info.username + " Was successfully entered");

                }
                else{
                    //Create a popup message
                    alert("Username: " + info.username + " allready exists. Please choose another");
                    console.log("Username allready exists");
                }
            }
        });
});