// $(document).ready(function () {
//     $('#fetchbtn').click(function () {
//         $('#fetchdata');
//     })
// })






// $(document).ready(function () {
//     $("#asyncbtn").click(function () {
//         $.ajax({
//             url: "JAJAX.txt", success: function (result) {
//                 $("#asyncdata").html(result);
//             }
//         });
//     });
// })




// $("#ajaxgetbtn").click(function () {
//     $.get("JAJAX.asp", function (data, status) {
//         alert("Data: " + data + "\nStatus: " + status);
//     });
// });


// $(document).ready(function () {
//     $("button").click(function () {
//         $.post("demo_test_post.asp",
//             {
//                 name: "Donald Duck",
//                 city: "Duckburg"
//             },
//             function (data, status) {
//                 alert("Data: " + data + "\nStatus: " + status);
//             });
//     });
// });




$(document).ready(function () {
    $('#POSTbtn').click(function () {
        let postUsername = $('#POSTUsername').val();
        let postteam = $('#POSTteam').val();
        console.log(postUsername, " data sending ", postteam)
        let userdata = {
            'Name': postUsername,
            'Team': postteam
        };

        $.ajax({
            type: 'POST',
            crossDomain: true,
            url: 'https://ajax-b8d96-default-rtdb.firebaseio.com/user.json',
            data: JSON.stringify(userdata),
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
                xhr.setRequestHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
                xhr.setRequestHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            },
            success: function (response) {
                console.log('Data sent successfully:', response);
                // console.log(userdata);
                console.log(data);
            },
            error: function (error) {
                console.error('Error sending data:', error);
                console.log(data);
            }
        });
    });

    $('#getdata').click(function () {
        var response = '';
        $.ajax({
            type: "GET",
            crossDomain: true,
            url: 'https://ajax-b8d96-default-rtdb.firebaseio.com/user.json',
            async: false,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
                xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
                xhr.setRequestHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            },
            success: function (text) {
                response = text;
                let key = Object.keys(response);
                key.map((element)=>{
                    console.log(`${response[element].Name} is from ${response[element].Team}`)
                })
            },
            error: function (error) {
                console.error('Error getting data:', error);
            }
        });
    });
});