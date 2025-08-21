//--- Informacion (inventada) de ventas de inmuebles por localidad y año ---
const dataMap = [
    {
        tipo: "anio",
        periodo: "2019",
        ANTONIO_NARINO: 7342,
        BARRIOS_UNIDOS: 1822,
        BOSA: 4653,
        CHAPINERO: 9362,
        CIUDAD_BOLIVAR: 6825,
        ENGATIVA: 5196,
        FONTIBON: 8621,
        KENNEDY: 2755,
        CANDELARIA: 4163,
        MARTIRES: 5377,
        PUENTE_ARANDA: 6292,
        RAFAEL_URIBE_URIBE: 2024,
        SAN_CRISTOBAL: 9281,
        SANTA_FE: 5782,
        SUBA: 8411,
        TEUSAQUILLO: 2211,
        TUNJUELITO: 3966,
        USAQUEN: 6964,
        USME: 5735
    },
    {
        tipo: "anio",
        periodo: "2020",
        ANTONIO_NARINO: 2905,
        BARRIOS_UNIDOS: 6259,
        BOSA: 8711,
        CHAPINERO: 1422,
        CIUDAD_BOLIVAR: 7689,
        ENGATIVA: 2344,
        FONTIBON: 5035,
        KENNEDY: 6217,
        CANDELARIA: 2103,
        MARTIRES: 9811,
        PUENTE_ARANDA: 1487,
        RAFAEL_URIBE_URIBE: 3932,
        SAN_CRISTOBAL: 8604,
        SANTA_FE: 6621,
        SUBA: 4903,
        TEUSAQUILLO: 5128,
        TUNJUELITO: 2037,
        USAQUEN: 9788,
        USME: 3460
    },
    {
        tipo: "anio",
        periodo: "2021",
        ANTONIO_NARINO: 6598,
        BARRIOS_UNIDOS: 9315,
        BOSA: 1446,
        CHAPINERO: 8744,
        CIUDAD_BOLIVAR: 5823,
        ENGATIVA: 2277,
        FONTIBON: 9126,
        KENNEDY: 3749,
        CANDELARIA: 7882,
        MARTIRES: 6630,
        PUENTE_ARANDA: 5604,
        RAFAEL_URIBE_URIBE: 9160,
        SAN_CRISTOBAL: 3355,
        SANTA_FE: 2803,
        SUBA: 7507,
        TEUSAQUILLO: 4090,
        TUNJUELITO: 8627,
        USAQUEN: 5248,
        USME: 1238
    },
    {
        tipo: "anio",
        periodo: "2022",
        ANTONIO_NARINO: 4037,
        BARRIOS_UNIDOS: 8370,
        BOSA: 7492,
        CHAPINERO: 5555,
        CIUDAD_BOLIVAR: 6457,
        ENGATIVA: 7208,
        FONTIBON: 2691,
        KENNEDY: 8030,
        CANDELARIA: 6278,
        MARTIRES: 1700,
        PUENTE_ARANDA: 9344,
        RAFAEL_URIBE_URIBE: 3807,
        SAN_CRISTOBAL: 1196,
        SANTA_FE: 2808,
        SUBA: 7966,
        TEUSAQUILLO: 6884,
        TUNJUELITO: 4855,
        USAQUEN: 2361,
        USME: 9044
    },
    {
        tipo: "anio",
        periodo: "2023",
        ANTONIO_NARINO: 8321,
        BARRIOS_UNIDOS: 3378,
        BOSA: 9070,
        CHAPINERO: 2659,
        CIUDAD_BOLIVAR: 3942,
        ENGATIVA: 7025,
        FONTIBON: 4726,
        KENNEDY: 1748,
        CANDELARIA: 9261,
        MARTIRES: 1338,
        PUENTE_ARANDA: 8584,
        RAFAEL_URIBE_URIBE: 1866,
        SAN_CRISTOBAL: 7820,
        SANTA_FE: 2126,
        SUBA: 3029,
        TEUSAQUILLO: 6347,
        TUNJUELITO: 5619,
        USAQUEN: 2468,
        USME: 9703
    },
    {
        tipo: "anio",
        periodo: "2024",
        ANTONIO_NARINO: 1986,
        BARRIOS_UNIDOS: 4204,
        BOSA: 5408,
        CHAPINERO: 8718,
        CIUDAD_BOLIVAR: 7114,
        ENGATIVA: 4893,
        FONTIBON: 1655,
        KENNEDY: 9457,
        CANDELARIA: 2707,
        MARTIRES: 3560,
        PUENTE_ARANDA: 5698,
        RAFAEL_URIBE_URIBE: 7769,
        SAN_CRISTOBAL: 4897,
        SANTA_FE: 1405,
        SUBA: 8936,
        TEUSAQUILLO: 5930,
        TUNJUELITO: 6466,
        USAQUEN: 7361,
        USME: 4277
    },
    {
        tipo: "anio",
        periodo: "2025",
        ANTONIO_NARINO: 6230,
        BARRIOS_UNIDOS: 2098,
        BOSA: 3177,
        CHAPINERO: 1003,
        CIUDAD_BOLIVAR: 8914,
        ENGATIVA: 7729,
        FONTIBON: 5992,
        KENNEDY: 2185,
        CANDELARIA: 3601,
        MARTIRES: 1464,
        PUENTE_ARANDA: 9466,
        RAFAEL_URIBE_URIBE: 1832,
        SAN_CRISTOBAL: 2199,
        SANTA_FE: 5981,
        SUBA: 6349,
        TEUSAQUILLO: 4735,
        TUNJUELITO: 4038,
        USAQUEN: 8270,
        USME: 5237
    }
];




