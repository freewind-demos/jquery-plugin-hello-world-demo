(function ($) {
    $.fn.borderRed = function () {
        this.css('border', '1px solid red')
        return this
    }
    $.fn.bgYellow = function () {
        this.css('background-color', 'yellow')
        return this
    }
}(jQuery))