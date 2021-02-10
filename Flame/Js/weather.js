$(document).ready(function(){
   
    $("#GetLocation").click(function () { 
        if ("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(function(position){ 
            var Lat =position.coords.latitude;
            var Long=position.coords.longitude;
            MyLocationWeather(Lat,Long);
                });
        }
    });

    $("#submitWeather").click(function(){
        var city = $("#city").val();
        CityWeather(city);
       
    });
    $("#Isl").click(function(){
        var city = "islamabad";
        CityWeather(city);
    });
    $("#Kar").click(function(){
        var city = "Karachi";
        CityWeather(city);
    });
    $("#New").click(function(){
        var city = "New York";
        CityWeather(city);
    });
    $("#Tok").click(function(){
        var city = "Tokoyo";
        CityWeather(city);
    });
    $("#Mad").click(function(){
        var city = "Madrid";
        CityWeather(city);
    });
    $("#Lon").click(function(){
        var city = "london";
       CityWeather(city);
    });
    
    
    });
    
    function show(data){
        return "<h1>"+data.name +" "+data.sys.country +"</h1>"+
               "<h3><strong>Weather </strong> : " + data.weather[0].main + "</h3>"+
               "<h3><strong>Description </strong> : <img src='https://openweathermap.org/img/w/"+data.weather[0].icon+".png'>" + data.weather[0].description + "</h3>"+
               "<h3><strong>Temperature </strong> : " + data.main.temp+ "&degC</h3>"+
               "<h3><strong>Pressure </strong> : " + data.main.pressure + " hPa</h3>"+
               "<h3><strong>Humidity </strong> : " + data.main.humidity + "%</h3>"+
               "<h3><strong>Minimum Temperature </strong> : " + data.main.temp_min+ "&degC</h3>"+
               "<h3><strong>Maximum Temperature </strong> : " + data.main.temp_max+ "&degC</h3>"+
               "<h3><strong>Wind Speed </strong> : " + data.wind.speed + " m/s</h3>"+
               "<h3><strong>Wind Direction </strong> : " + data.wind.deg+ "&deg</h3>";
    
    }
    function CityWeather(city){
        if(city !=''){
            $.ajax({
                url:"http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + 
                "&appid=6314e3d88198017d234551a6fb2b868f",
                type: "GET",
                datatype:"jsonp",
                success:function(data){
                      var  widget = show(data);
                      $('.result').html(widget);
                      $('#city').val('');
                }
            });
         }
         else{
             $("#error").html('Field Cannot Be Empty....');
         }
    }
    function MyLocationWeather(Lat,Long){
        $.ajax({
            url:"https://api.openweathermap.org/data/2.5/weather?lat="+Lat+"&lon="+Long+"&units=metric"+"&appid=6314e3d88198017d234551a6fb2b868f",
            type:"GET",
            datatype:"jsonp",
            success:function(data){
                var widget = show(data);
                $('.result').html(widget);
                
            }
        });

    }