function sed() {
    var message = $('#odpowiedz');
    if (message.length) {
        setTimeout(function () {
            document.getElementById("odpowiedz").innerHTML = '';
            document.getElementById("wys").disabled = false;
        }, 7000);
    }
}

function xer() {
    $("#rese").click(function () {
        document.getElementById("odpowiedz").innerHTML = '';
    });
}

angular.module('app')
    .controller('KontaktCtrl', function ($scope, $http) {

        $scope.postMail = function () {
            document.getElementById("wys").disabled = false;

            if ($scope.contactForm.$invalid === true) {
                return
            }
            $("#wys").click(function () {
                document.getElementById("odpowiedz").innerHTML = '';
            });

            document.getElementById("wys").disabled = true;

            console.log("Wysyła");
            //Request
            $http.post('/kontakt', $scope.contact)
                .success(function (status, data) {
                    console.log(data + ' Wysłano ' + status);
                    $scope.success = true;
                    delete $scope.contact;
                    document.getElementById("myform").reset();
                    document.getElementById("odpowiedz").innerHTML = '<div class="callout success error2"><p>Wiadomość została wysłana. Odpowiem najszybciej jak to możliwe. Dziękuję.</p></div>';
                    sed();
                    xer();
                })
                .error(function (status, data) {
                    console.log(data + ' Błąd ' + status);
                    document.getElementById("odpowiedz").innerHTML = '<div class="callout alert error2"><p>Wiadomość nie została wysłana. Wystąpił błąd</p></div>';
                    sed();
                    xer();
                })
        };
    });