// --- Mapeo de abreviaturas a nombres de localidades ---
const localidadMap = {
    ANTONIO_NARINO: "ANTONIO NARIÑO",
    BARRIOS_UNIDOS: "BARRIOS UNIDOS",
    BOSA: "BOSA",
    CHAPINERO: "CHAPINERO",
    CIUDAD_BOLIVAR: "CIUDAD BOLIVAR",
    ENGATIVA: "ENGATIVA",
    FONTIBON: "FONTIBON",
    KENNEDY: "KENNEDY",
    CANDELARIA: "CANDELARIA",
    MARTIRES: "LOS MARTIRES",
    PUENTE_ARANDA: "PUENTE ARANDA",
    RAFAEL_URIBE_URIBE: "RAFAEL URIBE URIBE",
    SAN_CRISTOBAL: "SAN CRISTOBAL",
    SANTA_FE: "SANTA FE",
    SUBA: "SUBA",
    TEUSAQUILLO: "TEUSAQUILLO",
    TUNJUELITO: "TUNJUELITO",
    USAQUEN: "USAQUEN",
    USME: "USME"
};

// --- Función para obtener datos por año ---
function getSalesDataByYear(year) {
    const registro = dataMap.find((d) => d.periodo === year);
    if (!registro) {
        console.log("No se encontraron datos para el año:", year);
        return [];
    }

    const salesData = Object.keys(localidadMap).map((key) => ({
        name: localidadMap[key],
        value: registro[key] || 0
    }));

    console.log("Datos encontrados para año", year, ":", registro);
    console.log("Datos de ventas procesados:", salesData);

    return salesData;
}

// --- Inicializar gráfico" ---
var myChart = echarts.init(document.getElementById("map-grafico"));

