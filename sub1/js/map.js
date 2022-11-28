 window.onload = function() {
    var container = document.getElementById('map1');
    var options = {
        center: new daum.maps.LatLng(37.4044180, 127.098877),
        level: 2
    };

    var map = new daum.maps.Map(container, options);
    
    // var mapTypeControl = new daum.maps.MapTypeControl();
    // map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

    // var zoomControl = new daum.maps.ZoomControl();
    // map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);

    var imageSrc = './images/content3/maker.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

    var markerPosition  = new daum.maps.LatLng(37.4044180, 127.098877); 
    var marker = new daum.maps.Marker({
        position: markerPosition,
        image:markerImage
    });

    marker.setMap(map);
    
    var content = '<div class="mapText">삼성중공업 판교R&D센터</div>';
    var position = new kakao.maps.LatLng(37.4044180, 127.098877); 

    var overlay = new daum.maps.CustomOverlay({
        map: map,
        position: position,
        content: content     
    });
     
    //두번째 맵
     
      var container2 = document.getElementById('map2');
    var options2 = {
        center: new daum.maps.LatLng(34.8998112, 128.602506),
        level: 2
    };

    var map2 = new daum.maps.Map(container2, options2);
    
    // var mapTypeControl2 = new daum.maps.MapTypeControl();
    // map2.addControl(mapTypeControl2, daum.maps.ControlPosition.TOPRIGHT);

    // var zoomControl2 = new daum.maps.ZoomControl();
    // map2.addControl(zoomControl2, daum.maps.ControlPosition.RIGHT);

    var imageSrc = './images/content3/maker.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(34.8998112, 128.602506); // 마커가 표시될 위치입니다
    
    var markerPosition2  = new daum.maps.LatLng(34.8998112, 128.602506); 
    var marker2 = new daum.maps.Marker({
        position: markerPosition2,
        image:markerImage
    });

    marker2.setMap(map2);

    var content2 = '<div class="mapText">삼성중공업 거제조선소</div>';
    var position2 = new kakao.maps.LatLng(34.8998112, 128.602506); 
    
    var overlay2 = new daum.maps.CustomOverlay({
        map: map2,
        position: position2,
        content: content2       
    }); 
     
     
    //세번째 맵/
     
      var container3 = document.getElementById('map3');
    var options3 = {
        center: new daum.maps.LatLng(36.3931386, 127.402242),
        level: 2
    };

    var map3 = new daum.maps.Map(container3, options3);
    
    // var mapTypeControl3 = new daum.maps.MapTypeControl();
    // map3.addControl(mapTypeControl3, daum.maps.ControlPosition.TOPRIGHT);

    // var zoomControl3 = new daum.maps.ZoomControl();
    // map3.addControl(zoomControl3, daum.maps.ControlPosition.RIGHT);

    var imageSrc = './images/content3/maker.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(36.3931386, 127.402242); // 마커가 표시될 위치입니다
    
    var markerPosition3  = new daum.maps.LatLng(36.3931386, 127.402242); 
    var marker3 = new daum.maps.Marker({
        position: markerPosition3,
        image: markerImage
    });

    marker3.setMap(map3);

    var content3 = '<div class="mapText">삼성중공업 대덕연구소</div>';
    var position3 = new kakao.maps.LatLng(36.3931386, 127.402242); 
    
    var overlay3 = new daum.maps.CustomOverlay({
        map: map3,
        position: position3,
        content: content3         
    }); 
      //네번째 맵   
 //     var container4 = document.getElementById('map4');
 //   var options4 = {
 //       center: new daum.maps.LatLng(37.508461, 127.056251),
 //       level: 2
 //   };
//
 //   var map4 = new daum.maps.Map(container4, options4);
 //   
 //   var mapTypeControl4 = new daum.maps.MapTypeControl();
 //   map4.addControl(mapTypeControl4, daum.maps.ControlPosition.TOPRIGHT);
//
 //   var zoomControl4 = new daum.maps.ZoomControl();
 //   map4.addControl(zoomControl2, daum.maps.ControlPosition.RIGHT);
 //   
 //   var markerPosition4  = new daum.maps.LatLng(37.508461, 127.056251); 
 //   var marker4 = new daum.maps.Marker({
 //       position: markerPosition2
 //   });
//
 //   marker4.setMap(map4);
 //   
 //   var overlay2 = new daum.maps.CustomOverlay({
 //       map: map4,
 //       position: marker4.getPosition()       
 //   }); 
     
     
}

 
 
 
 
