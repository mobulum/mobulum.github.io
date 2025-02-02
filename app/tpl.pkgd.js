(function(module) {
try {
  module = angular.module('tpl');
} catch (e) {
  module = angular.module('tpl', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('common/footer/footer.tpl.html',
    '<footer><div class="container"><div class="col-xs-4">Copyright {{ footerCtrl.getDate() | date:\'yyyy\' }}</div><div class="col-xs-8"><ul class="footer-menu"><li scroll-to="contact"><a href="#contact">{{ \'Contact\' | translate }}</a></li><li>T: <a href="tel:606248270">606 248 270</a></li><li>M: <a href="mailto:web@mobulum.com">web@mobulum.com</a></li><li><a href="https://www.facebook.com/mobulum/"><i class="fa fa-facebook"></i></a></li><li><a href="http://twitter.com/mobulum_com"><i class="fa fa-twitter"></i></a></li></ul></div></div></footer>');
}]);
})();

(function(module) {
try {
  module = angular.module('tpl');
} catch (e) {
  module = angular.module('tpl', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('common/header/header.tpl.html',
    '<nav class="main-menu"><ul id="nav-menu"><li scroll-to="about"><div class="menu-pointer"></div></li><li scroll-to="vehiclehistory"><div class="menu-pointer"></div></li><li scroll-to="festivals"><div class="menu-pointer"></div></li><li scroll-to="lottery"><div class="menu-pointer"></div></li><li scroll-to="safe-bus"><div class="menu-pointer"></div></li></ul></nav>');
}]);
})();

(function(module) {
try {
  module = angular.module('tpl');
} catch (e) {
  module = angular.module('tpl', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/home/home.tpl.html',
    '<section id="about" data-anchor="about" class="about-us full-screen"><div class="o-nas background-image full-screen" data-parallax="scroll" data-speed="0.55" data-image-src="app/img/main/lamp.png"><div class="background-image full-screen" data-parallax="scroll" data-speed="0.5" data-image-src="app/img/main/bg-desk.jpg"></div></div></section><section id="vehiclehistory" data-anchor="vehiclehistory" class="offer full-screen"><div class="left-image full-screen" data-parallax="scroll" data-speed="0.8" data-image-src="app/img/main/historia-pojazdu.png"><div class="background-image full-screen" data-parallax="scroll" data-speed="0.5" data-image-src="app/img/main/historia-pojazdu-bg-1.jpg"><div class="row"><div class="container"><div class="col-sm-offset-8 col-sm-4 col-xs-12 slide-description"><h2 class="wow fadeInUp" data-wow-duration="1s">{{ \'Vehicle history app\' | translate }}</h2><p class="wow fadeInUp" data-wow-duration="1s">{{ \'Vehicle history app description\' | translate }}</p><div class="wow fadeInUp button-container" data-wow-duration="1s"><a analytics-on="click" analytics-event="vehiclehistory-wp" analytics-category="Store" href="https://www.microsoft.com/pl-pl/store/apps/historia-pojazdu/9nblgggzpg4s"><img src="app/img/main/icon-wp.png" alt="windows phone store"></a> <a analytics-on="click" analytics-event="vehiclehistory-play" analytics-category="Store" href="https://play.google.com/store/apps/details?id=io.vehiclehistory"><img src="app/img/main/icon-android.png" alt="play strore"></a> <a analytics-on="click" analytics-event="vehiclehistory-ios" analytics-category="Store" href="https://itunes.apple.com/pl/app/historia-pojazdu/id1024216603?l=pl&mt=8"><img src="app/img/main/icon-ios.png" alt="itunes store"></a></div></div></div></div></div></div></section><section id="festivals" data-anchor="festivals" class="festivals full-screen"><div class="background-image full-screen" data-parallax="scroll" data-speed="0.5" data-image-src="app/img/main/bg-festiwale.png"><div class="row"><div class="collage-container"><img src="app/img/main/festiwale-down.png" alt=""> <img src="app/img/main/festiwale-middle.png" alt=""> <img src="app/img/main/festiwale-top.png" alt=""></div><div class="container"><div class="col-sm-4 col-xs-12 slide-description"><h2 class="wow fadeInUp" data-wow-duration="1s">{{ \'Festivals app\' | translate }}</h2><p class="wow fadeInUp" data-wow-duration="1s">{{ \'Festivals app description\' | translate }}</p><div class="wow fadeInUp button-container" data-wow-duration="1s"><a analytics-on="click" analytics-event="konwenty-wp" analytics-category="Store" href="https://www.microsoft.com/pl-pl/store/apps/konwenty/9nblggh1xtl2"><img src="app/img/main/icon-wp.png" alt="windows phone store"></a></div></div></div></div></div></section><section id="lottery" data-anchor="lottery" class="contact full-screen"><div class="left-image full-screen" data-parallax="scroll" data-speed="0.8" data-image-src="app/img/main/loteria.png"><div class="background-image full-screen" data-parallax="scroll" data-speed="0.5" data-image-src="app/img/main/bg-loteria.png"><div class="row"><div class="container"><div class="col-sm-offset-8 col-sm-4 col-xs-12 slide-description"><h2 class="wow fadeInUp" data-wow-duration="1s">{{ \'Receipts app\' | translate }}</h2><p class="wow fadeInUp" data-wow-duration="1s">{{ \'Receipts app description\' | translate }}</p><div class="wow fadeInUp button-container" data-wow-duration="1s"><a analytics-on="click" analytics-event="lottery-wp" analytics-category="Store" href="https://www.microsoft.com/pl-pl/store/apps/loteria-paragonowa/9nblggh6cj2d"><img src="app/img/main/icon-wp.png" alt="windows phone store"></a> <a analytics-on="click" analytics-event="lottery-android" analytics-category="Store" href="https://play.google.com/store/apps/details?id=tech.receipts.android"><img src="app/img/main/icon-android.png" alt="play strore"></a></div></div></div></div></div></div></section><section id="safe-bus" data-anchor="safe-bus" class="offer full-screen"><div class="left-image full-screen" data-parallax="scroll" data-speed="0.8" data-image-src="app/img/main/safe-bus.png"><div class="background-image full-screen" data-parallax="scroll" data-speed="0.5" data-image-src="app/img/main/historia-pojazdu-bg-1.jpg"><div class="row"><div class="container"><div class="col-sm-offset-8 col-sm-4 col-xs-12 slide-description"><h2 class="wow fadeInUp" data-wow-duration="1s">{{ \'Safe bus app\' | translate }}</h2><p class="wow fadeInUp" data-wow-duration="1s">{{ \'Safe bus app description\' | translate }}</p><div class="wow fadeInUp button-container" data-wow-duration="1s"><a analytics-on="click" analytics-event="safe-bus-wp" analytics-category="Store" href="https://www.microsoft.com/pl-pl/store/apps/bezpieczny-autobus/9nblggh20ckj"><img src="app/img/main/icon-wp.png" alt="windows phone store"></a> <a analytics-on="click" analytics-event="safe-bus-play" analytics-category="Store" href="https://play.google.com/store/apps/details?id=io.vehiclehistory.safebus.android"><img src="app/img/main/icon-android.png" alt="play strore"></a></div></div></div></div></div></div></section>');
}]);
})();
