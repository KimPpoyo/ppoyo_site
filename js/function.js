$(document).ready(function(){
  // 페이지 로드 시 유튜브 팝업 표시 (현재 비활성화)
  // setTimeout(function() {
  //   $('#youtube-popup').addClass('show');
  // }, 1000); // 1초 후 팝업 표시

  // 유튜브 갤러리 아이템 클릭 이벤트
  $('.youtube-item').click(function() {
    const videoId = $(this).data('video-id');
    const title = $(this).find('.youtube-title').text();
    
    // 팝업을 먼저 표시
    $('#youtube-popup').addClass('show');
    
    // 팝업이 완전히 나타난 후 iframe src 설정
    setTimeout(function() {
      $('#youtube-iframe').attr('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
    }, 100);
  });

  // 갤러리 이미지 클릭 이벤트
  $('.gallery-con img').click(function() {
    const imageSrc = $(this).attr('src');
    const imageAlt = $(this).attr('alt');
    
    // 팝업 이미지 설정
    $('#popup-image').attr('src', imageSrc);
    $('#popup-image').attr('alt', imageAlt);
    
    // 이미지 팝업 표시
    $('#image-popup').addClass('show');
  });

  // 유튜브 팝업 닫기 기능들
  function closeYoutubePopup() {
    $('#youtube-popup').removeClass('show');
    
    // 유튜브 비디오 완전히 정지 - iframe src를 빈 값으로 설정
    setTimeout(function() {
      $('#youtube-iframe').attr('src', '');
    }, 300);
  }

  // 이미지 팝업 닫기 기능
  function closeImagePopup() {
    $('#image-popup').removeClass('show');
    
    // 이미지 src 초기화
    setTimeout(function() {
      $('#popup-image').attr('src', '');
    }, 300);
  }

  // 닫기 버튼 클릭 (유튜브)
  $('#youtube-popup .popup-close').click(function() {
    closeYoutubePopup();
  });

  // 닫기 버튼 클릭 (이미지)
  $('#image-popup .popup-close').click(function() {
    closeImagePopup();
  });

  // 오버레이(배경) 클릭 시 닫기
  $('#youtube-popup').click(function(e) {
    if (e.target === this) {
      closeYoutubePopup();
    }
  });

  $('#image-popup').click(function(e) {
    if (e.target === this) {
      closeImagePopup();
    }
  });

  // ESC 키로 닫기
  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      if ($('#youtube-popup').hasClass('show')) {
        closeYoutubePopup();
      }
      if ($('#image-popup').hasClass('show')) {
        closeImagePopup();
      }
    }
  });
});