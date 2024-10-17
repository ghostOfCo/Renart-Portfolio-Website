document.getElementById('language-select').addEventListener('change', function() {

    const selectedLang = this.value;
    
    fetch(`./Json/portfolio-${selectedLang}.json`)
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


        document.getElementById('ancreCd').textContent = data[1].sec1_h2;
        document.getElementById('ancreCdLatest').textContent = data[1].sec1_h3;
        document.getElementById('sec1_p').innerHTML = data[1].sec1_p;

        document.getElementById('ancreCdWebP').textContent = data[2].sec2_h3;
        document.getElementById('sec2_p').innerHTML = data[2].sec2_p;

        document.getElementById('ancreCdDesktop').textContent = data[3].sec3_h3;
        document.getElementById('sec3_p').innerHTML= data[3].sec3_p;

        document.getElementById('ancreDes').textContent = data[4].sec4_h2;
        document.getElementById('ancreDesLatest').textContent = data[4].sec4_h3;

        document.getElementById('ancreDesLogos').textContent = data[5].sec5_h3;
        document.getElementById('sec5_p').innerHTML= data[5].sec5_p;

        document.getElementById('ancreDesPosters').textContent = data[6].sec6_h3;
        document.getElementById('sec6_p').innerHTML = data[6].sec6_p;
        
    });
});

  // Charger la langue par défaut (par exemple, anglais)
document.getElementById('language-select').value = 'en';
document.getElementById('language-select').dispatchEvent(new Event('change'));