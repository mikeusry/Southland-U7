(function ($) {

Drupal.behaviors.initModalFormsLogin = {
  attach: function (context, settings) {
    $("a[href*='/user/login'], a[href*='?q=user/login']", context).once('init-modal-forms-login', function () {
      this.href = this.href.replace(/user\/login/,'modal_forms/nojs/login');
    }).addClass('ctools-use-modal ctools-modal-modal-popup-small');
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initModalFormsRegister = {
  attach: function (context, settings) {
    $("a[href*='/user/register'], a[href*='?q=user/register']", context).once('init-modal-forms-register', function () {
      this.href = this.href.replace(/user\/register/,'modal_forms/nojs/register');
    }).addClass('ctools-use-modal ctools-modal-modal-popup-medium');
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initModalFormsPassword = {
  attach: function (context, settings) {
    $("a[href*='/user/password'], a[href*='?q=user/password']", context).once('init-modal-forms-password', function () {
      this.href = this.href.replace(/user\/password/,'modal_forms/nojs/password');
    }).addClass('ctools-use-modal ctools-modal-modal-popup-small');
  }
};

})(jQuery);
;
(function ($) {

function lightbox2_login() {

  $("a[href*='/user/login'], a[href*='?q=user/login']").each(function() {
    $(this).attr({
      href: this.href.replace(/user\/login?/,"user/login/lightbox2"),
      rel: 'lightmodal[|width:250px; height:210px;]'
    });
    $(this).addClass('lightmodal-login');
  });
}

function lightbox2_contact() {
  $("a[href$='/contact'], a[href$='?q=contact']").each(function() {
    if (!this.href.match('admin/build/contact')) {
      $(this).attr({
        href: this.href.replace(/contact?/,"contact/lightbox2"),
        rel: 'lightmodal[|width:450px; height:450px;]'
      });
      $(this).addClass('lightmodal-contact');
    }
  });
}

Drupal.behaviors.initLightboxModal = {
  attach: function(context, settings) {
    if (settings.lightbox2.enable_login) {
      lightbox2_login();
    }
    if (settings.lightbox2.enable_contact) {
     lightbox2_contact();
    }
  }
};
//End jQuery block
}(jQuery));
;
