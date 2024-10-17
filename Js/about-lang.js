document.getElementById('language-select').addEventListener('change', function() {

    const selectedLang = this.value;
    
    fetch(`./Json/about-${selectedLang}.json`)
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

        document.getElementById('ancreH1Sec1').textContent = data[1].sec1_h1;
        document.getElementById('sec1_a').innerHTML = data[1].sec1_a;
        document.getElementById('sec1_topic').innerHTML = data[1].sec1_topic;
        document.getElementById('sec1_bio').textContent = data[1].sec1_bio;
        document.getElementById('numbers_1_p2').innerHTML = data[1].numbers_1_p2;
        document.getElementById('numbers_2_p2').innerHTML = data[1].numbers_2_p2;
        document.getElementById('numbers_3_p2').innerHTML = data[1].numbers_3_p2;
        document.getElementById('numbers_4_p2').innerHTML = data[1].numbers_4_p2;
        document.getElementById('my_works_h1').textContent = data[1].my_works_h1;
        document.getElementById('works_p1').innerHTML = data[1].works_p1;
        document.getElementById('works_p2').innerHTML = data[1].works_p2;
        document.getElementById('works_p3').innerHTML = data[1].works_p3;
        document.getElementById('sec2_h1').textContent = data[1].sec2_h1;
        document.getElementById('sec2_p1').textContent = data[1].sec2_p1;
        document.getElementById('sec2_p2').textContent = data[1].sec2_p2;

    });
});

  // Charger la langue par défaut (par exemple, anglais)
document.getElementById('language-select').value = 'en';
document.getElementById('language-select').dispatchEvent(new Event('change'));