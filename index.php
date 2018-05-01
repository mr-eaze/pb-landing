<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/jquery.fullpage.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <?php include (realpath(dirname(__FILE__)."/assets/layout/header.php")); ?>
    <div id="pbase">
        <div class="section" id="above-fold">
            <div class="container">
                <h1 class="abs-cent">Discover <span>new vegan products,</span> <span>located <strong>near you.</strong></span></h1>
            </div>
            <div id="leaf"></div>
        </div>
        <div class="section" id="product">
            <div class="container abs-cent">
                <div class="d-flex flex-wrap flex-row pt-55">                
                    <div class="col-12 offset-sm-2 col-sm-8 offset-md-3 col-md-6 offset-lg-4 col-lg-4" id="product-shot"></div>
                </div>
            </div>
        </div>
        <div class="section" id="contact">
            <div class="container abs-cent">
                <div class="flex-row d-flex flex-wrap">
                    <div class="col-12 offset-sm-2 col-sm-8 offset-md-3 col-md-6 offset-lg-4 col-lg-4">
                        <img src="assets/img/larger-logo.png" class="img-fluid" alt="">
                        <p class="roboto text-center">sign up below to be notified for updates</p>
                        <form action="">
                            <input type="text" class="form-control" placeholder="first name">
                            <input type="text" class="form-control" placeholder="last name">
                            <input type="email" class="form-control" placeholder="e-mail address">
                            <button class="form-control">sign up</button>
                        </form>
                    </div>
                </div>
            </div>
            <?php include (realpath(dirname(__FILE__)."/assets/layout/footer.php")); ?>
            </div>
        </div>
    <script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="assets/scripts/jquery.fullpage.min.js"></script>
    <script src="assets/scripts/scripts.js"></script>
</body>
</html>