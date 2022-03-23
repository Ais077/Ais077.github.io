$(() =>{
    
    const container = $('.container');
    const govermentName = $('#name');
    const region = $('#region');
    const sumRegion = $('#subregion');
    const capital = $('#capital');
    const flag = $('#flag');
    const countryName = $('#country-name');
    const showBtn = $('#show');
    const preLoader = $('.loader');
    
    showBtn.on('click', function() {
        let nameGoverment = countryName.val();
        preLoader.css({display: 'block'});
        container.css({display: 'none'});
        $.ajax({
            method: 'GET',
            url: `https://restcountries.com/v2/name/${nameGoverment}`,
            success: (response) => {
                container.css({display: 'block'});
                preLoader.css({display: 'none'});
                const country = response[0];
                let imageFlag = $(`<img src="${country.flag}" alt="flag" id="countryFlag">`);
                govermentName.text(country.name);
                region.text(country.region);
                sumRegion.text(country.subregion);
                capital.text(country.capital);
                imageFlag.css({height: '100px', width: '200px'});
                flag.html(imageFlag);
                console.log(response);
            },
            error: () => {
                preLoader.css({display: 'none'});
                alert('Такая страна не существует!')
            }
        });            
    });

})