// --- Cargar mapa ---
setTimeout(function () {
    fetch("localidades_urbano.geojson").then((response) => {
        if (!response.ok)
            throw new Error("Error en red");



        return response.json();
    }).then((geojson) => { // Filtrar localidades duplicadas y SUMAPAZ, y normalizar nombres
        const localidadesUnicas = new Map();
        geojson.features.forEach((feature) => {
            if (feature.properties && feature.properties.LocNmbr && feature.properties.LocNmbr !== "SUMAPAZ") {
                const nombre = feature.properties.LocNmbr;
                if (!localidadesUnicas.has(nombre)) {
                    localidadesUnicas.set(nombre, feature);
                }
            }
        });
        geojson.features = Array.from(localidadesUnicas.values());


        geojson.features.forEach((feature) => {
            if (feature.geometry && feature.geometry.coordinates) {
                feature.geometry.coordinates.forEach(function rotatePolygon(coords) {
                    if (Array.isArray(coords[0]) && typeof coords[0][0] === "number") {
                        coords.forEach((point) => {
                            // Rotación de 90 grados en sentido contrario a las agujas del reloj
                            // (x, y) -> (-y, x)
                            const x = point[0];
                            const y = point[1];
                            point[0] = -y;
                            point[1] = x;
                        });
                    } else if (Array.isArray(coords[0])) {
                        coords.forEach(rotatePolygon);
                    }
                });
            }
        });

        echarts.registerMap("BogotaLocalidades", geojson);

        // Log para debug
        console.log("GeoJSON cargado:", geojson.features.length, "localidades");
        console.log("Nombres de localidades:", geojson.features.map(f => f.properties.LocNmbr));

        // Función para renderizar mapa
        function renderMap(year) {
            const salesData = getSalesDataByYear(year);
            const maxSales = Math.max(...salesData.map((item) => item.value));

            // Log para debug
            console.log("Renderizando mapa para año:", year);
            console.log("Datos de ventas:", salesData);
            console.log("Máximo de ventas:", maxSales);

            myChart.setOption({
                title: {
                    text: `Transacciones por Localidad - ${year}`,
                    left: "center"
                },
                tooltip: {
                    trigger: "item",
                    formatter: (params) => params.data ? `Localidad: ${params.name
                        }<br/>Ventas: ${params.value
                        } inmuebles` : "N/A"
                },
                visualMap: {
                    min: 0,
                    max: maxSales,
                    left: "left",
                    top: "bottom",
                    text: [
                        "Alto", "Bajo"
                    ],
                    calculable: true,
                    inRange: {
                        color: ["#f9d68f", "#FEB400"]
                    },
                    textStyle: {
                        color: "#333"
                    }
                },
                series: [
                    {
                        name: "Ventas de Inmuebles",
                        type: "map",
                        map: "BogotaLocalidades",
                        roam: true,
                        zoom: 1.8,
                        aspectScale: 1,
                        layoutCenter: [
                            "50%", "50%"
                        ],
                        layoutSize: "95%",
                        selectedMode: false,
                        label: {
                            show: true,
                            fontSize: 8,
                            color: "#000000"
                        },
                        itemStyle: {
                            areaColor: "#f0f0f0",
                            borderColor: "#000000"
                        },
                        emphasis: {
                            label: {
                                show: true,
                                color: "#000"
                            },
                            itemStyle: {
                                areaColor: "#ffd700"
                            }
                        },
                        data: salesData,
                        nameProperty: "LocNmbr"
                    },
                ]
            });

            // Log para debug cuando se complete el renderizado
            console.log("Mapa renderizado exitosamente para el año:", year);
        }

        // Evento para cambiar año
        document.getElementById("filter-map-year").addEventListener("change", (e) => {
            renderMap(e.target.value);
        });

        // Render inicial
        renderMap(document.getElementById("filter-map-year").value);
    }).catch((error) => {
        console.error("Error al cargar o procesar el GeoJSON:", error);
        myChart.setOption({
            title: {
                text: "Error al cargar el mapa",
                subtext: "No se pudo cargar el archivo GeoJSON",
                left: "center",
                top: "center",
                textStyle: {
                    color: "#e74c3c"
                }
            }
        });
    });
}, 20);