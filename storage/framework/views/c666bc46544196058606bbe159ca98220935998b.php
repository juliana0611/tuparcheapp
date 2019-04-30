<!doctype html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TuParche! | Cientos de eventos en Colombia.</title>

    <link rel="stylesheet" href="css/fontawesome.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <header>
        <div class="bar">
            <div class="content">
                <h1>TÚ<span>PARCHE</span></h1>
                <nav id="ppal_nav">
                    <div class="ham-menu">
                        <!-- This container has the reponsive menu -->
                    </div>
                    <div id="ppal_link">
                        <a href="#">Ingresar</a>
                        <a href="#">Crea una cuenta</a>
                    </div>
                </nav>
            </div>
            <!--.content-->
        </div>
        <!--.bar-->
    </header>

    <div id="web_cont">
        <aside>
            <div class="resp_menu">
                <!-- Responsive menu -->
            </div>

            <div class="all_content">
                <div class="text">
                    <h2>¿Qué está pasando en medellín?</h2>
                    <input type="text" id="u_search" placeholder="¡Encuentra cientos de eventos!">
                </div>
                <div class="modules">
                    <div class="module" style="background-color: #8ab0db">
                        <i class="fas fa-palette icon"></i>
                        <span>Arte</span>
                    </div>

                    <div class="module" style="background-color: #8adb8a">
                        <i class="fas fa-book icon"></i>
                        <span>Literatura</span>
                    </div>

                    <div class="module" style="background-color: #dadb8a">
                        <i class="fas fa-film icon"></i>
                        <span>Cine</span>
                    </div>

                    <div class="module" style="background-color: #db8a8a">
                        <i class="fas fa-music icon"></i>
                        <span>Música</span>
                    </div>

                    <div class="module" style="background-color: #db8ac0">
                        <i class="fas fa-store-alt icon"></i>
                        <span>Centro de eventos</span>
                    </div>

                    <div class="module" style="background-color: #968adb">
                        <i class="fas fa-laugh-wink icon"></i>
                        <span>Cultura</span>
                    </div>
                </div>
            </div>
        </aside>

        <main>
            <!-- Here comes the map -->
        </main>
    </div>

    <script src="js/fontawesome.js"></script>
    <script src="js/scripts.js"></script>
</body>

</html>
