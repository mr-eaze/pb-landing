<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PlantBase</title>
    <link rel="stylesheet" href="assets/css/normalize.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/jquery.fullpage.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400" rel="stylesheet">     
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-118643687-1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-118643687-1');
    </script>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-T9345G2');</script>
    <!-- End Google Tag Manager -->
</head>
<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T9345G2"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div id="pbase" class="body-snb">
            <?php include (realpath(dirname(__FILE__)."/assets/layout/header.php")); ?>
    <div id="above-fold">
        <div class="container-fluid">
        <div class="d-flex flex-wrap h-100">
        <div class="col-12 col-md-6" id="form-sub">
            <div class="abs-cent">
                <h1 class="quote"><span class="quote-container"><span>Find</span><span>Like</span><span>Share</span><span>Get</span></span> it.</h1>
                <!-- <h1><span>Find</span><span>Like</span><span>Share</span><span>Get</span> it.</h1> -->
                <div class="form-container">
                    <form action="#" class="email-form">
                        <div class="email-input">
                        <input type="email" placeholder="email" name="email">
                        <button id="submit-form">submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <?php include (realpath(dirname(__FILE__)."/assets/layout/footer-desktop.php")); ?>

        </div>
        <div class="col-12 col-md-6" id="hero">
            <div class="abs-cent phone">
                <div class="phone-1"></div>
                <div class="phone-2"></div>
                <div class="phone-3"></div>
                <div class="phone-4"></div>
            </div>
            <?php include (realpath(dirname(__FILE__)."/assets/layout/footer-mobile.php")); ?>

        </div>
        </div>
        </div>
        </div>
    </div>
    <script src="//code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="assets/scripts/jquery.color.js"></script>
    <script src="assets/scripts/jquery.serialize-object.min.js"></script>
    <script src="assets/scripts/scripts.js"></script>
</body>
</html>