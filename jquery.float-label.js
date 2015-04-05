(function ($) {

    $.fn.floatLabel = function (options) {

        var defaults = {
                populatedClass: 'populated',
                focusedClass: 'focused',
                floatedFocusedClass: 'float',
                floatOnFocus: false
            },
            settings = $.extend({}, defaults, options);

        return this.each(function () {
            var element = $(this),
                label = element.find('label'),
                input = element.find('textarea, input');

            if (input.val() == '') {
                if (input.attr('placeholder') == '') {
                    input.val(label.text());
                }
            } else {
                element.addClass(settings.populatedClass);
            }

            input.on('focus', function () {
                element.addClass(settings.focusedClass);
                if (settings.floatOnFocus) {
                    element.addClass(settings.floatedFocusedClass);
                }

                if (input.val() === label.text() || input.attr('placeholder') === label.text()) {
                    if (input.attr('placeholder') == '') {
                        input.val('');
                    }
                } else {
                    element.addClass(settings.populatedClass);
                }

            });

            input.on('blur', function () {
                element.removeClass(settings.focusedClass);
                element.removeClass(settings.floatedFocusedClass);

                if (!input.val()) {
                    if (input.attr('placeholder') == '') {
                        input.val(label.text());
                    }
                    element.removeClass(settings.populatedClass);
                }

            });

            input.on('keyup', function () {
                if (input.val() == '') {
                    element.removeClass(settings.populatedClass);
                } else {
                    element.addClass(settings.populatedClass);
                }
            });

        });
    };

})(jQuery);
