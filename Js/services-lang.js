document.getElementById('language-select').addEventListener('change', function() {

    const selectedLang = this.value;
    
    fetch(`./Json/services-${selectedLang}.json`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('nav_links_1').textContent = data[0].nav_links_1;
            document.getElementById('serv_links_1').textContent = data[0].serv_links_1;
            document.getElementById('serv_links_2').textContent = data[0].serv_links_2;
            document.getElementById('serv_links_3').textContent = data[0].serv_links_3;
            document.getElementById('serv_links_4').textContent = data[0].serv_links_4;
            document.getElementById('serv_links_5').textContent = data[0].serv_links_5;

                document.getElementById('ddc-first').textContent = data[0].des_links_1;

            document.getElementById('port_links_2').textContent = data[0].port_links_2;
                document.getElementById('dcc-first').textContent = data[0].code_links_1;
                document.getElementById('code_links_2').textContent = data[0].code_links_2;
                document.getElementById('code_links_3').textContent = data[0].code_links_3;

        document.getElementById('hire').textContent = data[0].nav_links_5;
        document.getElementById('nav_links_6').textContent = data[0].nav_links_6;

        document.getElementById('sec1_top_h2').textContent = data[1].sec1_top_h2;
        document.getElementById('sec1_top_p').innerHTML = data[1].sec1_top_p;
        document.getElementById('sec1_bottom_h3_1').textContent = data[1].sec1_bottom_h3_1;
        document.getElementById('sec1_bottom_p_1').innerHTML = data[1].sec1_bottom_p_1;
        document.getElementById('sec1_bottom_h3_2').textContent = data[1].sec1_bottom_h3_2;
        document.getElementById('sec1_bottom_p_2').innerHTML = data[1].sec1_bottom_p_2;
        document.getElementById('sec1_bottom_h3_3').textContent = data[1].sec1_bottom_h3_3;
        document.getElementById('sec1_bottom_p_3').innerHTML = data[1].sec1_bottom_p_3;
        document.getElementById('sec1_bottom_h3_4').textContent = data[1].sec1_bottom_h3_4;
        document.getElementById('sec1_bottom_p_4').innerHTML = data[1].sec1_bottom_p_4;
        document.getElementById('sec1_bottom_h3_5').textContent = data[1].sec1_bottom_h3_5;
        document.getElementById('sec1_bottom_p_5').innerHTML = data[1].sec1_bottom_p_5;

        document.getElementById('sec2_h2').textContent = data[2].sec2_h2;
        document.getElementById('sec2_p1').innerHTML = data[2].sec2_p1;
        document.getElementById('sec2_h3_2').textContent = data[2].sec2_h3_2;
        document.getElementById('sec2_p2').innerHTML = data[2].sec2_p2;

        document.getElementById('sec3_h2').textContent = data[3].sec3_h2;
        document.getElementById('sec3_p1').innerHTML = data[3].sec3_p1;
        document.getElementById('sec3_h3_2').textContent = data[3].sec3_h3_2;
        document.getElementById('sec3_p2').innerHTML = data[3].sec3_p2;

        document.getElementById('sec4_h2').textContent = data[4].sec4_h2;
        document.getElementById('sec4_p1').innerHTML = data[4].sec4_p1;
        document.getElementById('sec4_h3_2').textContent = data[4].sec4_h3_2;
        document.getElementById('sec4_p2').innerHTML = data[4].sec4_p2;

        document.getElementById('sec5_h2').textContent = data[5].sec5_h2;
        document.getElementById('sec5_p1').innerHTML = data[5].sec5_p1;
        document.getElementById('sec5_h3_2').textContent = data[5].sec5_h3_2;
        document.getElementById('sec5_p2').innerHTML = data[5].sec5_p2;

        document.getElementById('sec6_h2').textContent = data[6].sec6_h2;
        document.getElementById('sec6_p1').innerHTML = data[6].sec6_p1;
        document.getElementById('sec6_h3_2').textContent = data[6].sec6_h3_2;
        document.getElementById('sec6_p2').innerHTML = data[6].sec6_p2;

        document.getElementById('sec7_h1').textContent = data[7].sec7_h1;
        document.getElementById('sec7_p_span').textContent = data[7].sec7_p_span;
        document.getElementById('sec7_p').innerHTML = data[7].sec7_p;

        document.getElementById('data_p1_span').textContent = data[7].data_p1_span;
        document.getElementById('data_p1').innerHTML = data[7].data_p1;
        document.getElementById('data_p2_span').textContent = data[7].data_p2_span;
        document.getElementById('data_p2').innerHTML = data[7].data_p2;
        document.getElementById('data_p3_span').textContent = data[7].data_p3_span;
        document.getElementById('data_p3').innerHTML = data[7].data_p3;
        document.getElementById('data_p4_span').textContent = data[7].data_p4_span;
        document.getElementById('data_p4').innerHTML = data[7].data_p4;
        document.getElementById('data_p5_span').textContent = data[7].data_p5_span;
        document.getElementById('data_p5').innerHTML = data[7].data_p5;
        document.getElementById('data_p6_span').textContent = data[7].data_p6_span;
        document.getElementById('data_p6').innerHTML = data[7].data_p6;

        document.getElementById('sec7_p_last').textContent = data[7].sec7_p_last;
    });
});

  // Charger la langue par défaut (par exemple, anglais)
document.getElementById('language-select').value = 'en';
document.getElementById('language-select').dispatchEvent(new Event('change'));