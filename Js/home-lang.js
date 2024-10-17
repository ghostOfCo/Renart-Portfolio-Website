document.getElementById('language-select').addEventListener('change', function() {

    const selectedLang = this.value;
    
    fetch(`./Json/home-${selectedLang}.json`)
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

        document.getElementById('pres_h2').innerHTML = data[1].pres_h2;
        document.getElementById('pres_h2_span').textContent = data[1].pres_h2_span;
        document.getElementById('pres_p1').textContent = data[1].pres_p1;
        document.getElementById('pres_bio').innerHTML = data[1].pres_bio;
        document.getElementById('pres_btn').textContent = data[1].pres_btn;
        document.getElementById('pres_info_txt1').innerHTML = data[1].pres_info_txt1;
        document.getElementById('pres_info_txt2').innerHTML = data[1].pres_info_txt2;
        document.getElementById('pres_info_txt3').innerHTML = data[1].pres_info_txt3;
        document.getElementById('pres_info_txt4').innerHTML = data[1].pres_info_txt4;

        document.getElementById('sec1_h1').textContent = data[2].sec1_h1;
        document.getElementById('sec1_p').innerHTML = data[2].sec1_p;
        document.getElementById('btn_voirplus_sec1').textContent = data[2].sec1_btn;

        document.getElementById('sec2_h1').textContent = data[3].sec2_h1;

        document.getElementById('sec3_h1').textContent = data[4].sec3_h1;
        document.getElementById('sec3_p').innerHTML = data[4].sec3_p;
        document.getElementById('btn_plus_sec3').textContent = data[4].sec3_btn;

        document.getElementById('sec4_h1').textContent = data[5].sec4_h1;
        document.getElementById('sec4_p').innerHTML = data[5].sec4_p;
        document.getElementById('btn_plus_sec4').textContent = data[5].sec4_btn;

        document.getElementById('sec5_h1').textContent = data[6].sec5_h1;
        document.getElementById('sec5_p').innerHTML = data[6].sec5_p;

        document.getElementById('footer_p').innerHTML = data[7].footer_p;
    });
});

  // Charger la langue par défaut (par exemple, anglais)
document.getElementById('language-select').value = 'en';
document.getElementById('language-select').dispatchEvent(new Event('change'));
        