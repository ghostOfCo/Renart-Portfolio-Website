document.getElementById('language-select').addEventListener('change', function() {

    const selectedLang = this.value;
    
    fetch(`./Json/contact-${selectedLang}.json`)
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


        document.getElementById('form').innerHTML = data[1].form;
        document.getElementById('map_p').innerHTML = data[1].map_p;
        document.getElementById('foot_adress_title').innerHTML = data[1].foot_adress_title;
        document.getElementById('foot_city').innerHTML = data[1].foot_city;
        document.getElementById('foot_area').innerHTML = data[1].foot_area;
        document.getElementById('foot_contact_title').innerHTML = data[1].foot_contact_title;
        document.getElementById('foot_follow').innerHTML = data[1].foot_follow;
 
    });
});

  // Charger la langue par défaut (par exemple, anglais)
document.getElementById('language-select').value = 'en';
document.getElementById('language-select').dispatchEvent(new Event('change'));