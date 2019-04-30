/**
 * Here comes the application context.
 * We'll use AJAX and PHP to make the queries to the database, and read the
 * returned JSON correctly.
 */

(function () {
    'use strict';
    document.addEventListener('DOMContentLoaded', function () {

        /* Select the buttons with the filters and gives the class of
        "active" */
        // const modules = document.querySelectorAll(".module");
        const asideMenu = document.querySelector(".resp_menu .cont");

        console.log(asideMenu);

        asideMenu.addEventListener("click", function () {
            this.classList.toggle("active");
            this.parentNode.parentNode.classList.toggle("show");
        });

        // modules.forEach(module => {
        //     module.addEventListener("click", putActiveClass);
        // });

        function putActiveClass(e) {
            if (this.classList.contains("active")) {
                return;
            } else {
                removeClass(modules, "active");
                this.classList.add("active");
                addContent(this);
                this.removeEventListener("click", putActiveClass);
            }

            console.log("Put active!");
        }

        /* Removes the "i_class" from the "iterable" array of DOM elements. */
        function removeClass(iterable, i_class) {
            iterable.forEach(item => {
                item.classList.remove(i_class);
            });
        }

        /* Creates html content to the events */
        function addContent(module) {

            var content = document.createElement("div");
            content.classList.add("module-info");

            // Create the closing button
            var closeBtn = document.createElement("div");
            closeBtn.classList.add("module-close");

            closeBtn.addEventListener("click", function (e) {
                module.classList.remove("active");
                setTimeout(function () {
                    module.addEventListener('click', putActiveClass);
                }, 10);
                this.parentNode.remove();
            });

            // Add the close btn to the module
            content.appendChild(closeBtn);

            // Make the filters and appends to the module
            for (let i = 0; i < 4; i++) {
                var filterCont = document.createElement("div"),
                    title = document.createElement("h3");

                filterCont.classList.add("module-filter");
                title.innerText = `Mi filtro ${(i + 1)}.`;
                filterCont.appendChild(title);
                content.appendChild(filterCont);
            }

            // Make the "show more" link and put this in the module
            var link = document.createElement("a");
            link.setAttribute("href", "#");
            link.classList.add("filter-link")
            link.innerText = "Más filtros!";
            content.appendChild(link);

            module.appendChild(content);
        }

        var map;

        function initMap() {
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: { lat: 6.258190, lng: -75.573991 },
            });

            var zones = [{
                    name: "centro de eventos",
                    coords: [
                        { lat: 6.207380, lng: -75.567418 },
                        { lat: 6.207314, lng: -75.571441 },
                        { lat: 6.209947, lng: -75.572443 },
                        { lat: 6.211088, lng: -75.571971 },
                        { lat: 6.209026, lng: -75.566372 },
                    ]
                },
                {
                    name: "musica",
                    coords: [
                        { lat: 6.243024, lng: -75.563714 },
                        { lat: 6.243024, lng: -75.563714 },
                        { lat: 6.246872, lng: -75.562128 },
                        { lat: 6.248056, lng: -75.564102 },
                        { lat: 6.244723, lng: -75.566469 },
                    ]
                }
            ];

            // Construct the "centro de eventos" area
            var centroEventos = new google.maps.Polygon({
                paths: zones[0].coords,
                strokeColor: '#db8ac0',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#db8ac0',
                fillOpacity: 0.35
            });

            // Construct the "musica" area
            var musica = new google.maps.Polygon({
                paths: zones[1].coords,
                strokeColor: '#db8a8a',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#db8a8a',
                fillOpacity: 0.35
            });

            centroEventos.setMap(map);
            musica.setMap(map);
        }

        initMap();

    }) // Ends DOMContentLoaded
})();
